const btnShare = document.getElementById('btn-share');
const shareButtonsGroup = document.getElementById('share-buttons-group');

let shareButtonsActive = false;

btnShare.addEventListener('click', () => {
	shareButtonsActive = !shareButtonsActive;
	shareButtonsGroup.dataset.active = shareButtonsActive;
});
