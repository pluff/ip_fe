(function() {
  Polymer({
    ledgerChanged: function() {
      return this.recalcTaxes();
    },
    taxes: [],
    openRemittanceForm: function() {
      return this.$.remittanceForm.open();
    },
    openExchangeForm: function() {
      return this.$.exchangeForm.open();
    },
    recalcTaxes: function() {
      var result, result_array;
      result = {};
      if (this.ledger) {
        this.ledger.remittances.forEach(function(remittance, index) {
          var tax_row;
          tax_row = result[remittance.taxes.tax_rate] || {
            tax_amount: 0,
            tax_base: 0
          };
          tax_row.tax_amount += remittance.taxes.tax_amount;
          tax_row.tax_base += remittance.taxes.tax_base;
          return result[remittance.taxes.tax_rate] = tax_row;
        });
        this.ledger.exchanges.forEach(function(exchanges, index) {
          var tax_row;
          tax_row = result[exchanges.taxes.tax_rate] || {
            tax_amount: 0,
            tax_base: 0
          };
          tax_row.tax_amount += exchanges.taxes.tax_amount;
          tax_row.tax_base += exchanges.taxes.tax_base;
          return result[exchanges.taxes.tax_rate] = tax_row;
        });
      }
      result_array = [];
      _.forEach(result, function(value, key) {
        return result_array.push(_.merge(value, {
          tax_rate: key
        }));
      });
      return this.taxes = result_array;
    }
  });

}).call(this);

//# sourceMappingURL=ip-ledger-line.js.map
