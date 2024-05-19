class WebsiteUsagesController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    url = website_usage_params[:url]
    hostname = URI.parse(url).hostname
    time_spent = website_usage_params[:time_spent].to_i
    user = User.find(website_usage_params[:user_id])

    usage = WebsiteUsage.find_or_initialize_by(url: url, user: user)
    usage.time_spent += time_spent

    if usage.save
      aggregate_time_spent = WebsiteUsage.aggregate_time_spent_by_hostname(user, hostname)
      render json: { usage: usage, aggregate_time_spent: aggregate_time_spent }, status: :created
    else
      render json: usage.errors, status: :unprocessable_entity
    end
  end

  def index
    usages = WebsiteUsage.all
    render json: usages
  end

  private

  def website_usage_params
    params.require(:website_usage).permit(:url, :time_spent, :user_id)
  end
end
