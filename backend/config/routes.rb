Rails.application.routes.draw do
  resources :users, only: [:destroy] do
    resources :time_categories, only: [:index]
    resources :reports, only: [] do
      collection do
        get :generate
      end
    end
  end

  resources :website_usages, only: [:index, :create]
  resources :time_spents, only: [:index, :create, :update]
  resources :restricted_sites, only: [:index, :create, :destroy]
  resources :time_limits, only: [:index, :create, :destroy]
  resources :feedbacks, only: [:index]
  resources :watch_lists, only: [:index, :create]

  resources :user_activities, only: [] do
    member do
      patch :update_idle_status
    end
  end

  post 'login', to: 'sessions#create'
end
