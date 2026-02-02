Rails.application.routes.draw do
  # Admin panel
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # Contact form
  post 'contact', to: 'contact_messages#create'

  # Health check
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Root route
  root 'pages#home'
end
