import { BASE_URL } from "./constants";

const api = {
  fetchCarouselProducts: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/all`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.products.nodes;
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  },
};

export default api;
