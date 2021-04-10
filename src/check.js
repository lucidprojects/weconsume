(function check() {
// they have hijacked document.querySelector/getElementById/etc but not document.all
  Array.from(document.all).filter(el => el.nodeName.toLowerCase() === 'lightning-button-icon')[0].click();
setTimeout(() => {
Array.from(document.all).filter(el => el.name === 'today')[0].click();	
setTimeout(() => {
const none = /check back/.test(Array.from(document.all).filter(el => el.className === 'appointment-section')[0].textContent)
console.warn('none', none)
if (none && !window.stoppy) setTimeout(check, 200);
}, 8000)
})()
