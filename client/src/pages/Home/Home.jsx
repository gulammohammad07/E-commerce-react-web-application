import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

function Home() {
    return (
        <>
            <HeroCarousel />
            <CategoryCards />
            <ProductCarousel />
        </>
    );
}

export default Home;