import Test from 'ava';
import { paths, hasPath } from '../src/infrastructure';
import Swagger from './fixtures/swagger-sample';

Test('Retrieve paths from the swagger Swagger', t => {
  t.true(paths(Swagger).length > 0);
});

Test('route exists', t => {
  t.truthy(hasPath(Swagger, '/hub/v2/pmcs'));
});

Test('route exists', t => {
  t.false(hasPath(Swagger, '/blah'));
});
