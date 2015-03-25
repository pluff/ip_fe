Polymer(
  confirmDelete: -> @$.deleteConfirmationOverlay.open()
  doDelete: -> @$.xhrDelete.go()

  handleDeleteResponse: -> @fire('ip-ledger-changed')
)
