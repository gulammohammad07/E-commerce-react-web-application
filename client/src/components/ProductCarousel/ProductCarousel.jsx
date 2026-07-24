import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductCarousel.css";

import ProductListCard from "../ProductCards/productListCard";
import { getAllProducts } from "../../Services/api";

function ProductCarousel() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {

                const response = await getAllProducts();

                // MockAPI returns an array, while the local API returns
                // { success, products }. Support either response shape.
                setProducts(response.data.products ?? response.data ?? []);

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
                // Swiper needs enough slides to duplicate a complete group.
            //     loop={products.length >= 10}
            //      modules={[Navigation]}
            //    navigation={true}

            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductListCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default ProductCarousel;
