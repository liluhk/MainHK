const { Cart } = window.HealthyKitchenDesignSystem_f4c763;

function Toast({ show, message }) {
  return (
    <div style={{
      position: "fixed", bottom: "28px", left: "50%", transform: `translateX(-50%) translateY(${show ? "0" : "250%"})`,
      background: "var(--green-800)", color: "var(--ivory-50)", padding: "14px 22px", borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-lg)", fontFamily: "var(--font-body)", fontSize: "14px", letterSpacing: "var(--tracking-wide)",
      maxWidth: "92vw", boxSizing: "border-box", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
      display: "flex", alignItems: "center", gap: "10px", zIndex: 300,
      visibility: show ? "visible" : "hidden",
      transition: "transform var(--dur-slow) var(--ease-out), visibility 0s linear " + (show ? "0s" : "var(--dur-slow)"), pointerEvents: "none",
    }}>
      <i data-lucide="check-circle" style={{ width: 17, height: 17 }}></i>{message}
    </div>
  );
}

function CartDrawer({ open, items, depositAmount, onClose, onQty, onRemove, onCheckout, onExplore }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, background: "rgba(28,33,29,0.44)",
          opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
          transition: "opacity var(--dur-base) var(--ease-out)", zIndex: 200,
        }}
      ></div>
      <div style={{
        position: "fixed", top: 0, right: 0, height: "100%", width: "min(460px, 94vw)",
        transform: open ? "translateX(0)" : "translateX(105%)",
        transition: "transform var(--dur-slow) var(--ease-out)", zIndex: 201,
        padding: "18px", display: "flex", overflowY: "auto",
      }}>
        <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "flex-start" }}>
          <button
            onClick={onClose}
            aria-label="Close cart"
            style={{
              position: "absolute", top: "-4px", right: "-4px", zIndex: 2,
              width: "34px", height: "34px", borderRadius: "var(--radius-circle)",
              border: "1px solid var(--border-subtle)", background: "var(--surface-card)",
              boxShadow: "var(--shadow-sm)", cursor: "pointer", color: "var(--text-body)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <i data-lucide="x" style={{ width: 17, height: 17 }}></i>
          </button>
          <Cart
            items={items}
            depositAmount={depositAmount}
            onQtyChange={onQty}
            onRemove={onRemove}
            onCheckout={onCheckout}
            onExplore={onExplore}
            style={{ maxWidth: "none", width: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

function App() {
  const BAG_DEPOSIT = 180;
  const [route, setRoute] = React.useState({ name: "home" });
  const [items, setItems] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [toast, setToast] = React.useState({ show: false, message: "" });

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  const scrollToPlans = () => {
    const el = document.getElementById("meal-plans");
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    clearTimeout(window.__hkToast);
    window.__hkToast = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2400);
  };

  const handleNav = (label) => {
    if (label === "Meal Plans") {
      if (route.name !== "home") { setRoute({ name: "home" }); setTimeout(scrollToPlans, 60); }
      else scrollToPlans();
    } else if (label === "Blog") {
      setRoute({ name: "blog" }); window.scrollTo({ top: 0 });
    } else if (label === "About Us") {
      setRoute({ name: "about" }); window.scrollTo({ top: 0 });
    } else if (label === "Consultations") {
      setRoute({ name: "consultations" }); window.scrollTo({ top: 0 });
    } else if (label === "Intolerance Testing") {
      setRoute({ name: "intolerance" }); window.scrollTo({ top: 0 });
    } else if (label === "Privacy Policy") {
      setRoute({ name: "privacy" }); window.scrollTo({ top: 0 });
    } else if (label === "Terms & Conditions") {
      setRoute({ name: "terms" }); window.scrollTo({ top: 0 });
    } else {
      if (route.name !== "home") setRoute({ name: "home" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openPlan = (plan) => { setRoute({ name: "product", plan }); window.scrollTo({ top: 0 }); };
  const goHome = () => setRoute({ name: "home" });
  const openBlogPost = (post) => { setRoute({ name: "blogPost", post }); window.scrollTo({ top: 0 }); };
  const goBlogList = () => { setRoute({ name: "blog" }); window.scrollTo({ top: 0 }); };

  const planThumb = (slug) => {
    const src = (window.HK_PLAN_COVERS || {})[slug];
    if (!src) return null;
    return <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />;
  };

  const addToCart = (plan, detail) => {
    const days = detail.days || 7;
    const price = Math.max(1, Math.round(detail.total / days));
    const options = [detail.mealLabel, detail.calorieLabel].filter(Boolean);
    const excluded = detail.excluded || [];
    setItems((prev) => {
      const exists = prev.some((it) => it.id === plan.slug);
      if (exists) return prev.map((it) => it.id === plan.slug ? { ...it, price, qty: days, meta: detail.meals, options, excluded, image: planThumb(plan.slug) } : it);
      return [...prev, { id: plan.slug, title: plan.name, meta: detail.meals, options, excluded, price, qty: days, tags: plan.tags, image: planThumb(plan.slug) }];
    });
    showToast(`${plan.name} added · ${detail.total} AED`);
    setDrawerOpen(true);
  };

  const setQty = (id, qty) => setItems((prev) => prev.map((it) => it.id === id ? { ...it, qty } : it));
  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const goCheckout = () => { setDrawerOpen(false); setRoute({ name: "checkout" }); window.scrollTo({ top: 0 }); };

  const goToPayment = (form, summary) => { setRoute({ name: "payment", form, summary }); window.scrollTo({ top: 0 }); };

  const finalizeOrder = () => {
    const { form, summary } = route;
    const lines = items.map((it) => `• ${it.title} — ${it.qty} days (${(it.price * it.qty).toLocaleString("en-US")} AED)${it.excluded && it.excluded.length ? ` [No: ${it.excluded.join(", ")}]` : ""}`).join("\n");
    const discountLine = summary && summary.discountAmount > 0 ? `\n${summary.discountLabel}: \u2212 ${summary.discountAmount.toLocaleString("en-US")} AED` : "";
    const depositLine = summary && summary.depositAmount > 0 ? `\nRefundable bag deposit: ${summary.depositAmount.toLocaleString("en-US")} AED` : "";
    const total = summary ? summary.total : items.reduce((s, it) => s + it.price * it.qty, 0);
    const whatsappLine = form.whatsapp ? `\nWhatsApp: ${form.whatsapp}` : "";
    const msg = `Hi Healthy Kitchen! I'd like to place an order.\n\n${lines}${discountLine}${depositLine}\n\nTotal: ${total.toLocaleString("en-US")} AED\n\nName: ${form.name}\nPhone: ${form.phone}${whatsappLine}\nEmail: ${form.email}\nAddress: ${form.address}${form.area ? ", " + form.area : ""}\nStart date: ${form.date}\nDelivery time: ${form.timeSlotLabel || ""}${form.notes ? "\nNotes: " + form.notes : ""}\n\nPayment: Paid online`;
    window.open(`https://wa.me/971585129792?text=${encodeURIComponent(msg)}`, "_blank");
    setItems([]);
  };

  const explore = () => { setDrawerOpen(false); if (route.name !== "home") setRoute({ name: "home" }); setTimeout(scrollToPlans, 80); };

  return (
    <>
      <Header cartCount={items.length} onNav={handleNav} onHome={goHome} onCart={() => setDrawerOpen(true)} onSelectPlan={openPlan} />
      {route.name === "home" ? (
        <main>
          <HeroKinetic onExplore={scrollToPlans} />
          <QuoteStrip />
          <MealPlans onSelect={openPlan} />
          <WhyChooseUs onExplore={scrollToPlans} />
          <Promo />
          <Reviews />
          <FAQ />
        </main>
      ) : route.name === "checkout" ? (
        <main><Checkout items={items} currency="AED" depositAmount={BAG_DEPOSIT} onBack={goHome} onContinue={goToPayment} /></main>
      ) : route.name === "payment" ? (
        <main><Payment total={route.summary ? route.summary.total : 0} currency="AED" onBack={() => setRoute({ name: "checkout" })} onDone={goHome} onSuccess={finalizeOrder} /></main>
      ) : route.name === "blog" ? (
        <main><BlogList onSelect={openBlogPost} /></main>
      ) : route.name === "blogPost" ? (
        <main><BlogArticle post={route.post} onBack={goBlogList} onSelect={openBlogPost} /></main>
      ) : route.name === "about" ? (
        <main><AboutUs onExplore={explore} /></main>
      ) : route.name === "consultations" ? (
        <main><Consultations /></main>
      ) : route.name === "intolerance" ? (
        <main><IntoleranceTesting /></main>
      ) : route.name === "privacy" ? (
        <main><PrivacyPolicy /></main>
      ) : route.name === "terms" ? (
        <main><TermsConditions /></main>
      ) : (
        <main><ProductDetail plan={route.plan} onBack={goHome} onAdd={addToCart} /></main>
      )}
      <Footer onNav={handleNav} />
      <CartDrawer
        open={drawerOpen}
        items={items}
        depositAmount={BAG_DEPOSIT}
        onClose={() => setDrawerOpen(false)}
        onQty={setQty}
        onRemove={removeItem}
        onCheckout={goCheckout}
        onExplore={explore}
      />
      <Toast show={toast.show} message={toast.message} />
    </>
  );
}

window.App = App;
