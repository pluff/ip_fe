(function() {
  Polymer({
    created: function() {
      return this.reset();
    },
    open: function() {
      return this.$.overlay.open();
    },
    close: function() {
      return this.$.overlay.close();
    },
    reset: function() {
      return this.remittance = {
        currency: 'EUR'
      };
    },
    save: function(e) {
      e.preventDefault();
      return this.$.xhrSave.go();
    },
    handleSaveResponse: function(event, response) {
      this.fire('ip-ledger-changed');
      this.close();
      return this.reset();
    }
  });

}).call(this);

//# sourceMappingURL=ip-ledger-remittance-form.js.map
