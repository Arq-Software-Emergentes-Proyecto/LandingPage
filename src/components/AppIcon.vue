<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 22 },
})

/* Íconos de trazo (mismo estilo lineal que la plataforma). Solo rutas SVG fijas, sin HTML dinámico. */
const PATHS = {
  wallet: ['M3 7.5A2.5 2.5 0 0 1 5.5 5H18a1 1 0 0 1 1 1v2', 'M3 7.5V18a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H5.5A2.5 2.5 0 0 1 3 7.5Z', 'M16 14.5h.01'],
  calendar: ['M7 3v3', 'M17 3v3', 'M4 9h16', 'M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z', 'M8 13h2', 'M14 13h2', 'M8 17h2'],
  flag: ['M5 21V4', 'M5 4h11l-1.5 4L16 12H5'],
  chat: ['M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z', 'M9 11h.01', 'M12 11h.01', 'M15 11h.01'],
  megaphone: ['M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1Z', 'M16 9a4 4 0 0 1 0 6', 'M19 6a8 8 0 0 1 0 12'],
  users: ['M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1', 'M9.5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M21 19v-1a4 4 0 0 0-3-3.9', 'M15.5 4.2a3 3 0 0 1 0 5.6'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6L6 18'],
  chevron: ['M6 9l6 6 6-6'],
  sparkle: ['M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z', 'M19 16l.7 1.8L21.5 18.5l-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7L19 16Z'],
  building: ['M4 21h16', 'M6 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16', 'M15 9h3a1 1 0 0 1 1 1v11', 'M9 8h2', 'M9 12h2', 'M9 16h2'],
  home: ['M4 11l8-7 8 7', 'M6 10v10h12V10', 'M10 20v-5h4v5'],
}

const paths = computed(() => PATHS[props.name] ?? [])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>
