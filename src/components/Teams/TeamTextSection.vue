<template>
    <div class="py-2 bg-white dark:bg-gray-900 transition-colors">
        <div class="container mx-auto px-4">
        <div class="text-center mb-2">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestro Equipo
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ teamDescription }}
            </p>
        </div>
        </div>
    </div>
    </template>

    <script setup>
    import { computed } from 'vue'
    import { useTeamStore } from '@/stores/teamStore'

    const teamStore = useTeamStore()

    // Descripción dinámica según la pestaña activa
    const teamDescription = computed(() => {
    if (teamStore.isTeamActive('team1')) {
        return 'El equipo de Proyectos Externos, liderado por el Ing. Manuel, se especializa en diseñar, construir y mantener soluciones que impactan directamente a nuestros clientes y aliados estratégicos. Este grupo combina experiencia técnica con un enfoque práctico en la gestión de proyectos, garantizando resultados de calidad y un alto nivel de satisfacción del usuario.'
    }
    if (teamStore.isTeamActive('team2')) {
        return 'El equipo de Proyectos Internos, bajo la dirección del Ing. Galindo, está enfocado en el desarrollo de herramientas y plataformas que fortalecen la infraestructura tecnológica de la institución. Su misión es mejorar continuamente los procesos internos, optimizar recursos y asegurar que la tecnología respalde de manera eficiente las metas académicas y administrativas.'
    }
    return 'Contamos con un equipo multidisciplinario de profesionales altamente capacitados en diferentes tecnologías y frameworks, capaces de adaptarse a los retos de proyectos internos y externos con creatividad y compromiso.'
    })
</script>
