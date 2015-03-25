Polymer(
  handleLedgerResponse: (event, response) ->
    @ledger = response.response

  reload: -> @$.xhrLoadLedger.go()
)
