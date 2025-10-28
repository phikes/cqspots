class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_create_params, only: %i[create]
  before_action :configure_update_params, only: %i[update]

  protected

  def configure_create_params
    devise_parameter_sanitizer.permit :sign_up, keys: %i[callsign]
  end

  def configure_update_params
    devise_parameter_sanitizer.permit :account_update, keys: %i[callsign]
  end
end
