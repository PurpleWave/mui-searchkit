import * as React from 'react';
import * as PropTypes from "prop-types";
export declare class RangeComponent extends React.PureComponent<any, {}> {
    static propTypes: {
        onChange: PropTypes.Validator<any>;
        onFinished: PropTypes.Validator<any>;
        min: PropTypes.Validator<any>;
        max: PropTypes.Validator<any>;
        minValue: PropTypes.Requireable<any>;
        maxValue: PropTypes.Requireable<any>;
        items: PropTypes.Requireable<any>;
        disabled: PropTypes.Requireable<any>;
        mod: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        translate: PropTypes.Requireable<any>;
        showHistogram: PropTypes.Requireable<any>;
        showSlider: PropTypes.Requireable<any>;
        showInput: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
export declare function RangeComponentBuilder(components: any): (props: any) => JSX.Element;
export declare const RangeSliderHistogram: (props: any) => JSX.Element;
export declare const RangeSliderHistogramInput: (props: any) => JSX.Element;
export declare const RangeSliderInput: (props: any) => JSX.Element;
export declare const RangeHistogramInput: (props: any) => JSX.Element;
