Rails.application.routes.draw do
  # resources :albums
  # get 'artists/index'
  # get 'artists/show'
  # get 'artists/create'
  # get 'artists/update'
  # get 'artists/destroy'
  # get 'songs/index'
  # get 'songs/show'
  # get 'songs/create'
  # get 'songs/update'
  # get 'songs/destroy'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users do 
    resources :songs
    resources :artists
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
