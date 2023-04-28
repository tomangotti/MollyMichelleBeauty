class Admin < ApplicationRecord
    has_secure_password
    
    has_one :about
end
