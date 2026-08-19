/* @ds-bundle: {"format":4,"namespace":"HealthyKitchenDesignSystem_f4c763","components":[{"name":"Cart","sourcePath":"components/commerce/Cart.jsx"},{"name":"FeatureCard","sourcePath":"components/commerce/FeatureCard.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/commerce/Cart.jsx":"f048167a69e4","components/commerce/FeatureCard.jsx":"c39bc82d7fda","components/commerce/ProductCard.jsx":"7a6a14002ff9","components/core/Button.jsx":"4a263e03369e","components/core/SectionHeading.jsx":"ac9f859cb3d0","components/core/Tag.jsx":"769c5e4ad1e8","components/forms/Input.jsx":"e8b8abd646ba","ui_kits/website/AboutUs.jsx":"ff10f08e4aed","ui_kits/website/AnticandidaExtras.jsx":"895adea404a7","ui_kits/website/App.jsx":"6e7dee94e978","ui_kits/website/AutoimmuneExtras.jsx":"f8d7bc46af39","ui_kits/website/BlogArticle.jsx":"12cf96d5f65b","ui_kits/website/BlogCard.jsx":"cef8552634b0","ui_kits/website/BlogList.jsx":"5b17928d2200","ui_kits/website/Checkout.jsx":"15fb37569885","ui_kits/website/Consultations.jsx":"88364a91fb80","ui_kits/website/DetoxCleanseExtras.jsx":"8762744ac1fd","ui_kits/website/EasyDetoxExtras.jsx":"bfa5b98bb8ca","ui_kits/website/Footer.jsx":"42a0e57229eb","ui_kits/website/GutHealingExtras.jsx":"736a34608a51","ui_kits/website/Header.jsx":"217dc0567e7e","ui_kits/website/Hero.jsx":"540c287d03ef","ui_kits/website/HeroV2.jsx":"fc75752ce01d","ui_kits/website/IngredientModal.jsx":"991529d56543","ui_kits/website/IntoleranceTesting.jsx":"2ee3d2874c39","ui_kits/website/LongevityExtras.jsx":"95e800b27a1f","ui_kits/website/LowFodmapExtras.jsx":"5cae4e809156","ui_kits/website/MealPlans.jsx":"ac57b34d0b37","ui_kits/website/MuscleUpExtras.jsx":"d78f1c3b4b8f","ui_kits/website/MuscleUpMenuFAQ.jsx":"113d2b76f779","ui_kits/website/Payment.jsx":"a4e68beeb855","ui_kits/website/PrivacyPolicy.jsx":"fc5b71f34667","ui_kits/website/ProductDetail.jsx":"5e87fe571f97","ui_kits/website/QuoteStrip.jsx":"c2c1817f8f4a","ui_kits/website/TermsConditions.jsx":"4952cded899f","ui_kits/website/WhyChooseUs.jsx":"bb99ebb61766","ui_kits/website/data.js":"8086fb71be5e","ui_kits/website/image-slot.js":"9309434cb09c","ui_kits/website/intolerance-data.js":"e7194c2a3750"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HealthyKitchenDesignSystem_f4c763 = window.HealthyKitchenDesignSystem_f4c763 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/FeatureCard.jsx
try { (() => {
/**
 * Healthy Kitchen — FeatureCard
 * A "Why Choose Us" benefit block: small icon/badge, title, supporting copy.
 * Minimal, centered, no heavy container — sits on the ivory field.
 */
function FeatureCard({
  icon = null,
  title,
  children,
  align = "center",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: "34ch",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-circle)",
      background: "var(--green-50)",
      color: "var(--green-700)",
      border: "1px solid var(--green-200)"
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "20px",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.55,
      color: "var(--text-muted)"
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Healthy Kitchen — Button
 * Primary actions use solid forest green; uppercase Roboto Condensed with open tracking.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "12px"
    },
    md: {
      padding: "12px 22px",
      fontSize: "13px"
    },
    lg: {
      padding: "16px 30px",
      fontSize: "15px"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-wide)",
    lineHeight: 1,
    border: "1.5px solid transparent",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    },
    secondary: {
      background: "var(--ivory-200)",
      color: "var(--green-800)"
    },
    ghost: {
      background: "transparent",
      color: "var(--green-700)",
      borderColor: "var(--green-700)"
    },
    inverse: {
      background: "var(--ivory-50)",
      color: "var(--green-800)"
    },
    link: {
      background: "transparent",
      color: "var(--green-700)",
      textTransform: "none",
      letterSpacing: 0,
      padding: "4px 0",
      borderRadius: 0
    }
  };
  const Tag = as;
  const hoverClass = `hk-btn-${variant}`;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: hoverClass,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: as === "button" ? disabled : undefined
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Healthy Kitchen — SectionHeading
 * The signature eyebrow + serif display title used across the site.
 */
function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "dark",
  size = "lg",
  children,
  style = {}
}) {
  const sizes = {
    md: "28px",
    lg: "40px",
    xl: "56px"
  };
  const colors = tone === "light" ? {
    eyebrow: "var(--green-200)",
    title: "var(--ivory-50)",
    body: "var(--green-100)"
  } : {
    eyebrow: "var(--text-faint)",
    title: "var(--text-strong)",
    body: "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: colors.eyebrow
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      lineHeight: 1.05,
      fontSize: sizes[size],
      color: colors.title
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.5,
      color: colors.body,
      maxWidth: "56ch"
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Healthy Kitchen — Tag
 * Small uppercase label: dietary flags (VEGAN, GLUTEN-FREE), categories, pricing chips.
 */
function Tag({
  children,
  tone = "green",
  variant = "soft",
  size = "md",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "10px",
      padding: "3px 8px",
      letterSpacing: "0.14em"
    },
    md: {
      fontSize: "11px",
      padding: "5px 11px",
      letterSpacing: "0.12em"
    }
  };
  const tones = {
    green: {
      soft: ["var(--green-100)", "var(--green-800)"],
      solid: ["var(--green-700)", "var(--ivory-50)"],
      outline: ["transparent", "var(--green-700)"]
    },
    clay: {
      soft: ["var(--clay-100)", "var(--clay-600)"],
      solid: ["var(--clay-600)", "var(--ivory-50)"],
      outline: ["transparent", "var(--clay-600)"]
    },
    gold: {
      soft: ["var(--gold-100)", "#7a5e1f"],
      solid: ["var(--gold-500)", "var(--ink-900)"],
      outline: ["transparent", "var(--gold-500)"]
    },
    neutral: {
      soft: ["var(--ivory-200)", "var(--ink-700)"],
      solid: ["var(--ink-700)", "var(--ivory-50)"],
      outline: ["transparent", "var(--ink-700)"]
    }
  };
  const [bg, fg] = tones[tone][variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      textTransform: "uppercase",
      background: bg,
      color: fg,
      border: variant === "outline" ? `1px solid ${fg}` : "1px solid transparent",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Cart.jsx
try { (() => {
/**
 * Healthy Kitchen — Cart
 * The order summary surface: a list of meal-plan line items with day steppers,
 * a subtotal / first-order discount / delivery breakdown, and a WhatsApp checkout.
 * Works as a slide-out drawer panel or an inline block. Prices are per day; the
 * line total is unit price × number of days (qty).
 *
 * Line item shape:
 *   { id, title, meta, price, qty, image?, tags?, options?, excluded? }
 */

const fmt = n => Number(n).toLocaleString("en-US");
function Stepper({
  value,
  min = 1,
  onChange
}) {
  const btn = {
    width: "26px",
    height: "26px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid var(--border-default)",
    borderRadius: "var(--radius-sm)",
    background: "var(--surface-card)",
    color: "var(--text-brand)",
    fontFamily: "var(--font-body)",
    fontSize: "16px",
    lineHeight: 1,
    cursor: "pointer",
    userSelect: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fewer days",
    style: {
      ...btn,
      opacity: value <= min ? 0.4 : 1,
      cursor: value <= min ? "not-allowed" : "pointer"
    },
    onClick: () => value > min && onChange?.(value - 1)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: "44px",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-body)"
    }
  }, value, " ", value === 1 ? "day" : "days"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "More days",
    style: btn,
    onClick: () => onChange?.(value + 1)
  }, "+"));
}
function CartLine({
  item,
  currency,
  onQtyChange,
  onRemove
}) {
  const lineTotal = Number(item.price) * Number(item.qty);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      padding: "18px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: "68px",
      height: "68px",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--ivory-200)",
      display: "flex"
    }
  }, item.image || /*#__PURE__*/React.createElement("span", {
    style: {
      margin: "auto",
      fontFamily: "var(--font-body)",
      fontSize: "9px",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--ink-300)"
    }
  }, "Photo")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "16px",
      color: "var(--text-strong)",
      lineHeight: 1.15
    }
  }, item.title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Remove ${item.title}`,
    onClick: () => onRemove?.(item.id),
    style: {
      flex: "0 0 auto",
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-faint)",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      lineHeight: 1,
      padding: "2px"
    }
  }, "\u2715")), item.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12.5px",
      color: "var(--text-muted)"
    }
  }, item.meta), (item.options && item.options.length > 0 || item.tags && item.tags.length > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      flexWrap: "wrap"
    }
  }, (item.options || []).map((o, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: "o" + i,
    tone: "neutral",
    variant: "outline",
    size: "sm"
  }, o)), (item.tags || []).map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: "t" + i,
    tone: "green",
    variant: "soft",
    size: "sm"
  }, t))), item.excluded && item.excluded.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "11.5px",
      color: "var(--text-faint)"
    }
  }, "Excluding: ", item.excluded.join(", ")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "10px",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    value: Number(item.qty),
    onChange: q => onQtyChange?.(item.id, q)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "1px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "10.5px",
      color: "var(--text-faint)",
      whiteSpace: "nowrap"
    }
  }, fmt(item.price), " ", currency, " / day"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, fmt(lineTotal), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      fontWeight: 500,
      color: "var(--text-faint)"
    }
  }, currency))))));
}
function SummaryRow({
  label,
  value,
  muted,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "13.5px",
      color: accent ? "var(--text-brand)" : muted ? "var(--text-muted)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: accent ? 700 : 500
    }
  }, value));
}
function Cart({
  items = [],
  currency = "AED",
  title = "Your Cart",
  discountLabel = "First order −10%",
  discountAmount = 0,
  deliveryLabel = "Free",
  depositLabel = "Refundable bag deposit",
  depositAmount = 0,
  note = "Delivered daily across Dubai, 7 AM – 12 PM.",
  checkoutLabel = "Checkout",
  onQtyChange,
  onRemove,
  onCheckout,
  onExplore,
  style = {}
}) {
  const count = items.reduce((n, it) => n + Number(it.qty || 0), 0);
  const subtotal = items.reduce((s, it) => s + Number(it.price) * Number(it.qty), 0);
  const total = Math.max(0, subtotal - Number(discountAmount || 0)) + Number(depositAmount || 0);
  const empty = items.length === 0;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: "420px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      padding: "22px 24px 16px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "24px",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, count, " ", count === 1 ? "day" : "days")), empty ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
      padding: "48px 24px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "14.5px",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      maxWidth: "30ch"
    }
  }, "Your cart is empty. Pick a functional meal plan tailored to your goals."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    onClick: onExplore
  }, "Explore Meal Plans")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px",
      maxHeight: "340px",
      overflowY: "auto"
    },
    className: "hk-rail"
  }, items.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.id,
    item: it,
    currency: currency,
    onQtyChange: onQtyChange,
    onRemove: onRemove
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "20px 24px",
      background: "var(--bg-subtle)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(SummaryRow, {
    label: "Subtotal",
    value: `${fmt(subtotal)} ${currency}`,
    muted: true
  }), Number(discountAmount) > 0 && /*#__PURE__*/React.createElement(SummaryRow, {
    label: discountLabel,
    value: `− ${fmt(discountAmount)} ${currency}`,
    accent: true
  }), /*#__PURE__*/React.createElement(SummaryRow, {
    label: "Delivery",
    value: deliveryLabel,
    muted: true
  }), Number(depositAmount) > 0 && /*#__PURE__*/React.createElement(SummaryRow, {
    label: depositLabel,
    value: `${fmt(depositAmount)} ${currency}`,
    muted: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginTop: "6px",
      paddingTop: "14px",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-body)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "30px",
      fontWeight: 400,
      color: "var(--text-brand)",
      lineHeight: 1
    }
  }, fmt(total), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 500,
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, currency))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onCheckout,
    style: {
      marginTop: "8px"
    }
  }, checkoutLabel), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: "11.5px",
      letterSpacing: "0.04em",
      color: "var(--text-faint)"
    }
  }, note))));
}
Object.assign(__ds_scope, { Cart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Cart.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/**
 * Healthy Kitchen — ProductCard
 * The meal-plan card: image on top, title, short blurb, "From N AED / day", and a View action.
 * Pass `image` (an <img>, image-slot, or any node) for the photo area.
 */
function ProductCard({
  title,
  blurb,
  price,
  unit = "/ day",
  currency = "AED",
  tags = [],
  image = null,
  ctaLabel = "View",
  onView,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hk-card",
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      overflow: "hidden",
      background: "var(--ivory-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-card-img",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex"
    }
  }, image || /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "auto",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--ink-300)"
    }
  }, "Photo")), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12px",
      left: "12px",
      display: "flex",
      gap: "6px"
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    tone: "clay",
    variant: "solid",
    size: "sm"
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "22px",
      color: "var(--text-strong)"
    }
  }, title), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "14.5px",
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, "From ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-brand)",
      fontWeight: 700,
      fontSize: "17px"
    }
  }, price, " ", currency), " ", unit), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onView
  }, ctaLabel))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Healthy Kitchen — Input
 * Clean single-line field with optional label; hairline border, green focus ring.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  as = "input",
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const Field = as;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    type: as === "input" ? type : undefined,
    className: "hk-input",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      color: "var(--text-strong)",
      background: "var(--white)",
      border: `1.5px solid ${error ? "var(--error)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      padding: as === "textarea" ? "12px 14px" : "12px 14px",
      width: "100%",
      boxSizing: "border-box",
      outline: "none",
      minHeight: as === "textarea" ? "96px" : "auto",
      resize: as === "textarea" ? "vertical" : undefined,
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: error ? "var(--error)" : "var(--text-faint)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutUs.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  Tag
} = window.HealthyKitchenDesignSystem_f4c763;

/* ---------- Hero ---------- */
function AboutHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2 hk-hero-grid",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px 64px",
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "About us"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.02,
      fontSize: "clamp(36px, 5.5vw, 60px)",
      color: "var(--text-strong)"
    }
  }, "We craft wellness", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-700)"
    }
  }, "with every bite")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "18px",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: "48ch"
    }
  }, "We believe in the power of truly nutritious, clean ingredients \u2014 not just to feed you, but to elevate your whole well-being. Every meal is built from the finest clean ingredients, aligned with your health goals and medical needs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Clean ingredients"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Doctor-recommended"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Chef-crafted"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/about-hero.jpg",
    alt: "Healthy Kitchen delivery bag with meals",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "4 / 5",
      objectFit: "cover",
      borderRadius: "18px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-18px",
      bottom: "30px",
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "30px",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, "since day one"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, "clinic \xD7 clean-food restaurant")))));
}

/* ---------- Our Story ---------- */
function AboutStory() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "64px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/about-story.jpg",
    alt: "Plating a fresh salad",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "4 / 5",
      objectFit: "cover",
      borderRadius: "18px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our story",
    title: "Where medicine met the kitchen",
    align: "left"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.65,
      color: "var(--text-body)"
    }
  }, "Healthy Kitchen was born from the synergy of a preventive clinic and a clean-food restaurant \u2014 created to bridge the gap between complex medical dietary protocols and everyday meal planning. Our menu is meticulously crafted by expert nutritionists and recommended by doctors, so every meal genuinely supports your health journey."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-50, rgba(46,89,60,0.06))",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "20px 22px",
      display: "flex",
      gap: "16px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "microscope",
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)",
      flexShrink: 0,
      marginTop: "2px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.55,
      color: "var(--text-body)"
    }
  }, "We follow evidence, not trends. Every protocol on our menu is grounded in published research \u2014 one example below: a peer-reviewed study on the Autoimmune Protocol Diet and quality of life in inflammatory bowel disease."), /*#__PURE__*/React.createElement("a", {
    href: "https://pubmed.ncbi.nlm.nih.gov/31832627/",
    target: "_blank",
    rel: "noopener",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--green-700)",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px"
    }
  }, "Read a sample study ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 14,
      height: 14
    }
  })))))));
}

/* ---------- Our Values — interactive cards ---------- */
const HK_ABOUT_VALUES = [{
  icon: "leaf",
  title: "Pure Ingredients",
  body: "Only clean, natural ingredients. Our food is free from artificial additives, preservatives, and anything that isn't pure and wholesome."
}, {
  icon: "sun",
  title: "Freshness Guaranteed",
  body: "Every dish is prepared fresh daily to preserve its nutritional integrity and vitamin content — nothing sits, nothing waits."
}, {
  icon: "recycle",
  title: "Sustainability",
  body: "We avoid pesticides and strive for the cleanest possible food production methods, from sourcing to packaging."
}];
function AboutValues() {
  const [hovered, setHovered] = React.useState(-1);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [hovered]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our values",
    title: "One standard, no exceptions"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px"
    }
  }, HK_ABOUT_VALUES.map((v, i) => {
    const isHover = hovered === i;
    return /*#__PURE__*/React.createElement("div", {
      key: v.title,
      onMouseEnter: () => setHovered(i),
      onMouseLeave: () => setHovered(-1),
      style: {
        background: isHover ? "var(--green-700)" : "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        boxShadow: isHover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transform: isHover ? "translateY(-6px)" : "none",
        transition: "all var(--dur-slow) var(--ease-out)",
        cursor: "default"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        border: `1.5px solid ${isHover ? "rgba(253,252,248,0.4)" : "var(--green-300)"}`,
        background: isHover ? "rgba(253,252,248,0.08)" : "var(--green-50, rgba(46,89,60,0.06))",
        transition: "all var(--dur-slow) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": v.icon,
      style: {
        width: 26,
        height: 26,
        color: isHover ? "var(--green-200)" : "var(--green-700)"
      }
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--tracking-wide)",
        fontSize: "var(--text-lg, 22px)",
        color: isHover ? "var(--ivory-50)" : "var(--text-strong)",
        transition: "color var(--dur-slow) var(--ease-out)"
      }
    }, v.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        lineHeight: 1.62,
        color: isHover ? "var(--green-100)" : "var(--text-muted)",
        transition: "color var(--dur-slow) var(--ease-out)"
      }
    }, v.body));
  }))));
}

/* ---------- Our Approach — green band ---------- */
function AboutApproach() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      left: "-30px",
      bottom: "-38px",
      fontFamily: "var(--font-script)",
      fontSize: "220px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "heal"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "64px",
      alignItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "Our approach"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "clamp(30px, 4.5vw, 44px)",
      lineHeight: "var(--leading-tight)",
      color: "var(--ivory-50)"
    }
  }, "Strict protocols,", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "6px",
      color: "var(--green-300)"
    }
  }, "without the struggle")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.65,
      color: "var(--green-100)",
      maxWidth: "50ch"
    }
  }, "Following a strict dietary protocol like Anti-Candida or the Autoimmune Protocol (AIP) at home is hard. We built Healthy Kitchen so you can stay on plan without compromising on taste or enjoyment \u2014 while we focus on calming inflammation, restoring gut health and giving your body the nutrients it needs to feel well."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => window.dispatchEvent(new CustomEvent("hk-about-explore"))
  }, "Explore Meal Plans"))), /*#__PURE__*/React.createElement("img", {
    src: "assets/about-approach.jpg",
    alt: "Chef holding a prawn and arugula bowl",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "4 / 5",
      objectFit: "cover",
      borderRadius: "18px",
      display: "block"
    }
  })));
}

/* ---------- Our Philosophy — interactive accordion ---------- */
const HK_ABOUT_PHILOSOPHY = [{
  n: "01",
  title: "No Quick Fixes",
  body: "We don't endorse rapid weight-loss plans. Sustainable health is the goal — cleansing the body of toxins rather than extreme calorie restriction or fasting."
}, {
  n: "02",
  title: "Holistic Health",
  body: "Lose weight naturally, without the rebound. We don't count calories; we concentrate on the nutritional value your cells actually need."
}, {
  n: "03",
  title: "Personalised Nutrition",
  body: "Every person is unique, and so are their nutritional needs. Our meals support individual health requirements and stay compliant with protocols like AIP."
}];
function AboutPhilosophy() {
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [open]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "64px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/about-philosophy.jpg",
    alt: "Bowls of clean whole-food ingredients",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "4 / 5",
      objectFit: "cover",
      borderRadius: "18px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "-14px",
      top: "28px",
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "14px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "26px",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, "no calorie counting"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our philosophy",
    title: "Health that stays with you",
    align: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, HK_ABOUT_PHILOSOPHY.map((p, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: p.n,
      style: {
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: i === HK_ABOUT_PHILOSOPHY.length - 1 ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        display: "grid",
        gridTemplateColumns: "48px 1fr auto",
        alignItems: "center",
        gap: "16px",
        width: "100%",
        textAlign: "left",
        padding: "20px 6px",
        margin: 0,
        background: "none",
        border: 0,
        cursor: "pointer",
        color: "inherit",
        font: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "19px",
        color: isOpen ? "var(--green-700)" : "var(--text-faint)",
        transition: "color var(--dur-base) var(--ease-out)"
      }
    }, p.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        letterSpacing: "var(--tracking-wide)",
        fontSize: "20px",
        color: "var(--text-strong)"
      }
    }, p.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        border: "1px solid var(--border-subtle)",
        background: isOpen ? "var(--green-700)" : "transparent",
        color: isOpen ? "var(--ivory-50)" : "var(--green-700)",
        transform: isOpen ? "rotate(45deg)" : "none",
        transition: "all var(--dur-slow) var(--ease-out)",
        fontSize: "18px",
        lineHeight: 1
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? "180px" : "0px",
        overflow: "hidden",
        transition: "max-height var(--dur-slow) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: "0 6px 22px 64px",
        fontFamily: "var(--font-body)",
        fontSize: "16px",
        lineHeight: 1.65,
        color: "var(--text-muted)"
      }
    }, p.body)));
  })))));
}

/* ---------- Closing CTA ---------- */
function AboutCta({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "92px 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "26px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "clamp(30px, 4vw, 42px)",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, "our promise"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "clamp(30px, 5vw, 50px)",
      lineHeight: "var(--leading-tight)",
      color: "var(--text-strong)",
      maxWidth: "20ch"
    }
  }, "We make your life easier and your body healthier"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "Explore Meal Plans"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "message-circle",
      style: {
        width: 17,
        height: 17
      }
    }),
    onClick: () => window.open("https://wa.me/971585129792", "_blank")
  }, "WhatsApp Us"))));
}

/* ---------- Page ---------- */
function AboutUs({
  onExplore
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
    const h = () => onExplore && onExplore();
    window.addEventListener("hk-about-explore", h);
    return () => window.removeEventListener("hk-about-explore", h);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AboutHero, null), /*#__PURE__*/React.createElement(AboutStory, null), /*#__PURE__*/React.createElement(AboutValues, null), /*#__PURE__*/React.createElement(AboutApproach, null), /*#__PURE__*/React.createElement(AboutPhilosophy, null), /*#__PURE__*/React.createElement(AboutCta, {
    onExplore: onExplore
  }));
}
window.AboutUs = AboutUs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutUs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AnticandidaExtras.jsx
try { (() => {
// Anticandida Protocol–specific sections, rendered below the standard
// ProductDetail hero only when plan.slug === "anticandida". Mirrors the other
// plan pages: pain points, A day on the plan (PlanMenu) + stat band, protocol
// phases (green band accordion), and Questions & Answers.

// ---- When sugar runs the show ------------------------------------------------
function AnticandidaGamble() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const items = [{
    n: "01",
    icon: "candy-off",
    h: "Sugar cravings that feel bigger than hunger",
    p: "It's not a willpower problem. Candida feeds on sugar — and an overgrowth keeps asking for more, louder every day."
  }, {
    n: "02",
    icon: "cloud-fog",
    h: "Brain fog and fatigue with no obvious cause",
    p: "You sleep enough, you eat 'fine', and you're still running at 60%. Fungal overload keeps the whole system inflamed and tired."
  }, {
    n: "03",
    icon: "repeat",
    h: "Recurring infections that keep coming back",
    p: "Thrush, skin flare-ups, digestive upsets — treated, gone, and back again. Treating symptoms doesn't touch what feeds them."
  }, {
    n: "04",
    icon: "list-x",
    h: "You tried cutting sugar — and lasted a week",
    p: "Sugar hides in sauces, dressings, 'healthy' snacks, fruit. Doing a strict anticandida kitchen alone, every day, is a full-time job."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.08,
      fontSize: "clamp(28px, 4.2vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "When candida"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      whiteSpace: "nowrap",
      fontStyle: "italic"
    }
  }, "runs the show"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      borderTop: "1px solid var(--border-default)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-700)"
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "21px",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      marginTop: "64px",
      paddingTop: "56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "clamp(28px, 3.6vw, 42px)",
      color: "var(--text-strong)"
    }
  }, "Supplements alone won't clear it  ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "You have to stop feeding it")))));
}

// ---- A day on the plan (reuses PlanMenu carousel) + stat band ------------------
const AC_MENUS = [{
  label: "A day on the plan",
  meals: [{
    meal: "Breakfast",
    img: "assets/meals/ac-breakfast.jpg",
    title: "Vegetable omelette with smoked salmon & green salad",
    desc: "Savory, sugar-free start — quality protein and omega-3s with zero fuel for candida.",
    kcal: 338,
    p: 28,
    c: 16,
    f: 18
  }, {
    meal: "Lunch",
    img: "assets/meals/ac-lunch.jpg",
    title: "Thai curry with chicken & quinoa",
    desc: "Coconut curry with chicken, crisp vegetables and quinoa — antifungal ginger, lemongrass and garlic, no sugar.",
    kcal: 516,
    p: 43,
    c: 32,
    f: 24
  }, {
    meal: "Dinner",
    img: "assets/meals/ac-dinner.jpg",
    title: "Fried cauliflower rice with prawns & almond flakes",
    desc: "Lean prawns over fried cauliflower rice with toasted almond flakes — filling, low-glycemic, gentle on digestion.",
    kcal: 501,
    p: 45,
    c: 24,
    f: 25
  }, {
    meal: "Snack",
    img: "assets/meals/ac-snack.jpg",
    title: "Babaganoush dip with quinoa crackers",
    desc: "Smoky roasted aubergine whipped with tahini and olive oil, served with seeded quinoa crackers — savory, sugar-free, and genuinely filling.",
    kcal: 135,
    p: 4,
    c: 14,
    f: 6
  }, {
    meal: "Snack",
    img: "assets/meals/ac-snack-2.jpg",
    title: "Microbiome bowl with sour berries puree",
    desc: "Chia pudding layered with coconut yoghurt and unsweetened sour-berry puree — probiotics and fiber, nothing candida can feed on.",
    kcal: 210,
    p: 7,
    c: 18,
    f: 12
  }]
}];
function AnticandidaMenu() {
  const acStat = (val, label, accent) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      alignItems: "flex-start",
      flex: "1 1 0",
      minWidth: "150px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "44px" : "38px",
      lineHeight: 1,
      color: "var(--ivory-50)"
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--green-200)"
    }
  }, label));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanMenu, {
    menus: AC_MENUS,
    showTotal: false,
    sub: "Low-sugar fruits and vegetables, lean proteins, antifungal herbs and spices, fermented foods for probiotics \u2014 all sugar-, gluten- and dairy-free."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 30px"
    }
  }, acStat("0g", "Added sugar — nothing for candida to feed on", true), acStat("Daily", "Antifungal ingredients: garlic, coconut oil, oregano"), acStat("1×", "Fermented, probiotic-rich food every day"), acStat("Low-GI", "Only low-sugar fruits and slow carbs")))));
}

// ---- How the protocol works (green band accordion) -----------------------------
function AnticandidaPhases() {
  const items = [{
    n: "01",
    icon: "circle-slash",
    cap: "We deliver this · from day one",
    h: "Starve",
    p: "Remove sugar, refined carbs, alcohol and yeast-promoting foods — everything candida feeds on. Balanced protein, fat and fiber keep blood sugar steady, so cravings quiet down instead of screaming."
  }, {
    n: "02",
    icon: "flame",
    cap: "Built into every menu",
    h: "Fight",
    p: "Antifungal foods do daily work: garlic, coconut oil, oregano, ginger and leafy greens — while nutrient-dense meals reduce inflammation and support your immune system."
  }, {
    n: "03",
    icon: "sprout",
    cap: "Long-term · Rebalance",
    h: "Restore",
    p: "Daily fermented foods repopulate the gut with beneficial bacteria — the competition that keeps candida in check long after the protocol ends."
  }];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-20px",
      top: "6px",
      fontFamily: "var(--font-script)",
      fontSize: "210px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "balance"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "48px",
      flexWrap: "wrap",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "The full picture"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: "clamp(34px, 4.4vw, 54px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ivory-50)"
    }
  }, "How the protocol"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      color: "var(--green-300)"
    }
  }, "beats the overgrowth"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      maxWidth: "380px"
    }
  }, "Beating candida takes discipline in three directions at once \u2014 starving it, fighting it, and rebuilding what keeps it in check. Every menu works all three.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-muscleacc",
    role: "tablist",
    "aria-label": "How the protocol beats the overgrowth",
    onMouseLeave: () => setPaused(false),
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "stretch"
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.n,
      role: "tab",
      "aria-selected": isActive,
      onMouseEnter: () => {
        setActive(i);
        setPaused(true);
      },
      onFocus: () => {
        setActive(i);
        setPaused(true);
      },
      onClick: () => {
        setActive(i);
        setPaused(true);
      },
      className: "hk-muscleacc-panel",
      style: {
        flex: isActive ? "2.4 1 0%" : "1 1 0%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "18px",
        minHeight: "230px",
        padding: "22px 24px",
        margin: 0,
        textAlign: "left",
        background: isActive ? "rgba(253,252,248,0.09)" : "rgba(253,252,248,0.02)",
        border: "1px solid rgba(253,252,248,0.18)",
        borderRadius: "var(--radius-lg)",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "flex 0.6s var(--ease-out), background 0.45s ease, transform 0.45s ease",
        transform: isActive ? "translateY(-4px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "aria-hidden": "true",
      "data-lucide": it.icon,
      style: {
        position: "absolute",
        right: "-20px",
        top: "-20px",
        width: "150px",
        height: "150px",
        color: "var(--ivory-50)",
        opacity: isActive ? 0.14 : 0.08,
        pointerEvents: "none",
        transition: "opacity 0.45s ease"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-script)",
        fontSize: "26px",
        lineHeight: 1,
        color: isActive ? "var(--ivory-50)" : "var(--green-300)",
        transition: "color 0.4s ease",
        position: "relative"
      }
    }, it.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--green-300)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: isActive ? "20px" : "0px",
        opacity: isActive ? 1 : 0,
        transition: "all 0.45s ease 0.15s"
      }
    }, it.cap), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--tracking-wide)",
        fontSize: "24px",
        lineHeight: 1.2,
        color: "var(--ivory-50)"
      }
    }, it.h), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isActive ? "200px" : "0px",
        opacity: isActive ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.55s var(--ease-out), opacity 0.4s ease 0.15s"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15.5px",
        lineHeight: 1.65,
        color: "var(--green-100)",
        maxWidth: "46ch"
      }
    }, it.p))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flex: 1
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it.n,
    style: {
      flex: 1,
      height: "2px",
      background: i === active ? "var(--ivory-50)" : "rgba(253,252,248,0.18)",
      transition: "background 0.4s ease"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--green-200)"
    }
  }, items[active].n, " / 03")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      textAlign: "center"
    }
  }, "Signs it's working: quieter sugar cravings, steadier energy, clearer skin, better digestion. Your doctor may additionally recommend antifungal supplements or medication.")));
}

