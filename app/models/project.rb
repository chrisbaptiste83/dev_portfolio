class Project < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  serialize :tags, coder: JSON

  scope :featured, -> { where(featured: true) }
  scope :ordered, -> { order(created_at: :desc) }

  SCREENSHOT_PATHS = {
    "https://gloriasembroideryshop.com" => "/images/projects/shopzilla.png",
    "https://libra-arcana.online"       => "/images/projects/libra_arcana.png",
    "https://fit-track.space"           => "/images/projects/fit_tracker.png",
    "https://tethered.site"             => "/images/projects/tethered.png",
    "https://mikescantina.live"         => "/images/projects/mikes_cantina.png",
    "https://cyrusbaptiste.com"         => "/images/projects/cyrus_portfolio.png"
  }.freeze

  def tags_array
    return [] if tags.blank?
    tags.is_a?(Array) ? tags : JSON.parse(tags) rescue []
  end

  def as_json_for_frontend
    {
      name: title,
      description: description,
      tags: tags_array.map { |tag| { name: tag, color: "blue-text-gradient" } },
      image: SCREENSHOT_PATHS[live_url],
      source_code_link: github_url,
      live_link: live_url
    }
  end
end
