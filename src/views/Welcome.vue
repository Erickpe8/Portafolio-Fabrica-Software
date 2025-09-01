<template>
  <div class="p-0 m-0 min-h-screen">
    <Header/> 
    <div class="flex-grow">
       <Hero/>
       <!-- seccion de los equipos -->
       <TeamTabs/>
       <TeamTextSection/>
       <TeamLaravelVue v-if="teamStore.isTeamActive('team1')" />
       <TeamNetAngular v-if="teamStore.isTeamActive('team2')" />
       
       <!-- seccion de las tecnologias -->
       <TechTabs/>
       <TechTextSection/>
      
      <!-- Renderizado condicional basado en el tab de tecnología activo -->
      <TechLaravelVue v-if="teamStore.isTechActive('tech1')" />
      <TechNetAngular v-if="teamStore.isTechActive('tech2')" />
    </div>
    <Footer/>
    <Dev/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'; 
import Hero from '@/components/Hero.vue'; 

// Team components
import TeamTabs from '@/components/Teams/TeamTabs.vue';
import TeamTextSection from '@/components/Teams/TeamTextSection.vue';
import TeamLaravelVue from '@/components/Teams/TeamLaravelVue.vue';
import TeamNetAngular from '@/components/Teams/TeamNetAngular.vue'

// Tech components
import TechTabs from '@/components/Technologies/TechTabs.vue';
import TechTextSection from '@/components/Technologies/TechTextSection.vue';
import TechLaravelVue from '@/components/Technologies/TechLaravelVue.vue';
import TechNetAngular from '@/components/Technologies/TechNetAngular.vue'

import Footer from '@/components/Footer.vue';
import Dev from '@/components/ModalDev.vue';

// Pinia store
import { useTeamStore } from '@/stores/teamStore'

const teamStore = useTeamStore()
</script>

<style lang="css" scoped>

</style>