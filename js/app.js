const innerCursor = document.querySelector(".inner__cursor")
const outerCursor = document.querySelector(".outer__cursor")

document.addEventListener('mousemove', moveCursor)

function moveCursor(e)
{
    let x = e.clientX
    let y = e.clientY

    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`

    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
}

const links = Array.from(document.querySelectorAll('a'))
links.forEach(link =>{
    link.addEventListener('mouseover',()=>{
        innerCursor.classList.add('grow')

    })
    link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove('grow')

    })
})