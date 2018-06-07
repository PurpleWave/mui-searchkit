var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("../state");
var FilterBasedAccessor_1 = require("./FilterBasedAccessor");
var query_1 = require("../query");
var map = require("lodash/map");
var get = require("lodash/get");
var includes = require("lodash/includes");
var startsWith = require("lodash/startsWith");
var each = require("lodash/each");
var take = require("lodash/take");
var NestedFacetAccessor = /** @class */ (function (_super) {
    __extends(NestedFacetAccessor, _super);
    function NestedFacetAccessor(key, options) {
        var _this = _super.call(this, key, options.id) || this;
        _this.state = new state_1.LevelState();
        _this.options = options;
        return _this;
    }
    NestedFacetAccessor.prototype.onResetFilters = function () {
        this.resetState();
    };
    NestedFacetAccessor.prototype.getBuckets = function (level) {
        var buckets = this.getAggregations([this.key, "children", "lvl" + level, "children", "buckets"], []);
        return map(buckets, function (item) {
            item.key = String(item.key);
            return item;
        });
    };
    NestedFacetAccessor.prototype.buildSharedQuery = function (query) {
        var _this = this;
        var levelFilters = this.state.getValue();
        var lastIndex = levelFilters.length - 1;
        var filterTerms = map(levelFilters, function (filter, i) {
            var value = filter[0];
            var isLeaf = i === lastIndex;
            var subField = isLeaf ? ".value" : ".ancestors";
            return query_1.TermQuery(_this.options.field + subField, value);
        });
        if (filterTerms.length > 0) {
            var leafFilter = get(levelFilters, [levelFilters.length - 1, 0], "");
            var parentOfleaf = get(levelFilters, [levelFilters.length - 2, 0], this.options.title || this.key);
            var selectedFilter = {
                id: this.key,
                name: this.translate(parentOfleaf),
                value: leafFilter,
                remove: function () {
                    _this.state = _this.state.clear(levelFilters.length - 1);
                }
            };
            query = query.addFilter(this.uuid, query_1.NestedQuery(this.options.field, query_1.BoolMust(filterTerms))).addSelectedFilter(selectedFilter);
        }
        return query;
    };
    NestedFacetAccessor.prototype.getTermAggs = function () {
        var _a, _b;
        var subAggs = undefined;
        var orderMetric = undefined;
        if (this.options.orderKey) {
            var orderDirection = this.options.orderDirection || "asc";
            var orderKey = this.options.orderKey;
            if (includes(["_count", "_term"], orderKey)) {
                orderMetric = (_a = {}, _a[orderKey] = orderDirection, _a);
            }
            else {
                if (startsWith(orderKey, this.options.field + ".")) {
                    var subAggName = this.options.field + "_order";
                    orderMetric = (_b = {},
                        _b[subAggName] = orderDirection,
                        _b);
                    subAggs = query_1.MinMetric(subAggName, orderKey);
                }
            }
        }
        var valueField = this.options.field + ".value";
        var nBuckets = this.options.size || query_1.DefaultNumberBuckets;
        return query_1.TermsBucket("children", valueField, { size: nBuckets, order: orderMetric }, subAggs);
    };
    NestedFacetAccessor.prototype.buildOwnQuery = function (query) {
        var levelField = this.options.field + ".level";
        var ancestorsField = this.options.field + ".ancestors";
        var startLevel = this.options.startLevel || 1;
        var termAggs = this.getTermAggs();
        var lvlAggs = [];
        var addLevel = function (level, ancestors) {
            if (ancestors === void 0) { ancestors = []; }
            lvlAggs.push(query_1.FilterBucket("lvl" + level, query_1.BoolMust([query_1.TermQuery(levelField, level + startLevel)].concat(ancestors)), termAggs));
        };
        addLevel(0);
        var levels = this.state.getValue();
        each(levels, function (_level, i) {
            var ancestors = map(take(levels, i + 1), function (level) {
                return query_1.TermQuery(ancestorsField, level[0]);
            });
            addLevel(i + 1, ancestors);
        });
        return query.setAggs(query_1.FilterBucket(this.key, query.getFiltersWithoutKeys(this.uuid), query_1.NestedBucket.apply(void 0, ["children",
            this.options.field].concat(lvlAggs))));
    };
    return NestedFacetAccessor;
}(FilterBasedAccessor_1.FilterBasedAccessor));
exports.NestedFacetAccessor = NestedFacetAccessor;
//# sourceMappingURL=NestedFacetAccessor.js.map