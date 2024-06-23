document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailPattern.test(email)) {
      message.textContent = 'Thank you for subscribing!';
      message.style.color = 'green';
    } else {
      message.textContent = 'Please enter a valid email address.';
    }
  });
