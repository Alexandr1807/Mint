const burger = document.querySelector('.header__burger'),
    sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active')
    burger.classList.toggle('header__burger-active')
})