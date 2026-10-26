<script setup>
import AppIcon from './AppIcon.vue'
import { appLinks } from '@/config.js'
import { useI18n } from '@/i18n/index.js'

const { t } = useI18n()
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__grid">
      <div class="hero__copy">
        <span class="eyebrow">{{ t.hero.eyebrow }}</span>
        <h1 class="hero__title">{{ t.hero.title }}</h1>
        <p class="hero__lead">{{ t.hero.lead }}</p>
        <div class="hero__actions">
          <a :href="appLinks.register" class="btn btn--primary" rel="noopener">
            {{ t.hero.primary }}
            <AppIcon name="arrow" :size="18" />
          </a>
          <a href="#pricing" class="btn btn--ghost">{{ t.hero.secondary }}</a>
        </div>
        <a :href="appLinks.residentLogin" class="hero__resident" rel="noopener">
          <AppIcon name="home" :size="18" />
          {{ t.hero.resident }}
        </a>
        <ul class="hero__points">
          <li v-for="point in t.hero.points" :key="point">
            <span class="hero__check"><AppIcon name="check" :size="14" /></span>
            {{ point }}
          </li>
        </ul>
      </div>

      <div class="hero__visual">
        <div class="frame">
          <div class="frame__bar" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <img
            src="/img/admin-dashboard.webp"
            :alt="t.hero.imageAlt"
            width="1600"
            height="1000"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 4.5rem 0 5rem;
  background:
    radial-gradient(circle at 85% 10%, rgba(var(--bf-navy-rgb), 0.1), transparent 45%),
    linear-gradient(180deg, var(--bf-bg-tint) 0%, var(--bf-navy-soft) 100%);
  overflow: hidden;
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: 3.5rem;
  align-items: center;
}

.hero__title {
  font-size: clamp(2.25rem, 4.6vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
}

.hero__lead {
  margin-top: 1.25rem;
  font-size: 1.15rem;
  color: var(--bf-text-secondary);
  max-width: 34rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero__resident {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.1rem;
  font-size: 0.925rem;
  font-weight: 600;
  color: var(--bf-navy);
  text-decoration: none;
}

.hero__resident:hover {
  text-decoration: underline;
}

.hero__points {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.25rem;
  font-size: 0.9rem;
  color: var(--bf-text-secondary);
}

.hero__points li {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.hero__check {
  display: inline-grid;
  place-items: center;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background: var(--bf-tile-green);
  color: var(--bf-green);
}

.frame {
  border-radius: var(--bf-radius-md);
  background: #fff;
  border: 1px solid var(--bf-border);
  box-shadow: var(--bf-shadow-lg);
  overflow: hidden;
}

.frame__bar {
  display: flex;
  gap: 6px;
  padding: 10px 14px;
  background: var(--bf-bg-soft);
  border-bottom: 1px solid var(--bf-border);
}

.frame__bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--bf-border-strong);
}

.frame img {
  width: 100%;
  height: auto;
}

@media (max-width: 960px) {
  .hero {
    padding: 3rem 0 3.5rem;
  }

  .hero__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
