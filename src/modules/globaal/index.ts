import Module from '~@/Module';

import maak from './maak.handler';
import gebruik from './gebruik.handler';

export default new Module({
  name: 'Globaal',
  keyword: 'globaal',
  definitions: [
    { keyword: 'maak', fn: maak },
    { keyword: 'gebruik', fn: gebruik }
  ]
});
