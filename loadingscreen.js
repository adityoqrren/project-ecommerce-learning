itemsLoaded = () => {
    x = document.getElementsByTagName('BODY')[0];
    x.classList.add('loaded');
}
setTimeout(itemsLoaded, 4000);