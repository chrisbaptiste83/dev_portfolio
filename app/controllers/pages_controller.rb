class PagesController < ApplicationController
  def home
    render inertia: "Home", props: {
      name: "Christopher Baptiste",
      experiences: Experience.ordered.map(&:as_json_for_frontend),
      skills: Skill.ordered.map(&:as_json_for_frontend),
      projects: Project.ordered.limit(6).map(&:as_json_for_frontend),
      testimonials: Testimonial.all.map(&:as_json_for_frontend)
    }
  end
end
