const mobile = window.matchMedia("(max-width: 991px)").matches

/**
 * Change body class on scroll
*/

const throttle = (handler, wait) => {
  let timer = null

  return (event) => {
    if (timer !== null) return

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null

      handler.call(event.target, event)
    }, wait)
  }
}

const scrollHandler = (lastY) => {
  return (event) => {
    const { scrollY } = window
    const { body } = document

    if (scrollY === lastY) return

    body.classList.toggle('scrolling', scrollY >= 30)
    body.classList.toggle('scrolling-down', scrollY > lastY)
    body.classList.toggle('scrolling-up', scrollY < lastY)

    lastY = scrollY
  }
}

window.addEventListener(
  'scroll',
  throttle(
    scrollHandler(window.scrollY),
    50
  )
)