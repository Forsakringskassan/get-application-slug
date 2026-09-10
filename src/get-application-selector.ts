import { getApplicationSlug } from "./get-application-slug.ts";

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
