# app/controllers/website_usages_controller.rb
class WebsiteUsagesController < ApplicationController
  before_action :set_website_usage, only: [:show, :update, :destroy]

  # GET /website_usages
  def index
    website_usages = WebsiteUsage.all
    render json: website_usages
  end

  # GET /website_usages/1
  def show
    render json: @website_usage
  end

  # POST /website_usages
  def create
    website_usage = WebsiteUsage.new(website_params)
    if website_usage.save
      render json: website_usage, status: :created
    else
      render json: website_usage.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /website_usages/1
  def update
    if @website_usage.update(website_params)
      render json: @website_usage
    else
      render json: @website_usage.errors, status: :unprocessable_entity
    end
  end

  # DELETE /website_usages/1
  def destroy
    @website_usage.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_website_usage
      @website_usage = WebsiteUsage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def website_params
      params.require(:website_usage).permit(:url, :time_spent, :active_time, :idle_time, :specific_part_visited)
    end
end
