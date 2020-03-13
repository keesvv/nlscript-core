import Instruction from '~@/Instruction';
import Module from '~@/Module';
import ModuleNotFoundError from '~@/errors/ModuleNotFoundError';
import modules from '..';

export default (i: Instruction) => {
  const wantedModule = i.args[0];
  const module = modules.find((j) => j?.keyword === wantedModule);

  if (!module) {
    throw new ModuleNotFoundError(wantedModule, {
      line: i.rawContent,
      error: wantedModule
    });
  }

  Module.registerModules(module);
};
