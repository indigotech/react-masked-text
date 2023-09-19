import MaskResolver from './mask-resolver';
var MaskService = /** @class */ (function () {
    function MaskService() {
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    MaskService.toMask = function (type, value, settings) {
        return MaskResolver.resolve(type).getValue(value, settings);
    };
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    MaskService.toValue = function (type, value, settings) {
        return MaskResolver.resolve(type).getRawValue(value, settings);
    };
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    MaskService.isValid = function (type, value, settings) {
        return MaskResolver.resolve(type).validate(value, settings);
    };
    return MaskService;
}());
export default MaskService;
//# sourceMappingURL=mask-service.js.map