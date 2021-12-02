const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav')
const portfolioTabsBtns =  document.querySelectorAll('.portfolio-tabs-nav__btn')
const portfolioTabsItems =  document.querySelectorAll('.portfolio-tabs__item')
// const loadMore = document.querySelector('.portfolio-more')

portfolioTabsNav.onclick = (el) => {
    const target = el.target

    if (target.classList.contains('portfolio-tabs-nav__btn')) {
        const path = target.dataset.path

        portfolioTabsBtns.forEach(item => item.classList.remove('portfolio-tabs-nav__btn--active'))
        target.classList.add('portfolio-tabs-nav__btn--active')


        portfolioTabsItems.forEach(item => {
            item.style.display = 'none'
            item.classList.remove('portfolio-tabs__item--visible')
        })

        document.querySelectorAll(`[data-target="${path}"]`).forEach(item => {
            item.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible')
        })
        
        if (path == 'all') {
            portfolioTabsItems.forEach(item => item.classList.add('portfolio-tabs__item--visible'))
        }
       
    }
} 

// if (portfolioTabsItems.length <= 9) {
//     loadMore.style.display = 'none'
// } else loadMore.style.dislay = 'inline-flex'


