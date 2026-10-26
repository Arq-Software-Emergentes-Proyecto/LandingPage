<script setup>
import AppIcon from './AppIcon.vue'
import { vReveal } from '@/composables/reveal.js'

defineProps({
  id: { type: String, default: undefined },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  bullets: { type: Array, default: () => [] },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  imageWidth: { type: Number, default: 1600 },
  imageHeight: { type: Number, default: 1000 },
  reverse: { type: Boolean, default: false },
  soft: { type: Boolean, default: false },
})
</script>

<template>
  <section :id="id" class="section" :class="{ 'section--soft': soft }">
    <div class="container showcase" :class="{ 'showcase--reverse': reverse }">
      <div v-reveal class="showcase__copy">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-lead">{{ text }}</p>
        <ul class="showcase__list">
          <li v-for="item in bullets" :key="item">
            <span class="showcase__check"><AppIcon name="check" :size="14" /></span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div v-reveal class="showcase__visual">
        <img :src="image" :alt="imageAlt" :width="imageWidth" :height="imageHeight" loading="lazy" decoding="async" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 3.5rem;
  align-items: center;
}

.showcase--reverse .showcase__copy {
  order: 2;
}

.showcase__list {
  list-style: none;
  margin: 1.75rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
}

.showcase__list li {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  color: var(--bf-text-secondary);
}

.showcase__check {
  flex: none;
  display: inline-grid;
  place-items: center;
  width: 1.4rem;
  height: 1.4rem;
  margin-top: 0.1rem;
  border-radius: 50%;
  background: var(--bf-tile-blue);
  color: var(--bf-navy);
}

.showcase__visual img {
  width: 100%;
  height: auto;
  border-radius: var(--bf-radius-md);
  border: 1px solid var(--bf-border);
  box-shadow: var(--bf-shadow-lg);
  background: #fff;
}

@media (max-width: 960px) {
  .showcase {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }

  .showcase--reverse .showcase__copy {
    order: 0;
  }
}
</style>
