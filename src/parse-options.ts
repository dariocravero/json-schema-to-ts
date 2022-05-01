import {
  JSONSchema7,
  FromSchemaOptions,
  FromSchemaDefaultOptions,
  DeserializationPattern,
} from "./definitions";
import { ParseSchemaOptions } from "./parse-schema";

export type ParseOptions<
  S extends JSONSchema7,
  O extends FromSchemaOptions,
  N extends Omit<ParseSchemaOptions, "definitions"> = {
    parseNotKeyword: O["parseNotKeyword"] extends boolean
      ? O["parseNotKeyword"]
      : FromSchemaDefaultOptions["parseNotKeyword"];
    parseIfThenElseKeywords: O["parseIfThenElseKeywords"] extends boolean
      ? O["parseIfThenElseKeywords"]
      : FromSchemaDefaultOptions["parseIfThenElseKeywords"];
    definitionsPath: O["definitionsPath"] extends string
      ? O["definitionsPath"]
      : FromSchemaDefaultOptions["definitionsPath"];
    deserialize: O["deserialize"] extends DeserializationPattern[] | false
      ? O["deserialize"]
      : FromSchemaDefaultOptions["deserialize"];
  }
> = N & {
  definitions: S extends Record<
    N["definitionsPath"],
    Record<string, JSONSchema7>
  >
    ? S[N["definitionsPath"]]
    : {};
};
