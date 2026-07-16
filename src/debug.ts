import Debug, { IDebugger } from 'debug';

export function createDebugPrinter(...names: string[]) {
  return Debug(['osf', ...names].join(':'));
}

export type Dbg = IDebugger;
