
Polymer(
  ledgerChanged: -> @recalcTaxes()
  taxes: []

  recalcTaxes: ->
    result = {}
    if @ledger
      @ledger.remittances.forEach (remittance, index)->
        tax_row = result[remittance.taxes.tax_rate] || {tax_amount: 0, tax_base: 0}
        tax_row.tax_amount += remittance.taxes.tax_amount
        tax_row.tax_base += remittance.taxes.tax_base
        result[remittance.taxes.tax_rate] = tax_row

      @ledger.exchanges.forEach (exchanges, index)->
        tax_row = result[exchanges.taxes.tax_rate] || {tax_amount: 0, tax_base: 0}
        tax_row.tax_amount += exchanges.taxes.tax_amount
        tax_row.tax_base += exchanges.taxes.tax_base
        result[exchanges.taxes.tax_rate] = tax_row

    #Transform to array because polymer repeat cant work with objects
    result_array = []
    _.forEach result, (value, key) ->
      result_array.push _.merge(value, {tax_rate: key})

    @taxes = result_array



)
