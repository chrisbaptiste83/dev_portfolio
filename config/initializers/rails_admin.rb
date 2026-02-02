RailsAdmin.config do |config|
  config.asset_source = :sprockets

  # Simple HTTP Basic Authentication
  config.authenticate_with do
    authenticate_or_request_with_http_basic('Portfolio Admin') do |username, password|
      username == ENV.fetch('ADMIN_USERNAME', 'admin') &&
        password == ENV.fetch('ADMIN_PASSWORD', 'password123')
    end
  end

  config.main_app_name = ['Portfolio', 'Admin']

  # Model configurations
  config.model 'Project' do
    list do
      field :id
      field :title
      field :featured
      field :created_at
    end
    edit do
      field :title
      field :description, :text
      field :tags do
        help 'Enter tags as JSON array, e.g., ["react", "rails", "tailwind"]'
      end
      field :github_url
      field :live_url
      field :featured
    end
  end

  config.model 'Experience' do
    list do
      field :id
      field :title
      field :company
      field :start_date
      field :end_date
      field :position
    end
    edit do
      field :title
      field :company
      field :description, :text
      field :start_date
      field :end_date
      field :icon do
        help 'Emoji icon, e.g., 💼, 🚀, 🏢'
      end
      field :icon_bg do
        help 'Background color hex, e.g., #383E56'
      end
      field :points do
        help 'Enter points as JSON array, e.g., ["Point 1", "Point 2"]'
      end
      field :position do
        help 'Display order (lower numbers appear first)'
      end
    end
  end

  config.model 'Testimonial' do
    list do
      field :id
      field :name
      field :company
      field :created_at
    end
    edit do
      field :name
      field :designation
      field :company
      field :quote, :text
    end
  end

  config.model 'Skill' do
    list do
      field :id
      field :name
      field :category
      field :color
      field :position
    end
    edit do
      field :name
      field :category
      field :color do
        help 'Hex color for the 3D ball, e.g., #915eff'
      end
      field :position do
        help 'Display order (lower numbers appear first)'
      end
    end
  end

  config.model 'ContactMessage' do
    list do
      field :id
      field :name
      field :email
      field :read
      field :created_at
    end
    edit do
      field :name
      field :email
      field :message, :text
      field :read
    end
  end

  config.actions do
    dashboard
    index
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app
  end
end
