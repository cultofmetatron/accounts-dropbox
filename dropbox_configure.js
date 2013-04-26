Template.configureLoginServiceDialogForDropbox.siteUrl = function() {
  return Meteor.absoluteUrl({replaceLocalhost: true});
};

Template.configureLoginServiceDialogForDropbox.fields = function() {
  return [
    {property: 'consumerKey', label: 'Consumer key' },
    {property: 'secret'     , label: 'Consumer secret' }
  ];

};
