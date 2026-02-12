function handleNoClick(
const noButton document.querySelector(".no-button");
const yesButton document.querySelector(",yes-button");
noButton.textContent messages[messageIndex];
messageIndex (nessageIndex 1) messages.length;
const currentSize parseFloat(window
getComputedStyle(yesButton)
fontSize);
yesButton style fontSize $currentSize 1.5px;
function handleYesClick() {
window location.href "yes page.html";
