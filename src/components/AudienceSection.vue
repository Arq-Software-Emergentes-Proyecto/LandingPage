<script setup>
import AppIcon from './AppIcon.vue'
import { useI18n } from '@/i18n/index.js'
import { vReveal } from '@/composables/reveal.js'

const { t } = useI18n()
</script>

<template>
  <section class="section section--soft">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="eyebrow">{{ t.audience.eyebrow }}</span>
        <h2 class="section-title">{{ t.audience.title }}</h2>
      </div>
      <div class="split">
        <article v-reveal class="panel panel--navy">
          <span class="panel__icon"><AppIcon name="building" /></span>
          <h3 class="panel__title">{{ t.audience.admin.title }}</h3>
          <ul class="panel__list">
            <li v-for="item in t.audience.admin.items" :key="item">
              <AppIcon name="check" :size="18" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
        <article v-reveal class="panel">
          <span class="panel__icon panel__icon--soft"><AppIcon name="home" /></span>
          <h3 class="panel__title">{{ t.audience.resident.title }}</h3>
          <ul class="panel__list">
            <li v-for="item in t.audience.resident.items" :key="item">
              <AppIcon name="check" :size="18" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.split {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.panel {
  padding: 2.25rem;
  border-radius: var(--bf-radius-lg);
  background: #fff;
  border: 1px solid var(--bf-border);
}

/* Tarjeta azul como el encabezado del panel del administrador */
.panel--navy {
  background: var(--bf-navy);
  color: #fff;
  border-color: transparent;
}

.panel--navy .panel__title {
  color: #fff;
}

.panel__icon {
  display: inline-grid;
  place-items: center;
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

.panel__icon--soft {
  background: var(--bf-tile-blue);
  color: var(--bf-navy);
}

.panel__title {
  margin-top: 1.1rem;
  font-size: 1.35rem;
  font-weight: 700;
}

.panel__list {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.85rem;
}

.panel__list li {
  display: flex;
  gap: 0.65rem;
  align-items: flex-start;
}

.panel__list li :deep(svg) {
  flex: none;
  margin-top: 0.15rem;
  color: var(--bf-green);
}

.panel--navy .panel__list li :deep(svg) {
  color: #93c5fd;
}

.panel--navy .panel__list li span {
  color: rgba(255, 255, 255, 0.92);
}

.panel:not(.panel--navy) .panel__list li span {
  color: var(--bf-text-secondary);
}

@media (max-width: 860px) {
  .split {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 1.75rem;
  }
}
</style>
