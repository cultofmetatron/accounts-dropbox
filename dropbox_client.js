/* dropbox client login */

Meteor.loginWithDropbox = function(options, callback) {
  //support (options, callback) and (callback).
  if (!callback && typeof(options) === 'function') {
    callback = options;
    options = {};
  }

  //check to see if a dropbox login handler is registered
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
  var DROPBOX_CALLBACK = '/_oauth/dropbox'; // the return point on our server
  var callbackUrl = Meteor.absoluteUrl(DROPBOX_CALLBACK + '?close&state=' + state,
    { replaceLocalhost: true });

  //url to app
  console.log(options);
  var url = '/_oauth/dropbox/?requestTokenAndRedirect=' +
    encodeURIComponent(callbackUrl) +
    '&state=' + state;

  oldCallback = callback;
  callback = function() {
    //desperate times call for desperate measures
    console.log('called ', this);
    oldCallback();
  };

  console.log(callbackUrl);
  console.log(encodeURIComponent(callbackUrl));
  console.log(url);

  Accounts.oauth.initiateLogin(state, url, callback);
};


