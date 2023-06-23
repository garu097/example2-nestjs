# Introduction

`Backend source code using nestjs framework`

```bash
#development
$ yarn dev
```

---

### Links

- [NestJS](https://docs.nestjs.com)
  - [Nest Sample](https://github.com/nestjs/nest/tree/master/sample)
- [TypeORM](https://typeorm.io)

### Migration

- Migration generate

```bash
$ yarn migration:generate <path/namefile> -t

#example: yarn migration:generate ./migration/initial -t
```

- Migration run

```bash
$ yarn migration:run

```

- Migration revert

```bash
$ yarn migration:revert

```

# Folders Structure

```js
+-- dist // Source build
+-- migrations // Migrations file
+-- src
|   +-- module
|   |   +-- * // folders
|   |   +-- user // Add folders according to module scale. If it's small, don't need to add folders.
|   |   |   +-- * // folders
|   |   |   +-- dto // DTO (Data Transfer Object) Schema, Validation  using in module
|   |   |   +-- user.constant.ts   // Constant value and Enum common using in module
|   |   |   +-- user.controller.ts // User Controller
|   |   |   +-- user.service.ts    // User Service
|   |   |   +-- user.module.ts     // User Module
|   |   |   +-- user.entity.ts    // Using typeORM
|   |   |   +-- user.*.ts
|   |   |   +-- index.ts
|   +-- common // Using multiple module or global
|   |   +-- constants // Constant value and Enum
|   |   +-- decorators // Nest Decorators
|   |   +-- dto // DTO (Data Transfer Object) Schema, Validation
|   |   +-- filters // Nest Filters
|   |   +-- guards // Nest Guards
|   |   +-- interceptors // Nest Interceptors
|   |   +-- interfaces // TypeScript Interfaces
|   |   +-- middleware // Nest Middleware
|   |   +-- pipes // Nest Pipes
|   |   +-- config // Nest Providers
|   |   +-- providers // Nest Providers
|   |   +-- errors // Handle Exception
|   |   +-- helpers
+-- test // Jest testing
```

### File Naming for Class

```ts
class FooBarNaming {} //= foo-bar.naming.ts

// Example:
class FooController {} //= foo.controller.ts
class BarQueryDto {} //= bar-query.dto.ts
```

# Entity Database Diagram

`<Input here...>`

---

# Global Variables, Constant

- [Common Constant](src/common/constant)

### Handling Exception, Error Code

- [Handling Exception](src/common/errors)
- [Error Code](src/common/constant/error.constant.ts)

---

# List API - Mapping API to Screens

| HTTP Verb | Path         | Controller#Action | Used for   | Screen       | Swagger                                                         |
| :-------- | :----------- | :---------------- | :--------- | :----------- | :-------------------------------------------------------------- |
| POST      | /auth/signin | auth#signin       | user login | Login Screen | [Signin](http://localhost:3000/api#/auth/AuthController_signin) |

# Version Git Management
