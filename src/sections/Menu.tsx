import { menuCategories } from '../data/config'
import './Sections.css'

export default function Menu() {
  return (
    <section id="menu" className="section menu-section" aria-labelledby="menu-title">
      <div className="section-inner">
        <h2 id="menu-title" className="section-title">Menú</h2>
        <p className="section-lead">
          Cocina latina/caribeña preparada al momento. Los precios son de ejemplo y pueden cambiar según la temporada.
        </p>
        <div className="menu-grid">
          {menuCategories.map((category) => (
            <article key={category.id} className="menu-category">
              <h3 className="menu-category-title">{category.title}</h3>
              <ul className="menu-items">
                {category.items.map((item) => (
                  <li key={item.id} className="menu-item">
                    <div className="menu-item-header">
                      <span className="menu-item-name">{item.name}</span>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
