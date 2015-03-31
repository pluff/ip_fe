(function() {
  Polymer({
    createLedger: function() {
      return this.$.xhrCreateLedger.go();
    },
    handleLedgerResponse: function(event, response) {
      var token;
      token = response.response.access_token;
      return document.querySelector('app-router').go('/' + token);
    }
  });

}).call(this);

//# sourceMappingURL=ip-greetings.js.map
