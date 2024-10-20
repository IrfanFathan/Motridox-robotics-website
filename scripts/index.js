// JavaScript to toggle the mobile menu
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    
    // Toggle between hidden and block (show or hide the menu)
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
    }
});
