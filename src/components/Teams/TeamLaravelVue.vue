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
                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('lider')">
                        <div class="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="../../assets/img/team_1/Jesus_Manuel_Parada.jpeg" alt="Jesus Manuel Parada L."
                                class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Jesus Manuel Parada L.</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Lider de Desarrollo</p>
                    </div>
                </div>

                <!-- Nodos secundarios (Líderes de equipo) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('frontend')">
                        <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="../../assets/img/team_1/Erick_Sebastian_Perez_Carbajal.jpeg"
                                alt="Erick Sebastian Perez Carbajal" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Erick Sebastian Perez Carbajal</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">Frontend</p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Quinto Semestre</p>
                    </div>

                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('backend')">
                        <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="../../assets/img/team_1/Sebastian_Rueda_Quintero.jpeg"
                                alt="Sebastian Rueda Quintero" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Santiago Rueda Quintero</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">Backend</p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Quinto Semestre</p>
                    </div>

                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('ux')">
                        <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="../../assets/img/team_1/Nelly_Fabiola_Cano_Oviedo.jpeg"
                                alt="Nelly Fabiola Cano Oviedo" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Nelly Fabiola Cano Oviedo</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">UX/UI</p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Segundo Semestre </p>
                    </div>
                </div>

                <!-- Nodos terciarios (Desarrolladores) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('dev1')">
                        <div class="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="../../assets/img/team_1/Maria_Jose_Prada_Bastos.jpeg"
                                alt="Maria Jose Prada Bastos" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Maria Jose Prada Bastos</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">Analista de Requerimientos </p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Primer Semestre </p>
                    </div>

                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('dev2')">
                        <div class="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="../../assets/img/team_1/Mayre_Alejandra_Vargas_Ramirez.jpeg"
                                alt="Mayre Alejandra Vargas Ramirez" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Mayre Alejandra Vargas</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">Analista de Requerimientos </p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Primer Semestre </p>
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

// Datos predefinidos para los desarrolladores existentes
const developerData = ref({
    'lider': {
        name: 'Jesus Manuel Parada L.',
        position: 'Lider de Desarrollo',
        photo: new URL('../../assets/img/team_1/Jesus_Manuel_Parada.jpeg', import.meta.url).href,
        skills: ['Vue.js', 'Laravel', 'JavaScript', 'HTML/CSS', 'Figma', 'Ionic', 'Node.js'],
        experience: 'Más de 10 años de experiencia en desarrollo web y móvil. Especializado en arquitectura de software y gestión de equipos ágiles.',
        projects: [
            {
                name: 'sistema de gestión de eventos',
                url: 'https://sigeev.ingsoftwarefesc.com/'
            },
            {
                name: 'Sistema de generacion de Qr',
                url: 'https://codealchemist151.github.io/qr_creator/'
            },
            {
                name: 'Diseño en figma sistema plataforma de eventos',
                url: 'https://www.figma.com/design/852t1PktGgTZ6i6VSrOnlF/Proyectando?node-id=0-1&p=f&t=0HN1d7aDKVZiFJ4O-0'
            },
            {
                name: 'Sistema para el control de practicas empresariales',
                url: ''
            },
            {
                name: 'Apoyo en la calificacion de PPA',
                url: 'https://docs.google.com/document/d/1qd6L_nbxjdgLmmmSpeaHwgSU3ij2qd6Ab5JI6HVdjnw/edit?tab=t.0'
            }
        ]
    },
    'frontend': {
        name: 'Erick Sebastian Perez Carvajal',
        position: 'Frontend',
        photo: new URL('../../assets/img/team_1/Erick_Sebastian_Perez_Carbajal.jpeg', import.meta.url).href,
        skills: ['Vue.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Figma', 'Power BI'],
        experience: '4 meses de experiencia en desarrollo frontend. Especializada en interfaces de usuario y experiencia de usuario.',
        projects: [
            {
                name: 'Prototipos de sistema de gestión de eventos',
                url: 'https://docs.google.com/forms/d/1sBMMpTMnTOZfEXdGeNSlYnFTpGLugRT0clAa5SNvb2Y/edit'
            },
            {
                name: 'Análisis de datos en Power BI',
                url: ''
            },
            {
                name: 'Primera versión de diseño en Figma sistema de eventos',
                url: 'https://www.figma.com/proto/HWpKKVjj6T4g4R7aRmoL3S/Erick-Sebastian-Perez-Carvajal?node-id=44-355'
            }
        ]
    },
    'backend': {
        name: 'Santiago Rueda Quintero',
        position: 'Backend',
        photo: new URL('../../assets/img/team_1/Sebastian_Rueda_Quintero.jpeg', import.meta.url).href,
        skills: ['Laravel', 'PHP', 'MySQL', 'API REST', 'Vue'],
        experience: '3 meses de experiencia en desarrollo backend. Especializado en arquitectura de sistemas y bases de datos.',
           projects: [
            {
                name: 'Desarrollo y automatizacion de pruebas Laravel',
                url: 'https://github.com/The-raven-god/Crud_Backend/tree/Laravel_Scramble'
            },
            {
                name: 'Desarrollo de pruebas autoatizadas en vue',
                url: 'https://github.com/The-raven-god/Crud'
            }
        ]
    },
    'ux': {
        name: 'Nelly Fabiola Cano Oviedo',
        position: 'UX/UI',
        photo: new URL('../../assets/img/team_1/Nelly_Fabiola_Cano_Oviedo.jpeg', import.meta.url).href,
        skills: ['Figma', 'Sketch', 'Tailwindcss', 'Prototipado'],
        experience: '3 meses de experiencia en diseño UX/UI. Especializada en investigación de usuarios y diseño centrado en el usuario.',
        projects: [
            {
                name: 'Diseño de prototipo en figma de diplomas',
                url: 'https://www.figma.com/design/FaFqsHChJpJQyGVScAqchr/Dise%C3%B1o-diploma-para-congresos-fesc?node-id=0-1&p=f&t=o00yToom8wT9Ec2w-0'
            },
            {
                name: 'Maquetación en HTML y CSS de diplomas (En desarrollo)',
                url: ''
            }
        ]
    },
    'dev1': {
        name: 'Maria Jose Prada Bastos',
        position: 'Analista de Requerimientos',
        photo: new URL('../../assets/img/team_1/Maria_Jose_Prada_Bastos.jpeg', import.meta.url).href,
        skills: ['Figma', 'HTML/CSS', 'Draw'],
        experience: '2 meses de experiencia en la toma de requerimientos. optimización de rendimiento.',
        projects: [
            {
                name: 'Diagrama de flujo sistema de gestión de eventos',
                url: ''
            }
        ]
    },
    'dev2': {
        name: 'Mayre Alejandra Vargas Ramirez',
        position: 'Analista de Requerimientos',
        photo: new URL('../../assets/img/team_1/Mayre_Alejandra_Vargas_Ramirez.jpeg', import.meta.url).href,
        skills: ['Figma', 'Draw'],
        experience: '2 meses de experiencia en la toma de requerimientos.',
        projects: [ {
                name: 'Diagrama de flujo sistema de gestión de eventos',
                url: ''
            }
        ]
    }
});

const showDeveloper = (developerId) => {
    const developer = developerData.value[developerId]
    modalStore.openModal(developer)
}
</script>

<style lang="css" scoped></style>