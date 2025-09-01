<template>
    <div class="py-2 bg-white dark:bg-gray-900 transition-colors">
        <div class="container mx-auto px-4">
            <div class="text-center mb-2">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nuestro Equipo</h2>
                <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{{ teamDescription }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// Datos del equipo
const teamDescription = 'Contamos con un equipo multidisciplinario de profesionales altamente capacitados en diferentes tecnologías y frameworks.';
</script>

<style lang="css" scoped>

</style>