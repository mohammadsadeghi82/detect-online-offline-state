//Writen With Github @mohammadsadeghi82
let online = document.querySelector('.online');
let offline = document.querySelector('.offline');
let closeNotif = document.querySelectorAll('.bi-x');

closeNotif.forEach(notifaction => {
    notifaction.addEventListener('click',e=> {
        let closeElem = e.target.parentElement.parentElement;

        closeElem.style.display = 'none';
    })
})

function onlineHandler() {
    offline.style.display = "none";
    online.style.display = "inline-block";
}
function offlineHandler() {
    online.style.display = "none";
    offline.style.display = "inline-block";
}