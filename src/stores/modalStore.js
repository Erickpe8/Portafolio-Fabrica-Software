// stores/modalStore.js
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false,
    currentDeveloper: []
  }),
  actions: {
    openModal(developer) {
      this.currentDeveloper = developer
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
      this.currentDeveloper = null
    }
  }
})