import { BASE_URL } from "./constants";

const api = {
  fetchCarouselProducts: async () => {
    const spinner = document.getElementById('loading-spinner');
    spinner.classList.remove('hidden');
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
    } finally {
      spinner.classList.add('hidden');
    }
  },
};

export default api;
