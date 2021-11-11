// const circle = document.querySelectorAll('.progress')



// const progressAnimation = () => {
//     let percentProgress = Math.floor(70)

//     let radius = circle.getAttribute('r')
//     let circleLength = 2 * Math.PI * radius
//     circle.setAttribute('stroke-dasharray', circleLength)
//     circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentProgress / 100)
// }

// progressAnimation()

const circles = document.querySelectorAll('.facts-element__circle')

circles.forEach(el => {
    if (el.dataset.percentage == 'true') {
        let progress = el.querySelector('.progress')
        let valueBlock = el.querySelector('.facts-element__value')
        let radius = progress.getAttribute('r')
        let circleLength = 2 * Math.PI * radius
        let percent = el.dataset.percent
        let full = el.dataset.full
        let value = el.dataset.value
        let percentageProgress = Math.floor(value / full * 100)
        valueBlock.textContent = value
        progress.setAttribute('stroke-dasharray', circleLength)
        progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100)  

    } else {
        let progress = el.querySelector('.progress')
        let value = el.querySelector('.facts-element__value')
        let radius = progress.getAttribute('r')
        let circleLength = 2 * Math.PI * radius
        let percent = el.dataset.percent
        let percentageProgress = Math.floor(percent)
        
        value.textContent = percent + '%'
        progress.setAttribute('stroke-dasharray', circleLength)
        progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100)    
    }
})