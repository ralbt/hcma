class CreateNewsletterSubscriptions < ActiveRecord::Migration
  def change
    create_table :newsletter_subscriptions do |t|
      t.string :full_name
      t.string :email
      t.string :mobile
      t.string :gender
      t.text :topics_subscribed

      t.timestamps null: false
    end
  end
end
