<template>
  <div v-if="modalStore.isOpen" class="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-lg mx-4 transition-colors relative">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          {{ modalStore.currentDeveloper.name }}
        </h3>
        <button @click="modalStore.closeModal"
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <i class="ri-close-line ri-lg"></i>
        </button>
      </div>

      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-shrink-0 relative">
          <div
            class="w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0 cursor-pointer transition-all duration-300 hover:shadow-lg"
            @mouseenter="isImageExpanded = true" @mouseleave="isImageExpanded = false">
            <img :src="modalStore.currentDeveloper.photo" :alt="modalStore.currentDeveloper.name"
              class="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110">
          </div>

          <!-- Tooltip indicador -->
          <!-- <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 opacity-70">
            Hover para ampliar
          </div> -->
        </div>

        <div class="flex-grow">
          <h4 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
            {{ modalStore.currentDeveloper.position }}
          </h4>

          <div class="mb-4">
            <h5 class="font-medium text-gray-900 dark:text-white mb-2">Habilidades</h5>
            <div class="flex flex-wrap gap-2">
              <span v-for="(skill, index) in modalStore.currentDeveloper.skills" :key="index"
                class="px-3 py-1 bg-gray-200 text-black dark:bg-gray-700 rounded-full text-sm">
                {{ skill }}
              </span>
            </div>
          </div>

          <div class="space-y-3">
            <div>
              <h5 class="font-medium text-gray-900 dark:text-white mb-2">Experiencia</h5>
              <p class="text-gray-600 dark:text-gray-400">{{ modalStore.currentDeveloper.experience }}</p>
            </div>

            <div>
              <h5 class="font-medium text-gray-900 dark:text-white mb-2">Proyectos En Desarrollo</h5>
              <ul class="list-disc list-inside text-blue-600 dark:text-blue-400 space-y-1">
                <li v-for="(project, index) in modalStore.currentDeveloper.projects" :key="index">
                  <a :href="project.url" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline text-sm">
                    {{ project.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center">
        <button @click="modalStore.closeModal"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Cerrar
        </button>
      </div>

      <!-- Imagen expandida overlay -->
      <div v-if="isImageExpanded"
        class="absolute inset-6 bg-black/90 rounded-lg flex items-center justify-center z-10 transition-opacity duration-300 overflow-hidden"
        @mouseenter="isImageExpanded = true" @mouseleave="isImageExpanded = false">
        <div class="relative w-full h-full flex items-center justify-center p-4">
          <img :src="modalStore.currentDeveloper.photo" :alt="modalStore.currentDeveloper.name"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            style="max-width: calc(100% - 2rem); max-height: calc(100% - 2rem);">
          <div class="absolute top-4 right-4 text-white text-sm bg-black/50 px-2 py-1 rounded">
            {{ modalStore.currentDeveloper.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore()
const isImageExpanded = ref(false)
</script>
