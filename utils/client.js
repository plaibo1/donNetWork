// created client
import * as contentful from "contentful";
const safeJsonStringify = require("safe-json-stringify");

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
});

export const parse = (data) => {
  return JSON.parse(safeJsonStringify(data));
};
