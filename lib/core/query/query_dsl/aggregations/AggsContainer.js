Object.defineProperty(exports, "__esModule", { value: true });
var assign = require("lodash/assign");
var reduce = require("lodash/reduce");
var compact = require("lodash/compact");
function AggsContainer(key, inner, aggsArray) {
    var _a;
    if (aggsArray === void 0) { aggsArray = []; }
    aggsArray = compact(aggsArray);
    if (aggsArray.length > 0) {
        inner.aggs = reduce(aggsArray, assign, {});
    }
    return _a = {},
        _a[key] = inner,
        _a;
}
exports.AggsContainer = AggsContainer;
//# sourceMappingURL=AggsContainer.js.map