import { Controller } from "@hotwired/stimulus"

// Navbar controller for scroll detection and mobile menu toggle
export default class extends Controller {
  static targets = ["nav", "mobileMenu", "menuButton"]
  static values = {
    scrollThreshold: { type: Number, default: 100 }
  }

  connect() {
    this.scrollHandler = this.handleScroll.bind(this)
    window.addEventListener("scroll", this.scrollHandler, { passive: true })
    this.handleScroll()
  }

  disconnect() {
    window.removeEventListener("scroll", this.scrollHandler)
  }

  handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    if (this.hasNavTarget) {
      if (scrollTop > this.scrollThresholdValue) {
        this.navTarget.classList.add("bg-primary", "shadow-lg")
        this.navTarget.classList.remove("bg-transparent")
      } else {
        this.navTarget.classList.remove("bg-primary", "shadow-lg")
        this.navTarget.classList.add("bg-transparent")
      }
    }
  }

  toggleMenu() {
    if (this.hasMobileMenuTarget) {
      this.mobileMenuTarget.classList.toggle("hidden")
    }
  }

  closeMenu() {
    if (this.hasMobileMenuTarget) {
      this.mobileMenuTarget.classList.add("hidden")
    }
  }
}
