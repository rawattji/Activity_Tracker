class WebsiteUsagesController < ApplicationController
    protect_from_forgery with: :null_session
  
    def create
      usage = WebsiteUsage.new(website_usage_params)
      if usage.save
        render json: usage, status: :created
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
      params.require(:website_usage).permit(:url, :time_spent)
    end
  end
  