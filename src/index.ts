import {
  isJsonReference,
  isJsonString,
} from '@awesome-typescript/validation-helper'
import type {
  JSONValue,
  Primitive,
} from '@awesome-typescript/validation-helper/dist/types'

export const JSONParse = <T = JSONValue>(value: JSONValue | Primitive): T => {
  if (isJsonReference(value)) {
    return JSON.parse(JSON.stringify(value))
  }

  if (isJsonString(value)) {
    return JSON.parse(value)
  }

  return value
}
