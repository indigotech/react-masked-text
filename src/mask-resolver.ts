import { MaskHandlers, MaskKey } from './masks';

export default class MaskResolver {
  static resolve(kind: MaskKey) {
    const handler = MaskHandlers[kind];

    if (!handler) {
      return null;
      // throw new Error('Mask type not supported.');
    }

    return new handler();
  }
}
