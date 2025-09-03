import { defineStore } from 'pinia'

// Mapea equipos con las tecnologías
// Team1: Proyectos internos (Ing. Manuel)
// Team2: Proyectos externos (Ing. Galindo)
// Tech1: Tecnologias Manuel (Laravel, Vue)
// Tech2: Tecnologias Galindo (.NET, Angular)

const TEAM_TO_TECH = { team1: 'tech1', team2: 'tech2' }
const TECH_TO_TEAM = { tech1: 'team1', tech2: 'team2' }

// (Opcional) sets de validación para fail-fast
const VALID_TEAMS = new Set(Object.keys(TEAM_TO_TECH))
const VALID_TECHS = new Set(Object.keys(TECH_TO_TEAM))

export const useTeamStore = defineStore('team', {
  state: () => ({
    activeTeam: 'team1', // por defecto: Ing. Manuel (Externos)
    activeTech: 'tech1', // Laravel, vue
  }),

  actions: {
    setActiveTeam(id) {
      if (!VALID_TEAMS.has(id)) return
      if (this.activeTeam === id) return

      this.activeTeam = id
      const mappedTech = TEAM_TO_TECH[id]
      // sincroniza tecnología si no coincide
      if (mappedTech && this.activeTech !== mappedTech) {
        this.activeTech = mappedTech
      }
    },

    setActiveTech(id) {
      if (!VALID_TECHS.has(id)) return
      if (this.activeTech === id) return

      this.activeTech = id
      const mappedTeam = TECH_TO_TEAM[id]
      if (mappedTeam && this.activeTeam !== mappedTeam) {
        this.activeTeam = mappedTeam
      }
    },
  },

  getters: {
    isTeamActive: (s) => (id) => s.activeTeam === id,
    isTechActive: (s) => (id) => s.activeTech === id,
  },
})
