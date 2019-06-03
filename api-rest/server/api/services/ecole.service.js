import l from '../../common/logger';
import db from './ecole.db.service';

class EcoleService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  create(name,description) {
    return db.insert(name,description);
  }
}

export default new EcoleService();
