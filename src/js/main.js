import '../sass/main.scss';

document.addEventListener('DOMContentLoaded', () => {
	const ratingSection = document.querySelector('.rating');
	const thankyouSection = document.querySelector('.thankyou');
	const ratings = document.querySelectorAll('.rating__number span');
	const infoValue = document.querySelector('.thankyou__info-value');
	const submitBtn = document.querySelector('.btn');
	const backBtn = document.querySelector('.back');

	let selectedRating = null;

	function handleClickRating({ target }) {
		removeAllActiveRating();
		target.classList.add('active');
		selectedRating = target.dataset.rating;
	}

	function removeAllActiveRating() {
		ratings.forEach((rating) => rating.classList.remove('active'));
	}

	function handleSubmit() {
		if (!selectedRating) return;

		ratingSection.classList.add('hidden');
		thankyouSection.classList.remove('hidden');
		infoValue.textContent = selectedRating;
	}

	function handleBackButton() {
		removeAllActiveRating();
		thankyouSection.classList.add('hidden');
		ratingSection.classList.remove('hidden');
	}

	ratings.forEach((rating) =>
		rating.addEventListener('click', handleClickRating)
	);

	submitBtn.addEventListener('click', handleSubmit);
	backBtn.addEventListener('click', handleBackButton);
});
