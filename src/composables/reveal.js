/**
 * Directiva v-reveal: muestra el elemento con una transición suave cuando entra en pantalla.
 * Si el navegador no soporta IntersectionObserver, el contenido se muestra de inmediato.
 */
export const vReveal = {
  mounted(el) {
    el.classList.add('reveal')
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}
