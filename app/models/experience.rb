class Experience < ApplicationRecord
  validates :company, presence: true
  validates :title, presence: true

  serialize :points, coder: JSON

  scope :ordered, -> { order(position: :asc, start_date: :desc) }

  def points_array
    return [] if points.blank?
    points.is_a?(Array) ? points : JSON.parse(points) rescue []
  end

  def date_range
    end_str = end_date.present? ? end_date.strftime("%b %Y") : "Present"
    "#{start_date&.strftime('%b %Y')} - #{end_str}"
  end

  def as_json_for_frontend
    {
      title: title,
      company_name: company,
      icon: icon || "💼",
      iconBg: icon_bg || "#383E56",
      date: date_range,
      points: points_array
    }
  end
end
