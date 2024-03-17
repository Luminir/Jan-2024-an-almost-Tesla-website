document.lastScrollPosition1 = 0;
document.lastCentered1 = 0;
document.onWayTo1 = null;

document.addEventListener('scroll', () => {
    const direction = window.scrollY - document.lastScrollPosition1 > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    if(document.onWayTo1 === null)
    {
        const destiIndex = direction === 'up' ? document.lastCentered1 -1 : document.lastCentered1 + 1;
        if(destiIndex >= 0 && destiIndex < sections.length)
        {
            document.onWayTo1 = destiIndex;
            window.scroll(0, sections[destiIndex].offsetTop);
        }
    }
    
    
    sections.forEach((section, index) => {
        if(window.scrollY === section.offsetTop)
        {
            document.lastCentered1 = index;
            document.querySelectorAll('section.product-name').className = 'active';
            if(document.onWayTo1 === index)
            {
                document.onWayTo1 = null;
            }
        }
        else{
            document.querySelectorAll('section.product-name').className = '';
        }
    })
    document.lastScrollPosition1 = window.scrollY;
})