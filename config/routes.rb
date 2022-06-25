# frozen_string_literal: true

Rails.application.routes.draw do
  root "pages#index"

  resources :pages, only: [:index]
  resources :nami, only: [:index]
  resources :phantoms, only: [:index]
end
