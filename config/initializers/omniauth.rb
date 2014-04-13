Rails.application.config.middleware.use OmniAuth::Builder do
	if Rails.env.production?
		provider :facebook, ENV['FETCH_FACEBOOK_KEY'], ENV['FETCH_FACEBOOK_SECRET'],
			# scope: 'email, user_birthday, basic_info',
			display: 'popup'
	else
		# for localhost:3000/
		provider :facebook, '367611440045084', '38a606addd7e89ddfc2d21eb3b094189',
			# scope: 'email, user_birthday, basic_info',
			display: 'popup'
	end
end