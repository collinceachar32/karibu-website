/* Variables and base */
:root {
  --bg: #faf7f2;
  --text: #333333;
  --primary: #a64b2a;
  --accent: #f4c27f;
  --card: #ffffff;
  --shadow: rgba(0,0,0,0.08);
}

[data-theme="dark"] {
  --bg: #161616;
  --text: #eaeaea;
  --card: #1f1f1f;
  --shadow: rgba(0,0,0,0.4);
}

/* Reset-ish */
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

/* Header and nav */
.site-header {
  position: sticky; top: 0; z-index: 10;
  background: var(--card);
  box-shadow: 0 2px 8px var(--shadow);
}
nav {
  display: flex; align-items: center; justify-content: space-between;
  max-width: 1100px; margin: 0 auto; padding: 0.75rem 1rem;
}
.logo { font-weight: 700; color: var(--primary); text-decoration: none; }
.nav-links { display: flex; list-style: none; gap: 1rem; margin: 0; padding: 0; }
.nav-links a { text-decoration: none; color: var(--text); }
.cart-link { background: var(--accent); padding: 0.25rem 0.6rem; border-radius: 999px; }

/* Hero */
.hero {
  max-width: 1100px; margin: 2rem auto; padding: 1rem;
}
.btn {
  display: inline-block; background: var(--primary); color: white;
  padding: 0.6rem 1rem; border-radius: 8px; text-decoration: none;
  transition: transform 150ms ease, box-shadow 150ms ease;
}
.btn:hover { transform: translateY(-2px); box-shadow: 0 6px 14px var(--shadow); }

/* Product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  max-width: 1100px; margin: 1rem auto; padding: 0 1rem;
}
.product-card {
  background: var(--card);
  border-radius: 12px; padding: 0.75rem;
  box-shadow: 0 4px 10px var(--shadow);
  display: flex; flex-direction: column; gap: 0.5rem;
}
.product-card img { width: 100%; height: 160px; object-fit: cover; border-radius: 10px; }
.price { color: var(--primary); font-weight: 600; }
.add-to-cart {
  background: var(--accent); border: none; padding: 0.5rem;
  border-radius: 8px; cursor: pointer;
  transition: background 150ms ease, transform 150ms ease;
}
.add-to-cart:hover { background: #f2b96a; transform: translateY(-1px); }

/* Page header */
.page-header {
  max-width: 1100px; margin: 1.5rem auto; padding: 0 1rem;
}

/* Forms */
.form-group { margin-bottom: 1rem; max-width: 700px; }
label { display: block; margin-bottom: 0.25rem; }
input, textarea {
  width: 100%; padding: 0.6rem; border-radius: 8px; border: 1px solid #ddd;
  background: var(--card); color: var(--text);
}
.error { color: #b00020; min-height: 1rem; display: block; }
.form-status { margin-top: 0.75rem; font-weight: 600; }

/* Footer */
.site-footer { text-align: center; padding: 2rem 1rem; color: #777; }