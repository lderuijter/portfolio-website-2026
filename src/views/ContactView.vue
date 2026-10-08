<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

// EmailJS gegevens: zijn publiek (client-side), via .env te overschrijven
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'qAY-ygZ_W0tSdtu_X'
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ojbbukn'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ol5wxtq'

// Maximaal 1 bericht per uur
const COOLDOWN_MS = 3600 * 1000
const STORAGE_KEY = 'last_form_submit'

// Velden die verplicht zijn in het contactformulier
const requiredFields = {
  email: 'Email adres is verplicht!',
  name: 'Naam is verplicht!',
  phoneNumber: 'Telefoonnummer is verplicht!',
  message: 'Bericht is verplicht!',
}

const form = reactive({ email: '', name: '', phoneNumber: '', message: '' })
const errors = ref([])
const sending = ref(false)

function getLastSubmit() {
  try {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0
  } catch {
    return 0
  }
}

function setLastSubmit(time) {
  try {
    localStorage.setItem(STORAGE_KEY, String(time))
  } catch {
    // opslaan mislukt, de cooldown werkt dan niet
  }
}

function validate() {
  const found = []

  // Controleer of de gebruiker te snel opnieuw probeert te verzenden
  const elapsed = Date.now() - getLastSubmit()
  if (elapsed < COOLDOWN_MS) {
    const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 60000)
    found.push(`Je kunt slechts één bericht per uur verzenden. Probeer het over ${remaining} minuten opnieuw.`)
    return found
  }

  // Controleer of alle verplichte velden ingevuld zijn
  for (const [field, message] of Object.entries(requiredFields)) {
    if (!String(form[field]).trim()) {
      found.push(message)
    }
  }

  return found
}

async function submit() {
  errors.value = validate()
  if (errors.value.length > 0) {
    return
  }

  sending.value = true
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...form }, { publicKey: PUBLIC_KEY })
    // Alleen na een gelukte verzending de cooldown starten
    setLastSubmit(Date.now())
    alert('Bericht succesvol verzonden!')
    Object.assign(form, { email: '', name: '', phoneNumber: '', message: '' })
  } catch (err) {
    console.error(err)
    alert('Er is een fout opgetreden. Het bericht is niet verzonden!')
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <h1>Contact</h1>

  <div class="main-contact-form-container">
    <form id="contact-form" class="form-element contact-page" @submit.prevent="submit">
      <div class="inputs-container contact-page">
        <div v-if="errors.length > 0" class="errors contact-page">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>

        <label class="label-container">
          <span class="icon-container">
            <i class="fa-regular fa-envelope"></i>
          </span>
          <input v-model="form.email" class="email-input" type="email" name="email" placeholder="Email" required>
        </label>

        <label class="label-container">
          <span class="icon-container">
            <i class="fa-solid fa-signature"></i>
          </span>
          <input v-model="form.name" class="name-input" type="text" name="name" placeholder="Naam" required>
        </label>

        <label class="label-container">
          <span class="icon-container">
            <i class="fa-solid fa-phone"></i>
          </span>
          <input v-model="form.phoneNumber" class="phone-number-input" type="number" name="phoneNumber" placeholder="Telefoonnummer" required>
        </label>

        <label class="label-container">
          <span class="icon-container">
            <i class="fa-regular fa-message"></i>
          </span>
          <textarea v-model="form.message" class="message-input" name="message" placeholder="Bericht" required></textarea>
        </label>

        <button class="create-button contact-page" type="submit" :disabled="sending">
          {{ sending ? 'Verzenden...' : 'Verzenden' }}
        </button>
      </div>
    </form>
  </div>
</template>
