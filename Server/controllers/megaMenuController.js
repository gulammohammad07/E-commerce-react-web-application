import megaMenu from "../data/megaMenu.js";

export const getMegaMenu = (req, res) => {
  console.log("Mega Menu API Called");

  res.status(200).json({
    success: true,
    data: megaMenu,
  });
};