Rails.application.routes.draw do
  root to: 'lists#index'
  resources :lists, only: [:index, :new, :show, :create, :destroy] do
    resources :bookmarks, only: [:new, :create]
  end
  resources :bookmarks, only: [:destroy]
  resources :movies, only: [:new, :create, :destroy]
end
