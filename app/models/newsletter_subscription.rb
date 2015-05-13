class NewsletterSubscription < ActiveRecord::Base
  validates :full_name, presence: true
  validates :email, uniqueness: true, on: :create
  validates_format_of :email, :with => /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/
  serialize :topics_subscribed, Array

end
