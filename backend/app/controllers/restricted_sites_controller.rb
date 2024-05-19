class RestrictedSitesController < ApplicationController
  before_action :set_restricted_site, only: [:destroy]

  # GET /restricted_sites
  def index
    @restricted_sites = RestrictedSite.all
    render json: @restricted_sites
  end

  # POST /restricted_sites
  def create
    @restricted_site = RestrictedSite.new(restricted_site_params)

    if @restricted_site.save
      render json: @restricted_site, status: :created, location: @restricted_site
    else
      render json: @restricted_site.errors, status: :unprocessable_entity
    end
  end

  # DELETE /restricted_sites/:id
  def destroy
    @restricted_site.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restricted_site
      @restricted_site = RestrictedSite.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def restricted_site_params
      params.require(:restricted_site).permit(:url)
    end
end
