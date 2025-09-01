<template>
    <div id="inicio" class="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div class="container mx-auto px-4">
            <div class="flex flex-col items-center">
                <div class="shimmer-border mb-8">
                    <div
                        class="w-64 h-80 md:w-80 md:h-96 overflow-hidden bg-white dark:bg-gray-700 rounded-xl shadow-lg">
                        <img :src="profile.image" :alt="profile.altText" class="w-full h-full object-cover object-top">
                    </div>
                </div>

                <div class="text-center mb-8">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{{ profile.name }}</h1>
                    <p class="text-xl text-gray-600 dark:text-gray-300">{{ profile.position }}</p>
                </div>

                <div class="max-w-2xl text-center">
                    <p class="text-gray-700 dark:text-gray-300 mb-6">{{ profile.description }}</p>

                    <div class="flex flex-wrap justify-center gap-4">
                        <button
                            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">
                            <i class="ri-user-line"></i> Ver perfil completo
                        </button>
                        <button
                            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                            <i class="ri-mail-line"></i> Contactar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// Datos del perfil reactivos
const profile = ref({
  name: 'Jesus Antonio Figueroa Guerrero',
  position: 'Director de Desarrollo',
  description: 'Líder de equipo con más de 10 años de experiencia en desarrollo web y móvil. Especializado en arquitectura de software y gestión de equipos ágiles. Apasionado por las nuevas tecnologías y la innovación.',
  image: new URL('../assets/img/team_1/Jesus_Antonio_Figueroa_Guerrero.jpeg', import.meta.url).href,
  altText: 'Director de Desarrollo'
});
</script>

<style lang="css" scoped>

</style>