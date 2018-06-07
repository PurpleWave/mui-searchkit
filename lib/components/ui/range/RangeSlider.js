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
var identity = require("lodash/identity");
var Slider = require('rc-slider');
var createSliderWithTooltip = Slider.createSliderWithTooltip;
var Range = createSliderWithTooltip(Slider.Range);
var core_1 = require("../../../core");
var RangeSlider = /** @class */ (function (_super) {
    __extends(RangeSlider, _super);
    function RangeSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = _this.onChange.bind(_this);
        _this.onFinished = _this.onFinished.bind(_this);
        return _this;
    }
    RangeSlider.prototype.onChange = function (_a) {
        var min = _a[0], max = _a[1];
        this.props.onChange({ min: min, max: max });
    };
    RangeSlider.prototype.onFinished = function (_a) {
        var min = _a[0], max = _a[1];
        this.props.onFinished({ min: min, max: max });
    };
    RangeSlider.prototype.render = function () {
        var _a;
        var _b = this.props, mod = _b.mod, className = _b.className, step = _b.step, marks = _b.marks, rangeFormatter = _b.rangeFormatter, min = _b.min, max = _b.max, minValue = _b.minValue, maxValue = _b.maxValue;
        var bemBlocks = {
            container: core_1.block(mod).el
        };
        return (React.createElement("div", { className: bemBlocks.container().mix(className) },
            React.createElement(Range, { min: min, max: max, marks: marks || (_a = {},
                    _a[min] = rangeFormatter(min),
                    _a[max] = rangeFormatter(max),
                    _a), tipFormatter: rangeFormatter, range: true, step: step, value: [minValue, maxValue], onChange: this.onChange, onAfterChange: this.onFinished })));
    };
    RangeSlider.defaultProps = {
        mod: "sk-range-slider",
        rangeFormatter: identity
    };
    return RangeSlider;
}(React.PureComponent));
exports.RangeSlider = RangeSlider;
//# sourceMappingURL=RangeSlider.js.map