(function() {
  Polymer({
    headerText: "Требуется подтверждение",
    confirmText: "Я действительно хочу сделать это!",
    cancelText: "Отмена",
    open: function() {
      return this.$.overlay.open();
    },
    close: function() {
      return this.$.overlay.close();
    },
    toggle: function() {
      return this.$.overlay.toggle();
    },
    confirm: function() {
      this.fire('ip-confirmation-overlay-confirmed');
      return this.close();
    }
  });

}).call(this);

//# sourceMappingURL=ip-confirmation-overlay.js.map
