import Module from '~@/Module';

import toon from './toon.handler';
import wis from './wis.handler';

export default new Module({
  name: 'Scherm',
  keyword: 'scherm',
  definitions: [
    { keyword: 'toon', fn: toon },
    { keyword: 'wis', fn: wis }
  ]
});
