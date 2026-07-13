import bannerData from "../data/heroBanner.js";


export const getAllBanners = (req, res) => {
    res.status(200).json({
        success: true,
        data: bannerData
    });
};