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
      return this.exchange = {
        from_currency: 'EUR',
        to_currency: 'BYR'
      };
    },
    save: function(e) {
      e.preventDefault();
      return this.$.xhrSave.go();
    },
    handleSaveResponse: function(event, response) {
      this.close();
      this.close();
      this.fire('ip-ledger-changed');
      return this.reset();
    }
  });

}).call(this);

//# sourceMappingURL=ip-ledger-exchange-form.js.map
