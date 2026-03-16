class Project < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  serialize :tags, coder: JSON

  scope :featured, -> { where(featured: true) }
  scope :ordered, -> { order(created_at: :desc) }

  def tags_array
    return [] if tags.blank?
    tags.is_a?(Array) ? tags : JSON.parse(tags) rescue []
  end

  SCREENSHOT_OVERRIDES = {
    "https://fit-track.space" => "https://fit-track.space/session/new"
  }.freeze

  def screenshot_url
    SCREENSHOT_OVERRIDES.fetch(live_url, live_url)
  end

  def as_json_for_frontend
    {
      name: title,
      description: description,
      tags: tags_array.map { |tag| { name: tag, color: "blue-text-gradient" } },
      image: live_url.present? ? "https://image.thum.io/get/width/1200/crop/630/noanimate/#{screenshot_url}" : nil,
      source_code_link: github_url,
      live_link: live_url
    }
  end
end
