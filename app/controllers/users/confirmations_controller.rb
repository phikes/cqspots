class Users::ConfirmationsController < Devise::ConfirmationsController
  protected

  def after_confirmation_path_for(_, _)
    "/login"
  end
end
