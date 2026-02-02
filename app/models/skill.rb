class Skill < ApplicationRecord
  validates :name, presence: true

  scope :ordered, -> { order(position: :asc, name: :asc) }

  def as_json_for_frontend
    {
      name: name,
      color: color || "#915eff"
    }
  end
end
