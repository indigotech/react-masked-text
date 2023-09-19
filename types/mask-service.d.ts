import { MaskKey } from './masks';
export default class MaskService {
    static toMask(type: MaskKey, value: string, settings?: any): string;
    static toValue(type: MaskKey, value: string, settings?: any): any;
    static isValid(type: MaskKey, value: string, settings: any): boolean;
}
