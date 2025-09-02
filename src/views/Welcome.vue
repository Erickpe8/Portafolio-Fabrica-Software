<template>
  <div class="p-0 m-0 min-h-screen">
    <Header/> 
    <div class="flex-grow">
      <Hero/>

      <!-- seccion de los equipos -->
      <TeamTabs/>
      <TeamTextSection/>

      <!-- team1 = Ing. Manuel (Externos) -> .NET/Angular -->
      <TeamNetAngular v-if="teamStore.isTeamActive('team1')" />
      <TeamLaravelVue v-else /> <!-- team2 = Ing. Galindo (Internos) -> Laravel/Vue -->

      <!-- seccion de las tecnologias -->
      <TechTabs/>
      <TechTextSection/>

      <!-- tech1 = .NET/Angular ; tech2 = Laravel/Vue -->
      <TechNetAngular v-if="teamStore.isTechActive('tech1')" />
      <TechLaravelVue v-else />
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
import TeamNetAngular from '@/components/Teams/TeamNetAngular.vue';

// Tech components
import TechTabs from '@/components/Technologies/TechTabs.vue';
import TechTextSection from '@/components/Technologies/TechTextSection.vue';
import TechLaravelVue from '@/components/Technologies/TechLaravelVue.vue';
import TechNetAngular from '@/components/Technologies/TechNetAngular.vue';

import Footer from '@/components/Footer.vue';
import Dev from '@/components/ModalDev.vue';

// Pinia store
import { useTeamStore } from '@/stores/teamStore';
const teamStore = useTeamStore();
</script>

<style scoped></style>
