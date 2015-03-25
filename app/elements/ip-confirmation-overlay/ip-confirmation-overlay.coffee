Polymer(
  headerText: "Требуется подтверждение"
  confirmText: "Я действительно хочу сделать это!"
  cancelText: "Отмена"

  open: -> @$.overlay.open()
  close: -> @$.overlay.close()
  toggle: -> @$.overlay.toggle()

  confirm: ->
    @fire('ip-confirmation-overlay-confirmed')
    @close()
)
