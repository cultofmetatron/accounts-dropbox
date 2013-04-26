/* dropbox client login */

Meteor.loginWithDropbox = function(options, callback) {
  //support (options, callback) and (callback).
  if (!callback && typeof(options) === 'function') {
    callback = options;
    options = {};
  }

  var config = Accounts.loginServiceConfiguration.findOne({service: 'dropbox'});
  if (!config) {
    if (callback) {
      callback(new Accounts.ConfigError('Service not configured'));
    }
    return;
  }

  //preserve state accross the next two steps so we append this
  //to the callback url so we know who sent it.
  var state = Random.id();
  var DROPBOX_CALLBACK = '_oauth/dropbox'; // the return point on our server
  var callbackUrl = Meteor.absoluteUrl(DROPBOX_CALLBACK + '?close&state=' + state);

  //url to app
  var url = '/' + DROPBOX_CALLBACK + '?request_tokenAndRdirect='
    + encodeURIComponent(callbackUrl)
    + '&state=' + state;


  Accounts.oauth.initiateLogin(state, url, callback);
};


