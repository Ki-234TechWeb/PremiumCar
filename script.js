const vehicleCards = [...document.querySelectorAll('.vehicle-card')];
const vehicleSelect = document.querySelector('#booking-vehicle');
const searchInput = document.querySelector('#vehicle-search');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const feedback = document.querySelector('#form-feedback');
const enquiryForm = document.querySelector('#enquiry-form');
const detailOverlay = document.querySelector('#detail-overlay');
let activeFilter = 'all';
let activeCard = null;

vehicleCards.forEach((card) => {
  const name = card.dataset.vehicle;
  vehicleSelect.add(new Option(name, name));
});

document.querySelector('#year').textContent = new Date().getFullYear();

function filterVehicles() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  vehicleCards.forEach((card) => {
    const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
    const matchesSearch = `${card.dataset.vehicle} ${card.dataset.tags}`.toLowerCase().includes(query);
    const visible = matchesCategory && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  document.querySelector('#empty-state').hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    filterVehicles();
  });
});
searchInput.addEventListener('input', filterVehicles);

function chooseVehicle(card) {
  vehicleSelect.value = card.dataset.vehicle;
  feedback.textContent = '';
  document.querySelector('#enquiry').scrollIntoView({ behavior: 'smooth', block: 'center' });
  window.setTimeout(() => vehicleSelect.focus({ preventScroll: true }), 450);
}

vehicleCards.forEach((card) => {
  card.querySelector('[data-enquire]').addEventListener('click', () => chooseVehicle(card));
  card.querySelector('[data-details]').addEventListener('click', () => {
    activeCard = card;
    document.querySelector('#detail-image').src = card.querySelector('img').src;
    document.querySelector('#detail-image').alt = card.querySelector('img').alt;
    document.querySelector('#detail-title').textContent = card.dataset.vehicle;
    detailOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    document.querySelector('.dialog-close').focus();
  });
});

function closeDetails() {
  detailOverlay.hidden = true;
  document.body.style.overflow = '';
  if (activeCard) activeCard.querySelector('[data-details]').focus();
}
document.querySelector('.dialog-close').addEventListener('click', closeDetails);
detailOverlay.addEventListener('click', (event) => {
  if (event.target === detailOverlay) closeDetails();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !detailOverlay.hidden) closeDetails();
});
document.querySelector('#detail-enquire').addEventListener('click', () => {
  const card = activeCard;
  closeDetails();
  if (card) chooseVehicle(card);
});

document.querySelector('#pickup-date').addEventListener('change', (event) => {
  const returnDate = document.querySelector('#return-date');
  returnDate.min = event.target.value;
  if (returnDate.value && returnDate.value < event.target.value) returnDate.value = '';
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
}));

enquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const vehicle = vehicleSelect.value;
  const pickup = document.querySelector('#pickup-date').value;
  const returned = document.querySelector('#return-date').value;
  const location = document.querySelector('#pickup-location').value.trim();
  if (!vehicle) {
    feedback.textContent = 'Please choose a vehicle to include in your enquiry.';
    vehicleSelect.focus();
    return;
  }
  if (pickup && returned && returned < pickup) {
    feedback.textContent = 'Please choose a return date that is on or after your pickup date.';
    document.querySelector('#return-date').focus();
    return;
  }
  const formatDate = (date) => date ? new Intl.DateTimeFormat('en-NG', { dateStyle: 'medium' }).format(new Date(`${date}T12:00:00`)) : 'Not specified';
  const message = [
    'Hello, I’d like to enquire about a car rental.',
    `Vehicle: ${vehicle}`,
    `Pickup date: ${formatDate(pickup)}`,
    `Return date: ${formatDate(returned)}`,
    `Preferred pickup location: ${location || 'Not specified'}`,
    'Please let me know availability, rental price in ₦, and the terms. I understand this enquiry does not confirm a reservation.'
  ].join('\n');
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  feedback.textContent = 'Your message is ready in WhatsApp. Please send it there to complete your enquiry.';
});
