<script setup>
import { useTheme } from '../composables/useTheme'

const { isLight, setTheme } = useTheme()

// Checkbox aangevinkt = light, anders dark
function onChange(event) {
  setTheme(event.target.checked ? 'light' : 'dark')
}
</script>

<template>
  <div class="toggle-slider-theme">
    <input
      id="theme-toggle"
      class="theme-toggle"
      type="checkbox"
      :checked="isLight"
      @change="onChange"
    >
    <label for="theme-toggle" aria-label="Wissel tussen dark en light thema">
      <span class="thumb">
        <i class="fa-solid fa-moon"></i>
        <i class="fa-solid fa-sun"></i>
      </span>
    </label>
  </div>
</template>
