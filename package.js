Package.describe({
  summary: 'Login service for Dropbox accounts'
});

Package.on_use(function(api) {
  //standard dependencies for oauth support
  api.use('accounts-base', ['client', 'server' ]);
  api.use('accounts-oauth1-helper', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files(['dropbox_configure.html', 'dropbox_configure.js'], 'client');
  api.add_files('dropbox_common.js', ['client', 'server']);
  api.add_files('dropbox_server.js', 'server');
  api.add_files('dropbox_client.js', 'client');

});
