exports.onExecutePostLogin = async (event, api) => {

    if (!event.user.email_verified) {
    
        api.redirect.sendUserTo('https://(userdevkey).us.auth0.com/v2/logout?returnTo=https%3A%2F%2Flocalhost%3A7150%2FAccount%2FEmailVerification&client_id=(UserClientId)')
    
      }
    
    };