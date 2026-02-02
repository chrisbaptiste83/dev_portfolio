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

  def as_json_for_frontend
    {
      name: title,
      description: description,
      tags: tags_array.map { |tag| { name: tag, color: "blue-text-gradient" } },
      source_code_link: github_url,
      live_link: live_url
    }
  end
end
