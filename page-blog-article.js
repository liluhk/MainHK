const { Tag: ArticleTag } = window.HealthyKitchenDesignSystem_f4c763;

function BlogArticle({ post, onBack, onSelect }) {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [post]);

  if (!post) return null;

  const related = (window.HK_BLOG_POSTS || []).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <section style={{ background: "var(--bg-page)" }}>
      <div className="hk-container" style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "40px 32px 24px" }}>
        <button onClick={onBack} style={{ background: "none", border: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", marginBottom: "28px" }}>
          <i data-lucide="arrow-left" style={{ width: 16, height: 16 }}></i> All articles
        </button>

        <div style={{ marginBottom: "16px" }}>
          <ArticleTag tone="clay" variant="soft">{post.category}</ArticleTag>
        </div>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.05, fontSize: "clamp(30px, 5vw, 46px)", color: "var(--text-strong)" }}>
          {post.title}
        </h1>
        {post.date && (
          <p style={{ margin: "16px 0 0", fontFamily: "var(--font-body)", fontSize: "13px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>{post.date}</p>
        )}
      </div>

      <div className="hk-container" style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "0 32px" }}>
        {post.image
          ? <img src={post.image} alt={post.title} style={{ width: "100%", height: "460px", objectFit: "cover", display: "block", marginTop: "8px", borderRadius: "18px" }} />
          : <image-slot id={"hk-blog-" + post.slug} style={{ width: "100%", height: "460px", display: "block", marginTop: "8px", background: "var(--ivory-100)" }} shape="rounded" radius="18" fit="contain" placeholder={"Photo — " + post.title}></image-slot>}

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "40px", paddingBottom: "72px" }}>
          {post.body.map((para, i) => (
            typeof para === "string"
              ? <p key={i} style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)" }}>{para}</p>
              : <h2 key={i} style={{ margin: "12px 0 0", fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "var(--tracking-wide)", fontSize: "26px", lineHeight: 1.2, color: "var(--text-strong)" }}>{para.h}</h2>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-subtle)" }}>
          <div className="hk-container" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "72px 32px" }}>
            <h2 style={{ margin: "0 0 32px", fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, fontSize: "26px", color: "var(--text-strong)" }}>
              Related articles
            </h2>
            <div className="hk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} onSelect={onSelect} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

window.BlogArticle = BlogArticle;
