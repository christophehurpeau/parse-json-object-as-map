declare module "parse-json-object-as-map" {
  declare function parseJsonObjectAsMap(text: string, reviver?: (key: any, value: any) => any): any
  export = parseJsonObjectAsMap;
}

