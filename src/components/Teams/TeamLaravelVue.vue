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
                        src="@/assets/img/team_1/Jesus_Manuel_Parada.jpeg"
                        alt="Jesús Manuel Parada L."
                        class="w-full h-full object-cover object-top" />
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Jesús Manuel Parada L.</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">Líder de Desarrollo</p>
            </div>
        </div>

        <!-- Nodos secundarios (Santiago y Erick) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <!-- Santiago Rueda -->
            <div
                class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                @click="showDeveloper('santiago')">
                <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                    <img
                        src="@/assets/img/team_1/Sebastian_Rueda_Quintero.jpeg"
                        alt="Santiago Rueda Quintero"
                        class="w-full h-full object-cover object-top" />
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Santiago Rueda Quintero</h3>
                <p class="text-base text-gray-600 dark:text-gray-400">Backend</p>
            </div>

            <!-- Erick Perez -->
            <div
                class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                @click="showDeveloper('erick')">
                    <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                        <img
                            src="@/assets/img/team_1/Erick_Sebastian_Perez_Carbajal.jpeg"
                            alt="Erick Sebastian Pérez Carvajal"
                            class="w-full h-full object-cover object-top" />
                    </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Erick Sebastian Pérez Carvajal</h3>
                <p class="text-base text-gray-600 dark:text-gray-400">Backend</p>
            </div>
        </div>

        <!-- Nodos terciarios (Auxiliares: Nelly y Nick) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Nelly Cano-->
            <div
                class="org-chart-node bg-white dark:bg-gray-800 rounded-2xl shadow p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                @click="showDeveloper('nelly')">
                <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                <img
                    src="@/assets/img/team_1/Nelly_Fabiola_Cano_Oviedo.jpeg"
                    alt="Nelly Fabiola Cano Oviedo"
                    class="w-full h-full object-cover object-top" />
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Nelly Fabiola Cano Oviedo</h3>
                <p class="text-base text-gray-600 dark:text-gray-400">Auxiliar de Desarrollo</p>
            </div>

            <!-- Nick -->
            <div
                class="org-chart-node bg-white dark:bg-gray-800 rounded-2xl shadow p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                @click="showDeveloper('nick')">
                <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                <img
                    src="/img/fesc.png"
                    alt="Nick Ortega"
                    class="w-full h-full object-cover object-top" />
                </div>
                <h3 class="font-semibold text-gray-900 dark:text-white">Nick Ortega</h3>
                <p class="text-base text-gray-600 dark:text-gray-400">Auxiliar de Desarrollo</p>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();

    const developerData = ref({
    'lider': {
        name: 'Jesús Manuel Parada L.',
        position: 'Líder de Desarrollo',
        photo: new URL('@/assets/img/team_1/Jesus_Manuel_Parada.jpeg', import.meta.url).href,
        skills: ['Vue.js', 'Laravel', 'JavaScript', 'HTML/CSS', 'Ionic', 'Node.js', 'Arquitectura'],
        experience: 'Más de 10 años en desarrollo web y móvil. Arquitectura y liderazgo ágil.',
        projects: [
        { name: 'Sistema de gestión de eventos', url: 'https://sigeev.ingsoftwarefesc.com/' },
        { name: 'QR generator', url: 'https://codealchemist151.github.io/qr_creator/' }
        ]
    },

    'santiago': {
        name: 'Santiago Rueda Quintero',
        position: 'Backend',
        photo: new URL('@/assets/img/team_1/Sebastian_Rueda_Quintero.jpeg', import.meta.url).href,
        skills: ['Laravel', 'PHP', 'MySQL', 'API REST', 'Vue'],
        experience: 'Backend y arquitectura de datos.',
        projects: [
        { name: 'Pruebas y documentación Laravel', url: 'https://github.com/The-raven-god/Crud_Backend/tree/Laravel_Scramble' },
        { name: 'Pruebas automatizadas en Vue', url: 'https://github.com/The-raven-god/Crud' }
        ]
    },

    'erick': {
        name: 'Erick Sebastian Pérez Carvajal',
        position: 'Backend',
        photo: new URL('@/assets/img/team_1/Erick_Sebastian_Perez_Carbajal.jpeg', import.meta.url).href,
        skills: ['Laravel', 'Postman', 'Figma', 'Dirección de proyectos', 'Documentación'],
        experience: 'Backend con foco en Laravel y dirección de proyectos. Interés especial en documentación clara.',
        projects: [
        { name: 'SIGEEV - Sistema de gestión de eventos', url: '#' },
        { name: 'Prototipos en Figma', url: 'https://www.figma.com/proto/HWpKKVjj6T4g4R7aRmoL3S/Erick-Sebastian-Perez-Carvajal?node-id=44-355' }
        ]
    },

    'nelly': {
        name: 'Nelly Fabiola Cano Oviedo',
        position: 'Auxiliar de Desarrollo',
        photo: new URL('@/assets/img/team_1/Nelly_Fabiola_Cano_Oviedo.jpeg', import.meta.url).href,
        skills: ['Figma', 'Prototipado', 'Investigación UX', 'Tailwind CSS'],
        experience: 'Auxiliar en diseño y apoyo en prototipado.',
        projects: [
        { name: 'Diplomas (diseño en Figma)', url: 'https://www.figma.com/design/FaFqsHChJpJQyGVScAqchr/Dise%C3%B1o-diploma-para-congresos-fesc' }
        ]
    },

    'nick': {
        name: 'Nick Ortega',
        position: 'Auxiliar de Desarrollo',
        photo: '/img/fesc.png',
        skills: ['Soporte', 'Documentación', 'QA'],
        experience: 'Auxiliar de desarrollo y QA.',
        projects: [
        { name: 'Soporte a módulos de eventos', url: '#' }
        ]
    }
    });

    const showDeveloper = (developerId) => {
    const developer = developerData.value[developerId];
    if (developer) modalStore.openModal(developer);
    };
    </script>

<style lang="css" scoped></style>
