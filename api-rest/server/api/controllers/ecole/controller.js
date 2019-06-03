import EcoleService from '../../services/ecole.service';

export class Controller {
  all(req, res) {
    EcoleService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    EcoleService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    EcoleService
      .create(req.body.name,req.body.description)
      .then(r => res
        .status(201)
        .location(`<%= apiRoot %>/ecole/${r.id}`)
        .json(r));
  }
}
export default new Controller();
