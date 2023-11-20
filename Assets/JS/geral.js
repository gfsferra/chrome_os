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


function showMore(button) {
  var element = button.previousElementSibling
  button.classList.toggle("active")
  element.classList.toggle("active")

  if (button.classList.contains("active")) {
    button.querySelector("span").innerHTML = "Ver menos"
  } else {
    button.querySelector("span").innerHTML = "Saiba mais"
  }
}

/**
 * Create the accordion effect on button and next element.
 * @param {string} button - The button that th effect will be applied
*/
function accordion(button) {
  button.classList.toggle("active")
  var panel = button.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight / 10 + "rem";
  }
}
