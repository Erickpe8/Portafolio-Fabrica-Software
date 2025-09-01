<template>
    <div id="equipo" class="team-tabs">
        <div :class="['team-tab', { 'active': teamStore.isTeamActive('team1') }]" @click="handleTabClick('team1')">Congreso</div>
        <div :class="['team-tab', { 'active': teamStore.isTeamActive('team2') }]" @click="handleTabClick('team2')">Matricula</div>
    </div>
</template>

<script setup>
import { useTeamStore } from '@/stores/teamStore'

const teamStore = useTeamStore()

const handleTabClick = (teamId) => {
  teamStore.setActiveTeam(teamId)
}
</script>

<style lang="css" scoped></style>