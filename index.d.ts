declare module "xml-stream-sax" {
  export interface XmlStreamItem {
    $?: { [key: string]: string };
    $name: string;
    $text: string;
    $children?: Array<XmlStreamItem | string>;
    subitem: XmlStreamItem[];
  }

  export default class XmlStream {

    /**
     * **XmlStream** is an XML stream filter based on sas-js
     * It traverses a given stream and emits events for predefined selectors
     * Event listeners receive selected elements, context, and trace from root
     * @param stream Readable stream of a xml
     * @param encoding Encoding to use to read contents
     */
    constructor(stream: NodeJS.ReadableStream, encoding?: string);

    /**
     * Collects elements with identical names, specified by a selector
     * They will reside in the parent element as an array
     * @param selector CSS-like selector
     */
    collect(selector: string): this;

    /**
     * Preserves the order of element and text nodes inside elements that match the selector
     * Optionally, preserves whitespace
     * @param selector CSS-like selector
     * @param whitespace Preserve whitespace
     */
    preserve(selector: string, whitespace?: boolean): this;

    /**
     * Adds a listener for the specified event
     * @param eventName
     * @param listener
     */
    on<T extends XmlStreamItem>(eventName: string, listener: (item: T) => any): this;
  }
}
