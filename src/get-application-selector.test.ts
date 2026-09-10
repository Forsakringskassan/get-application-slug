import assert from "node:assert/strict";
import { test } from "node:test";
import { getApplicationSelector } from "./get-application-selector.ts";

test("getApplicationSelector", async (t) => {
    await t.test("should prefix a scoped application slug with a dot", () => {
        assert.equal(getApplicationSelector("@foo/bar"), ".foo--bar");
    });

    await t.test(
        "should prefix an unscoped application name with a dot",
        () => {
            assert.equal(getApplicationSelector("foo-bar"), ".foo-bar");
        },
    );
});
