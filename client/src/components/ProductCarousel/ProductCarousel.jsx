import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./ProductCarousel.css";

import ProductCard from "../ProductCard/ProductCard";
import { getAllProducts } from "../Services/api";

function ProductCarousel() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {

                const response = await getAllProducts();

                setProducts(response.data.products);

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();

    }, []);

    return (
        <div className="product-section">

            <h2>Trending Products</h2>

            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                 modules={[Navigation]}
               navigation={true}

            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default ProductCarousel;