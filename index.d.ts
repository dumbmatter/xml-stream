declare module "xml-stream-sax" {
  export default class XmlStream {
    constructor(stream: NodeJS.ReadableStream, encoding?: string);

    collect(selector: string): this;

    preserve(selector: string): this;

    on<T extends { [key: string]: any }>(eventName: string, listener: (item: T) => any): this;
  }
}
