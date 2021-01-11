
  class ListController {
    constructor(model, view) {
      this._model = model;
      this._view = view;
      view.on('addButtonClicked', () => this.addItem());
      view.on('removeButtonClicked', () => this.removeItem());
    }
    addItem() {
      const item = window.prompt('Add item:', '');
      if (item) {
        this._model.addItem(item.toUpperCase());
      }
    }
    removeItem() {
        const item = window.prompt('Remove item:', '');
        if (item) {
         var response =  this._model.removeItem(item.toUpperCase());
         if(!response)
            alert("The item :- "+ item + " isn't in the list of technologies");
        }
      }
  }
  