<script setup>
import { socialLinks } from '@/config.js'
import { useI18n } from '@/i18n/index.js'
import { vReveal } from '@/composables/reveal.js'
import AppIcon from './AppIcon.vue'
import SocialIcon from './SocialIcon.vue'

const { t } = useI18n()
</script>

<template>
  <section v-if="socialLinks.length" id="social" class="section social">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="eyebrow">{{ t.social.eyebrow }}</span>
        <h2 class="section-title">{{ t.social.title }}</h2>
        <p class="section-lead">{{ t.social.lead }}</p>
      </div>
      <ul class="social__grid">
        <li v-for="account in socialLinks" :key="account.key" v-reveal>
          <a
            :href="account.url"
            class="social__card"
            target="_blank"
            rel="noopener noreferrer"
            :style="{ '--brand': account.color }"
            :aria-label="`${account.name} ${account.handle} (${t.social.newTab})`"
          >
            <span class="social__logo">
              <SocialIcon :name="account.key" :size="26" />
            </span>
            <span class="social__name">{{ account.name }}</span>
            <span class="social__handle">{{ account.handle }}</span>
            <span class="social__text">{{ t.social.networks[account.key] }}</span>
            <span class="social__follow">
              {{ t.social.follow }}
              <AppIcon name="arrow" :size="16" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* Va justo después del bloque azul de cierre, que ya deja su propio espacio abajo. */
.social {
  padding-top: 0;
}

.social__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

.social__card {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: var(--bf-radius-md);
  background: var(--bf-bg-soft);
  color: var(--bf-text);
  text-decoration: none;
  transition:
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    background-color 0.25s ease;
}

.social__card:hover {
  transform: translateY(-4px);
  border-color: var(--bf-border);
  background: var(--bf-bg);
  box-shadow: var(--bf-shadow-lg);
}

.social__card:focus-visible {
  outline: 2px solid var(--bf-navy);
  outline-offset: 3px;
}

.social__logo {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: var(--bf-radius-sm);
  background: var(--brand);
  color: #fff;
}

.social__name {
  margin-top: 1.1rem;
  font: 700 1.1rem/1.3 var(--bf-font-heading);
}

.social__handle {
  margin-top: 0.15rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--bf-navy);
}

.social__text {
  margin-top: 0.6rem;
  font-size: 0.925rem;
  color: var(--bf-text-secondary);
}

.social__follow {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: auto;
  padding-top: 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--bf-navy);
}

.social__follow :deep(svg) {
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.social__card:hover .social__follow :deep(svg) {
  transform: translateX(3px);
}

@media (max-width: 960px) {
  .social__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .social__grid {
    gap: 0.85rem;
  }

  .social__card {
    padding: 1.35rem 1.15rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .social__card,
  .social__follow :deep(svg) {
    transition: none;
  }

  .social__card:hover {
    transform: none;
  }
}
</style>
