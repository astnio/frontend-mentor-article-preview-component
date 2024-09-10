const btnShare = document.getElementById('btn-share');
const shareButtonsGroup = document.getElementById('share-buttons-group');

let shareButtonsActive = false;

btnShare.addEventListener('click', () => {
	shareButtonsActive = !shareButtonsActive;
	shareButtonsGroup.dataset.active = shareButtonsActive;
	btnShare.dataset.active = shareButtonsActive;
});

// TODO: Remove anything below this when done,
// it is just for testing!

function test_startSharePopup() {
	shareButtonsActive = !shareButtonsActive;
	shareButtonsGroup.dataset.active = shareButtonsActive;
	btnShare.dataset.active = shareButtonsActive;
}

test_startSharePopup();
