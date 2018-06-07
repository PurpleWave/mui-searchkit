import * as React from "react";
import * as PropTypes from "prop-types";
import { SearchkitManager } from "../SearchkitManager";
export interface SearchkitProps {
    searchkit: SearchkitManager;
    children?: any;
}
export declare class SearchkitProvider extends React.Component<SearchkitProps, any> {
    static childContextTypes: {
        searchkit: PropTypes.Requireable<any>;
    };
    static propTypes: {
        searchkit: PropTypes.Validator<any>;
        children: PropTypes.Validator<any>;
    };
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getChildContext(): {
        searchkit: SearchkitManager;
    };
    render(): any;
}
