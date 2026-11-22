const DEFAULT_APP_URL = 'https://fronted-seven-opal.vercel.app'

/**
 * URL de la plataforma. Solo se aceptan direcciones https (o http en localhost para desarrollo);
 * cualquier otro valor se descarta y se usa la URL por defecto, para que un valor mal configurado
 * no convierta los botones en enlaces peligrosos (por ejemplo, javascript:).
 */
function resolveAppUrl(raw) {
  try {
    const url = new URL(String(raw ?? '').trim())
    const isLocal = url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname)
    if (url.protocol !== 'https:' && !isLocal) return DEFAULT_APP_URL
    return url.origin
  } catch {
    return DEFAULT_APP_URL
  }
}

export const APP_URL = resolveAppUrl(import.meta.env.VITE_APP_URL || DEFAULT_APP_URL)

/**
 * Redes sociales de BuildingFex. Para cambiar una cuenta, edita su `url` y su `handle`; con `url`
 * vacía la red no se muestra. Igual que APP_URL, solo se aceptan enlaces https.
 */
const SOCIAL_ACCOUNTS = [
  { key: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/buildingfex', handle: '@buildingfex', color: '#E4405F' },
  { key: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/buildingfex', handle: '/buildingfex', color: '#0866FF' },
  { key: 'tiktok', name: 'TikTok', url: 'https://www.tiktok.com/@buildingfex', handle: '@buildingfex', color: '#000000' },
  { key: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/company/buildingfex', handle: 'BuildingFex', color: '#0A66C2' },
]

function isHttpsUrl(raw) {
  try {
    return new URL(String(raw ?? '').trim()).protocol === 'https:'
  } catch {
    return false
  }
}

export const socialLinks = SOCIAL_ACCOUNTS.filter((account) => isHttpsUrl(account.url))

/** Rutas públicas de la plataforma a las que enlaza la landing. */
export const appLinks = {
  register: `${APP_URL}/register`,
  login: `${APP_URL}/login`,
  residentLogin: `${APP_URL}/login/residente`,
}
