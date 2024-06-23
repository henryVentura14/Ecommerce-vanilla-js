import "../scss/styles.scss";
import api from "./api";
import Carousel from "./components/carousel";
import NewsletterForm from './components/newsletters';
document.addEventListener("DOMContentLoaded", async () => {
  if (module.hot) {
    module.hot.accept();
  }

  try {
    const products = await api.fetchCarouselProducts();

    if (!products || !products.length) {
      console.error("No se encontraron productos válidos.");
      return;
    }

    new Carousel(products);
  } catch (error) {
    console.error("Error al cargar productos del carousel:", error);
  }
  new NewsletterForm('newsletter-form', 'email', 'message');
});
