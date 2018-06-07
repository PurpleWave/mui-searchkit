import * as PropTypes from "prop-types";
export interface RangeProps {
    onChange: (range: {
        min: number;
        max: number;
    }) => void;
    onFinished: (range: {
        min: number;
        max: number;
    }) => void;
    min: number;
    max: number;
    minValue?: number;
    maxValue?: number;
    items: Array<any>;
    disabled?: boolean;
    mod?: string;
    className?: string;
    translate?: (s: string) => string;
    [x: string]: any;
    children?: any;
}
export declare const RangePropTypes: {
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
};
