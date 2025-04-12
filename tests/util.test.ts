import {test, expect} from "bun:test";
import {Level} from "../src";

test("add function", () => {
  expect(Level.Debug == "Debug").toBe(true);
})
