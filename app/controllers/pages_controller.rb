class PagesController < ApplicationController
  def home
    render inertia: "Home", props: {
      name: "Christopher Baptiste",
      skills: Skill.ordered.map(&:as_json_for_frontend),
      projects: Project.ordered.limit(6).map(&:as_json_for_frontend)
    }
  end
end
