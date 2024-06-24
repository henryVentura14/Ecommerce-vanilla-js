import "../scss/styles.scss";
import api from "./api";
import Carousel from "./components/carousel";
import NewsletterForm from "./components/newsletters";
document.addEventListener("DOMContentLoaded", async () => {
  if (module.hot) {
    module.hot.accept();
  }

  try {
    const products = await api.fetchCarouselProducts();

    if (!products || !products.length) {
      console.error("No valid products found.");
      return;
    }

    new Carousel(products);
  } catch (error) {
    console.error("Error:", error);
  }
  new NewsletterForm("newsletter-form", "email", "message");
});
