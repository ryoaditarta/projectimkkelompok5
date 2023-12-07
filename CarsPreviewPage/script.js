const overlay = document.getElementById('overlay')

function openmodal() {
    const a = document.getElementById('popup'); // Use getElementById, not getElementsById
    const overlay = document.getElementById('overlay'); // Adjust 'overlay' to the actual ID of your overlay element
    a.classList.add('active');
    overlay.classList.add('active');
}


function closemodal() {
    const a = document.getElementById('popup'); // Use getElementById, not getElementsById
    const overlay = document.getElementById('overlay'); // Adjust 'overlay' to the actual ID of your overlay element
    a.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closemodal();
    })
})

const overlaymap = document.getElementById('overlaymap');
function openmap() {
    console.log("keren");
    const a = document.getElementById('mappopupid');
    const overlaymap = document.getElementById('overlaymap');
    a.classList.add('active');
    overlaymap.classList.add('active');
}


function closemap() {
    const a = document.getElementById('mappopupid'); // Use getElementById, not getElementsById
    const overlaymap = document.getElementById('overlaymap'); // Adjust 'overlay' to the actual ID of your overlay element
    a.classList.remove('active');
    overlaymap.classList.remove('active');
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.mappopup.active')
    modals.forEach(modal => {
        closemodal();
    })
})


const overlaydisc = document.getElementById('overlaydisc');
function opendisc() {
    const a = document.getElementById('popupdisc');
    const overlaymap = document.getElementById('overlaydisc');
    a.classList.add('active');
    overlaymap.classList.add('active');
}


function closedisc() {
    const a = document.getElementById('popupdisc'); // Use getElementById, not getElementsById
    const overlaymap = document.getElementById('overlaydisc'); // Adjust 'overlay' to the actual ID of your overlay element
    a.classList.remove('active');
    overlaymap.classList.remove('active');
}

overlaydisc.addEventListener('click', () => {
    const modals = document.querySelectorAll('.overlaydisc.active')
    modals.forEach(modal => {
        closemodal();
    })
})