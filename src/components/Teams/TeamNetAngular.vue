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
                            <img src="@/assets/img/team_2/Juan_Sebastian_Galindo_Lizcano.jpeg"                            
                                alt="Juan Sebastian Galindo" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Juan Sebastian Galindo</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Lider de Desarrollo</p>
                    </div>
                </div>

                <!-- Nodos secundarios (Líderes de equipo) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('frontend')">
                        <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="@/assets/img/team_2/walter_esteban_velasco_contreras.jpeg"
                                alt="Walter Esteban Velasco" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Walter Esteban Velasco</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">Backend</p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Quinto Semestre</p>
                    </div>

                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('backend')">
                        <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="@/assets/img/team_2/marlen_andrea_ortega_maldonado.jpeg"
                                alt="Marlen Andrea Ortega" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Marlen Andrea Ortega</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">Backend</p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Quinto Semestre</p>
                    </div>

                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('ux')">
                        <div class="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="@/assets/img/team_2/juan_sebastian_gallego_carrillo.jpeg"
                                alt="Juan Sebastian Gallego" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Juan Sebastian Gallego</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">UX/UI</p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Quinto Semestre</p>
                    </div>
                </div>

                <!-- Nodos terciarios (Desarrolladores) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="org-chart-node bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-center cursor-pointer transition-all hover:shadow-xl"
                        @click="showDeveloper('dev1')">
                        <div class="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                            <img src="@/assets/img/team_2/michelt_alexandra_sanchez_martinez.jpeg"
                                alt="Michelt Alexandra Sanchez" class="w-full h-full object-cover object-top">
                        </div>
                        <h3 class="font-semibold text-gray-900 dark:text-white">Michelt Alexandra Sanchez</h3>
                        <p class="text-base text-gray-600 dark:text-gray-400">Analista de Requerimientos </p>
                        <p class="font-semibold text-gray-900 dark:text-gray-400">Practicante Sena</p>
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
        name: 'Juan Sebastian Galindo L.',
        position: 'Lider de Desarrollo',
        photo: new URL('@/assets/img/team_2/Juan_Sebastian_Galindo_Lizcano.jpeg', import.meta.url).href,
        skills: ['Angular', '.NET', 'JavaScript', 'HTML/CSS', 'Figma', 'C#', 'DevOps'],
        experience: 'Desarrollador de software desde 2014. Lider técnico y ejecutor de proyectos de software. Candidato a MSc. ENg en Inteligencia Artificial',
        projects: [
            {
                name: 'Creación y migración al nuevo sistema de matriculas',
                url: '#'
            },
            {
                name: 'Proyecto plataforma de gestión de evaluaciones a proveedores',
                url: '#'
            },
            {
                name: 'Gestión de infraestructura de servidores de Ingenieria de Software',
                url: '#'
            },
            {
                name: 'Proyecto Gestión y Evaluación de resultados de aprendizaje (RA) ',
                url: '#'
            },
            {
                name: 'Automatizaciones y plataforma de reportes',
                url: '#'
            },
            {
                name: 'Microservicio de envio de mails',
                url: '#'
            }
        ]
    },
    'frontend': {
        name: 'Walter Esteban Velasco',
        position: 'Backend',
        photo: new URL('@/assets/img/team_2/walter_esteban_velasco_contreras.jpeg', import.meta.url).href,
        skills: ['C#', 'Mongodb', 'Postgresql', 'Tailwind CSS', 'Figma'],
        experience: '6 meses de desarrollo Backend, con enfasis en la estructuracion y funcionalidad de los Proyectos.',
        projects: [
            {
                name: 'Microservicio de envio de mails',
                url: 'https://github.com/waldooCreator/EmailsP.git'
            }
        ]
    },
    'backend': {
        name: 'Marlen Andrea Ortega',
        position: 'Backend / Analista de datos',
        photo: new URL('@/assets/img/team_2/marlen_andrea_ortega_maldonado.jpeg', import.meta.url).href,
        skills: ['Python', 'PostgreSQL', 'Figma', 'Php', 'Laravel', 'Power BI', 'C#'],
        experience: '6 meses de experiencia en desarrollo backend. Especializada en análisis de datos con Pandas, consumo de APIs con Laravel, creación de crud en .NET, manejo de bases de datos relacionales (PostgreSQL) y conocimientos en diseño de interfaces (Figma).',
        projects: [
            {
                name: 'Análisis de datos encuesta a docentes (SIPAES)',
                url: '#'
            }
        ]
    },
    'ux': {
        name: 'Juan Sebastian Gallego',
        position: 'UX/UI',
        photo: new URL('@/assets/img/team_2/juan_sebastian_gallego_carrillo.jpeg', import.meta.url).href,
        skills: ['HTML/CSS', 'JavaScript', 'TailWind', 'Selenium', 'C#'],
        experience: '9 meses de desarrollo de proyectos dependientes e independientes.',
        projects: [
            {
                name: 'Diseño de prototipo en Figma de la pagina de Reportes.',
                url: ''
            }
        ]
    },
    'dev1': {
        name: 'Michelt Alexandra Sanchez',
        position: 'Analista de Requerimientos',
        photo: new URL('@/assets/img/team_2/michelt_alexandra_sanchez_martinez.jpeg', import.meta.url).href,
        skills: ['Figma', 'HTML/CSS', 'Draw'],
        experience: '1 año de experiencia en la toma de requerimientos. optimización de rendimiento.',
        projects: [
            {
                name: 'Proyecto plataforma de gestión de evaluaciones a proveedores',
                url: '#'
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