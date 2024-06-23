class NewsletterForm {
  constructor(formId, emailId, messageId) {
    this.form = document.getElementById(formId);
    this.emailInput = document.getElementById(emailId);
    this.messageElement = document.getElementById(messageId);

    if (this.form) {
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      this.displayMessage('Thank you for subscribing!', 'success');
    } else {
      this.displayMessage('Please enter a valid email address.', 'error');
    }
  }

  displayMessage(message,type) {
    this.messageElement.textContent = message;
    this.messageElement.classList.remove('success', 'error');
    this.messageElement.classList.add(type);
  }
}

export default NewsletterForm;
