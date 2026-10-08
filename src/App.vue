<script setup>
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import LogoBadge from './components/LogoBadge.vue'
import ThemeSlider from './components/ThemeSlider.vue'
import FooterBar from './components/FooterBar.vue'

const route = useRoute()
</script>

<template>
  <main>
    <NavBar />
    <LogoBadge />
    <RouterView />
    <ThemeSlider v-if="route.name !== 'not-found'" />
    <FooterBar />
  </main>
</template>
