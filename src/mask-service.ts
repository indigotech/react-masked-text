import MaskResolver from './mask-resolver';
import { MaskKey } from './masks';

export default class MaskService {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static toMask(type: MaskKey, value: string, settings?: any): string {
    return MaskResolver.resolve(type).getValue(value, settings);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static toValue(type: MaskKey, value: string, settings?: any): any {
    return MaskResolver.resolve(type).getRawValue(value, settings);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static isValid(type: MaskKey, value: string, settings: any): boolean {
    return MaskResolver.resolve(type).validate(value, settings);
  }
}
