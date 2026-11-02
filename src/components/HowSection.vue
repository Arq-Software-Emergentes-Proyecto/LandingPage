<script setup>
import { useI18n } from '@/i18n/index.js'
import { vReveal } from '@/composables/reveal.js'

const { t } = useI18n()
</script>

<template>
  <section id="how" class="section">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="eyebrow">{{ t.how.eyebrow }}</span>
        <h2 class="section-title">{{ t.how.title }}</h2>
      </div>
      <ol class="steps">
        <li v-for="(step, i) in t.how.steps" :key="step.title" v-reveal class="step">
          <span class="step__number" aria-hidden="true">{{ i + 1 }}</span>
          <h3 class="step__title">{{ step.title }}</h3>
          <p class="step__text">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  counter-reset: step;
}

.step {
  padding: 2rem 1.75rem;
  border-radius: var(--bf-radius-md);
  background: var(--bf-bg-soft);
}

.step__number {
  display: inline-grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--bf-navy);
  color: #fff;
  font: 700 1rem/1 var(--bf-font-heading);
}

.step__title {
  margin-top: 1.1rem;
  font-size: 1.15rem;
  font-weight: 700;
}

.step__text {
  margin-top: 0.5rem;
  color: var(--bf-text-secondary);
  font-size: 0.95rem;
}

@media (max-width: 860px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
