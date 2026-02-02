class Testimonial < ApplicationRecord
  validates :name, presence: true
  validates :quote, presence: true

  def as_json_for_frontend
    {
      testimonial: quote,
      name: name,
      designation: designation,
      company: company
    }
  end
end
