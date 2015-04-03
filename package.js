Package.describe({
  summary: 'Login service for Servant accounts',
  version: '0.0.1',
  name: 'ecwyne:accounts-servant'
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('ecwyne:servant', ['client', 'server']);

  api.addFiles('servant_login_button.css', 'client');

  api.addFiles('servant.js');
  api.export('ServantAPI', 'server');
});
