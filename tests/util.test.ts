import {test, expect} from "bun:test";
import {Level} from "bug-me-sdk-ts";

test("add function", () => {
  expect(Level.Debug == "Debug").toBe(true);
})

test("add other function", () => {
  expect(Level.Debug == "Debug").toBe(false);
})
