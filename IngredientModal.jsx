// Ingredient-exclusion modal for the "Build your plan" calculator. Lets the
// user pick up to 3 ingredients to exclude from their meals — matches the
// "Customize up to 3 ingredients" promise shown across the site.

const { Button: IngModalButton } = window.HealthyKitchenDesignSystem_f4c763;

const INGREDIENT_LIST = [
  "Agar",
  "All eggs (includes all types and products)",
  "Almond milk",
  "Almonds (includes all products: nuts, milk, flour, butter)",
  "Aloe",
  "Amaranth",
  "Anise",
  "Apple",
  "Apricot (fresh and dried)",
  "Aronia",
  "Artichoke",
  "Arugula/Rocket leaves",
  "Asparagus (white asparagus included)",
  "Atlantic cod",
  "Atlantic herring",
  "Avocado",
  "Bamboo sprouts",
  "Banana",
  "Baobab",
  "Barley",
  "Basil",
  "Bay leaf",
  "Beef/Meat",
  "Blackberry",
  "Blueberry",
  "Brazil nut",
  "Broccoli",
  "Buckwheat",
  "Buffalo's milk",
  "Buttermilk",
  "Cabbage (includes red cabbage and Chinese cabbage)",
  "Capers",
  "Caraway",
  "Cardamom",
  "Carrot",
  "Cauliflower",
  "Cayenne pepper",
  "Celery",
  "Chamomile",
  "Chard",
  "Cherry",
  "Chia seeds",
  "Chicken",
  "Chickpea",
  "Chickpea flour",
  "Chicory (Chicorée)",
  "Chili (red and all types)",
  "Chinese cabbage",
  "Chives",
  "Chlorella",
  "Cinnamon",
  "Clove",
  "Cocoa powder",
  "Coconut (includes coconut milk/cream, coconut powder)",
  "Coffee",
  "Coriander",
  "Corn (includes all products: flour, polenta, tortilla)",
  "Cottage cheese",
  "Cranberry",
  "Cucumber",
  "Cumin",
  "Curry",
  "Dandelion root",
  "Date",
  "Dill",
  "Duck",
  "Eggplant",
  "Endive",
  "European anchovy",
  "Fennel (bulb)",
  "Fig",
  "Garlic",
  "Ginger",
  "Ginkgo",
  "Ginseng",
  "Goat",
  "Goat cheese",
  "Goat's milk",
  "Gouda cheese",
  "Grape",
  "Grapefruit",
  "Greater burdock root",
  "Green bean",
  "Guarana",
  "Hake",
  "Hazelnut",
  "Hibiscus",
  "Honey",
  "Jasmine",
  "Juniper berry",
  "Kiwi",
  "Lamb",
  "Leek",
  "Lemon",
  "Lemongrass",
  "Lentil",
  "Lime",
  "Linseed",
  "Lobster",
  "Lychee",
  "Maca powder",
  "Macadamia",
  "Mackerel",
  "Mango",
  "Maple syrup",
  "Marjoram",
  "Matcha powder",
  "Melon (all varieties)",
  "Millet",
  "Mint",
  "Monkfish",
  "Moringa",
  "Mozzarella",
  "Mung bean",
  "Mustard",
  "Nectarine",
  "Nori",
  "Nutmeg",
  "Oats (includes all products)",
  "Onion (raw)",
  "Orange",
  "Oregano",
  "Oyster",
  "Papaya",
  "Paprika",
  "Parmesan",
  "Parsley",
  "Passion fruit",
  "Pea (all types)",
  "Peach",
  "Peanut (includes butter)",
  "Pear",
  "Pecan nut",
  "Pepper (black/white/green/red/yellow)",
  "Peppermint",
  "Pineapple",
  "Pistachio nuts",
  "Plum (includes prune)",
  "Pok-Choi",
  "Pomegranate (includes molasses)",
  "Potato (includes sweet potato)",
  "Prawn",
  "Pumpkin",
  "Quinoa",
  "Raisin",
  "Raspberry",
  "Red beet",
  "Red currant",
  "Rice",
  "Romanesco",
  "Rosemary",
  "Rosewater",
  "Sage",
  "Salmon (includes fillet and smoked salmon)",
  "Sausage (includes bacon)",
  "Scallop",
  "Sesame seeds",
  "Shallot",
  "Sheep cheese",
  "Sheep's milk",
  "Shrimp (includes Mollusks like octopus, calamari, mussels, squid, and scallops)",
  "Sole",
  "Soy (includes all products)",
  "Spinach (baby spinach included)",
  "Spirulina",
  "Sriracha sauce",
  "Strawberry",
  "Sunflower seeds",
  "Sweet chestnut",
  "Swordfish",
  "Tamarind",
  "Tapioca flour",
  "Tarragon",
  "Tea (black, green)",
  "Thyme",
  "Tiger nut",
  "Tilapia",
  "Tomato",
  "Trout",
  "Tuna",
  "Turkey",
  "Turmeric",
  "Vanilla",
  "Walnut",
  "Watermelon",
  "Wheat (includes all products: flour, bran, germ)",
  "Whey protein",
  "White currant",
  "White sesame seed",
  "Wild boar",
  "Wild garlic",
  "Wine",
  "Yam",
  "Yogurt (cow, goat, sheep)",
  "Zucchini"
];

