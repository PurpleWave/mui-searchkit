import { NestedFieldContext } from "./NestedFieldContext";
import { ChildrenFieldContext } from "./ChildrenFieldContext";
import { EmbeddedFieldContext } from "./EmbeddedFieldContext";
export declare const FieldContextFactory: (fieldOptions: any) => NestedFieldContext | ChildrenFieldContext | EmbeddedFieldContext;
