class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :fullname
      t.string :email
      t.integer :phone
      t.string :roles
      t.string :password_digest

      t.timestamps
    end
  end
end
