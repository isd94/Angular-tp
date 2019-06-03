class TalentsDatabase {
    constructor() {
      this._data = [];
      this._counter = 0;
  
      this.insert('ndour','baila','edacy','dakar','1111111');
      this.insert('fall','hassane','edacy','dakar','1111111');
      this.insert('sow','amina','edacy','dakar','1111111');
      this.insert('kamara','Ababacar','edacy','dakar','1111111');
    }
  
    all() {
      return Promise.resolve(this._data);
    }
  
    byId(id) {
      return Promise.resolve(this._data[id]);
    }
  
    insert(name,prenom,ecole,adresse,telephone) {
      const record = {
        id: this._counter,
        name,
        prenom,
        ecole,
        adresse,
        telephone
      };
  
      this._counter += 1;
      this._data.push(record);
  
      return Promise.resolve(record);
    }
  }
  
  export default new TalentsDatabase();