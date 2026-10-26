<script setup>
import AppIcon from './AppIcon.vue'
import { useI18n } from '@/i18n/index.js'
import { vReveal } from '@/composables/reveal.js'

const { t } = useI18n()
/* Mismos tonos pastel que las tarjetas del panel de la plataforma */
const tones = ['blue', 'green', 'peach', 'amber', 'blue', 'green']
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="eyebrow">{{ t.features.eyebrow }}</span>
        <h2 class="section-title">{{ t.features.title }}</h2>
        <p class="section-lead">{{ t.features.lead }}</p>
      </div>
      <ul class="grid">
        <li v-for="(item, i) in t.features.items" :key="item.title" v-reveal class="card" :class="`card--${tones[i]}`">
          <span class="card__icon"><AppIcon :name="item.icon" /></span>
          <h3 class="card__title">{{ item.title }}</h3>
          <p class="card__text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.card {
  padding: 1.75rem;
  border-radius: var(--bf-radius-md);
  border: 1px solid var(--bf-border);
  background: #fff;
  box-shadow: var(--bf-shadow-sm);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.card:hover {
  box-shadow: var(--bf-shadow-md);
}

.card__icon {
  display: inline-grid;
  place-items: center;
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 14px;
}

.card--blue .card__icon {
  background: var(--bf-tile-blue);
  color: var(--bf-navy);
}

.card--green .card__icon {
  background: var(--bf-tile-green);
  color: var(--bf-green);
}

.card--peach .card__icon {
  background: var(--bf-tile-peach);
  color: #c2410c;
}

.card--amber .card__icon {
  background: var(--bf-tile-amber);
  color: var(--bf-amber);
}

.card__title {
  margin-top: 1.1rem;
  font-size: 1.15rem;
  font-weight: 700;
}

.card__text {
  margin-top: 0.55rem;
  color: var(--bf-text-secondary);
  font-size: 0.95rem;
}

@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