// ---- Questions & Answers --------------------------------------------------------
const AC_FAQ_ITEMS = [{
  q: "How does the Anticandida Diet help reduce fungal infections?",
  a: "It eliminates sugar, refined carbs, and yeast-containing foods that fuel candida growth, while emphasizing antifungal foods like garlic, coconut oil, and leafy greens — helping to restore your body's natural balance."
}, {
  q: "What foods are excluded on this plan?",
  a: "Foods high in sugar, refined grains, alcohol, and processed foods — anything that can promote the growth of candida and other harmful fungi. Everything we deliver is also gluten-, dairy- and added-sugar-free by default."
}, {
  q: "How does this diet address sugar cravings?",
  a: "By stabilizing blood sugar with balanced meals rich in fiber, protein, and healthy fats. Where sweetness is needed, we use natural alternatives like stevia, xylitol or monk fruit."
}, {
  q: "Can the Anticandida Diet support my immune system?",
  a: "Yes. By reducing the fungal load and eliminating inflammatory foods, the plan supports the immune system — making it more effective at fighting off infections and maintaining overall health."
}, {
  q: "How do I know it's working?",
  a: "Reduced sugar cravings, improved digestion, increased energy, clearer skin, and fewer candida-related symptoms like brain fog and fatigue. Your doctor might additionally recommend antifungal supplements or medications."
}, {
  q: "What if I dislike an ingredient?",
  a: "Customize up to 3 ingredients per meal to match your taste — no extra charge."
}, {
  q: "When and how do meals get delivered?",
  a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging."
}];
function AnticandidaFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: AC_FAQ_ITEMS
  });
}
window.AnticandidaGamble = AnticandidaGamble;
window.AnticandidaMenu = AnticandidaMenu;
window.AnticandidaPhases = AnticandidaPhases;
window.AnticandidaFAQ = AnticandidaFAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AnticandidaExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  Cart
} = window.HealthyKitchenDesignSystem_f4c763;
function Toast({
  show,
  message
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: "28px",
      left: "50%",
      transform: `translateX(-50%) translateY(${show ? "0" : "250%"})`,
      background: "var(--green-800)",
      color: "var(--ivory-50)",
      padding: "14px 22px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      letterSpacing: "var(--tracking-wide)",
      maxWidth: "92vw",
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      zIndex: 300,
      visibility: show ? "visible" : "hidden",
      transition: "transform var(--dur-slow) var(--ease-out), visibility 0s linear " + (show ? "0s" : "var(--dur-slow)"),
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle",
    style: {
      width: 17,
      height: 17
    }
  }), message);
}
function CartDrawer({
  open,
  items,
  depositAmount,
  onClose,
  onQty,
  onRemove,
  onCheckout,
  onExplore
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(28,33,29,0.44)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity var(--dur-base) var(--ease-out)",
      zIndex: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      height: "100%",
      width: "min(460px, 94vw)",
      transform: open ? "translateX(0)" : "translateX(105%)",
      transition: "transform var(--dur-slow) var(--ease-out)",
      zIndex: 201,
      padding: "18px",
      display: "flex",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      display: "flex",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close cart",
    style: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      zIndex: 2,
      width: "34px",
      height: "34px",
      borderRadius: "var(--radius-circle)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      boxShadow: "var(--shadow-sm)",
      cursor: "pointer",
      color: "var(--text-body)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 17,
      height: 17
    }
  })), /*#__PURE__*/React.createElement(Cart, {
    items: items,
    depositAmount: depositAmount,
    onQtyChange: onQty,
    onRemove: onRemove,
    onCheckout: onCheckout,
    onExplore: onExplore,
    style: {
      maxWidth: "none",
      width: "100%"
    }
  }))));
}
function App() {
  const BAG_DEPOSIT = 180;
  const [route, setRoute] = React.useState({
    name: "home"
  });
  const [items, setItems] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [toast, setToast] = React.useState({
    show: false,
    message: ""
  });
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const scrollToPlans = () => {
    const el = document.getElementById("meal-plans");
    if (el) window.scrollTo({
      top: el.offsetTop - 60,
      behavior: "smooth"
    });
  };
  const showToast = message => {
    setToast({
      show: true,
      message
    });
    clearTimeout(window.__hkToast);
    window.__hkToast = setTimeout(() => setToast(t => ({
      ...t,
      show: false
    })), 2400);
  };
  const handleNav = label => {
    if (label === "Meal Plans") {
      if (route.name !== "home") {
        setRoute({
          name: "home"
        });
        setTimeout(scrollToPlans, 60);
      } else scrollToPlans();
    } else if (label === "Blog") {
      setRoute({
        name: "blog"
      });
      window.scrollTo({
        top: 0
      });
    } else if (label === "About Us") {
      setRoute({
        name: "about"
      });
      window.scrollTo({
        top: 0
      });
    } else if (label === "Consultations") {
      setRoute({
        name: "consultations"
      });
      window.scrollTo({
        top: 0
      });
    } else if (label === "Intolerance Testing") {
      setRoute({
        name: "intolerance"
      });
      window.scrollTo({
        top: 0
      });
    } else if (label === "Privacy Policy") {
      setRoute({
        name: "privacy"
      });
      window.scrollTo({
        top: 0
      });
    } else if (label === "Terms & Conditions") {
      setRoute({
        name: "terms"
      });
      window.scrollTo({
        top: 0
      });
    } else {
      if (route.name !== "home") setRoute({
        name: "home"
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  const openPlan = plan => {
    setRoute({
      name: "product",
      plan
    });
    window.scrollTo({
      top: 0
    });
  };
  const goHome = () => setRoute({
    name: "home"
  });
  const openBlogPost = post => {
    setRoute({
      name: "blogPost",
      post
    });
    window.scrollTo({
      top: 0
    });
  };
  const goBlogList = () => {
    setRoute({
      name: "blog"
    });
    window.scrollTo({
      top: 0
    });
  };
  const planThumb = slug => {
    const src = (window.HK_PLAN_COVERS || {})[slug];
    if (!src) return null;
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    });
  };
  const addToCart = (plan, detail) => {
    const days = detail.days || 7;
    const price = Math.max(1, Math.round(detail.total / days));
    const options = [detail.mealLabel, detail.calorieLabel].filter(Boolean);
    const excluded = detail.excluded || [];
    setItems(prev => {
      const exists = prev.some(it => it.id === plan.slug);
      if (exists) return prev.map(it => it.id === plan.slug ? {
        ...it,
        price,
        qty: days,
        meta: detail.meals,
        options,
        excluded,
        image: planThumb(plan.slug)
      } : it);
      return [...prev, {
        id: plan.slug,
        title: plan.name,
        meta: detail.meals,
        options,
        excluded,
        price,
        qty: days,
        tags: plan.tags,
        image: planThumb(plan.slug)
      }];
    });
    showToast(`${plan.name} added · ${detail.total} AED`);
    setDrawerOpen(true);
  };
  const setQty = (id, qty) => setItems(prev => prev.map(it => it.id === id ? {
    ...it,
    qty
  } : it));
  const removeItem = id => setItems(prev => prev.filter(it => it.id !== id));
  const goCheckout = () => {
    setDrawerOpen(false);
    setRoute({
      name: "checkout"
    });
    window.scrollTo({
      top: 0
    });
  };
  const goToPayment = (form, summary) => {
    setRoute({
      name: "payment",
      form,
      summary
    });
    window.scrollTo({
      top: 0
    });
  };
  const finalizeOrder = () => {
    const {
      form,
      summary
    } = route;
    const lines = items.map(it => `• ${it.title} — ${it.qty} days (${(it.price * it.qty).toLocaleString("en-US")} AED)${it.excluded && it.excluded.length ? ` [No: ${it.excluded.join(", ")}]` : ""}`).join("\n");
    const discountLine = summary && summary.discountAmount > 0 ? `\n${summary.discountLabel}: \u2212 ${summary.discountAmount.toLocaleString("en-US")} AED` : "";
    const depositLine = summary && summary.depositAmount > 0 ? `\nRefundable bag deposit: ${summary.depositAmount.toLocaleString("en-US")} AED` : "";
    const total = summary ? summary.total : items.reduce((s, it) => s + it.price * it.qty, 0);
    const whatsappLine = form.whatsapp ? `\nWhatsApp: ${form.whatsapp}` : "";
    const msg = `Hi Healthy Kitchen! I'd like to place an order.\n\n${lines}${discountLine}${depositLine}\n\nTotal: ${total.toLocaleString("en-US")} AED\n\nName: ${form.name}\nPhone: ${form.phone}${whatsappLine}\nEmail: ${form.email}\nAddress: ${form.address}${form.area ? ", " + form.area : ""}\nStart date: ${form.date}\nDelivery time: ${form.timeSlotLabel || ""}${form.notes ? "\nNotes: " + form.notes : ""}\n\nPayment: Paid online`;
    window.open(`https://wa.me/971585129792?text=${encodeURIComponent(msg)}`, "_blank");
    setItems([]);
  };
  const explore = () => {
    setDrawerOpen(false);
    if (route.name !== "home") setRoute({
      name: "home"
    });
    setTimeout(scrollToPlans, 80);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    cartCount: items.length,
    onNav: handleNav,
    onHome: goHome,
    onCart: () => setDrawerOpen(true),
    onSelectPlan: openPlan
  }), route.name === "home" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(HeroKinetic, {
    onExplore: scrollToPlans
  }), /*#__PURE__*/React.createElement(QuoteStrip, null), /*#__PURE__*/React.createElement(MealPlans, {
    onSelect: openPlan
  }), /*#__PURE__*/React.createElement(WhyChooseUs, {
    onExplore: scrollToPlans
  }), /*#__PURE__*/React.createElement(Promo, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(FAQ, null)) : route.name === "checkout" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Checkout, {
    items: items,
    currency: "AED",
    depositAmount: BAG_DEPOSIT,
    onBack: goHome,
    onContinue: goToPayment
  })) : route.name === "payment" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Payment, {
    total: route.summary ? route.summary.total : 0,
    currency: "AED",
    onBack: () => setRoute({
      name: "checkout"
    }),
    onDone: goHome,
    onSuccess: finalizeOrder
  })) : route.name === "blog" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BlogList, {
    onSelect: openBlogPost
  })) : route.name === "blogPost" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(BlogArticle, {
    post: route.post,
    onBack: goBlogList,
    onSelect: openBlogPost
  })) : route.name === "about" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(AboutUs, {
    onExplore: explore
  })) : route.name === "consultations" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Consultations, null)) : route.name === "intolerance" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(IntoleranceTesting, null)) : route.name === "privacy" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PrivacyPolicy, null)) : route.name === "terms" ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(TermsConditions, null)) : /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ProductDetail, {
    plan: route.plan,
    onBack: goHome,
    onAdd: addToCart
  })), /*#__PURE__*/React.createElement(Footer, {
    onNav: handleNav
  }), /*#__PURE__*/React.createElement(CartDrawer, {
    open: drawerOpen,
    items: items,
    depositAmount: BAG_DEPOSIT,
    onClose: () => setDrawerOpen(false),
    onQty: setQty,
    onRemove: removeItem,
    onCheckout: goCheckout,
    onExplore: explore
  }), /*#__PURE__*/React.createElement(Toast, {
    show: toast.show,
    message: toast.message
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AutoimmuneExtras.jsx
try { (() => {
// Autoimmune Protocol (AIP)–specific sections, rendered below the standard
// ProductDetail hero only when plan.slug === "autoimmune". Mirrors the other
// plan pages: pain points, A day on the plan (PlanMenu) + stat band, protocol
// phases (green band), and Questions & Answers.

// ---- When your body works against you --------------------------------------
function AutoimmuneGamble() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const items = [{
    n: "01",
    icon: "flame",
    h: "Flare-ups arrive without warning",
    p: "Joint pain, skin reactions, brain fog, fatigue. You can't predict the bad days — and you've stopped planning around the good ones."
  }, {
    n: "02",
    icon: "list-x",
    h: "You've tried elimination diets and given up",
    p: "AIP is one of the strictest protocols there is: no grains, legumes, nightshades, eggs, dairy, nuts or seeds. Cooking it yourself, three meals a day, is a full-time job."
  }, {
    n: "03",
    icon: "search-x",
    h: "Hidden triggers are everywhere",
    p: "Tomato in the sauce, seed oil in the dressing, paprika in the seasoning. One overlooked ingredient can undo weeks of progress."
  }, {
    n: "04",
    icon: "battery-low",
    h: "You're managing a condition on an empty tank",
    p: "The fatigue that comes with autoimmune conditions makes strict meal prep exactly the thing you don't have energy for."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.08,
      fontSize: "clamp(15px, 4.2vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "Living with autoimmunity"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      whiteSpace: "nowrap",
      fontStyle: "italic"
    }
  }, "shouldn't be a second job"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      borderTop: "1px solid var(--border-default)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-700)"
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "21px",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      marginTop: "64px",
      paddingTop: "56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "clamp(28px, 3.6vw, 42px)",
      color: "var(--text-strong)"
    }
  }, "Let us manage the strict part  ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "You focus on feeling better")))));
}

// ---- A day on the plan (reuses PlanMenu carousel) + stat band ---------------
const AIP_MENUS = [{
  label: "A day on the plan",
  meals: [{
    meal: "Breakfast",
    img: "assets/meals/aip-breakfast.jpg",
    title: "AIP waffles with guacamole & smoked salmon",
    desc: "Grain-free waffles with avocado and cured salmon — omega-3s and healthy fats, no eggs, grains or nightshades.",
    kcal: 409,
    p: 18,
    c: 28,
    f: 25
  }, {
    meal: "Lunch",
    img: "assets/meals/aip-lunch.jpg",
    title: "Roasted lamb in tagine with green pumpkin salad",
    desc: "Slow-roasted lamb with AIP-safe spices and a green pumpkin salad — collagen, zinc and iron for repair.",
    kcal: 539,
    p: 48,
    c: 26,
    f: 27
  }, {
    meal: "Dinner",
    img: "assets/meals/aip-dinner.jpg",
    title: "Bone broth & konjac pasta with salmon & pesto",
    desc: "Glycine-rich bone broth and low-carb konjac pasta with wild salmon — soothing and light on digestion.",
    kcal: 436,
    p: 43,
    c: 12,
    f: 24
  }, {
    meal: "Snack 1",
    img: "assets/meals/aip-snack.jpg",
    title: "Beetroot dip with veggie cuts",
    desc: "Nitrate-rich beetroot whipped with olive oil and crisp raw vegetables — nut- and seed-free fiber.",
    kcal: 171,
    p: 4,
    c: 14,
    f: 11
  }, {
    meal: "Snack 2",
    img: "assets/meals/aip-snack-2.jpg",
    title: "AIP lemon cookies",
    desc: "Coconut-flour cookies with fresh lemon — no eggs, grains or refined sugar, and gentle on blood sugar.",
    kcal: 234,
    p: 5,
    c: 13,
    f: 18
  }]
}];
function AutoimmuneMenu() {
  const aipStat = (val, label, accent) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      alignItems: "flex-start",
      flex: "1 1 0",
      minWidth: "150px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "44px" : "38px",
      lineHeight: 1,
      color: "var(--ivory-50)"
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--green-200)"
    }
  }, label));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanMenu, {
    menus: AIP_MENUS,
    showTotal: false,
    sub: "Every meal is built to the AIP elimination template \u2014 no grains, legumes, nightshades, eggs, dairy, nuts, seeds or refined sugar. Nutrient-dense, never bland."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 30px"
    }
  }, aipStat("8", "Food groups eliminated", true), aipStat("30+", /*#__PURE__*/React.createElement(React.Fragment, null, "Plants every week")), aipStat("100%", /*#__PURE__*/React.createElement(React.Fragment, null, "AIP-compliant meals,", /*#__PURE__*/React.createElement("br", null), "every single day")), aipStat("0", /*#__PURE__*/React.createElement(React.Fragment, null, "Immune triggers", /*#__PURE__*/React.createElement("br", null), "on your plate"))))));
}

// ---- How the protocol works (green band) ------------------------------------
function AutoimmunePhases() {
  const items = [{
    n: "01",
    icon: "circle-slash",
    cap: "Weeks 1–5 · Fully handled by us",
    h: "Elimination",
    p: "Remove the food groups most likely to drive inflammation and immune reactivity. Give the gut lining and immune system room to settle."
  }, {
    n: "02",
    icon: "list-plus",
    cap: "Weeks 6–8 · With guidance",
    h: "Reintroduction",
    p: "Bring foods back individually, watching symptoms for 3–7 days each. This is where your personal triggers reveal themselves."
  }, {
    n: "03",
    icon: "user-check",
    cap: "Long-term · Ongoing",
    h: "Personalization",
    p: "Settle into the widest diet your body tolerates — excluding only your confirmed triggers, not everything."
  }];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-20px",
      top: "6px",
      fontFamily: "var(--font-script)",
      fontSize: "210px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "soothe"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "48px",
      flexWrap: "wrap",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "The full picture"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: "clamp(34px, 4.4vw, 54px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ivory-50)"
    }
  }, "How the AIP"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      color: "var(--green-300)"
    }
  }, "framework works"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      maxWidth: "380px"
    }
  }, "The Autoimmune Protocol has three phases. We deliver the even elimination phase \u2014 the strictest part, and the one that's hardest to sustain alone.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-muscleacc",
    role: "tablist",
    "aria-label": "How the AIP framework works",
    onMouseLeave: () => setPaused(false),
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "stretch"
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.n,
      role: "tab",
      "aria-selected": isActive,
      onMouseEnter: () => {
        setActive(i);
        setPaused(true);
      },
      onFocus: () => {
        setActive(i);
        setPaused(true);
      },
      onClick: () => {
        setActive(i);
        setPaused(true);
      },
      className: "hk-muscleacc-panel",
      style: {
        flex: isActive ? "2.4 1 0%" : "1 1 0%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "18px",
        minHeight: "230px",
        padding: "22px 24px",
        margin: 0,
        textAlign: "left",
        background: isActive ? "rgba(253,252,248,0.09)" : "rgba(253,252,248,0.02)",
        border: "1px solid rgba(253,252,248,0.18)",
        borderRadius: "var(--radius-lg)",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "flex 0.6s var(--ease-out), background 0.45s ease, transform 0.45s ease",
        transform: isActive ? "translateY(-4px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "aria-hidden": "true",
      "data-lucide": it.icon,
      style: {
        position: "absolute",
        right: "-20px",
        top: "-20px",
        width: "150px",
        height: "150px",
        color: "var(--ivory-50)",
        opacity: isActive ? 0.14 : 0.08,
        pointerEvents: "none",
        transition: "opacity 0.45s ease"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-script)",
        fontSize: "26px",
        lineHeight: 1,
        color: isActive ? "var(--ivory-50)" : "var(--green-300)",
        transition: "color 0.4s ease",
        position: "relative"
      }
    }, it.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--green-300)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: isActive ? "20px" : "0px",
        opacity: isActive ? 1 : 0,
        transition: "all 0.45s ease 0.15s"
      }
    }, it.cap), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--tracking-wide)",
        fontSize: "24px",
        lineHeight: 1.2,
        color: "var(--ivory-50)"
      }
    }, it.h), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isActive ? "200px" : "0px",
        opacity: isActive ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.55s var(--ease-out), opacity 0.4s ease 0.15s"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15.5px",
        lineHeight: 1.65,
        color: "var(--green-100)",
        maxWidth: "46ch"
      }
    }, it.p))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flex: 1
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it.n,
    style: {
      flex: 1,
      height: "2px",
      background: i === active ? "var(--ivory-50)" : "rgba(253,252,248,0.18)",
      transition: "background 0.4s ease"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--green-200)"
    }
  }, items[active].n, " / 03")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      textAlign: "center"
    }
  }, "When you're ready to reintroduce, our nutrition experts help you plan it \u2014 as part of your protocol, not as an upsell.")));
}

