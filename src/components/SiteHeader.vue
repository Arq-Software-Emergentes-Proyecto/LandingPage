<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { appLinks } from '@/config.js'
import { useI18n } from '@/i18n/index.js'

const { t, lang, setLang } = useI18n()
const menuOpen = ref(false)
const scrolled = ref(false)

const sections = ['features', 'how', 'ai', 'pricing', 'faq']

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function closeMenu() {
  menuOpen.value = false
}

function onKey(e) {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled || menuOpen }">
    <div class="container header__bar">
      <a href="#top" class="header__brand" :aria-label="t.a11y.home" @click="closeMenu">
        <img src="/logo-buildingfex.png" alt="BuildingFex" width="148" height="45" />
      </a>

      <nav class="header__nav" :aria-label="t.a11y.mainNav">
        <a v-for="id in sections" :key="id" :href="`#${id}`">{{ t.nav[id] }}</a>
      </nav>

      <div class="header__actions">
        <div class="lang" role="group" :aria-label="t.a11y.language">
          <button
            v-for="code in ['es', 'en']"
            :key="code"
            type="button"
            class="lang__btn"
            :class="{ 'lang__btn--active': lang === code }"
            :aria-pressed="lang === code"
            @click="setLang(code)"
          >
            {{ code.toUpperCase() }}
          </button>
        </div>
        <a :href="appLinks.login" class="header__login" rel="noopener">{{ t.nav.login }}</a>
        <a :href="appLinks.register" class="btn btn--primary header__cta" rel="noopener">{{ t.nav.start }}</a>
        <button
          type="button"
          class="header__toggle"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? t.a11y.closeMenu : t.a11y.openMenu"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <div v-show="menuOpen" id="mobile-menu" class="mobile">
      <nav class="container mobile__nav" :aria-label="t.a11y.mainNav">
        <a v-for="id in sections" :key="id" :href="`#${id}`" @click="closeMenu">{{ t.nav[id] }}</a>
        <a :href="appLinks.login" rel="noopener" @click="closeMenu">{{ t.nav.login }}</a>
        <a :href="appLinks.register" class="btn btn--primary btn--block" rel="noopener" @click="closeMenu">
          {{ t.nav.start }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(251, 251, 253, 0.82);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.header--scrolled {
  border-bottom-color: var(--bf-border);
}

.header__bar {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: var(--bf-header-height);
}

.header__brand img {
  height: 2.1rem;
  width: auto;
}

.header__nav {
  display: flex;
  gap: 1.6rem;
  margin-left: 1rem;
}

.header__nav a,
.header__login {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--bf-text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.header__nav a:hover,
.header__login:hover {
  color: var(--bf-navy);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
}

/* Selector ES/EN con el mismo aspecto segmentado de la plataforma */
.lang {
  display: inline-flex;
  padding: 3px;
  border-radius: var(--bf-radius-pill);
  background: var(--bf-bg-soft);
  border: 1px solid var(--bf-border);
}

.lang__btn {
  border: 0;
  background: transparent;
  padding: 0.3rem 0.65rem;
  border-radius: var(--bf-radius-pill);
  font: 600 0.75rem/1 var(--bf-font-body);
  color: var(--bf-text-secondary);
  cursor: pointer;
}

.lang__btn--active {
  background: #fff;
  color: var(--bf-text);
  box-shadow: var(--bf-shadow-sm);
}

.header__cta {
  min-height: 2.4rem;
  padding: 0.55rem 1.1rem;
  font-size: 0.875rem;
}

.header__toggle {
  display: none;
  border: 0;
  background: transparent;
  color: var(--bf-text);
  padding: 0.4rem;
  border-radius: 10px;
  cursor: pointer;
}

.mobile {
  border-top: 1px solid var(--bf-border);
  background: rgba(255, 255, 255, 0.97);
}

.mobile__nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 0.75rem;
  padding-bottom: 1.25rem;
}

.mobile__nav a:not(.btn) {
  padding: 0.75rem 0;
  font-weight: 500;
  text-decoration: none;
  color: var(--bf-text);
  border-bottom: 1px solid var(--bf-border);
}

.mobile__nav .btn {
  margin-top: 0.75rem;
}

@media (max-width: 960px) {
  .header__nav,
  .header__login,
  .header__cta {
    display: none;
  }

  .header__toggle {
    display: inline-flex;
  }
}

@media (min-width: 961px) {
  .mobile {
    display: none !important;
  }
}
</style>
