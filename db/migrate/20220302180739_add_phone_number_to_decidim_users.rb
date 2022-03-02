class AddPhoneNumberToDecidimUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :decidim_users, :phone_number, :string
  end
end
