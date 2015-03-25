Polymer(
  confirmDelete: -> @$.deleteConfirmationOverlay.open()
  doDelete: -> @$.xhrDelete.go()
)
