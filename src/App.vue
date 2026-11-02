<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import AudienceSection from './components/AudienceSection.vue'
import ShowcaseSection from './components/ShowcaseSection.vue'
import HowSection from './components/HowSection.vue'
import PricingSection from './components/PricingSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useI18n } from './i18n/index.js'

const { t } = useI18n()
</script>

<template>
  <a href="#main" class="skip">{{ t.a11y.skip }}</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <FeaturesSection />
    <AudienceSection />
    <ShowcaseSection
      :eyebrow="t.incidents.eyebrow"
      :title="t.incidents.title"
      :text="t.incidents.text"
      :bullets="t.incidents.bullets"
      image="/img/admin-incidents.webp"
      :image-alt="t.incidents.imageAlt"
      :image-height="640"
    />
    <ShowcaseSection
      id="ai"
      :eyebrow="t.ai.eyebrow"
      :title="t.ai.title"
      :text="t.ai.text"
      :bullets="t.ai.bullets"
      image="/img/res-support.webp"
      :image-alt="t.ai.imageAlt"
      reverse
      soft
    />
    <HowSection />
    <PricingSection />
    <FaqSection />
    <CtaSection />
  </main>
  <SiteFooter />
</template>

<style scoped>
.skip {
  position: absolute;
  left: 1rem;
  top: -3rem;
  z-index: 100;
  padding: 0.6rem 1rem;
  border-radius: var(--bf-radius-sm);
  background: var(--bf-navy);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.skip:focus {
  top: 0.75rem;
}
</style>
