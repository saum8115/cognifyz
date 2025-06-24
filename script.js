
fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('post-container');
    data.forEach(post => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
      col.innerHTML = `
        <div class="post-card">
          <h5>${post.title}</h5>
          <p>${post.body}</p>
        </div>
      `;
      container.appendChild(col);
    });
  });


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const error = document.getElementById('error-msg');
  const success = document.getElementById('success-msg');

  error.textContent = '';
  success.textContent = '';

  if (!name || !email || !message) {
    error.textContent = 'All fields are required.';
    return;
  }

  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    error.textContent = 'Enter a valid email address.';
    return;
  }

  success.textContent = 'Form submitted successfully!';
  document.getElementById('contactForm').reset();
});