<template>
    <footer id="contacto" class="bg-gray-900 text-white py-12 transition-colors">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">{{ institution.name }}</h3>
                    <p class="text-gray-400 mb-4">{{ institution.description }}</p>
                    <p class="text-gray-400">{{ institution.founding }}</p>
                </div>

                <!-- Sección Contacto -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Contacto</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li v-for="(contact, index) in contacts" :key="index" class="flex items-center">
                            <i :class="`${contact.icon} mr-2`"></i> {{ contact.info }}
                        </li>
                    </ul>
                </div>

                <!-- Sección Redes Sociales y Newsletter -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Síguenos</h3>
                    <div class="flex space-x-4">
                        <a v-for="social in socialMedia" :key="social.name" :href="social.url" target="_blank"
                            rel="noopener noreferrer"
                            class="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-primary rounded-full transition-colors"
                            :aria-label="`${social.name} de ${institution.name}`">
                            <i :class="social.icon"></i>
                        </a>
                    </div>

                    <div class="mt-6">
                        <h4 class="text-lg font-semibold mb-3">Suscríbete a nuestro boletín</h4>
                        <div class="flex flex-col sm:flex-row max-w-md gap-2 sm:gap-0">
                            <input v-model="email" type="email" placeholder="Tu correo electrónico"
                                class="w-full sm:flex-grow bg-gray-800 text-white px-4 py-1.5 rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent border-none h-9 text-sm">
                            <button type="submit"
                                class="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-lg sm:rounded-l-none whitespace-nowrap transition-colors duration-200 h-9 flex items-center justify-center text-sm">
                                <i class="ri-send-plane-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>&copy; {{ currentYear }} {{ institution.name }} - Todos los derechos reservados</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

// Datos reactivos
const institution = {
    name: 'FESC',
    description: 'Fundación de Estudios Superiores Comfanorte',
    founding: 'Formando profesionales en tecnología desde 1995.'
    };

const contacts = [
    { icon: 'ri-map-pin-line', info: 'Av. 5 #15-27, Cúcuta, Colombia' },
    { icon: 'ri-phone-line', info: '+57 607 5829292' },
    { icon: 'ri-mail-line', info: 'info@fesc.edu.co' }
];

const socialMedia = [
    { name: 'Facebook', icon: 'ri-facebook-fill', url: 'https://www.facebook.com/share/1RpuYMZhxH/' },
    { name: 'Twitter', icon: 'ri-twitter-x-line', url: 'https://x.com/fesc_superior?t=0Y8V_kwiq_uXHSHtqYS-yQ&s=09' },
    { name: 'Instagram', icon: 'ri-instagram-fill', url: 'https://www.instagram.com/fesc.edusuperior/' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/company/fesc-educaci%C3%B3n-superior/about/' }
];

const email = ref('');

const currentYear = "2025"
</script>

<style lang="css" scoped>

</style>