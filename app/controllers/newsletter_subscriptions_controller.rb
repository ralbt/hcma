class NewsletterSubscriptionsController < ApplicationController
  def create
    @nls = NewsletterSubscription.where(email: params[:newsletter_subscription][:email]).first_or_create(newsletter_subscription_params)
  end

  def show
    @nls = NewsletterSubscription.find(params[:id])
  end

  private
    def newsletter_subscription_params
      params.require(:newsletter_subscription).permit(:full_name, :email, :mobile, :gender, :topics_subscribed => [])
    end
end
