import examplesRouter from './api/controllers/examples/router';
import talentsRouter from './api/controllers/talent/router';
import ecolesRouter from './api/controllers/ecole/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/talents', talentsRouter);
  app.use('/api/v1/ecoles', ecolesRouter);
}
