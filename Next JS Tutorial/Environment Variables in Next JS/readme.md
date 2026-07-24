# Environment Variables in Next.js

Next.js automatically loads environment variables from `.env` files.

## Environment Variable Load Order

Next.js looks for environment variables in the following order and stops once the variable is found:

1. `process.env`
2. `.env.$(NODE_ENV).local`
3. `.env.local` *(Not checked when `NODE_ENV=test`)*
4. `.env.$(NODE_ENV)`
5. `.env`

> **Note:** If the same variable exists in multiple files, the first one found in the above order is used.

### Example

If `NODE_ENV=development` and the same variable is defined in both:

- `.env.development.local`
- `.env`

Then the value from:

```env
.env.development.local
```

will be used because it has higher priority.

---

# Environment Files

| File | Description |
|------|-------------|
| `.env` | Default variables for all environments |
| `.env.local` | Local overrides (ignored by Git) |
| `.env.development` | Variables used in development |
| `.env.development.local` | Local development overrides |
| `.env.production` | Variables used in production |
| `.env.production.local` | Local production overrides |
| `.env.test` | Variables used during testing |
| `.env.test.local` | Local test overrides |

---

# Example

### `.env`

```env
DATABASE_URL=mysql://localhost:3306/mydb
API_KEY=default_key
```

### `.env.development`

```env
API_KEY=development_key
```

### `.env.development.local`

```env
API_KEY=my_local_dev_key
```

If:

```bash
NODE_ENV=development
```

Then:

```js
process.env.API_KEY
```

returns:

```text
my_local_dev_key
```

---

# Using Environment Variables

```env
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=my-secret-key
```

```js
console.log(process.env.NEXT_PUBLIC_API_URL)
console.log(process.env.SECRET_KEY)
```

---

# Client vs Server Variables

### Server-only

```env
SECRET_KEY=my-secret
```

```js
process.env.SECRET_KEY
```

Only available on the server.

---

### Client-side

Variables that should be accessible in the browser **must** start with `NEXT_PUBLIC_`.

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

```js
process.env.NEXT_PUBLIC_API_URL
```

Available on both the client and the server.

---

# Load Priority Summary

```text
Highest Priority
│
├── process.env
├── .env.$(NODE_ENV).local
├── .env.local
├── .env.$(NODE_ENV)
└── .env
Lowest Priority
```

---

# Good to Know

- Allowed values for `NODE_ENV`:
  - `development`
  - `production`
  - `test`
- `.env.local` is ignored when `NODE_ENV=test`.
- Restart the development server after changing `.env` files.
- Never expose sensitive data to the client. Use the `NEXT_PUBLIC_` prefix only for variables that are safe to expose.