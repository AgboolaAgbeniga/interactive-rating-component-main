const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submit-btn');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingText = document.getElementById('selected-rating');

let selectedRating = null;

ratingBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    ratingBtns.forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Store selected rating
    selectedRating = btn.textContent;
  });
});

submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    // Update the selection text
    selectedRatingText.textContent = selectedRating;
    
    // Switch states
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
  } else {
    alert('Please select a rating before submitting!');
  }
});
