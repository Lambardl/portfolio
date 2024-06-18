document.addEventListener('DOMContentLoaded', function() {
    const whatsappIcon = document.getElementById('whatsappIcon');
    const whatsappDialog = document.getElementById('whatsappDialog');
    const closeBtn = document.getElementById('closeBtn');

    whatsappIcon.addEventListener('click', function() {
        whatsappDialog.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        whatsappDialog.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.btn-menu');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});
