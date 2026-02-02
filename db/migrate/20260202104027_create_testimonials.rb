class CreateTestimonials < ActiveRecord::Migration[8.0]
  def change
    create_table :testimonials do |t|
      t.string :name
      t.string :designation
      t.string :company
      t.text :quote

      t.timestamps
    end
  end
end
