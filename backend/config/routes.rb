Rails.application.routes.draw do
  resources :website_usages, only: [:index, :create]
  resources :time_spents, only: [:index, :create, :show, :update]
end
