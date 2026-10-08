<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import projects from '../data/projects.json'

const MAX_LENGTH = 100
const DEFAULT_IMAGE = '/assets/images/default.png'

// isOpen bepaalt of de modal zichtbaar is, modalProject blijft staan tijdens het wegfaden
const isOpen = ref(false)
const modalProject = ref(null)

function openModal(project) {
  modalProject.value = project
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

// Knipt af op een woord en zet er "…" achter
function truncateOnWord(text, maxLength = MAX_LENGTH) {
  if (text.length <= maxLength) {
    return text
  }

  let truncated = text.slice(0, maxLength)

  // Zit het afkappunt midden in een woord? Ga dan terug naar de laatste spatie
  if (!/\s/.test(text[maxLength])) {
    const lastSpace = truncated.lastIndexOf(' ')
    if (lastSpace !== -1) {
      truncated = truncated.slice(0, lastSpace)
    }
  }

  // Losse leestekens aan het eind weghalen voor de puntjes
  return truncated.replace(/[\s,.;:!?-]+$/, '') + '…'
}

function skillColumns(project) {
  return Math.min(2, (project.skills ?? []).length)
}

// Niet meer scrollen zolang de modal open is
watch(isOpen, (value) => {
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
              @click="openModal(project)"
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
  <div class="modal-overlay" :class="{ active: isOpen }" @click="closeModal"></div>
  <div
      class="full-description-modal"
      :class="{ active: isOpen }"
      role="dialog"
      aria-modal="true"
      :aria-hidden="!isOpen"
      :inert="!isOpen"
  >
    <span class="full-description">{{ modalProject?.description }}</span>
    <button class="hide-modal" type="button" @click="closeModal">Lees minder</button>
  </div>
</template>