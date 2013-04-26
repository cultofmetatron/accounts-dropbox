
Accounts.oauth.registerService('dropbox', 1, function(oauthBinding) {
  var identity = oauthBinding.get('https://api.dropbox.com/1/account/info').data;

  var serviceData = {
    referral_link     : identity.referral_link,
    display_name      : identity.display_name,
    id                : identity.uid,
    uid               : identity.uid,
    country           : identity.country,
    //quota_info        : identity.quota_info,
    accessToken       : oauthBinding.accessToken,
    accessTokenSecret : oauthBinding.accessTokenSecret
  };

  return {
    serviceData: serviceData,
    options: {
      profile: {
        name: identity.display_name
      }
    }
  };


});



