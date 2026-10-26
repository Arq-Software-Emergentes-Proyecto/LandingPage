<script setup>
import AppIcon from './AppIcon.vue'
import { appLinks } from '@/config.js'
import { MODULES, PLANS, TRIAL_DAYS } from '@/data/plans.js'
import { fmt } from '@/composables/format.js'
import { useI18n } from '@/i18n/index.js'
import { vReveal } from '@/composables/reveal.js'

const { t } = useI18n()

function departmentsLabel(plan) {
  const p = t.value.pricing
  if (plan.id === 'portafolio') return p.from
  if (plan.minDepartments) return fmt(p.range, { min: plan.minDepartments, max: plan.maxDepartments })
  return fmt(p.upTo, { max: plan.maxDepartments })
}

</script>

<template>
  <section id="pricing" class="section section--soft">
    <div class="container">
      <div v-reveal class="section-head">
        <span class="eyebrow">{{ t.pricing.eyebrow }}</span>
        <h2 class="section-title">{{ t.pricing.title }}</h2>
        <p class="section-lead">{{ t.pricing.lead }}</p>
      </div>

      <ul class="plans">
        <li
          v-for="plan in PLANS"
          :key="plan.id"
          v-reveal
          class="plan"
          :class="{ 'plan--featured': plan.highlighted }"
        >
          <span v-if="plan.highlighted" class="plan__badge">{{ t.pricing.popular }}</span>
          <span v-else-if="plan.trial" class="plan__badge plan__badge--soft">
            {{ fmt(t.pricing.trial, { days: TRIAL_DAYS }) }}
          </span>
          <span v-else class="plan__badge plan__badge--placeholder" aria-hidden="true">&nbsp;</span>

          <h3 class="plan__name">{{ plan.name }}</h3>
          <p class="plan__size">{{ departmentsLabel(plan) }}</p>

          <div class="plan__price">
            <template v-if="plan.price === 0">
              <span class="plan__amount">{{ t.pricing.free }}</span>
            </template>
            <template v-else-if="plan.price">
              <span class="plan__currency">S/</span>
              <span class="plan__amount">{{ plan.price }}</span>
              <span class="plan__period">{{ t.pricing.perMonth }}</span>
            </template>
            <template v-else>
              <span class="plan__currency">S/</span>
              <span class="plan__amount">{{ plan.perDepartment }}</span>
              <span class="plan__period">{{ t.pricing.perUnit }}</span>
            </template>
          </div>
          <p v-if="plan.minimumMonthly" class="plan__minimum">{{ fmt(t.pricing.minimum, { min: plan.minimumMonthly }) }}</p>

          <a
            :href="appLinks.register"
            class="btn btn--block"
            :class="plan.highlighted ? 'btn--primary' : 'btn--ghost'"
            rel="noopener"
          >
            {{ plan.trial ? t.pricing.ctaFree : t.pricing.cta }}
          </a>

          <p class="plan__includes">{{ t.pricing.includes }}</p>
          <ul class="plan__features">
            <li>
              <AppIcon name="sparkle" :size="16" />
              <span>{{ fmt(t.pricing.aiQueries, { count: plan.aiQueries }) }}</span>
            </li>
            <li v-for="module in MODULES.filter((m) => plan.modules.includes(m))" :key="module">
              <AppIcon name="check" :size="16" />
              <span>{{ t.pricing.modules[module] }}</span>
            </li>
            <li>
              <AppIcon name="chat" :size="16" />
              <span>{{ t.pricing.support[plan.support] }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <p class="note">{{ t.pricing.note }}</p>
    </div>
  </section>
</template>

<style scoped>
.plans {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
  align-items: stretch;
}

.plan {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.75rem 1.35rem;
  border-radius: var(--bf-radius-md);
  background: #fff;
  border: 1px solid var(--bf-border);
  box-shadow: var(--bf-shadow-sm);
}

.plan--featured {
  border: 2px solid var(--bf-navy);
  box-shadow: var(--bf-shadow-lg);
}

.plan__badge {
  align-self: flex-start;
  margin-bottom: 0.9rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--bf-radius-pill);
  background: var(--bf-navy);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
}

.plan__badge--placeholder {
  visibility: hidden;
}

.plan__badge--soft {
  background: var(--bf-tile-green);
  color: var(--bf-green);
}

.plan__name {
  font-size: 1.25rem;
  font-weight: 700;
}

.plan__size {
  margin-top: 0.3rem;
  min-height: 2.6em;
  font-size: 0.85rem;
  color: var(--bf-text-secondary);
}

.plan__price {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-top: 1rem;
}

.plan__currency {
  font-weight: 600;
  color: var(--bf-text-secondary);
}

.plan__amount {
  font: 800 2.2rem/1 var(--bf-font-heading);
  letter-spacing: -0.03em;
}

.plan__period {
  font-size: 0.85rem;
  color: var(--bf-text-secondary);
}

.plan__minimum {
  margin-top: 0.35rem;
  font-size: 0.8rem;
  color: var(--bf-text-secondary);
}

.plan .btn {
  margin-top: 1.4rem;
}

.plan__includes {
  margin-top: 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--bf-text-muted);
}

.plan__features {
  list-style: none;
  margin: 0.75rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.55rem;
  font-size: 0.85rem;
}

.plan__features li {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  color: var(--bf-text-secondary);
}

.plan__features li :deep(svg) {
  flex: none;
  margin-top: 0.15rem;
  color: var(--bf-navy);
}

.note {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--bf-text-secondary);
}

@media (max-width: 1180px) {
  .plans {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .plans {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .plans {
    grid-template-columns: 1fr;
  }
}
</style>
