Polymer(
  handleLedgerResponse: (event, response) -> @ledger = response.response

  reload: -> @$.xhrLoadLedger.go()

  confirmDelete: -> @$.deleteConfirmationOverlay.open()
  doDelete: -> @$.xhrDelete.go()

  redirectToRoot: -> document.querySelector('app-router').go('/')
)
