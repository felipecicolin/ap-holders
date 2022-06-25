# frozen_string_literal: true

Rails.application.routes.draw do
  get "pages/index"
  root "pages#index"

  resources :nami, only: [:index]
end