// ---- Questions & Answers -----------------------------------------------------
const AIP_FAQ_ITEMS = [{
  q: "Is this a medical treatment for autoimmune conditions?",
  a: "No. AIP is a structured nutrition framework designed to reduce dietary sources of inflammation and immune reactivity. It complements — never replaces — the care of your physician. Keep your doctor in the loop, especially if you take medication."
}, {
  q: "What exactly is removed on AIP?",
  a: "Grains, legumes, nightshades (tomato, pepper, eggplant, white potato), eggs, dairy, nuts, seeds, refined sugar, alcohol and processed oils. What remains: quality meats and fish, vegetables, fruit, olive and coconut oil, and fermented foods."
}, {
  q: "How long should I stay on the elimination phase?",
  a: "Most practitioners recommend a minimum of 30 days, or until you feel a clear improvement in symptoms. After that, foods are reintroduced one at a time."
}, {
  q: "Will the food be bland?",
  a: "No nightshade spices doesn't mean no flavor. Our chefs lean on fresh herbs, citrus, garlic-infused oils, ginger and turmeric — every plate is built to taste like food, not medicine."
}, {
  q: "What if I dislike an ingredient?",
  a: "Customize up to 3 ingredients per meal to match your taste — no extra charge."
}, {
  q: "When and how do meals get delivered?",
  a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging."
}];
function AutoimmuneFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: AIP_FAQ_ITEMS
  });
}
window.AutoimmuneGamble = AutoimmuneGamble;
window.AutoimmuneMenu = AutoimmuneMenu;
window.AutoimmunePhases = AutoimmunePhases;
window.AutoimmuneFAQ = AutoimmuneFAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AutoimmuneExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogArticle.jsx
try { (() => {
const {
  Tag: ArticleTag
} = window.HealthyKitchenDesignSystem_f4c763;
function BlogArticle({
  post,
  onBack,
  onSelect
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [post]);
  if (!post) return null;
  const related = (window.HK_BLOG_POSTS || []).filter(p => p.slug !== post.slug).slice(0, 3);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "40px 32px 24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-muted)",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), " All articles"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement(ArticleTag, {
    tone: "clay",
    variant: "soft"
  }, post.category)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.05,
      fontSize: "clamp(30px, 5vw, 46px)",
      color: "var(--text-strong)"
    }
  }, post.title), post.date && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, post.date)), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "0 32px"
    }
  }, post.image ? /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: post.title,
    style: {
      width: "100%",
      height: "460px",
      objectFit: "cover",
      display: "block",
      marginTop: "8px",
      borderRadius: "18px"
    }
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: "hk-blog-" + post.slug,
    style: {
      width: "100%",
      height: "460px",
      display: "block",
      marginTop: "8px",
      background: "var(--ivory-100)"
    },
    shape: "rounded",
    radius: "18",
    fit: "contain",
    placeholder: "Photo — " + post.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginTop: "40px",
      paddingBottom: "72px"
    }
  }, post.body.map((para, i) => typeof para === "string" ? /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.75,
      color: "var(--text-body)"
    }
  }, para) : /*#__PURE__*/React.createElement("h2", {
    key: i,
    style: {
      margin: "12px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "26px",
      lineHeight: 1.2,
      color: "var(--text-strong)"
    }
  }, para.h)))), related.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--bg-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 32px",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "26px",
      color: "var(--text-strong)"
    }
  }, "Related articles"), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px"
    }
  }, related.map(p => /*#__PURE__*/React.createElement(BlogCard, {
    key: p.slug,
    post: p,
    onSelect: onSelect
  }))))));
}
window.BlogArticle = BlogArticle;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogArticle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogCard.jsx
try { (() => {
const {
  Tag: BlogTag
} = window.HealthyKitchenDesignSystem_f4c763;

// Shared card used by the blog list and by "related articles" on the article page.
function BlogCard({
  post,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelect && onSelect(post),
    className: "hk-card",
    style: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      cursor: "pointer",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      padding: 0,
      font: "inherit",
      color: "inherit",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "230px",
      overflow: "hidden",
      background: "var(--ivory-200)",
      display: "flex"
    }
  }, post.image ? /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: post.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: "hk-blog-" + post.slug,
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    },
    fit: "contain",
    placeholder: "Photo — " + post.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "12px",
      left: "12px"
    }
  }, /*#__PURE__*/React.createElement(BlogTag, {
    tone: "clay",
    variant: "solid",
    size: "sm"
  }, post.category))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: 1.2,
      color: "var(--text-strong)"
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "14.5px",
      lineHeight: 1.55,
      color: "var(--text-muted)"
    }
  }, post.excerpt), post.date && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, post.date), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      marginTop: "4px",
      fontFamily: "var(--font-body)",
      fontSize: "12.5px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--green-700)"
    }
  }, "Read article ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 14,
      height: 14
    }
  }))));
}
window.BlogCard = BlogCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogList.jsx
try { (() => {
const PER_PAGE = 9;
function Pagination({
  page,
  totalPages,
  onPage
}) {
  if (totalPages <= 1) return null;
  const pages = Array.from({
    length: totalPages
  }, (_, i) => i + 1);
  const arrowBtn = {
    width: "40px",
    height: "40px",
    borderRadius: "var(--radius-circle)",
    border: "1px solid var(--border-default)",
    background: "var(--white)",
    color: "var(--text-body)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none",
    transition: "all var(--dur-base) var(--ease-out)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginTop: "48px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onPage(Math.max(1, page - 1)),
    disabled: page === 1,
    "aria-label": "Previous page",
    style: {
      ...arrowBtn,
      opacity: page === 1 ? 0.35 : 1,
      cursor: page === 1 ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  })), pages.map(p => {
    const active = p === page;
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: () => onPage(p),
      "aria-current": active ? "page" : undefined,
      style: {
        width: "40px",
        height: "40px",
        borderRadius: "var(--radius-circle)",
        flex: "none",
        border: "1px solid " + (active ? "var(--green-700)" : "var(--border-default)"),
        background: active ? "var(--green-700)" : "var(--white)",
        color: active ? "var(--ivory-50)" : "var(--text-body)",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, p);
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onPage(Math.min(totalPages, page + 1)),
    disabled: page === totalPages,
    "aria-label": "Next page",
    style: {
      ...arrowBtn,
      opacity: page === totalPages ? 0.35 : 1,
      cursor: page === totalPages ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  })));
}
function BlogList({
  onSelect
}) {
  const posts = window.HK_BLOG_POSTS || [];
  const [page, setPage] = React.useState(1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const goPage = p => {
    setPage(p);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const pagePosts = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "Blog"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "14px 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.02,
      fontSize: "clamp(38px, 6vw, 56px)",
      color: "var(--text-strong)"
    }
  }, "Notes on clean eating"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "18px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: "56ch"
    }
  }, "Nutrition, recovery, and the thinking behind our kitchen \u2014 from our team of nutritionists and chefs.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px"
    }
  }, pagePosts.map(post => /*#__PURE__*/React.createElement(BlogCard, {
    key: post.slug,
    post: post,
    onSelect: onSelect
  }))), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    totalPages: totalPages,
    onPage: goPage
  })));
}
window.BlogList = BlogList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Checkout.jsx
try { (() => {
const {
  Button,
  Input
} = window.HealthyKitchenDesignSystem_f4c763;
const fmt = n => Number(n).toLocaleString("en-US");
const TIME_SLOTS = [{
  id: "6-8",
  label: "6–8 AM"
}, {
  id: "7-9",
  label: "7–9 AM"
}, {
  id: "8-10",
  label: "8–10 AM"
}, {
  id: "9-11",
  label: "9–11 AM"
}, {
  id: "10-12",
  label: "10–12 PM"
}];

// First-order promo — only applied when the customer enters this code.
const PROMO_CODES = {
  WELCOME10: 0.10
};
const TILE_HEIGHT = "52px";

/**
 * Healthy Kitchen — Checkout
 * Address & delivery-details step between the cart and placing the order.
 * Left: contact + delivery form (date & 2-hour time slots as uniform tiles).
 * Right: sticky order summary with an optional promo-code discount.
 */
function Checkout({
  items = [],
  currency = "AED",
  depositAmount = 180,
  depositLabel = "Refundable bag deposit",
  onBack,
  onContinue
}) {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    area: "",
    date: "",
    timeSlot: "",
    notes: "",
    whatsapp: ""
  });
  const [errors, setErrors] = React.useState({});
  const [showWhatsapp, setShowWhatsapp] = React.useState(false);
  const [promoCode, setPromoCode] = React.useState("");
  const [appliedPromo, setAppliedPromo] = React.useState(null);
  const [promoError, setPromoError] = React.useState("");
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const set = key => e => setForm(f => ({
    ...f,
    [key]: e.target.value
  }));
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const discountAmount = appliedPromo ? Math.round(subtotal * appliedPromo.pct) : 0;
  const total = Math.max(0, subtotal - discountAmount) + Number(depositAmount || 0);
  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (!code) {
      setPromoError("Enter a code");
      return;
    }
    const pct = PROMO_CODES[code];
    if (!pct) {
      setPromoError("Invalid promo code");
      setAppliedPromo(null);
      return;
    }
    setAppliedPromo({
      code,
      pct
    });
    setPromoError("");
  };
  const removePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoError("");
  };
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your full name";
    if (!form.phone.trim()) e.phone = "Enter a phone number";
    if (!form.email.trim()) e.email = "Enter your email address";else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email address";
    if (!form.address.trim()) e.address = "Enter your delivery address";
    if (!form.date) e.date = "Pick a start date";
    if (!form.timeSlot) e.timeSlot = "Choose a delivery time";
    if (showWhatsapp && !form.whatsapp.trim()) e.whatsapp = "Enter your WhatsApp number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const submit = ev => {
    ev.preventDefault();
    if (!validate()) return;
    const slot = TIME_SLOTS.find(t => t.id === form.timeSlot);
    const summary = {
      subtotal,
      discountAmount,
      discountLabel: appliedPromo ? `Promo ${appliedPromo.code} (\u2212${Math.round(appliedPromo.pct * 100)}%)` : null,
      depositAmount: Number(depositAmount || 0),
      depositLabel,
      total
    };
    onContinue && onContinue({
      ...form,
      timeSlotLabel: slot ? slot.label : ""
    }, summary);
  };
  const labelStyle = {
    margin: "0 0 14px",
    fontFamily: "var(--font-body)",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-wide)",
    color: "var(--text-muted)",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  };
  const stepNo = n => /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-circle)",
      background: "var(--green-100)",
      color: "var(--green-800)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "11px",
      fontWeight: 700,
      flex: "none"
    }
  }, n);
  const fieldLabel = {
    fontFamily: "var(--font-body)",
    fontSize: "12px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-wide)",
    color: "var(--text-muted)",
    display: "block",
    marginBottom: "7px"
  };
  const fieldError = {
    display: "block",
    marginTop: "7px",
    fontFamily: "var(--font-body)",
    fontSize: "12px",
    color: "var(--error)"
  };
  const dateTileStyle = {
    height: TILE_HEIGHT,
    width: "100%",
    boxSizing: "border-box",
    padding: "0 16px",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    color: "var(--text-strong)",
    background: "var(--white)",
    border: `1.5px solid ${errors.date ? "var(--error)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)",
    outline: "none"
  };
  if (items.length === 0) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--bg-page)",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        color: "var(--text-muted)"
      }
    }, "Your cart is empty."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onBack
    }, "Back to Meal Plans")));
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-muted)",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), " Back"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 32px",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      fontSize: "clamp(28px, 6vw, 40px)",
      color: "var(--text-strong)"
    }
  }, "Checkout"), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "56px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("form", {
    id: "checkout-form",
    onSubmit: submit,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "28px",
      display: "flex",
      flexDirection: "column",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: labelStyle
  }, stepNo(1), " Contact details"), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2-tight",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Alexandra Doe",
    value: form.name,
    onChange: set("name"),
    error: errors.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Phone number",
    type: "tel",
    placeholder: "+971 5X XXX XXXX",
    value: form.phone,
    onChange: set("phone"),
    error: errors.phone
  }), !showWhatsapp ? /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "link",
    size: "sm",
    onClick: () => setShowWhatsapp(true),
    style: {
      alignSelf: "flex-start"
    }
  }, "WhatsApp number is different") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp number",
    type: "tel",
    placeholder: "+971 5X XXX XXXX",
    value: form.whatsapp,
    onChange: set("whatsapp"),
    error: errors.whatsapp
  }), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "link",
    size: "sm",
    onClick: () => {
      setShowWhatsapp(false);
      setForm(f => ({
        ...f,
        whatsapp: ""
      }));
    },
    style: {
      alignSelf: "flex-start"
    }
  }, "Same as phone number")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "14px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    type: "email",
    placeholder: "you@email.com",
    value: form.email,
    onChange: set("email"),
    error: errors.email
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: labelStyle
  }, stepNo(2), " Delivery address"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    as: "textarea",
    label: "Address",
    placeholder: "Building, street, apartment / villa number",
    value: form.address,
    onChange: set("address"),
    error: errors.address
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Area / Community",
    placeholder: "e.g. Business Bay",
    value: form.area,
    onChange: set("area"),
    hint: "Delivery available across Dubai only"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: labelStyle
  }, stepNo(3), " Delivery schedule"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: fieldLabel
  }, "Start date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: form.date,
    onChange: set("date"),
    style: dateTileStyle
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "6px",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-faint)"
    }
  }, "Orders placed before 12 PM are delivered the next day; after 12 PM, delivery takes one extra day."), errors.date && /*#__PURE__*/React.createElement("span", {
    style: fieldError
  }, errors.date)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: fieldLabel
  }, "Delivery time"), /*#__PURE__*/React.createElement("div", {
    className: "hk-timeslot-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "8px"
    }
  }, TIME_SLOTS.map(t => {
    const active = form.timeSlot === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => setForm(f => ({
        ...f,
        timeSlot: t.id
      })),
      style: {
        height: TILE_HEIGHT,
        boxSizing: "border-box",
        padding: "0 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-md)",
        textAlign: "center",
        cursor: "pointer",
        background: active ? "var(--green-700)" : "var(--white)",
        color: active ? "var(--ivory-50)" : "var(--text-body)",
        border: "1.5px solid " + (active ? "var(--green-700)" : errors.timeSlot ? "var(--error)" : "var(--border-default)"),
        fontFamily: "var(--font-body)",
        fontSize: "13px",
        fontWeight: 500,
        lineHeight: 1.15,
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, t.label);
  })), errors.timeSlot && /*#__PURE__*/React.createElement("span", {
    style: fieldError
  }, errors.timeSlot))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "16px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    as: "textarea",
    label: "Delivery notes (optional)",
    placeholder: "Gate code, preferred contact method, allergies\u2026",
    value: form.notes,
    onChange: set("notes")
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hk-sticky",
    style: {
      position: "sticky",
      top: "100px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "26px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "20px",
      color: "var(--text-strong)"
    }
  }, "Order Summary"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
      paddingBottom: "14px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontSize: "15px",
      color: "var(--text-strong)"
    }
  }, it.title), it.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-faint)"
    }
  }, it.meta), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, it.qty, " days \xB7 ", fmt(it.price), " ", currency, "/day"), it.excluded && it.excluded.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-faint)"
    }
  }, "Excluding: ", it.excluded.join(", "))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "14px",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, fmt(it.price * it.qty), " ", currency)))), appliedPromo ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
      background: "var(--green-50)",
      border: "1px solid var(--green-200)",
      borderRadius: "var(--radius-md)",
      padding: "11px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--green-800)"
    }
  }, "Promo ", /*#__PURE__*/React.createElement("strong", null, appliedPromo.code), " applied \xB7 ", Math.round(appliedPromo.pct * 100), "% off"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: removePromo,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-faint)",
      fontSize: "12px",
      fontFamily: "var(--font-body)",
      textDecoration: "underline"
    }
  }, "Remove")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Promo code",
    value: promoCode,
    onChange: e => {
      setPromoCode(e.target.value);
      if (promoError) setPromoError("");
    },
    style: {
      height: "44px"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "secondary",
    onClick: applyPromo,
    style: {
      flex: "0 0 auto",
      alignSelf: "flex-start",
      height: "44px"
    }
  }, "Apply")), promoError && /*#__PURE__*/React.createElement("span", {
    style: {
      ...fieldError,
      marginTop: "6px"
    }
  }, promoError)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "13.5px",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, fmt(subtotal), " ", currency)), discountAmount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "13.5px",
      color: "var(--text-brand)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Promo ", appliedPromo.code, " (\u2212", Math.round(appliedPromo.pct * 100), "%)"), /*#__PURE__*/React.createElement("span", null, "\u2212 ", fmt(discountAmount), " ", currency)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "13.5px",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Delivery"), /*#__PURE__*/React.createElement("span", null, "Free")), Number(depositAmount) > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "13.5px",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, depositLabel), /*#__PURE__*/React.createElement("span", null, fmt(depositAmount), " ", currency)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginTop: "6px",
      paddingTop: "14px",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-body)"
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "28px",
      color: "var(--text-brand)"
    }
  }, fmt(total), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      color: "var(--text-faint)"
    }
  }, currency)))), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    form: "checkout-form",
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, "Place Order")))));
}
window.Checkout = Checkout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Consultations.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  Tag
} = window.HealthyKitchenDesignSystem_f4c763;
const HK_WA = "https://wa.me/971585129792";
const bookSession = () => window.open(HK_WA, "_blank");

/* ---------- Hero ---------- */
function ConsultHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2 hk-hero-grid",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px 64px",
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "Consultations"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.02,
      fontSize: "clamp(36px, 5.5vw, 60px)",
      color: "var(--text-strong)"
    }
  }, "Expert guidance,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-700)"
    }
  }, "personal to you")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "18px",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: "48ch"
    }
  }, "Discover the nutrition plan that best suits your body with expert guidance from the doctors at our partner clinic. Each consultation gives you comprehensive insight into your dietary needs \u2014 so every meal moves you toward optimal health."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: bookSession
  }, "Book a Session"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Online or in-clinic"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/consult-hero.jpg",
    alt: "Consultation at the partner clinic",
    style: {
      width: "100%",
      aspectRatio: "4 / 5",
      objectFit: "cover",
      objectPosition: "50% 30%",
      borderRadius: "18px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-18px",
      bottom: "30px",
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "30px",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, "doctors, not guesswork"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, "partner clinic \xB7 Dubai")))));
}

/* ---------- How it works — interactive steps ---------- */
const HK_CONSULT_STEPS = [{
  n: "01",
  icon: "route",
  title: "Choose your format",
  body: "City life leaves little time for clinic visits — consult online from home, or come meet our doctors in person at the partner clinic. Both paths get you the same depth of guidance."
}, {
  n: "02",
  icon: "calendar-check",
  title: "Book at your convenience",
  body: "Tap “Book a Session” and you'll land in our WhatsApp chat. Our managers will find a time slot that fits your schedule — usually within a day or two."
}, {
  n: "03",
  icon: "clipboard-list",
  title: "Prepare your questions",
  body: "Online: have your weight and height ready, plus any nutrition questions on your mind. In person: the doctor takes your measurements at the clinic and addresses every concern on the spot."
}, {
  n: "04",
  icon: "stethoscope",
  title: "Meet with the doctor",
  body: "Connect through your preferred online platform, or visit the clinic at your scheduled time — and leave with personalized, actionable advice for your health journey."
}];
function ConsultSteps() {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: "Four simple steps"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "56px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, HK_CONSULT_STEPS.map((s, i) => {
    const isActive = active === i;
    return /*#__PURE__*/React.createElement("button", {
      key: s.n,
      onClick: () => setActive(i),
      onMouseEnter: () => setActive(i),
      "aria-pressed": isActive,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "18px",
        width: "100%",
        textAlign: "left",
        padding: "20px 14px",
        margin: 0,
        border: 0,
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: i === HK_CONSULT_STEPS.length - 1 ? "1px solid var(--border-subtle)" : "none",
        background: isActive ? "var(--green-50, rgba(46,89,60,0.06))" : "none",
        cursor: "pointer",
        font: "inherit",
        color: "inherit",
        transition: "background var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "26px",
        lineHeight: 1,
        color: isActive ? "var(--green-700)" : "var(--text-faint)",
        width: "44px",
        flexShrink: 0,
        transition: "color var(--dur-base) var(--ease-out)"
      }
    }, s.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        letterSpacing: "var(--tracking-wide)",
        fontSize: "19px",
        color: "var(--text-strong)",
        flex: 1
      }
    }, s.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        flexShrink: 0,
        background: isActive ? "var(--green-700)" : "var(--border-subtle)",
        transition: "background var(--dur-base) var(--ease-out)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "40px 38px",
      minHeight: "280px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-14px",
      bottom: "-34px",
      fontFamily: "var(--font-script)",
      fontSize: "140px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.06)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, HK_CONSULT_STEPS[active].n), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      border: "1.5px solid rgba(253,252,248,0.35)",
      background: "rgba(253,252,248,0.08)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": HK_CONSULT_STEPS[active].icon,
    style: {
      width: 24,
      height: 24,
      color: "var(--green-200)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "26px",
      color: "var(--ivory-50)"
    }
  }, HK_CONSULT_STEPS[active].title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.65,
      color: "var(--green-100)",
      maxWidth: "52ch",
      position: "relative"
    }
  }, HK_CONSULT_STEPS[active].body)))));
}

/* ---------- Formats & pricing ---------- */
const HK_CONSULT_FORMATS = [{
  slot: "hk-consult-f2f",
  photo: "assets/brand/consult-f2f-new.jpg",
  badge: "In person",
  title: "Face-to-Face Consultation",
  price: 495,
  body: "A personalized in-person session with our expert dietitians. A comprehensive evaluation of your dietary needs — lifestyle, medical history, preferences — with tailored advice on portion sizes, macronutrient distribution, food choices, and meal planning. Perfect if you value direct, hands-on interaction.",
  perks: ["Full evaluation at the clinic", "Measurements taken for you", "Tailored meal-planning strategy"]
}, {
  slot: "hk-consult-online",
  photo: "assets/brand/consult-online.jpg",
  badge: "From home",
  title: "Online Consultation",
  price: 495,
  body: "The same expert nutritional guidance, from the comfort of your home. Our dietitians assess your dietary habits, medical background, and health goals to build a customized meal plan — comprehensive, actionable advice that fits even the busiest schedule.",
  perks: ["Any platform you prefer", "Flexible time slots", "Customized meal plan"]
}];
function ConsultFormats() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Choose your format",
    title: "Two ways to meet"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px",
      alignItems: "stretch"
    }
  }, HK_CONSULT_FORMATS.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.slot,
    className: "hk-consult-card",
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, f.photo ? /*#__PURE__*/React.createElement("img", {
    src: f.photo,
    alt: f.title,
    style: {
      width: "100%",
      aspectRatio: "16 / 9",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: f.slot,
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "16 / 9",
      display: "block",
      borderRadius: "0"
    },
    shape: "rect",
    placeholder: "Drop a photo — " + f.title
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "16px",
      left: "16px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "solid"
  }, f.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "30px 28px 32px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "24px",
      color: "var(--text-strong)"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.62,
      color: "var(--text-muted)"
    }
  }, f.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, f.perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: "var(--green-700)",
      flexShrink: 0
    }
  }), p))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "18px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      lineHeight: 1,
      color: "var(--green-700)"
    }
  }, f.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, "AED / session")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: bookSession
  }, "Book a Session"))))))));
}

/* ---------- FAQ + CTA ---------- */
const HK_CONSULT_FAQ = [{
  q: "What can I expect during an individual consultation?",
  a: "Our expert dietitian conducts a thorough analysis of your lifestyle, medical history, and dietary preferences. You'll leave with a personalized meal plan designed around your health goals."
}, {
  q: "How are meal plans customized to my health needs?",
  a: "The dietitian tailors your plan based on the consultation, ensuring it fits your unique dietary requirements, health objectives, and any specific challenges you face."
}, {
  q: "How is the online consultation different from face-to-face?",
  a: "The face-to-face session offers an in-depth, hands-on evaluation at the clinic, while the online consultation delivers the same expert advice on diet, portions, and meal planning — from wherever you are."
}, {
  q: "How do follow-up consultations work?",
  a: "Follow-ups monitor your progress, adjust your meal plan as needed, and make sure you're continually moving toward your health goals."
}, {
  q: "Can the dietitian address specific restrictions or conditions?",
  a: "Yes — our dietitians create meal plans that cater to specific dietary restrictions and medical conditions, so your meals always support your overall health."
}, {
  q: "What ongoing support is available afterwards?",
  a: "Regular check-ins with your dietitian, meal-plan adjustments as necessary, and continuous guidance to help you maintain a healthy lifestyle."
}];
function ConsultFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: HK_CONSULT_FAQ,
    eyebrow: "Consultation FAQs",
    titleTop: "Questions",
    titleBottom: "& Answers"
  });
}
function ConsultCta() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      left: "-24px",
      bottom: "-40px",
      fontFamily: "var(--font-script)",
      fontSize: "200px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "listen"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      textAlign: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "clamp(28px, 4vw, 40px)",
      color: "var(--green-200)",
      lineHeight: 1
    }
  }, "your body is talking"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "clamp(30px, 5vw, 48px)",
      lineHeight: "var(--leading-tight)",
      color: "var(--ivory-50)",
      maxWidth: "22ch"
    }
  }, "Let a doctor help you understand it"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: bookSession
  }, "Book a Session"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      borderColor: "rgba(253,252,248,0.5)",
      color: "var(--ivory-50)"
    },
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "message-circle",
      style: {
        width: 17,
        height: 17
      }
    }),
    onClick: bookSession
  }, "WhatsApp Us"))));
}

/* ---------- Page ---------- */
function Consultations() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ConsultHero, null), /*#__PURE__*/React.createElement(ConsultSteps, null), /*#__PURE__*/React.createElement(ConsultFormats, null), /*#__PURE__*/React.createElement(ConsultFAQ, null), /*#__PURE__*/React.createElement(ConsultCta, null));
}
window.Consultations = Consultations;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Consultations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DetoxCleanseExtras.jsx
try { (() => {
// Detox & Cleanse–specific sections, rendered below the standard ProductDetail
// hero only when plan.slug === "detox-cleanse". Mirrors the other plan pages:
// pain points, A day on the plan (PlanMenu, 6 drinks) + stat band, how-it-works
// (green band accordion), and Questions & Answers.

// ---- When your body needs a full stop -------------------------------------------
function DetoxCleanseGamble() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const items = [{
    n: "01",
    icon: "calendar-x",
    h: "A stretch of stress and bad eating caught up with you",
    p: "Deadlines, travel, celebrations — the weeks where food happened to you. Your body kept score, and now it's asking for a reset."
  }, {
    n: "02",
    icon: "utensils",
    h: "Your digestion never gets a break",
    p: "Three meals plus snacks, every day, for years. Sometimes the kindest thing you can do for your gut is give it a short, well-fed rest."
  }, {
    n: "03",
    icon: "sparkles",
    h: "Dull skin, puffiness, low glow",
    p: "Skin reflects what's happening inside. Concentrated antioxidants and serious hydration are the fastest lever you can pull."
  }, {
    n: "04",
    icon: "timer",
    h: "You want a real reset — not a week-long project",
    p: "One to three days. Six bottles a day, delivered. No shopping, no juicer to clean, no decisions to make."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.08,
      fontSize: "clamp(28px, 4.2vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "The deepest reset"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      whiteSpace: "nowrap",
      fontStyle: "italic"
    }
  }, "we offer"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      borderTop: "1px solid var(--border-default)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-700)"
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "21px",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      marginTop: "64px",
      paddingTop: "56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "clamp(28px, 3.6vw, 42px)",
      color: "var(--text-strong)"
    }
  }, "Flood the body with nutrients  ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "Give digestion the day off")))));
}

// ---- A day on the cleanse (reuses PlanMenu carousel) + stat band ------------------
const DC_MENUS = [{
  label: "A day on the cleanse",
  meals: [{
    meal: "Drink 01",
    img: "assets/meals/dc-drink-1.jpg",
    title: "Super Duper detox juice",
    desc: "Leafy greens and cucumber — chlorophyll-rich, hydrating start to the day.",
    kcal: 171,
    p: 4,
    c: 30,
    f: 1
  }, {
    meal: "Drink 02",
    img: "assets/meals/dc-drink-2.jpg",
    title: "Matcha wake up smoothie",
    desc: "Ceremonial matcha blended with banana and greens — steady, jitter-free morning energy.",
    kcal: 70,
    p: 1,
    c: 14,
    f: 0
  }, {
    meal: "Drink 03",
    img: "assets/meals/dc-drink-3.jpg",
    title: "Glowing skin juice",
    desc: "Carrot, pumpkin, pineapple, ginger and green apple — beta-carotene and vitamin C for glowing skin.",
    kcal: 241,
    p: 4,
    c: 48,
    f: 1
  }, {
    meal: "Drink 04",
    img: "assets/meals/dc-drink-4.jpg",
    title: "Cells boosting milk",
    desc: "Nuts and seeds blended for fiber, healthy fats and sustained energy mid-cleanse.",
    kcal: 610,
    p: 26,
    c: 16,
    f: 48
  }, {
    meal: "Drink 05",
    img: "assets/meals/dc-drink-5.jpg",
    title: "Anticandida lemonade",
    desc: "Butterfly pea flower tea with ginger, lavender extract and lemon — sugar-free and cleansing, supporting kidney and liver function.",
    kcal: 76,
    p: 1,
    c: 17,
    f: 0
  }, {
    meal: "Drink 06",
    img: "assets/meals/dc-drink-6.jpg",
    title: "Hormone balance smoothie",
    desc: "Cacao, seeds and adaptogens — a calming, restorative end to the day.",
    kcal: 222,
    p: 3,
    c: 40,
    f: 3
  }]
}];
function DetoxCleanseMenu() {
  const dcStat = (val, label, accent) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      alignItems: "flex-start",
      flex: "1 1 0",
      minWidth: "150px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "44px" : "38px",
      lineHeight: 1,
      color: "var(--ivory-50)"
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--green-200)"
    }
  }, label));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanMenu, {
    menus: DC_MENUS,
    showTotal: false,
    showMacros: false,
    sub: "Six nutrient-packed juices and smoothies a day \u2014 vegetable and fruit juices, antioxidant berry blends, and hydrating, cleansing beverages. Fully vegan."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 30px"
    }
  }, dcStat("85%", "Vegetable content", true), dcStat("20+g", "Gut-restoring fiber per day"), dcStat("100%", "Vegan, freshly squeezed"), dcStat("0g", "Added sugar")))));
}

// ---- How the cleanse works (green band accordion) ----------------------------------
function DetoxCleansePhases() {
  const items = [{
    n: "01",
    icon: "droplets",
    cap: "All day · Six bottles",
    h: "Flood",
    p: "A high concentration of vitamins, minerals and antioxidants in the most digestible form there is. Leafy greens, ginger and citrus deliver detoxifying compounds and vitamin C from the first bottle."
  }, {
    n: "02",
    icon: "moon",
    cap: "While you cleanse · Digest less",
    h: "Rest",
    p: "With no solid food to process, our smoothies keep you nicely satisfied, your digestive system gets a genuine break — while hydrating, cleansing beverages support the kidneys and liver doing the detox work."
  }, {
    n: "03",
    icon: "sun",
    cap: "After day 3 · Transition",
    h: "Glow",
    p: "Clearer skin, lighter digestion, a visible glow. Keep it to 3 days maximum — then transition to Easy Detox for a more comprehensive, balanced detoxification."
  }];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-20px",
      top: "6px",
      fontFamily: "var(--font-script)",
      fontSize: "210px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "glow"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "48px",
      flexWrap: "wrap",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "The full picture"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: "clamp(34px, 4.4vw, 54px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ivory-50)"
    }
  }, "How the cleanse"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      color: "var(--green-300)"
    }
  }, "resets your system"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      maxWidth: "380px"
    }
  }, "Three days, three jobs: flood the body with nutrients, rest the digestive system, and let the results show. Then hand over to a balanced plan.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-muscleacc",
    role: "tablist",
    "aria-label": "How the cleanse resets your system",
    onMouseLeave: () => setPaused(false),
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "stretch"
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.n,
      role: "tab",
      "aria-selected": isActive,
      onMouseEnter: () => {
        setActive(i);
        setPaused(true);
      },
      onFocus: () => {
        setActive(i);
        setPaused(true);
      },
      onClick: () => {
        setActive(i);
        setPaused(true);
      },
      className: "hk-muscleacc-panel",
      style: {
        flex: isActive ? "2.4 1 0%" : "1 1 0%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "18px",
        minHeight: "230px",
        padding: "22px 24px",
        margin: 0,
        textAlign: "left",
        background: isActive ? "rgba(253,252,248,0.09)" : "rgba(253,252,248,0.02)",
        border: "1px solid rgba(253,252,248,0.18)",
        borderRadius: "var(--radius-lg)",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "flex 0.6s var(--ease-out), background 0.45s ease, transform 0.45s ease",
        transform: isActive ? "translateY(-4px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "aria-hidden": "true",
      "data-lucide": it.icon,
      style: {
        position: "absolute",
        right: "-20px",
        top: "-20px",
        width: "150px",
        height: "150px",
        color: "var(--ivory-50)",
        opacity: isActive ? 0.14 : 0.08,
        pointerEvents: "none",
        transition: "opacity 0.45s ease"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-script)",
        fontSize: "26px",
        lineHeight: 1,
        color: isActive ? "var(--ivory-50)" : "var(--green-300)",
        transition: "color 0.4s ease",
        position: "relative"
      }
    }, it.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--green-300)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: isActive ? "20px" : "0px",
        opacity: isActive ? 1 : 0,
        transition: "all 0.45s ease 0.15s"
      }
    }, it.cap), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--tracking-wide)",
        fontSize: "24px",
        lineHeight: 1.2,
        color: "var(--ivory-50)"
      }
    }, it.h), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isActive ? "200px" : "0px",
        opacity: isActive ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.55s var(--ease-out), opacity 0.4s ease 0.15s"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15.5px",
        lineHeight: 1.65,
        color: "var(--green-100)",
        maxWidth: "46ch"
      }
    }, it.p))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flex: 1
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it.n,
    style: {
      flex: 1,
      height: "2px",
      background: i === active ? "var(--ivory-50)" : "rgba(253,252,248,0.18)",
      transition: "background 0.4s ease"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--green-200)"
    }
  }, items[active].n, " / 03")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      textAlign: "center"
    }
  }, "We recommend no more than 3 days on the cleanse \u2014 longer durations should be done under professional supervision.")));
}

// ---- Questions & Answers -------------------------------------------------------------
const DC_FAQ_ITEMS = [{
  q: "What are the key benefits of the Detox and Cleanse plan?",
  a: "It provides a high concentration of vitamins, minerals, and antioxidants in an easily digestible form — supporting detoxification, boosting immunity, and enhancing skin health."
}, {
  q: "How do the juices and smoothies detoxify the body and boost immunity?",
  a: "The plan incorporates ingredients like leafy greens, ginger, and citrus fruits that are rich in detoxifying compounds and vitamin C, which help cleanse the body and strengthen the immune system."
}, {
  q: "What makes it effective for achieving a healthy glow?",
  a: "The high intake of hydrating fruits and vegetables, combined with antioxidants, promotes clear skin, reduces inflammation, and provides the nutrients that contribute to a radiant complexion."
}, {
  q: "How long should I follow the cleanse?",
  a: "For best results, 3 days maximum — depending on your goals and how your body responds. After that, switch to our Easy Detox plan for a more comprehensive, balanced detoxification. Longer durations should be done under professional supervision."
}, {
  q: "Who is this cleanse for?",
  a: "Anyone looking to reset their digestive system, support weight loss, enhance skin health, or boost their immune system — especially after periods of stress or unhealthy eating."
}, {
  q: "What if I dislike an ingredient?",
  a: "Customize up to 3 ingredients to match your taste — no extra charge."
}, {
  q: "When and how do drinks get delivered?",
  a: "Delivered fresh daily across Dubai, 7 AM–12 PM, chilled, in recyclable, eco-friendly packaging."
}];
function DetoxCleanseFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: DC_FAQ_ITEMS
  });
}
window.DetoxCleanseGamble = DetoxCleanseGamble;
window.DetoxCleanseMenu = DetoxCleanseMenu;
window.DetoxCleansePhases = DetoxCleansePhases;
window.DetoxCleanseFAQ = DetoxCleanseFAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DetoxCleanseExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EasyDetoxExtras.jsx
try { (() => {
// Easy Detox–specific sections, rendered below the standard ProductDetail hero
// only when plan.slug === "easy-detox". Mirrors the other plan pages: pain
// points, A day on the plan (PlanMenu) + stat band, how-it-works (green band
// accordion), and Questions & Answers.

// ---- When your body asks for a reset ------------------------------------------
function EasyDetoxGamble() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const items = [{
    n: "01",
    icon: "battery-low",
    h: "You feel heavy, dull and permanently tired",
    p: "Processed food, late dinners, coffee-on-empty. The toxin load of a modern week adds up — and your energy pays the bill."
  }, {
    n: "02",
    icon: "glass-water",
    h: "Juice fasts feel like punishment",
    p: "Days of liquid hunger, headaches, and a mood nobody around you enjoys. Deprivation isn't a requirement for a reset."
  }, {
    n: "03",
    icon: "sparkles",
    h: "\"Detox\" teas and pills haven't done anything",
    p: "Your liver and kidneys do the detoxing. What they need isn't a magic supplement — it's food that supports them and a break from what doesn't."
  }, {
    n: "04",
    icon: "repeat",
    h: "Every reset you start dissolves by Wednesday",
    p: "Shopping, juicing, prepping salads and soups from scratch — a proper detox week is a lot of work exactly when you have no energy for it."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.08,
      fontSize: "clamp(28px, 4.2vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "Eating on autopilot"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      whiteSpace: "nowrap",
      fontStyle: "italic"
    }
  }, "catches up with you"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      borderTop: "1px solid var(--border-default)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-700)"
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "21px",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      marginTop: "64px",
      paddingTop: "56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "clamp(28px, 3.6vw, 42px)",
      color: "var(--text-strong)"
    }
  }, "A real reset is  ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "Not fasting, not deprivation")))));
}

// ---- A day on the plan (reuses PlanMenu carousel) + stat band -------------------
const ED_MENUS = [{
  label: "A day on the plan",
  meals: [{
    meal: "Drink 1",
    img: "assets/meals/ed-drink-1.jpg",
    title: "Blood cleansing juice",
    desc: "Apple, beetroot and carrot, freshly squeezed — nitrates, beta-carotene and antioxidants to support circulation.",
    kcal: 215,
    p: 2,
    c: 50,
    f: 1
  }, {
    meal: "Drink 2",
    img: "assets/meals/ed-drink-2.jpg",
    title: "Lean green smoothie",
    desc: "Greens, cucumber and apple blended whole — fiber and chlorophyll that keep you full and light.",
    kcal: 179,
    p: 4,
    c: 25,
    f: 7
  }, {
    meal: "Lunch",
    img: "assets/meals/ed-lunch.jpg",
    title: "Wild rice salad with vegan feta cheese",
    desc: "Wild rice with arugula, pine nuts and pomegranate seeds — slow carbs, polyphenols and greens that keep the detox working.",
    kcal: 329,
    p: 10,
    c: 34,
    f: 17
  }, {
    meal: "Snack",
    img: "assets/meals/ed-snack.jpg",
    title: "Vegan wild cherry tart",
    desc: "Almond-flour crust filled with wild cherries slow-cooked with rosemary — no refined sugar, no dairy.",
    kcal: 233,
    p: 6,
    c: 12,
    f: 16
  }, {
    meal: "Dinner",
    img: "assets/meals/ed-dinner.jpg",
    title: "Vegetable curry with cauliflower rice",
    desc: "Warm, light and satisfying — a gentle end to the day that still feels like dinner.",
    kcal: 434,
    p: 16,
    c: 34,
    f: 26
  }]
}];
function EasyDetoxMenu() {
  const edStat = (val, label, accent) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      alignItems: "flex-start",
      flex: "1 1 0",
      minWidth: "150px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "44px" : "38px",
      lineHeight: 1,
      color: "var(--ivory-50)"
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--green-200)"
    }
  }, label));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanMenu, {
    menus: ED_MENUS,
    showTotal: false,
    sub: "Juices, smoothies, salads and soups \u2014 fresh detoxifying vegetables and fruits, whole grains and plant proteins. Fully vegan, sugar-, gluten- and dairy-free."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 30px"
    }
  }, edStat("100%", "Vegan — plants only", true), edStat("Daily", "Liver-supporting greens, beets"), edStat("0", "Fasting days — you eat real meals"), edStat("0g", "Added sugar, gluten, dairy")))));
}

// ---- How the reset works (green band accordion) ---------------------------------
function EasyDetoxPhases() {
  const items = [{
    n: "01",
    icon: "droplets",
    cap: "Hydrate",
    h: "Flush",
    p: "Green juices, herbal teas and hydrating foods like cucumber and celery flush the system while delivering the nutrients a tired body is usually missing."
  }, {
    n: "02",
    icon: "leaf",
    cap: "Support",
    h: "Nourish",
    p: "Your liver does the actual detoxing. Leafy greens, beets and lemon enhance its function — while whole grains and plant proteins keep you full and steady, no deprivation required."
  }, {
    n: "03",
    icon: "sun",
    cap: "Feel it",
    h: "Recharge",
    p: "After the first few days most people report more energy, clearer skin and a lighter, calmer digestion. Repeat seasonally — 3–4 times a year — whenever you need the reset."
  }];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-20px",
      top: "6px",
      fontFamily: "var(--font-script)",
      fontSize: "210px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "refresh"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "48px",
      flexWrap: "wrap",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "The full picture"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: "clamp(34px, 4.4vw, 54px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ivory-50)"
    }
  }, "How a gentle detox"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      color: "var(--green-300)"
    }
  }, "actually works"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      maxWidth: "380px"
    }
  }, "Your body already knows how to detox \u2014 it just needs the right support and a break from what's slowing it down. Every day on the plan does both.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-muscleacc",
    role: "tablist",
    "aria-label": "How a gentle detox works",
    onMouseLeave: () => setPaused(false),
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "stretch"
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.n,
      role: "tab",
      "aria-selected": isActive,
      onMouseEnter: () => {
        setActive(i);
        setPaused(true);
      },
      onFocus: () => {
        setActive(i);
        setPaused(true);
      },
      onClick: () => {
        setActive(i);
        setPaused(true);
      },
      className: "hk-muscleacc-panel",
      style: {
        flex: isActive ? "2.4 1 0%" : "1 1 0%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "18px",
        minHeight: "230px",
        padding: "22px 24px",
        margin: 0,
        textAlign: "left",
        background: isActive ? "rgba(253,252,248,0.09)" : "rgba(253,252,248,0.02)",
        border: "1px solid rgba(253,252,248,0.18)",
        borderRadius: "var(--radius-lg)",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "flex 0.6s var(--ease-out), background 0.45s ease, transform 0.45s ease",
        transform: isActive ? "translateY(-4px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "aria-hidden": "true",
      "data-lucide": it.icon,
      style: {
        position: "absolute",
        right: "-20px",
        top: "-20px",
        width: "150px",
        height: "150px",
        color: "var(--ivory-50)",
        opacity: isActive ? 0.14 : 0.08,
        pointerEvents: "none",
        transition: "opacity 0.45s ease"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-script)",
        fontSize: "26px",
        lineHeight: 1,
        color: isActive ? "var(--ivory-50)" : "var(--green-300)",
        transition: "color 0.4s ease",
        position: "relative"
      }
    }, it.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--green-300)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: isActive ? "20px" : "0px",
        opacity: isActive ? 1 : 0,
        transition: "all 0.45s ease 0.15s"
      }
    }, it.cap), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--tracking-wide)",
        fontSize: "24px",
        lineHeight: 1.2,
        color: "var(--ivory-50)"
      }
    }, it.h), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isActive ? "200px" : "0px",
        opacity: isActive ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.55s var(--ease-out), opacity 0.4s ease 0.15s"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15.5px",
        lineHeight: 1.65,
        color: "var(--green-100)",
        maxWidth: "46ch"
      }
    }, it.p))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flex: 1
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it.n,
    style: {
      flex: 1,
      height: "2px",
      background: i === active ? "var(--ivory-50)" : "rgba(253,252,248,0.18)",
      transition: "background 0.4s ease"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--green-200)"
    }
  }, items[active].n, " / 03")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      textAlign: "center"
    }
  }, "A temporary energy dip in the first day or two is normal \u2014 most people feel refreshed, clearer and lighter by day three.")));
}

// ---- Questions & Answers ----------------------------------------------------------
const ED_FAQ_ITEMS = [{
  q: "What are the primary goals of the Easy Detox plan?",
  a: "To eliminate toxins from the body, reset digestive health, and boost energy levels — leading to improved mental clarity, better skin health, and enhanced overall well-being."
}, {
  q: "How does it support the body's natural detoxification?",
  a: "The plan is built on liver-supporting foods like leafy greens, beets, and lemon, which enhance liver function and promote the elimination of toxins — your body's own detox pathways, supported rather than replaced."
}, {
  q: "What happens to energy and mood during the detox?",
  a: "Some people experience a temporary dip in energy and mood in the first day or two. After that, most report increased energy, improved mood, and mental clarity."
}, {
  q: "Which foods and drinks are central to the plan?",
  a: "Green juices, herbal teas, and hydrating foods like cucumber and celery — they flush out toxins while providing essential nutrients and hydration, alongside whole grains and plant proteins so you never go hungry."
}, {
  q: "How often should I do an Easy Detox?",
  a: "Seasonally — about 3–4 times a year, or whenever you feel the need to reset and rejuvenate your body."
}, {
  q: "What if I dislike an ingredient?",
  a: "Customize up to 3 ingredients per meal to match your taste — no extra charge."
}, {
  q: "When and how do meals get delivered?",
  a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging."
}];
function EasyDetoxFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: ED_FAQ_ITEMS
  });
}
window.EasyDetoxGamble = EasyDetoxGamble;
window.EasyDetoxMenu = EasyDetoxMenu;
window.EasyDetoxPhases = EasyDetoxPhases;
window.EasyDetoxFAQ = EasyDetoxFAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EasyDetoxExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  Button,
  Input
} = window.HealthyKitchenDesignSystem_f4c763;
function Promo() {
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "#E6EACE",
      borderTop: "1px solid var(--green-100)",
      borderBottom: "1px solid var(--green-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/botanical-pattern.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.3,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      position: "relative",
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "64px 32px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "clamp(28px, 5vw, 38px)",
      color: "var(--green-800)"
    }
  }, "Get 10% off your first order"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      color: "var(--text-muted)"
    }
  }, "Join the list \u2014 we'll send your code and a few clean-eating tips."), done ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--green-700)",
      fontWeight: 500
    }
  }, "Thanks! Check your inbox for your code.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    className: "hk-promo-form",
    style: {
      display: "flex",
      gap: "10px",
      width: "100%",
      maxWidth: "440px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@email.com",
    required: true,
    style: {
      height: "48px"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Get Code"))));
}
function Footer({
  onNav
}) {
  const cols = [{
    head: "Explore",
    items: ["Meal Plans", "Consultations", "Intolerance Testing", "Blog"]
  }, {
    head: "Company",
    items: ["About Us", "Contact Us", "FAQs"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: "relative",
      background: "var(--green-900)",
      color: "var(--green-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/botanical-pattern.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.02,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-4",
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: window.HK_LOGO_SRC || (window.HK_ASSET_BASE || "") + "assets/brand/healthy-kitchen-logo.png",
    alt: "Healthy Kitchen \u2014 Healing food delivery",
    style: {
      height: "82px",
      width: "auto",
      display: "block",
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "20px",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: 1.6,
      color: "var(--green-200)",
      maxWidth: "30ch"
    }
  }, "Chef-made, gut-friendly meal plans delivered daily across Dubai, 7 AM\u201312 PM.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.head
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 16px",
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, c.head), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "11px"
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav(i),
    style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--green-100)"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 16px",
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontFamily: "var(--font-display)",
      fontSize: "22px",
      color: "var(--ivory-50)"
    }
  }, "+971 58 512 97 92"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px"
    }
  }, ["instagram", "message-circle", "phone"].map(ic => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-circle)",
      border: "1px solid rgba(255,255,255,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--green-100)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 16,
      height: 16
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-footer-bottom",
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "20px 32px",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--green-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 Healthy Kitchen Delivery"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav("Privacy Policy"),
    style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      font: "inherit",
      color: "inherit"
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav("Terms & Conditions"),
    style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer",
      font: "inherit",
      color: "inherit"
    }
  }, "Terms & Conditions")))));
}
window.Promo = Promo;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GutHealingExtras.jsx
try { (() => {
// Gut Healing Protocol–specific sections, rendered below the standard
// ProductDetail hero only when plan.slug === "gut-healing". Mirrors the other
// plan pages: pain points, A day on the plan (PlanMenu) + stat band, protocol
// phases (green band), and Questions & Answers.

// ---- When your gut runs the show --------------------------------------------
function GutHealingGamble() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const items = [{
    n: "01",
    icon: "cloud-fog",
    h: "Bloating has become your baseline",
    p: "You've stopped remembering what a flat, comfortable stomach feels like. Some days you plan your outfit around it."
  }, {
    n: "02",
    icon: "zap-off",
    h: "Your energy crashes after every meal",
    p: "Lunch shouldn't feel like sedation. When digestion struggles, everything else — focus, mood, sleep — struggles with it."
  }, {
    n: "03",
    icon: "pill",
    h: "Probiotics and supplements haven't fixed it",
    p: "You can't out-supplement a diet that keeps irritating the gut. The food itself has to change first."
  }, {
    n: "04",
    icon: "repeat",
    h: "Every 'gut reset' you've tried was impossible to sustain",
    p: "Bone broth from scratch, fermented everything, restrictive lists. Week one goes fine. Week two, life gets in the way."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.08,
      fontSize: "clamp(15px, 4.2vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "When your gut"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      whiteSpace: "nowrap",
      fontStyle: "italic"
    }
  }, "runs the show"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      borderTop: "1px solid var(--border-default)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-700)"
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "21px",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      marginTop: "64px",
      paddingTop: "56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "clamp(28px, 3.6vw, 42px)",
      color: "var(--text-strong)"
    }
  }, "A gut can heal  ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "If you stop irritating it and start feeding it")))));
}

// ---- A day on the plan (reuses PlanMenu carousel) + stat band ----------------
const GH_MENUS = [{
  label: "A day on the plan",
  meals: [{
    meal: "Breakfast",
    img: "assets/meals/gut-breakfast.jpg",
    title: "Zucchini pancakes with salmon & coconut yogurt",
    desc: "Rich in omega-3 for anti-inflammatory support. Gentle on digestion, with natural probiotics.",
    kcal: 364,
    p: 22,
    c: 24,
    f: 20
  }, {
    meal: "Lunch",
    img: "assets/meals/gut-lunch.jpg",
    title: "Pharmacy bowl",
    desc: "Fermented vegetables for gut flora, plus fiber from greens, seeds and avocado to boost nutrient absorption.",
    kcal: 533,
    p: 41,
    c: 36,
    f: 25
  }, {
    meal: "Dinner",
    img: "assets/meals/gut-dinner.jpg",
    title: "Konjac pasta bolognese",
    desc: "Low-carb and light on digestion, with prebiotics for microbiome health — an easy-absorbing, soothing evening meal.",
    kcal: 434,
    p: 44,
    c: 15,
    f: 22
  }, {
    meal: "Snack",
    img: "assets/meals/gut-snack.jpg",
    title: "Hazelnut cake",
    desc: "No sugar, no flour — only whole foods. Rich in magnesium for a calming effect and stable blood sugar.",
    kcal: 278,
    p: 8,
    c: 21,
    f: 18
  }]
}];
function GutHealingMenu() {
  const ghStat = (val, label, accent) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      alignItems: "flex-start",
      flex: "1 1 0",
      minWidth: "150px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "44px" : "38px",
      lineHeight: 1,
      color: "var(--ivory-50)"
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--green-200)"
    }
  }, label));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanMenu, {
    menus: GH_MENUS,
    showTotal: false,
    sub: "Nutrient-dense, easy-to-digest meals: slow-cooked proteins, cooked vegetables, fermented foods daily \u2014 all dairy-, gluten- and sugar-free."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 30px"
    }
  }, ghStat("1×", "Fermented food every day", true), ghStat("25g+", "Gut-feeding fiber per day"), ghStat("80%", /*#__PURE__*/React.createElement(React.Fragment, null, "Better absorption of", /*#__PURE__*/React.createElement("br", null), "vitamins and macronutrients")), ghStat("0g", /*#__PURE__*/React.createElement(React.Fragment, null, "Added sugar, gluten, dairy,", /*#__PURE__*/React.createElement("br", null), "seed oils"))))));
}

// ---- How the healing works (green band) ---------------------------------------
function GutHealingPhases() {
  const items = [{
    n: "01",
    icon: "circle-slash",
    cap: "Settle",
    h: "Remove & rest",
    p: "Take out the common irritants — gluten, dairy, refined sugar, seed oils, alcohol. Cooked, gentle meals give the gut lining a break."
  }, {
    n: "02",
    icon: "soup",
    cap: "Nourish",
    h: "Rebuild",
    p: "Collagen-rich broths, glycine, zinc and omega-3s supply the raw materials the gut wall uses to repair itself."
  }, {
    n: "03",
    icon: "sprout",
    cap: "Feed",
    h: "Repopulate",
    p: "Daily fermented foods and 25g+ of varied plant fiber feed a more diverse microbiome — the long-term insurance policy."
  }];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-20px",
      top: "6px",
      fontFamily: "var(--font-script)",
      fontSize: "210px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "restore"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "48px",
      flexWrap: "wrap",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "The full picture"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: "clamp(34px, 4.4vw, 54px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ivory-50)"
    }
  }, "How the healing"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      color: "var(--green-300)"
    }
  }, "actually happens"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      maxWidth: "380px"
    }
  }, "Gut healing isn't one trick \u2014 it's a sequence. Every menu on this plan works all three stages at once, so you don't have to think about any of them.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-muscleacc",
    role: "tablist",
    "aria-label": "How the healing works",
    onMouseLeave: () => setPaused(false),
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "stretch"
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.n,
      role: "tab",
      "aria-selected": isActive,
      onMouseEnter: () => {
        setActive(i);
        setPaused(true);
      },
      onFocus: () => {
        setActive(i);
        setPaused(true);
      },
      onClick: () => {
        setActive(i);
        setPaused(true);
      },
      className: "hk-muscleacc-panel",
      style: {
        flex: isActive ? "2.4 1 0%" : "1 1 0%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "18px",
        minHeight: "230px",
        padding: "22px 24px",
        margin: 0,
        textAlign: "left",
        background: isActive ? "rgba(253,252,248,0.09)" : "rgba(253,252,248,0.02)",
        border: "1px solid rgba(253,252,248,0.18)",
        borderRadius: "var(--radius-lg)",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "flex 0.6s var(--ease-out), background 0.45s ease, transform 0.45s ease",
        transform: isActive ? "translateY(-4px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "aria-hidden": "true",
      "data-lucide": it.icon,
      style: {
        position: "absolute",
        right: "-20px",
        top: "-20px",
        width: "150px",
        height: "150px",
        color: "var(--ivory-50)",
        opacity: isActive ? 0.14 : 0.08,
        pointerEvents: "none",
        transition: "opacity 0.45s ease"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-script)",
        fontSize: "26px",
        lineHeight: 1,
        color: isActive ? "var(--ivory-50)" : "var(--green-300)",
        transition: "color 0.4s ease",
        position: "relative"
      }
    }, it.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--green-300)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: isActive ? "20px" : "0px",
        opacity: isActive ? 1 : 0,
        transition: "all 0.45s ease 0.15s"
      }
    }, it.cap), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--tracking-wide)",
        fontSize: "24px",
        lineHeight: 1.2,
        color: "var(--ivory-50)"
      }
    }, it.h), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isActive ? "200px" : "0px",
        opacity: isActive ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.55s var(--ease-out), opacity 0.4s ease 0.15s"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15.5px",
        lineHeight: 1.65,
        color: "var(--green-100)",
        maxWidth: "46ch"
      }
    }, it.p))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flex: 1
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it.n,
    style: {
      flex: 1,
      height: "2px",
      background: i === active ? "var(--ivory-50)" : "rgba(253,252,248,0.18)",
      transition: "background 0.4s ease"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--green-200)"
    }
  }, items[active].n, " / 03")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      textAlign: "center"
    }
  }, "Most clients feel the difference \u2014 less bloating, steadier energy \u2014 within the first two weeks.")));
}

// ---- Questions & Answers --------------------------------------------------------
const GH_FAQ_ITEMS = [{
  q: "How is this different from the Low FODMAP plan?",
  a: "Low FODMAP is a short diagnostic protocol for finding triggers. Gut Healing is a nourishing, longer-term plan focused on repairing the gut lining and rebuilding the microbiome — less about eliminating, more about restoring."
}, {
  q: "How long until I feel a difference?",
  a: "Most clients notice less bloating and steadier post-meal energy within the first two weeks. Deeper microbiome shifts build over 4+ weeks of consistency."
}, {
  q: "Is this a medical treatment?",
  a: "No. It's a structured nutrition plan that supports digestive health. If you have a diagnosed GI condition, keep your physician involved."
}, {
  q: "Are fermented foods in every menu?",
  a: "Yes — at least one live-culture food daily (sauerkraut, fermented vegetables, dairy-free kefir-style yogurt), portioned so it's gentle even for sensitive guts."
}, {
  q: "What if I dislike an ingredient?",
  a: "Customize up to 3 ingredients per meal to match your taste — no extra charge."
}, {
  q: "When and how do meals get delivered?",
  a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging."
}];
function GutHealingFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: GH_FAQ_ITEMS
  });
}
window.GutHealingGamble = GutHealingGamble;
window.GutHealingMenu = GutHealingMenu;
window.GutHealingPhases = GutHealingPhases;
window.GutHealingFAQ = GutHealingFAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GutHealingExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button
} = window.HealthyKitchenDesignSystem_f4c763;
function Logo({
  tone = "dark",
  height = 58,
  onClick
}) {
  const src = window.HK_LOGO_SRC || (window.HK_ASSET_BASE || "") + "assets/brand/healthy-kitchen-logo.png";
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": "Healthy Kitchen \u2014 home",
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: 0,
      display: "inline-flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Healthy Kitchen \u2014 Healing food delivery",
    style: {
      height: height + "px",
      width: "auto",
      display: "block",
      filter: tone === "light" ? "brightness(0) invert(1)" : "none"
    }
  }));
}
function Header({
  cartCount = 0,
  onNav,
  onHome,
  onCart,
  onSelectPlan
}) {
  const links = ["Meal Plans", "Consultations", "Intolerance Testing", "Blog", "About Us"];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [plansOpen, setPlansOpen] = React.useState(false);
  const plans = window.HK_PLANS || [];
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [menuOpen, plansOpen]);
  const nav = l => {
    setMenuOpen(false);
    onNav && onNav(l);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(253,252,248,0.88)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px",
      height: "76px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-logo"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: onHome
  })), /*#__PURE__*/React.createElement("nav", {
    className: "hk-nav-desktop",
    style: {
      display: "flex",
      gap: "28px",
      flexShrink: 0
    }
  }, links.map(l => l === "Meal Plans" ? /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      position: "relative"
    },
    onMouseEnter: () => setPlansOpen(true),
    onMouseLeave: () => setPlansOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav(l),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: plansOpen ? "var(--green-700)" : "var(--text-body)",
      transition: "color var(--dur-base) var(--ease-out)",
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      whiteSpace: "nowrap"
    }
  }, l, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 13,
      height: 13,
      transform: plansOpen ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: "50%",
      paddingTop: "14px",
      transform: plansOpen ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(6px)",
      opacity: plansOpen ? 1 : 0,
      pointerEvents: plansOpen ? "auto" : "none",
      transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "10px",
      minWidth: "180px",
      width: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      zIndex: 60
    }
  }, plans.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.slug,
    onClick: () => {
      setPlansOpen(false);
      onSelectPlan ? onSelectPlan(p) : onNav && onNav(l);
    },
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      textAlign: "left",
      display: "block",
      whiteSpace: "nowrap",
      padding: "10px 12px",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-body)",
      transition: "background var(--dur-base) var(--ease-out)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--green-50)",
    onMouseLeave: e => e.currentTarget.style.background = "none"
  }, /*#__PURE__*/React.createElement("span", null, p.name)))))) : /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onNav && onNav(l),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-body)",
      transition: "color var(--dur-base) var(--ease-out)",
      whiteSpace: "nowrap"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--green-700)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-body)"
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "7px",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      letterSpacing: "var(--tracking-wide)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shopping-bag",
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, cartCount)), /*#__PURE__*/React.createElement("div", {
    className: "hk-header-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav("Meal Plans")
  }, "Explore Meal Plans")), /*#__PURE__*/React.createElement("button", {
    className: "hk-nav-toggle",
    onClick: () => setMenuOpen(o => !o),
    "aria-label": menuOpen ? "Close menu" : "Open menu",
    "aria-expanded": menuOpen,
    style: {
      alignItems: "center",
      justifyContent: "center",
      width: "38px",
      height: "38px",
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": menuOpen ? "x" : "menu",
    style: {
      width: 22,
      height: 22
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: menuOpen ? "420px" : "0px",
      overflow: "hidden",
      transition: "max-height var(--dur-slow) var(--ease-out)",
      borderTop: menuOpen ? "1px solid var(--border-subtle)" : "none",
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "8px 24px 20px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => nav(l),
    style: {
      background: "none",
      border: 0,
      borderBottom: "1px solid var(--border-subtle)",
      cursor: "pointer",
      textAlign: "left",
      padding: "16px 4px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-body)"
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    fullWidth: true,
    onClick: () => nav("Meal Plans")
  }, "Explore Meal Plans")))));
}
window.Logo = Logo;
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  Tag
} = window.HealthyKitchenDesignSystem_f4c763;
function Hero({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2 hk-hero-grid",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px 80px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "Chef-made \xB7 Delivered daily in Dubai"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 0.98,
      fontSize: "clamp(38px, 6.5vw, 68px)",
      color: "var(--text-strong)"
    }
  }, "Personalized", /*#__PURE__*/React.createElement("br", null), "functional", /*#__PURE__*/React.createElement("br", null), "meal plans"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "18px",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      maxWidth: "46ch"
    }
  }, "Clean, simple, and functional. Our daily-delivered meals are always dairy-free, gluten-free, and sugar-free \u2014 perfect for gut health, vibrant energy, and peak performance. Discover the taste of clean eating."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "Explore Meal Plans"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "message-circle",
      style: {
        width: 17,
        height: 17
      }
    })
  }, "WhatsApp Us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginTop: "8px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Dairy-free"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Gluten-free"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Sugar-free"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Clean food"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hk-hero",
    style: {
      width: "100%",
      aspectRatio: "4 / 5",
      display: "block"
    },
    shape: "rounded",
    radius: "18",
    placeholder: "Drop a hero dish photo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-18px",
      bottom: "34px",
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "30px",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, "fresh daily"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, "7 AM \u2013 12 PM delivery")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroV2.jsx
try { (() => {
const {
  Button,
  Tag
} = window.HealthyKitchenDesignSystem_f4c763;
const HK_HERO_PHOTO = (window.HK_ASSET_BASE || "../../") + "assets/brand/hero-banner.jpg";
const heroV2Eyebrow = {
  fontFamily: "var(--font-body)",
  fontSize: "12px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "var(--tracking-widest)"
};
function HeroScrollCue({
  color = "var(--ivory-50)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "10px",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      opacity: 0.75
    }
  }, "Scroll"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1px",
      height: "34px",
      background: "currentColor",
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("svg", {
    className: "hk-bob",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5L8 11L14 5",
    stroke: "currentColor",
    strokeWidth: "1.6"
  })));
}

/* ---- 1a — full-bleed photo statement ---- */
function HeroFullBleed({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: "min(88vh, 840px)",
      minHeight: "620px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url('${HK_HERO_PHOTO}') center 30% / cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(6,50,28,0.12) 0%, rgba(6,50,28,0.04) 35%, rgba(6,50,28,0.82) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "0 48px 52px",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...heroV2Eyebrow,
      color: "var(--green-200)"
    }
  }, "Chef-made \xB7 Delivered daily in Dubai"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.94,
      letterSpacing: "0.01em",
      fontSize: "clamp(44px, 5.6vw, 72px)",
      color: "var(--ivory-50)"
    }
  }, "Personalized", /*#__PURE__*/React.createElement("br", null), "functional", /*#__PURE__*/React.createElement("br", null), "meal plans"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.55,
      color: "var(--green-100)",
      maxWidth: "38ch"
    }
  }, "Always dairy-free, gluten-free, and sugar-free \u2014 cooked fresh every morning, on your table by noon."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onExplore
  }, "Explore Meal Plans"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "var(--ivory-50)",
      borderColor: "rgba(255,255,255,0.6)"
    }
  }, "WhatsApp Us"))), /*#__PURE__*/React.createElement(HeroScrollCue, null)));
}

/* ---- 1b — split, photo panel + peek strip ---- */
function HeroSplit({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2 hk-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.08fr 0.92fr",
      alignItems: "center",
      minHeight: "680px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      padding: "56px 30px 100px 48px",
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...heroV2Eyebrow,
      color: "var(--text-faint)"
    }
  }, "Chef-made \xB7 Delivered daily in Dubai"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 0 -4px",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.88,
      letterSpacing: 0,
      fontSize: "clamp(54px, 7vw, 92px)",
      color: "var(--text-strong)"
    }
  }, "Personalized", /*#__PURE__*/React.createElement("br", null), "functional", /*#__PURE__*/React.createElement("br", null), "meal plans"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      maxWidth: "36ch"
    }
  }, "Meal plans built around how your body actually feels \u2014 cooked daily and delivered before noon."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "Explore Meal Plans"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "WhatsApp Us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Dairy-free"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Gluten-free"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Sugar-free"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Clean food"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "stretch",
      minHeight: "680px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: "46px",
      left: "36px",
      right: 0,
      borderRadius: "28px 0 0 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url('${HK_HERO_PHOTO}') center 45% / cover`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "14px",
      top: "64px",
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "14px 18px",
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "26px",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, "fresh daily"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, "7 AM \u2013 12 PM delivery")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "46px",
      background: "var(--green-700)",
      display: "flex",
      alignItems: "center",
      padding: "0 48px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-100)",
      fontFamily: "var(--font-display)",
      fontSize: "28px",
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      transform: "translateY(5px)"
    }
  }, "\u2014 Why our clients never go back to takeout \u2014")));
}

