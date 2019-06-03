class EcolesDatabase {
    constructor() {
      this._data = [];
      this._counter = 0;
  
      this.insert('edacy','Ecole de formation sur les nouvelles technologie');
      this.insert('Esp','Ecole dengenieur');
      this.insert('UCAD','universite chiekh Anta Diop');
      this.insert('UT','Universite de thies');
    }
  
    all() {
      return Promise.resolve(this._data);
    }
  
    byId(id) {
      return Promise.resolve(this._data[id]);
    }
  
    insert(name,description) {
      const record = {
        id: this._counter,
        name,
        description
        
      };
  
      this._counter += 1;
      this._data.push(record);
  
      return Promise.resolve(record);
    }
  }
  
  export default new EcolesDatabase();