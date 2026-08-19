const { Tag: BlogTag } = window.HealthyKitchenDesignSystem_f4c763;

// Shared card used by the blog list and by "related articles" on the article page.
function BlogCard({ post, onSelect }) {
  return (
    <button
      onClick={() => onSelect && onSelect(post)}
      className="hk-card"
      style={{
        display: "flex", flexDirection: "column", textAlign: "left", cursor: "pointer",
        background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)",
        padding: 0, font: "inherit", color: "inherit",
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
    >
      <div style={{ position: "relative", width: "100%", height: "230px", overflow: "hidden", background: "var(--ivory-200)", display: "flex" }}>
        {post.image
          ? <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          : <image-slot id={"hk-blog-" + post.slug} style={{ width: "100%", height: "100%", display: "block" }} fit="contain" placeholder={"Photo — " + post.title}></image-slot>}
        <div style={{ position: "absolute", top: "12px", left: "12px" }}>
          <BlogTag tone="clay" variant="solid" size="sm">{post.category}</BlogTag>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, fontSize: "20px", lineHeight: 1.2, color: "var(--text-strong)" }}>
          {post.title}
        </h3>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "14.5px", lineHeight: 1.55, color: "var(--text-muted)" }}>
          {post.excerpt}
        </p>
        {post.date && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-faint)" }}>{post.date}</span>
        )}
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "4px", fontFamily: "var(--font-body)", fontSize: "12.5px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--green-700)" }}>
          Read article <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i>
        </span>
      </div>
    </button>
  );
}

window.BlogCard = BlogCard;
