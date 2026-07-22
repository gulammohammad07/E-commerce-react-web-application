import { Link } from "react-router-dom";
import "./HeroCategories.css";
import homeCategories from "../../data/homeCategories";

const HeroCategories = () => {
  return (
    <section className="hero-categories">
      {homeCategories.map((category) => (
        <Link
          key={category.id}
          to={`/products?category=${category.slug}`}
          className="hero-card"
        >
          <img src={category.image} alt={category.title} />

          <div className="hero-overlay">
            <h2>{category.title}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default HeroCategories;
