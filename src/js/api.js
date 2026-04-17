import { BASE_URL } from "./constants";
import mockData from "./all.json";

const api = {
  fetchCarouselProducts: async () => {
    const spinner = document.getElementById('loading-spinner');
    spinner.classList.remove('hidden');
    
    // Simulamos un retraso de red de 800ms
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      // Opción 1: Usar datos locales (Mock)
      console.log("Using mock data from all.json");
      return mockData.nodes;

      /* 
      // Opción 2: Fetch real (descomentar para volver a la API real)
      const response = await fetch(`${BASE_URL}/products/all`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.products.nodes;
      */
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    } finally {
      spinner.classList.add('hidden');
    }
  },
};

export default api;