/* ---- 1c — marquee ticker + centered tilted photo ---- */
function HeroMarquee({
  onExplore
}) {
  const ticker = "Dairy-free · Gluten-free · Sugar-free · Clean food · Delivered daily · Dairy-free · Gluten-free · Sugar-free · Clean food · Delivered daily ·";
  const tickerStyle = {
    fontFamily: "var(--font-body)",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase",
    color: "var(--green-100)"
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--green-700)",
      overflow: "hidden",
      whiteSpace: "nowrap",
      padding: "12px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-marquee",
    style: {
      display: "inline-flex",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tickerStyle
  }, ticker), /*#__PURE__*/React.createElement("span", {
    style: tickerStyle
  }, ticker))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "52px 32px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...heroV2Eyebrow,
      color: "var(--text-faint)"
    }
  }, "Chef-made \xB7 Delivered daily in Dubai"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.94,
      fontSize: "clamp(42px, 4.8vw, 62px)",
      color: "var(--text-strong)"
    }
  }, "Personalized functional", /*#__PURE__*/React.createElement("br", null), "meal plans"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      maxWidth: "46ch"
    }
  }, "Clean, simple, and built around your body. Always dairy-free, gluten-free, and sugar-free \u2014 see a real day on the table below."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "Explore Meal Plans")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "420px",
      marginTop: "30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: 0,
      width: "min(760px, 82vw)",
      height: "500px",
      transform: "translateX(-50%) rotate(-2deg)",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 30px 60px rgba(28,33,29,0.22)",
      border: "8px solid var(--white)",
      background: `url('${HK_HERO_PHOTO}') center 40% / cover`
    }
  })));
}

/* ---- 1d — green editorial, arch photo window ---- */
function HeroGreen({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--green-700)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2 hk-hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      alignItems: "end",
      minHeight: "660px",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      padding: "72px 0 84px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...heroV2Eyebrow,
      color: "var(--green-300)"
    }
  }, "Chef-made \xB7 Delivered daily in Dubai"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.92,
      letterSpacing: "0.01em",
      fontSize: "clamp(48px, 6vw, 80px)",
      color: "var(--ivory-50)"
    }
  }, "Personalized", /*#__PURE__*/React.createElement("br", null), "functional", /*#__PURE__*/React.createElement("br", null), "meal plans"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.55,
      color: "var(--green-200)",
      maxWidth: "38ch"
    }
  }, "Always dairy-free, gluten-free, and sugar-free \u2014 cooked fresh every morning, on your table by noon."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onExplore
  }, "Explore Meal Plans"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "var(--ivory-50)",
      borderColor: "rgba(255,255,255,0.5)"
    }
  }, "WhatsApp Us")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "32px",
      color: "var(--green-300)",
      lineHeight: 1,
      marginTop: "6px"
    }
  }, "fresh every morning")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "end",
      justifySelf: "center",
      width: "min(420px, 100%)",
      height: "560px",
      borderRadius: "999px 999px 0 0",
      overflow: "hidden",
      boxShadow: "0 24px 60px rgba(6,50,28,0.45)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url('${HK_HERO_PHOTO}') center 40% / cover`
    }
  }))));
}

/* ---- 1e — type-first, rotating word + photo band ---- */
function HeroRotatingWord({
  words,
  interval = 2200
}) {
  const [i, setI] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI(x => (x + 1) % words.length);
        setVisible(true);
      }, 260);
    }, interval);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-grid",
      textAlign: "left"
    }
  }, words.map((w, k) => /*#__PURE__*/React.createElement("span", {
    key: w,
    style: {
      gridArea: "1 / 1",
      fontStyle: "italic",
      fontWeight: 700,
      color: "var(--green-600)",
      visibility: k === i ? "visible" : "hidden",
      opacity: k === i && visible ? 1 : 0,
      transform: k === i && visible ? "translateY(0)" : "translateY(12px)",
      transition: "opacity 0.26s ease, transform 0.26s ease"
    }
  }, w)));
}
function HeroKinetic({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--bg-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 32px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
      maxWidth: "860px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...heroV2Eyebrow,
      color: "var(--text-faint)"
    }
  }, "Chef-made \xB7 Delivered daily in Dubai"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: "clamp(38px, 4.2vw, 64px)",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "Personalized", " ", /*#__PURE__*/React.createElement(HeroRotatingWord, {
    words: ["functional", "dairy-free", "gluten-free", "sugar-free"]
  }), " ", "meal plans"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, "Clean, simple, and built around your body \u2014 cooked fresh every morning, delivered before noon"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "2px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "Explore Meal Plans"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "WhatsApp Us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "400px",
      marginTop: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url('${HK_HERO_PHOTO}') center 42% / cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: "18px",
      transform: "translateX(-50%)"
    }
  }, /*#__PURE__*/React.createElement(HeroScrollCue, null))));
}

/* ---- 1f — triptych crops ---- */
function HeroTriptych({
  onExplore
}) {
  const crops = ["18% 30%", "50% 48%", "84% 62%"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "56px 32px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...heroV2Eyebrow,
      color: "var(--text-faint)"
    }
  }, "Chef-made \xB7 Delivered daily in Dubai"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      lineHeight: 0.94,
      fontSize: "clamp(44px, 5vw, 66px)",
      color: "var(--text-strong)"
    }
  }, "Personalized functional", /*#__PURE__*/React.createElement("br", null), "meal plans"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "Explore Meal Plans"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg"
  }, "WhatsApp Us"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      maxWidth: "var(--container-max)",
      margin: "44px auto 0",
      padding: "0 48px",
      height: "380px"
    }
  }, crops.map((pos, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderRadius: "18px 18px 0 0",
      overflow: "hidden",
      position: "relative",
      transform: i === 1 ? "translateY(-20px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `url('${HK_HERO_PHOTO}') ${pos} / 240% auto`
    }
  })))));
}
function HeroV2({
  variant = "1a",
  onExplore
}) {
  if (variant === "1b") return /*#__PURE__*/React.createElement(HeroSplit, {
    onExplore: onExplore
  });
  if (variant === "1c") return /*#__PURE__*/React.createElement(HeroMarquee, {
    onExplore: onExplore
  });
  if (variant === "1d") return /*#__PURE__*/React.createElement(HeroGreen, {
    onExplore: onExplore
  });
  if (variant === "1e") return /*#__PURE__*/React.createElement(HeroKinetic, {
    onExplore: onExplore
  });
  if (variant === "1f") return /*#__PURE__*/React.createElement(HeroTriptych, {
    onExplore: onExplore
  });
  return /*#__PURE__*/React.createElement(HeroFullBleed, {
    onExplore: onExplore
  });
}
Object.assign(window, {
  HeroV2,
  HeroFullBleed,
  HeroSplit,
  HeroMarquee,
  HeroGreen,
  HeroKinetic,
  HeroTriptych
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/IngredientModal.jsx
try { (() => {
// Ingredient-exclusion modal for the "Build your plan" calculator. Lets the
// user pick up to 3 ingredients to exclude from their meals — matches the
// "Customize up to 3 ingredients" promise shown across the site.

const {
  Button: IngModalButton
} = window.HealthyKitchenDesignSystem_f4c763;
const INGREDIENT_LIST = ["Agar", "All eggs (includes all types and products)", "Almond milk", "Almonds (includes all products: nuts, milk, flour, butter)", "Aloe", "Amaranth", "Anise", "Apple", "Apricot (fresh and dried)", "Aronia", "Artichoke", "Arugula/Rocket leaves", "Asparagus (white asparagus included)", "Atlantic cod", "Atlantic herring", "Avocado", "Bamboo sprouts", "Banana", "Baobab", "Barley", "Basil", "Bay leaf", "Beef/Meat", "Blackberry", "Blueberry", "Brazil nut", "Broccoli", "Buckwheat", "Buffalo's milk", "Buttermilk", "Cabbage (includes red cabbage and Chinese cabbage)", "Capers", "Caraway", "Cardamom", "Carrot", "Cauliflower", "Cayenne pepper", "Celery", "Chamomile", "Chard", "Cherry", "Chia seeds", "Chicken", "Chickpea", "Chickpea flour", "Chicory (Chicorée)", "Chili (red and all types)", "Chinese cabbage", "Chives", "Chlorella", "Cinnamon", "Clove", "Cocoa powder", "Coconut (includes coconut milk/cream, coconut powder)", "Coffee", "Coriander", "Corn (includes all products: flour, polenta, tortilla)", "Cottage cheese", "Cranberry", "Cucumber", "Cumin", "Curry", "Dandelion root", "Date", "Dill", "Duck", "Eggplant", "Endive", "European anchovy", "Fennel (bulb)", "Fig", "Garlic", "Ginger", "Ginkgo", "Ginseng", "Goat", "Goat cheese", "Goat's milk", "Gouda cheese", "Grape", "Grapefruit", "Greater burdock root", "Green bean", "Guarana", "Hake", "Hazelnut", "Hibiscus", "Honey", "Jasmine", "Juniper berry", "Kiwi", "Lamb", "Leek", "Lemon", "Lemongrass", "Lentil", "Lime", "Linseed", "Lobster", "Lychee", "Maca powder", "Macadamia", "Mackerel", "Mango", "Maple syrup", "Marjoram", "Matcha powder", "Melon (all varieties)", "Millet", "Mint", "Monkfish", "Moringa", "Mozzarella", "Mung bean", "Mustard", "Nectarine", "Nori", "Nutmeg", "Oats (includes all products)", "Onion (raw)", "Orange", "Oregano", "Oyster", "Papaya", "Paprika", "Parmesan", "Parsley", "Passion fruit", "Pea (all types)", "Peach", "Peanut (includes butter)", "Pear", "Pecan nut", "Pepper (black/white/green/red/yellow)", "Peppermint", "Pineapple", "Pistachio nuts", "Plum (includes prune)", "Pok-Choi", "Pomegranate (includes molasses)", "Potato (includes sweet potato)", "Prawn", "Pumpkin", "Quinoa", "Raisin", "Raspberry", "Red beet", "Red currant", "Rice", "Romanesco", "Rosemary", "Rosewater", "Sage", "Salmon (includes fillet and smoked salmon)", "Sausage (includes bacon)", "Scallop", "Sesame seeds", "Shallot", "Sheep cheese", "Sheep's milk", "Shrimp (includes Mollusks like octopus, calamari, mussels, squid, and scallops)", "Sole", "Soy (includes all products)", "Spinach (baby spinach included)", "Spirulina", "Sriracha sauce", "Strawberry", "Sunflower seeds", "Sweet chestnut", "Swordfish", "Tamarind", "Tapioca flour", "Tarragon", "Tea (black, green)", "Thyme", "Tiger nut", "Tilapia", "Tomato", "Trout", "Tuna", "Turkey", "Turmeric", "Vanilla", "Walnut", "Watermelon", "Wheat (includes all products: flour, bran, germ)", "Whey protein", "White currant", "White sesame seed", "Wild boar", "Wild garlic", "Wine", "Yam", "Yogurt (cow, goat, sheep)", "Zucchini"];
function IngredientModal({
  selected,
  onToggle,
  onClose
}) {
  const [query, setQuery] = React.useState("");
  const atLimit = selected.length >= 3;
  const filtered = INGREDIENT_LIST.filter(i => i.toLowerCase().includes(query.trim().toLowerCase()));
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [selected, query]);
  const pillStyle = {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "11px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    background: "var(--green-100)",
    color: "var(--green-800)",
    borderRadius: "var(--radius-pill)",
    padding: "5px 11px"
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(30,32,26,0.5)",
      zIndex: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      width: "100%",
      maxWidth: "760px",
      maxHeight: "86vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-ingmodal-pad-top",
    style: {
      padding: "28px 28px 0",
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "26px",
      color: "var(--text-strong)"
    }
  }, "Customize Your Meal Plan"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "var(--text-muted)",
      flexShrink: 0,
      padding: "4px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 20,
      height: 20
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, "All our dishes exclude lactose, white sugar, and gluten by default, ensuring a healthier meal plan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: pillStyle
  }, "Dairy-free"), /*#__PURE__*/React.createElement("span", {
    style: pillStyle
  }, "Sugar-free"), /*#__PURE__*/React.createElement("span", {
    style: pillStyle
  }, "Gluten-free")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, "You can further personalize your meal by removing up to 3 ingredients that you have an intolerance to or simply dislike."), selected.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, selected.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "12px",
      fontFamily: "var(--font-body)",
      background: "var(--clay-100)",
      color: "var(--clay-600)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 6px 5px 11px"
    }
  }, i, /*#__PURE__*/React.createElement("button", {
    onClick: () => onToggle(i),
    "aria-label": "Remove " + i,
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "inherit",
      display: "flex",
      padding: "2px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 12,
      height: 12
    }
  }))))), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search ingredients\u2026",
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: "12px 16px",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hk-ingmodal-pad-body",
    style: {
      borderTop: "1px solid var(--border-subtle)",
      marginTop: "16px",
      padding: "16px 28px 28px",
      overflowY: "auto",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "2px 20px"
    }
  }, filtered.map(ing => {
    const checked = selected.includes(ing);
    const disabled = !checked && atLimit;
    return /*#__PURE__*/React.createElement("label", {
      key: ing,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 0",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        color: disabled ? "var(--text-faint)" : "var(--text-body)",
        cursor: disabled ? "not-allowed" : "pointer"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      onChange: () => onToggle(ing),
      style: {
        width: 16,
        height: 16,
        accentColor: "var(--green-700)",
        cursor: disabled ? "not-allowed" : "pointer"
      }
    }), ing);
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-faint)"
    }
  }, "No ingredients match \"", query, "\"."))), /*#__PURE__*/React.createElement("div", {
    className: "hk-ingmodal-pad-foot",
    style: {
      borderTop: "1px solid var(--border-subtle)",
      padding: "18px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-faint)"
    }
  }, selected.length, " / 3 selected"), /*#__PURE__*/React.createElement(IngModalButton, {
    variant: "primary",
    onClick: onClose
  }, "Done"))));
}
window.IngredientModal = IngredientModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/IngredientModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/IntoleranceTesting.jsx
try { (() => {
const {
  Button,
  SectionHeading,
  Tag
} = window.HealthyKitchenDesignSystem_f4c763;
const HK_IT_WA = "https://wa.me/971585129792";
const itBook = () => window.open(HK_IT_WA, "_blank");

/* ---------- Hero ---------- */
function ItHero() {
  const stats = [{
    v: "283",
    l: "ingredients tested"
  }, {
    v: "5 min",
    l: "test at the clinic"
  }, {
    v: "2 days",
    l: "results by email"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2 hk-hero-grid",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "72px 32px 64px",
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "Intolerance Testing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.02,
      fontSize: "clamp(36px, 5.5vw, 60px)",
      color: "var(--text-strong)"
    }
  }, "Find what your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-700)"
    }
  }, "body rejects")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "18px",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      maxWidth: "50ch"
    }
  }, "Unlike allergies, intolerances cause chronic symptoms \u2014 digestive issues, headaches, fatigue, skin problems. Our test identifies the foods and substances your body doesn't tolerate well, so you can make informed dietary choices and feel the difference."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: itBook
  }, "Book a Session")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0",
      marginTop: "6px",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      flex: 1,
      padding: "18px 18px 0 " + (i === 0 ? "0" : "18px"),
      borderLeft: i === 0 ? "none" : "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "30px",
      lineHeight: 1,
      color: "var(--green-700)"
    }
  }, s.v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, s.l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/it-hero.jpg",
    alt: "Blood sample being taken at the clinic",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "4 / 5",
      objectFit: "cover",
      borderRadius: "18px",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-18px",
      bottom: "30px",
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "30px",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, "know, don't guess"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, "partner clinic \xB7 Dubai")))));
}

/* ---------- How it works — timeline ---------- */
const HK_IT_STEPS = [{
  n: "01",
  icon: "list-checks",
  title: "Choose your option",
  body: "With consultation — our experts guide you through dietary adjustments and lifestyle changes. Without — you get the results and manage your diet independently."
}, {
  n: "02",
  icon: "calendar-check",
  title: "Make an appointment",
  body: "Tap “Book a Session” to reach us on WhatsApp. Our managers will schedule a convenient time for your test."
}, {
  n: "03",
  icon: "test-tube",
  title: "Do the test",
  body: "The test takes just 5 minutes at our clinic. Samples are analyzed and results are emailed to you within 2 working days."
}, {
  n: "04",
  icon: "file-check",
  title: "Check the results",
  body: "You'll see clearly which foods to avoid. Chose the consultation option? Schedule a follow-up with our doctor for personalized advice."
}];
function ItSteps() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: "From booking to answers"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-4",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "22px"
    }
  }, HK_IT_STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: "var(--bg-page)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "26px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      lineHeight: 1,
      color: "transparent",
      WebkitTextStroke: "1.1px var(--green-700)"
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      border: "1.5px solid var(--green-300)",
      background: "var(--green-50, rgba(46,89,60,0.06))"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 20,
      height: 20,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "19px",
      color: "var(--text-strong)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "14.5px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, s.body))))));
}

/* ---------- Packages ---------- */
const HK_IT_PACKAGES = [{
  slot: "hk-it-test",
  photo: "assets/it-combo.jpg",
  badge: "Results only",
  title: "Intolerance Test",
  price: 2000,
  body: "Quickly identify foods and substances your body may not tolerate well. A simple 5-minute test at our clinic — results emailed within 2 working days with essential information about which foods to avoid.",
  perks: ["283 ingredients screened", "5-minute clinic visit", "Results in 2 working days"]
}, {
  slot: "hk-it-combo",
  photo: "assets/it-test.jpg",
  badge: "Most complete",
  title: "Test + Consultation",
  price: 2495,
  body: "Combine the test with a comprehensive consultation. After receiving your results, meet our expert dietitians to discuss them in detail — personalized advice and a tailored meal plan to manage your intolerances and reach your health goals.",
  perks: ["Everything in the test", "Follow-up with a dietitian", "Tailored meal plan included"]
}];
function ItPackages() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pricing",
    title: "Two ways to test"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "28px",
      alignItems: "stretch"
    }
  }, HK_IT_PACKAGES.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.slot,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, f.photo ? /*#__PURE__*/React.createElement("img", {
    src: f.photo,
    alt: f.title,
    style: {
      width: "100%",
      aspectRatio: "16 / 9",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: f.slot,
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "16 / 9",
      display: "block",
      borderRadius: "0"
    },
    shape: "rect",
    placeholder: "Drop a photo — " + f.title
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "16px",
      left: "16px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "solid"
  }, f.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "30px 28px 32px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "24px",
      color: "var(--text-strong)"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.62,
      color: "var(--text-muted)"
    }
  }, f.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, f.perks.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: "var(--green-700)",
      flexShrink: 0
    }
  }), p))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "18px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      lineHeight: 1,
      color: "var(--green-700)"
    }
  }, f.price.toLocaleString("en-US")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, "AED")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: itBook
  }, "Book a Session"))))))));
}

/* ---------- Ingredient explorer — interactive ---------- */
function ItIngredients() {
  const cats = window.HK_INTOLERANCE_CATS || [];
  const total = cats.reduce((s, c) => s + c.items.length, 0);
  const [activeKey, setActiveKey] = React.useState(cats.length ? cats[0].key : "");
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [activeKey, query]);
  const q = query.trim().toLowerCase();
  const searching = q.length > 0;
  const results = searching ? cats.map(c => ({
    ...c,
    items: c.items.filter(it => it.toLowerCase().includes(q))
  })).filter(c => c.items.length) : cats.filter(c => c.key === activeKey);
  const found = results.reduce((s, c) => s + c.items.length, 0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-26px",
      top: "0px",
      fontFamily: "var(--font-script)",
      fontSize: "200px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "283"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "40px",
      flexWrap: "wrap",
      marginBottom: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "What we test"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "clamp(30px, 4.5vw, 46px)",
      lineHeight: 1.06,
      color: "var(--ivory-50)"
    }
  }, "All ", total, " ingredients,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-300)"
    }
  }, "one simple test"))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "rgba(253,252,248,0.08)",
      border: "1px solid rgba(253,252,248,0.25)",
      borderRadius: "var(--radius-pill)",
      padding: "12px 18px",
      minWidth: "min(320px, 100%)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 17,
      height: 17,
      color: "var(--green-200)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search an ingredient\u2026",
    style: {
      background: "none",
      border: 0,
      outline: "none",
      color: "var(--ivory-50)",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      width: "100%"
    }
  }), searching && /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuery(""),
    "aria-label": "Clear search",
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "var(--green-200)",
      display: "grid",
      placeItems: "center",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 15,
      height: 15
    }
  })))), !searching && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "34px"
    }
  }, cats.map(c => {
    const isActive = c.key === activeKey;
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      onClick: () => setActiveKey(c.key),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "9px 16px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "13px",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        background: isActive ? "var(--ivory-50)" : "rgba(253,252,248,0.06)",
        color: isActive ? "var(--green-800)" : "var(--green-100)",
        border: `1px solid ${isActive ? "var(--ivory-50)" : "rgba(253,252,248,0.25)"}`,
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, c.label, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        opacity: 0.65
      }
    }, c.items.length));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    }
  }, results.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, searching && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, c.label, " \xB7 ", c.items.length), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(253,252,248,0.08)",
      border: "1px solid rgba(253,252,248,0.16)",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--ivory-50)"
    }
  }, it))))), searching && found === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      color: "var(--green-100)"
    }
  }, "Nothing matching \u201C", query, "\u201D \u2014 try a shorter word, or ask us on WhatsApp."))));
}

/* ---------- FAQ + CTA ---------- */
const HK_IT_FAQ = [{
  q: "What is the process for undergoing intolerance testing?",
  a: "The test takes 5 minutes at our partner clinic. Afterward, results are emailed within 2 working days, detailing which foods and substances to avoid."
}, {
  q: "What options do I have for receiving my results?",
  a: "You can receive your results with or without a follow-up consultation. The consultation adds personalized advice on managing your intolerances."
}, {
  q: "How does the consultation enhance the test?",
  a: "It helps interpret your results and provides tailored advice on diet, portion sizes, and recommendations on food groups."
}, {
  q: "What types of intolerances can the test identify?",
  a: "A wide range — dairy, meats, seafood, cereals, nuts, fruits, vegetables, spices, and more. 283 ingredients in total."
}, {
  q: "How quickly can I book and complete the test?",
  a: "Book a session via WhatsApp; the testing itself takes just 5 minutes at our partner clinic."
}, {
  q: "What does the test cost, and what's included?",
  a: "The test is 2000 AED. With the consultation option it's 2495 AED, including personalized dietary guidance."
}];
function ItCta() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#E6EACE",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "88px 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: "clamp(28px, 4vw, 40px)",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, "five minutes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "clamp(30px, 5vw, 48px)",
      lineHeight: "var(--leading-tight)",
      color: "var(--text-strong)",
      maxWidth: "34ch"
    }
  }, "For answers", /*#__PURE__*/React.createElement("br", null), "your body has been asking for"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: itBook
  }, "Book a Session"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "message-circle",
      style: {
        width: 17,
        height: 17
      }
    }),
    onClick: itBook
  }, "WhatsApp Us"))));
}

/* ---------- Page ---------- */
function IntoleranceTesting() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ItHero, null), /*#__PURE__*/React.createElement(ItSteps, null), /*#__PURE__*/React.createElement(ItPackages, null), /*#__PURE__*/React.createElement(ItIngredients, null), /*#__PURE__*/React.createElement(FAQ, {
    items: HK_IT_FAQ,
    eyebrow: "Intolerance testing FAQs",
    titleTop: "Questions",
    titleBottom: "& Answers"
  }), /*#__PURE__*/React.createElement(ItCta, null));
}
window.IntoleranceTesting = IntoleranceTesting;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/IntoleranceTesting.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LongevityExtras.jsx
try { (() => {
// Longevity Diet–specific sections, rendered below the standard ProductDetail
// calculator only when plan.slug === "longevity". Mirrors the Muscle UP page
// structure: Evidence, A day on the plan (menu carousel via PlanMenu),
// Longevity foods (green band), and Questions & Answers.

// ---- Built on the nutrition that actually has evidence behind it ---------
function LongevityEvidence() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const items = [{
    n: "01",
    icon: "utensils",
    h: "The Mediterranean diet, the most studied diet in the world",
    p: "Olive oil, fish, legumes, vegetables, whole grains, nuts. Three decades of cohort evidence make this the most rigorously supported pattern of eating we have. We use it as the backbone.",
    src: "PREDIMED trial — Estruch et al., NEJM 2018, N=7,447"
  }, {
    n: "02",
    icon: "flask-conical",
    h: "Valter Longo's longevity nutrition pillars",
    p: "Dr. Longo runs the Longevity Institute at USC. TIME named him one of the 50 most influential people in healthcare in 2018. His framework — pescatarian-leaning, lower animal protein under 65, 12-hour eating window, legumes daily — informs the structural logic of the plan.",
    src: "Longo, V.D., USC Longevity Institute."
  }, {
    n: "03",
    icon: "globe",
    h: "Blue Zones, the populations that live longest",
    p: "Sardinia, Ikaria, Okinawa, Nicoya, Loma Linda. The common thread isn't a single nutrient. It's daily beans, leafy greens, nuts, modest fish, almost no refined sugar.",
    src: "Dan Buettner / National Geographic. Peer-reviewed work on Sardinian centenarians."
  }, {
    n: "04",
    icon: "sprout",
    h: "Plant diversity, measured",
    p: "The largest open microbiome study ever conducted (11,000+ participants) found that people who ate 30+ different plant species per week had measurably more diverse gut microbiomes. Our weekly menu rotates through 35+. We print the count on your menu.",
    src: "McDonald et al., mSystems (ASM), 2018."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.08,
      fontSize: "clamp(28px, 4.2vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "Built on the nutrition"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      whiteSpace: "nowrap",
      fontStyle: "italic"
    }
  }, "that actually has evidence behind it"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      borderTop: "1px solid var(--border-default)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-700)"
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "21px",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.p), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12.5px",
      lineHeight: 1.45,
      color: "var(--text-faint)",
      fontStyle: "italic"
    }
  }, it.src)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      marginTop: "64px",
      paddingTop: "56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "clamp(28px, 3.6vw, 42px)",
      color: "var(--text-strong)"
    }
  }, "No trends, no biohacks ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "Just the pattern from the places people live longest")))));
}

