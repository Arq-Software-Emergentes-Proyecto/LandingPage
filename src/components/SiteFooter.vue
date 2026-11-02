<script setup>
import { appLinks } from '@/config.js'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <img src="/logo-buildingfex.png" alt="BuildingFex" class="footer__logo" width="148" height="45" loading="lazy" />
        <p class="footer__tagline">{{ t.footer.tagline }}</p>
      </div>
      <nav :aria-label="t.footer.product">
        <h3 class="footer__heading">{{ t.footer.product }}</h3>
        <a href="#features">{{ t.nav.features }}</a>
        <a href="#how">{{ t.nav.how }}</a>
        <a href="#pricing">{{ t.nav.pricing }}</a>
        <a href="#faq">{{ t.nav.faq }}</a>
      </nav>
      <nav :aria-label="t.footer.access">
        <h3 class="footer__heading">{{ t.footer.access }}</h3>
        <a :href="appLinks.login" rel="noopener">{{ t.footer.admin }}</a>
        <a :href="appLinks.residentLogin" rel="noopener">{{ t.footer.resident }}</a>
        <a :href="appLinks.register" rel="noopener">{{ t.footer.register }}</a>
      </nav>
    </div>
    <div class="container footer__bottom">
      <p>© {{ year }} BuildingFex. {{ t.footer.rights }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bf-bg-soft);
  border-top: 1px solid var(--bf-border);
  padding: 3.5rem 0 1.5rem;
  font-size: 0.9rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
}

.footer__logo {
  height: 2rem;
  width: auto;
}

.footer__tagline {
  margin-top: 0.9rem;
  max-width: 22rem;
  color: var(--bf-text-secondary);
}

.footer__heading {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--bf-text);
  margin-bottom: 0.75rem;
}

.footer nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer nav a {
  color: var(--bf-text-secondary);
  text-decoration: none;
}

.footer nav a:hover {
  color: var(--bf-navy);
}

.footer__bottom {
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--bf-border);
  color: var(--bf-text-muted);
  font-size: 0.8rem;
}

@media (max-width: 720px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer__grid > div {
    grid-column: 1 / -1;
  }
}
</style>
