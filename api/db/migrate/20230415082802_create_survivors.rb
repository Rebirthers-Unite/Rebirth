class CreateSurvivors < ActiveRecord::Migration[7.0]
  def change
    create_table :survivors do |t|
      t.string :name
      t.string :description
      t.binary :image
      t.string :location

      t.timestamps
    end
  end
end
