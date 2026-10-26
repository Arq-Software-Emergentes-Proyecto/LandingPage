<script setup>
import { appLinks } from '@/config.js'
import { useI18n } from '@/i18n/index.js'
import { vReveal } from '@/composables/reveal.js'

const { t } = useI18n()
</script>

<template>
  <section class="cta-wrap">
    <div class="container">
      <div v-reveal class="cta">
        <h2 class="cta__title">{{ t.cta.title }}</h2>
        <p class="cta__text">{{ t.cta.text }}</p>
        <div class="cta__actions">
          <a :href="appLinks.register" class="btn btn--light" rel="noopener">{{ t.cta.primary }}</a>
          <a :href="appLinks.login" class="btn btn--outline-light" rel="noopener">{{ t.cta.secondary }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-wrap {
  padding: 0 0 5.5rem;
}

/* Mismo bloque azul con el que abre el panel del administrador */
.cta {
  padding: 3.5rem 2rem;
  border-radius: var(--bf-radius-lg);
  background: var(--bf-navy);
  color: #fff;
  text-align: center;
}

.cta__title {
  color: #fff;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 700;
}

.cta__text {
  margin: 0.9rem auto 0;
  max-width: 34rem;
  color: rgba(255, 255, 255, 0.85);
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}
</style>
