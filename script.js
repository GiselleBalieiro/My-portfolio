const sideMenu = document.querySelector('#sideMenu')
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)'
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)'
}

window.addEventListener('scroll', ()=> {
    if(scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
        navLinks.classList.remove('bg-white','shadow-sm', 'bg-opacity-50')
    }
    else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
        navLinks.classList.add('bg-white','shadow-sm', 'bg-opacity-50')
    }
})

//Clique no botão
var themeToggleDarkIcon = document.getElementById('toggleTheme-dark-icon');
var themeToggleLightIcon = document.getElementById('toggleTheme-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('toggleTheme');

themeToggleBtn.addEventListener('click', function() {

    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});


