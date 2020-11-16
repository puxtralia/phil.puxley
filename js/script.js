

var popupWindow = document.getElementById('popupWindow');
var closePopup = document.getElementById("closePopup");

closePopup.addEventListener('click', close);

function close() {
	console.log('close')
	popupWindow.style.display = 'none';

};