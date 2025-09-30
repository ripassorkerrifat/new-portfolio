/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-quill" {
    import * as React from "react";

    export interface QuillOptions {
        debug?: string | boolean;
        modules?: any;
        placeholder?: string;
        readOnly?: boolean;
        theme?: string;
        formats?: string[];
        bounds?: string | HTMLElement;
        scrollingContainer?: string | HTMLElement;
    }

    export interface ReactQuillProps {
        value?: string;
        defaultValue?: string;
        placeholder?: string;
        readOnly?: boolean;
        onChange?: (
            content: string,
            delta: any,
            source: string,
            editor: any
        ) => void;
        onChangeSelection?: (range: any, source: string, editor: any) => void;
        onFocus?: (range: any, source: string, editor: any) => void;
        onBlur?: (previousRange: any, source: string, editor: any) => void;
        onKeyPress?: React.EventHandler<any>;
        onKeyDown?: React.EventHandler<any>;
        onKeyUp?: React.EventHandler<any>;
        modules?: any;
        formats?: string[];
        theme?: string;
        bounds?: string | HTMLElement;
        scrollingContainer?: string | HTMLElement;
        children?: React.ReactElement<any>;
        className?: string;
        style?: React.CSSProperties;
        preserveWhitespace?: boolean;
        tabIndex?: number;
    }

    class ReactQuill extends React.Component<ReactQuillProps> {
        focus(): void;
        blur(): void;
        getEditor(): any;
    }

    export default ReactQuill;
}

declare module "react-quill/dist/quill.snow.css";
