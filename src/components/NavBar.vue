<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)

// Menu sluiten na het navigeren naar een andere pagina
watch(() => route.fullPath, () => {
  open.value = false
})
</script>

<template>
  <div class="navbar">
    <button
      class="burger"
      :class="{ active: open }"
      type="button"
      aria-label="Menu"
      :aria-expanded="open"
      @click="open = !open"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-links" :class="{ show: open }" :inert="!open">
      <RouterLink to="/" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/projects" exact-active-class="active">Projects</RouterLink>
      <a target="_blank" rel="noopener" href="/assets/resume/Lucas_cv_2025.pdf">CV</a>
      <RouterLink to="/contact" exact-active-class="active">Contact</RouterLink>
    </div>
  </div>
</template>
