Rails.application.routes.draw do
  resources :profile_images
  resources :posts
  resources :abouts
  resources :admin
  resources :hair_styles
  
  delete "/admin_logout", to: "sessions#admin_destroy"
  post '/admin_login', to: "sessions#admin_create"
  get '/admin_show', to: "admins#admin_show_me"
  get '/latest', to: "posts#latest" 
end

