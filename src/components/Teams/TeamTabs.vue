<template>
  <div id="equipo" class="team-tabs">
    <!-- Team 1: Ing. Manuel -->
    <div
      :class="['team-tab', { 'active': teamStore.isTeamActive('team1') }]"
      @click="handleTabClick('team1')"
    >
      Proyectos Externos
    </div>

    <!-- Team 2: Ing. Galindo -->
    <div
      :class="['team-tab', { 'active': teamStore.isTeamActive('team2') }]"
      @click="handleTabClick('team2')"
    >
      Proyectos Internos
    </div>
  </div>
</template>

<script setup>
import { useTeamStore } from '@/stores/teamStore'

const teamStore = useTeamStore()

const handleTabClick = (teamId) => {
  teamStore.setActiveTeam(teamId)
}
</script>
