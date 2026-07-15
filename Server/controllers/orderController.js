const demoOrders = [
  {
    id: "LTZ-1028",
    date: "2026-07-12",
    status: "Processing",
    total: 2499,
    items: [
      { name: "Cotton Summer T-Shirt", quantity: 2, price: 799 },
      { name: "Denim Shorts", quantity: 1, price: 901 },
    ],
    shippingAddress: "Saved checkout address",
  },
  {
    id: "LTZ-1017",
    date: "2026-06-30",
    status: "Delivered",
    total: 1799,
    items: [
      { name: "Floral Party Dress", quantity: 1, price: 1799 },
    ],
    shippingAddress: "Saved checkout address",
  },
];

export const getOrders = (req, res) => {
  res.status(200).json({
    success: true,
    data: demoOrders,
  });
};

export const getOrderById = (req, res) => {
  const order = demoOrders.find((item) => item.id === req.params.orderId);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found",
    });
  }

  res.status(200).json({
    success: true,
    data: order,
  });
};
