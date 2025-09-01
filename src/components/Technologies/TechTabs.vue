<template>
    <div id="tecnologias" class="team-tabs">
        <div :class="['team-tab', { 'active': teamStore.isTechActive('tech1') }]" @click="handleTabClick('tech1')">Stack del Equipo 1</div>
        <div :class="['team-tab', { 'active': teamStore.isTechActive('tech2') }]" @click="handleTabClick('tech2')">Stack del Equipo 2</div>
    </div>
</template>

<script setup>
import { useTeamStore } from '@/stores/teamStore'

const teamStore = useTeamStore()

const handleTabClick = (techId) => {
  teamStore.setActiveTech(techId)
}
</script>

<style lang="css" scoped>

</style>