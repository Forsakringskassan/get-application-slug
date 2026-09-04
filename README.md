# @forsakringskassan/get-application-slug

Utility function to create an application slug.

Replaces scope delimiter with `--`: `@foo/bar` becomes `foo--bar`.

## Usage

`npm install --save-dev @forsakringskassan/get-application-slug`

```javascript
import { getApplicationSlug } from "@forsakringskassan/get-application-slug";

const slug = getApplicationSlug("@forsakringskassan/my-application");
```
