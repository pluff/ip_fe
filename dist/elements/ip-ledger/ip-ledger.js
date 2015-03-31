(function() {
  Polymer({
    handleLedgerResponse: function(event, response) {
      return this.ledger = response.response;
    },
    reload: function() {
      return this.$.xhrLoadLedger.go();
    },
    confirmDelete: function() {
      return this.$.deleteConfirmationOverlay.open();
    },
    doDelete: function() {
      return this.$.xhrDelete.go();
    },
    redirectToRoot: function() {
      return document.querySelector('app-router').go('/');
    }
  });

}).call(this);

//# sourceMappingURL=ip-ledger.js.map
