Object.defineProperty(exports, "__esModule", { value: true });
var assign = require("lodash/assign");
function MatchQuery(field, query, options) {
    var _a;
    if (options === void 0) { options = {}; }
    if (!query || !field) {
        return;
    }
    return {
        match: (_a = {},
            _a[field] = assign({ query: query }, options),
            _a)
    };
}
exports.MatchQuery = MatchQuery;
//# sourceMappingURL=MatchQuery.js.map