// ---- A day on the plan (reuses PlanMenu carousel) -------------------------
const LG_MENUS = [{
  label: "A day on the plan",
  meals: [{
    meal: "Breakfast",
    img: "assets/meals/longevity-breakfast.jpg",
    title: "Potato waffle with smoked salmon & egg",
    desc: "Cured salmon, jammy egg and a potato waffle under herbed coconut yoghurt — omega-3 forward and blood-sugar friendly.",
    kcal: 391,
    p: 25,
    c: 30,
    f: 19
  }, {
    meal: "Lunch",
    img: "assets/meals/longevity-lunch.jpg",
    title: "Beetroot summer salad with mango & prawns",
    desc: "Wild greens, sweet beets, mango and pumpkin seeds with poached prawns — polyphenol-rich and Blue Zone inspired.",
    kcal: 500,
    p: 44,
    c: 29,
    f: 23
  }, {
    meal: "Dinner",
    img: "assets/meals/longevity-dinner.jpg",
    title: "Miso salmon with sweet potato & broccoli",
    desc: "Caramelised sweet potato and steamed broccoli with organic miso salmon. Plant-forward comfort.",
    kcal: 513,
    p: 40,
    c: 32,
    f: 25
  }, {
    meal: "Snack 1",
    img: "assets/meals/longevity-snack-1.jpg",
    title: "Rich chocolate cake with raw cacao & raspberry",
    desc: "A dense almond-flour cake with raw cacao ganache and fresh raspberries — naturally sweetened, no refined sugar.",
    kcal: 202,
    p: 6,
    c: 13,
    f: 14
  }, {
    meal: "Snack 2",
    img: "assets/meals/longevity-snack-2.jpg",
    title: "Homemade hummus with vegetable sticks",
    desc: "Silky chickpea hummus, good olive oil and smoked paprika with crisp carrot, cucumber and celery. Fiber and good fats.",
    kcal: 201,
    p: 10,
    c: 29,
    f: 5
  }]
}];
function LongevityMenu() {
  const lgStat = (val, label, accent) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      alignItems: "flex-start",
      flex: "1 1 0",
      minWidth: "150px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "44px" : "38px",
      lineHeight: 1,
      color: "var(--ivory-50)"
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--green-200)"
    }
  }, label));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanMenu, {
    menus: LG_MENUS,
    showTotal: false,
    sub: "A sample day from the plan \u2014 each meal shows its macros and why it earns its place."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 30px"
    }
  }, lgStat("35+", "Plant species per week", true), lgStat("30–45ml", "Extra virgin olive oil / day"), lgStat("3×", "Omega-3 rich foods / week"), lgStat("0g", "Added sugar, gluten, dairy, seed oils")))));
}

// ---- Every box is built from a handful of longevity foods -----------------
function LongevityFoods() {
  const foods = [{
    icon: "droplet",
    h: "Extra-virgin olive oil",
    p: "Polyphenols and monounsaturated fat — the backbone of the Mediterranean pattern."
  }, {
    icon: "leaf",
    h: "Leafy greens",
    p: "Folate, vitamin K and nitrates for vascular and brain health."
  }, {
    icon: "bean",
    h: "Legumes",
    p: /*#__PURE__*/React.createElement(React.Fragment, null, "The common denominator of long-lived diets: fiber, plant protein,", /*#__PURE__*/React.createElement("br", null), "slow carbs.")
  }, {
    icon: "nut",
    h: "Nuts & seeds",
    p: "A daily handful, linked to lower cardiovascular risk."
  }, {
    icon: "cherry",
    h: "Berries",
    p: "Anthocyanins that support memory and tame oxidative stress."
  }, {
    icon: "fish",
    h: "Fatty fish",
    p: "Omega-3s for heart rhythm, blood vessels and cognition."
  }, {
    icon: "wheat",
    h: "Whole grains",
    p: "Intact fiber for steady glucose and a well-fed microbiome."
  }, {
    icon: "sprout",
    h: "Fermented vegetables",
    p: "Live cultures that keep the gut ecosystem diverse."
  }];
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-20px",
      top: "6px",
      fontFamily: "var(--font-script)",
      fontSize: "210px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "longer"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "64px 32px 68px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "12px",
      textAlign: "left",
      marginBottom: "40px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "Inside the box"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "-0.01em",
      fontWeight: 400,
      lineHeight: 1.08,
      fontSize: "clamp(30px, 3.4vw, 42px)",
      maxWidth: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ivory-50)"
    }
  }, "Every box is built from"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-300)",
      whiteSpace: "nowrap"
    }
  }, "a handful of longevity foods")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      maxWidth: "560px"
    }
  }, "Eight ingredients with real evidence behind them, rotated through every menu \u2014 so eating for the long run never gets boring.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      columnGap: "64px",
      rowGap: "26px",
      width: "100%"
    }
  }, foods.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.icon,
    style: {
      display: "flex",
      gap: "20px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true",
    "data-lucide": f.icon,
    style: {
      width: 42,
      height: 42,
      flexShrink: 0,
      marginTop: "1px",
      color: "var(--green-300)",
      opacity: 0.9,
      strokeWidth: 1.15,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      minWidth: 0,
      flex: "1 1 auto"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: 1.2,
      color: "var(--ivory-50)"
    }
  }, f.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "13.5px",
      lineHeight: 1.55,
      color: "var(--green-100)"
    }
  }, f.p)))))));
}

// ---- Questions & Answers ---------------------------------------------------
const LG_FAQ_ITEMS = [{
  q: "Is the Longevity Diet fully plant-based?",
  a: "Plant-forward, not plant-only. Most of every plate is vegetables, legumes and whole grains, with fatty fish and eggs appearing a few times a week."
}, {
  q: "Will I lose weight on this plan?",
  a: "It's built for healthspan, not crash dieting — but with two calorie tiers and no added sugar, most clients settle at a healthy weight naturally."
}, {
  q: "Is there a lactose option?",
  a: "Yes — Longevity is the one plan with an optional lactose add-back (fermented dairy, aged cheeses). Everything stays gluten- and sugar-free."
}, {
  q: "What if I dislike an ingredient?",
  a: "Customize up to 3 ingredients per meal to match your taste — no extra charge."
}, {
  q: "When and how do meals get delivered?",
  a: "Delivered fresh daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging."
}, {
  q: "Can I pause?",
  a: "Yes — pause or skip any day with 24 hours' notice, no penalties."
}];
function LongevityFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: LG_FAQ_ITEMS
  });
}
window.LongevityEvidence = LongevityEvidence;
window.LongevityMenu = LongevityMenu;
window.LongevityFoods = LongevityFoods;
window.LongevityFAQ = LongevityFAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LongevityExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LowFodmapExtras.jsx
try { (() => {
// Low FODMAP Protocol–specific sections, rendered below the standard
// ProductDetail hero only when plan.slug === "low-fodmap". Mirrors the other
// plan pages: pain points, A day on the plan (PlanMenu), protocol phases
// (green band), and Questions & Answers. Content from healthykitchen.delivery/lowfodmap.

// ---- When every meal feels like a gamble ----------------------------------
function LowFodmapGamble() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const items = [{
    n: "01",
    icon: "salad",
    h: "You feel bloated even when you eat clean",
    p: "Salads, smoothies, fruit, gluten-free snacks. Even the healthy meals leave you uncomfortable, and you've stopped trusting them."
  }, {
    n: "02",
    icon: "list-x",
    h: "You've cut foods at random and still don't have answers",
    p: "Gluten one month. Dairy the next. Then coffee, sauces, onions. The list keeps growing. Nothing has fully worked."
  }, {
    n: "03",
    icon: "utensils-crossed",
    h: "Eating out has become a quiet anxiety",
    p: "You read every menu twice, ask the waiter awkward questions, and still don't know what's in the sauce. Some nights you'd rather not go."
  }, {
    n: "04",
    icon: "clipboard-list",
    h: "A doctor mentioned low-FODMAP — but doing it sounds impossible",
    p: "Hidden onion and garlic everywhere. Confusing portion sizes. One slip and you're back to square one."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      textAlign: "center",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.08,
      fontSize: "clamp(15px, 4.2vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "When every meal"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      whiteSpace: "nowrap",
      fontStyle: "italic"
    }
  }, "feels like a gamble"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      borderTop: "1px solid var(--border-default)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-700)"
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "21px",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      marginTop: "64px",
      paddingTop: "56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "clamp(28px, 3.6vw, 42px)",
      color: "var(--text-strong)"
    }
  }, "You don't need another diet  ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "You need a structured protocol")))));
}

// ---- A day on the plan (reuses PlanMenu carousel) -------------------------
const LF_MENUS = [{
  label: "A day on the plan",
  meals: [{
    meal: "Breakfast",
    img: "assets/meals/lf-breakfast.jpg",
    title: "Potato pancakes with smoked salmon and green salad",
    desc: "Golden potato pancakes topped with wild smoked salmon and a fresh green salad. Naturally low-FODMAP, satisfying and easy on digestion.",
    kcal: 438,
    p: 26,
    c: 32,
    f: 22
  }, {
    meal: "Lunch",
    img: "assets/meals/lf-lunch.jpg",
    title: "Grilled chicken & vegetable wild rice",
    desc: "Lean grilled chicken on wild rice with crisp vegetables. High-protein, balanced and naturally gluten-free.",
    kcal: 531,
    p: 42,
    c: 48,
    f: 19
  }, {
    meal: "Dinner",
    img: "assets/meals/lf-snack.jpg",
    title: "Prawn zucchini noodles",
    desc: "Succulent prawns with fresh zucchini noodles in a light herb sauce. A low-carb, gut-friendly pasta alternative.",
    kcal: 419,
    p: 40,
    c: 22,
    f: 19
  }, {
    meal: "Snack",
    img: "assets/meals/lf-dinner.jpg",
    title: "Carrot cake mini balls",
    desc: "Wholesome energy bites rolled in coconut. Naturally sweet, refined sugar-free and Monash-safe.",
    kcal: 247,
    p: 6,
    c: 22,
    f: 15
  }]
}];
function LowFodmapMenu() {
  const lfStat = (val, label, accent) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      alignItems: "flex-start",
      flex: "1 1 0",
      minWidth: "150px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "44px" : "38px",
      lineHeight: 1,
      color: "var(--ivory-50)"
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "var(--green-200)"
    }
  }, label));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanMenu, {
    menus: LF_MENUS,
    showTotal: false,
    sub: "Every meal is FODMAP-compliant down to the portion size \u2014 engineered against the Monash University food database, gluten- and dairy-free by default."
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px 84px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 30px"
    }
  }, lfStat("86%", "IBS symptom improvement reported", true), lfStat("21 days", "The full Phase 1 elimination"), lfStat("Day 7", "When most clients notice change"), lfStat("0", "Hidden onion, garlic or FODMAPs")))));
}

// ---- How the protocol works (green band) -----------------------------------
function LowFodmapPhases() {
  const items = [{
    n: "01",
    icon: "circle-slash",
    cap: "We deliver this · 21 days",
    h: "Elimination",
    p: "Remove all major FODMAP sources. Let the gut settle into a calm baseline."
  }, {
    n: "02",
    icon: "list-plus",
    cap: "With your dietitian · 6–8 weeks",
    h: "Reintroduction",
    p: "Reintroduce FODMAP groups one at a time. This is where your specific triggers get identified."
  }, {
    n: "03",
    icon: "user-check",
    cap: "Long-term · Ongoing",
    h: "Personalization",
    p: "Build a personalized eating pattern that excludes only your confirmed triggers."
  }];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-20px",
      top: "6px",
      fontFamily: "var(--font-script)",
      fontSize: "210px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "calmer"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "48px",
      flexWrap: "wrap",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "The full picture"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: "clamp(34px, 4.4vw, 54px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ivory-50)"
    }
  }, "How the protocol"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      color: "var(--green-300)"
    }
  }, "works"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      maxWidth: "380px"
    }
  }, "The low-FODMAP protocol has three phases. We deliver even Phase 1 \u2014 the elimination phase \u2014 at the level of execution most people can't sustain on their own.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-muscleacc",
    role: "tablist",
    "aria-label": "How the protocol works",
    onMouseLeave: () => setPaused(false),
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "stretch"
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.n,
      role: "tab",
      "aria-selected": isActive,
      onMouseEnter: () => {
        setActive(i);
        setPaused(true);
      },
      onFocus: () => {
        setActive(i);
        setPaused(true);
      },
      onClick: () => {
        setActive(i);
        setPaused(true);
      },
      className: "hk-muscleacc-panel",
      style: {
        flex: isActive ? "2.4 1 0%" : "1 1 0%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "18px",
        minHeight: "230px",
        padding: "22px 24px",
        margin: 0,
        textAlign: "left",
        background: isActive ? "rgba(253,252,248,0.09)" : "rgba(253,252,248,0.02)",
        border: "1px solid rgba(253,252,248,0.18)",
        borderRadius: "var(--radius-lg)",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "flex 0.6s var(--ease-out), background 0.45s ease, transform 0.45s ease",
        transform: isActive ? "translateY(-4px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "aria-hidden": "true",
      "data-lucide": it.icon,
      style: {
        position: "absolute",
        right: "-20px",
        top: "-20px",
        width: "150px",
        height: "150px",
        color: "var(--ivory-50)",
        opacity: isActive ? 0.14 : 0.08,
        pointerEvents: "none",
        transition: "opacity 0.45s ease"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-script)",
        fontSize: "26px",
        lineHeight: 1,
        color: isActive ? "var(--ivory-50)" : "var(--green-300)",
        transition: "color 0.4s ease",
        position: "relative"
      }
    }, it.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--green-300)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: isActive ? "20px" : "0px",
        opacity: isActive ? 1 : 0,
        transition: "all 0.45s ease 0.15s"
      }
    }, it.cap), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--tracking-wide)",
        fontSize: "24px",
        lineHeight: 1.2,
        color: "var(--ivory-50)"
      }
    }, it.h), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isActive ? "200px" : "0px",
        opacity: isActive ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.55s var(--ease-out), opacity 0.4s ease 0.15s"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15.5px",
        lineHeight: 1.65,
        color: "var(--green-100)",
        maxWidth: "46ch"
      }
    }, it.p))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flex: 1
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it.n,
    style: {
      flex: 1,
      height: "2px",
      background: i === active ? "var(--ivory-50)" : "rgba(253,252,248,0.18)",
      transition: "background 0.4s ease"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--green-200)"
    }
  }, items[active].n, " / 03")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      textAlign: "center"
    }
  }, "After your 21 days, our experts help you plan Phase 2 reintroduction \u2014 at no extra cost, as part of your reset.")));
}

// ---- Questions & Answers ---------------------------------------------------
const LF_FAQ_ITEMS = [{
  q: "Is this a medical treatment for IBS?",
  a: "No. This is a structured food protocol based on the low-FODMAP approach. It supports people with sensitive digestion, but it doesn't replace medical advice. If you have a diagnosed condition, consult your physician before starting."
}, {
  q: "Why is 21 days recommended?",
  a: "The elimination phase (Phase 1) is clinically structured around 2–3 weeks. The 21-day plan covers the full Phase 1 — shorter durations are useful as a trial but don't deliver the complete baseline."
}, {
  q: "Is this a diet I have to follow forever?",
  a: "No. Phase 1 is meant to end. The whole point is to identify what you can comfortably eat again — through Phase 2 reintroduction with our dietitian. The end goal is the most varied diet possible, with only your confirmed triggers excluded."
}, {
  q: "Will I lose weight?",
  a: "Some people do, simply because the menu is whole-food and portion-controlled. But this is not a weight-loss product — if weight loss is your primary goal, our other plans are a better fit."
}, {
  q: "What if I have other dietary restrictions or allergies?",
  a: "Every meal is already gluten-free, dairy-free, refined-sugar-free, and free of onion and garlic. We can accommodate additional restrictions — share them with us."
}, {
  q: "Do I have to eat only your meals during the 21 days?",
  a: "For best results, yes — most of the time. The protocol works because it removes all FODMAP sources. We deliver 3 meals plus a snack per day, and we'll guide you on safe options for any meal we don't deliver."
}];
function LowFodmapFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: LF_FAQ_ITEMS
  });
}
window.LowFodmapGamble = LowFodmapGamble;
window.LowFodmapMenu = LowFodmapMenu;
window.LowFodmapPhases = LowFodmapPhases;
window.LowFodmapFAQ = LowFodmapFAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LowFodmapExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MealPlans.jsx
try { (() => {
const {
  ProductCard,
  SectionHeading
} = window.HealthyKitchenDesignSystem_f4c763;
const HK_PLAN_COVERS = {
  "longevity": "assets/plans/longevity-cover.jpg",
  "gut-healing": "assets/plans/gut-healing-cover.jpg",
  "muscle-up": "assets/plans/muscle-up-cover.jpg",
  "autoimmune": "assets/plans/autoimmune-cover.jpg",
  "low-fodmap": "assets/plans/low-fodmap-cover.jpg",
  "easy-detox": "assets/plans/easy-detox-cover.jpg",
  "detox-cleanse": "assets/plans/detox-cleanse-cover.jpg",
  "anticandida": "assets/plans/anticandida-cover.jpg"
};
window.HK_PLAN_COVERS = HK_PLAN_COVERS;
function MealPlans({
  onSelect
}) {
  const plans = window.HK_PLANS;
  const railRef = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);
  const CARD = 340; // card width
  const GAP = 24;
  const update = React.useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);
  React.useEffect(() => {
    update();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, {
      passive: true
    });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  // keep arrow icons rendered after state-driven re-renders
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const scrollBy = dir => {
    const el = railRef.current;
    if (el) el.scrollBy({
      left: dir * (CARD + GAP) * 2,
      behavior: "smooth"
    });
  };
  const Arrow = ({
    dir,
    disabled
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: () => scrollBy(dir),
    disabled: disabled,
    "aria-label": dir < 0 ? "Previous" : "Next",
    style: {
      width: 40,
      height: 40,
      flex: "none",
      borderRadius: "var(--radius-circle)",
      border: "1px solid var(--border-subtle)",
      background: "rgba(253,252,248,0.7)",
      color: "var(--text-muted)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.25 : 0.55,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-xs)",
      transition: "opacity var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
    },
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.background = "var(--white)";
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = disabled ? "0.25" : "0.55";
      e.currentTarget.style.background = "rgba(253,252,248,0.7)";
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": dir < 0 ? "chevron-left" : "chevron-right",
    style: {
      width: 18,
      height: 18
    }
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "meal-plans",
    style: {
      background: "var(--bg-subtle)",
      borderTop: "1px solid var(--border-subtle)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      padding: "0 32px",
      marginBottom: "36px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our menus",
    title: "Meal Plans Built Around You",
    align: "left"
  }, "Medically-tailored plans for gut healing, longevity, detox and performance \u2014 chef-made and delivered to your door.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    className: "hk-rail hk-container",
    style: {
      display: "flex",
      gap: GAP + "px",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      padding: "8px 32px 24px",
      scrollPaddingLeft: "32px"
    }
  }, plans.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.slug,
    style: {
      flex: `0 0 ${CARD}px`,
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    title: p.name,
    blurb: p.blurb,
    price: p.price,
    tags: p.tags,
    image: HK_PLAN_COVERS[p.slug] ? /*#__PURE__*/React.createElement("img", {
      src: HK_PLAN_COVERS[p.slug],
      alt: p.name,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : null,
    onView: () => onSelect && onSelect(p)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 8px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "40px",
      height: "100%",
      pointerEvents: "none",
      background: "linear-gradient(90deg, var(--bg-subtle), transparent)",
      opacity: atStart ? 0 : 1,
      transition: "opacity var(--dur-base)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "56px",
      height: "100%",
      pointerEvents: "none",
      background: "linear-gradient(270deg, var(--bg-subtle), transparent)",
      opacity: atEnd ? 0 : 1,
      transition: "opacity var(--dur-base)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      padding: "0 32px",
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: -1,
    disabled: atStart
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: 1,
    disabled: atEnd
  }))));
}
window.MealPlans = MealPlans;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MealPlans.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MuscleUpExtras.jsx
try { (() => {
// Extra Muscle UP–specific sections, rendered below the standard ProductDetail
// calculator only when plan.slug === "muscle-up". Kept as one file: The Gap,
// Why Muscle UP, A day on the plan (menu carousel), and Questions & Answers.

// ---- The Gap -------------------------------------------------------------
function MuscleUpGap() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const items = [{
    n: "01",
    icon: "battery-low",
    h: "You train 5 days a week but recovery takes forever",
    p: "Sore for 3 days after leg day. Energy crashes by 4pm. You blame overtraining — but it might be what's on your plate."
  }, {
    n: "02",
    icon: "search-x",
    h: "Your 'clean' meal prep isn't that clean",
    p: "Supermarket chicken pumped with hormones. Vegetable oil in every sauce. Hidden sugars in 'protein' snacks. High protein ≠ high quality."
  }, {
    n: "03",
    icon: "repeat",
    h: "Exhausted from cooking, counting, repeating",
    p: "Sunday meal prep. Same 4 meals. Every week. You'd rather spend those 3 hours training, resting, or living."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "hk-gap-heading",
    style: {
      margin: "0 0 0 12%",
      textAlign: "center",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.08,
      fontSize: "clamp(44px, 6.5vw, 80px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)"
    }
  }, "Training hard"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "Eating wrong"))), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      alignItems: "flex-start",
      borderTop: "1px solid var(--border-default)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--green-700)"
    }
  }, it.n), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon,
    style: {
      width: 22,
      height: 22,
      color: "var(--green-700)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 800,
      fontSize: "22px",
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, it.p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      marginTop: "64px",
      paddingTop: "56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 600,
      lineHeight: 1.2,
      fontSize: "clamp(28px, 3.6vw, 42px)",
      color: "var(--text-strong)"
    }
  }, "You don't need more protein  ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)",
      fontStyle: "italic"
    }
  }, "You need better fuel")))));
}

