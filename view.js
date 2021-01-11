
class ListView extends EventEmitter {
    constructor(model, elements) {
      super();
      this._model = model;
      this._elements = elements;
      // attach model listeners
      model.on('itemAdded', () => this.rebuildList())
      model.on('itemRemoved',() => this.rebuildList())
      // attach listeners to HTML controls
      elements.technologies.value = JSON.stringify(this._model._technologies);
      elements.list.value =  this.rebuildList();
      elements.addButton.addEventListener('click',
        () => this.emit('addButtonClicked'));
        elements.removeButton.addEventListener('click',
        () => this.emit('removeButtonClicked'));
    }
    show() {
      this.rebuildList();
    }
    rebuildList() {
      const list = this._elements.list;
      list.value = JSON.stringify( this._model.getItems());
   }
}