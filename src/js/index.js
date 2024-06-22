import "../scss/styles.scss";
import api from './api';
import Carousel from './components/carousel'; // Importa la clase Carousel

document.addEventListener('DOMContentLoaded', async () => {
  if (module.hot) {
    module.hot.accept();
  }

  try {
    const products = await api.fetchCarouselProducts();
    
    if (!products || !products.length) {
      console.error('No se encontraron productos válidos.');
      return;
    }

    new Carousel(products); // Crea una instancia de Carousel con los productos obtenidos
  } catch (error) {
    console.error('Error al cargar productos del carousel:', error);
  }
});
