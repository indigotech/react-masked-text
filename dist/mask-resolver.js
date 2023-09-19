import { Masks } from './masks';
var MaskResolver = /** @class */ (function () {
    function MaskResolver() {
    }
    MaskResolver.resolve = function (kind) {
        var handler = Masks[kind];
        if (!handler) {
            return null;
            // throw new Error('Mask type not supported.');
        }
        return new handler();
    };
    return MaskResolver;
}());
export default MaskResolver;
//# sourceMappingURL=mask-resolver.js.map