var technologies = {
    "Web Technologies":["HTML","CSS","REACT JS","NODE JS","VUE JS"],
    "Data Science":["PYTHON","R"],
    "Databases":["MYSQL","FIRESTORE","MONGO DB","DYNAMO DB"]
}
class EventEmitter {
    constructor() {
      this._events = {};
    }
    on(evt, listener) {
      (this._events[evt] || (this._events[evt] = [])).push(listener);
      return this;
    }
    emit(evt, arg) {
      (this._events[evt] || []).slice().forEach(lsn => lsn(arg));
    }
}
class ListModel extends EventEmitter {
    constructor(items) {
      super();
      this._items = items || {};
      this._technologies = technologies;
    }
    addItem(item) {
      var x = 0;
      for( var key in this._technologies){
        if(this._technologies[key].includes(item)){
            if(!this._items.hasOwnProperty(key))
                this._items[key]=[];
            this._items[key].unshift(item);
            x = 1;
        }
      }
      if(x === 0){
        if(!this._items.hasOwnProperty("Others"))
            this._items["Others"] = [];
        this._items["Others"].unshift(item);
      }
      this.emit('itemAdded', item);
    }
    removeItem(item){
        var x = 0;
        for(var key in this._items){
             if(this._items[key].includes(item)){
                    x = 1;
                    var index = this._items[key].indexOf(item);
                    this._items[key].splice(index, 1);
                    this.emit('itemRemoved', item);
                    continue;
             }

        }
        if(x === 0)
            return false;
        else
            return true;
    }
    getItems(){
        console.log(this._items);
        return this._items;
    }
}

  
 