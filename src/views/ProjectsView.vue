<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import projects from '../data/projects.json'

const MAX_LENGTH = 100
const DEFAULT_IMAGE = '/assets/images/default.png'

// Het project waarvan de volledige beschrijving in de modal staat
const activeProject = ref(null)

// Knipt af op een woord, zodat we niet midden in een woord eindigen
function truncateOnWord(text, maxLength = MAX_LENGTH) {
  if (text.length <= maxLength) {
    return text
  }
  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  return lastSpace !== -1 ? truncated.slice(0, lastSpace) : truncated
}

function skillColumns(project) {
  return Math.min(2, (project.skills ?? []).length)
}

// Niet meer scrollen zolang de modal open is
watch(activeProject, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <h1>Projects</h1>

  <div v-if="projects.length === 0" class="errors">
    <p>Geen projecten gevonden!</p>
  </div>

  <div class="project-grid">
    <div v-for="project in projects" :key="project.id" class="project">
      <div class="project-image">
        <img
          :src="project.image || DEFAULT_IMAGE"
          :alt="project.image ? project.title : 'Standaard projectafbeelding'"
        >
      </div>

      <div class="project-details">
        <div class="project-title">
          <h2>{{ project.title }}</h2>
        </div>

        <div class="project-description">
          <div class="description-text">
            <span class="short-description">{{ truncateOnWord(project.description) }}</span>
          </div>
          <button
            v-if="project.description.length > MAX_LENGTH"
            class="toggle-text"
            type="button"
            @click="activeProject = project"
          >
            Lees meer
          </button>
        </div>

        <div class="project-actions">
          <div class="project-skill-container" :class="'columns-' + skillColumns(project)">
            <div v-if="!project.skills || project.skills.length === 0" class="errors">
              <p>Geen skills geselecteerd!</p>
            </div>
            <template v-else>
              <div v-for="skill in project.skills" :key="skill" class="project-skill">
                {{ skill }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal voor de volledige beschrijving -->
  <div class="modal-overlay" :class="{ active: activeProject }" @click="activeProject = null"></div>
  <div
    class="full-description-modal"
    :class="{ active: activeProject }"
    role="dialog"
    aria-modal="true"
    :aria-hidden="true"
  >
    <span class="full-description">{{ activeProject?.description }}</span>
    <button class="hide-modal" type="button" @click="activeProject = null">Lees minder</button>
  </div>
</template>
