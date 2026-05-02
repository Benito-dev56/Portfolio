const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  }, 60);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .skill-card').forEach(el => observer.observe(el));

const img = document.getElementById('profile-photo');
img.src = 'ben.jpg';