class CreateExperiences < ActiveRecord::Migration[8.0]
  def change
    create_table :experiences do |t|
      t.string :company
      t.string :title
      t.text :description
      t.date :start_date
      t.date :end_date
      t.string :icon
      t.string :icon_bg
      t.text :points
      t.integer :position

      t.timestamps
    end
  end
end
