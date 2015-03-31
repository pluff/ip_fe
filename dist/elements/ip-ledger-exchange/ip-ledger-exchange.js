(function() {
  Polymer({
    confirmDelete: function() {
      return this.$.deleteConfirmationOverlay.open();
    },
    doDelete: function() {
      return this.$.xhrDelete.go();
    },
    handleDeleteResponse: function() {
      return this.fire('ip-ledger-changed');
    }
  });

}).call(this);

//# sourceMappingURL=ip-ledger-exchange.js.map
