class User < ActiveRecord::Base
	def self.from_omniauth(auth)
		where(auth.slice("provider", "uid")).first || create_from_omniauth(auth)
	end

	def self.create_from_omniauth(auth)
		create! do |user|
			user.provider = auth["provider"]
			user.uid = auth["uid"]
			user.email = auth["info"]["email"]
			user.name = auth["info"]["nickname"]
			user.first_name = auth["info"]["first_name"]
			user.image = auth["info"]["image"]
		end
	end
end