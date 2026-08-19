const PER_PAGE = 9;

function Pagination({ page, totalPages, onPage }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const arrowBtn = {
    width: "40px", height: "40px", borderRadius: "var(--radius-circle)", border: "1px solid var(--border-default)",
    background: "var(--white)", color: "var(--text-body)", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center", flex: "none",
    transition: "all var(--dur-base) var(--ease-out)",
  };
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "48px" }}>
      <button
        onClick={() => onPage(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        style={{ ...arrowBtn, opacity: page === 1 ? 0.35 : 1, cursor: page === 1 ? "default" : "pointer" }}
      >
        <i data-lucide="arrow-left" style={{ width: 16, height: 16 }}></i>
      </button>
      {pages.map((p) => {
        const active = p === page;
        return (
          <button
            key={p}
            onClick={() => onPage(p)}
            aria-current={active ? "page" : undefined}
            style={{
              width: "40px", height: "40px", borderRadius: "var(--radius-circle)", flex: "none",
              border: "1px solid " + (active ? "var(--green-700)" : "var(--border-default)"),
              background: active ? "var(--green-700)" : "var(--white)",
              color: active ? "var(--ivory-50)" : "var(--text-body)",
              fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, cursor: "pointer",
              transition: "all var(--dur-base) var(--ease-out)",
            }}
          >
            {p}
          </button>
        );
      })}
      <button
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
        style={{ ...arrowBtn, opacity: page === totalPages ? 0.35 : 1, cursor: page === totalPages ? "default" : "pointer" }}
      >
        <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
      </button>
    </div>
  );
}

function BlogList({ onSelect }) {
  const posts = window.HK_BLOG_POSTS || [];
  const [page, setPage] = React.useState(1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  const goPage = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const pagePosts = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 24px" }}>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-faint)" }}>
          Blog
        </span>
        <h1 style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.02, fontSize: "clamp(38px, 6vw, 56px)", color: "var(--text-strong)" }}>
          Notes on clean eating
        </h1>
        <p style={{ margin: "18px 0 0", fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.6, color: "var(--text-muted)", maxWidth: "56ch" }}>
          Nutrition, recovery, and the thinking behind our kitchen — from our team of nutritionists and chefs.
        </p>
      </div>

      <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "40px 32px 96px" }}>
        <div className="hk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
          {pagePosts.map((post) => (
            <BlogCard key={post.slug} post={post} onSelect={onSelect} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onPage={goPage} />
      </div>
    </section>
  );
}

window.BlogList = BlogList;
