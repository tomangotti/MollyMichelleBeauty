class SessionsController < ApplicationController
    skip_before_action :authorize, only: :admin_create

    def admin_create
        admin = Admin.find_by(email: params[:email])
        puts admin
        puts params
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: admin
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def admin_destroy
        session.delete :admin_id
        head :no_content
    end
    
end