// ---- Why Muscle UP (2x2 grid, green band) --------------------------------
function MuscleUpWhy() {
  const items = [{
    n: "01",
    icon: "beef",
    cap: "High-protein, anti-inflammatory kitchen",
    h: "Precise protein targets",
    p: "Every plate hits a protein target scaled to your training load, so muscle gets exactly what it needs to rebuild."
  }, {
    n: "02",
    icon: "wheat",
    cap: "Slow-release energy system",
    h: "Clean complex carbs",
    p: "Slow-release, whole-food carbohydrates fuel long sessions and refill glycogen — steady energy, no crash."
  }, {
    n: "03",
    icon: "heart-pulse",
    cap: "Targeted recovery support",
    h: "Recovery micronutrients",
    p: "Anti-inflammatory ingredients and recovery-focused micronutrients help you bounce back faster between sessions."
  }];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-20px",
      top: "6px",
      fontFamily: "var(--font-script)",
      fontSize: "210px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "stronger"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "48px",
      flexWrap: "wrap",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "Why Muscle UP"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.05,
      fontSize: "clamp(36px, 5vw, 58px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--ivory-50)"
    }
  }, "Fuel built"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-300)"
    }
  }, "to rebuild you"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)",
      maxWidth: "400px"
    }
  }, "When digestion is off, protein passes through barely absorbed. Heal the gut first and absorption climbs \u2014 so every plate, calibrated to your training load with clean protein, quality carbs and recovery micronutrients, actually reaches the muscle.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-muscleacc",
    role: "tablist",
    "aria-label": "Why Muscle UP",
    onMouseLeave: () => setPaused(false),
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "stretch",
      height: "264px"
    }
  }, items.map((it, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.n,
      role: "tab",
      "aria-selected": isActive,
      onMouseEnter: () => {
        setActive(i);
        setPaused(true);
      },
      onFocus: () => {
        setActive(i);
        setPaused(true);
      },
      onClick: () => {
        setActive(i);
        setPaused(true);
      },
      className: "hk-muscleacc-panel",
      style: {
        flex: isActive ? "2.4 1 0%" : "1 1 0%",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "18px",
        minHeight: "230px",
        height: "100%",
        padding: "22px 24px",
        margin: 0,
        textAlign: "left",
        background: isActive ? "rgba(253,252,248,0.09)" : "rgba(253,252,248,0.02)",
        border: "1px solid rgba(253,252,248,0.18)",
        borderRadius: "var(--radius-lg)",
        color: "inherit",
        font: "inherit",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "flex 0.6s var(--ease-out), background 0.45s ease, transform 0.45s ease",
        transform: isActive ? "translateY(-4px)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "aria-hidden": "true",
      "data-lucide": it.icon,
      style: {
        position: "absolute",
        right: "-20px",
        top: "-20px",
        width: "150px",
        height: "150px",
        color: "var(--ivory-50)",
        opacity: isActive ? 0.14 : 0.08,
        pointerEvents: "none",
        transition: "opacity 0.45s ease"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-script)",
        fontSize: "26px",
        lineHeight: 1,
        color: isActive ? "var(--ivory-50)" : "var(--green-300)",
        transition: "color 0.4s ease",
        position: "relative"
      }
    }, it.n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: 0,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--green-300)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: isActive ? "20px" : "0px",
        opacity: isActive ? 1 : 0,
        transition: "all 0.45s ease 0.15s"
      }
    }, it.cap), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        letterSpacing: "var(--tracking-wide)",
        fontSize: "24px",
        lineHeight: 1.2,
        color: "var(--ivory-50)"
      }
    }, it.h), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isActive ? "200px" : "0px",
        opacity: isActive ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.55s var(--ease-out), opacity 0.4s ease 0.15s"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "15.5px",
        lineHeight: 1.65,
        color: "var(--green-100)",
        maxWidth: "46ch"
      }
    }, it.p))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flex: 1
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it.n,
    style: {
      flex: 1,
      height: "2px",
      background: i === active ? "var(--ivory-50)" : "rgba(253,252,248,0.18)",
      transition: "background 0.4s ease"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--green-200)"
    }
  }, items[active].n, " / 04"))));
}
window.MuscleUpGap = MuscleUpGap;
window.MuscleUpWhy = MuscleUpWhy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MuscleUpExtras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MuscleUpMenuFAQ.jsx
try { (() => {
// Muscle UP — "A day on the plan" menu carousel + "Questions & Answers" FAQ.
// Split from MuscleUpExtras.jsx to keep files small. Loaded after it; both
// attach to window so MuscleUpFullExtras.jsx (the composer) can use them.

const MU_MENUS = [{
  label: "Low calories · 1,600–1,900 kcal",
  meals: [{
    meal: "Breakfast",
    img: "assets/meals/mu-low-breakfast.jpg",
    title: "Zucchini pancakes with salmon & green salad",
    kcal: 358,
    p: 21,
    c: 22,
    f: 20
  }, {
    meal: "Lunch",
    img: "assets/meals/mu-low-lunch.jpg",
    title: "Green protein salad with prawns",
    kcal: 573,
    p: 58,
    c: 29,
    f: 25
  }, {
    meal: "Dinner",
    img: "assets/meals/mu-low-dinner.jpg",
    title: "Bone broth & konjac pasta bolognese",
    kcal: 503,
    p: 55,
    c: 19,
    f: 23
  }, {
    meal: "Snack 1",
    img: "assets/meals/mu-low-snack-1.jpg",
    title: "Coconut mini bites",
    kcal: 232,
    p: 3.9,
    c: 17,
    f: 15
  }, {
    meal: "Snack 2",
    img: "assets/meals/mu-low-snack-2.jpg",
    title: "Sauerkraut",
    kcal: 40,
    p: 2,
    c: 5.8,
    f: 1
  }]
}, {
  label: "High calories · 2,000–2,200 kcal",
  meals: [{
    meal: "Breakfast",
    img: "assets/meals/mu-high-breakfast.jpg",
    title: "Buckwheat bowl with smoked salmon & egg",
    kcal: 476,
    p: 34,
    c: 31,
    f: 24
  }, {
    meal: "Lunch",
    img: "assets/meals/mu-high-lunch.jpg",
    title: "Beef with roasted veggies & wild rice",
    kcal: 669,
    p: 59,
    c: 43,
    f: 29
  }, {
    meal: "Dinner",
    img: "assets/meals/mu-high-dinner.jpg",
    title: "Baked seabass, roasted veg & sweet potato wedges",
    kcal: 602,
    p: 57,
    c: 44,
    f: 22
  }, {
    meal: "Snack 1",
    img: "assets/meals/mu-high-snack-1.jpg",
    title: "Matcha mini balls",
    kcal: 251,
    p: 4,
    c: 19,
    f: 15
  }, {
    meal: "Snack 2",
    img: "assets/meals/mu-high-snack-2.jpg",
    title: "Lean green smoothie",
    kcal: 179,
    p: 4,
    c: 25,
    f: 7
  }]
}];
function muStat(val, label, accent) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1px",
      flex: "1 1 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "26px" : "20px",
      color: accent ? "var(--green-700)" : "var(--text-strong)",
      lineHeight: 1
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "10px",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--text-faint)"
    }
  }, label));
}
function muTotStat(val, label, accent) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: accent ? "62px" : "52px",
      lineHeight: 0.9,
      color: "var(--ivory-50)"
    }
  }, val), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: "var(--green-200)"
    }
  }, label));
}
function PlanMenu({
  menus = MU_MENUS,
  totalTitle = "A full day on Muscle UP",
  showTotal = true,
  showMacros = true,
  sub = "Switch between two sample menus — each meal shows its macros, and the daily total updates as you choose."
}) {
  const [idx, setIdx] = React.useState(0);
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [idx]);
  const menu = menus[idx];
  const totRaw = menu.meals.reduce((a, m) => ({
    kcal: a.kcal + m.kcal,
    p: a.p + m.p,
    c: a.c + m.c,
    f: a.f + m.f
  }), {
    kcal: 0,
    p: 0,
    c: 0,
    f: 0
  });
  const tot = {
    kcal: Math.round(totRaw.kcal),
    p: Math.round(totRaw.p),
    c: Math.round(totRaw.c),
    f: Math.round(totRaw.f)
  };
  const scrollBy = dir => {
    if (scrollRef.current) scrollRef.current.scrollBy({
      left: dir * 340,
      behavior: "smooth"
    });
  };
  const arrowStyle = side => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "-18px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid var(--border-subtle)",
    background: "rgba(253,252,248,0.7)",
    color: "var(--text-muted)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    opacity: 0.55,
    transition: "opacity var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
    boxShadow: "var(--shadow-xs)"
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "day",
    style: {
      background: "var(--bg-subtle)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: "flex-start",
      marginBottom: "36px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "A day on the plan"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      lineHeight: 1.05,
      fontSize: "clamp(28px, 5vw, 40px)",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, "See a full day of meals"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "17px",
      lineHeight: 1.5,
      color: "var(--text-muted)",
      maxWidth: "56ch"
    }
  }, sub)), menus.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      background: "var(--white)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      padding: "4px",
      gap: "4px",
      marginBottom: "28px"
    }
  }, menus.map((m, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setIdx(i),
    style: {
      cursor: "pointer",
      border: 0,
      borderRadius: "var(--radius-pill)",
      padding: "9px 22px",
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      background: i === idx ? "var(--green-700)" : "transparent",
      color: i === idx ? "var(--ivory-50)" : "var(--text-muted)",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, m.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "0 8px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => scrollBy(-1),
    "aria-label": "Scroll left",
    style: arrowStyle("left")
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => scrollBy(1),
    "aria-label": "Scroll right",
    style: arrowStyle("right")
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      display: "flex",
      gap: "20px",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      padding: "2px 2px 6px",
      scrollbarWidth: "none"
    }
  }, menu.meals.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 300px",
      scrollSnapAlign: "start",
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      background: m.img ? "var(--ivory-100)" : "repeating-linear-gradient(45deg, var(--ivory-200), var(--ivory-200) 9px, var(--ivory-100) 9px, var(--ivory-100) 18px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, m.img ? /*#__PURE__*/React.createElement("img", {
    src: m.img,
    alt: m.title,
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      fontSize: "10px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink-400)",
      background: "var(--ivory-50)",
      padding: "4px 8px",
      borderRadius: "var(--radius-sm)"
    }
  }, m.meal, " photo")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--green-600)"
    }
  }, m.meal), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      minHeight: "calc(20px * 1.15 * 2)",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: 1.15,
      color: "var(--text-strong)"
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      minHeight: "calc(13.5px * 1.5 * 3)",
      fontFamily: "var(--font-body)",
      fontSize: "13.5px",
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, m.desc || ""), showMacros && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "auto",
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: "14px"
    }
  }, muStat(m.kcal, "kcal", true), muStat(m.p + "g", "protein"), muStat(m.c + "g", "carbs"), muStat(m.f + "g", "fat"))))))), showTotal && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
      background: "var(--green-700)",
      color: "var(--ivory-50)",
      borderRadius: "var(--radius-lg)",
      padding: "32px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-200)"
    }
  }, "Daily total \xB7 ", menu.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontSize: "22px"
    }
  }, totalTitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "38px",
      flexWrap: "wrap",
      alignItems: "flex-end"
    }
  }, muTotStat(tot.kcal.toLocaleString("en-US"), "kcal", true), muTotStat(tot.p + "g", "protein"), muTotStat(tot.c + "g", "carbs"), muTotStat(tot.f + "g", "fat")))));
}
const MU_FAQ_ITEMS = [{
  q: "How much protein per meal?",
  a: "Each meal is calibrated to hit 35–55g of protein, scaled to your calorie tier and training load."
}, {
  q: "Are portions big enough for serious training?",
  a: "Yes. This isn't a diet plan with tiny portions. Meals are calibrated for active people who train 4–6x per week. If you need more volume, your nutritionist adjusts it."
}, {
  q: "Can I customize meals or swap ingredients?",
  a: "Yes — customize up to 3 ingredients per meal to match your taste or macros."
}, {
  q: "What if I have food intolerances?",
  a: "Every plate is dairy-, gluten- and sugar-free by default. Let us know any other intolerances and we'll adjust your menu."
}, {
  q: "When and how do meals get delivered?",
  a: "Delivered fresh daily across Dubai, 7 AM–12 PM."
}, {
  q: "Can I pause?",
  a: "Yes — pause or skip any day with 24 hours' notice, no penalties."
}];
function MuscleUpFAQ() {
  return /*#__PURE__*/React.createElement(FAQ, {
    items: MU_FAQ_ITEMS
  });
}
const HK_FAQ_DEFAULT_ITEMS = [{
  q: "How does delivery work?",
  a: "Meals are chef-made fresh and delivered daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging."
}, {
  q: "Can I customize my meals?",
  a: "Yes — every plan lets you remove up to 3 ingredients you dislike or can't tolerate, no extra charge."
}, {
  q: "What about allergies and intolerances?",
  a: "Every dish is dairy-, gluten- and sugar-free by default. Tell us about any other intolerances and we'll tailor your menu."
}, {
  q: "Can I pause or skip a day?",
  a: "Yes — pause or skip any day with 24 hours' notice, no penalties."
}, {
  q: "How is pricing calculated?",
  a: "Pricing depends on meals per day, calorie tier, and subscription length — longer plans unlock a bigger discount."
}, {
  q: "How clean is the food, really?",
  a: "Very. We source clean, nutrient-rich ingredients and organic protein, free from harmful pesticides and chemicals, for every plan."
}];
function FAQ({
  items,
  eyebrow = "Questions",
  titleTop = "Questions",
  titleBottom = "& Answers"
}) {
  const list = items || HK_FAQ_DEFAULT_ITEMS;
  const [openIdx, setOpenIdx] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: "64px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-sticky",
    style: {
      position: "sticky",
      top: "110px",
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.08,
      fontSize: "clamp(34px, 4vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-strong)"
    }
  }, titleTop), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--green-700)"
    }
  }, titleBottom))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      borderTop: "1px solid var(--border-default)"
    }
  }, list.map((it, i) => {
    const open = i === openIdx;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border-default)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpenIdx(open ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        background: "none",
        border: 0,
        cursor: "pointer",
        padding: "26px 0",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: "14px",
        color: "var(--green-700)",
        flexShrink: 0,
        width: "28px"
      }
    }, i + 1 < 10 ? "0" + (i + 1) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-body)",
        fontWeight: 800,
        fontSize: "20px",
        lineHeight: 1.3,
        color: "var(--text-strong)"
      }
    }, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid " + (open ? "var(--green-700)" : "var(--border-default)"),
        background: open ? "var(--green-700)" : "transparent",
        color: open ? "var(--ivory-50)" : "var(--text-strong)",
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "20px",
        lineHeight: 1,
        fontWeight: 400,
        position: "relative",
        top: "-1px"
      }
    }, open ? "\u2212" : "+"))), open && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 0 30px 48px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "16px",
        lineHeight: 1.6,
        color: "var(--text-muted)",
        maxWidth: "62ch"
      }
    }, it.a)));
  }))));
}
function MuscleUpMenu() {
  return /*#__PURE__*/React.createElement(PlanMenu, null);
}
window.PlanMenu = PlanMenu;
window.MuscleUpMenu = MuscleUpMenu;
window.MuscleUpFAQ = MuscleUpFAQ;
window.FAQ = FAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MuscleUpMenuFAQ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Payment.jsx
try { (() => {
const {
  Button
} = window.HealthyKitchenDesignSystem_f4c763;
const fmt = n => Number(n).toLocaleString("en-US");

/**
 * Healthy Kitchen — Payment
 * Card entry itself happens on the payment provider's own hosted page (out of
 * scope for this design system) — this screen represents the hand-off to that
 * provider, plus the two outcomes it can redirect back with: success and failure.
 * On failure, nothing is charged and the cart is preserved so the customer can retry.
 */
function Payment({
  total = 0,
  currency = "AED",
  onBack,
  onDone,
  onSuccess
}) {
  const [outcome, setOutcome] = React.useState(null); // null | "success" | "failure"
  const [processing, setProcessing] = React.useState(false);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const resolve = result => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setOutcome(result);
      if (result === "success") onSuccess && onSuccess();
    }, 700);
  };
  if (outcome === "success") {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--bg-page)",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "440px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        alignItems: "center",
        padding: "60px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "64px",
        height: "64px",
        borderRadius: "var(--radius-circle)",
        background: "var(--green-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 30,
        height: 30,
        color: "var(--green-700)"
      }
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "clamp(24px, 5vw, 32px)",
        color: "var(--text-strong)"
      }
    }, "Payment Successful"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        lineHeight: 1.6,
        color: "var(--text-muted)"
      }
    }, "Your payment of ", fmt(total), " ", currency, " went through. We've sent your order and delivery details to our team \u2014 get ready for your first delivery."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onDone
    }, "Back to Home")));
  }
  if (outcome === "failure") {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--bg-page)",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "440px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        alignItems: "center",
        padding: "60px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "64px",
        height: "64px",
        borderRadius: "var(--radius-circle)",
        background: "var(--clay-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "x",
      style: {
        width: 30,
        height: 30,
        color: "var(--clay-600)"
      }
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "clamp(24px, 5vw, 32px)",
        color: "var(--text-strong)"
      }
    }, "Payment Failed"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        lineHeight: 1.6,
        color: "var(--text-muted)"
      }
    }, "Your payment couldn't be processed. Nothing was charged, and your cart has been saved \u2014 please try again."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onBack
    }, "Back to Checkout")));
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "460px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-circle)",
      background: "var(--green-50)",
      border: "1px solid var(--green-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    style: {
      width: 20,
      height: 20,
      color: "var(--green-700)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "26px",
      color: "var(--text-strong)"
    }
  }, "Continue to Payment"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, "Card details are collected securely on our payment provider's hosted page.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      padding: "16px 18px",
      background: "var(--bg-subtle)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-muted)"
    }
  }, "Amount due"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "24px",
      color: "var(--text-brand)"
    }
  }, fmt(total), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-faint)"
    }
  }, currency))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: processing,
    onClick: () => resolve("success")
  }, processing ? "Redirecting…" : "Continue to Payment Provider"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      paddingTop: "6px",
      borderTop: "1px dashed var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "11.5px",
      color: "var(--text-faint)"
    }
  }, "Prototype preview \u2014 the provider's hosted page isn't built here. Simulate its response:"), /*#__PURE__*/React.createElement("div", {
    className: "hk-payment-sim-row",
    style: {
      display: "flex",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    disabled: processing,
    onClick: () => resolve("success")
  }, "Simulate success"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "ghost",
    size: "sm",
    fullWidth: true,
    disabled: processing,
    onClick: () => resolve("failure"),
    style: {
      borderColor: "var(--clay-600)",
      color: "var(--clay-600)"
    }
  }, "Simulate failure"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBack,
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, "Back to delivery details")));
}
window.Payment = Payment;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Payment.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PrivacyPolicy.jsx
try { (() => {
const {
  SectionHeading
} = window.HealthyKitchenDesignSystem_f4c763;
const HK_PRIVACY_SECTIONS = [{
  title: "Copyright",
  body: ["The website and the mobile app are made available for information purposes only.", "You may display, reformat and print information from the website for your own personal, non-commercial use only.You may not sell, re-publish, distribute or display any content or other material from the website for any other purpose. All such uses are strictly prohibited without our express prior written consent, and such consent may be given or withheld in our discretion. You agree that you will not in any way modify, move, add to, delete from or tamper with any content or feature of the website or interfere with its proper functioning. We reserve the right to suspend or terminate access to the website by anyone who violates these Terms of Use or any applicable law or whose conduct is harmful to the interests of HealthyKitchen. We may take steps to prohibit access and/or use without prior notice to any such user."]
}, {
  title: "Restriction of liability",
  body: ["Healthy kitchen shall not be liable for any loss whether direct, indirect, incidental or consequential, arising out of access to, use of, or reliance upon any of the content on this website or sites to which this website is linked regardless of whether such content is accurate or complete and Healthy Kitchen will not pay any damages whether for loss or injury, punitive or otherwise because of any such access to, use of, or reliance upon any of the content on this website or sites to which this website is linked."]
}, {
  title: "Disclamer",
  body: ["The material in this site could include technical inaccuracies or typographical errors. Healthy Kitchen may make changes or improvements at any time. THE MATERIALS IN THIS SITE ARE PROVIDED “AS IS” AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESSED OR IMPLIED, TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW. KCAL HEALTHY FAST FOOD DISCLAIMS ALL WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Healthy Kitchen DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE MATERIAL WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. Healthy Kitchen DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OF OR THE RESULT OF THE USE OF THE MATERIAL IN THIS SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. YOU (AND NOT Healthy Kitchen ) ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. THE ABOVE EXCLUSION MAY NOT APPLY TO YOU, TO THE EXTENT THAT APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES.", "This website contains downloadable materials as well as links to external sites. Healthy Kitchen is not responsible for, and has no control over, the content of such downloadable materials or external sites. You understand that Healthy Kitchen cannot and does not guarantee or warrant that files or software of any kind, or from any source, available for downloading through this website, will be free of infection or viruses, worms, Trojan Horses or other code or defects that manifest contaminating or destructive properties."]
}, {
  title: "Submissions",
  body: ["All remarks, suggestions, ideas, graphics, or other information communicated to Healthy Kitchen through this site (together, the “Submission”) will forever be the property of Healthy Kitchen and may be used by Healthy Kitchen without any limitation and/or payment. Healthy Kitchen will not be required to treat any Submission as confidential. Without limitation, Healthy Kitchen will have exclusive ownership of all present and future existing rights to any Submission of every kind and nature and will be entitled to use the Submission for any commercial or other purpose whatsoever without compensation to you or any other person sending the Submission. Personally identifiable information that may be received at this site is provided voluntarily by a visitor to this site."]
}];
function PrivacyPolicy() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "72px 32px 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "Legal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.05,
      fontSize: "clamp(32px, 5vw, 48px)",
      color: "var(--text-strong)"
    }
  }, "Privacy policy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "40px"
    }
  }, HK_PRIVACY_SECTIONS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "24px",
      color: "var(--green-700)"
    }
  }, s.title), s.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.7,
      color: "var(--text-body)"
    }
  }, p)))))));
}
window.PrivacyPolicy = PrivacyPolicy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PrivacyPolicy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductDetail.jsx
try { (() => {
const {
  Button,
  Tag
} = window.HealthyKitchenDesignSystem_f4c763;

// ---- Calculator configuration -------------------------------------------------
const MEAL_CONFIGS = [{
  id: "full",
  label: "Full day",
  meals: "Breakfast · Lunch · Dinner · 2 Snacks",
  factor: 1.6,
  calories: ["1600–1800", "1900–2200"]
}, {
  id: "am",
  label: "AM",
  meals: "Breakfast · Lunch · Snack",
  factor: 1.0,
  calories: ["1000–1200", "1100–1300"]
}, {
  id: "pm",
  label: "PM",
  meals: "Lunch · Dinner · Snack",
  factor: 1.0,
  calories: ["1200–1400", "1300–1500"]
}, {
  id: "main",
  label: "Main meals",
  meals: "Breakfast · Lunch · Dinner",
  factor: 1.2,
  calories: ["1400–1500", "1500–1600"]
}];
const DURATIONS = [5, 7, 14, 21, 28];
const DURATION_DISCOUNT = {
  5: 0,
  7: 0.02,
  14: 0.05,
  21: 0.08,
  28: 0.12
};

// Per-plan calculator overrides (mirrors the live site)
const PLAN_CALC_OVERRIDES = {
  "detox-cleanse": {
    mealConfigs: [{
      id: "full",
      label: "Full day",
      meals: "6 juices & smoothies",
      factor: 1.6,
      calories: ["1000–1200"]
    }],
    durations: [1, 2, 3],
    durationDiscount: {
      1: 0,
      2: 0,
      3: 0.05
    },
    defaultDays: 1
  },
  "easy-detox": {
    mealConfigs: [{
      id: "full",
      label: "Full day",
      meals: "2 Drinks · Lunch · Snack · Dinner",
      factor: 1.6,
      calories: ["1200–1500"]
    }, {
      id: "am",
      label: "AM",
      meals: "Drink · Snack · Lunch",
      factor: 1.0,
      calories: ["800–1000"]
    }, {
      id: "pm",
      label: "PM",
      meals: "Lunch · Dinner · Snack",
      factor: 1.0,
      calories: ["900–1100"]
    }, {
      id: "main",
      label: "Main meals",
      meals: "Drink · Lunch · Dinner",
      factor: 1.2,
      calories: ["1000–1200"]
    }],
    durations: [5, 7, 14, 21],
    durationDiscount: {
      5: 0,
      7: 0.02,
      14: 0.05,
      21: 0.08
    },
    defaultDays: 7
  }
};

// Explicit AED price tables (total for the whole period) — [mealId][calorie tier][days].
// Tier 0 = low calories, tier 1 = high calories.
const HK_PRICE_TABLE = {
  full: [{
    5: 1750,
    7: 2450,
    14: 4550,
    21: 6300,
    28: 7700
  }, {
    5: 2025,
    7: 2825,
    14: 5320,
    21: 7455,
    28: 9240
  }],
  pm: [{
    5: 1350,
    7: 1890,
    14: 3430,
    21: 4620,
    28: 5460
  }, {
    5: 1625,
    7: 2275,
    14: 4200,
    21: 5775,
    28: 7000
  }],
  am: [{
    5: 1300,
    7: 1820,
    14: 3290,
    21: 4410,
    28: 5180
  }, {
    5: 1575,
    7: 2205,
    14: 4060,
    21: 5565,
    28: 6720
  }],
  main: [{
    5: 1460,
    7: 2040,
    14: 3794,
    21: 5250,
    28: 6440
  }, {
    5: 1725,
    7: 2415,
    14: 4578,
    21: 6342,
    28: 7756
  }]
};
const HK_PRICE_TABLE_PLANS = ["longevity", "anticandida", "autoimmune"];

// Easy Detox — single calorie tier, 5–21 days.
const HK_PRICE_TABLE_EASY_DETOX = {
  full: [{
    5: 1750,
    7: 2450,
    14: 4550,
    21: 6300
  }],
  am: [{
    5: 1300,
    7: 1820,
    14: 3290,
    21: 4410
  }],
  pm: [{
    5: 1350,
    7: 1890,
    14: 3430,
    21: 4620
  }],
  main: [{
    5: 1460,
    7: 2040,
    14: 3794,
    21: 5250
  }]
};

// Detox & Cleanse — single option, 1–3 days.
const HK_PRICE_TABLE_DETOX_CLEANSE = {
  full: [{
    1: 350,
    2: 700,
    3: 990
  }]
};

// Gut Healing & Low FODMAP — same AM/PM/Main as the group above, own Full day.
const HK_PRICE_TABLE_GUT = {
  full: [{
    5: 1675,
    7: 2345,
    14: 4200,
    21: 5880,
    28: 7140
  }, {
    5: 1950,
    7: 2730,
    14: 4970,
    21: 7035,
    28: 8680
  }],
  am: HK_PRICE_TABLE.am,
  pm: HK_PRICE_TABLE.pm,
  main: HK_PRICE_TABLE.main
};
const HK_PRICE_TABLE_GUT_PLANS = ["gut-healing", "low-fodmap"];

// Muscle UP — own main-meals pricing (tier 0 = standard, tier 1 = high calories).
const HK_PRICE_TABLE_MUSCLE_UP = {
  full: [{
    5: 1800,
    7: 2520,
    14: 4760,
    21: 6825,
    28: 8400
  }, {
    5: 1950,
    7: 2730,
    14: 5180,
    21: 7455,
    28: 9240
  }],
  am: [{
    5: 1300,
    7: 1820,
    14: 3360,
    21: 4725,
    28: 5600
  }, {
    5: 1450,
    7: 2030,
    14: 3780,
    21: 5355,
    28: 6440
  }],
  pm: [{
    5: 1375,
    7: 1925,
    14: 3570,
    21: 5040,
    28: 6020
  }, {
    5: 1525,
    7: 2135,
    14: 3990,
    21: 5670,
    28: 6860
  }],
  main: [{
    5: 1550,
    7: 2170,
    14: 4088,
    21: 5859,
    28: 7196
  }, {
    5: 1750,
    7: 2450,
    14: 4606,
    21: 6615,
    28: 7952
  }]
};

/* ---------- Reusable calculator card ---------- */
function PlanCalculator({
  calc,
  onOpenCustomize
}) {
  const {
    mealId,
    setMealId,
    calIdx,
    setCalIdx,
    days,
    setDays,
    excluded,
    meal,
    perDay,
    saved,
    total,
    addToCart
  } = calc;
  const mealConfigs = calc.mealConfigs || MEAL_CONFIGS;
  const durations = calc.durations || DURATIONS;
  const durationDiscount = calc.durationDiscount || DURATION_DISCOUNT;
  const labelStyle = {
    margin: "0 0 8px",
    fontFamily: "var(--font-body)",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-wide)",
    color: "var(--text-muted)",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  };
  const stepNo = n => /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-circle)",
      background: "var(--green-100)",
      color: "var(--green-800)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "11px",
      fontWeight: 700,
      flex: "none"
    }
  }, n);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding: "22px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calculator",
    style: {
      width: 18,
      height: 18,
      color: "var(--green-700)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      fontSize: "20px",
      color: "var(--text-strong)"
    }
  }, "Build your plan")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: labelStyle
  }, stepNo(1), " How many meals per day?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mealConfigs.length > 1 ? "1fr 1fr" : "1fr",
      gap: "10px"
    }
  }, mealConfigs.map(m => {
    const active = m.id === mealId;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      onClick: () => {
        setMealId(m.id);
        setCalIdx(0);
      },
      style: {
        textAlign: "left",
        cursor: "pointer",
        padding: "12px 14px",
        borderRadius: "var(--radius-md)",
        background: active ? "var(--green-50)" : "var(--white)",
        border: "1.5px solid " + (active ? "var(--green-700)" : "var(--border-default)"),
        transition: "all var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        letterSpacing: "var(--tracking-wide)",
        fontSize: "16px",
        color: active ? "var(--green-800)" : "var(--text-strong)"
      }
    }, m.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "11.5px",
        lineHeight: 1.35,
        color: "var(--text-faint)",
        marginTop: "3px"
      }
    }, m.meals));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: labelStyle
  }, stepNo(2), " Determine your calorie intake"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: meal.calories.length > 1 ? "1fr 1fr" : "1fr",
      gap: "10px"
    }
  }, meal.calories.map((c, i) => {
    const active = i === calIdx;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setCalIdx(i),
      style: {
        cursor: "pointer",
        padding: "12px 14px",
        borderRadius: "var(--radius-md)",
        background: active ? "var(--green-700)" : "var(--white)",
        color: active ? "var(--ivory-50)" : "var(--text-body)",
        border: "1.5px solid " + (active ? "var(--green-700)" : "var(--border-default)"),
        transition: "all var(--dur-base) var(--ease-out)",
        display: "flex",
        flexDirection: "column",
        gap: "2px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "18px"
      }
    }, c), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-wide)",
        opacity: 0.75
      }
    }, "kcal / day"));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: labelStyle
  }, stepNo(3), " Choose your subscription"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, durations.map(d => {
    const active = d === days;
    const disc = durationDiscount[d] || 0;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: () => setDays(d),
      style: {
        position: "relative",
        flex: "1 1 0",
        minWidth: "64px",
        cursor: "pointer",
        padding: "11px 5px",
        borderRadius: "var(--radius-md)",
        background: active ? "var(--green-700)" : "var(--white)",
        color: active ? "var(--ivory-50)" : "var(--text-body)",
        border: "1.5px solid " + (active ? "var(--green-700)" : "var(--border-default)"),
        transition: "all var(--dur-base) var(--ease-out)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "19px",
        lineHeight: 1
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-wide)",
        opacity: 0.8,
        marginTop: "2px"
      }
    }, "days"), disc > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "10px",
        fontWeight: 700,
        marginTop: "2px",
        color: active ? "var(--green-100)" : "var(--clay-600)"
      }
    }, "\u2212", Math.round(disc * 100), "%"));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: labelStyle
  }, stepNo(4), " Customize ingredients (optional)"), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCustomize,
    style: {
      width: "100%",
      boxSizing: "border-box",
      cursor: "pointer",
      padding: "12px 15px",
      borderRadius: "var(--radius-md)",
      background: "var(--white)",
      border: "1.5px solid " + (excluded.length > 0 ? "var(--green-700)" : "var(--border-default)"),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
      transition: "all var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-strong)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sliders-horizontal",
    style: {
      width: 16,
      height: 16,
      color: "var(--green-700)"
    }
  }), excluded.length > 0 ? "Excluding " + excluded.join(", ") : "Remove up to 3 ingredients"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 16,
      height: 16,
      color: "var(--text-faint)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      paddingTop: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "13px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, perDay, " AED / day \xB7 ", days, " days"), saved > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--clay-600)",
      fontWeight: 500
    }
  }, "You save ", saved, " AED")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      color: "var(--green-700)",
      lineHeight: 1
    }
  }, total), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-faint)"
    }
  }, "AED"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "shopping-bag",
      style: {
        width: 18,
        height: 18
      }
    }),
    onClick: addToCart
  }, "Add to cart \xB7 ", total, " AED")));
}
function ProductDetail({
  plan,
  onBack,
  onAdd
}) {
  const calcOverride = plan && PLAN_CALC_OVERRIDES[plan.slug] || null;
  const planMealConfigs = calcOverride && calcOverride.mealConfigs || MEAL_CONFIGS;
  const planDurations = calcOverride && calcOverride.durations || DURATIONS;
  const planDurationDiscount = calcOverride && calcOverride.durationDiscount || DURATION_DISCOUNT;
  const [mealId, setMealId] = React.useState(planMealConfigs[0].id);
  const [calIdx, setCalIdx] = React.useState(0);
  const [days, setDays] = React.useState(planDurations[0]);
  React.useEffect(() => {
    setMealId(planMealConfigs[0].id);
    setCalIdx(0);
    setDays(planDurations[0]);
    setExcluded([]);
  }, [plan && plan.slug]);
  const [excluded, setExcluded] = React.useState([]);
  const [customizeOpen, setCustomizeOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleIngredient = ing => setExcluded(prev => prev.includes(ing) ? prev.filter(i => i !== ing) : prev.length < 3 ? [...prev, ing] : prev);

  // keep lucide icons after re-render
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  if (!plan) return null;
  const heroSpec = plan.slug === "muscle-up" ? {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "High-protein \xB7 Recovery & endurance"),
    chip: "High-protein",
    facts: [{
      n: "01",
      h: "1,600–2,300 kcal/day",
      p: "Matched to your training goal"
    }, {
      n: "02",
      h: "High protein, anti-inflammatory",
      p: "For muscle growth and recovery"
    }, {
      n: "03",
      h: "Delivered daily across Dubai",
      p: "Before noon, every day"
    }]
  } : plan.slug === "longevity" ? {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "Plant-forward \xB7 Longevity & healthspan"),
    chip: "Heart-healthy",
    hook: /*#__PURE__*/React.createElement(React.Fragment, null, "Longevity isn't a supplement. ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        color: "var(--green-700)"
      }
    }, "It's what you eat every day.")),
    facts: [{
      n: "01",
      h: "1,600–2,200 kcal/day",
      p: "Calibrated for healthspan, not restriction"
    }, {
      n: "02",
      h: "Plant-forward, antioxidant-rich",
      p: "Fiber, polyphenols and omega-3s every day"
    }, {
      n: "03",
      h: "Delivered daily across Dubai",
      p: "Before noon, every day"
    }]
  } : plan.slug === "gut-healing" ? {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "Restore \xB7 Microbiome & digestion"),
    chip: "Gut support",
    facts: [{
      n: "01",
      h: "Remove · rebuild · repopulate",
      p: "All three stages of gut repair in every menu"
    }, {
      n: "02",
      h: "Fermented foods daily",
      p: "Live cultures plus 25g+ of gut-feeding fiber"
    }, {
      n: "03",
      h: "Delivered daily across Dubai",
      p: "Before noon, every day"
    }]
  } : plan.slug === "autoimmune" ? {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "AIP framework \xB7 Anti-inflammatory"),
    chip: "Anti-inflammatory",
    facts: [{
      n: "01",
      h: "Full AIP elimination template",
      p: "No grains, legumes, nightshades, eggs, dairy, nuts or seeds"
    }, {
      n: "02",
      h: "Deeply anti-inflammatory",
      p: "Nutrient-dense meals that calm an overactive immune response"
    }, {
      n: "03",
      h: "Delivered daily across Dubai",
      p: "Before noon, every day"
    }]
  } : plan.slug === "anticandida" ? {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "Low-sugar \xB7 Antifungal & balance"),
    chip: "Low-sugar",
    facts: [{
      n: "01",
      h: "Zero added sugar",
      p: "Nothing for candida to feed on — cravings quiet down"
    }, {
      n: "02",
      h: "Antifungal ingredients daily",
      p: "Garlic, coconut oil, oregano, leafy greens and ferments"
    }, {
      n: "03",
      h: "Delivered daily across Dubai",
      p: "Before noon, every day"
    }]
  } : plan.slug === "easy-detox" ? {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "Fully vegan \xB7 Gentle reset"),
    chip: "Vegan",
    facts: [{
      n: "01",
      h: "1,200–1,500 kcal/day",
      p: "A full reset without fasting or deprivation"
    }, {
      n: "02",
      h: "Liver-supporting foods daily",
      p: "Leafy greens, beets, lemon, green juices and herbal teas"
    }, {
      n: "03",
      h: "Delivered daily across Dubai",
      p: "Before noon, every day"
    }]
  } : plan.slug === "detox-cleanse" ? {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "Juices & smoothies \xB7 1\u20133 day cleanse"),
    chip: "Vegan · Juice",
    facts: [{
      n: "01",
      h: "6 juices & smoothies a day",
      p: "Nutrient-dense, more vegetable than fruit, no added sugar"
    }, {
      n: "02",
      h: "3 days maximum",
      p: "Then transition to Easy Detox for a balanced follow-up"
    }, {
      n: "03",
      h: "Delivered daily across Dubai",
      p: "Before noon, every day"
    }]
  } : plan.slug === "low-fodmap" ? {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "Monash-aligned \xB7 Gut calm & IBS relief"),
    chip: "Anti-bloat",
    facts: [{
      n: "01",
      h: "21 days — the full Phase 1",
      p: "The clinically recommended elimination window"
    }, {
      n: "02",
      h: "Zero hidden FODMAPs",
      p: "No onion or garlic — portions checked against the Monash database"
    }, {
      n: "03",
      h: "Delivered daily across Dubai",
      p: "Before noon, every day"
    }]
  } : null;
  const meal = planMealConfigs.find(m => m.id === mealId) || planMealConfigs[0];
  const calFactor = calIdx === 0 ? 1.0 : 1.12;
  const priceTable = plan.slug === "easy-detox" ? HK_PRICE_TABLE_EASY_DETOX : plan.slug === "detox-cleanse" ? HK_PRICE_TABLE_DETOX_CLEANSE : plan.slug === "muscle-up" ? HK_PRICE_TABLE_MUSCLE_UP : HK_PRICE_TABLE_GUT_PLANS.includes(plan.slug) ? HK_PRICE_TABLE_GUT : HK_PRICE_TABLE_PLANS.includes(plan.slug) ? HK_PRICE_TABLE : null;
  const priceRow = priceTable && priceTable[meal.id] && priceTable[meal.id][Math.min(calIdx, priceTable[meal.id].length - 1)];
  let perDay, total, saved;
  if (priceRow && priceRow[days]) {
    total = priceRow[days];
    perDay = Math.round(total / days);
    const firstDays = Math.min.apply(null, Object.keys(priceRow).map(Number));
    const baseDay = priceRow[firstDays] / firstDays;
    saved = Math.max(0, Math.round(baseDay * days) - total);
  } else {
    perDay = Math.round(plan.price * meal.factor * calFactor);
    const discount = planDurationDiscount[days] || 0;
    const subtotal = perDay * days;
    total = Math.round(subtotal * (1 - discount));
    saved = subtotal - total;
  }
  const addToCart = () => {
    setDrawerOpen(false);
    onAdd && onAdd(plan, {
      total,
      perDay,
      days,
      mealLabel: meal.label,
      meals: meal.meals,
      calorieLabel: meal.calories[calIdx] + " kcal/day",
      excluded
    });
  };
  const calc = {
    mealId,
    setMealId,
    calIdx,
    setCalIdx,
    days,
    setDays,
    excluded,
    meal,
    perDay,
    saved,
    total,
    addToCart,
    mealConfigs: planMealConfigs,
    durations: planDurations,
    durationDiscount: planDurationDiscount
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "40px 32px 88px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-muted)",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), " All meal plans"), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "56px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, heroSpec ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, heroSpec.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1,
      fontSize: "clamp(34px, 5vw, 58px)",
      color: "var(--text-strong)",
      whiteSpace: "nowrap"
    }
  }, plan.name), heroSpec.hook && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: "22px",
      color: "var(--text-strong)"
    }
  }, heroSpec.hook), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "18px",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      maxWidth: "46ch"
    }
  }, plan.long || plan.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "11px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      background: "var(--clay-100)",
      color: "var(--clay-600)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 11px"
    }
  }, heroSpec.chip), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "11px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      background: "var(--green-100)",
      color: "var(--green-800)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 11px"
    }
  }, "Dairy-free"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "11px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      background: "var(--green-100)",
      color: "var(--green-800)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 11px"
    }
  }, "Gluten-free"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: "11px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      background: "var(--green-100)",
      color: "var(--green-800)",
      borderRadius: "var(--radius-pill)",
      padding: "5px 11px"
    }
  }, "Sugar-free"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }
  }, heroSpec.facts.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.n,
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "20px",
      color: "var(--green-600)",
      lineHeight: 1.3
    }
  }, it.n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, it.h), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, it.p))))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hk-btn-ghost",
    style: {
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      lineHeight: 1,
      border: "1.5px solid var(--green-700)",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      textDecoration: "none",
      padding: "14px 26px",
      fontSize: "14px",
      background: "transparent",
      color: "var(--green-700)",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle",
    style: {
      width: 17,
      height: 17
    }
  }), " WhatsApp Us")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, plan.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "clay",
    variant: "soft"
  }, t)), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Dairy-free"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Gluten-free"), /*#__PURE__*/React.createElement(Tag, {
    tone: "green",
    variant: "soft"
  }, "Sugar-free")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1,
      fontSize: "clamp(30px, 6vw, 44px)",
      color: "var(--text-strong)"
    }
  }, plan.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, plan.long || plan.blurb)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, ["Delivered daily, 7 AM–12 PM", "Customize up to 3 ingredients", "Clean food, chef-made, eco-packaged"].map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 17,
      height: 17,
      color: "var(--green-600)"
    }
  }), " ", i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignSelf: "stretch"
    }
  }, plan.slug === "gut-healing" || plan.slug === "muscle-up" || plan.slug === "low-fodmap" || plan.slug === "easy-detox" || plan.slug === "detox-cleanse" || plan.slug === "autoimmune" || plan.slug === "anticandida" ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      flex: "1 1 auto",
      minHeight: "520px",
      borderRadius: "18px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: plan.slug === "muscle-up" ? "assets/meals/mu-hero.jpg" : plan.slug === "low-fodmap" ? "assets/meals/lf-hero.jpg" : plan.slug === "easy-detox" ? "assets/meals/ed-hero.jpg" : plan.slug === "detox-cleanse" ? "assets/meals/dc-hero.jpg" : plan.slug === "autoimmune" ? "assets/meals/aip-hero.jpg" : plan.slug === "anticandida" ? "assets/meals/ac-hero.jpg" : "assets/meals/gut-hero.jpg",
    alt: plan.name,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })) : /*#__PURE__*/React.createElement("image-slot", {
    id: "hk-prod-" + plan.slug,
    style: {
      width: "100%",
      flex: "1 1 auto",
      minHeight: "520px",
      display: "block"
    },
    shape: "rounded",
    radius: "18",
    placeholder: "Drop a photo of " + plan.name
  }))))), customizeOpen && /*#__PURE__*/React.createElement(IngredientModal, {
    selected: excluded,
    onToggle: toggleIngredient,
    onClose: () => setCustomizeOpen(false)
  }), plan.slug === "muscle-up" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MuscleUpGap, null), /*#__PURE__*/React.createElement(MuscleUpMenu, null), /*#__PURE__*/React.createElement(MuscleUpWhy, null), /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(MuscleUpFAQ, null)) : plan.slug === "gut-healing" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GutHealingGamble, null), /*#__PURE__*/React.createElement(GutHealingMenu, null), /*#__PURE__*/React.createElement(GutHealingPhases, null), /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(GutHealingFAQ, null)) : plan.slug === "autoimmune" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AutoimmuneGamble, null), /*#__PURE__*/React.createElement(AutoimmuneMenu, null), /*#__PURE__*/React.createElement(AutoimmunePhases, null), /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(AutoimmuneFAQ, null)) : plan.slug === "anticandida" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AnticandidaGamble, null), /*#__PURE__*/React.createElement(AnticandidaMenu, null), /*#__PURE__*/React.createElement(AnticandidaPhases, null), /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(AnticandidaFAQ, null)) : plan.slug === "easy-detox" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EasyDetoxGamble, null), /*#__PURE__*/React.createElement(EasyDetoxMenu, null), /*#__PURE__*/React.createElement(EasyDetoxPhases, null), /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(EasyDetoxFAQ, null)) : plan.slug === "detox-cleanse" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DetoxCleanseGamble, null), /*#__PURE__*/React.createElement(DetoxCleanseMenu, null), /*#__PURE__*/React.createElement(DetoxCleansePhases, null), /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(DetoxCleanseFAQ, null)) : plan.slug === "low-fodmap" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LowFodmapGamble, null), /*#__PURE__*/React.createElement(LowFodmapMenu, null), /*#__PURE__*/React.createElement(LowFodmapPhases, null), /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(LowFodmapFAQ, null)) : plan.slug === "longevity" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LongevityEvidence, null), /*#__PURE__*/React.createElement(LongevityMenu, null), /*#__PURE__*/React.createElement(LongevityFoods, null), /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(LongevityFAQ, null)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CalculatorBand, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true),
    plan: plan
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(FAQ, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 55,
      background: "var(--green-900)",
      boxShadow: "0 -6px 24px rgba(0,0,0,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "12px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "14px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontSize: "18px",
      color: "var(--ivory-50)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, plan.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--green-200)",
      whiteSpace: "nowrap"
    }
  }, meal.label, " \xB7 ", days, " days \xB7 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ivory-50)"
    }
  }, total, " AED"))), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "md",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "calculator",
      style: {
        width: 16,
        height: 16
      }
    }),
    onClick: () => setDrawerOpen(true)
  }, "Build your plan"))), drawerOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setDrawerOpen(false),
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(12,25,18,0.45)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "min(480px, 100%)",
      background: "var(--bg-page)",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 24px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontSize: "18px",
      color: "var(--text-strong)"
    }
  }, plan.name), /*#__PURE__*/React.createElement("button", {
    onClick: () => setDrawerOpen(false),
    "aria-label": "Close",
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "grid",
      placeItems: "center",
      width: 36,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 20,
      height: 20
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      padding: "20px 24px 32px"
    }
  }, /*#__PURE__*/React.createElement(PlanCalculator, {
    calc: calc,
    onOpenCustomize: () => setCustomizeOpen(true)
  })))));
}

