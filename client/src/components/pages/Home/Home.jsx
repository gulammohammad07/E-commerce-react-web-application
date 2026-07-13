import Navbar from "../../../components/Navbar/Navbar";
import HeroCarousel from "../../../components/HeroCarousel/HeroCarousel";
import CategoryCards from "../../../components/CategoryCards/CategoryCards";
import ProductCarousel from "../../../components/ProductCarousel/ProductCarousel";
import Footer from "../../Footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            <CategoryCards />
            <ProductCarousel />
            <Footer/>
        </>
    );
}

export default Home;