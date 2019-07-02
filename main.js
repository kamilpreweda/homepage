const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigation = document.querySelector('.navigation__js');
    navigation.classList.toggle('navigation__visible');
});