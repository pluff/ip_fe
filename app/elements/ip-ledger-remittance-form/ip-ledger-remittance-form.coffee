Polymer(
  created: -> @reset()

  open: -> @$.overlay.open()
  close: -> @$.overlay.close()

  reset: -> @remittance = {currency: 'EUR'}

  save: (e) ->
    e.preventDefault();
    @$.xhrSave.go();

  handleSaveResponse: (event, response)->
    @fire('ip-ledger-changed')
    @close()
    @reset()
)
