/**
 * Converts a package name into a slug safe for use as a CSS class name.
 *
 * Replaces the scope prefix and its delimiter with `--`. For example,
 * `@foo/bar` becomes `foo--bar` and `@forsakringskassan/my-app` becomes
 * `forsakringskassan--my-app`. Unscoped names are returned as-is.
 *
 * @param name - The original package name to convert.
 * @returns The transformed CSS-safe application slug.
 */
export function getApplicationSlug(name: string): string {
    return name.replaceAll(/^@([^/]+)\//g, "$1--");
}

/**
 * Converts an application name into a CSS class selector.
 *
 * @param name - The original package name
 * @returns Returns a CSS class selector derived from the application name.
 */
export function getApplicationSelector(name: string): string {
    const slug = getApplicationSlug(name);
    return `.${slug}`;
}
