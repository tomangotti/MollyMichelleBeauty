Rails.application.routes.draw do
  resources :posts
  resources :abouts
  resources :admins
  resources :hair_styles
  
  delete "/admin_logout", to: "sessions#admin_destroy"
  post '/admin_login', to: "sessions#admin_create"
  get '/admin', to: "admins#admin_show_me"
  get '/latest', to: "posts#latest" 
end
