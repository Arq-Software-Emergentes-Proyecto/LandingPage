/** Reemplaza marcadores {clave} de un texto traducido. Devuelve texto plano (nunca HTML). */
export function fmt(text, values = {}) {
  return String(text).replace(/\{(\w+)\}/g, (_, key) => (key in values ? String(values[key]) : `{${key}}`))
}
