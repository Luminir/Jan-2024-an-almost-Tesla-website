const openMenu = () =>{
    document.querySelector('aside').className = 'active';
}

const closeMenu = () => {
    document.querySelector('aside').className= '';
}

document.getElementById('menu-icon').onclick = event =>{
    event.preventDefault();
    openMenu();
}

document.querySelector('.close').onclick = (event) => {
    closeMenu();
}