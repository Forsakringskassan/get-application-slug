# @forsakringskassan/get-application-slug

Utility function to create an application slug.

Replaces scope delimiter with `--`: `@foo/bar` becomes `foo--bar`.

## Usage

`npm install --save-dev @forsakringskassan/get-application-slug`

The package exports two functions:

- `getApplicationSlug` : utility function to create an application slug.
- `getApplicationSelector` : converts the package name into a CSS class selector.

```typescript
import {
    getApplicationSlug,
    getApplicationSelector,
} from "@forsakringskassan/get-application-slug";

const name = "@forsakringskassan/my-application";

const slug = getApplicationSlug(name); // => forsakringskassan--my-application
const selector = getApplicationSelector(name); // => .forsakringskassan--my-application
```
