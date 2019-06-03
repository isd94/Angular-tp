import TalentsService from '../../services/talents.service';

export class Controller {
  all(req, res) {
    TalentsService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    TalentsService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).end();
      });
  }

  create(req, res) {
    TalentsService
      .create(req.body.name,req.body.prenom,req.body.ecole,req.body.adresse,req.body.telephone)
      .then(r => res
        .status(201)
        .location(`<%= apiRoot %>/talents/${r.id}`)
        .json(r));
  }
}
export default new Controller();
