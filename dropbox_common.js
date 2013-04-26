if (!Accounts.dropbox) {
  Accounts.dropbox = {};
}

Accounts.dropbox._urls = {
  requestToken : "https://api.dropbox.com/1/oauth/request_token",
  authorize    : "https://www.dropbox.com/1/oauth/authorize",
  accessToken  : "https://api.dropbox.com/1/oauth/access_token"
  //authenticate : "https://www.dropbox.com/1/oauth/authorize"
};
