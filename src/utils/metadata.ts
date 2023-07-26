import { Metadata } from "next";

export const getMetadata = (fields: Metadata = {}): Metadata => {
  return {
    ...fields,
  }
}