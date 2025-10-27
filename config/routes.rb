STATIC = Rack::Static.new(Rails.application, root: "public", urls: [""])

Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  devise_for :users, controllers: {confirmations: "users/confirmations", registrations: "users/registrations"}

  get "up" => "rails/health#show", :as => :rails_health_check

  get "*", to: -> (env) do
    env["PATH_INFO"] = "/index.html"

    STATIC.call env
  end

  root to: -> (env) { [404, nil, nil] }
end
