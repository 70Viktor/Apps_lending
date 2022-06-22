const onPage = {
  mounted (el, binding) {
    let f = () => {
      let rect = el.getBoundingClientRect()
      let inView = (rect.top + rect.height / 2 <= document.documentElement.clientHeight)

      if (inView) {
        el.classList.add('_active')
      } else {
        el.classList.remove('_active')
      }
    }
    window.addEventListener('scroll', f)
    f()
  }
}
export default onPage