function IngredientModal({ selected, onToggle, onClose }) {
  const [query, setQuery] = React.useState("");
  const atLimit = selected.length >= 3;
  const filtered = INGREDIENT_LIST.filter((i) => i.toLowerCase().includes(query.trim().toLowerCase()));

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [selected, query]);

  const pillStyle = { display: "inline-flex", alignItems: "center", fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", background: "var(--green-100)", color: "var(--green-800)", borderRadius: "var(--radius-pill)", padding: "5px 11px" };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(30,32,26,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", width: "100%", maxWidth: "760px", maxHeight: "86vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="hk-ingmodal-pad-top" style={{ padding: "28px 28px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-wide)", fontWeight: 400, fontSize: "26px", color: "var(--text-strong)" }}>Customize Your Meal Plan</h2>
            <button onClick={onClose} aria-label="Close" style={{ background: "none", border: 0, cursor: "pointer", color: "var(--text-muted)", flexShrink: 0, padding: "4px" }}>
              <i data-lucide="x" style={{ width: 20, height: 20 }}></i>
            </button>
          </div>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "var(--text-muted)" }}>All our dishes exclude lactose, white sugar, and gluten by default, ensuring a healthier meal plan.</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span style={pillStyle}>Dairy-free</span>
            <span style={pillStyle}>Sugar-free</span>
            <span style={pillStyle}>Gluten-free</span>
          </div>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.5, color: "var(--text-body)" }}>You can further personalize your meal by removing up to 3 ingredients that you have an intolerance to or simply dislike.</p>

          {selected.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {selected.map((i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontFamily: "var(--font-body)", background: "var(--clay-100)", color: "var(--clay-600)", borderRadius: "var(--radius-pill)", padding: "5px 6px 5px 11px" }}>
                  {i}
                  <button onClick={() => onToggle(i)} aria-label={"Remove " + i} style={{ background: "none", border: 0, cursor: "pointer", color: "inherit", display: "flex", padding: "2px" }}>
                    <i data-lucide="x" style={{ width: 12, height: 12 }}></i>
                  </button>
                </span>
              ))}
            </div>
          )}

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ingredients…"
            style={{ width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-strong)", border: "1px solid var(--border-default)", borderRadius: "var(--radius-md)", padding: "12px 16px", outline: "none" }}
          />
        </div>

        <div className="hk-ingmodal-pad-body" style={{ borderTop: "1px solid var(--border-subtle)", marginTop: "16px", padding: "16px 28px 28px", overflowY: "auto", flex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "2px 20px" }}>
            {filtered.map((ing) => {
              const checked = selected.includes(ing);
              const disabled = !checked && atLimit;
              return (
                <label key={ing} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontFamily: "var(--font-body)", fontSize: "14px", color: disabled ? "var(--text-faint)" : "var(--text-body)", cursor: disabled ? "not-allowed" : "pointer" }}>
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={() => onToggle(ing)}
                    style={{ width: 16, height: 16, accentColor: "var(--green-700)", cursor: disabled ? "not-allowed" : "pointer" }}
                  />
                  {ing}
                </label>
              );
            })}
            {filtered.length === 0 && (
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-faint)" }}>No ingredients match "{query}".</span>
            )}
          </div>
        </div>

        <div className="hk-ingmodal-pad-foot" style={{ borderTop: "1px solid var(--border-subtle)", padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-faint)" }}>{selected.length} / 3 selected</span>
          <IngModalButton variant="primary" onClick={onClose}>Done</IngModalButton>
        </div>
      </div>
    </div>
  );
}

window.IngredientModal = IngredientModal;
