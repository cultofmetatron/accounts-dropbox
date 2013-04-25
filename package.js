Package.describe({
  summary: 'Login service for Dropbox accounts'
});

Package.on_use(function(api) {
  //standard dependencies for oauth support
  api.use('accounts-base', ['client', 'server' ]);
  api.use('accounts-oauth1-helper', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');


  //api.add_files([], 'client)

});
