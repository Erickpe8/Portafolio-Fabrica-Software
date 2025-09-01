// src/stores/teamStore.js
import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: () => ({
    activeTeam: 'team1', // Por defecto muestra el primer equipo
    activeTech: 'tech1'  // Por defecto muestra la primera tecnología
  }),
  
  actions: {
    setActiveTeam(teamId) {
      this.activeTeam = teamId
      // Cuando cambias el equipo, automáticamente sincroniza la tecnología
      if (teamId === 'team1') {
        this.activeTech = 'tech1' // Laravel/Vue para equipo web
      } else if (teamId === 'team2') {
        this.activeTech = 'tech2' // .NET/Angular para equipo móvil
      }
    },
    
    setActiveTech(techId) {
      this.activeTech = techId
    }
  },
  
  getters: {
    isTeamActive: (state) => (teamId) => {
      return state.activeTeam === teamId
    },
    
    isTechActive: (state) => (techId) => {
      return state.activeTech === techId
    },
    
    // Getter para obtener la tecnología correspondiente al equipo activo
    getTeamTech: (state) => {
      return state.activeTeam === 'team1' ? 'tech1' : 'tech2'
    }
  }
})