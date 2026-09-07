import assert from "node:assert/strict";
import { test } from "node:test";

import {
    getApplicationSelector,
    getApplicationSlug,
    // eslint-disable-next-line import-x/extensions -- Node native tester requires extension
} from "./get-application-slug.ts";

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
