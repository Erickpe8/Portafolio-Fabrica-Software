<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 dark:shadow-gray-800/50 shadow-md transition-colors">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="text-2xl font-['Pacifico'] text-primary dark:text-white">
        <img src="/img/fesc.png" alt="Logo FESC" class="h-10 w-auto">
      </a>

      <!-- Navegación escritorio -->
      <div class="hidden md:flex items-center space-x-8">
        <nav class="flex items-center space-x-6">
          <a
            href="#inicio"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
          >Inicio</a>
          <a
            href="#equipo"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
          >Equipo</a>
          <a
            href="#tecnologias"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
          >Tecnologías</a>
          <a
            href="#contacto"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
          >Contacto</a>
        </nav>

        <!-- Botón de tema -->
        <button
          @click="toggleTheme"
          class="ml-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-all duration-200"
          :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
        >
          <i :class="isDark ? 'ri-sun-line' : 'ri-moon-line'" class="ri-xl"></i>
        </button>
      </div>

      <!-- Controles móviles -->
      <div class="md:hidden flex items-center">
        <!-- Tema móvil -->
        <button
          @click="toggleTheme"
          class="mr-4 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-all duration-200"
          :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
        >
          <i :class="isDark ? 'ri-sun-line' : 'ri-moon-line'" class="ri-xl"></i>
        </button>

        <!-- Botón hamburguesa -->
        <button
          @click="toggleMenu"
          class="flex flex-col gap-1 focus:outline-none"
        >
          <span class="w-6 h-0.5 bg-gray-800 dark:bg-white rounded transition-colors"></span>
          <span class="w-6 h-0.5 bg-gray-800 dark:bg-white rounded transition-colors"></span>
          <span class="w-6 h-0.5 bg-gray-800 dark:bg-white rounded transition-colors"></span>
        </button>
      </div>
    </div>

    <!-- Menú móvil -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all"
      >
        <nav class="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a
            href="#inicio"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors py-2"
          >Inicio</a>
          <a
            href="#equipo"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors py-2"
          >Equipo</a>
          <a
            href="#tecnologias"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors py-2"
          >Tecnologías</a>
          <a
            href="#contacto"
            class="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors py-2"
          >Contacto</a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

// Estados reactivos
const isMenuOpen = ref(false)
const isDark = ref(false)

// Función para alternar el menú móvil
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Función para alternar el tema
const toggleTheme = () => {
  isDark.value = !isDark.value
}

// Función para aplicar el tema al DOM
const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Función para guardar el tema en localStorage
const saveTheme = (dark) => {
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

// Función para cargar el tema desde localStorage
const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  // Si hay un tema guardado, úsalo; si no, usa la preferencia del sistema
  return savedTheme ? savedTheme === 'dark' : prefersDark
}

// Watcher para cambios en el tema
watch(isDark, (newValue) => {
  applyTheme(newValue)
  saveTheme(newValue)
})

// Inicialización al montar el componente
onMounted(() => {
  // Cargar el tema guardado o preferencia del sistema
  isDark.value = loadTheme()
  applyTheme(isDark.value)
  
  // Escuchar cambios en la preferencia del sistema
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = (e) => {
    // Solo cambiar si no hay tema guardado manualmente
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
    }
  }
  
  mediaQuery.addEventListener('change', handleChange)
  
  // Cleanup cuando el componente se desmonte
  return () => {
    mediaQuery.removeEventListener('change', handleChange)
  }
})
</script>

<style lang="css" scoped>

</style>