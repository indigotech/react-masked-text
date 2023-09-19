import { MaskKey, Masks } from './masks';

export default class MaskResolver {
  static resolve(kind: MaskKey): any {
    const handler = Masks[kind];

    if (!handler) {
      return null;
      // throw new Error('Mask type not supported.');
    }

    return new handler();
  }
}
