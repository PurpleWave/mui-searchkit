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
var React = require("react");
var PropTypes = require("prop-types");
var SearchkitManager_1 = require("../SearchkitManager");
var support_1 = require("../support");
var mapValues = require("lodash/mapValues");
var block_1 = require("./block");
var SearchkitComponent = /** @class */ (function (_super) {
    __extends(SearchkitComponent, _super);
    function SearchkitComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.translations = {};
        _this.unmounted = false;
        _this.translate = _this.translate.bind(_this);
        return _this;
    }
    SearchkitComponent.prototype.defineBEMBlocks = function () {
        return null;
    };
    SearchkitComponent.prototype.defineAccessor = function () {
        return null;
    };
    SearchkitComponent.prototype.translate = function (key, interpolations) {
        var translation = ((this.searchkit.translate(key)) ||
            (this.props.translations && this.props.translations[key]) ||
            this.translations[key] || key);
        return support_1.Utils.translate(translation, interpolations);
    };
    Object.defineProperty(SearchkitComponent.prototype, "bemBlocks", {
        get: function () {
            return mapValues(this.defineBEMBlocks(), function (cssClass) {
                return block_1.block(cssClass).el;
            });
        },
        enumerable: true,
        configurable: true
    });
    SearchkitComponent.prototype._getSearchkit = function () {
        return this.props.searchkit || this.context["searchkit"];
    };
    SearchkitComponent.prototype.componentWillMount = function () {
        var _this = this;
        this.searchkit = this._getSearchkit();
        if (this.searchkit) {
            this.accessor = this.defineAccessor();
            if (this.accessor) {
                this.accessor = this.searchkit.addAccessor(this.accessor);
            }
            this.stateListenerUnsubscribe = this.searchkit.emitter.addListener(function () {
                if (!_this.unmounted) {
                    _this.forceUpdate();
                }
            });
        }
        else {
            console.warn("No searchkit found in props or context for " + this.constructor["name"]);
        }
    };
    SearchkitComponent.prototype.componentWillUnmount = function () {
        if (this.stateListenerUnsubscribe) {
            this.stateListenerUnsubscribe();
        }
        if (this.searchkit && this.accessor) {
            this.searchkit.removeAccessor(this.accessor);
        }
        this.unmounted = true;
    };
    SearchkitComponent.prototype.getResults = function () {
        return this.searchkit.results;
    };
    SearchkitComponent.prototype.getHits = function () {
        return this.searchkit.getHits();
    };
    SearchkitComponent.prototype.getHitsCount = function () {
        return this.searchkit.getHitsCount();
    };
    SearchkitComponent.prototype.hasHits = function () {
        return this.searchkit.hasHits();
    };
    SearchkitComponent.prototype.hasHitsChanged = function () {
        return this.searchkit.hasHitsChanged();
    };
    SearchkitComponent.prototype.getQuery = function () {
        return this.searchkit.query;
    };
    SearchkitComponent.prototype.isInitialLoading = function () {
        return this.searchkit.initialLoading;
    };
    SearchkitComponent.prototype.isLoading = function () {
        return this.searchkit.loading;
    };
    SearchkitComponent.prototype.getError = function () {
        return this.searchkit.error;
    };
    SearchkitComponent.contextTypes = {
        searchkit: PropTypes.instanceOf(SearchkitManager_1.SearchkitManager)
    };
    SearchkitComponent.translationsPropType = function (translations) {
        return PropTypes.shape(mapValues(translations, function () { return PropTypes.string; }));
    };
    SearchkitComponent.propTypes = {
        mod: PropTypes.string,
        className: PropTypes.string,
        translations: PropTypes.objectOf(PropTypes.string),
        searchkit: PropTypes.instanceOf(SearchkitManager_1.SearchkitManager)
    };
    return SearchkitComponent;
}(React.Component));
exports.SearchkitComponent = SearchkitComponent;
//# sourceMappingURL=SearchkitComponent.js.map