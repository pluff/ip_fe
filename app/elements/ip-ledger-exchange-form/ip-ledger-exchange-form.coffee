Polymer(
  created: -> @reset()

  open: -> @$.overlay.open()
  close: -> @$.overlay.close()

  reset: -> @exchange = {from_currency: 'EUR', to_currency: 'BYR'}

  save: (e) ->
    e.preventDefault()
    @$.xhrSave.go()

  handleSaveResponse: (event, response)->
    @close()
    @close()
    @fire('ip-ledger-changed')
    @reset()
)
