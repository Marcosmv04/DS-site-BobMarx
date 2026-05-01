const mode = document.getElementById('Moon');

mode.addEventListener('click', () => {
    const root = document.documentElement;

    root.classList.toggle('dark-mode');
});