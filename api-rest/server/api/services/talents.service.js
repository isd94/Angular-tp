import l from '../../common/logger';
import db from './talent.db.service';

class TalentsService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  create(name,prenom,cohorte) {
    return db.insert(name,prenom,cohorte);
  }
}

export default new TalentsService();
