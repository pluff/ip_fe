Polymer(
  createLedger: -> @$.xhrCreateLedger.go()

  handleLedgerResponse: (event, response) ->
    token = response.response.access_token
    document.querySelector('app-router').go('/'+token)
)
