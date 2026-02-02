import { Controller } from "@hotwired/stimulus"

// Scroll controller for smooth scrolling and reveal animations
export default class extends Controller {
  static targets = ["section"]
  static values = {
    offset: { type: Number, default: 80 },
    behavior: { type: String, default: "smooth" }
  }

  connect() {
    // Set up intersection observer for reveal animations
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    )

    // Observe all section targets
    this.sectionTargets.forEach((section) => {
      section.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700")
      this.observer.observe(section)
    })
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-8")
        entry.target.classList.add("opacity-100", "translate-y-0")
        // Optionally stop observing after reveal
        this.observer.unobserve(entry.target)
      }
    })
  }

  scrollTo(event) {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute("href")?.replace("#", "")

    if (targetId) {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - this.offsetValue
        window.scrollTo({
          top: offsetTop,
          behavior: this.behaviorValue
        })
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: this.behaviorValue
    })
  }
}