/* ---------- Calculator section before Q&A / reviews ---------- */
function CalculatorBand({
  calc,
  onOpenCustomize,
  plan
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "#E6EACE",
      borderTop: "1px solid var(--green-100)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/botanical-pattern.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.3,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hk-container hk-grid-2",
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "64px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "Ready when you are"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "clamp(28px, 4vw, 40px)",
      lineHeight: "var(--leading-tight)",
      color: "var(--text-strong)"
    }
  }, "Build your ", plan.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "40ch",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.65,
      color: "var(--text-muted)"
    }
  }, "Pick your meals, calories and subscription length \u2014 your price updates instantly. Longer plans unlock bigger discounts.")), /*#__PURE__*/React.createElement(PlanCalculator, {
    calc: calc,
    onOpenCustomize: onOpenCustomize
  })));
}
window.ProductDetail = ProductDetail;
window.PlanCalculator = PlanCalculator;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/QuoteStrip.jsx
try { (() => {
function QuoteStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "24px",
      top: "-14px",
      fontFamily: "var(--font-display)",
      fontSize: "180px",
      lineHeight: 1,
      color: "var(--green-100)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "640px",
      margin: "0 auto",
      padding: "28px 32px",
      display: "flex",
      alignItems: "flex-start",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "25px",
      lineHeight: 1.4,
      color: "var(--text-strong)"
    }
  }, "We built Healthy Kitchen on one belief: ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      color: "var(--green-700)"
    }
  }, "food should heal, not harm."), /*#__PURE__*/React.createElement("br", null), "Every plate we send out is made the way we'd feed our own family.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "6px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/brand/natalia.jpg",
    alt: "Natalia Belaiche",
    style: {
      width: "130px",
      height: "130px",
      objectFit: "cover",
      borderRadius: "var(--radius-md)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Natalia Belaiche"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "0.02em",
      color: "var(--text-faint)"
    }
  }, "Founder, Functional Nutritionist")))));
}
window.QuoteStrip = QuoteStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/QuoteStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TermsConditions.jsx
try { (() => {
function TermsConditions() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const sections = [{
    title: "Website",
    body: ["• The website is governed by the laws of the United Arab Emirates, our country of domicile.", "• We take appropriate measures to ensure data privacy and security; however, healthykitchen.delivery cannot guarantee the security of any information disclosed online.", "• Customers using the website who are minors/under the age of 18 shall not register as users of the website and shall not transact on or use the website."]
  }, {
    title: "Ordering",
    body: ["If you place an order through the site, you are responsible for ensuring the accuracy of your order and the correct delivery address. Terms and conditions apply."]
  }, {
    title: "Payment",
    body: ["• If you make a payment for our products or services on our website, the details you submit will be provided directly to our payment provider via a secure connection.", "• When you register for a subscription plan, you agree that Healthy Kitchen or its third-party payment processor is authorized to charge you in advance for your subscription plan, plus any applicable taxes or other charges.", "• We accept payments online using Visa and MasterCard credit/debit cards in AED.", "• All credit/debit card details and personally identifiable information will NOT be stored, sold, shared, rented, or leased to any third parties.", "• Multiple transactions may result in multiple postings to the cardholder’s monthly statement."]
  }, {
    title: "Delivery policy",
    body: ["• We deliver to Dubai free of charge.", "• You will be able to choose a time slot for your delivery once you create your address.", "• Orders placed before 1:00 PM will be delivered the next day. Orders placed after 1:00 PM will be delivered in two days.", "• We will deliver as per the agreed schedule. We reserve the right not to deliver outside our designated delivery times or areas. If we are unable to deliver due to an inaccurate address provided by you, we will not be responsible. If you request that your order be left at your door, we will have no further liability for loss, spoilage, or damage caused by others.", "• We need 48 hours’ notice to process any change of delivery address.", "• Proof of delivery receipt signed/confirmed by the registered customer is required."]
  }, {
    title: "Cancellation",
    body: ["After the order is confirmed, the meal plan cannot be canceled."]
  }, {
    title: "Refunds",
    body: ["After acceptance of the order by our manager, Healthy Kitchen has no obligation to refund any amount paid. In other cases, refunds will be done only through the original mode of payment and will be processed within 10 to 45 days, depending on the issuing bank of the credit card."]
  }, {
    title: "Pausing",
    body: ["You can temporarily pause your plan if you are subscribed to our 1, 2, or 3-month plans. You are allowed up to 5 pauses per month, but please note that pause requests need to be made at least 48 working hours in advance to be effective. Otherwise, same-day or next-day pause requests may result in charges."]
  }, {
    title: "Prices",
    body: ["All prices shown on the site are subject to change at any time without notice. The price available through the site reflects the current price and supersedes any and all prior prices for any plan. We may offer promotional pricing, incentive pricing, loyalty discounts, and other alternative pricing structures for some or all of our subscription plans at our discretion. We reserve the right to discontinue, modify, or extend such pricing without prior notice."]
  }, {
    title: "Chiller bag",
    body: ["Healthy Kitchen charges a refundable deposit of AED 160 per cooler bag. After returning the chiller bag to the company, the deposit is refunded to the bank card from which the payment was made. Payment and will be processed within 10 – 14 days, depending on the issuing bank of the credit card."]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "72px 32px 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginBottom: "36px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--text-faint)"
    }
  }, "Legal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "0.02em",
      lineHeight: 1.05,
      fontSize: "clamp(32px, 5vw, 48px)",
      color: "var(--text-strong)"
    }
  }, "Terms & Conditions")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 40px",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.7,
      color: "var(--text-body)"
    }
  }, "By using this site, you agree to these terms and conditions of use. Healthy Kitchen may revise and update these terms and conditions anytime, without any prior notice. Review the terms and conditions periodically. These are posted on the website. Your continued usage of the healthykitchen.delivery website will mean that you accept the revisions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "40px"
    }
  }, sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "24px",
      color: "var(--green-700)"
    }
  }, s.title), s.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.7,
      color: "var(--text-body)"
    }
  }, p)))))));
}
window.TermsConditions = TermsConditions;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TermsConditions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyChooseUs.jsx
try { (() => {
const {
  Button,
  SectionHeading
} = window.HealthyKitchenDesignSystem_f4c763;
const HK_WHY_MARQUEE = ["Gluten-free", "Chef-crafted", "Nutritionist-designed", "Eco-packaged", "Delivered daily"];
const HK_WHY_ICONS = ["leaf", "sliders-horizontal", "brain", "chef-hat", "wheat-off", "recycle"];
const HK_WHY_HOOKS = ["Picked fresh, cooked the same day", "Your macros, your rules", "Menus built on nutrition science", "Restaurant craft in every box", "A 100% gluten-free kitchen", "Kind to you — and the planet"];
function WhyChooseUs({
  onExplore
}) {
  const features = window.HK_FEATURES;
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % features.length), 5000);
    return () => clearInterval(t);
  }, [paused, features.length]);
  const f = features[active];
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [active]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--green-700)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes hkWhyIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @keyframes hkWhyBar { from { width: 0%; } to { width: 100%; } }
        @keyframes hkWhyMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .hk-why-anim { animation: none !important; } }
      `), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "hk-watermark",
    style: {
      position: "absolute",
      right: "-30px",
      top: "18px",
      fontFamily: "var(--font-script)",
      fontSize: "250px",
      lineHeight: 1,
      color: "rgba(253,252,248,0.05)",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "delight"), /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "92px 32px 72px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "48px",
      flexWrap: "wrap",
      marginBottom: "64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-widest)",
      color: "var(--green-300)"
    }
  }, "Why choose us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-wide)",
      fontSize: "clamp(32px, 5vw, 48px)",
      lineHeight: "var(--leading-tight)",
      color: "var(--ivory-50)"
    }
  }, "Food that heals,", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "6px",
      color: "var(--green-300)"
    }
  }, "made to delight"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "330px",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--green-100)"
    }
  }, "From sourcing to plating we hold one standard \u2014 clean, functional nutrition that tastes like a treat. Six reasons Dubai trusts us daily.")), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-2",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "72px",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": "Why choose us",
    onMouseLeave: () => setPaused(false),
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, features.map((ft, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: ft.n,
      role: "tab",
      "aria-selected": isActive,
      onMouseEnter: () => {
        setActive(i);
        setPaused(true);
      },
      onFocus: () => {
        setActive(i);
        setPaused(true);
      },
      onClick: () => {
        setActive(i);
        setPaused(true);
      },
      style: {
        display: "grid",
        gridTemplateColumns: "52px 1fr auto",
        alignItems: "center",
        gap: "18px",
        padding: "20px 18px",
        margin: 0,
        width: "100%",
        textAlign: "left",
        background: isActive ? "rgba(253,252,248,0.07)" : "transparent",
        border: "none",
        borderTop: "1px solid rgba(253,252,248,0.14)",
        borderBottom: i === features.length - 1 ? "1px solid rgba(253,252,248,0.14)" : "none",
        borderRadius: isActive ? "var(--radius-md, 10px)" : 0,
        cursor: "pointer",
        transition: "background 0.3s ease, transform 0.3s ease",
        transform: isActive ? "translateX(6px)" : "none",
        color: "inherit",
        font: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "20px",
        color: isActive ? "var(--ivory-50)" : "var(--green-300)",
        transition: "color 0.3s ease"
      }
    }, ft.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        letterSpacing: "var(--tracking-wide)",
        fontSize: "20px",
        color: "var(--ivory-50)",
        opacity: isActive ? 1 : 0.68,
        transition: "opacity 0.3s ease"
      }
    }, ft.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        border: "1px solid rgba(253,252,248,0.3)",
        background: isActive ? "var(--ivory-50)" : "transparent",
        color: isActive ? "var(--green-700)" : "var(--green-200)",
        transform: isActive ? "rotate(45deg)" : "none",
        transition: "all 0.35s ease",
        fontSize: "16px",
        lineHeight: 1
      }
    }, "\u2191"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "36px",
      minHeight: "420px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: active,
    className: "hk-why-anim",
    style: {
      animation: "hkWhyIn 0.5s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: "128px",
      height: "128px",
      borderRadius: "50%",
      border: "1.5px solid var(--green-300)",
      background: "rgba(253,252,248,0.06)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": HK_WHY_ICONS[active],
    style: {
      width: "58px",
      height: "58px",
      color: "var(--green-200)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "18px 0 14px",
      fontFamily: "var(--font-script)",
      fontSize: "clamp(24px, 2.6vw, 32px)",
      lineHeight: 1.2,
      color: "var(--green-200)"
    }
  }, HK_WHY_HOOKS[active]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "42ch",
      fontFamily: "var(--font-body)",
      fontSize: "17px",
      lineHeight: 1.65,
      color: "var(--green-100)"
    }
  }, f.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      flex: 1
    }
  }, features.map((ft, i) => /*#__PURE__*/React.createElement("span", {
    key: ft.n,
    style: {
      position: "relative",
      flex: 1,
      height: "2px",
      background: "rgba(253,252,248,0.18)",
      overflow: "hidden"
    }
  }, i < active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--green-200)"
    }
  }), i === active && /*#__PURE__*/React.createElement("span", {
    key: active,
    className: "hk-why-anim",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      background: "var(--ivory-50)",
      animation: "hkWhyBar 5s linear both",
      animationPlayState: paused ? "paused" : "running"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wider)",
      color: "var(--green-200)"
    }
  }, f.n, " / 06")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    onClick: onExplore
  }, "Start your plan")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(253,252,248,0.14)",
      overflow: "hidden",
      padding: "16px 0",
      whiteSpace: "nowrap"
    },
    className: "hk-marquee-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-why-anim",
    style: {
      display: "inline-flex",
      animation: "hkWhyMarquee 30s linear infinite"
    }
  }, [0, 1].map(rep => /*#__PURE__*/React.createElement("div", {
    key: rep,
    "aria-hidden": rep === 1,
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, HK_WHY_MARQUEE.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "28px",
      paddingRight: "28px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wider)",
      fontSize: "18px",
      color: "var(--green-200)"
    }
  }, w), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-400)",
      fontSize: "12px"
    }
  }, "\u2726"))))))));
}
function Reviews() {
  const reviews = window.HK_REVIEWS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hk-container",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "84px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Reviews",
    title: "Loved across Dubai"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hk-grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px"
    }
  }, reviews.map(r => /*#__PURE__*/React.createElement("figure", {
    key: r.name,
    style: {
      margin: 0,
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: "28px",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      boxShadow: "var(--shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "44px",
      lineHeight: 0.6,
      color: "var(--green-300)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, r.text), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "1px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wide)",
      fontSize: "16px",
      color: "var(--text-strong)"
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--text-faint)"
    }
  }, r.role)))))));
}
window.WhyChooseUs = WhyChooseUs;
window.Reviews = Reviews;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyChooseUs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Healthy Kitchen — meal plan catalogue (from the live site) */
window.HK_PLANS = [{
  slug: "longevity",
  name: "Longevity Diet",
  price: 185,
  tags: ["Heart-healthy"],
  blurb: "Unlock a longer, healthier life. Boosts energy, supports heart health, and slows aging, keeping you active and vibrant.",
  long: "Inspired by the world's longest-living populations — plant-forward, antioxidant-rich, and balanced for cellular health. A lactose option is available on this plan."
}, {
  slug: "gut-healing",
  name: "Gut Healing Protocol",
  price: 180,
  tags: ["Gut support"],
  blurb: "Transform your health by healing your gut. Restores gut flora, improves digestion, and alleviates discomfort, leaving you revitalized.",
  long: "Our Gut Healing plan rebuilds a resilient microbiome with nutrient-dense, easy-to-digest meals. Expect less bloating, steadier energy, and better absorption — all dairy-, gluten- and sugar-free."
}, {
  slug: "autoimmune",
  name: "Autoimmune Protocol",
  price: 185,
  tags: ["Anti-inflammatory"],
  blurb: "Manage autoimmune conditions. Reduce inflammation, support immune function, and improve your quality of life.",
  long: "Built around the AIP framework: deeply anti-inflammatory, free from common triggers, and rich in the nutrients that calm an overactive immune response."
}, {
  slug: "low-fodmap",
  name: "Low FODMAP Protocol",
  price: 185,
  tags: ["Anti-bloat"],
  blurb: "Ease IBS and digestive discomfort. Cuts fermentable carbs that trigger bloating, gas, and cramping, restoring digestive calm.",
  long: "A structured low-FODMAP protocol built to calm a sensitive gut — meals free from the fermentable carbs that commonly trigger bloating, gas, and cramping, so digestion feels steady again."
}, {
  slug: "muscle-up",
  name: "Muscle UP",
  price: 200,
  tags: ["High-protein"],
  blurb: "High-protein, quality-carb meals that optimize muscle function, boost endurance, and accelerate recovery.",
  long: "Engineered for athletes: precise protein targets, clean complex carbs, and recovery-focused micronutrients — all in deliciously balanced, chef-made portions that optimize muscle function, boost endurance, and accelerate recovery."
}, {
  slug: "anticandida",
  name: "Anticandida Protocol",
  price: 185,
  tags: ["Low-sugar"],
  blurb: "Combat candida and restore balance. Reduces fungal infections, cuts sugar cravings, and boosts your immune system.",
  long: "A targeted low-sugar protocol that starves candida while nourishing you. Anti-fungal ingredients, zero added sugar, and balanced macros to bring your system back into equilibrium."
}, {
  slug: "easy-detox",
  name: "Easy Detox",
  price: 210,
  tags: ["Vegan"],
  blurb: "Refresh your body and mind. Flush out toxins, boost energy, and enhance health with our comprehensive program.",
  long: "A gentle, fully vegan reset. Whole-food, plant-based meals designed to support your body's natural detox pathways without leaving you hungry."
}, {
  slug: "detox-cleanse",
  name: "Detox & Cleanse",
  price: 330,
  tags: ["Vegan", "Juice"],
  blurb: "Revitalize with our Juice and Smoothie Detox. Nutrient-dense fruits and vegetables to detoxify, boost immunity, and glow.",
  long: "Freshly squeezed juices and nutrient-dense smoothies. The deepest reset we offer — for a clear head, a calm gut, and a healthy glow."
}];
window.HK_FEATURES = [{
  n: "01",
  title: "Clean Food & Quality",
  body: "We use only clean, quality ingredients and organic protein — the purest, nutrient-rich foods free from harmful pesticides and chemicals."
}, {
  n: "02",
  title: "Personalized Nutrition",
  body: "Customize your menu to your preferences and restrictions. Remove what you dislike or can't tolerate."
}, {
  n: "03",
  title: "Expertly Designed",
  body: "Menus designed by nutrition experts — balanced meals built around your specific health goals."
}, {
  n: "04",
  title: "Gourmet & Delicious",
  body: "Healthy food that tastes like a top-tier restaurant. Nutritious can also be delightful."
}, {
  n: "05",
  title: "Free From Gluten & Dairy",
  body: "Every dish is free from gluten, sugar, and harmful chemicals — clean, wholesome nutrition."
}, {
  n: "06",
  title: "Eco-Friendly Packaging",
  body: "Recyclable and biodegradable packaging, with mindful use of electricity and water in production."
}];
window.HK_REVIEWS = [{
  name: "Dr. Preya",
  role: "Doctor",
  text: "Nutritionally dense, varied, the highest quality, and incredibly tasty — truly clean food. As a doctor, I'd have no hesitation recommending Healthy Kitchen to my clients on their healing journeys."
}, {
  name: "Alexandra",
  role: "Member",
  text: "The meals are sophisticated and feel created with real thought and care. It uses less sugar than most, yet everything is still so tasty. Eat clean without sacrificing taste."
}, {
  name: "Frank",
  role: "Member",
  text: "Incredibly tasty food with clean ingredients delivered to my doorstep. My bloating is gone, I'm full of energy, and I can't wait for tomorrow's delivery. Dubai was waiting for this."
}];
window.HK_FAQ_ITEMS = [{
  q: "How does delivery work?",
  a: "Meals are chef-made fresh and delivered daily across Dubai, 7 AM–12 PM, in recyclable, eco-friendly packaging."
}, {
  q: "Can I customize my meals?",
  a: "Yes — every plan lets you remove up to 3 ingredients you dislike or can't tolerate, no extra charge."
}, {
  q: "What about allergies and intolerances?",
  a: "Every dish is dairy-, gluten- and sugar-free by default. Tell us about any other intolerances and we'll tailor your menu."
}, {
  q: "Can I pause or skip a day?",
  a: "Yes — pause or skip any day with 24 hours' notice, no penalties."
}, {
  q: "How is pricing calculated?",
  a: "Pricing depends on meals per day, calorie tier, and subscription length — longer plans unlock a bigger discount."
}, {
  q: "How clean is the food, really?",
  a: "Very. We source clean, nutrient-rich ingredients and organic protein, free from harmful pesticides and chemicals, for every plan."
}];
const HK_LOREM = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."];
window.HK_BLOG_POSTS = [{
  slug: "travel-proof-your-gut",
  category: "Gut Health",
  date: "13 Jul 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/07/travel-immunity-Dubai-e1783685342307-668x460.png",
  title: "Travel-Proof Your Gut: What to Eat Before, During and After Your Trip",
  excerpt: "New foods, long flights and broken routines unsettle digestion. A little planning on either side of the trip prevents most of it.",
  body: ["Travel is exciting; your digestive system is rarely as enthusiastic. Long flights, unfamiliar water and meals at odd hours all disturb the rhythm your gut relies on.", {
    h: "Before you fly"
  }, "Spend the two or three days before departure eating simply — vegetables, whole grains, fermented foods. A well-fed microbiome copes far better with disruption than one already under strain.", {
    h: "On the road"
  }, "Hydrate more than feels necessary, especially in the air. Keep one balanced meal a day that looks like your normal eating, and treat the rest as the holiday it is.", {
    h: "When you get home"
  }, "Give yourself a week of gentle, fibre-rich meals rather than a punishing cleanse. Digestion resets quickly when it is fed properly, and our post-travel menus are built for exactly that week."]
}, {
  slug: "hydration-on-a-plate",
  category: "Wellness",
  date: "06 Jul 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/07/Summer-in-Dubai-e1783340431349-668x460.png",
  title: "Hydration on a Plate: Cooling, Water-Rich Meals for the Dubai Heat",
  excerpt: "In a Dubai summer your water bottle is only half the story — a large share of your fluid comes from food.",
  body: ["Most people think of hydration as something you drink. In practice, a meaningful share of your daily fluid arrives on your plate, and in a Dubai summer that share matters.", {
    h: "Foods that hold water"
  }, "Cucumber, tomato, melon, courgette and leafy greens are mostly water by weight, and they carry minerals with them. So they hydrate better than water alone.", {
    h: "Why minerals come first"
  }, "Fluid without electrolytes passes straight through you. Potassium and magnesium help your body hold on to what you drink, which is why we season and compose summer dishes with both in mind.", {
    h: "Light, cool, still satisfying"
  }, "Chilled soups, big salads and fresh-fruit finishes keep you cool without leaving you hungry an hour later. That balance is the whole point of our summer menu."]
}, {
  slug: "eating-for-your-genes",
  category: "Nutrition",
  date: "29 Jun 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/06/DNA-Testing-e1782716339800-668x460.png",
  title: "Eating for Your Genes: What Nutrigenomics Actually Tells You",
  excerpt: "Dietary advice was written as if every body responds identically to food. Your genes say otherwise — within limits.",
  body: ["For decades, nutrition advice was issued as though every human body handled food the same way. Genetics has quietly dismantled that assumption.", {
    h: "Where genes really matter"
  }, "Caffeine clearance, folate metabolism, lactose tolerance and how you handle saturated fat all vary genetically. Two people can follow identical diets and get measurably different results.", {
    h: "What a test cannot do"
  }, "A gene panel is a tendency, not a verdict. Sleep, stress, movement and the microbiome still shape outcomes more than any single variant.", {
    h: "The practical version"
  }, "Use testing to fine-tune, not to start. Build the boring foundation first — fibre, protein, plants, regular meals — then adjust the details around what your results suggest."]
}, {
  slug: "eating-to-train",
  category: "Nutrition",
  date: "22 Jun 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/06/Performance-Nutrition-for-Active-Men-in-Dubai-e1782115960524-668x460.png",
  title: "Eating to Train: Performance Nutrition for Active Men in Dubai",
  excerpt: "Most men in Dubai train harder than they recover. Training is scheduled; eating is improvised.",
  body: ["The gym session gets a slot in the calendar. Padel gets a slot. Recovery gets whatever is left, which is usually a late dinner and not much thought.", {
    h: "Protein, spread out"
  }, "Total protein matters, but distribution matters too. Twenty-five to forty grams at each meal beats one enormous portion at night for building and repairing tissue.", {
    h: "Carbohydrates are not the enemy"
  }, "If you train hard, you need fuel. Quality carbohydrates around training sessions restore glycogen and protect the muscle you are trying to build.", {
    h: "Absorption is the missing link"
  }, "If digestion is inflamed, a high-protein diet is partly wasted. Settle the gut first and the same food starts to work harder — which is why our Muscle UP plan is built on clean, easily digested protein."]
}, {
  slug: "functional-foods-cellular-energy-nad",
  category: "Wellness",
  date: "15 Jun 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/06/NAD-e1781456280306-668x460.png",
  title: "Functional Foods That Support Cellular Energy and NAD+ Pathways",
  excerpt: "Every cell is a small energy factory. What you eat determines how well the machinery runs.",
  body: ["When your cells produce energy efficiently you feel it as stamina, clear thinking and quick recovery. When they do not, you call it tiredness.", {
    h: "What NAD+ does"
  }, "NAD+ is a coenzyme central to turning food into usable energy. Levels tend to decline with age, and the pathways that recycle it depend on nutrients from the diet.", {
    h: "Foods that feed the pathway"
  }, "B3-rich foods — fish, poultry, mushrooms, whole grains — supply the raw material. Polyphenol-rich vegetables, berries and green tea support the enzymes that use it.", {
    h: "The unglamorous multipliers"
  }, "Sleep, movement and not overeating do more for cellular energy than any single ingredient. Food sets the conditions; habits do the rest."]
}, {
  slug: "mediterranean-heart-healthy-eating",
  category: "Nutrition",
  date: "08 Jun 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/06/Mediterranean-Diet-e1780904404140-668x460.png",
  title: "Mediterranean Eating: A Functional Approach to Cardiovascular Health",
  excerpt: "The most studied diet in the world is also one of the easiest to enjoy. Here is what actually does the work.",
  body: ["The Mediterranean pattern has more evidence behind it than any other way of eating. Its strength is not a single superfood but the shape of the whole plate.", {
    h: "Fats that help"
  }, "Extra-virgin olive oil, nuts and oily fish supply monounsaturated and omega-3 fats. Both are associated with healthier blood lipids and lower inflammation.", {
    h: "Fibre and plants, in volume"
  }, "Legumes, vegetables and whole grains feed the microbiome and help manage cholesterol. Variety matters more than quantity of any one item.", {
    h: "How to make it stick"
  }, "Nobody sustains a diet they resent. The Mediterranean pattern lasts because it tastes good, which is why our Longevity plan borrows its structure."]
}, {
  slug: "foods-that-support-male-hormones",
  category: "Nutrition",
  date: "01 Jun 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/05/mans-health-month-e1780234375146-668x460.png",
  title: "Foods That Support Male Hormones: Eating for Testosterone and Vitality",
  excerpt: "Hormonal health in men is shaped less by supplements than by sleep, body composition and what is on the plate.",
  body: ["Testosterone gets discussed as though it were a supplement problem. In reality it responds to weight, sleep, stress and diet quality far more reliably.", {
    h: "Minerals that matter"
  }, "Zinc and magnesium are both involved in hormone production, and both are commonly under-consumed. Seafood, seeds, nuts and legumes are the practical sources.", {
    h: "Enough fat, and the right kind"
  }, "Hormones are built from cholesterol, so very low-fat diets can work against you. Olive oil, eggs, oily fish and avocado supply what the system needs.", {
    h: "What quietly suppresses it"
  }, "Excess alcohol, chronic under-sleeping and rising visceral fat all push in the wrong direction. Fixing those three usually beats anything you can buy."]
}, {
  slug: "probiotic-foods-vs-supplements",
  category: "Gut Health",
  date: "25 May 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/05/digestive-health-day-e1779713827793-668x460.png",
  title: "Probiotic Foods vs Supplements: What Your Gut Really Needs",
  excerpt: "One of the most common questions we get. The honest answer: food first, supplements when there is a reason.",
  body: ["Probiotic capsules are easy to buy and easy to overestimate. They can help in specific situations, but they are not a substitute for how you eat.", {
    h: "What fermented food gives you"
  }, "Yoghurt, kefir, kimchi and sauerkraut deliver live cultures alongside fibre, minerals and food matrix. That combination survives digestion better than a lone strain.", {
    h: "Prebiotics do the heavy lifting"
  }, "Bacteria need feeding. Onion, garlic, oats, legumes and slightly under-ripe banana supply the fibres your existing microbes ferment.", {
    h: "When a supplement earns its place"
  }, "After antibiotics, during travel, or with a specific diagnosis, a targeted strain can genuinely help. Otherwise, spend the money on vegetables."]
}, {
  slug: "5-day-anti-bloating-meal-plan",
  category: "Gut Health",
  date: "18 May 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/05/bloating-causes-Dubai-e1779019068715-668x460.png",
  title: "A 5-Day Anti-Bloating Plan: Eating for a Calmer Digestive System",
  excerpt: "Bloating is the complaint we hear most, and one of the most disruptive to an ordinary day.",
  body: ["Bloating rarely has one cause. Meal size, eating speed, fermentable carbohydrates and stress all contribute, often at the same time.", {
    h: "Days one and two: simplify"
  }, "Cooked vegetables, lean protein and gentle grains. Warm food is easier to process than raw volume, and smaller portions eaten slowly help immediately.", {
    h: "Days three and four: identify"
  }, "Reintroduce one suspect group at a time — dairy, wheat, legumes, certain fruits. Patterns become obvious quickly when everything else stays steady.", {
    h: "Day five: rebuild"
  }, "Add fibre back gradually alongside fermented foods. If the pattern keeps returning, an intolerance test removes the guesswork."]
}, {
  slug: "7-serotonin-boosting-foods",
  category: "Wellness",
  date: "11 May 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/05/serotonin-dubai-e1778503590266-668x460.png",
  title: "7 Foods That Support Serotonin — and Your Mood",
  excerpt: "Most of the body's serotonin is made in the gut, which puts your plate closer to your mood than you might think.",
  body: ["The overwhelming majority of serotonin in the body is produced in the digestive tract. That single fact reframes how food relates to mood.", {
    h: "Start with tryptophan"
  }, "Eggs, oily fish, turkey, tofu, oats, seeds and nuts all supply the amino acid serotonin is built from. Pair them with a little whole-grain carbohydrate to help it along.", {
    h: "Then feed the gut"
  }, "A diverse, fibre-rich diet supports the bacteria involved in that production. Fermented foods help; ultra-processed food does the opposite.", {
    h: "Steady beats spiky"
  }, "Blood-sugar crashes feel like mood crashes. Balanced meals at regular times do more for how you feel than any single ingredient."]
}, {
  slug: "brain-boosting-foods",
  category: "Wellness",
  date: "04 May 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/05/Mental-Health-Awareness-Month-e1777790800530-668x460.png",
  title: "Brain-Boosting Foods: Eating for Mood, Focus and Mental Clarity",
  excerpt: "Your brain is metabolically expensive. What you feed it shows up as focus — or fog.",
  body: ["The brain burns a disproportionate share of your daily energy and is unusually sensitive to what that energy arrives with.", {
    h: "Fats for structure"
  }, "Omega-3 fats from oily fish, walnuts and flax are structural components of brain cell membranes. Low intake is associated with poorer mood and cognition.", {
    h: "Colour for protection"
  }, "Berries, leafy greens and deeply coloured vegetables supply polyphenols that help manage oxidative stress. Variety across the week does more than any single serving.", {
    h: "Stability for focus"
  }, "Sharp glucose swings blunt concentration. Protein, fibre and fat together keep the supply even, which is how our meals are composed by default."]
}, {
  slug: "foods-that-support-hormone-balance",
  category: "Nutrition",
  date: "27 Apr 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/04/hormone-imbalance-treatment-Dubai-e1777218455668-668x460.png",
  title: "Foods That Support Hormone Balance in Women",
  excerpt: "Hormonal health is not about avoiding a list of foods. It is about consistently supplying what the system needs.",
  body: ["Hormones are made, used and cleared using nutrients from your diet. That process runs on a surprisingly ordinary set of inputs.", {
    h: "Fibre clears what is finished"
  }, "Oestrogen is metabolised and excreted through the gut. Adequate fibre keeps that route moving, which is why sluggish digestion and hormonal symptoms often travel together.", {
    h: "Protein and fat at every meal"
  }, "Both stabilise blood sugar and supply hormone building blocks. Skipping either tends to show up as cravings and mood swings later in the day.", {
    h: "Cycle-aware eating"
  }, "Needs shift across the month — more iron-rich food after menstruation, more magnesium in the second half. Small adjustments beat sweeping rules."]
}, {
  slug: "gut-healing-meal-plan-7-days",
  category: "Gut Health",
  date: "20 Apr 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/04/5A393339-3F21-450A-9591-212AF4061AC0-scaled-e1776688791332-668x460.jpg",
  title: "A Gut-Healing Week: 7 Days of Foods That Support Your Microbiome",
  excerpt: "Consistent patterns matter more than individual superfoods. A structured week beats a shopping list.",
  body: ["Research keeps pointing the same way: what you eat repeatedly matters more than any single ingredient you add.", {
    h: "Days one to three: calm"
  }, "Cooked vegetables, bone broth or a good vegetable stock, gentle protein. The aim is to reduce irritation and let the gut lining settle.", {
    h: "Days four and five: diversify"
  }, "Widen the range of plants. Thirty different plant foods across a week is a useful target, and it is easier than it sounds once herbs, seeds and spices count.", {
    h: "Days six and seven: consolidate"
  }, "Add fermented foods and keep meals regular. That combination is the core of our Gut Healing Protocol, delivered so you do not have to plan it."]
}, {
  slug: "top-5-anti-inflammatory-meals",
  category: "Nutrition",
  date: "13 Apr 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/04/Top-Supplements-Dubai-e1776079384403-668x460.png",
  title: "Anti-Inflammatory Meals to Eat Alongside Your Supplement Routine",
  excerpt: "Supplements work best when the diet reinforces them — the most overlooked part of any protocol.",
  body: ["People invest carefully in supplements, then eat in a way that works against them. Diet is the base layer; supplements are the adjustment.", {
    h: "Oily fish and greens"
  }, "Omega-3s plus leafy vegetables give you fats and micronutrients that inflammation-focused protocols usually target directly.", {
    h: "Turmeric with fat and pepper"
  }, "Curcumin absorbs poorly on its own. Cooked into a dish with olive oil and black pepper, it does considerably better than a dry capsule.", {
    h: "Legumes and colour"
  }, "Fibre feeds the bacteria that produce anti-inflammatory compounds in the gut. Deeply coloured vegetables supply the polyphenols alongside them."]
}, {
  slug: "best-gut-health-foods",
  category: "Gut Health",
  date: "06 Apr 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/04/Bone-Brothe-e1775412857489-668x460.png",
  title: "Best Gut Health Foods: What to Eat to Heal From the Inside Out",
  excerpt: "If you have been searching for gut-friendly food in Dubai, you are not alone. Here is where to start.",
  body: ["Gut repair is less exotic than the internet suggests. A handful of food groups, eaten consistently, does most of the work.", {
    h: "Broth and cooked vegetables"
  }, "Easy to digest, mineral-rich, and gentle on an irritated lining. A sensible starting point when symptoms are active.", {
    h: "Fibre, in variety"
  }, "Legumes, oats, seeds and a wide range of vegetables feed different bacterial populations. Diversity of plants matters more than volume of any one.", {
    h: "Fermented foods, in small amounts"
  }, "Start with a spoonful, not a jar. Tolerance builds, and small regular servings are more useful than an occasional large one."]
}, {
  slug: "post-ramadan-reset",
  category: "Wellness",
  date: "30 Mar 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/03/17a96c90-1af8-4f9f-ab50-8ab1bfabcbf5-668x460.jpeg",
  title: "Post-Ramadan Reset: Restoring Energy and Calming Your Gut",
  excerpt: "A month of altered timing leaves its mark. Returning gently protects the progress you made.",
  body: ["After a month of different meal timing, the return to normal eating deserves as much thought as the fast itself.", {
    h: "Rebuild the rhythm"
  }, "Three balanced meals at regular times re-anchor appetite and energy. Sudden large portions are the fastest route to discomfort.", {
    h: "Rehydrate properly"
  }, "Water plus mineral-rich foods restores what long fasting hours depleted. Soups and water-rich vegetables help more than water alone.", {
    h: "Go easy on sugar"
  }, "Celebration sweets are part of the season. Keeping them alongside protein and fibre rather than on an empty stomach smooths the energy curve."]
}, {
  slug: "eating-for-recovery",
  category: "Wellness",
  date: "23 Mar 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/03/Eating-for-Recovery-e1774251800575-668x460.png",
  title: "Eating for Recovery: Anti-Inflammatory Foods That Restore Balance",
  excerpt: "Recovery is not only about rest. It is a nutritional process with specific requirements.",
  body: ["Whether you are recovering from hard training, illness or a long stretch of stress, your body is rebuilding — and rebuilding needs materials.", {
    h: "Protein for repair"
  }, "Adequate protein at each meal supplies the amino acids tissue repair depends on. Under-eating protein slows everything else down.", {
    h: "Colour for inflammation"
  }, "Polyphenol-rich vegetables, berries, olive oil and oily fish all help modulate the inflammatory response rather than simply suppress it.", {
    h: "Sleep is a nutrient"
  }, "No diet compensates for chronic short sleep. Lighter, earlier dinners are one of the simplest ways to improve both."]
}, {
  slug: "after-ramadan-normal-eating",
  category: "Gut Health",
  date: "16 Mar 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/03/Eid-Dubai-e1773674307522-668x460.png",
  title: "After Ramadan: Returning to Normal Eating Without Digestive Stress",
  excerpt: "Eid Mubarak. The tables are full and the temptation to eat everything at once is very real.",
  body: ["After a month of fasting, digestion has adapted to a particular schedule. Overwhelming it on day one is a common and avoidable mistake.", {
    h: "Smaller, more often"
  }, "Start with moderate portions across the day rather than two large sittings. Your digestive capacity returns within a few days.", {
    h: "Protein and vegetables first"
  }, "Anchoring each meal in protein and vegetables leaves less room for the sugar spike, without banning anything.", {
    h: "Keep what worked"
  }, "Many people eat more mindfully during Ramadan. That habit is worth keeping long after the month ends."]
}, {
  slug: "protein-fibre-healthy-fats",
  category: "Nutrition",
  date: "09 Mar 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/03/macronutriets-dubai-e1773048824835-668x460.png",
  title: "Protein, Fibre and Healthy Fats: The Trio That Keeps You Full",
  excerpt: "Ever finished a meal and felt hungry an hour later? The composition of the plate is usually why.",
  body: ["Hunger an hour after eating is rarely about willpower. It is about what the meal was made of.", {
    h: "Protein sets satiety"
  }, "Protein is the most satiating macronutrient, and it protects muscle while you are at it. Every meal should have a clear source.", {
    h: "Fibre slows the curve"
  }, "Vegetables, legumes and whole grains slow digestion and feed the microbiome. They flatten the spike that leads to the crash.", {
    h: "Fat carries flavour and fullness"
  }, "Olive oil, nuts, seeds and avocado extend satiety and make food worth eating. Together the three turn a meal into several hours of steady energy."]
}, {
  slug: "mid-ramadan-fatigue-bloating",
  category: "Gut Health",
  date: "02 Mar 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/03/Ramadan-Fasting-e1772444259759-668x460.png",
  title: "Mid-Ramadan Fatigue and Bloating: Adjusting Meals for Better Energy",
  excerpt: "What felt manageable in the first days often shifts by the middle of the month.",
  body: ["By mid-Ramadan, many people notice fatigue and bloating creeping in. Usually the fix is in how the two meals are built, not in the fasting itself.", {
    h: "Rethink iftar"
  }, "Breaking the fast with dates and water, then pausing before the main meal, prevents the rush that causes discomfort. Eat slowly; the body needs the ramp.", {
    h: "Make suhoor count"
  }, "Protein, fibre and fat at suhoor carry you much further than refined carbohydrates. Oats, eggs, yoghurt and nuts are the reliable options.", {
    h: "Hydrate between, not during"
  }, "Spread fluids across the evening rather than in two large volumes. Mineral-rich foods help you retain what you drink."]
}, {
  slug: "how-to-eat-during-ramadan",
  category: "Nutrition",
  date: "23 Feb 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/02/Ramadan-Dubai-e1771840673827-668x460.png",
  title: "How to Eat During Ramadan Without Energy Crashes or Overeating",
  excerpt: "Meal timing changes, sleep shifts, and long fasting hours test the best intentions.",
  body: ["Ramadan reorganises the day. With a little structure, the two meals available can support energy rather than swing it.", {
    h: "Build iftar in stages"
  }, "Hydration and something light first, then a balanced main meal twenty minutes later. This alone prevents most of the heaviness people describe.", {
    h: "Protect suhoor"
  }, "Skipping it almost guarantees a difficult afternoon. Slow carbohydrates with protein and fat is the combination that lasts.", {
    h: "Moderate the sweets"
  }, "There is no need to eliminate them. Eaten after a balanced meal rather than instead of one, they cost far less in energy."]
}, {
  slug: "why-consistency-beats-dieting",
  category: "Lifestyle",
  date: "16 Feb 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/02/healthy-meal-plan-e1771248274768-668x460.png",
  title: "Why Consistency Beats Dieting",
  excerpt: "Quick fixes get the attention. The people who actually change their health do something far less interesting.",
  body: ["Short-term diets produce short-term results almost by definition. What holds up over years is structure.", {
    h: "The problem with intensity"
  }, "Highly restrictive plans work until life interrupts them. Because they depend on perfect conditions, they rarely survive a busy month.", {
    h: "What structure looks like"
  }, "Regular meals, adequate protein, plenty of plants, and food you actually want to eat. Unremarkable on any given day; decisive over a year.", {
    h: "Removing the friction"
  }, "Most people fail on logistics, not knowledge. Having good food already prepared is the single most effective intervention we know of."]
}, {
  slug: "food-mood-emotional-eating",
  category: "Wellness",
  date: "09 Feb 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/02/HK-Valentine-e1770646365953-668x460.png",
  title: "Food, Mood and Emotional Eating",
  excerpt: "Emotional eating is usually framed as weak willpower. It is far more physiological than that.",
  body: ["Reaching for food under stress is not a character flaw. Blood sugar, sleep debt and stress hormones all push in that direction.", {
    h: "Undereating drives overeating"
  }, "Long gaps between meals leave you biologically primed to overeat later. Regular meals remove most of the pressure before it builds.", {
    h: "Stress changes what appeals"
  }, "Cortisol shifts appetite toward sugar and fat. Knowing that makes it easier to plan around rather than argue with.", {
    h: "Build the floor first"
  }, "Protein at breakfast, meals at predictable times, enough sleep. Most people find the emotional pull shrinks considerably once those are in place."]
}, {
  slug: "eating-for-stable-energy",
  category: "Nutrition",
  date: "02 Feb 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/02/wearables-e1770026383438-668x460.png",
  title: "Eating for Stable Energy: Why Skipping Meals Backfires",
  excerpt: "Low energy gets blamed on sleep and stress. Often the cause is simpler and closer to lunch.",
  body: ["Skipping meals feels efficient and disciplined. Metabolically it is neither — it tends to produce fatigue, cravings and a larger evening appetite.", {
    h: "The crash cycle"
  }, "A long gap drops blood sugar; the body compensates with stress hormones; you end up wired, then flat. Repeating this daily is exhausting.", {
    h: "Three meals, properly built"
  }, "Each with protein, fibre and fat. Most people need nothing more elaborate than that to feel dramatically steadier within a week.", {
    h: "Snacks with a purpose"
  }, "If gaps are long, a small protein-and-plant snack bridges them. Fruit with nuts beats a bar every time."]
}, {
  slug: "longevity-nutrition-daily-choices",
  category: "Wellness",
  date: "26 Jan 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/01/Longevity-Isnt-Anti-Aging-Its-About-Staying-Strong-Sharp-Mobile-e1769423701232-668x460.png",
  title: "Longevity Nutrition: How Daily Food Choices Affect How You Age",
  excerpt: "Longevity is imagined as clinics and supplements. In practice it is built out of ordinary meals.",
  body: ["The evidence on healthy ageing keeps returning to daily habits rather than interventions. Diet is the one you repeat three times a day.", {
    h: "Plants, in quantity and variety"
  }, "The long-lived populations studied most closely all eat mostly plants, with legumes and whole grains at the centre. Fibre and polyphenols are the common thread.", {
    h: "Protein for the decades ahead"
  }, "Maintaining muscle protects independence later. Adequate protein plus resistance training is the most reliable pairing we have.", {
    h: "Less of the obvious things"
  }, "Ultra-processed food, added sugar and excess alcohol shorten the healthy years more than most people expect. Reducing them is unglamorous and effective."]
}, {
  slug: "why-regular-meals-beat-fasting",
  category: "Nutrition",
  date: "19 Jan 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/01/eating-regular-meal-e1768807961879-668x460.png",
  title: "Why Regular Meals Matter More Than Fasting for Most People",
  excerpt: "Fasting has real uses. For most people, eating regularly is the higher-yield change.",
  body: ["Intermittent fasting became popular because it is simple to describe. That is not the same as being the best option for you.", {
    h: "Who fasting suits"
  }, "Some people genuinely do well on a compressed eating window, particularly if it curbs late-night grazing. It is one tool among several.", {
    h: "Who it works against"
  }, "Anyone under-eating protein, managing hormonal symptoms, training heavily or prone to binge patterns often does worse. Skipping meals is not neutral.", {
    h: "The better default"
  }, "Regular balanced meals stabilise energy, protect muscle and reduce cravings. Master that before experimenting with timing."]
}, {
  slug: "blood-sugar-balance-foundation",
  category: "Nutrition",
  date: "12 Jan 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/01/blood-sugar-e1768212348841-668x460.png",
  title: "Blood Sugar Balance: The Foundation of Energy, Weight and Mood",
  excerpt: "If one thing explains afternoon crashes, cravings and mood dips, it is usually this.",
  body: ["Blood sugar stability is the least glamorous topic in nutrition and the one that changes how people feel fastest.", {
    h: "What causes the spike"
  }, "Refined carbohydrates eaten alone. The same food alongside protein, fat and fibre produces a much gentler curve.", {
    h: "Order matters"
  }, "Vegetables and protein before the starch on your plate measurably reduces the glucose response. It costs nothing to try.", {
    h: "Movement after meals"
  }, "A ten-minute walk after eating helps muscles clear glucose. Small, repeatable, surprisingly effective."]
}, {
  slug: "the-january-reset",
  category: "Wellness",
  date: "05 Jan 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/01/metabolic-health-e1767606274300-668x460.png",
  title: "The January Reset: What Actually Helps Your Body Recover",
  excerpt: "January arrives with motivation and exhaustion in equal measure. Only one of them is useful.",
  body: ["After weeks of disrupted routine, heavier meals and late nights, the instinct is to overcorrect. That rarely lasts past the second week.", {
    h: "Restore, do not punish"
  }, "Regular meals, more vegetables, more water and earlier nights. Nothing dramatic, and far more effective than a detox tea.", {
    h: "Digestion first"
  }, "A stretch of gentle, fibre-rich food settles the system quickly. Most of the heaviness people describe resolves within a week.", {
    h: "Pick habits, not rules"
  }, "One protein-rich breakfast, one daily walk, one week of prepared dinners. Habits that survive February are the ones worth choosing."]
}, {
  slug: "why-extreme-detoxes-backfire",
  category: "Wellness",
  date: "29 Dec 2025",
  image: "https://healthykitchen.delivery/wp-content/uploads/2025/12/detox-gone-wrong-e1767001902839-668x460.png",
  title: "Why Extreme Detoxes Backfire After the Holidays",
  excerpt: "Detox teas and week-long juice fasts promise a fast reset. The body has other plans.",
  body: ["Your liver and kidneys detoxify continuously and competently. What they need is nutrients, hydration and sleep — not deprivation.", {
    h: "What restriction actually does"
  }, "Very low intake slows metabolism, drops energy and often ends in rebound eating. The scale moves; nothing improves.", {
    h: "What supports the process"
  }, "Cruciferous vegetables, leafy greens, adequate protein and plenty of water give the liver the raw material it uses. Fibre carries the end products out.", {
    h: "A cleanse worth doing"
  }, "Short, nutrient-dense and food-based — which is how our Easy Detox and Detox & Cleanse plans are designed."]
}, {
  slug: "hidden-impact-sugar-alcohol-late-meals",
  category: "Wellness",
  date: "22 Dec 2025",
  image: "https://healthykitchen.delivery/wp-content/uploads/2025/12/christmas-food-e1766396849802-668x460.png",
  title: "The Hidden Impact of Sugar, Alcohol and Late Meals on Inflammation",
  excerpt: "Many people feel heavier and more tired in December before the holidays even begin.",
  body: ["Three ordinary December habits compound quietly: more sugar, more alcohol and later dinners. Each affects inflammation and sleep.", {
    h: "Sugar and the spike"
  }, "Repeated glucose spikes drive inflammatory signalling and disturb energy. Pairing sweets with protein and fibre softens both.", {
    h: "Alcohol and recovery"
  }, "Even moderate drinking fragments sleep and irritates the gut lining. Alcohol-free days do more than most supplements.", {
    h: "Timing counts"
  }, "Late heavy meals mean digesting when you should be sleeping. Eating earlier is the cheapest anti-inflammatory intervention available."]
}, {
  slug: "eat-well-during-the-holidays",
  category: "Lifestyle",
  date: "15 Dec 2025",
  image: "https://healthykitchen.delivery/wp-content/uploads/2025/12/healthy-eating-e1765791293956-668x460.png",
  title: "How to Eat Well During the Holidays Without Starting Over in January",
  excerpt: "Indulgence in December, guilt in early January, strict reset after. The cycle is optional.",
  body: ["The holiday-then-penance cycle is exhausting and unnecessary. A middle path keeps both the celebrations and your baseline intact.", {
    h: "Do not arrive hungry"
  }, "Skipping meals before an event guarantees overeating at it. A protein-rich breakfast changes the whole evening.", {
    h: "Choose deliberately"
  }, "Have the things you actually love and skip the ones you are eating out of proximity. Most of a buffet is not worth it.", {
    h: "Return, do not restart"
  }, "One indulgent meal changes nothing. Going back to normal at the next meal is the entire skill."]
}, {
  slug: "food-as-biohacking",
  category: "Wellness",
  date: "08 Dec 2025",
  image: "https://healthykitchen.delivery/wp-content/uploads/2025/12/Biohacking-Longevity-e1765188159373-668x460.png",
  title: "Food as Biohacking: Everyday Nutrition That Upgrades Energy and Performance",
  excerpt: "Biohacking suggests wearables and infusions. The highest-leverage tool is on your plate three times a day.",
  body: ["Devices and supplements can be useful, but they are adjustments to a baseline. Food is the baseline.", {
    h: "Protein and fibre as defaults"
  }, "Hit both at every meal and most of the metrics people chase — energy, satiety, glucose stability — improve without further intervention.", {
    h: "Timing as a lever"
  }, "Bigger earlier meals, lighter earlier dinners. Aligning intake with daylight improves sleep and glucose control for most people.", {
    h: "Measure what you change"
  }, "If you track anything, track how you feel at 3pm and how you sleep. Both respond quickly to what you eat."]
}, {
  slug: "eating-for-longevity-habits",
  category: "Wellness",
  date: "03 Dec 2025",
  image: "https://healthykitchen.delivery/wp-content/uploads/2025/12/Longevity--e1764603029455-668x460.png",
  title: "Eating for Longevity: Habits That Help You Live Better, Longer",
  excerpt: "Longevity is no longer about adding years to life, but life to years.",
  body: ["The research consistently favours patterns over interventions. A handful of habits, repeated for decades, does the work.", {
    h: "Mostly plants, plenty of fibre"
  }, "Legumes, whole grains, vegetables, nuts and olive oil form the backbone of every long-lived dietary pattern studied.", {
    h: "Enough protein, and enough muscle"
  }, "Muscle mass predicts independence in later life. Protein at every meal plus regular resistance work is the pairing that protects it.", {
    h: "Consistency over perfection"
  }, "Nobody eats flawlessly. The direction of travel across years matters more than any single week."]
}, {
  slug: "food-and-hormones-cycles-mood-energy",
  category: "Nutrition",
  date: "24 Nov 2025",
  image: "https://healthykitchen.delivery/wp-content/uploads/2025/11/womens-health-668x460.png",
  title: "Food and Hormones: Meals That Support Better Cycles, Mood and Energy",
  excerpt: "Women's hormones shape mood, appetite, metabolism, sleep and stress resilience — and respond to food.",
  body: ["Hormonal symptoms are often treated as something to endure. Diet will not fix everything, but it changes the baseline more than most people realise.", {
    h: "Blood sugar first"
  }, "Glucose swings amplify mood and energy symptoms. Balanced meals at regular times are the highest-yield starting point.", {
    h: "Fibre for clearance"
  }, "Hormone metabolites leave via the gut. Adequate fibre and regular digestion keep that pathway working.", {
    h: "Micronutrients that matter"
  }, "Iron, magnesium, B vitamins and omega-3s all play defined roles. Food sources beat guessing with capsules."]
}, {
  slug: "blood-sugar-balance-made-simple",
  category: "Nutrition",
  date: "17 Nov 2025",
  image: "https://healthykitchen.delivery/wp-content/uploads/2025/11/blood-sugar-post-e1763388782180-668x460.png",
  title: "Blood Sugar Balance Made Simple",
  excerpt: "Rushed meals, busy schedules and constant stress — few people realise how much of their mood tracks glucose.",
  body: ["You do not need a monitor to benefit from steadier blood sugar. A few structural habits deliver most of the effect.", {
    h: "Never eat carbohydrate alone"
  }, "Add protein, fat or fibre to anything starchy or sweet. The same food, a much gentler response.", {
    h: "Front-load the day"
  }, "A savoury, protein-rich breakfast sets the tone for hours. Sweet breakfasts tend to produce a hungry, unfocused morning.", {
    h: "Move a little, often"
  }, "Short walks after meals help clear glucose. Combined with balanced plates, most people notice the difference within days."]
}, {
  slug: "energy-on-a-plate-5-meals-that-fight-the-august-slump",
  category: "Nutrition",
  date: "17 Aug 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/08/fatigue-dubai-e1786964133694.png",
  title: "Energy on a Plate: 5 Meals That Fight the August Slump",
  excerpt: "Do you feel flat by mid-afternoon this August? You are not alone — the right meals can help you climb back out.",
  body: ["Do you feel flat by mid-afternoon this August? You are not alone. The post-holiday slump leaves many people quietly drained. Fortunately, the right energy-boosting meals in Dubai can help you climb back out.", "Food steadies your energy far more than most people realise. The right meals keep you level all day, without the caffeine rollercoaster. At Healthy Kitchen, we design our energy-boosting meals in Dubai to do exactly that.", {
    h: "Why energy dips after a holiday"
  }, "Holidays shift your routine and your meals. Extra sugar and irregular timing throw your energy off balance. As a result, tiredness lingers once normal life resumes.", "Balanced meals reset that rhythm. They release energy slowly and steadily. Therefore, they help smooth out the peaks and crashes that leave you reaching for a snack.", {
    h: "1. A protein-rich breakfast"
  }, "Energy starts with the very first meal. Protein at breakfast keeps you full and focused for longer. So we build our morning dishes around eggs, legumes and wholegrains.", {
    h: "2. A leafy, mineral-rich lunch"
  }, "Leafy greens supply magnesium and iron, and both support steady energy. Consequently, our lunches feature plenty of colourful, mineral-rich vegetables alongside good protein.", {
    h: "3. A balanced grain bowl"
  }, "Whole grains give slow-release fuel that lasts. Paired with protein and vegetables, they keep you level through the afternoon. This simple balance beats the classic 3pm dip.", {
    h: "4. An iron-friendly main"
  }, "Low iron often drains energy quietly. Our iron-friendly mains combine lean protein with vitamin-C-rich vegetables. Together, they help your body absorb more of the iron on the plate.", {
    h: "5. A light, restful dinner"
  }, "Heavy dinners disturb sleep, which then drains tomorrow's energy. Lighter evening meals digest more easily. As a result, you rest better and wake sharper.", {
    h: "Hydration: the overlooked energiser"
  }, "Tiredness is sometimes just thirst in disguise. Even mild dehydration can leave you foggy and flat. In a Dubai summer, that risk rises for everyone.", "So water belongs in any list of energy-boosting meals. Water-rich foods help, too, from cucumber to melon. Because hydration is so easy to forget, we build it into the way we plan your day.", {
    h: "Timing matters as much as content"
  }, "What you eat drives energy, but so does when you eat it. Long gaps between meals invite the mid-afternoon crash. Regular, balanced meals keep your energy on an even keel.", "This is where planning quietly pays off. With meals ready at the right times, you stop running on empty. As a result, steady energy becomes the norm rather than the exception.", {
    h: "Caffeine, sugar and the crash cycle"
  }, "It is tempting to fight tiredness with coffee and a snack. The lift is real, but it is brief. Soon after, the crash pulls you lower than before.", "Balanced meals break that cycle gently. They provide steady fuel without the spike. Therefore, you rely less on quick fixes and feel more like yourself throughout the day.", {
    h: "Snacks that support, not sabotage"
  }, "The right snack keeps energy steady between meals. Pair a little protein with fruit or vegetables. So a handful of nuts with an apple beats a sugary bar every time.", {
    h: "Let us fuel your comeback"
  }, "Beating the slump should be simple, not another chore. With the right meals ready to go, it becomes automatic. Explore our energy-boosting meals and fight the August slump, delivered fresh to your door."]
}, {
  slug: "the-post-travel-reset-menu-7-days-of-gut-friendly-eating",
  category: "Gut Health",
  date: "10 Aug 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/08/post-travel-gut-reset-dubai-e1786193012715.png",
  title: "The Post-Travel Reset Menu: 7 Days of Gut-Friendly Eating",
  excerpt: "You are rested, yet your gut may feel oddly off. A week of gentle, gut-friendly meals is the answer.",
  body: ["Coming home from holiday feels good and strange at once. You are rested, yet your gut may feel oddly off. Rich food and travel often leave you heavy and slow. A week of gut-friendly reset meals is the perfect, gentle answer.", "You do not need an extreme cleanse to feel like yourself again. Instead, a steady run of balanced, gut-friendly reset meals does the work quietly, one day at a time.", {
    h: "Why gentle beats harsh"
  }, "Crash cleanses promise fast results. In truth, they often leave you drained and irritable. Skipping meals can also stress the gut further, which is the opposite of what you want.", "A reset takes a kinder path. It feeds your body with whole, balanced food. As a result, digestion recovers on its own terms, and the changes are far easier to sustain.", {
    h: "Days one and two: lighten the load"
  }, "Start gently to ease your system back. Focus on vegetables, soups and plenty of water. These foods are light and simple to digest after a heavy few weeks.", "Our chilled soups and fresh salads suit these days well. They settle the stomach without weighing you down. So you feel lighter almost at once.", {
    h: "Days three to five: feed your microbes"
  }, "Now bring in more fibre and variety. Include legumes, whole grains and colourful vegetables. Because fibre feeds your good bacteria, this stage rebuilds balance where it matters.", "Add fermented foods where you can, too. Yoghurt and other cultured options support the gut nicely. Our balanced mains make this step effortless.", {
    h: "Days six and seven: steady the ship"
  }, "End the week with simple, repeatable meals. Pair protein with vegetables at each sitting. Meanwhile, keep hydration high and your sleep regular.", "By day seven, most people feel noticeably brighter. Digestion settles and energy returns. A happier gut tends to lift the whole body with it.", {
    h: "What makes a meal gut-friendly"
  }, "Not every healthy-looking meal is easy on the gut. The best gut-friendly reset meals are rich in fibre and gentle on digestion. They lean on vegetables, whole grains, legumes and lean protein.", "Just as importantly, they avoid the heavy, ultra-rich dishes that slow you down. We balance every plate with this in mind. So each meal supports recovery rather than working against it.", {
    h: "Hydration is part of the plan"
  }, "Food is only half of a good reset. Hydration matters just as much, especially after flights and a Dubai summer. Water supports digestion and helps everything move as it should.", {
    h: "Keep it going beyond seven days"
  }, "A seven-day reset is a strong start, not a finish line. The habits you build can quietly continue afterward. Fibre-rich meals and steady routines keep the benefits alive.", "That is where a regular delivery helps most. With good food arriving anyway, healthy choices become the default. As a result, your gut stays supported long after the reset week ends.", {
    h: "Let us plan your reset week"
  }, "A full week of healthy meals can sound like effort. With Healthy Kitchen, it is genuinely effortless, because we plan, cook and deliver each dish. Ready to feel like yourself again?"]
}, {
  slug: "foods-that-calm-eating-for-a-regulated-nervous-system",
  category: "Nutrition",
  date: "03 Aug 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/08/Nervous-System-Dubai-e1785687102534.png",
  title: "Foods That Calm: Eating for a Regulated Nervous System",
  excerpt: "When you feel wound-up, food can quietly help you settle — and the most effective foods are everyday ones.",
  body: ["When you feel wound-up, food can quietly help you settle. In fact, some of the most effective foods that calm the nervous system are simple, everyday ingredients. What you eat shapes how calm or alert you feel, meal after meal.", "At Healthy Kitchen, we build dishes with this in mind. Our calming meals focus on the nutrients that support rest and recovery. As a result, they help your body ease out of a busy day rather than stay stuck in it.", {
    h: "The gut-brain connection"
  }, "Your gut and brain talk constantly through a two-way link. A large share of your calm-signalling chemistry actually begins in the gut. Therefore, what you feed your gut affects how settled you feel.", "A balanced, fibre-rich diet supports this connection. So does a steady supply of whole foods rather than ultra-processed ones. Because of that, our menu leans on vegetables, legumes and gentle whole grains.", {
    h: "Magnesium: the calm mineral"
  }, "Magnesium helps muscles and nerves relax. When levels run low, you may feel tense, restless or slow to sleep. Consequently, it is one of the most important minerals among foods that calm the nervous system.", "Leafy greens, seeds, nuts and legumes are naturally rich in magnesium. We include these across our menu on purpose. So every serving quietly supports a steadier, calmer state.", {
    h: "Foods that steady your energy"
  }, "Sharp blood-sugar swings can leave you jittery and on edge. Balanced meals prevent those spikes and crashes. As a result, your mood and energy stay far more even through the afternoon.", "We pair protein, fibre and healthy fats in each dish for exactly this reason. This combination releases energy slowly. So you feel steady rather than frazzled, without relying on caffeine or sugar to cope.", {
    h: "Tryptophan and your evening wind-down"
  }, "Some calming foods work best later in the day. Foods rich in tryptophan, an amino acid, help your body wind down toward sleep. Turkey, eggs, seeds and oats all supply it.", "Pairing these with a little whole-grain carbohydrate can help, too. The combination supports the body's natural evening rhythm. As a result, a well-planned dinner may leave you calmer and readier for rest.", {
    h: "What to ease off when you feel wired"
  }, "Some foods quietly work against a calm system. Too much caffeine, sugar and alcohol can all keep you on edge. So easing off them often helps as much as adding calming foods.", "You do not need to cut anything out completely. A gentler balance is usually enough. Because small changes add up, even modest swaps can leave you noticeably steadier.", {
    h: "Let your meals do the work"
  }, "Eating for calm should be simple and genuinely enjoyable. With the right meals ready to go, it becomes effortless. Let us handle the shopping, cooking and portioning, and bring a little more calm to your table."]
}, {
  slug: "the-7-day-post-travel-reset-menu-functional-meals",
  category: "Nutrition",
  date: "27 Jul 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/07/Functional-Nutrition-Plan-Dubai-e1784978739194.png",
  title: "The 7-Day Post-Travel Reset Menu: Functional Meals to Rebalance After Holiday Eating",
  excerpt: "You feel relaxed, yet your body may feel off. A gentle week of nourishing meals is the perfect answer.",
  body: ["Coming home from holiday is bittersweet. You feel relaxed, yet your body may feel off. Rich food and travel often leave you heavy and tired.", "A gentle reset is the perfect answer. You do not need an extreme cleanse. Instead, a week of simple, nourishing meals does the work.", {
    h: "Why a reset works better than a detox"
  }, "Harsh detoxes promise quick results. In truth, they often leave you drained. Skipping meals can stress the body further.", "A reset takes a kinder path. It feeds your body with whole, balanced food. As a result, your energy and digestion recover naturally.", "This approach is also easier to follow. Because you are not starving, you actually stick with it.", {
    h: "Days one and two: lighten the load"
  }, "Start gently to ease your system back. Focus on vegetables, soups and plenty of water. These foods are light and easy to digest.", "Our chilled soups and fresh salads fit these days well. They settle the stomach without weighing you down. So you feel lighter almost at once.", {
    h: "Days three to five: rebuild steady energy"
  }, "Now add steady fuel to the plan. Include good protein with each meal. Pair it with vegetables and whole grains.", "This balance keeps your energy level all day. It also supports your muscles and focus. Our balanced mains make this stage simple.", {
    h: "Days six and seven: support your gut"
  }, "End the week by caring for your gut. Choose fibre-rich foods and fermented options. Both help your good bacteria recover.", "A happy gut lifts your whole body. You sleep better and feel brighter.", {
    h: "Let us plan your reset week"
  }, "A full week of healthy meals sounds like effort. With Healthy Kitchen, it is effortless. We plan, cook and deliver each dish, so you can rebalance one fresh meal at a time."]
}, {
  slug: "mineral-rich-summer-eating",
  category: "Wellness",
  date: "20 Jul 2026",
  image: "https://healthykitchen.delivery/wp-content/uploads/2026/07/Hydration-Dubai-e1784477503939.png",
  title: "Mineral-Rich Summer Eating: Foods That Put Back What the Heat Takes Out",
  excerpt: "Sweat carries more than water. Here are the foods that replace the minerals the heat takes out.",
  body: ["Summer heat makes you sweat all day. That sweat carries more than water. It also takes away key minerals your body needs.", "Food is the best way to replace them. The right ingredients restore what the heat removes. At Healthy Kitchen, we build our summer menu around this idea.", {
    h: "The minerals you lose in the heat"
  }, "Sweat is rich in minerals. You lose magnesium, potassium and sodium with every drop. These minerals keep your muscles and nerves working.", "When levels fall, you feel it. Cramps, tiredness and poor sleep often appear. Therefore, summer is the season to focus on minerals.", {
    h: "Magnesium for calm and sleep"
  }, "Magnesium helps your body relax. It supports steady sleep and eases muscle tension. So a good supply makes summer nights easier.", "Leafy greens are packed with magnesium. Nuts, seeds and beans add more. We include these foods across our menu for a reason.", {
    h: "Potassium for fluid balance"
  }, "Potassium works closely with sodium. Together, they manage your fluid balance. As a result, they keep you properly hydrated.", "Many everyday foods are rich in potassium. Bananas, avocados and sweet potatoes all help. We weave them into our summer dishes.", {
    h: "Smart sodium, not too much"
  }, "Sodium has a bad reputation, yet you still need some. It helps your body hold on to water. The key is the right amount from good sources.", "We season our meals with care. A balanced pinch of quality salt does the job. This keeps your hydration steady without going overboard.", {
    h: "Meals that restore and refresh"
  }, "Our summer dishes combine all these minerals. Each meal is fresh, light and balanced. So you refuel without feeling heavy.", "Eating well in the heat should be easy. Let Healthy Kitchen handle the balance for you."]
}, {
  slug: "5-signs-your-gut-needs-a-reset",
  category: "Gut Health",
  date: "12 Jul 2026",
  title: "5 Signs Your Gut Needs a Reset",
  excerpt: "Bloating, brain fog, and energy crashes are often your gut asking for help. Here's what to watch for — and where to start.",
  body: ["Your gut does far more than digest lunch. It shapes how you absorb nutrients, how steady your energy feels through the day, and — increasingly, research suggests — how clear your head is. When it's out of balance, the signals are usually there long before anything feels seriously wrong.", "The most common ones: bloating that shows up after ordinary meals, energy that dips hard mid-afternoon, skin that flares for no obvious reason, sugar cravings that feel bigger than hunger, and digestion that swings between sluggish and urgent. None of these are dramatic on their own — which is exactly why they're easy to ignore.", "The fix is rarely complicated. Start by simplifying what you eat for a week or two: whole foods, less processed sugar, and something fermented — yogurt, kimchi, sauerkraut — most days. Drink water before you reach for a snack. Give meals time to digest before the next one.", "If you want the reset done for you, that's exactly what our Gut Healing Protocol is built around — nutrient-dense, easy-to-digest meals designed to calm inflammation and rebuild a steadier baseline, one delivery at a time."]
}, {
  slug: "why-we-cook-without-sugar-dairy-gluten",
  category: "Nutrition",
  date: "05 Jul 2026",
  title: "Why We Cook Without Sugar, Dairy, or Gluten",
  excerpt: "It's not a trend — every dish we make starts from the same three rules. Here's the thinking behind them.",
  body: ["Every plan on our menu is built dairy-free, gluten-free, and sugar-free from the first ingredient. Not because it's fashionable, but because it's the version of clean eating that works for the widest range of people without asking anyone to compromise on taste.", "Sugar is the easiest one to justify: added sugar drives energy spikes and crashes, and it hides in more \"healthy\" products than most people realize. Cutting it at the source means we control exactly how satisfying a dish is — with fruit, spice, and technique instead.", "Dairy and gluten are quieter culprits. Plenty of people carry a mild sensitivity to one or both without ever being formally diagnosed — a bit of bloating, a bit of fatigue, written off as normal. Removing them by default means our food works for you whether or not you've ever tested for it.", "The part people are usually surprised by: none of this tastes like a restriction. Good spice work, quality fat, and fresh produce do more for flavor than sugar or dairy ever did — you just have to cook it that way from day one."]
}, {
  slug: "eating-out-in-dubai-a-nutritionists-guide",
  category: "Lifestyle",
  date: "28 Jun 2026",
  title: "A Nutritionist's Guide to Eating Out in Dubai",
  excerpt: "Dining out doesn't have to derail your plan. Simple swaps and questions that keep any menu on your side.",
  body: ["Dubai makes it easy to eat well and easy to eat badly — often at the same table. The difference usually comes down to a few small habits, not willpower.", "Start with a glass of water before the menu arrives; it slows down ordering and takes the edge off false hunger. Scan for a protein-and-vegetable anchor first, then build around it, rather than starting from the bread basket.", "Sauces and dressings are where most extra sugar and oil hide — ask for them on the side and you keep control without changing your order. The same goes for rice and bread: not off-limits, just worth choosing on purpose rather than by default.", "Most of all, treat eating out as the enjoyable part of the week it's meant to be. One meal doesn't undo a good plan — consistency the rest of the week is what actually moves the needle."]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/intolerance-data.js
try { (() => {
/* Healthy Kitchen — intolerance test ingredient catalogue (283 items, from the live site) */
window.HK_INTOLERANCE_CATS = [{
  key: "milk-eggs",
  label: "Milk & Eggs",
  icon: "milk",
  items: ["Egg yolk", "Egg white", "Buttermilk", "Cow's milk", "Camembert", "Gouda", "Emmental", "Cottage cheese", "Mozzarella", "Parmesan", "Buffalo milk", "Camel milk", "Goat milk", "Goat cheese", "Quail egg", "Sheep cheese", "Sheep milk", "Cow's milk Bos d 4 (Alpha-Lactalbumin)", "Cow's milk Bos d 8 (Casein)", "Cow's milk Bos d 5 (Beta-Lactoglobulin)"]
}, {
  key: "meat",
  label: "Meat",
  icon: "beef",
  items: ["Duck", "Beef", "Veal", "Venison", "Goat", "Stag", "Horse", "Chicken", "Turkey", "Rabbit", "Lamb", "Ostrich", "Pork", "Boar"]
}, {
  key: "fish",
  label: "Fish & Seafood",
  icon: "fish",
  items: ["Caviar", "Eel", "Noble crayfish", "Cockle", "Crab", "Atlantic herring", "Carp", "European anchovy", "Northern pike", "Atlantic cod", "Abalone", "Lobster", "Shrimp mix", "Squid", "Monkfish", "Haddock", "Hake", "Common mussel", "Octopus", "Trout", "Oyster", "Northern prawn", "Scallop", "Razor shell", "European plaice", "Thornback", "Ray", "Venus clam", "Salmon", "European pilchard", "Turbot", "Mackerel", "Atlantic redfish", "Sepia", "Sole", "Gilt-head bream", "Tuna", "Swordfish"]
}, {
  key: "cereals",
  label: "Cereals & Seeds",
  icon: "wheat",
  items: ["Gluten", "Wheat", "Rye", "Polish wheat", "Rapeseed", "Wheat bran", "Spelt", "Einkorn", "Emmer", "Sunflower", "Barley", "Linseed", "Malt (barley)", "Amaranth", "Oat", "Hempseed", "Quinoa", "Chickpea", "Pumpkin seed", "Buckwheat", "Lupine seed", "Rice", "Millet", "Poppyseed", "Pine nut", "Sesame", "Wheatgrass", "Durum", "Corn", "Wheat gliadin"]
}, {
  key: "nuts",
  label: "Nuts",
  icon: "nut",
  items: ["Pecan nut", "Hazelnut", "Cashew", "Brazil nut", "Sweet chestnut", "Coconut milk", "Coconut", "Kola nut", "Tigernut", "Macadamia", "Pistachio", "Almond", "Walnut"]
}, {
  key: "legumes",
  label: "Legumes",
  icon: "bean",
  items: ["Peanut", "Soy", "Lentil", "White bean", "Green bean", "Pea", "Sugar pea", "Tamarind", "Mung bean"]
}, {
  key: "fruits",
  label: "Fruits",
  icon: "apple",
  items: ["Strawberry", "Cherry", "Papaya", "Pineapple", "Lime", "Lemon", "Watermelon", "Kiwi", "Grapefruit", "Tangerine", "Orange", "Melon", "Fig", "Date", "Physalis", "Apricot", "Plum", "Peach", "Nectarine", "Pomegranate", "Pear", "Gooseberry", "Red currant", "Blackberry", "Lychee", "Apple", "Mango", "Mulberry", "Banana", "Passion fruit", "Raspberry", "Elderberry", "Blueberry", "Cranberry", "Grape", "Raisin"]
}, {
  key: "vegetables",
  label: "Vegetables",
  icon: "carrot",
  items: ["Shallot", "Onion", "Leek", "Chives", "Wild garlic", "Celery bulb", "Celery stalk", "Horseradish", "White asparagus", "Bamboo sprouts", "Chard", "Red beet", "Cabbage", "Cauliflower", "White cabbage", "Brussels sprouts", "Kohlrabi", "Broccoli", "Romanesco", "Red cabbage", "Green cabbage", "Savoy", "Turnip", "Pok-choi", "Chinese cabbage", "Caper", "Endive", "Radicchio", "Chicorée", "Pumpkin Butternut", "Pumpkin Hokkaido", "Kiwano", "Zucchini", "Cucumber", "Artichoke", "Carrot", "Arugula", "Fennel (bulb)", "Sweet potato", "Watercress", "Olive", "Parsnip", "Avocado", "Radish", "Garlic", "Eggplant", "Potato", "Tomato", "Spinach", "Nettle leaves", "Lamb's lettuce"]
}, {
  key: "spices",
  label: "Spices",
  icon: "flame",
  items: ["Dill", "Tarragon", "Nutmeg", "Mint", "Paprika", "Cayenne pepper", "Chili (red)", "Caraway", "Cinnamon", "Curry", "Coriander", "Cumin", "Turmeric", "Lemongrass", "Cardamom", "Juniper berry", "Bay leaf", "Basil", "Marjoram", "Mustard", "Oregano", "Parsley", "Anise", "Pepper (black/white/green/red/yellow)", "Rosemary", "Sage", "Clove", "Thyme", "Fenugreek", "Vanilla", "Ginger"]
}, {
  key: "mushrooms",
  label: "Mushrooms",
  icon: "cloud-drizzle",
  items: ["White mushroom", "Boletus", "Chanterelle", "Enoki", "French horn mushroom", "Oyster mushroom"]
}, {
  key: "novel",
  label: "Novel Food",
  icon: "sparkles",
  items: ["House cricket", "Baobab", "Aloe", "Greater burdock root", "Aronia", "Safflower oil", "Chlorella", "Ginkgo", "Maca root", "Migratory locust", "Tapioca", "Ginseng", "Guarana", "Almond milk", "Nori", "Chia seed", "Yacón root", "Spirulina", "Dandelion root", "Mealworm", "Wakame"]
}, {
  key: "coffee-tea",
  label: "Coffee & Tea",
  icon: "coffee",
  items: ["Tea, black", "Tea, green", "Coffee", "Chamomile", "Peppermint", "Moringa", "Hibiscus", "Jasmine", "Cocoa"]
}, {
  key: "others",
  label: "Others",
  icon: "layers",
  items: ["Cane sugar", "Agar agar", "Honey", "Aspergillus niger", "Hops", "Baker's yeast", "Brewer's yeast", "Elderflower", "M-Transglutaminase (meat glue)"]
}, {
  key: "ccd",
  label: "CCD",
  icon: "test-tube",
  items: ["Human Lactoferrin"]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/intolerance-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Cart = __ds_scope.Cart;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

})();
