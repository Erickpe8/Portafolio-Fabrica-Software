<template>
  <div class="p-0 m-0 min-h-screen">
    <Header/>
    <div class="flex-grow">
      <Hero/>

      <!-- sección de los equipos -->
      <TeamTabs/>
      <TeamTextSection/>
      <!-- Strategy + dynamic component -->
      <component :is="CurrentTeamComp" />

      <!-- sección de las tecnologías -->
      <TechTabs/>
      <TechTextSection/>
      <!-- Strategy + dynamic component -->
      <component :is="CurrentTechComp" />
    </div>

    <Footer/>
    <Dev/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'

// Team components
import TeamTabs from '@/components/Teams/TeamTabs.vue'
import TeamTextSection from '@/components/Teams/TeamTextSection.vue'
import TeamLaravelVue from '@/components/Teams/TeamLaravelVue.vue'
import TeamNetAngular from '@/components/Teams/TeamNetAngular.vue'

// Tech components
import TechTabs from '@/components/Technologies/TechTabs.vue'
import TechTextSection from '@/components/Technologies/TechTextSection.vue'
import TechLaravelVue from '@/components/Technologies/TechLaravelVue.vue'
import TechNetAngular from '@/components/Technologies/TechNetAngular.vue'

import Footer from '@/components/Footer.vue'
import Dev from '@/components/ModalDev.vue'

import { computed } from 'vue'
import { useTeamStore } from '@/stores/teamStore'
const teamStore = useTeamStore()

const CurrentTeamComp = computed(() => (
  teamStore.isTeamActive('team1') ? TeamLaravelVue : TeamNetAngular
))

const CurrentTechComp = computed(() => (
  teamStore.isTechActive('tech1') ? TechLaravelVue : TechNetAngular
))
</script>

<style scoped></style>
