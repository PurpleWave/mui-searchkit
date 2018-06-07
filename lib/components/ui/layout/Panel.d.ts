import * as React from "react";
import * as PropTypes from "prop-types";
export interface PanelProps extends React.Props<Panel> {
    key?: any;
    title?: string;
    mod?: string;
    disabled?: boolean;
    className?: string;
    collapsable?: boolean;
    defaultCollapsed?: boolean;
}
export declare class Panel extends React.PureComponent<PanelProps, {
    collapsed: boolean;
}> {
    static propTypes: {
        title: PropTypes.Requireable<any>;
        disabled: PropTypes.Requireable<any>;
        mod: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        collapsable: PropTypes.Requireable<any>;
        defaultCollapsed: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        disabled: boolean;
        collapsable: boolean;
        defaultCollapsed: boolean;
        mod: string;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    toggleCollapsed(): void;
    render(): JSX.Element;
}
