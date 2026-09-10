import assert from "node:assert/strict";
import { test } from "node:test";

import { getApplicationSlug } from "./get-application-slug.ts";

test("getApplicationSlug", async (t) => {
    await t.test("should replace scope delimiter with '--'", () => {
        assert.equal(getApplicationSlug("@foo/bar"), "foo--bar");
    });

    await t.test("should not modify name without scope", () => {
        assert.equal(getApplicationSlug("foo-bar"), "foo-bar");
    });

    await t.test(
        "should support names with multiple subpaths (under scoped name)",
        () => {
            assert.equal(getApplicationSlug("@foo/bar/baz"), "foo--bar/baz");
        },
    );
});
