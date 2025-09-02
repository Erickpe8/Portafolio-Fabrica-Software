<template>
    <div class="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div class="container mx-auto px-4">
        <div class="org-chart relative max-w-5xl mx-auto">
        <!-- Líneas de conexión -->
        <div
            class="org-chart-line hidden md:block absolute top-[140px] left-1/2 w-0.5 h-16 transform -translate-x-1/2">
        </div>
        <div class="org-chart-line hidden md:block absolute top-[156px] left-[25%] w-[50%] h-0.5"></div>
        <div class="org-chart-line hidden md:block absolute top-[156px] left-[25%] w-0.5 h-16"></div>
        <div class="org-chart-line hidden md:block absolute top-[156px] left-[75%] w-0.5 h-16"></div>

        <!-- Nodo principal (Líder) -->
        <div class="flex justify-center mb-16 relative z-20">
            <div
                class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64 text-center cursor-pointer transition-all hover:shadow-xl"
                @click="showDeveloper('lider')">
                <div class="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
                    <img
                        src="@/assets/img/team_2/Juan_Sebastian_Galindo_Lizcano.jpeg"
                        alt="Juan Sebastian Galindo"
                        class="w-full h-full object-cover object-top">
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Juan Sebastian Galindo</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Líder de Desarrollo</p>
            </div>
        </div>

        <!-- Miembros del equipo (solo Michelt y Yeison) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <!-- Michelt Sanchez-->
            <div
                class="org-chart-node bg-white dark:bg-gray-800 rounded-2xl shadow p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                @click="showDeveloper('michelt')">
                    <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                        <img
                            src="@/assets/img/team_2/michelt_alexandra_sanchez_martinez.jpeg"
                            alt="Michelt Alexandra Sánchez"
                            class="w-full h-full object-cover object-top" />
                    </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Michelt Alexandra Sánchez</h3>
                <p class="text-base text-gray-600 dark:text-gray-400">Analista de Requerimientos</p>
            </div>

            <!-- Yeison Rolon -->
            <div
                class="org-chart-node bg-white dark:bg-gray-800 rounded-2xl shadow p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                @click="showDeveloper('yeison')">
                    <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                    <img
                        src="/img/fesc.png"
                        alt="Yeison Rolon"
                        class="w-full h-full object-cover object-top" />
                    </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Yeison Eduard Rolón</h3>
                <p class="text-base text-gray-600 dark:text-gray-400">Desarrollador de Software</p>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore();

// Datos del equipo (Galindo + Michelt + Yeison)
const developerData = ref({
    'lider': {
        name: 'Juan Sebastian Galindo L.',
        position: 'Líder de Desarrollo',
        photo: new URL('@/assets/img/team_2/Juan_Sebastian_Galindo_Lizcano.jpeg', import.meta.url).href,
        skills: ['Angular', '.NET', 'JavaScript', 'HTML/CSS', 'Figma', 'C#', 'DevOps'],
        experience: 'Desarrollador desde 2014. Líder técnico y ejecutor de proyectos.',
        projects: [
        { name: 'Nuevo sistema de matrículas', url: '#' },
        { name: 'Gestión de resultados de aprendizaje (RA)', url: '#' }
        ]
    },

    'michelt': {
        name: 'Michelt Alexandra Sánchez',
        position: 'Analista de Requerimientos',
        photo: new URL('@/assets/img/team_2/michelt_alexandra_sanchez_martinez.jpeg', import.meta.url).href,
        skills: ['Levantamiento de requerimientos', 'Figma', 'Documentación'],
        experience: '1 año de experiencia en análisis funcional y apoyo de proyectos.',
        projects: [
        { name: 'Plataforma de evaluación a proveedores', url: '#' }
        ]
    },

    'yeison': {
        name: 'Yeison Rolon',
        position: 'Desarrollador',
        photo: '/img/fesc.png', // Cambiar la foto de Yeison
        skills: ['.NET', 'Angular', 'SQL'],
        experience: 'Soporte y construcción de módulos de software.',
        projects: [
        { name: 'Módulos de matrículas', url: '#' }
        ]
    }
    });

    const showDeveloper = (developerId) => {
    const developer = developerData.value[developerId]
    modalStore.openModal(developer)
    }
</script>

<style lang="css" scoped></style>
