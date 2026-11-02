<script setup>
import AppIcon from './AppIcon.vue'
import { useI18n } from '@/i18n/index.js'
import { vReveal } from '@/composables/reveal.js'

const { t } = useI18n()
</script>

<template>
  <section id="faq" class="section">
    <div class="container faq">
      <div v-reveal class="section-head">
        <span class="eyebrow">{{ t.faq.eyebrow }}</span>
        <h2 class="section-title">{{ t.faq.title }}</h2>
      </div>
      <div class="faq__list">
        <!-- details/summary nativos: accesibles con teclado y lectores de pantalla sin JavaScript extra -->
        <details v-for="item in t.faq.items" :key="item.q" v-reveal class="faq__item">
          <summary>
            <span>{{ item.q }}</span>
            <AppIcon name="chevron" :size="20" />
          </summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq__list {
  max-width: 50rem;
  margin: 0 auto;
  display: grid;
  gap: 0.75rem;
}

.faq__item {
  border-radius: var(--bf-radius-sm);
  border: 1px solid var(--bf-border);
  background: #fff;
  box-shadow: var(--bf-shadow-sm);
}

.faq__item summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.15rem 1.35rem;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
}

.faq__item summary::-webkit-details-marker {
  display: none;
}

.faq__item summary :deep(svg) {
  flex: none;
  color: var(--bf-text-secondary);
  transition: transform 0.2s ease;
}

.faq__item[open] summary :deep(svg) {
  transform: rotate(180deg);
}

.faq__item p {
  padding: 0 1.35rem 1.25rem;
  color: var(--bf-text-secondary);
}
</style>
