import { Controller } from "@hotwired/stimulus"

// Theme controller for dark/light mode persistence
export default class extends Controller {
  static targets = ["toggle"]
  static values = {
    dark: { type: Boolean, default: true }
  }

  connect() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      this.darkValue = savedTheme === "dark"
    } else {
      // Check system preference
      this.darkValue = window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    this.applyTheme()
  }

  toggle() {
    this.darkValue = !this.darkValue
    this.applyTheme()
    this.saveTheme()
  }

  applyTheme() {
    if (this.darkValue) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }

    // Update toggle button if present
    if (this.hasToggleTarget) {
      this.toggleTarget.textContent = this.darkValue ? "🌙" : "☀️"
    }
  }

  saveTheme() {
    localStorage.setItem("theme", this.darkValue ? "dark" : "light")
  }
}
