
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Mine
 * 
 */
export type Mine = $Result.DefaultSelection<Prisma.$MinePayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model LargeSection
 * 
 */
export type LargeSection = $Result.DefaultSelection<Prisma.$LargeSectionPayload>
/**
 * Model MediumSection
 * 
 */
export type MediumSection = $Result.DefaultSelection<Prisma.$MediumSectionPayload>
/**
 * Model SmallSection
 * 
 */
export type SmallSection = $Result.DefaultSelection<Prisma.$SmallSectionPayload>
/**
 * Model MicroSection
 * 
 */
export type MicroSection = $Result.DefaultSelection<Prisma.$MicroSectionPayload>
/**
 * Model UnitSection
 * 
 */
export type UnitSection = $Result.DefaultSelection<Prisma.$UnitSectionPayload>
/**
 * Model SectionType
 * 
 */
export type SectionType = $Result.DefaultSelection<Prisma.$SectionTypePayload>
/**
 * Model SectionItem
 * 
 */
export type SectionItem = $Result.DefaultSelection<Prisma.$SectionItemPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mines
 * const mines = await prisma.mine.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Mines
   * const mines = await prisma.mine.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.mine`: Exposes CRUD operations for the **Mine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mines
    * const mines = await prisma.mine.findMany()
    * ```
    */
  get mine(): Prisma.MineDelegate<ExtArgs>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs>;

  /**
   * `prisma.largeSection`: Exposes CRUD operations for the **LargeSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LargeSections
    * const largeSections = await prisma.largeSection.findMany()
    * ```
    */
  get largeSection(): Prisma.LargeSectionDelegate<ExtArgs>;

  /**
   * `prisma.mediumSection`: Exposes CRUD operations for the **MediumSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediumSections
    * const mediumSections = await prisma.mediumSection.findMany()
    * ```
    */
  get mediumSection(): Prisma.MediumSectionDelegate<ExtArgs>;

  /**
   * `prisma.smallSection`: Exposes CRUD operations for the **SmallSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmallSections
    * const smallSections = await prisma.smallSection.findMany()
    * ```
    */
  get smallSection(): Prisma.SmallSectionDelegate<ExtArgs>;

  /**
   * `prisma.microSection`: Exposes CRUD operations for the **MicroSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MicroSections
    * const microSections = await prisma.microSection.findMany()
    * ```
    */
  get microSection(): Prisma.MicroSectionDelegate<ExtArgs>;

  /**
   * `prisma.unitSection`: Exposes CRUD operations for the **UnitSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitSections
    * const unitSections = await prisma.unitSection.findMany()
    * ```
    */
  get unitSection(): Prisma.UnitSectionDelegate<ExtArgs>;

  /**
   * `prisma.sectionType`: Exposes CRUD operations for the **SectionType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionTypes
    * const sectionTypes = await prisma.sectionType.findMany()
    * ```
    */
  get sectionType(): Prisma.SectionTypeDelegate<ExtArgs>;

  /**
   * `prisma.sectionItem`: Exposes CRUD operations for the **SectionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionItems
    * const sectionItems = await prisma.sectionItem.findMany()
    * ```
    */
  get sectionItem(): Prisma.SectionItemDelegate<ExtArgs>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Mine: 'Mine',
    Owner: 'Owner',
    LargeSection: 'LargeSection',
    MediumSection: 'MediumSection',
    SmallSection: 'SmallSection',
    MicroSection: 'MicroSection',
    UnitSection: 'UnitSection',
    SectionType: 'SectionType',
    SectionItem: 'SectionItem',
    Position: 'Position',
    Role: 'Role',
    Permission: 'Permission',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "mine" | "owner" | "largeSection" | "mediumSection" | "smallSection" | "microSection" | "unitSection" | "sectionType" | "sectionItem" | "position" | "role" | "permission" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Mine: {
        payload: Prisma.$MinePayload<ExtArgs>
        fields: Prisma.MineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload>
          }
          findFirst: {
            args: Prisma.MineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload>
          }
          findMany: {
            args: Prisma.MineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload>[]
          }
          create: {
            args: Prisma.MineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload>
          }
          createMany: {
            args: Prisma.MineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload>[]
          }
          delete: {
            args: Prisma.MineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload>
          }
          update: {
            args: Prisma.MineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload>
          }
          deleteMany: {
            args: Prisma.MineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MinePayload>
          }
          aggregate: {
            args: Prisma.MineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMine>
          }
          groupBy: {
            args: Prisma.MineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MineCountArgs<ExtArgs>
            result: $Utils.Optional<MineCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      LargeSection: {
        payload: Prisma.$LargeSectionPayload<ExtArgs>
        fields: Prisma.LargeSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LargeSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LargeSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload>
          }
          findFirst: {
            args: Prisma.LargeSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LargeSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload>
          }
          findMany: {
            args: Prisma.LargeSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload>[]
          }
          create: {
            args: Prisma.LargeSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload>
          }
          createMany: {
            args: Prisma.LargeSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LargeSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload>[]
          }
          delete: {
            args: Prisma.LargeSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload>
          }
          update: {
            args: Prisma.LargeSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload>
          }
          deleteMany: {
            args: Prisma.LargeSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LargeSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LargeSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LargeSectionPayload>
          }
          aggregate: {
            args: Prisma.LargeSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLargeSection>
          }
          groupBy: {
            args: Prisma.LargeSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LargeSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LargeSectionCountArgs<ExtArgs>
            result: $Utils.Optional<LargeSectionCountAggregateOutputType> | number
          }
        }
      }
      MediumSection: {
        payload: Prisma.$MediumSectionPayload<ExtArgs>
        fields: Prisma.MediumSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediumSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediumSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload>
          }
          findFirst: {
            args: Prisma.MediumSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediumSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload>
          }
          findMany: {
            args: Prisma.MediumSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload>[]
          }
          create: {
            args: Prisma.MediumSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload>
          }
          createMany: {
            args: Prisma.MediumSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediumSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload>[]
          }
          delete: {
            args: Prisma.MediumSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload>
          }
          update: {
            args: Prisma.MediumSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload>
          }
          deleteMany: {
            args: Prisma.MediumSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediumSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediumSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediumSectionPayload>
          }
          aggregate: {
            args: Prisma.MediumSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediumSection>
          }
          groupBy: {
            args: Prisma.MediumSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediumSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediumSectionCountArgs<ExtArgs>
            result: $Utils.Optional<MediumSectionCountAggregateOutputType> | number
          }
        }
      }
      SmallSection: {
        payload: Prisma.$SmallSectionPayload<ExtArgs>
        fields: Prisma.SmallSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmallSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmallSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload>
          }
          findFirst: {
            args: Prisma.SmallSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmallSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload>
          }
          findMany: {
            args: Prisma.SmallSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload>[]
          }
          create: {
            args: Prisma.SmallSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload>
          }
          createMany: {
            args: Prisma.SmallSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmallSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload>[]
          }
          delete: {
            args: Prisma.SmallSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload>
          }
          update: {
            args: Prisma.SmallSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload>
          }
          deleteMany: {
            args: Prisma.SmallSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmallSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SmallSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmallSectionPayload>
          }
          aggregate: {
            args: Prisma.SmallSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmallSection>
          }
          groupBy: {
            args: Prisma.SmallSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmallSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmallSectionCountArgs<ExtArgs>
            result: $Utils.Optional<SmallSectionCountAggregateOutputType> | number
          }
        }
      }
      MicroSection: {
        payload: Prisma.$MicroSectionPayload<ExtArgs>
        fields: Prisma.MicroSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MicroSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MicroSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload>
          }
          findFirst: {
            args: Prisma.MicroSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MicroSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload>
          }
          findMany: {
            args: Prisma.MicroSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload>[]
          }
          create: {
            args: Prisma.MicroSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload>
          }
          createMany: {
            args: Prisma.MicroSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MicroSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload>[]
          }
          delete: {
            args: Prisma.MicroSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload>
          }
          update: {
            args: Prisma.MicroSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload>
          }
          deleteMany: {
            args: Prisma.MicroSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MicroSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MicroSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroSectionPayload>
          }
          aggregate: {
            args: Prisma.MicroSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMicroSection>
          }
          groupBy: {
            args: Prisma.MicroSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MicroSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MicroSectionCountArgs<ExtArgs>
            result: $Utils.Optional<MicroSectionCountAggregateOutputType> | number
          }
        }
      }
      UnitSection: {
        payload: Prisma.$UnitSectionPayload<ExtArgs>
        fields: Prisma.UnitSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload>
          }
          findFirst: {
            args: Prisma.UnitSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload>
          }
          findMany: {
            args: Prisma.UnitSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload>[]
          }
          create: {
            args: Prisma.UnitSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload>
          }
          createMany: {
            args: Prisma.UnitSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload>[]
          }
          delete: {
            args: Prisma.UnitSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload>
          }
          update: {
            args: Prisma.UnitSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload>
          }
          deleteMany: {
            args: Prisma.UnitSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitSectionPayload>
          }
          aggregate: {
            args: Prisma.UnitSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitSection>
          }
          groupBy: {
            args: Prisma.UnitSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitSectionCountArgs<ExtArgs>
            result: $Utils.Optional<UnitSectionCountAggregateOutputType> | number
          }
        }
      }
      SectionType: {
        payload: Prisma.$SectionTypePayload<ExtArgs>
        fields: Prisma.SectionTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload>
          }
          findFirst: {
            args: Prisma.SectionTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload>
          }
          findMany: {
            args: Prisma.SectionTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload>[]
          }
          create: {
            args: Prisma.SectionTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload>
          }
          createMany: {
            args: Prisma.SectionTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload>[]
          }
          delete: {
            args: Prisma.SectionTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload>
          }
          update: {
            args: Prisma.SectionTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload>
          }
          deleteMany: {
            args: Prisma.SectionTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTypePayload>
          }
          aggregate: {
            args: Prisma.SectionTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionType>
          }
          groupBy: {
            args: Prisma.SectionTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionTypeCountArgs<ExtArgs>
            result: $Utils.Optional<SectionTypeCountAggregateOutputType> | number
          }
        }
      }
      SectionItem: {
        payload: Prisma.$SectionItemPayload<ExtArgs>
        fields: Prisma.SectionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload>
          }
          findFirst: {
            args: Prisma.SectionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload>
          }
          findMany: {
            args: Prisma.SectionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload>[]
          }
          create: {
            args: Prisma.SectionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload>
          }
          createMany: {
            args: Prisma.SectionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload>[]
          }
          delete: {
            args: Prisma.SectionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload>
          }
          update: {
            args: Prisma.SectionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload>
          }
          deleteMany: {
            args: Prisma.SectionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionItemPayload>
          }
          aggregate: {
            args: Prisma.SectionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionItem>
          }
          groupBy: {
            args: Prisma.SectionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionItemCountArgs<ExtArgs>
            result: $Utils.Optional<SectionItemCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MineCountOutputType
   */

  export type MineCountOutputType = {
    largeSections: number
  }

  export type MineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    largeSections?: boolean | MineCountOutputTypeCountLargeSectionsArgs
  }

  // Custom InputTypes
  /**
   * MineCountOutputType without action
   */
  export type MineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MineCountOutputType
     */
    select?: MineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MineCountOutputType without action
   */
  export type MineCountOutputTypeCountLargeSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LargeSectionWhereInput
  }


  /**
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    mines: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mines?: boolean | OwnerCountOutputTypeCountMinesArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountMinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MineWhereInput
  }


  /**
   * Count Type LargeSectionCountOutputType
   */

  export type LargeSectionCountOutputType = {
    mediumSections: number
  }

  export type LargeSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediumSections?: boolean | LargeSectionCountOutputTypeCountMediumSectionsArgs
  }

  // Custom InputTypes
  /**
   * LargeSectionCountOutputType without action
   */
  export type LargeSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSectionCountOutputType
     */
    select?: LargeSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LargeSectionCountOutputType without action
   */
  export type LargeSectionCountOutputTypeCountMediumSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediumSectionWhereInput
  }


  /**
   * Count Type MediumSectionCountOutputType
   */

  export type MediumSectionCountOutputType = {
    smallSections: number
  }

  export type MediumSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smallSections?: boolean | MediumSectionCountOutputTypeCountSmallSectionsArgs
  }

  // Custom InputTypes
  /**
   * MediumSectionCountOutputType without action
   */
  export type MediumSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSectionCountOutputType
     */
    select?: MediumSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediumSectionCountOutputType without action
   */
  export type MediumSectionCountOutputTypeCountSmallSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmallSectionWhereInput
  }


  /**
   * Count Type SmallSectionCountOutputType
   */

  export type SmallSectionCountOutputType = {
    microSections: number
  }

  export type SmallSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microSections?: boolean | SmallSectionCountOutputTypeCountMicroSectionsArgs
  }

  // Custom InputTypes
  /**
   * SmallSectionCountOutputType without action
   */
  export type SmallSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSectionCountOutputType
     */
    select?: SmallSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SmallSectionCountOutputType without action
   */
  export type SmallSectionCountOutputTypeCountMicroSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicroSectionWhereInput
  }


  /**
   * Count Type MicroSectionCountOutputType
   */

  export type MicroSectionCountOutputType = {
    unitSections: number
  }

  export type MicroSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unitSections?: boolean | MicroSectionCountOutputTypeCountUnitSectionsArgs
  }

  // Custom InputTypes
  /**
   * MicroSectionCountOutputType without action
   */
  export type MicroSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSectionCountOutputType
     */
    select?: MicroSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MicroSectionCountOutputType without action
   */
  export type MicroSectionCountOutputTypeCountUnitSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitSectionWhereInput
  }


  /**
   * Count Type SectionTypeCountOutputType
   */

  export type SectionTypeCountOutputType = {
    largeSections: number
    mediumSections: number
    smallSections: number
    microSections: number
    unitSections: number
    sectionItems: number
  }

  export type SectionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    largeSections?: boolean | SectionTypeCountOutputTypeCountLargeSectionsArgs
    mediumSections?: boolean | SectionTypeCountOutputTypeCountMediumSectionsArgs
    smallSections?: boolean | SectionTypeCountOutputTypeCountSmallSectionsArgs
    microSections?: boolean | SectionTypeCountOutputTypeCountMicroSectionsArgs
    unitSections?: boolean | SectionTypeCountOutputTypeCountUnitSectionsArgs
    sectionItems?: boolean | SectionTypeCountOutputTypeCountSectionItemsArgs
  }

  // Custom InputTypes
  /**
   * SectionTypeCountOutputType without action
   */
  export type SectionTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTypeCountOutputType
     */
    select?: SectionTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionTypeCountOutputType without action
   */
  export type SectionTypeCountOutputTypeCountLargeSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LargeSectionWhereInput
  }

  /**
   * SectionTypeCountOutputType without action
   */
  export type SectionTypeCountOutputTypeCountMediumSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediumSectionWhereInput
  }

  /**
   * SectionTypeCountOutputType without action
   */
  export type SectionTypeCountOutputTypeCountSmallSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmallSectionWhereInput
  }

  /**
   * SectionTypeCountOutputType without action
   */
  export type SectionTypeCountOutputTypeCountMicroSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicroSectionWhereInput
  }

  /**
   * SectionTypeCountOutputType without action
   */
  export type SectionTypeCountOutputTypeCountUnitSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitSectionWhereInput
  }

  /**
   * SectionTypeCountOutputType without action
   */
  export type SectionTypeCountOutputTypeCountSectionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionItemWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    Users: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | PositionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    Users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    CreatedUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CreatedUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Mine
   */

  export type AggregateMine = {
    _count: MineCountAggregateOutputType | null
    _avg: MineAvgAggregateOutputType | null
    _sum: MineSumAggregateOutputType | null
    _min: MineMinAggregateOutputType | null
    _max: MineMaxAggregateOutputType | null
  }

  export type MineAvgAggregateOutputType = {
    mineId: number | null
    locationLatitude: Decimal | null
    locationLongitude: Decimal | null
    ownerId: number | null
    productionCapacity: Decimal | null
  }

  export type MineSumAggregateOutputType = {
    mineId: number | null
    locationLatitude: Decimal | null
    locationLongitude: Decimal | null
    ownerId: number | null
    productionCapacity: Decimal | null
  }

  export type MineMinAggregateOutputType = {
    mineId: number | null
    mineName: string | null
    locationLatitude: Decimal | null
    locationLongitude: Decimal | null
    address: string | null
    ownerId: number | null
    mineType: string | null
    productionCapacity: Decimal | null
    operationalStatus: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type MineMaxAggregateOutputType = {
    mineId: number | null
    mineName: string | null
    locationLatitude: Decimal | null
    locationLongitude: Decimal | null
    address: string | null
    ownerId: number | null
    mineType: string | null
    productionCapacity: Decimal | null
    operationalStatus: string | null
    startDate: Date | null
    endDate: Date | null
  }

  export type MineCountAggregateOutputType = {
    mineId: number
    mineName: number
    locationLatitude: number
    locationLongitude: number
    address: number
    ownerId: number
    mineType: number
    productionCapacity: number
    operationalStatus: number
    startDate: number
    endDate: number
    _all: number
  }


  export type MineAvgAggregateInputType = {
    mineId?: true
    locationLatitude?: true
    locationLongitude?: true
    ownerId?: true
    productionCapacity?: true
  }

  export type MineSumAggregateInputType = {
    mineId?: true
    locationLatitude?: true
    locationLongitude?: true
    ownerId?: true
    productionCapacity?: true
  }

  export type MineMinAggregateInputType = {
    mineId?: true
    mineName?: true
    locationLatitude?: true
    locationLongitude?: true
    address?: true
    ownerId?: true
    mineType?: true
    productionCapacity?: true
    operationalStatus?: true
    startDate?: true
    endDate?: true
  }

  export type MineMaxAggregateInputType = {
    mineId?: true
    mineName?: true
    locationLatitude?: true
    locationLongitude?: true
    address?: true
    ownerId?: true
    mineType?: true
    productionCapacity?: true
    operationalStatus?: true
    startDate?: true
    endDate?: true
  }

  export type MineCountAggregateInputType = {
    mineId?: true
    mineName?: true
    locationLatitude?: true
    locationLongitude?: true
    address?: true
    ownerId?: true
    mineType?: true
    productionCapacity?: true
    operationalStatus?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type MineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mine to aggregate.
     */
    where?: MineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mines to fetch.
     */
    orderBy?: MineOrderByWithRelationInput | MineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mines
    **/
    _count?: true | MineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MineMaxAggregateInputType
  }

  export type GetMineAggregateType<T extends MineAggregateArgs> = {
        [P in keyof T & keyof AggregateMine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMine[P]>
      : GetScalarType<T[P], AggregateMine[P]>
  }




  export type MineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MineWhereInput
    orderBy?: MineOrderByWithAggregationInput | MineOrderByWithAggregationInput[]
    by: MineScalarFieldEnum[] | MineScalarFieldEnum
    having?: MineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MineCountAggregateInputType | true
    _avg?: MineAvgAggregateInputType
    _sum?: MineSumAggregateInputType
    _min?: MineMinAggregateInputType
    _max?: MineMaxAggregateInputType
  }

  export type MineGroupByOutputType = {
    mineId: number
    mineName: string
    locationLatitude: Decimal
    locationLongitude: Decimal
    address: string
    ownerId: number
    mineType: string
    productionCapacity: Decimal
    operationalStatus: string
    startDate: Date
    endDate: Date | null
    _count: MineCountAggregateOutputType | null
    _avg: MineAvgAggregateOutputType | null
    _sum: MineSumAggregateOutputType | null
    _min: MineMinAggregateOutputType | null
    _max: MineMaxAggregateOutputType | null
  }

  type GetMineGroupByPayload<T extends MineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MineGroupByOutputType[P]>
            : GetScalarType<T[P], MineGroupByOutputType[P]>
        }
      >
    >


  export type MineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mineId?: boolean
    mineName?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    address?: boolean
    ownerId?: boolean
    mineType?: boolean
    productionCapacity?: boolean
    operationalStatus?: boolean
    startDate?: boolean
    endDate?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    largeSections?: boolean | Mine$largeSectionsArgs<ExtArgs>
    _count?: boolean | MineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mine"]>

  export type MineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mineId?: boolean
    mineName?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    address?: boolean
    ownerId?: boolean
    mineType?: boolean
    productionCapacity?: boolean
    operationalStatus?: boolean
    startDate?: boolean
    endDate?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mine"]>

  export type MineSelectScalar = {
    mineId?: boolean
    mineName?: boolean
    locationLatitude?: boolean
    locationLongitude?: boolean
    address?: boolean
    ownerId?: boolean
    mineType?: boolean
    productionCapacity?: boolean
    operationalStatus?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type MineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    largeSections?: boolean | Mine$largeSectionsArgs<ExtArgs>
    _count?: boolean | MineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $MinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mine"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
      largeSections: Prisma.$LargeSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      mineId: number
      mineName: string
      locationLatitude: Prisma.Decimal
      locationLongitude: Prisma.Decimal
      address: string
      ownerId: number
      mineType: string
      productionCapacity: Prisma.Decimal
      operationalStatus: string
      startDate: Date
      endDate: Date | null
    }, ExtArgs["result"]["mine"]>
    composites: {}
  }

  type MineGetPayload<S extends boolean | null | undefined | MineDefaultArgs> = $Result.GetResult<Prisma.$MinePayload, S>

  type MineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MineCountAggregateInputType | true
    }

  export interface MineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mine'], meta: { name: 'Mine' } }
    /**
     * Find zero or one Mine that matches the filter.
     * @param {MineFindUniqueArgs} args - Arguments to find a Mine
     * @example
     * // Get one Mine
     * const mine = await prisma.mine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MineFindUniqueArgs>(args: SelectSubset<T, MineFindUniqueArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MineFindUniqueOrThrowArgs} args - Arguments to find a Mine
     * @example
     * // Get one Mine
     * const mine = await prisma.mine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MineFindUniqueOrThrowArgs>(args: SelectSubset<T, MineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineFindFirstArgs} args - Arguments to find a Mine
     * @example
     * // Get one Mine
     * const mine = await prisma.mine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MineFindFirstArgs>(args?: SelectSubset<T, MineFindFirstArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineFindFirstOrThrowArgs} args - Arguments to find a Mine
     * @example
     * // Get one Mine
     * const mine = await prisma.mine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MineFindFirstOrThrowArgs>(args?: SelectSubset<T, MineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mines
     * const mines = await prisma.mine.findMany()
     * 
     * // Get first 10 Mines
     * const mines = await prisma.mine.findMany({ take: 10 })
     * 
     * // Only select the `mineId`
     * const mineWithMineIdOnly = await prisma.mine.findMany({ select: { mineId: true } })
     * 
     */
    findMany<T extends MineFindManyArgs>(args?: SelectSubset<T, MineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mine.
     * @param {MineCreateArgs} args - Arguments to create a Mine.
     * @example
     * // Create one Mine
     * const Mine = await prisma.mine.create({
     *   data: {
     *     // ... data to create a Mine
     *   }
     * })
     * 
     */
    create<T extends MineCreateArgs>(args: SelectSubset<T, MineCreateArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mines.
     * @param {MineCreateManyArgs} args - Arguments to create many Mines.
     * @example
     * // Create many Mines
     * const mine = await prisma.mine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MineCreateManyArgs>(args?: SelectSubset<T, MineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mines and returns the data saved in the database.
     * @param {MineCreateManyAndReturnArgs} args - Arguments to create many Mines.
     * @example
     * // Create many Mines
     * const mine = await prisma.mine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mines and only return the `mineId`
     * const mineWithMineIdOnly = await prisma.mine.createManyAndReturn({ 
     *   select: { mineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MineCreateManyAndReturnArgs>(args?: SelectSubset<T, MineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mine.
     * @param {MineDeleteArgs} args - Arguments to delete one Mine.
     * @example
     * // Delete one Mine
     * const Mine = await prisma.mine.delete({
     *   where: {
     *     // ... filter to delete one Mine
     *   }
     * })
     * 
     */
    delete<T extends MineDeleteArgs>(args: SelectSubset<T, MineDeleteArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mine.
     * @param {MineUpdateArgs} args - Arguments to update one Mine.
     * @example
     * // Update one Mine
     * const mine = await prisma.mine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MineUpdateArgs>(args: SelectSubset<T, MineUpdateArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mines.
     * @param {MineDeleteManyArgs} args - Arguments to filter Mines to delete.
     * @example
     * // Delete a few Mines
     * const { count } = await prisma.mine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MineDeleteManyArgs>(args?: SelectSubset<T, MineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mines
     * const mine = await prisma.mine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MineUpdateManyArgs>(args: SelectSubset<T, MineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mine.
     * @param {MineUpsertArgs} args - Arguments to update or create a Mine.
     * @example
     * // Update or create a Mine
     * const mine = await prisma.mine.upsert({
     *   create: {
     *     // ... data to create a Mine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mine we want to update
     *   }
     * })
     */
    upsert<T extends MineUpsertArgs>(args: SelectSubset<T, MineUpsertArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineCountArgs} args - Arguments to filter Mines to count.
     * @example
     * // Count the number of Mines
     * const count = await prisma.mine.count({
     *   where: {
     *     // ... the filter for the Mines we want to count
     *   }
     * })
    **/
    count<T extends MineCountArgs>(
      args?: Subset<T, MineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MineAggregateArgs>(args: Subset<T, MineAggregateArgs>): Prisma.PrismaPromise<GetMineAggregateType<T>>

    /**
     * Group by Mine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MineGroupByArgs['orderBy'] }
        : { orderBy?: MineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mine model
   */
  readonly fields: MineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    largeSections<T extends Mine$largeSectionsArgs<ExtArgs> = {}>(args?: Subset<T, Mine$largeSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mine model
   */ 
  interface MineFieldRefs {
    readonly mineId: FieldRef<"Mine", 'Int'>
    readonly mineName: FieldRef<"Mine", 'String'>
    readonly locationLatitude: FieldRef<"Mine", 'Decimal'>
    readonly locationLongitude: FieldRef<"Mine", 'Decimal'>
    readonly address: FieldRef<"Mine", 'String'>
    readonly ownerId: FieldRef<"Mine", 'Int'>
    readonly mineType: FieldRef<"Mine", 'String'>
    readonly productionCapacity: FieldRef<"Mine", 'Decimal'>
    readonly operationalStatus: FieldRef<"Mine", 'String'>
    readonly startDate: FieldRef<"Mine", 'DateTime'>
    readonly endDate: FieldRef<"Mine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mine findUnique
   */
  export type MineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * Filter, which Mine to fetch.
     */
    where: MineWhereUniqueInput
  }

  /**
   * Mine findUniqueOrThrow
   */
  export type MineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * Filter, which Mine to fetch.
     */
    where: MineWhereUniqueInput
  }

  /**
   * Mine findFirst
   */
  export type MineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * Filter, which Mine to fetch.
     */
    where?: MineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mines to fetch.
     */
    orderBy?: MineOrderByWithRelationInput | MineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mines.
     */
    cursor?: MineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mines.
     */
    distinct?: MineScalarFieldEnum | MineScalarFieldEnum[]
  }

  /**
   * Mine findFirstOrThrow
   */
  export type MineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * Filter, which Mine to fetch.
     */
    where?: MineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mines to fetch.
     */
    orderBy?: MineOrderByWithRelationInput | MineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mines.
     */
    cursor?: MineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mines.
     */
    distinct?: MineScalarFieldEnum | MineScalarFieldEnum[]
  }

  /**
   * Mine findMany
   */
  export type MineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * Filter, which Mines to fetch.
     */
    where?: MineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mines to fetch.
     */
    orderBy?: MineOrderByWithRelationInput | MineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mines.
     */
    cursor?: MineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mines.
     */
    skip?: number
    distinct?: MineScalarFieldEnum | MineScalarFieldEnum[]
  }

  /**
   * Mine create
   */
  export type MineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * The data needed to create a Mine.
     */
    data: XOR<MineCreateInput, MineUncheckedCreateInput>
  }

  /**
   * Mine createMany
   */
  export type MineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mines.
     */
    data: MineCreateManyInput | MineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mine createManyAndReturn
   */
  export type MineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Mines.
     */
    data: MineCreateManyInput | MineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mine update
   */
  export type MineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * The data needed to update a Mine.
     */
    data: XOR<MineUpdateInput, MineUncheckedUpdateInput>
    /**
     * Choose, which Mine to update.
     */
    where: MineWhereUniqueInput
  }

  /**
   * Mine updateMany
   */
  export type MineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mines.
     */
    data: XOR<MineUpdateManyMutationInput, MineUncheckedUpdateManyInput>
    /**
     * Filter which Mines to update
     */
    where?: MineWhereInput
  }

  /**
   * Mine upsert
   */
  export type MineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * The filter to search for the Mine to update in case it exists.
     */
    where: MineWhereUniqueInput
    /**
     * In case the Mine found by the `where` argument doesn't exist, create a new Mine with this data.
     */
    create: XOR<MineCreateInput, MineUncheckedCreateInput>
    /**
     * In case the Mine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MineUpdateInput, MineUncheckedUpdateInput>
  }

  /**
   * Mine delete
   */
  export type MineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    /**
     * Filter which Mine to delete.
     */
    where: MineWhereUniqueInput
  }

  /**
   * Mine deleteMany
   */
  export type MineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mines to delete
     */
    where?: MineWhereInput
  }

  /**
   * Mine.largeSections
   */
  export type Mine$largeSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    where?: LargeSectionWhereInput
    orderBy?: LargeSectionOrderByWithRelationInput | LargeSectionOrderByWithRelationInput[]
    cursor?: LargeSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LargeSectionScalarFieldEnum | LargeSectionScalarFieldEnum[]
  }

  /**
   * Mine without action
   */
  export type MineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerAvgAggregateOutputType = {
    ownerId: number | null
  }

  export type OwnerSumAggregateOutputType = {
    ownerId: number | null
  }

  export type OwnerMinAggregateOutputType = {
    ownerId: number | null
    ownerName: string | null
    contactName: string | null
    contactEmail: string | null
    contactPhone: string | null
  }

  export type OwnerMaxAggregateOutputType = {
    ownerId: number | null
    ownerName: string | null
    contactName: string | null
    contactEmail: string | null
    contactPhone: string | null
  }

  export type OwnerCountAggregateOutputType = {
    ownerId: number
    ownerName: number
    contactName: number
    contactEmail: number
    contactPhone: number
    _all: number
  }


  export type OwnerAvgAggregateInputType = {
    ownerId?: true
  }

  export type OwnerSumAggregateInputType = {
    ownerId?: true
  }

  export type OwnerMinAggregateInputType = {
    ownerId?: true
    ownerName?: true
    contactName?: true
    contactEmail?: true
    contactPhone?: true
  }

  export type OwnerMaxAggregateInputType = {
    ownerId?: true
    ownerName?: true
    contactName?: true
    contactEmail?: true
    contactPhone?: true
  }

  export type OwnerCountAggregateInputType = {
    ownerId?: true
    ownerName?: true
    contactName?: true
    contactEmail?: true
    contactPhone?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _avg?: OwnerAvgAggregateInputType
    _sum?: OwnerSumAggregateInputType
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    ownerId: number
    ownerName: string
    contactName: string
    contactEmail: string
    contactPhone: string
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerId?: boolean
    ownerName?: boolean
    contactName?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    mines?: boolean | Owner$minesArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ownerId?: boolean
    ownerName?: boolean
    contactName?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    ownerId?: boolean
    ownerName?: boolean
    contactName?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
  }

  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mines?: boolean | Owner$minesArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      mines: Prisma.$MinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ownerId: number
      ownerName: string
      contactName: string
      contactEmail: string
      contactPhone: string
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `ownerId`
     * const ownerWithOwnerIdOnly = await prisma.owner.findMany({ select: { ownerId: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `ownerId`
     * const ownerWithOwnerIdOnly = await prisma.owner.createManyAndReturn({ 
     *   select: { ownerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mines<T extends Owner$minesArgs<ExtArgs> = {}>(args?: Subset<T, Owner$minesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Owner model
   */ 
  interface OwnerFieldRefs {
    readonly ownerId: FieldRef<"Owner", 'Int'>
    readonly ownerName: FieldRef<"Owner", 'String'>
    readonly contactName: FieldRef<"Owner", 'String'>
    readonly contactEmail: FieldRef<"Owner", 'String'>
    readonly contactPhone: FieldRef<"Owner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
  }

  /**
   * Owner.mines
   */
  export type Owner$minesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    where?: MineWhereInput
    orderBy?: MineOrderByWithRelationInput | MineOrderByWithRelationInput[]
    cursor?: MineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MineScalarFieldEnum | MineScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model LargeSection
   */

  export type AggregateLargeSection = {
    _count: LargeSectionCountAggregateOutputType | null
    _avg: LargeSectionAvgAggregateOutputType | null
    _sum: LargeSectionSumAggregateOutputType | null
    _min: LargeSectionMinAggregateOutputType | null
    _max: LargeSectionMaxAggregateOutputType | null
  }

  export type LargeSectionAvgAggregateOutputType = {
    sectionId: number | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
  }

  export type LargeSectionSumAggregateOutputType = {
    sectionId: number | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
  }

  export type LargeSectionMinAggregateOutputType = {
    sectionId: number | null
    name: string | null
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LargeSectionMaxAggregateOutputType = {
    sectionId: number | null
    name: string | null
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LargeSectionCountAggregateOutputType = {
    sectionId: number
    name: number
    description: number
    area: number
    typeId: number
    insiderToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LargeSectionAvgAggregateInputType = {
    sectionId?: true
    area?: true
    typeId?: true
    insiderToId?: true
  }

  export type LargeSectionSumAggregateInputType = {
    sectionId?: true
    area?: true
    typeId?: true
    insiderToId?: true
  }

  export type LargeSectionMinAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LargeSectionMaxAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LargeSectionCountAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LargeSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LargeSection to aggregate.
     */
    where?: LargeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LargeSections to fetch.
     */
    orderBy?: LargeSectionOrderByWithRelationInput | LargeSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LargeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LargeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LargeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LargeSections
    **/
    _count?: true | LargeSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LargeSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LargeSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LargeSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LargeSectionMaxAggregateInputType
  }

  export type GetLargeSectionAggregateType<T extends LargeSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateLargeSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLargeSection[P]>
      : GetScalarType<T[P], AggregateLargeSection[P]>
  }




  export type LargeSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LargeSectionWhereInput
    orderBy?: LargeSectionOrderByWithAggregationInput | LargeSectionOrderByWithAggregationInput[]
    by: LargeSectionScalarFieldEnum[] | LargeSectionScalarFieldEnum
    having?: LargeSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LargeSectionCountAggregateInputType | true
    _avg?: LargeSectionAvgAggregateInputType
    _sum?: LargeSectionSumAggregateInputType
    _min?: LargeSectionMinAggregateInputType
    _max?: LargeSectionMaxAggregateInputType
  }

  export type LargeSectionGroupByOutputType = {
    sectionId: number
    name: string
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date
    updatedAt: Date
    _count: LargeSectionCountAggregateOutputType | null
    _avg: LargeSectionAvgAggregateOutputType | null
    _sum: LargeSectionSumAggregateOutputType | null
    _min: LargeSectionMinAggregateOutputType | null
    _max: LargeSectionMaxAggregateOutputType | null
  }

  type GetLargeSectionGroupByPayload<T extends LargeSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LargeSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LargeSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LargeSectionGroupByOutputType[P]>
            : GetScalarType<T[P], LargeSectionGroupByOutputType[P]>
        }
      >
    >


  export type LargeSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mine?: boolean | LargeSection$mineArgs<ExtArgs>
    sectionType?: boolean | LargeSection$sectionTypeArgs<ExtArgs>
    mediumSections?: boolean | LargeSection$mediumSectionsArgs<ExtArgs>
    _count?: boolean | LargeSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["largeSection"]>

  export type LargeSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mine?: boolean | LargeSection$mineArgs<ExtArgs>
    sectionType?: boolean | LargeSection$sectionTypeArgs<ExtArgs>
  }, ExtArgs["result"]["largeSection"]>

  export type LargeSectionSelectScalar = {
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LargeSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mine?: boolean | LargeSection$mineArgs<ExtArgs>
    sectionType?: boolean | LargeSection$sectionTypeArgs<ExtArgs>
    mediumSections?: boolean | LargeSection$mediumSectionsArgs<ExtArgs>
    _count?: boolean | LargeSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LargeSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mine?: boolean | LargeSection$mineArgs<ExtArgs>
    sectionType?: boolean | LargeSection$sectionTypeArgs<ExtArgs>
  }

  export type $LargeSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LargeSection"
    objects: {
      mine: Prisma.$MinePayload<ExtArgs> | null
      sectionType: Prisma.$SectionTypePayload<ExtArgs> | null
      mediumSections: Prisma.$MediumSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sectionId: number
      name: string
      description: string | null
      area: Prisma.Decimal | null
      typeId: number | null
      insiderToId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["largeSection"]>
    composites: {}
  }

  type LargeSectionGetPayload<S extends boolean | null | undefined | LargeSectionDefaultArgs> = $Result.GetResult<Prisma.$LargeSectionPayload, S>

  type LargeSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LargeSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LargeSectionCountAggregateInputType | true
    }

  export interface LargeSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LargeSection'], meta: { name: 'LargeSection' } }
    /**
     * Find zero or one LargeSection that matches the filter.
     * @param {LargeSectionFindUniqueArgs} args - Arguments to find a LargeSection
     * @example
     * // Get one LargeSection
     * const largeSection = await prisma.largeSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LargeSectionFindUniqueArgs>(args: SelectSubset<T, LargeSectionFindUniqueArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LargeSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LargeSectionFindUniqueOrThrowArgs} args - Arguments to find a LargeSection
     * @example
     * // Get one LargeSection
     * const largeSection = await prisma.largeSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LargeSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, LargeSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LargeSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeSectionFindFirstArgs} args - Arguments to find a LargeSection
     * @example
     * // Get one LargeSection
     * const largeSection = await prisma.largeSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LargeSectionFindFirstArgs>(args?: SelectSubset<T, LargeSectionFindFirstArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LargeSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeSectionFindFirstOrThrowArgs} args - Arguments to find a LargeSection
     * @example
     * // Get one LargeSection
     * const largeSection = await prisma.largeSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LargeSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, LargeSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LargeSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LargeSections
     * const largeSections = await prisma.largeSection.findMany()
     * 
     * // Get first 10 LargeSections
     * const largeSections = await prisma.largeSection.findMany({ take: 10 })
     * 
     * // Only select the `sectionId`
     * const largeSectionWithSectionIdOnly = await prisma.largeSection.findMany({ select: { sectionId: true } })
     * 
     */
    findMany<T extends LargeSectionFindManyArgs>(args?: SelectSubset<T, LargeSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LargeSection.
     * @param {LargeSectionCreateArgs} args - Arguments to create a LargeSection.
     * @example
     * // Create one LargeSection
     * const LargeSection = await prisma.largeSection.create({
     *   data: {
     *     // ... data to create a LargeSection
     *   }
     * })
     * 
     */
    create<T extends LargeSectionCreateArgs>(args: SelectSubset<T, LargeSectionCreateArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LargeSections.
     * @param {LargeSectionCreateManyArgs} args - Arguments to create many LargeSections.
     * @example
     * // Create many LargeSections
     * const largeSection = await prisma.largeSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LargeSectionCreateManyArgs>(args?: SelectSubset<T, LargeSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LargeSections and returns the data saved in the database.
     * @param {LargeSectionCreateManyAndReturnArgs} args - Arguments to create many LargeSections.
     * @example
     * // Create many LargeSections
     * const largeSection = await prisma.largeSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LargeSections and only return the `sectionId`
     * const largeSectionWithSectionIdOnly = await prisma.largeSection.createManyAndReturn({ 
     *   select: { sectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LargeSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, LargeSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LargeSection.
     * @param {LargeSectionDeleteArgs} args - Arguments to delete one LargeSection.
     * @example
     * // Delete one LargeSection
     * const LargeSection = await prisma.largeSection.delete({
     *   where: {
     *     // ... filter to delete one LargeSection
     *   }
     * })
     * 
     */
    delete<T extends LargeSectionDeleteArgs>(args: SelectSubset<T, LargeSectionDeleteArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LargeSection.
     * @param {LargeSectionUpdateArgs} args - Arguments to update one LargeSection.
     * @example
     * // Update one LargeSection
     * const largeSection = await prisma.largeSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LargeSectionUpdateArgs>(args: SelectSubset<T, LargeSectionUpdateArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LargeSections.
     * @param {LargeSectionDeleteManyArgs} args - Arguments to filter LargeSections to delete.
     * @example
     * // Delete a few LargeSections
     * const { count } = await prisma.largeSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LargeSectionDeleteManyArgs>(args?: SelectSubset<T, LargeSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LargeSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LargeSections
     * const largeSection = await prisma.largeSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LargeSectionUpdateManyArgs>(args: SelectSubset<T, LargeSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LargeSection.
     * @param {LargeSectionUpsertArgs} args - Arguments to update or create a LargeSection.
     * @example
     * // Update or create a LargeSection
     * const largeSection = await prisma.largeSection.upsert({
     *   create: {
     *     // ... data to create a LargeSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LargeSection we want to update
     *   }
     * })
     */
    upsert<T extends LargeSectionUpsertArgs>(args: SelectSubset<T, LargeSectionUpsertArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LargeSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeSectionCountArgs} args - Arguments to filter LargeSections to count.
     * @example
     * // Count the number of LargeSections
     * const count = await prisma.largeSection.count({
     *   where: {
     *     // ... the filter for the LargeSections we want to count
     *   }
     * })
    **/
    count<T extends LargeSectionCountArgs>(
      args?: Subset<T, LargeSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LargeSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LargeSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LargeSectionAggregateArgs>(args: Subset<T, LargeSectionAggregateArgs>): Prisma.PrismaPromise<GetLargeSectionAggregateType<T>>

    /**
     * Group by LargeSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LargeSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LargeSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LargeSectionGroupByArgs['orderBy'] }
        : { orderBy?: LargeSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LargeSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLargeSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LargeSection model
   */
  readonly fields: LargeSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LargeSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LargeSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mine<T extends LargeSection$mineArgs<ExtArgs> = {}>(args?: Subset<T, LargeSection$mineArgs<ExtArgs>>): Prisma__MineClient<$Result.GetResult<Prisma.$MinePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sectionType<T extends LargeSection$sectionTypeArgs<ExtArgs> = {}>(args?: Subset<T, LargeSection$sectionTypeArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    mediumSections<T extends LargeSection$mediumSectionsArgs<ExtArgs> = {}>(args?: Subset<T, LargeSection$mediumSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LargeSection model
   */ 
  interface LargeSectionFieldRefs {
    readonly sectionId: FieldRef<"LargeSection", 'Int'>
    readonly name: FieldRef<"LargeSection", 'String'>
    readonly description: FieldRef<"LargeSection", 'String'>
    readonly area: FieldRef<"LargeSection", 'Decimal'>
    readonly typeId: FieldRef<"LargeSection", 'Int'>
    readonly insiderToId: FieldRef<"LargeSection", 'Int'>
    readonly createdAt: FieldRef<"LargeSection", 'DateTime'>
    readonly updatedAt: FieldRef<"LargeSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LargeSection findUnique
   */
  export type LargeSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * Filter, which LargeSection to fetch.
     */
    where: LargeSectionWhereUniqueInput
  }

  /**
   * LargeSection findUniqueOrThrow
   */
  export type LargeSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * Filter, which LargeSection to fetch.
     */
    where: LargeSectionWhereUniqueInput
  }

  /**
   * LargeSection findFirst
   */
  export type LargeSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * Filter, which LargeSection to fetch.
     */
    where?: LargeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LargeSections to fetch.
     */
    orderBy?: LargeSectionOrderByWithRelationInput | LargeSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LargeSections.
     */
    cursor?: LargeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LargeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LargeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LargeSections.
     */
    distinct?: LargeSectionScalarFieldEnum | LargeSectionScalarFieldEnum[]
  }

  /**
   * LargeSection findFirstOrThrow
   */
  export type LargeSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * Filter, which LargeSection to fetch.
     */
    where?: LargeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LargeSections to fetch.
     */
    orderBy?: LargeSectionOrderByWithRelationInput | LargeSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LargeSections.
     */
    cursor?: LargeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LargeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LargeSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LargeSections.
     */
    distinct?: LargeSectionScalarFieldEnum | LargeSectionScalarFieldEnum[]
  }

  /**
   * LargeSection findMany
   */
  export type LargeSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * Filter, which LargeSections to fetch.
     */
    where?: LargeSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LargeSections to fetch.
     */
    orderBy?: LargeSectionOrderByWithRelationInput | LargeSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LargeSections.
     */
    cursor?: LargeSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LargeSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LargeSections.
     */
    skip?: number
    distinct?: LargeSectionScalarFieldEnum | LargeSectionScalarFieldEnum[]
  }

  /**
   * LargeSection create
   */
  export type LargeSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a LargeSection.
     */
    data: XOR<LargeSectionCreateInput, LargeSectionUncheckedCreateInput>
  }

  /**
   * LargeSection createMany
   */
  export type LargeSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LargeSections.
     */
    data: LargeSectionCreateManyInput | LargeSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LargeSection createManyAndReturn
   */
  export type LargeSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LargeSections.
     */
    data: LargeSectionCreateManyInput | LargeSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LargeSection update
   */
  export type LargeSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a LargeSection.
     */
    data: XOR<LargeSectionUpdateInput, LargeSectionUncheckedUpdateInput>
    /**
     * Choose, which LargeSection to update.
     */
    where: LargeSectionWhereUniqueInput
  }

  /**
   * LargeSection updateMany
   */
  export type LargeSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LargeSections.
     */
    data: XOR<LargeSectionUpdateManyMutationInput, LargeSectionUncheckedUpdateManyInput>
    /**
     * Filter which LargeSections to update
     */
    where?: LargeSectionWhereInput
  }

  /**
   * LargeSection upsert
   */
  export type LargeSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the LargeSection to update in case it exists.
     */
    where: LargeSectionWhereUniqueInput
    /**
     * In case the LargeSection found by the `where` argument doesn't exist, create a new LargeSection with this data.
     */
    create: XOR<LargeSectionCreateInput, LargeSectionUncheckedCreateInput>
    /**
     * In case the LargeSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LargeSectionUpdateInput, LargeSectionUncheckedUpdateInput>
  }

  /**
   * LargeSection delete
   */
  export type LargeSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    /**
     * Filter which LargeSection to delete.
     */
    where: LargeSectionWhereUniqueInput
  }

  /**
   * LargeSection deleteMany
   */
  export type LargeSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LargeSections to delete
     */
    where?: LargeSectionWhereInput
  }

  /**
   * LargeSection.mine
   */
  export type LargeSection$mineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mine
     */
    select?: MineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MineInclude<ExtArgs> | null
    where?: MineWhereInput
  }

  /**
   * LargeSection.sectionType
   */
  export type LargeSection$sectionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    where?: SectionTypeWhereInput
  }

  /**
   * LargeSection.mediumSections
   */
  export type LargeSection$mediumSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    where?: MediumSectionWhereInput
    orderBy?: MediumSectionOrderByWithRelationInput | MediumSectionOrderByWithRelationInput[]
    cursor?: MediumSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediumSectionScalarFieldEnum | MediumSectionScalarFieldEnum[]
  }

  /**
   * LargeSection without action
   */
  export type LargeSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
  }


  /**
   * Model MediumSection
   */

  export type AggregateMediumSection = {
    _count: MediumSectionCountAggregateOutputType | null
    _avg: MediumSectionAvgAggregateOutputType | null
    _sum: MediumSectionSumAggregateOutputType | null
    _min: MediumSectionMinAggregateOutputType | null
    _max: MediumSectionMaxAggregateOutputType | null
  }

  export type MediumSectionAvgAggregateOutputType = {
    sectionId: number | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
  }

  export type MediumSectionSumAggregateOutputType = {
    sectionId: number | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
  }

  export type MediumSectionMinAggregateOutputType = {
    sectionId: number | null
    name: string | null
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediumSectionMaxAggregateOutputType = {
    sectionId: number | null
    name: string | null
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediumSectionCountAggregateOutputType = {
    sectionId: number
    name: number
    description: number
    area: number
    typeId: number
    insiderToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediumSectionAvgAggregateInputType = {
    sectionId?: true
    area?: true
    typeId?: true
    insiderToId?: true
  }

  export type MediumSectionSumAggregateInputType = {
    sectionId?: true
    area?: true
    typeId?: true
    insiderToId?: true
  }

  export type MediumSectionMinAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediumSectionMaxAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediumSectionCountAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediumSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediumSection to aggregate.
     */
    where?: MediumSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediumSections to fetch.
     */
    orderBy?: MediumSectionOrderByWithRelationInput | MediumSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediumSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediumSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediumSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediumSections
    **/
    _count?: true | MediumSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediumSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediumSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediumSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediumSectionMaxAggregateInputType
  }

  export type GetMediumSectionAggregateType<T extends MediumSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateMediumSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediumSection[P]>
      : GetScalarType<T[P], AggregateMediumSection[P]>
  }




  export type MediumSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediumSectionWhereInput
    orderBy?: MediumSectionOrderByWithAggregationInput | MediumSectionOrderByWithAggregationInput[]
    by: MediumSectionScalarFieldEnum[] | MediumSectionScalarFieldEnum
    having?: MediumSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediumSectionCountAggregateInputType | true
    _avg?: MediumSectionAvgAggregateInputType
    _sum?: MediumSectionSumAggregateInputType
    _min?: MediumSectionMinAggregateInputType
    _max?: MediumSectionMaxAggregateInputType
  }

  export type MediumSectionGroupByOutputType = {
    sectionId: number
    name: string
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MediumSectionCountAggregateOutputType | null
    _avg: MediumSectionAvgAggregateOutputType | null
    _sum: MediumSectionSumAggregateOutputType | null
    _min: MediumSectionMinAggregateOutputType | null
    _max: MediumSectionMaxAggregateOutputType | null
  }

  type GetMediumSectionGroupByPayload<T extends MediumSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediumSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediumSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediumSectionGroupByOutputType[P]>
            : GetScalarType<T[P], MediumSectionGroupByOutputType[P]>
        }
      >
    >


  export type MediumSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    largeSection?: boolean | MediumSection$largeSectionArgs<ExtArgs>
    sectionType?: boolean | MediumSection$sectionTypeArgs<ExtArgs>
    smallSections?: boolean | MediumSection$smallSectionsArgs<ExtArgs>
    _count?: boolean | MediumSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediumSection"]>

  export type MediumSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    largeSection?: boolean | MediumSection$largeSectionArgs<ExtArgs>
    sectionType?: boolean | MediumSection$sectionTypeArgs<ExtArgs>
  }, ExtArgs["result"]["mediumSection"]>

  export type MediumSectionSelectScalar = {
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediumSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    largeSection?: boolean | MediumSection$largeSectionArgs<ExtArgs>
    sectionType?: boolean | MediumSection$sectionTypeArgs<ExtArgs>
    smallSections?: boolean | MediumSection$smallSectionsArgs<ExtArgs>
    _count?: boolean | MediumSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediumSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    largeSection?: boolean | MediumSection$largeSectionArgs<ExtArgs>
    sectionType?: boolean | MediumSection$sectionTypeArgs<ExtArgs>
  }

  export type $MediumSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediumSection"
    objects: {
      largeSection: Prisma.$LargeSectionPayload<ExtArgs> | null
      sectionType: Prisma.$SectionTypePayload<ExtArgs> | null
      smallSections: Prisma.$SmallSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sectionId: number
      name: string
      description: string | null
      area: Prisma.Decimal | null
      typeId: number | null
      insiderToId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mediumSection"]>
    composites: {}
  }

  type MediumSectionGetPayload<S extends boolean | null | undefined | MediumSectionDefaultArgs> = $Result.GetResult<Prisma.$MediumSectionPayload, S>

  type MediumSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediumSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediumSectionCountAggregateInputType | true
    }

  export interface MediumSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediumSection'], meta: { name: 'MediumSection' } }
    /**
     * Find zero or one MediumSection that matches the filter.
     * @param {MediumSectionFindUniqueArgs} args - Arguments to find a MediumSection
     * @example
     * // Get one MediumSection
     * const mediumSection = await prisma.mediumSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediumSectionFindUniqueArgs>(args: SelectSubset<T, MediumSectionFindUniqueArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MediumSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MediumSectionFindUniqueOrThrowArgs} args - Arguments to find a MediumSection
     * @example
     * // Get one MediumSection
     * const mediumSection = await prisma.mediumSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediumSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, MediumSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MediumSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediumSectionFindFirstArgs} args - Arguments to find a MediumSection
     * @example
     * // Get one MediumSection
     * const mediumSection = await prisma.mediumSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediumSectionFindFirstArgs>(args?: SelectSubset<T, MediumSectionFindFirstArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MediumSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediumSectionFindFirstOrThrowArgs} args - Arguments to find a MediumSection
     * @example
     * // Get one MediumSection
     * const mediumSection = await prisma.mediumSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediumSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, MediumSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MediumSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediumSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediumSections
     * const mediumSections = await prisma.mediumSection.findMany()
     * 
     * // Get first 10 MediumSections
     * const mediumSections = await prisma.mediumSection.findMany({ take: 10 })
     * 
     * // Only select the `sectionId`
     * const mediumSectionWithSectionIdOnly = await prisma.mediumSection.findMany({ select: { sectionId: true } })
     * 
     */
    findMany<T extends MediumSectionFindManyArgs>(args?: SelectSubset<T, MediumSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MediumSection.
     * @param {MediumSectionCreateArgs} args - Arguments to create a MediumSection.
     * @example
     * // Create one MediumSection
     * const MediumSection = await prisma.mediumSection.create({
     *   data: {
     *     // ... data to create a MediumSection
     *   }
     * })
     * 
     */
    create<T extends MediumSectionCreateArgs>(args: SelectSubset<T, MediumSectionCreateArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MediumSections.
     * @param {MediumSectionCreateManyArgs} args - Arguments to create many MediumSections.
     * @example
     * // Create many MediumSections
     * const mediumSection = await prisma.mediumSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediumSectionCreateManyArgs>(args?: SelectSubset<T, MediumSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediumSections and returns the data saved in the database.
     * @param {MediumSectionCreateManyAndReturnArgs} args - Arguments to create many MediumSections.
     * @example
     * // Create many MediumSections
     * const mediumSection = await prisma.mediumSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediumSections and only return the `sectionId`
     * const mediumSectionWithSectionIdOnly = await prisma.mediumSection.createManyAndReturn({ 
     *   select: { sectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediumSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, MediumSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MediumSection.
     * @param {MediumSectionDeleteArgs} args - Arguments to delete one MediumSection.
     * @example
     * // Delete one MediumSection
     * const MediumSection = await prisma.mediumSection.delete({
     *   where: {
     *     // ... filter to delete one MediumSection
     *   }
     * })
     * 
     */
    delete<T extends MediumSectionDeleteArgs>(args: SelectSubset<T, MediumSectionDeleteArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MediumSection.
     * @param {MediumSectionUpdateArgs} args - Arguments to update one MediumSection.
     * @example
     * // Update one MediumSection
     * const mediumSection = await prisma.mediumSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediumSectionUpdateArgs>(args: SelectSubset<T, MediumSectionUpdateArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MediumSections.
     * @param {MediumSectionDeleteManyArgs} args - Arguments to filter MediumSections to delete.
     * @example
     * // Delete a few MediumSections
     * const { count } = await prisma.mediumSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediumSectionDeleteManyArgs>(args?: SelectSubset<T, MediumSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediumSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediumSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediumSections
     * const mediumSection = await prisma.mediumSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediumSectionUpdateManyArgs>(args: SelectSubset<T, MediumSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediumSection.
     * @param {MediumSectionUpsertArgs} args - Arguments to update or create a MediumSection.
     * @example
     * // Update or create a MediumSection
     * const mediumSection = await prisma.mediumSection.upsert({
     *   create: {
     *     // ... data to create a MediumSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediumSection we want to update
     *   }
     * })
     */
    upsert<T extends MediumSectionUpsertArgs>(args: SelectSubset<T, MediumSectionUpsertArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MediumSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediumSectionCountArgs} args - Arguments to filter MediumSections to count.
     * @example
     * // Count the number of MediumSections
     * const count = await prisma.mediumSection.count({
     *   where: {
     *     // ... the filter for the MediumSections we want to count
     *   }
     * })
    **/
    count<T extends MediumSectionCountArgs>(
      args?: Subset<T, MediumSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediumSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediumSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediumSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediumSectionAggregateArgs>(args: Subset<T, MediumSectionAggregateArgs>): Prisma.PrismaPromise<GetMediumSectionAggregateType<T>>

    /**
     * Group by MediumSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediumSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediumSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediumSectionGroupByArgs['orderBy'] }
        : { orderBy?: MediumSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediumSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediumSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediumSection model
   */
  readonly fields: MediumSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediumSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediumSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    largeSection<T extends MediumSection$largeSectionArgs<ExtArgs> = {}>(args?: Subset<T, MediumSection$largeSectionArgs<ExtArgs>>): Prisma__LargeSectionClient<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sectionType<T extends MediumSection$sectionTypeArgs<ExtArgs> = {}>(args?: Subset<T, MediumSection$sectionTypeArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    smallSections<T extends MediumSection$smallSectionsArgs<ExtArgs> = {}>(args?: Subset<T, MediumSection$smallSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediumSection model
   */ 
  interface MediumSectionFieldRefs {
    readonly sectionId: FieldRef<"MediumSection", 'Int'>
    readonly name: FieldRef<"MediumSection", 'String'>
    readonly description: FieldRef<"MediumSection", 'String'>
    readonly area: FieldRef<"MediumSection", 'Decimal'>
    readonly typeId: FieldRef<"MediumSection", 'Int'>
    readonly insiderToId: FieldRef<"MediumSection", 'Int'>
    readonly createdAt: FieldRef<"MediumSection", 'DateTime'>
    readonly updatedAt: FieldRef<"MediumSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediumSection findUnique
   */
  export type MediumSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * Filter, which MediumSection to fetch.
     */
    where: MediumSectionWhereUniqueInput
  }

  /**
   * MediumSection findUniqueOrThrow
   */
  export type MediumSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * Filter, which MediumSection to fetch.
     */
    where: MediumSectionWhereUniqueInput
  }

  /**
   * MediumSection findFirst
   */
  export type MediumSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * Filter, which MediumSection to fetch.
     */
    where?: MediumSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediumSections to fetch.
     */
    orderBy?: MediumSectionOrderByWithRelationInput | MediumSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediumSections.
     */
    cursor?: MediumSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediumSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediumSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediumSections.
     */
    distinct?: MediumSectionScalarFieldEnum | MediumSectionScalarFieldEnum[]
  }

  /**
   * MediumSection findFirstOrThrow
   */
  export type MediumSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * Filter, which MediumSection to fetch.
     */
    where?: MediumSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediumSections to fetch.
     */
    orderBy?: MediumSectionOrderByWithRelationInput | MediumSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediumSections.
     */
    cursor?: MediumSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediumSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediumSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediumSections.
     */
    distinct?: MediumSectionScalarFieldEnum | MediumSectionScalarFieldEnum[]
  }

  /**
   * MediumSection findMany
   */
  export type MediumSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * Filter, which MediumSections to fetch.
     */
    where?: MediumSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediumSections to fetch.
     */
    orderBy?: MediumSectionOrderByWithRelationInput | MediumSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediumSections.
     */
    cursor?: MediumSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediumSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediumSections.
     */
    skip?: number
    distinct?: MediumSectionScalarFieldEnum | MediumSectionScalarFieldEnum[]
  }

  /**
   * MediumSection create
   */
  export type MediumSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a MediumSection.
     */
    data: XOR<MediumSectionCreateInput, MediumSectionUncheckedCreateInput>
  }

  /**
   * MediumSection createMany
   */
  export type MediumSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediumSections.
     */
    data: MediumSectionCreateManyInput | MediumSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediumSection createManyAndReturn
   */
  export type MediumSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MediumSections.
     */
    data: MediumSectionCreateManyInput | MediumSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediumSection update
   */
  export type MediumSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a MediumSection.
     */
    data: XOR<MediumSectionUpdateInput, MediumSectionUncheckedUpdateInput>
    /**
     * Choose, which MediumSection to update.
     */
    where: MediumSectionWhereUniqueInput
  }

  /**
   * MediumSection updateMany
   */
  export type MediumSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediumSections.
     */
    data: XOR<MediumSectionUpdateManyMutationInput, MediumSectionUncheckedUpdateManyInput>
    /**
     * Filter which MediumSections to update
     */
    where?: MediumSectionWhereInput
  }

  /**
   * MediumSection upsert
   */
  export type MediumSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the MediumSection to update in case it exists.
     */
    where: MediumSectionWhereUniqueInput
    /**
     * In case the MediumSection found by the `where` argument doesn't exist, create a new MediumSection with this data.
     */
    create: XOR<MediumSectionCreateInput, MediumSectionUncheckedCreateInput>
    /**
     * In case the MediumSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediumSectionUpdateInput, MediumSectionUncheckedUpdateInput>
  }

  /**
   * MediumSection delete
   */
  export type MediumSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    /**
     * Filter which MediumSection to delete.
     */
    where: MediumSectionWhereUniqueInput
  }

  /**
   * MediumSection deleteMany
   */
  export type MediumSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediumSections to delete
     */
    where?: MediumSectionWhereInput
  }

  /**
   * MediumSection.largeSection
   */
  export type MediumSection$largeSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    where?: LargeSectionWhereInput
  }

  /**
   * MediumSection.sectionType
   */
  export type MediumSection$sectionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    where?: SectionTypeWhereInput
  }

  /**
   * MediumSection.smallSections
   */
  export type MediumSection$smallSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    where?: SmallSectionWhereInput
    orderBy?: SmallSectionOrderByWithRelationInput | SmallSectionOrderByWithRelationInput[]
    cursor?: SmallSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SmallSectionScalarFieldEnum | SmallSectionScalarFieldEnum[]
  }

  /**
   * MediumSection without action
   */
  export type MediumSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
  }


  /**
   * Model SmallSection
   */

  export type AggregateSmallSection = {
    _count: SmallSectionCountAggregateOutputType | null
    _avg: SmallSectionAvgAggregateOutputType | null
    _sum: SmallSectionSumAggregateOutputType | null
    _min: SmallSectionMinAggregateOutputType | null
    _max: SmallSectionMaxAggregateOutputType | null
  }

  export type SmallSectionAvgAggregateOutputType = {
    sectionId: number | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
  }

  export type SmallSectionSumAggregateOutputType = {
    sectionId: number | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
  }

  export type SmallSectionMinAggregateOutputType = {
    sectionId: number | null
    name: string | null
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmallSectionMaxAggregateOutputType = {
    sectionId: number | null
    name: string | null
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmallSectionCountAggregateOutputType = {
    sectionId: number
    name: number
    description: number
    area: number
    typeId: number
    insiderToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SmallSectionAvgAggregateInputType = {
    sectionId?: true
    area?: true
    typeId?: true
    insiderToId?: true
  }

  export type SmallSectionSumAggregateInputType = {
    sectionId?: true
    area?: true
    typeId?: true
    insiderToId?: true
  }

  export type SmallSectionMinAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmallSectionMaxAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmallSectionCountAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SmallSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmallSection to aggregate.
     */
    where?: SmallSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmallSections to fetch.
     */
    orderBy?: SmallSectionOrderByWithRelationInput | SmallSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmallSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmallSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmallSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmallSections
    **/
    _count?: true | SmallSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SmallSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SmallSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmallSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmallSectionMaxAggregateInputType
  }

  export type GetSmallSectionAggregateType<T extends SmallSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSmallSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmallSection[P]>
      : GetScalarType<T[P], AggregateSmallSection[P]>
  }




  export type SmallSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmallSectionWhereInput
    orderBy?: SmallSectionOrderByWithAggregationInput | SmallSectionOrderByWithAggregationInput[]
    by: SmallSectionScalarFieldEnum[] | SmallSectionScalarFieldEnum
    having?: SmallSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmallSectionCountAggregateInputType | true
    _avg?: SmallSectionAvgAggregateInputType
    _sum?: SmallSectionSumAggregateInputType
    _min?: SmallSectionMinAggregateInputType
    _max?: SmallSectionMaxAggregateInputType
  }

  export type SmallSectionGroupByOutputType = {
    sectionId: number
    name: string
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date
    updatedAt: Date
    _count: SmallSectionCountAggregateOutputType | null
    _avg: SmallSectionAvgAggregateOutputType | null
    _sum: SmallSectionSumAggregateOutputType | null
    _min: SmallSectionMinAggregateOutputType | null
    _max: SmallSectionMaxAggregateOutputType | null
  }

  type GetSmallSectionGroupByPayload<T extends SmallSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmallSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmallSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmallSectionGroupByOutputType[P]>
            : GetScalarType<T[P], SmallSectionGroupByOutputType[P]>
        }
      >
    >


  export type SmallSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediumSection?: boolean | SmallSection$mediumSectionArgs<ExtArgs>
    sectionType?: boolean | SmallSection$sectionTypeArgs<ExtArgs>
    microSections?: boolean | SmallSection$microSectionsArgs<ExtArgs>
    _count?: boolean | SmallSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smallSection"]>

  export type SmallSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediumSection?: boolean | SmallSection$mediumSectionArgs<ExtArgs>
    sectionType?: boolean | SmallSection$sectionTypeArgs<ExtArgs>
  }, ExtArgs["result"]["smallSection"]>

  export type SmallSectionSelectScalar = {
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SmallSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediumSection?: boolean | SmallSection$mediumSectionArgs<ExtArgs>
    sectionType?: boolean | SmallSection$sectionTypeArgs<ExtArgs>
    microSections?: boolean | SmallSection$microSectionsArgs<ExtArgs>
    _count?: boolean | SmallSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SmallSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mediumSection?: boolean | SmallSection$mediumSectionArgs<ExtArgs>
    sectionType?: boolean | SmallSection$sectionTypeArgs<ExtArgs>
  }

  export type $SmallSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmallSection"
    objects: {
      mediumSection: Prisma.$MediumSectionPayload<ExtArgs> | null
      sectionType: Prisma.$SectionTypePayload<ExtArgs> | null
      microSections: Prisma.$MicroSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sectionId: number
      name: string
      description: string | null
      area: Prisma.Decimal | null
      typeId: number | null
      insiderToId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["smallSection"]>
    composites: {}
  }

  type SmallSectionGetPayload<S extends boolean | null | undefined | SmallSectionDefaultArgs> = $Result.GetResult<Prisma.$SmallSectionPayload, S>

  type SmallSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SmallSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SmallSectionCountAggregateInputType | true
    }

  export interface SmallSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmallSection'], meta: { name: 'SmallSection' } }
    /**
     * Find zero or one SmallSection that matches the filter.
     * @param {SmallSectionFindUniqueArgs} args - Arguments to find a SmallSection
     * @example
     * // Get one SmallSection
     * const smallSection = await prisma.smallSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmallSectionFindUniqueArgs>(args: SelectSubset<T, SmallSectionFindUniqueArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SmallSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SmallSectionFindUniqueOrThrowArgs} args - Arguments to find a SmallSection
     * @example
     * // Get one SmallSection
     * const smallSection = await prisma.smallSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmallSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SmallSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SmallSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmallSectionFindFirstArgs} args - Arguments to find a SmallSection
     * @example
     * // Get one SmallSection
     * const smallSection = await prisma.smallSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmallSectionFindFirstArgs>(args?: SelectSubset<T, SmallSectionFindFirstArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SmallSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmallSectionFindFirstOrThrowArgs} args - Arguments to find a SmallSection
     * @example
     * // Get one SmallSection
     * const smallSection = await prisma.smallSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmallSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SmallSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SmallSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmallSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmallSections
     * const smallSections = await prisma.smallSection.findMany()
     * 
     * // Get first 10 SmallSections
     * const smallSections = await prisma.smallSection.findMany({ take: 10 })
     * 
     * // Only select the `sectionId`
     * const smallSectionWithSectionIdOnly = await prisma.smallSection.findMany({ select: { sectionId: true } })
     * 
     */
    findMany<T extends SmallSectionFindManyArgs>(args?: SelectSubset<T, SmallSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SmallSection.
     * @param {SmallSectionCreateArgs} args - Arguments to create a SmallSection.
     * @example
     * // Create one SmallSection
     * const SmallSection = await prisma.smallSection.create({
     *   data: {
     *     // ... data to create a SmallSection
     *   }
     * })
     * 
     */
    create<T extends SmallSectionCreateArgs>(args: SelectSubset<T, SmallSectionCreateArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SmallSections.
     * @param {SmallSectionCreateManyArgs} args - Arguments to create many SmallSections.
     * @example
     * // Create many SmallSections
     * const smallSection = await prisma.smallSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmallSectionCreateManyArgs>(args?: SelectSubset<T, SmallSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmallSections and returns the data saved in the database.
     * @param {SmallSectionCreateManyAndReturnArgs} args - Arguments to create many SmallSections.
     * @example
     * // Create many SmallSections
     * const smallSection = await prisma.smallSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmallSections and only return the `sectionId`
     * const smallSectionWithSectionIdOnly = await prisma.smallSection.createManyAndReturn({ 
     *   select: { sectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmallSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SmallSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SmallSection.
     * @param {SmallSectionDeleteArgs} args - Arguments to delete one SmallSection.
     * @example
     * // Delete one SmallSection
     * const SmallSection = await prisma.smallSection.delete({
     *   where: {
     *     // ... filter to delete one SmallSection
     *   }
     * })
     * 
     */
    delete<T extends SmallSectionDeleteArgs>(args: SelectSubset<T, SmallSectionDeleteArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SmallSection.
     * @param {SmallSectionUpdateArgs} args - Arguments to update one SmallSection.
     * @example
     * // Update one SmallSection
     * const smallSection = await prisma.smallSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmallSectionUpdateArgs>(args: SelectSubset<T, SmallSectionUpdateArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SmallSections.
     * @param {SmallSectionDeleteManyArgs} args - Arguments to filter SmallSections to delete.
     * @example
     * // Delete a few SmallSections
     * const { count } = await prisma.smallSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmallSectionDeleteManyArgs>(args?: SelectSubset<T, SmallSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmallSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmallSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmallSections
     * const smallSection = await prisma.smallSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmallSectionUpdateManyArgs>(args: SelectSubset<T, SmallSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SmallSection.
     * @param {SmallSectionUpsertArgs} args - Arguments to update or create a SmallSection.
     * @example
     * // Update or create a SmallSection
     * const smallSection = await prisma.smallSection.upsert({
     *   create: {
     *     // ... data to create a SmallSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmallSection we want to update
     *   }
     * })
     */
    upsert<T extends SmallSectionUpsertArgs>(args: SelectSubset<T, SmallSectionUpsertArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SmallSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmallSectionCountArgs} args - Arguments to filter SmallSections to count.
     * @example
     * // Count the number of SmallSections
     * const count = await prisma.smallSection.count({
     *   where: {
     *     // ... the filter for the SmallSections we want to count
     *   }
     * })
    **/
    count<T extends SmallSectionCountArgs>(
      args?: Subset<T, SmallSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmallSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmallSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmallSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SmallSectionAggregateArgs>(args: Subset<T, SmallSectionAggregateArgs>): Prisma.PrismaPromise<GetSmallSectionAggregateType<T>>

    /**
     * Group by SmallSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmallSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SmallSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmallSectionGroupByArgs['orderBy'] }
        : { orderBy?: SmallSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SmallSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmallSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmallSection model
   */
  readonly fields: SmallSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmallSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmallSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mediumSection<T extends SmallSection$mediumSectionArgs<ExtArgs> = {}>(args?: Subset<T, SmallSection$mediumSectionArgs<ExtArgs>>): Prisma__MediumSectionClient<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sectionType<T extends SmallSection$sectionTypeArgs<ExtArgs> = {}>(args?: Subset<T, SmallSection$sectionTypeArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    microSections<T extends SmallSection$microSectionsArgs<ExtArgs> = {}>(args?: Subset<T, SmallSection$microSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SmallSection model
   */ 
  interface SmallSectionFieldRefs {
    readonly sectionId: FieldRef<"SmallSection", 'Int'>
    readonly name: FieldRef<"SmallSection", 'String'>
    readonly description: FieldRef<"SmallSection", 'String'>
    readonly area: FieldRef<"SmallSection", 'Decimal'>
    readonly typeId: FieldRef<"SmallSection", 'Int'>
    readonly insiderToId: FieldRef<"SmallSection", 'Int'>
    readonly createdAt: FieldRef<"SmallSection", 'DateTime'>
    readonly updatedAt: FieldRef<"SmallSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmallSection findUnique
   */
  export type SmallSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * Filter, which SmallSection to fetch.
     */
    where: SmallSectionWhereUniqueInput
  }

  /**
   * SmallSection findUniqueOrThrow
   */
  export type SmallSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * Filter, which SmallSection to fetch.
     */
    where: SmallSectionWhereUniqueInput
  }

  /**
   * SmallSection findFirst
   */
  export type SmallSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * Filter, which SmallSection to fetch.
     */
    where?: SmallSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmallSections to fetch.
     */
    orderBy?: SmallSectionOrderByWithRelationInput | SmallSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmallSections.
     */
    cursor?: SmallSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmallSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmallSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmallSections.
     */
    distinct?: SmallSectionScalarFieldEnum | SmallSectionScalarFieldEnum[]
  }

  /**
   * SmallSection findFirstOrThrow
   */
  export type SmallSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * Filter, which SmallSection to fetch.
     */
    where?: SmallSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmallSections to fetch.
     */
    orderBy?: SmallSectionOrderByWithRelationInput | SmallSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmallSections.
     */
    cursor?: SmallSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmallSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmallSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmallSections.
     */
    distinct?: SmallSectionScalarFieldEnum | SmallSectionScalarFieldEnum[]
  }

  /**
   * SmallSection findMany
   */
  export type SmallSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * Filter, which SmallSections to fetch.
     */
    where?: SmallSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmallSections to fetch.
     */
    orderBy?: SmallSectionOrderByWithRelationInput | SmallSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmallSections.
     */
    cursor?: SmallSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmallSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmallSections.
     */
    skip?: number
    distinct?: SmallSectionScalarFieldEnum | SmallSectionScalarFieldEnum[]
  }

  /**
   * SmallSection create
   */
  export type SmallSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a SmallSection.
     */
    data: XOR<SmallSectionCreateInput, SmallSectionUncheckedCreateInput>
  }

  /**
   * SmallSection createMany
   */
  export type SmallSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmallSections.
     */
    data: SmallSectionCreateManyInput | SmallSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmallSection createManyAndReturn
   */
  export type SmallSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SmallSections.
     */
    data: SmallSectionCreateManyInput | SmallSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SmallSection update
   */
  export type SmallSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a SmallSection.
     */
    data: XOR<SmallSectionUpdateInput, SmallSectionUncheckedUpdateInput>
    /**
     * Choose, which SmallSection to update.
     */
    where: SmallSectionWhereUniqueInput
  }

  /**
   * SmallSection updateMany
   */
  export type SmallSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmallSections.
     */
    data: XOR<SmallSectionUpdateManyMutationInput, SmallSectionUncheckedUpdateManyInput>
    /**
     * Filter which SmallSections to update
     */
    where?: SmallSectionWhereInput
  }

  /**
   * SmallSection upsert
   */
  export type SmallSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the SmallSection to update in case it exists.
     */
    where: SmallSectionWhereUniqueInput
    /**
     * In case the SmallSection found by the `where` argument doesn't exist, create a new SmallSection with this data.
     */
    create: XOR<SmallSectionCreateInput, SmallSectionUncheckedCreateInput>
    /**
     * In case the SmallSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmallSectionUpdateInput, SmallSectionUncheckedUpdateInput>
  }

  /**
   * SmallSection delete
   */
  export type SmallSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    /**
     * Filter which SmallSection to delete.
     */
    where: SmallSectionWhereUniqueInput
  }

  /**
   * SmallSection deleteMany
   */
  export type SmallSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmallSections to delete
     */
    where?: SmallSectionWhereInput
  }

  /**
   * SmallSection.mediumSection
   */
  export type SmallSection$mediumSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    where?: MediumSectionWhereInput
  }

  /**
   * SmallSection.sectionType
   */
  export type SmallSection$sectionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    where?: SectionTypeWhereInput
  }

  /**
   * SmallSection.microSections
   */
  export type SmallSection$microSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    where?: MicroSectionWhereInput
    orderBy?: MicroSectionOrderByWithRelationInput | MicroSectionOrderByWithRelationInput[]
    cursor?: MicroSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MicroSectionScalarFieldEnum | MicroSectionScalarFieldEnum[]
  }

  /**
   * SmallSection without action
   */
  export type SmallSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
  }


  /**
   * Model MicroSection
   */

  export type AggregateMicroSection = {
    _count: MicroSectionCountAggregateOutputType | null
    _avg: MicroSectionAvgAggregateOutputType | null
    _sum: MicroSectionSumAggregateOutputType | null
    _min: MicroSectionMinAggregateOutputType | null
    _max: MicroSectionMaxAggregateOutputType | null
  }

  export type MicroSectionAvgAggregateOutputType = {
    sectionId: number | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
  }

  export type MicroSectionSumAggregateOutputType = {
    sectionId: number | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
  }

  export type MicroSectionMinAggregateOutputType = {
    sectionId: number | null
    name: string | null
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MicroSectionMaxAggregateOutputType = {
    sectionId: number | null
    name: string | null
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MicroSectionCountAggregateOutputType = {
    sectionId: number
    name: number
    description: number
    area: number
    typeId: number
    insiderToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MicroSectionAvgAggregateInputType = {
    sectionId?: true
    area?: true
    typeId?: true
    insiderToId?: true
  }

  export type MicroSectionSumAggregateInputType = {
    sectionId?: true
    area?: true
    typeId?: true
    insiderToId?: true
  }

  export type MicroSectionMinAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MicroSectionMaxAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MicroSectionCountAggregateInputType = {
    sectionId?: true
    name?: true
    description?: true
    area?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MicroSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MicroSection to aggregate.
     */
    where?: MicroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicroSections to fetch.
     */
    orderBy?: MicroSectionOrderByWithRelationInput | MicroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MicroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MicroSections
    **/
    _count?: true | MicroSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MicroSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MicroSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MicroSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MicroSectionMaxAggregateInputType
  }

  export type GetMicroSectionAggregateType<T extends MicroSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateMicroSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMicroSection[P]>
      : GetScalarType<T[P], AggregateMicroSection[P]>
  }




  export type MicroSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicroSectionWhereInput
    orderBy?: MicroSectionOrderByWithAggregationInput | MicroSectionOrderByWithAggregationInput[]
    by: MicroSectionScalarFieldEnum[] | MicroSectionScalarFieldEnum
    having?: MicroSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MicroSectionCountAggregateInputType | true
    _avg?: MicroSectionAvgAggregateInputType
    _sum?: MicroSectionSumAggregateInputType
    _min?: MicroSectionMinAggregateInputType
    _max?: MicroSectionMaxAggregateInputType
  }

  export type MicroSectionGroupByOutputType = {
    sectionId: number
    name: string
    description: string | null
    area: Decimal | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MicroSectionCountAggregateOutputType | null
    _avg: MicroSectionAvgAggregateOutputType | null
    _sum: MicroSectionSumAggregateOutputType | null
    _min: MicroSectionMinAggregateOutputType | null
    _max: MicroSectionMaxAggregateOutputType | null
  }

  type GetMicroSectionGroupByPayload<T extends MicroSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MicroSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MicroSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MicroSectionGroupByOutputType[P]>
            : GetScalarType<T[P], MicroSectionGroupByOutputType[P]>
        }
      >
    >


  export type MicroSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    smallSection?: boolean | MicroSection$smallSectionArgs<ExtArgs>
    sectionType?: boolean | MicroSection$sectionTypeArgs<ExtArgs>
    unitSections?: boolean | MicroSection$unitSectionsArgs<ExtArgs>
    _count?: boolean | MicroSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["microSection"]>

  export type MicroSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    smallSection?: boolean | MicroSection$smallSectionArgs<ExtArgs>
    sectionType?: boolean | MicroSection$sectionTypeArgs<ExtArgs>
  }, ExtArgs["result"]["microSection"]>

  export type MicroSectionSelectScalar = {
    sectionId?: boolean
    name?: boolean
    description?: boolean
    area?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MicroSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smallSection?: boolean | MicroSection$smallSectionArgs<ExtArgs>
    sectionType?: boolean | MicroSection$sectionTypeArgs<ExtArgs>
    unitSections?: boolean | MicroSection$unitSectionsArgs<ExtArgs>
    _count?: boolean | MicroSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MicroSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    smallSection?: boolean | MicroSection$smallSectionArgs<ExtArgs>
    sectionType?: boolean | MicroSection$sectionTypeArgs<ExtArgs>
  }

  export type $MicroSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MicroSection"
    objects: {
      smallSection: Prisma.$SmallSectionPayload<ExtArgs> | null
      sectionType: Prisma.$SectionTypePayload<ExtArgs> | null
      unitSections: Prisma.$UnitSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sectionId: number
      name: string
      description: string | null
      area: Prisma.Decimal | null
      typeId: number | null
      insiderToId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["microSection"]>
    composites: {}
  }

  type MicroSectionGetPayload<S extends boolean | null | undefined | MicroSectionDefaultArgs> = $Result.GetResult<Prisma.$MicroSectionPayload, S>

  type MicroSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MicroSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MicroSectionCountAggregateInputType | true
    }

  export interface MicroSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MicroSection'], meta: { name: 'MicroSection' } }
    /**
     * Find zero or one MicroSection that matches the filter.
     * @param {MicroSectionFindUniqueArgs} args - Arguments to find a MicroSection
     * @example
     * // Get one MicroSection
     * const microSection = await prisma.microSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MicroSectionFindUniqueArgs>(args: SelectSubset<T, MicroSectionFindUniqueArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MicroSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MicroSectionFindUniqueOrThrowArgs} args - Arguments to find a MicroSection
     * @example
     * // Get one MicroSection
     * const microSection = await prisma.microSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MicroSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, MicroSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MicroSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroSectionFindFirstArgs} args - Arguments to find a MicroSection
     * @example
     * // Get one MicroSection
     * const microSection = await prisma.microSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MicroSectionFindFirstArgs>(args?: SelectSubset<T, MicroSectionFindFirstArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MicroSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroSectionFindFirstOrThrowArgs} args - Arguments to find a MicroSection
     * @example
     * // Get one MicroSection
     * const microSection = await prisma.microSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MicroSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, MicroSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MicroSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MicroSections
     * const microSections = await prisma.microSection.findMany()
     * 
     * // Get first 10 MicroSections
     * const microSections = await prisma.microSection.findMany({ take: 10 })
     * 
     * // Only select the `sectionId`
     * const microSectionWithSectionIdOnly = await prisma.microSection.findMany({ select: { sectionId: true } })
     * 
     */
    findMany<T extends MicroSectionFindManyArgs>(args?: SelectSubset<T, MicroSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MicroSection.
     * @param {MicroSectionCreateArgs} args - Arguments to create a MicroSection.
     * @example
     * // Create one MicroSection
     * const MicroSection = await prisma.microSection.create({
     *   data: {
     *     // ... data to create a MicroSection
     *   }
     * })
     * 
     */
    create<T extends MicroSectionCreateArgs>(args: SelectSubset<T, MicroSectionCreateArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MicroSections.
     * @param {MicroSectionCreateManyArgs} args - Arguments to create many MicroSections.
     * @example
     * // Create many MicroSections
     * const microSection = await prisma.microSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MicroSectionCreateManyArgs>(args?: SelectSubset<T, MicroSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MicroSections and returns the data saved in the database.
     * @param {MicroSectionCreateManyAndReturnArgs} args - Arguments to create many MicroSections.
     * @example
     * // Create many MicroSections
     * const microSection = await prisma.microSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MicroSections and only return the `sectionId`
     * const microSectionWithSectionIdOnly = await prisma.microSection.createManyAndReturn({ 
     *   select: { sectionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MicroSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, MicroSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MicroSection.
     * @param {MicroSectionDeleteArgs} args - Arguments to delete one MicroSection.
     * @example
     * // Delete one MicroSection
     * const MicroSection = await prisma.microSection.delete({
     *   where: {
     *     // ... filter to delete one MicroSection
     *   }
     * })
     * 
     */
    delete<T extends MicroSectionDeleteArgs>(args: SelectSubset<T, MicroSectionDeleteArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MicroSection.
     * @param {MicroSectionUpdateArgs} args - Arguments to update one MicroSection.
     * @example
     * // Update one MicroSection
     * const microSection = await prisma.microSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MicroSectionUpdateArgs>(args: SelectSubset<T, MicroSectionUpdateArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MicroSections.
     * @param {MicroSectionDeleteManyArgs} args - Arguments to filter MicroSections to delete.
     * @example
     * // Delete a few MicroSections
     * const { count } = await prisma.microSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MicroSectionDeleteManyArgs>(args?: SelectSubset<T, MicroSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MicroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MicroSections
     * const microSection = await prisma.microSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MicroSectionUpdateManyArgs>(args: SelectSubset<T, MicroSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MicroSection.
     * @param {MicroSectionUpsertArgs} args - Arguments to update or create a MicroSection.
     * @example
     * // Update or create a MicroSection
     * const microSection = await prisma.microSection.upsert({
     *   create: {
     *     // ... data to create a MicroSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MicroSection we want to update
     *   }
     * })
     */
    upsert<T extends MicroSectionUpsertArgs>(args: SelectSubset<T, MicroSectionUpsertArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MicroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroSectionCountArgs} args - Arguments to filter MicroSections to count.
     * @example
     * // Count the number of MicroSections
     * const count = await prisma.microSection.count({
     *   where: {
     *     // ... the filter for the MicroSections we want to count
     *   }
     * })
    **/
    count<T extends MicroSectionCountArgs>(
      args?: Subset<T, MicroSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MicroSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MicroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MicroSectionAggregateArgs>(args: Subset<T, MicroSectionAggregateArgs>): Prisma.PrismaPromise<GetMicroSectionAggregateType<T>>

    /**
     * Group by MicroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MicroSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MicroSectionGroupByArgs['orderBy'] }
        : { orderBy?: MicroSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MicroSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMicroSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MicroSection model
   */
  readonly fields: MicroSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MicroSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MicroSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    smallSection<T extends MicroSection$smallSectionArgs<ExtArgs> = {}>(args?: Subset<T, MicroSection$smallSectionArgs<ExtArgs>>): Prisma__SmallSectionClient<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sectionType<T extends MicroSection$sectionTypeArgs<ExtArgs> = {}>(args?: Subset<T, MicroSection$sectionTypeArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    unitSections<T extends MicroSection$unitSectionsArgs<ExtArgs> = {}>(args?: Subset<T, MicroSection$unitSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MicroSection model
   */ 
  interface MicroSectionFieldRefs {
    readonly sectionId: FieldRef<"MicroSection", 'Int'>
    readonly name: FieldRef<"MicroSection", 'String'>
    readonly description: FieldRef<"MicroSection", 'String'>
    readonly area: FieldRef<"MicroSection", 'Decimal'>
    readonly typeId: FieldRef<"MicroSection", 'Int'>
    readonly insiderToId: FieldRef<"MicroSection", 'Int'>
    readonly createdAt: FieldRef<"MicroSection", 'DateTime'>
    readonly updatedAt: FieldRef<"MicroSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MicroSection findUnique
   */
  export type MicroSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * Filter, which MicroSection to fetch.
     */
    where: MicroSectionWhereUniqueInput
  }

  /**
   * MicroSection findUniqueOrThrow
   */
  export type MicroSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * Filter, which MicroSection to fetch.
     */
    where: MicroSectionWhereUniqueInput
  }

  /**
   * MicroSection findFirst
   */
  export type MicroSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * Filter, which MicroSection to fetch.
     */
    where?: MicroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicroSections to fetch.
     */
    orderBy?: MicroSectionOrderByWithRelationInput | MicroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MicroSections.
     */
    cursor?: MicroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MicroSections.
     */
    distinct?: MicroSectionScalarFieldEnum | MicroSectionScalarFieldEnum[]
  }

  /**
   * MicroSection findFirstOrThrow
   */
  export type MicroSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * Filter, which MicroSection to fetch.
     */
    where?: MicroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicroSections to fetch.
     */
    orderBy?: MicroSectionOrderByWithRelationInput | MicroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MicroSections.
     */
    cursor?: MicroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MicroSections.
     */
    distinct?: MicroSectionScalarFieldEnum | MicroSectionScalarFieldEnum[]
  }

  /**
   * MicroSection findMany
   */
  export type MicroSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * Filter, which MicroSections to fetch.
     */
    where?: MicroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MicroSections to fetch.
     */
    orderBy?: MicroSectionOrderByWithRelationInput | MicroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MicroSections.
     */
    cursor?: MicroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MicroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MicroSections.
     */
    skip?: number
    distinct?: MicroSectionScalarFieldEnum | MicroSectionScalarFieldEnum[]
  }

  /**
   * MicroSection create
   */
  export type MicroSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a MicroSection.
     */
    data: XOR<MicroSectionCreateInput, MicroSectionUncheckedCreateInput>
  }

  /**
   * MicroSection createMany
   */
  export type MicroSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MicroSections.
     */
    data: MicroSectionCreateManyInput | MicroSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MicroSection createManyAndReturn
   */
  export type MicroSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MicroSections.
     */
    data: MicroSectionCreateManyInput | MicroSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MicroSection update
   */
  export type MicroSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a MicroSection.
     */
    data: XOR<MicroSectionUpdateInput, MicroSectionUncheckedUpdateInput>
    /**
     * Choose, which MicroSection to update.
     */
    where: MicroSectionWhereUniqueInput
  }

  /**
   * MicroSection updateMany
   */
  export type MicroSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MicroSections.
     */
    data: XOR<MicroSectionUpdateManyMutationInput, MicroSectionUncheckedUpdateManyInput>
    /**
     * Filter which MicroSections to update
     */
    where?: MicroSectionWhereInput
  }

  /**
   * MicroSection upsert
   */
  export type MicroSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the MicroSection to update in case it exists.
     */
    where: MicroSectionWhereUniqueInput
    /**
     * In case the MicroSection found by the `where` argument doesn't exist, create a new MicroSection with this data.
     */
    create: XOR<MicroSectionCreateInput, MicroSectionUncheckedCreateInput>
    /**
     * In case the MicroSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MicroSectionUpdateInput, MicroSectionUncheckedUpdateInput>
  }

  /**
   * MicroSection delete
   */
  export type MicroSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    /**
     * Filter which MicroSection to delete.
     */
    where: MicroSectionWhereUniqueInput
  }

  /**
   * MicroSection deleteMany
   */
  export type MicroSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MicroSections to delete
     */
    where?: MicroSectionWhereInput
  }

  /**
   * MicroSection.smallSection
   */
  export type MicroSection$smallSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    where?: SmallSectionWhereInput
  }

  /**
   * MicroSection.sectionType
   */
  export type MicroSection$sectionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    where?: SectionTypeWhereInput
  }

  /**
   * MicroSection.unitSections
   */
  export type MicroSection$unitSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    where?: UnitSectionWhereInput
    orderBy?: UnitSectionOrderByWithRelationInput | UnitSectionOrderByWithRelationInput[]
    cursor?: UnitSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitSectionScalarFieldEnum | UnitSectionScalarFieldEnum[]
  }

  /**
   * MicroSection without action
   */
  export type MicroSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
  }


  /**
   * Model UnitSection
   */

  export type AggregateUnitSection = {
    _count: UnitSectionCountAggregateOutputType | null
    _avg: UnitSectionAvgAggregateOutputType | null
    _sum: UnitSectionSumAggregateOutputType | null
    _min: UnitSectionMinAggregateOutputType | null
    _max: UnitSectionMaxAggregateOutputType | null
  }

  export type UnitSectionAvgAggregateOutputType = {
    unitId: number | null
    typeId: number | null
    insiderToId: number | null
  }

  export type UnitSectionSumAggregateOutputType = {
    unitId: number | null
    typeId: number | null
    insiderToId: number | null
  }

  export type UnitSectionMinAggregateOutputType = {
    unitId: number | null
    name: string | null
    description: string | null
    model: string | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitSectionMaxAggregateOutputType = {
    unitId: number | null
    name: string | null
    description: string | null
    model: string | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitSectionCountAggregateOutputType = {
    unitId: number
    name: number
    description: number
    model: number
    typeId: number
    insiderToId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitSectionAvgAggregateInputType = {
    unitId?: true
    typeId?: true
    insiderToId?: true
  }

  export type UnitSectionSumAggregateInputType = {
    unitId?: true
    typeId?: true
    insiderToId?: true
  }

  export type UnitSectionMinAggregateInputType = {
    unitId?: true
    name?: true
    description?: true
    model?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitSectionMaxAggregateInputType = {
    unitId?: true
    name?: true
    description?: true
    model?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitSectionCountAggregateInputType = {
    unitId?: true
    name?: true
    description?: true
    model?: true
    typeId?: true
    insiderToId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitSection to aggregate.
     */
    where?: UnitSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitSections to fetch.
     */
    orderBy?: UnitSectionOrderByWithRelationInput | UnitSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitSections
    **/
    _count?: true | UnitSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitSectionMaxAggregateInputType
  }

  export type GetUnitSectionAggregateType<T extends UnitSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitSection[P]>
      : GetScalarType<T[P], AggregateUnitSection[P]>
  }




  export type UnitSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitSectionWhereInput
    orderBy?: UnitSectionOrderByWithAggregationInput | UnitSectionOrderByWithAggregationInput[]
    by: UnitSectionScalarFieldEnum[] | UnitSectionScalarFieldEnum
    having?: UnitSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitSectionCountAggregateInputType | true
    _avg?: UnitSectionAvgAggregateInputType
    _sum?: UnitSectionSumAggregateInputType
    _min?: UnitSectionMinAggregateInputType
    _max?: UnitSectionMaxAggregateInputType
  }

  export type UnitSectionGroupByOutputType = {
    unitId: number
    name: string
    description: string | null
    model: string | null
    typeId: number | null
    insiderToId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UnitSectionCountAggregateOutputType | null
    _avg: UnitSectionAvgAggregateOutputType | null
    _sum: UnitSectionSumAggregateOutputType | null
    _min: UnitSectionMinAggregateOutputType | null
    _max: UnitSectionMaxAggregateOutputType | null
  }

  type GetUnitSectionGroupByPayload<T extends UnitSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitSectionGroupByOutputType[P]>
            : GetScalarType<T[P], UnitSectionGroupByOutputType[P]>
        }
      >
    >


  export type UnitSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unitId?: boolean
    name?: boolean
    description?: boolean
    model?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    microSection?: boolean | UnitSection$microSectionArgs<ExtArgs>
    sectionType?: boolean | UnitSection$sectionTypeArgs<ExtArgs>
  }, ExtArgs["result"]["unitSection"]>

  export type UnitSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unitId?: boolean
    name?: boolean
    description?: boolean
    model?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    microSection?: boolean | UnitSection$microSectionArgs<ExtArgs>
    sectionType?: boolean | UnitSection$sectionTypeArgs<ExtArgs>
  }, ExtArgs["result"]["unitSection"]>

  export type UnitSectionSelectScalar = {
    unitId?: boolean
    name?: boolean
    description?: boolean
    model?: boolean
    typeId?: boolean
    insiderToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microSection?: boolean | UnitSection$microSectionArgs<ExtArgs>
    sectionType?: boolean | UnitSection$sectionTypeArgs<ExtArgs>
  }
  export type UnitSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microSection?: boolean | UnitSection$microSectionArgs<ExtArgs>
    sectionType?: boolean | UnitSection$sectionTypeArgs<ExtArgs>
  }

  export type $UnitSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitSection"
    objects: {
      microSection: Prisma.$MicroSectionPayload<ExtArgs> | null
      sectionType: Prisma.$SectionTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      unitId: number
      name: string
      description: string | null
      model: string | null
      typeId: number | null
      insiderToId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unitSection"]>
    composites: {}
  }

  type UnitSectionGetPayload<S extends boolean | null | undefined | UnitSectionDefaultArgs> = $Result.GetResult<Prisma.$UnitSectionPayload, S>

  type UnitSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnitSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnitSectionCountAggregateInputType | true
    }

  export interface UnitSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitSection'], meta: { name: 'UnitSection' } }
    /**
     * Find zero or one UnitSection that matches the filter.
     * @param {UnitSectionFindUniqueArgs} args - Arguments to find a UnitSection
     * @example
     * // Get one UnitSection
     * const unitSection = await prisma.unitSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitSectionFindUniqueArgs>(args: SelectSubset<T, UnitSectionFindUniqueArgs<ExtArgs>>): Prisma__UnitSectionClient<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UnitSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnitSectionFindUniqueOrThrowArgs} args - Arguments to find a UnitSection
     * @example
     * // Get one UnitSection
     * const unitSection = await prisma.unitSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitSectionClient<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UnitSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitSectionFindFirstArgs} args - Arguments to find a UnitSection
     * @example
     * // Get one UnitSection
     * const unitSection = await prisma.unitSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitSectionFindFirstArgs>(args?: SelectSubset<T, UnitSectionFindFirstArgs<ExtArgs>>): Prisma__UnitSectionClient<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UnitSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitSectionFindFirstOrThrowArgs} args - Arguments to find a UnitSection
     * @example
     * // Get one UnitSection
     * const unitSection = await prisma.unitSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitSectionClient<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UnitSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitSections
     * const unitSections = await prisma.unitSection.findMany()
     * 
     * // Get first 10 UnitSections
     * const unitSections = await prisma.unitSection.findMany({ take: 10 })
     * 
     * // Only select the `unitId`
     * const unitSectionWithUnitIdOnly = await prisma.unitSection.findMany({ select: { unitId: true } })
     * 
     */
    findMany<T extends UnitSectionFindManyArgs>(args?: SelectSubset<T, UnitSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UnitSection.
     * @param {UnitSectionCreateArgs} args - Arguments to create a UnitSection.
     * @example
     * // Create one UnitSection
     * const UnitSection = await prisma.unitSection.create({
     *   data: {
     *     // ... data to create a UnitSection
     *   }
     * })
     * 
     */
    create<T extends UnitSectionCreateArgs>(args: SelectSubset<T, UnitSectionCreateArgs<ExtArgs>>): Prisma__UnitSectionClient<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UnitSections.
     * @param {UnitSectionCreateManyArgs} args - Arguments to create many UnitSections.
     * @example
     * // Create many UnitSections
     * const unitSection = await prisma.unitSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitSectionCreateManyArgs>(args?: SelectSubset<T, UnitSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitSections and returns the data saved in the database.
     * @param {UnitSectionCreateManyAndReturnArgs} args - Arguments to create many UnitSections.
     * @example
     * // Create many UnitSections
     * const unitSection = await prisma.unitSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitSections and only return the `unitId`
     * const unitSectionWithUnitIdOnly = await prisma.unitSection.createManyAndReturn({ 
     *   select: { unitId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UnitSection.
     * @param {UnitSectionDeleteArgs} args - Arguments to delete one UnitSection.
     * @example
     * // Delete one UnitSection
     * const UnitSection = await prisma.unitSection.delete({
     *   where: {
     *     // ... filter to delete one UnitSection
     *   }
     * })
     * 
     */
    delete<T extends UnitSectionDeleteArgs>(args: SelectSubset<T, UnitSectionDeleteArgs<ExtArgs>>): Prisma__UnitSectionClient<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UnitSection.
     * @param {UnitSectionUpdateArgs} args - Arguments to update one UnitSection.
     * @example
     * // Update one UnitSection
     * const unitSection = await prisma.unitSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitSectionUpdateArgs>(args: SelectSubset<T, UnitSectionUpdateArgs<ExtArgs>>): Prisma__UnitSectionClient<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UnitSections.
     * @param {UnitSectionDeleteManyArgs} args - Arguments to filter UnitSections to delete.
     * @example
     * // Delete a few UnitSections
     * const { count } = await prisma.unitSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitSectionDeleteManyArgs>(args?: SelectSubset<T, UnitSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitSections
     * const unitSection = await prisma.unitSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitSectionUpdateManyArgs>(args: SelectSubset<T, UnitSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnitSection.
     * @param {UnitSectionUpsertArgs} args - Arguments to update or create a UnitSection.
     * @example
     * // Update or create a UnitSection
     * const unitSection = await prisma.unitSection.upsert({
     *   create: {
     *     // ... data to create a UnitSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitSection we want to update
     *   }
     * })
     */
    upsert<T extends UnitSectionUpsertArgs>(args: SelectSubset<T, UnitSectionUpsertArgs<ExtArgs>>): Prisma__UnitSectionClient<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UnitSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitSectionCountArgs} args - Arguments to filter UnitSections to count.
     * @example
     * // Count the number of UnitSections
     * const count = await prisma.unitSection.count({
     *   where: {
     *     // ... the filter for the UnitSections we want to count
     *   }
     * })
    **/
    count<T extends UnitSectionCountArgs>(
      args?: Subset<T, UnitSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitSectionAggregateArgs>(args: Subset<T, UnitSectionAggregateArgs>): Prisma.PrismaPromise<GetUnitSectionAggregateType<T>>

    /**
     * Group by UnitSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitSectionGroupByArgs['orderBy'] }
        : { orderBy?: UnitSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitSection model
   */
  readonly fields: UnitSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    microSection<T extends UnitSection$microSectionArgs<ExtArgs> = {}>(args?: Subset<T, UnitSection$microSectionArgs<ExtArgs>>): Prisma__MicroSectionClient<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sectionType<T extends UnitSection$sectionTypeArgs<ExtArgs> = {}>(args?: Subset<T, UnitSection$sectionTypeArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnitSection model
   */ 
  interface UnitSectionFieldRefs {
    readonly unitId: FieldRef<"UnitSection", 'Int'>
    readonly name: FieldRef<"UnitSection", 'String'>
    readonly description: FieldRef<"UnitSection", 'String'>
    readonly model: FieldRef<"UnitSection", 'String'>
    readonly typeId: FieldRef<"UnitSection", 'Int'>
    readonly insiderToId: FieldRef<"UnitSection", 'Int'>
    readonly createdAt: FieldRef<"UnitSection", 'DateTime'>
    readonly updatedAt: FieldRef<"UnitSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnitSection findUnique
   */
  export type UnitSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * Filter, which UnitSection to fetch.
     */
    where: UnitSectionWhereUniqueInput
  }

  /**
   * UnitSection findUniqueOrThrow
   */
  export type UnitSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * Filter, which UnitSection to fetch.
     */
    where: UnitSectionWhereUniqueInput
  }

  /**
   * UnitSection findFirst
   */
  export type UnitSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * Filter, which UnitSection to fetch.
     */
    where?: UnitSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitSections to fetch.
     */
    orderBy?: UnitSectionOrderByWithRelationInput | UnitSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitSections.
     */
    cursor?: UnitSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitSections.
     */
    distinct?: UnitSectionScalarFieldEnum | UnitSectionScalarFieldEnum[]
  }

  /**
   * UnitSection findFirstOrThrow
   */
  export type UnitSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * Filter, which UnitSection to fetch.
     */
    where?: UnitSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitSections to fetch.
     */
    orderBy?: UnitSectionOrderByWithRelationInput | UnitSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitSections.
     */
    cursor?: UnitSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitSections.
     */
    distinct?: UnitSectionScalarFieldEnum | UnitSectionScalarFieldEnum[]
  }

  /**
   * UnitSection findMany
   */
  export type UnitSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * Filter, which UnitSections to fetch.
     */
    where?: UnitSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitSections to fetch.
     */
    orderBy?: UnitSectionOrderByWithRelationInput | UnitSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitSections.
     */
    cursor?: UnitSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitSections.
     */
    skip?: number
    distinct?: UnitSectionScalarFieldEnum | UnitSectionScalarFieldEnum[]
  }

  /**
   * UnitSection create
   */
  export type UnitSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitSection.
     */
    data: XOR<UnitSectionCreateInput, UnitSectionUncheckedCreateInput>
  }

  /**
   * UnitSection createMany
   */
  export type UnitSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitSections.
     */
    data: UnitSectionCreateManyInput | UnitSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitSection createManyAndReturn
   */
  export type UnitSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UnitSections.
     */
    data: UnitSectionCreateManyInput | UnitSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitSection update
   */
  export type UnitSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitSection.
     */
    data: XOR<UnitSectionUpdateInput, UnitSectionUncheckedUpdateInput>
    /**
     * Choose, which UnitSection to update.
     */
    where: UnitSectionWhereUniqueInput
  }

  /**
   * UnitSection updateMany
   */
  export type UnitSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitSections.
     */
    data: XOR<UnitSectionUpdateManyMutationInput, UnitSectionUncheckedUpdateManyInput>
    /**
     * Filter which UnitSections to update
     */
    where?: UnitSectionWhereInput
  }

  /**
   * UnitSection upsert
   */
  export type UnitSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitSection to update in case it exists.
     */
    where: UnitSectionWhereUniqueInput
    /**
     * In case the UnitSection found by the `where` argument doesn't exist, create a new UnitSection with this data.
     */
    create: XOR<UnitSectionCreateInput, UnitSectionUncheckedCreateInput>
    /**
     * In case the UnitSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitSectionUpdateInput, UnitSectionUncheckedUpdateInput>
  }

  /**
   * UnitSection delete
   */
  export type UnitSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    /**
     * Filter which UnitSection to delete.
     */
    where: UnitSectionWhereUniqueInput
  }

  /**
   * UnitSection deleteMany
   */
  export type UnitSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitSections to delete
     */
    where?: UnitSectionWhereInput
  }

  /**
   * UnitSection.microSection
   */
  export type UnitSection$microSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    where?: MicroSectionWhereInput
  }

  /**
   * UnitSection.sectionType
   */
  export type UnitSection$sectionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    where?: SectionTypeWhereInput
  }

  /**
   * UnitSection without action
   */
  export type UnitSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
  }


  /**
   * Model SectionType
   */

  export type AggregateSectionType = {
    _count: SectionTypeCountAggregateOutputType | null
    _avg: SectionTypeAvgAggregateOutputType | null
    _sum: SectionTypeSumAggregateOutputType | null
    _min: SectionTypeMinAggregateOutputType | null
    _max: SectionTypeMaxAggregateOutputType | null
  }

  export type SectionTypeAvgAggregateOutputType = {
    typeId: number | null
    scaleLevel: number | null
  }

  export type SectionTypeSumAggregateOutputType = {
    typeId: number | null
    scaleLevel: number | null
  }

  export type SectionTypeMinAggregateOutputType = {
    typeId: number | null
    scaleLevel: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionTypeMaxAggregateOutputType = {
    typeId: number | null
    scaleLevel: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectionTypeCountAggregateOutputType = {
    typeId: number
    scaleLevel: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectionTypeAvgAggregateInputType = {
    typeId?: true
    scaleLevel?: true
  }

  export type SectionTypeSumAggregateInputType = {
    typeId?: true
    scaleLevel?: true
  }

  export type SectionTypeMinAggregateInputType = {
    typeId?: true
    scaleLevel?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionTypeMaxAggregateInputType = {
    typeId?: true
    scaleLevel?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectionTypeCountAggregateInputType = {
    typeId?: true
    scaleLevel?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionType to aggregate.
     */
    where?: SectionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionTypes to fetch.
     */
    orderBy?: SectionTypeOrderByWithRelationInput | SectionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionTypes
    **/
    _count?: true | SectionTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionTypeMaxAggregateInputType
  }

  export type GetSectionTypeAggregateType<T extends SectionTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionType[P]>
      : GetScalarType<T[P], AggregateSectionType[P]>
  }




  export type SectionTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionTypeWhereInput
    orderBy?: SectionTypeOrderByWithAggregationInput | SectionTypeOrderByWithAggregationInput[]
    by: SectionTypeScalarFieldEnum[] | SectionTypeScalarFieldEnum
    having?: SectionTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionTypeCountAggregateInputType | true
    _avg?: SectionTypeAvgAggregateInputType
    _sum?: SectionTypeSumAggregateInputType
    _min?: SectionTypeMinAggregateInputType
    _max?: SectionTypeMaxAggregateInputType
  }

  export type SectionTypeGroupByOutputType = {
    typeId: number
    scaleLevel: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SectionTypeCountAggregateOutputType | null
    _avg: SectionTypeAvgAggregateOutputType | null
    _sum: SectionTypeSumAggregateOutputType | null
    _min: SectionTypeMinAggregateOutputType | null
    _max: SectionTypeMaxAggregateOutputType | null
  }

  type GetSectionTypeGroupByPayload<T extends SectionTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SectionTypeGroupByOutputType[P]>
        }
      >
    >


  export type SectionTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typeId?: boolean
    scaleLevel?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    largeSections?: boolean | SectionType$largeSectionsArgs<ExtArgs>
    mediumSections?: boolean | SectionType$mediumSectionsArgs<ExtArgs>
    smallSections?: boolean | SectionType$smallSectionsArgs<ExtArgs>
    microSections?: boolean | SectionType$microSectionsArgs<ExtArgs>
    unitSections?: boolean | SectionType$unitSectionsArgs<ExtArgs>
    sectionItems?: boolean | SectionType$sectionItemsArgs<ExtArgs>
    _count?: boolean | SectionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionType"]>

  export type SectionTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    typeId?: boolean
    scaleLevel?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sectionType"]>

  export type SectionTypeSelectScalar = {
    typeId?: boolean
    scaleLevel?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    largeSections?: boolean | SectionType$largeSectionsArgs<ExtArgs>
    mediumSections?: boolean | SectionType$mediumSectionsArgs<ExtArgs>
    smallSections?: boolean | SectionType$smallSectionsArgs<ExtArgs>
    microSections?: boolean | SectionType$microSectionsArgs<ExtArgs>
    unitSections?: boolean | SectionType$unitSectionsArgs<ExtArgs>
    sectionItems?: boolean | SectionType$sectionItemsArgs<ExtArgs>
    _count?: boolean | SectionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SectionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionType"
    objects: {
      largeSections: Prisma.$LargeSectionPayload<ExtArgs>[]
      mediumSections: Prisma.$MediumSectionPayload<ExtArgs>[]
      smallSections: Prisma.$SmallSectionPayload<ExtArgs>[]
      microSections: Prisma.$MicroSectionPayload<ExtArgs>[]
      unitSections: Prisma.$UnitSectionPayload<ExtArgs>[]
      sectionItems: Prisma.$SectionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      typeId: number
      scaleLevel: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sectionType"]>
    composites: {}
  }

  type SectionTypeGetPayload<S extends boolean | null | undefined | SectionTypeDefaultArgs> = $Result.GetResult<Prisma.$SectionTypePayload, S>

  type SectionTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SectionTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SectionTypeCountAggregateInputType | true
    }

  export interface SectionTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionType'], meta: { name: 'SectionType' } }
    /**
     * Find zero or one SectionType that matches the filter.
     * @param {SectionTypeFindUniqueArgs} args - Arguments to find a SectionType
     * @example
     * // Get one SectionType
     * const sectionType = await prisma.sectionType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionTypeFindUniqueArgs>(args: SelectSubset<T, SectionTypeFindUniqueArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SectionType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SectionTypeFindUniqueOrThrowArgs} args - Arguments to find a SectionType
     * @example
     * // Get one SectionType
     * const sectionType = await prisma.sectionType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SectionType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTypeFindFirstArgs} args - Arguments to find a SectionType
     * @example
     * // Get one SectionType
     * const sectionType = await prisma.sectionType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionTypeFindFirstArgs>(args?: SelectSubset<T, SectionTypeFindFirstArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SectionType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTypeFindFirstOrThrowArgs} args - Arguments to find a SectionType
     * @example
     * // Get one SectionType
     * const sectionType = await prisma.sectionType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SectionTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionTypes
     * const sectionTypes = await prisma.sectionType.findMany()
     * 
     * // Get first 10 SectionTypes
     * const sectionTypes = await prisma.sectionType.findMany({ take: 10 })
     * 
     * // Only select the `typeId`
     * const sectionTypeWithTypeIdOnly = await prisma.sectionType.findMany({ select: { typeId: true } })
     * 
     */
    findMany<T extends SectionTypeFindManyArgs>(args?: SelectSubset<T, SectionTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SectionType.
     * @param {SectionTypeCreateArgs} args - Arguments to create a SectionType.
     * @example
     * // Create one SectionType
     * const SectionType = await prisma.sectionType.create({
     *   data: {
     *     // ... data to create a SectionType
     *   }
     * })
     * 
     */
    create<T extends SectionTypeCreateArgs>(args: SelectSubset<T, SectionTypeCreateArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SectionTypes.
     * @param {SectionTypeCreateManyArgs} args - Arguments to create many SectionTypes.
     * @example
     * // Create many SectionTypes
     * const sectionType = await prisma.sectionType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionTypeCreateManyArgs>(args?: SelectSubset<T, SectionTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionTypes and returns the data saved in the database.
     * @param {SectionTypeCreateManyAndReturnArgs} args - Arguments to create many SectionTypes.
     * @example
     * // Create many SectionTypes
     * const sectionType = await prisma.sectionType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionTypes and only return the `typeId`
     * const sectionTypeWithTypeIdOnly = await prisma.sectionType.createManyAndReturn({ 
     *   select: { typeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SectionType.
     * @param {SectionTypeDeleteArgs} args - Arguments to delete one SectionType.
     * @example
     * // Delete one SectionType
     * const SectionType = await prisma.sectionType.delete({
     *   where: {
     *     // ... filter to delete one SectionType
     *   }
     * })
     * 
     */
    delete<T extends SectionTypeDeleteArgs>(args: SelectSubset<T, SectionTypeDeleteArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SectionType.
     * @param {SectionTypeUpdateArgs} args - Arguments to update one SectionType.
     * @example
     * // Update one SectionType
     * const sectionType = await prisma.sectionType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionTypeUpdateArgs>(args: SelectSubset<T, SectionTypeUpdateArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SectionTypes.
     * @param {SectionTypeDeleteManyArgs} args - Arguments to filter SectionTypes to delete.
     * @example
     * // Delete a few SectionTypes
     * const { count } = await prisma.sectionType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionTypeDeleteManyArgs>(args?: SelectSubset<T, SectionTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionTypes
     * const sectionType = await prisma.sectionType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionTypeUpdateManyArgs>(args: SelectSubset<T, SectionTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SectionType.
     * @param {SectionTypeUpsertArgs} args - Arguments to update or create a SectionType.
     * @example
     * // Update or create a SectionType
     * const sectionType = await prisma.sectionType.upsert({
     *   create: {
     *     // ... data to create a SectionType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionType we want to update
     *   }
     * })
     */
    upsert<T extends SectionTypeUpsertArgs>(args: SelectSubset<T, SectionTypeUpsertArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SectionTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTypeCountArgs} args - Arguments to filter SectionTypes to count.
     * @example
     * // Count the number of SectionTypes
     * const count = await prisma.sectionType.count({
     *   where: {
     *     // ... the filter for the SectionTypes we want to count
     *   }
     * })
    **/
    count<T extends SectionTypeCountArgs>(
      args?: Subset<T, SectionTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionTypeAggregateArgs>(args: Subset<T, SectionTypeAggregateArgs>): Prisma.PrismaPromise<GetSectionTypeAggregateType<T>>

    /**
     * Group by SectionType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionTypeGroupByArgs['orderBy'] }
        : { orderBy?: SectionTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionType model
   */
  readonly fields: SectionTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    largeSections<T extends SectionType$largeSectionsArgs<ExtArgs> = {}>(args?: Subset<T, SectionType$largeSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LargeSectionPayload<ExtArgs>, T, "findMany"> | Null>
    mediumSections<T extends SectionType$mediumSectionsArgs<ExtArgs> = {}>(args?: Subset<T, SectionType$mediumSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediumSectionPayload<ExtArgs>, T, "findMany"> | Null>
    smallSections<T extends SectionType$smallSectionsArgs<ExtArgs> = {}>(args?: Subset<T, SectionType$smallSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmallSectionPayload<ExtArgs>, T, "findMany"> | Null>
    microSections<T extends SectionType$microSectionsArgs<ExtArgs> = {}>(args?: Subset<T, SectionType$microSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicroSectionPayload<ExtArgs>, T, "findMany"> | Null>
    unitSections<T extends SectionType$unitSectionsArgs<ExtArgs> = {}>(args?: Subset<T, SectionType$unitSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitSectionPayload<ExtArgs>, T, "findMany"> | Null>
    sectionItems<T extends SectionType$sectionItemsArgs<ExtArgs> = {}>(args?: Subset<T, SectionType$sectionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SectionType model
   */ 
  interface SectionTypeFieldRefs {
    readonly typeId: FieldRef<"SectionType", 'Int'>
    readonly scaleLevel: FieldRef<"SectionType", 'Int'>
    readonly name: FieldRef<"SectionType", 'String'>
    readonly description: FieldRef<"SectionType", 'String'>
    readonly createdAt: FieldRef<"SectionType", 'DateTime'>
    readonly updatedAt: FieldRef<"SectionType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SectionType findUnique
   */
  export type SectionTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * Filter, which SectionType to fetch.
     */
    where: SectionTypeWhereUniqueInput
  }

  /**
   * SectionType findUniqueOrThrow
   */
  export type SectionTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * Filter, which SectionType to fetch.
     */
    where: SectionTypeWhereUniqueInput
  }

  /**
   * SectionType findFirst
   */
  export type SectionTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * Filter, which SectionType to fetch.
     */
    where?: SectionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionTypes to fetch.
     */
    orderBy?: SectionTypeOrderByWithRelationInput | SectionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionTypes.
     */
    cursor?: SectionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionTypes.
     */
    distinct?: SectionTypeScalarFieldEnum | SectionTypeScalarFieldEnum[]
  }

  /**
   * SectionType findFirstOrThrow
   */
  export type SectionTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * Filter, which SectionType to fetch.
     */
    where?: SectionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionTypes to fetch.
     */
    orderBy?: SectionTypeOrderByWithRelationInput | SectionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionTypes.
     */
    cursor?: SectionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionTypes.
     */
    distinct?: SectionTypeScalarFieldEnum | SectionTypeScalarFieldEnum[]
  }

  /**
   * SectionType findMany
   */
  export type SectionTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * Filter, which SectionTypes to fetch.
     */
    where?: SectionTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionTypes to fetch.
     */
    orderBy?: SectionTypeOrderByWithRelationInput | SectionTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionTypes.
     */
    cursor?: SectionTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionTypes.
     */
    skip?: number
    distinct?: SectionTypeScalarFieldEnum | SectionTypeScalarFieldEnum[]
  }

  /**
   * SectionType create
   */
  export type SectionTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionType.
     */
    data: XOR<SectionTypeCreateInput, SectionTypeUncheckedCreateInput>
  }

  /**
   * SectionType createMany
   */
  export type SectionTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionTypes.
     */
    data: SectionTypeCreateManyInput | SectionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionType createManyAndReturn
   */
  export type SectionTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SectionTypes.
     */
    data: SectionTypeCreateManyInput | SectionTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionType update
   */
  export type SectionTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionType.
     */
    data: XOR<SectionTypeUpdateInput, SectionTypeUncheckedUpdateInput>
    /**
     * Choose, which SectionType to update.
     */
    where: SectionTypeWhereUniqueInput
  }

  /**
   * SectionType updateMany
   */
  export type SectionTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionTypes.
     */
    data: XOR<SectionTypeUpdateManyMutationInput, SectionTypeUncheckedUpdateManyInput>
    /**
     * Filter which SectionTypes to update
     */
    where?: SectionTypeWhereInput
  }

  /**
   * SectionType upsert
   */
  export type SectionTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionType to update in case it exists.
     */
    where: SectionTypeWhereUniqueInput
    /**
     * In case the SectionType found by the `where` argument doesn't exist, create a new SectionType with this data.
     */
    create: XOR<SectionTypeCreateInput, SectionTypeUncheckedCreateInput>
    /**
     * In case the SectionType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionTypeUpdateInput, SectionTypeUncheckedUpdateInput>
  }

  /**
   * SectionType delete
   */
  export type SectionTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
    /**
     * Filter which SectionType to delete.
     */
    where: SectionTypeWhereUniqueInput
  }

  /**
   * SectionType deleteMany
   */
  export type SectionTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionTypes to delete
     */
    where?: SectionTypeWhereInput
  }

  /**
   * SectionType.largeSections
   */
  export type SectionType$largeSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LargeSection
     */
    select?: LargeSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LargeSectionInclude<ExtArgs> | null
    where?: LargeSectionWhereInput
    orderBy?: LargeSectionOrderByWithRelationInput | LargeSectionOrderByWithRelationInput[]
    cursor?: LargeSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LargeSectionScalarFieldEnum | LargeSectionScalarFieldEnum[]
  }

  /**
   * SectionType.mediumSections
   */
  export type SectionType$mediumSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediumSection
     */
    select?: MediumSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediumSectionInclude<ExtArgs> | null
    where?: MediumSectionWhereInput
    orderBy?: MediumSectionOrderByWithRelationInput | MediumSectionOrderByWithRelationInput[]
    cursor?: MediumSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediumSectionScalarFieldEnum | MediumSectionScalarFieldEnum[]
  }

  /**
   * SectionType.smallSections
   */
  export type SectionType$smallSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmallSection
     */
    select?: SmallSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmallSectionInclude<ExtArgs> | null
    where?: SmallSectionWhereInput
    orderBy?: SmallSectionOrderByWithRelationInput | SmallSectionOrderByWithRelationInput[]
    cursor?: SmallSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SmallSectionScalarFieldEnum | SmallSectionScalarFieldEnum[]
  }

  /**
   * SectionType.microSections
   */
  export type SectionType$microSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroSection
     */
    select?: MicroSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroSectionInclude<ExtArgs> | null
    where?: MicroSectionWhereInput
    orderBy?: MicroSectionOrderByWithRelationInput | MicroSectionOrderByWithRelationInput[]
    cursor?: MicroSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MicroSectionScalarFieldEnum | MicroSectionScalarFieldEnum[]
  }

  /**
   * SectionType.unitSections
   */
  export type SectionType$unitSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitSection
     */
    select?: UnitSectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitSectionInclude<ExtArgs> | null
    where?: UnitSectionWhereInput
    orderBy?: UnitSectionOrderByWithRelationInput | UnitSectionOrderByWithRelationInput[]
    cursor?: UnitSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitSectionScalarFieldEnum | UnitSectionScalarFieldEnum[]
  }

  /**
   * SectionType.sectionItems
   */
  export type SectionType$sectionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    where?: SectionItemWhereInput
    orderBy?: SectionItemOrderByWithRelationInput | SectionItemOrderByWithRelationInput[]
    cursor?: SectionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionItemScalarFieldEnum | SectionItemScalarFieldEnum[]
  }

  /**
   * SectionType without action
   */
  export type SectionTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionType
     */
    select?: SectionTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTypeInclude<ExtArgs> | null
  }


  /**
   * Model SectionItem
   */

  export type AggregateSectionItem = {
    _count: SectionItemCountAggregateOutputType | null
    _avg: SectionItemAvgAggregateOutputType | null
    _sum: SectionItemSumAggregateOutputType | null
    _min: SectionItemMinAggregateOutputType | null
    _max: SectionItemMaxAggregateOutputType | null
  }

  export type SectionItemAvgAggregateOutputType = {
    itemId: number | null
    typeId: number | null
  }

  export type SectionItemSumAggregateOutputType = {
    itemId: number | null
    typeId: number | null
  }

  export type SectionItemMinAggregateOutputType = {
    itemId: number | null
    typeId: number | null
    itemName: string | null
  }

  export type SectionItemMaxAggregateOutputType = {
    itemId: number | null
    typeId: number | null
    itemName: string | null
  }

  export type SectionItemCountAggregateOutputType = {
    itemId: number
    typeId: number
    itemName: number
    _all: number
  }


  export type SectionItemAvgAggregateInputType = {
    itemId?: true
    typeId?: true
  }

  export type SectionItemSumAggregateInputType = {
    itemId?: true
    typeId?: true
  }

  export type SectionItemMinAggregateInputType = {
    itemId?: true
    typeId?: true
    itemName?: true
  }

  export type SectionItemMaxAggregateInputType = {
    itemId?: true
    typeId?: true
    itemName?: true
  }

  export type SectionItemCountAggregateInputType = {
    itemId?: true
    typeId?: true
    itemName?: true
    _all?: true
  }

  export type SectionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionItem to aggregate.
     */
    where?: SectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionItems to fetch.
     */
    orderBy?: SectionItemOrderByWithRelationInput | SectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionItems
    **/
    _count?: true | SectionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionItemMaxAggregateInputType
  }

  export type GetSectionItemAggregateType<T extends SectionItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionItem[P]>
      : GetScalarType<T[P], AggregateSectionItem[P]>
  }




  export type SectionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionItemWhereInput
    orderBy?: SectionItemOrderByWithAggregationInput | SectionItemOrderByWithAggregationInput[]
    by: SectionItemScalarFieldEnum[] | SectionItemScalarFieldEnum
    having?: SectionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionItemCountAggregateInputType | true
    _avg?: SectionItemAvgAggregateInputType
    _sum?: SectionItemSumAggregateInputType
    _min?: SectionItemMinAggregateInputType
    _max?: SectionItemMaxAggregateInputType
  }

  export type SectionItemGroupByOutputType = {
    itemId: number
    typeId: number
    itemName: string
    _count: SectionItemCountAggregateOutputType | null
    _avg: SectionItemAvgAggregateOutputType | null
    _sum: SectionItemSumAggregateOutputType | null
    _min: SectionItemMinAggregateOutputType | null
    _max: SectionItemMaxAggregateOutputType | null
  }

  type GetSectionItemGroupByPayload<T extends SectionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionItemGroupByOutputType[P]>
            : GetScalarType<T[P], SectionItemGroupByOutputType[P]>
        }
      >
    >


  export type SectionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    typeId?: boolean
    itemName?: boolean
    sectionType?: boolean | SectionTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionItem"]>

  export type SectionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itemId?: boolean
    typeId?: boolean
    itemName?: boolean
    sectionType?: boolean | SectionTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionItem"]>

  export type SectionItemSelectScalar = {
    itemId?: boolean
    typeId?: boolean
    itemName?: boolean
  }

  export type SectionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionType?: boolean | SectionTypeDefaultArgs<ExtArgs>
  }
  export type SectionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionType?: boolean | SectionTypeDefaultArgs<ExtArgs>
  }

  export type $SectionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionItem"
    objects: {
      sectionType: Prisma.$SectionTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itemId: number
      typeId: number
      itemName: string
    }, ExtArgs["result"]["sectionItem"]>
    composites: {}
  }

  type SectionItemGetPayload<S extends boolean | null | undefined | SectionItemDefaultArgs> = $Result.GetResult<Prisma.$SectionItemPayload, S>

  type SectionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SectionItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SectionItemCountAggregateInputType | true
    }

  export interface SectionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionItem'], meta: { name: 'SectionItem' } }
    /**
     * Find zero or one SectionItem that matches the filter.
     * @param {SectionItemFindUniqueArgs} args - Arguments to find a SectionItem
     * @example
     * // Get one SectionItem
     * const sectionItem = await prisma.sectionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionItemFindUniqueArgs>(args: SelectSubset<T, SectionItemFindUniqueArgs<ExtArgs>>): Prisma__SectionItemClient<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SectionItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SectionItemFindUniqueOrThrowArgs} args - Arguments to find a SectionItem
     * @example
     * // Get one SectionItem
     * const sectionItem = await prisma.sectionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionItemClient<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SectionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionItemFindFirstArgs} args - Arguments to find a SectionItem
     * @example
     * // Get one SectionItem
     * const sectionItem = await prisma.sectionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionItemFindFirstArgs>(args?: SelectSubset<T, SectionItemFindFirstArgs<ExtArgs>>): Prisma__SectionItemClient<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SectionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionItemFindFirstOrThrowArgs} args - Arguments to find a SectionItem
     * @example
     * // Get one SectionItem
     * const sectionItem = await prisma.sectionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionItemClient<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SectionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionItems
     * const sectionItems = await prisma.sectionItem.findMany()
     * 
     * // Get first 10 SectionItems
     * const sectionItems = await prisma.sectionItem.findMany({ take: 10 })
     * 
     * // Only select the `itemId`
     * const sectionItemWithItemIdOnly = await prisma.sectionItem.findMany({ select: { itemId: true } })
     * 
     */
    findMany<T extends SectionItemFindManyArgs>(args?: SelectSubset<T, SectionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SectionItem.
     * @param {SectionItemCreateArgs} args - Arguments to create a SectionItem.
     * @example
     * // Create one SectionItem
     * const SectionItem = await prisma.sectionItem.create({
     *   data: {
     *     // ... data to create a SectionItem
     *   }
     * })
     * 
     */
    create<T extends SectionItemCreateArgs>(args: SelectSubset<T, SectionItemCreateArgs<ExtArgs>>): Prisma__SectionItemClient<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SectionItems.
     * @param {SectionItemCreateManyArgs} args - Arguments to create many SectionItems.
     * @example
     * // Create many SectionItems
     * const sectionItem = await prisma.sectionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionItemCreateManyArgs>(args?: SelectSubset<T, SectionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionItems and returns the data saved in the database.
     * @param {SectionItemCreateManyAndReturnArgs} args - Arguments to create many SectionItems.
     * @example
     * // Create many SectionItems
     * const sectionItem = await prisma.sectionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionItems and only return the `itemId`
     * const sectionItemWithItemIdOnly = await prisma.sectionItem.createManyAndReturn({ 
     *   select: { itemId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SectionItem.
     * @param {SectionItemDeleteArgs} args - Arguments to delete one SectionItem.
     * @example
     * // Delete one SectionItem
     * const SectionItem = await prisma.sectionItem.delete({
     *   where: {
     *     // ... filter to delete one SectionItem
     *   }
     * })
     * 
     */
    delete<T extends SectionItemDeleteArgs>(args: SelectSubset<T, SectionItemDeleteArgs<ExtArgs>>): Prisma__SectionItemClient<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SectionItem.
     * @param {SectionItemUpdateArgs} args - Arguments to update one SectionItem.
     * @example
     * // Update one SectionItem
     * const sectionItem = await prisma.sectionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionItemUpdateArgs>(args: SelectSubset<T, SectionItemUpdateArgs<ExtArgs>>): Prisma__SectionItemClient<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SectionItems.
     * @param {SectionItemDeleteManyArgs} args - Arguments to filter SectionItems to delete.
     * @example
     * // Delete a few SectionItems
     * const { count } = await prisma.sectionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionItemDeleteManyArgs>(args?: SelectSubset<T, SectionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionItems
     * const sectionItem = await prisma.sectionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionItemUpdateManyArgs>(args: SelectSubset<T, SectionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SectionItem.
     * @param {SectionItemUpsertArgs} args - Arguments to update or create a SectionItem.
     * @example
     * // Update or create a SectionItem
     * const sectionItem = await prisma.sectionItem.upsert({
     *   create: {
     *     // ... data to create a SectionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionItem we want to update
     *   }
     * })
     */
    upsert<T extends SectionItemUpsertArgs>(args: SelectSubset<T, SectionItemUpsertArgs<ExtArgs>>): Prisma__SectionItemClient<$Result.GetResult<Prisma.$SectionItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SectionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionItemCountArgs} args - Arguments to filter SectionItems to count.
     * @example
     * // Count the number of SectionItems
     * const count = await prisma.sectionItem.count({
     *   where: {
     *     // ... the filter for the SectionItems we want to count
     *   }
     * })
    **/
    count<T extends SectionItemCountArgs>(
      args?: Subset<T, SectionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionItemAggregateArgs>(args: Subset<T, SectionItemAggregateArgs>): Prisma.PrismaPromise<GetSectionItemAggregateType<T>>

    /**
     * Group by SectionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionItemGroupByArgs['orderBy'] }
        : { orderBy?: SectionItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionItem model
   */
  readonly fields: SectionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sectionType<T extends SectionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionTypeDefaultArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SectionItem model
   */ 
  interface SectionItemFieldRefs {
    readonly itemId: FieldRef<"SectionItem", 'Int'>
    readonly typeId: FieldRef<"SectionItem", 'Int'>
    readonly itemName: FieldRef<"SectionItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SectionItem findUnique
   */
  export type SectionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * Filter, which SectionItem to fetch.
     */
    where: SectionItemWhereUniqueInput
  }

  /**
   * SectionItem findUniqueOrThrow
   */
  export type SectionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * Filter, which SectionItem to fetch.
     */
    where: SectionItemWhereUniqueInput
  }

  /**
   * SectionItem findFirst
   */
  export type SectionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * Filter, which SectionItem to fetch.
     */
    where?: SectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionItems to fetch.
     */
    orderBy?: SectionItemOrderByWithRelationInput | SectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionItems.
     */
    cursor?: SectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionItems.
     */
    distinct?: SectionItemScalarFieldEnum | SectionItemScalarFieldEnum[]
  }

  /**
   * SectionItem findFirstOrThrow
   */
  export type SectionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * Filter, which SectionItem to fetch.
     */
    where?: SectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionItems to fetch.
     */
    orderBy?: SectionItemOrderByWithRelationInput | SectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionItems.
     */
    cursor?: SectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionItems.
     */
    distinct?: SectionItemScalarFieldEnum | SectionItemScalarFieldEnum[]
  }

  /**
   * SectionItem findMany
   */
  export type SectionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * Filter, which SectionItems to fetch.
     */
    where?: SectionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionItems to fetch.
     */
    orderBy?: SectionItemOrderByWithRelationInput | SectionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionItems.
     */
    cursor?: SectionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionItems.
     */
    skip?: number
    distinct?: SectionItemScalarFieldEnum | SectionItemScalarFieldEnum[]
  }

  /**
   * SectionItem create
   */
  export type SectionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionItem.
     */
    data: XOR<SectionItemCreateInput, SectionItemUncheckedCreateInput>
  }

  /**
   * SectionItem createMany
   */
  export type SectionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionItems.
     */
    data: SectionItemCreateManyInput | SectionItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionItem createManyAndReturn
   */
  export type SectionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SectionItems.
     */
    data: SectionItemCreateManyInput | SectionItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionItem update
   */
  export type SectionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionItem.
     */
    data: XOR<SectionItemUpdateInput, SectionItemUncheckedUpdateInput>
    /**
     * Choose, which SectionItem to update.
     */
    where: SectionItemWhereUniqueInput
  }

  /**
   * SectionItem updateMany
   */
  export type SectionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionItems.
     */
    data: XOR<SectionItemUpdateManyMutationInput, SectionItemUncheckedUpdateManyInput>
    /**
     * Filter which SectionItems to update
     */
    where?: SectionItemWhereInput
  }

  /**
   * SectionItem upsert
   */
  export type SectionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionItem to update in case it exists.
     */
    where: SectionItemWhereUniqueInput
    /**
     * In case the SectionItem found by the `where` argument doesn't exist, create a new SectionItem with this data.
     */
    create: XOR<SectionItemCreateInput, SectionItemUncheckedCreateInput>
    /**
     * In case the SectionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionItemUpdateInput, SectionItemUncheckedUpdateInput>
  }

  /**
   * SectionItem delete
   */
  export type SectionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
    /**
     * Filter which SectionItem to delete.
     */
    where: SectionItemWhereUniqueInput
  }

  /**
   * SectionItem deleteMany
   */
  export type SectionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionItems to delete
     */
    where?: SectionItemWhereInput
  }

  /**
   * SectionItem without action
   */
  export type SectionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionItem
     */
    select?: SectionItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionItemInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    positionId: number | null
  }

  export type PositionSumAggregateOutputType = {
    positionId: number | null
  }

  export type PositionMinAggregateOutputType = {
    positionId: number | null
    positionName: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PositionMaxAggregateOutputType = {
    positionId: number | null
    positionName: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PositionCountAggregateOutputType = {
    positionId: number
    positionName: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    responsibilities: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    positionId?: true
  }

  export type PositionSumAggregateInputType = {
    positionId?: true
  }

  export type PositionMinAggregateInputType = {
    positionId?: true
    positionName?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PositionMaxAggregateInputType = {
    positionId?: true
    positionName?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PositionCountAggregateInputType = {
    positionId?: true
    positionName?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    responsibilities?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    positionId: number
    positionName: string
    description: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    responsibilities: JsonValue
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    positionName?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responsibilities?: boolean
    Users?: boolean | Position$UsersArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    positionId?: boolean
    positionName?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responsibilities?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    positionId?: boolean
    positionName?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responsibilities?: boolean
  }

  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Position$UsersArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      Users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      positionId: number
      positionName: string
      description: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      responsibilities: Prisma.JsonValue
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `positionId`
     * const positionWithPositionIdOnly = await prisma.position.findMany({ select: { positionId: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `positionId`
     * const positionWithPositionIdOnly = await prisma.position.createManyAndReturn({ 
     *   select: { positionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Position$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Position$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Position model
   */ 
  interface PositionFieldRefs {
    readonly positionId: FieldRef<"Position", 'Int'>
    readonly positionName: FieldRef<"Position", 'String'>
    readonly description: FieldRef<"Position", 'String'>
    readonly isActive: FieldRef<"Position", 'Boolean'>
    readonly createdAt: FieldRef<"Position", 'DateTime'>
    readonly updatedAt: FieldRef<"Position", 'DateTime'>
    readonly responsibilities: FieldRef<"Position", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
  }

  /**
   * Position.Users
   */
  export type Position$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    roleId: number | null
  }

  export type RoleSumAggregateOutputType = {
    roleId: number | null
  }

  export type RoleMinAggregateOutputType = {
    roleId: number | null
    roleName: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    roleId: number | null
    roleName: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    roleId: number
    roleName: number
    description: number
    permissions: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    roleId?: true
  }

  export type RoleSumAggregateInputType = {
    roleId?: true
  }

  export type RoleMinAggregateInputType = {
    roleId?: true
    roleName?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    roleId?: true
    roleName?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    roleId?: true
    roleName?: true
    description?: true
    permissions?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    roleId: number
    roleName: string
    description: string | null
    permissions: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    description?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | Role$UsersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    description?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    roleId?: boolean
    roleName?: boolean
    description?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Role$UsersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      Users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      roleName: string
      description: string | null
      permissions: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Role$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Role$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly roleId: FieldRef<"Role", 'Int'>
    readonly roleName: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly permissions: FieldRef<"Role", 'Json'>
    readonly isActive: FieldRef<"Role", 'Boolean'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.Users
   */
  export type Role$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    permissionId: number | null
  }

  export type PermissionSumAggregateOutputType = {
    permissionId: number | null
  }

  export type PermissionMinAggregateOutputType = {
    permissionId: number | null
    name: string | null
    category: string | null
    description: string | null
    isActive: boolean | null
  }

  export type PermissionMaxAggregateOutputType = {
    permissionId: number | null
    name: string | null
    category: string | null
    description: string | null
    isActive: boolean | null
  }

  export type PermissionCountAggregateOutputType = {
    permissionId: number
    name: number
    category: number
    description: number
    isActive: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    permissionId?: true
  }

  export type PermissionSumAggregateInputType = {
    permissionId?: true
  }

  export type PermissionMinAggregateInputType = {
    permissionId?: true
    name?: true
    category?: true
    description?: true
    isActive?: true
  }

  export type PermissionMaxAggregateInputType = {
    permissionId?: true
    name?: true
    category?: true
    description?: true
    isActive?: true
  }

  export type PermissionCountAggregateInputType = {
    permissionId?: true
    name?: true
    category?: true
    description?: true
    isActive?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    permissionId: number
    name: string
    category: string
    description: string | null
    isActive: boolean
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    permissionId?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    isActive?: boolean
  }


  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      permissionId: number
      name: string
      category: string
      description: string | null
      isActive: boolean
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `permissionId`
     * const permissionWithPermissionIdOnly = await prisma.permission.findMany({ select: { permissionId: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `permissionId`
     * const permissionWithPermissionIdOnly = await prisma.permission.createManyAndReturn({ 
     *   select: { permissionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly permissionId: FieldRef<"Permission", 'Int'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly category: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
    readonly isActive: FieldRef<"Permission", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
    userRoleId: number | null
    positionId: number | null
    createdBy: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
    userRoleId: number | null
    positionId: number | null
    createdBy: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    username: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    salt: string | null
    userRoleId: number | null
    positionId: number | null
    isActive: boolean | null
    profileImage: string | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    salt: string | null
    userRoleId: number | null
    positionId: number | null
    isActive: boolean | null
    profileImage: string | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    email: number
    phone: number
    passwordHash: number
    salt: number
    userRoleId: number
    positionId: number
    isActive: number
    profileImage: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
    userRoleId?: true
    positionId?: true
    createdBy?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
    userRoleId?: true
    positionId?: true
    createdBy?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    phone?: true
    passwordHash?: true
    salt?: true
    userRoleId?: true
    positionId?: true
    isActive?: true
    profileImage?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    phone?: true
    passwordHash?: true
    salt?: true
    userRoleId?: true
    positionId?: true
    isActive?: true
    profileImage?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    phone?: true
    passwordHash?: true
    salt?: true
    userRoleId?: true
    positionId?: true
    isActive?: true
    profileImage?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    username: string
    email: string
    phone: string | null
    passwordHash: string
    salt: string
    userRoleId: number
    positionId: number | null
    isActive: boolean
    profileImage: string | null
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    createdBy: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    salt?: boolean
    userRoleId?: boolean
    positionId?: boolean
    isActive?: boolean
    profileImage?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    userRole?: boolean | RoleDefaultArgs<ExtArgs>
    Position?: boolean | User$PositionArgs<ExtArgs>
    Creator?: boolean | User$CreatorArgs<ExtArgs>
    CreatedUsers?: boolean | User$CreatedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    salt?: boolean
    userRoleId?: boolean
    positionId?: boolean
    isActive?: boolean
    profileImage?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    userRole?: boolean | RoleDefaultArgs<ExtArgs>
    Position?: boolean | User$PositionArgs<ExtArgs>
    Creator?: boolean | User$CreatorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    salt?: boolean
    userRoleId?: boolean
    positionId?: boolean
    isActive?: boolean
    profileImage?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRole?: boolean | RoleDefaultArgs<ExtArgs>
    Position?: boolean | User$PositionArgs<ExtArgs>
    Creator?: boolean | User$CreatorArgs<ExtArgs>
    CreatedUsers?: boolean | User$CreatedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRole?: boolean | RoleDefaultArgs<ExtArgs>
    Position?: boolean | User$PositionArgs<ExtArgs>
    Creator?: boolean | User$CreatorArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userRole: Prisma.$RolePayload<ExtArgs>
      Position: Prisma.$PositionPayload<ExtArgs> | null
      Creator: Prisma.$UserPayload<ExtArgs> | null
      CreatedUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      username: string
      email: string
      phone: string | null
      passwordHash: string
      salt: string
      userRoleId: number
      positionId: number | null
      isActive: boolean
      profileImage: string | null
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
      createdBy: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRole<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Position<T extends User$PositionArgs<ExtArgs> = {}>(args?: Subset<T, User$PositionArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Creator<T extends User$CreatorArgs<ExtArgs> = {}>(args?: Subset<T, User$CreatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    CreatedUsers<T extends User$CreatedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$CreatedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly userRoleId: FieldRef<"User", 'Int'>
    readonly positionId: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly createdBy: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Position
   */
  export type User$PositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    where?: PositionWhereInput
  }

  /**
   * User.Creator
   */
  export type User$CreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.CreatedUsers
   */
  export type User$CreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MineScalarFieldEnum: {
    mineId: 'mineId',
    mineName: 'mineName',
    locationLatitude: 'locationLatitude',
    locationLongitude: 'locationLongitude',
    address: 'address',
    ownerId: 'ownerId',
    mineType: 'mineType',
    productionCapacity: 'productionCapacity',
    operationalStatus: 'operationalStatus',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type MineScalarFieldEnum = (typeof MineScalarFieldEnum)[keyof typeof MineScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    ownerId: 'ownerId',
    ownerName: 'ownerName',
    contactName: 'contactName',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const LargeSectionScalarFieldEnum: {
    sectionId: 'sectionId',
    name: 'name',
    description: 'description',
    area: 'area',
    typeId: 'typeId',
    insiderToId: 'insiderToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LargeSectionScalarFieldEnum = (typeof LargeSectionScalarFieldEnum)[keyof typeof LargeSectionScalarFieldEnum]


  export const MediumSectionScalarFieldEnum: {
    sectionId: 'sectionId',
    name: 'name',
    description: 'description',
    area: 'area',
    typeId: 'typeId',
    insiderToId: 'insiderToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediumSectionScalarFieldEnum = (typeof MediumSectionScalarFieldEnum)[keyof typeof MediumSectionScalarFieldEnum]


  export const SmallSectionScalarFieldEnum: {
    sectionId: 'sectionId',
    name: 'name',
    description: 'description',
    area: 'area',
    typeId: 'typeId',
    insiderToId: 'insiderToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SmallSectionScalarFieldEnum = (typeof SmallSectionScalarFieldEnum)[keyof typeof SmallSectionScalarFieldEnum]


  export const MicroSectionScalarFieldEnum: {
    sectionId: 'sectionId',
    name: 'name',
    description: 'description',
    area: 'area',
    typeId: 'typeId',
    insiderToId: 'insiderToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MicroSectionScalarFieldEnum = (typeof MicroSectionScalarFieldEnum)[keyof typeof MicroSectionScalarFieldEnum]


  export const UnitSectionScalarFieldEnum: {
    unitId: 'unitId',
    name: 'name',
    description: 'description',
    model: 'model',
    typeId: 'typeId',
    insiderToId: 'insiderToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitSectionScalarFieldEnum = (typeof UnitSectionScalarFieldEnum)[keyof typeof UnitSectionScalarFieldEnum]


  export const SectionTypeScalarFieldEnum: {
    typeId: 'typeId',
    scaleLevel: 'scaleLevel',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectionTypeScalarFieldEnum = (typeof SectionTypeScalarFieldEnum)[keyof typeof SectionTypeScalarFieldEnum]


  export const SectionItemScalarFieldEnum: {
    itemId: 'itemId',
    typeId: 'typeId',
    itemName: 'itemName'
  };

  export type SectionItemScalarFieldEnum = (typeof SectionItemScalarFieldEnum)[keyof typeof SectionItemScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    positionId: 'positionId',
    positionName: 'positionName',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    responsibilities: 'responsibilities'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    roleId: 'roleId',
    roleName: 'roleName',
    description: 'description',
    permissions: 'permissions',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    permissionId: 'permissionId',
    name: 'name',
    category: 'category',
    description: 'description',
    isActive: 'isActive'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    salt: 'salt',
    userRoleId: 'userRoleId',
    positionId: 'positionId',
    isActive: 'isActive',
    profileImage: 'profileImage',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MineWhereInput = {
    AND?: MineWhereInput | MineWhereInput[]
    OR?: MineWhereInput[]
    NOT?: MineWhereInput | MineWhereInput[]
    mineId?: IntFilter<"Mine"> | number
    mineName?: StringFilter<"Mine"> | string
    locationLatitude?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Mine"> | string
    ownerId?: IntFilter<"Mine"> | number
    mineType?: StringFilter<"Mine"> | string
    productionCapacity?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFilter<"Mine"> | string
    startDate?: DateTimeFilter<"Mine"> | Date | string
    endDate?: DateTimeNullableFilter<"Mine"> | Date | string | null
    owner?: XOR<OwnerRelationFilter, OwnerWhereInput>
    largeSections?: LargeSectionListRelationFilter
  }

  export type MineOrderByWithRelationInput = {
    mineId?: SortOrder
    mineName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    address?: SortOrder
    ownerId?: SortOrder
    mineType?: SortOrder
    productionCapacity?: SortOrder
    operationalStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    owner?: OwnerOrderByWithRelationInput
    largeSections?: LargeSectionOrderByRelationAggregateInput
  }

  export type MineWhereUniqueInput = Prisma.AtLeast<{
    mineId?: number
    AND?: MineWhereInput | MineWhereInput[]
    OR?: MineWhereInput[]
    NOT?: MineWhereInput | MineWhereInput[]
    mineName?: StringFilter<"Mine"> | string
    locationLatitude?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Mine"> | string
    ownerId?: IntFilter<"Mine"> | number
    mineType?: StringFilter<"Mine"> | string
    productionCapacity?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFilter<"Mine"> | string
    startDate?: DateTimeFilter<"Mine"> | Date | string
    endDate?: DateTimeNullableFilter<"Mine"> | Date | string | null
    owner?: XOR<OwnerRelationFilter, OwnerWhereInput>
    largeSections?: LargeSectionListRelationFilter
  }, "mineId">

  export type MineOrderByWithAggregationInput = {
    mineId?: SortOrder
    mineName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    address?: SortOrder
    ownerId?: SortOrder
    mineType?: SortOrder
    productionCapacity?: SortOrder
    operationalStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    _count?: MineCountOrderByAggregateInput
    _avg?: MineAvgOrderByAggregateInput
    _max?: MineMaxOrderByAggregateInput
    _min?: MineMinOrderByAggregateInput
    _sum?: MineSumOrderByAggregateInput
  }

  export type MineScalarWhereWithAggregatesInput = {
    AND?: MineScalarWhereWithAggregatesInput | MineScalarWhereWithAggregatesInput[]
    OR?: MineScalarWhereWithAggregatesInput[]
    NOT?: MineScalarWhereWithAggregatesInput | MineScalarWhereWithAggregatesInput[]
    mineId?: IntWithAggregatesFilter<"Mine"> | number
    mineName?: StringWithAggregatesFilter<"Mine"> | string
    locationLatitude?: DecimalWithAggregatesFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalWithAggregatesFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    address?: StringWithAggregatesFilter<"Mine"> | string
    ownerId?: IntWithAggregatesFilter<"Mine"> | number
    mineType?: StringWithAggregatesFilter<"Mine"> | string
    productionCapacity?: DecimalWithAggregatesFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringWithAggregatesFilter<"Mine"> | string
    startDate?: DateTimeWithAggregatesFilter<"Mine"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Mine"> | Date | string | null
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    ownerId?: IntFilter<"Owner"> | number
    ownerName?: StringFilter<"Owner"> | string
    contactName?: StringFilter<"Owner"> | string
    contactEmail?: StringFilter<"Owner"> | string
    contactPhone?: StringFilter<"Owner"> | string
    mines?: MineListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    ownerId?: SortOrder
    ownerName?: SortOrder
    contactName?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    mines?: MineOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    ownerId?: number
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    ownerName?: StringFilter<"Owner"> | string
    contactName?: StringFilter<"Owner"> | string
    contactEmail?: StringFilter<"Owner"> | string
    contactPhone?: StringFilter<"Owner"> | string
    mines?: MineListRelationFilter
  }, "ownerId">

  export type OwnerOrderByWithAggregationInput = {
    ownerId?: SortOrder
    ownerName?: SortOrder
    contactName?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _avg?: OwnerAvgOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
    _sum?: OwnerSumOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    ownerId?: IntWithAggregatesFilter<"Owner"> | number
    ownerName?: StringWithAggregatesFilter<"Owner"> | string
    contactName?: StringWithAggregatesFilter<"Owner"> | string
    contactEmail?: StringWithAggregatesFilter<"Owner"> | string
    contactPhone?: StringWithAggregatesFilter<"Owner"> | string
  }

  export type LargeSectionWhereInput = {
    AND?: LargeSectionWhereInput | LargeSectionWhereInput[]
    OR?: LargeSectionWhereInput[]
    NOT?: LargeSectionWhereInput | LargeSectionWhereInput[]
    sectionId?: IntFilter<"LargeSection"> | number
    name?: StringFilter<"LargeSection"> | string
    description?: StringNullableFilter<"LargeSection"> | string | null
    area?: DecimalNullableFilter<"LargeSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"LargeSection"> | number | null
    insiderToId?: IntNullableFilter<"LargeSection"> | number | null
    createdAt?: DateTimeFilter<"LargeSection"> | Date | string
    updatedAt?: DateTimeFilter<"LargeSection"> | Date | string
    mine?: XOR<MineNullableRelationFilter, MineWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
    mediumSections?: MediumSectionListRelationFilter
  }

  export type LargeSectionOrderByWithRelationInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mine?: MineOrderByWithRelationInput
    sectionType?: SectionTypeOrderByWithRelationInput
    mediumSections?: MediumSectionOrderByRelationAggregateInput
  }

  export type LargeSectionWhereUniqueInput = Prisma.AtLeast<{
    sectionId?: number
    AND?: LargeSectionWhereInput | LargeSectionWhereInput[]
    OR?: LargeSectionWhereInput[]
    NOT?: LargeSectionWhereInput | LargeSectionWhereInput[]
    name?: StringFilter<"LargeSection"> | string
    description?: StringNullableFilter<"LargeSection"> | string | null
    area?: DecimalNullableFilter<"LargeSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"LargeSection"> | number | null
    insiderToId?: IntNullableFilter<"LargeSection"> | number | null
    createdAt?: DateTimeFilter<"LargeSection"> | Date | string
    updatedAt?: DateTimeFilter<"LargeSection"> | Date | string
    mine?: XOR<MineNullableRelationFilter, MineWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
    mediumSections?: MediumSectionListRelationFilter
  }, "sectionId">

  export type LargeSectionOrderByWithAggregationInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LargeSectionCountOrderByAggregateInput
    _avg?: LargeSectionAvgOrderByAggregateInput
    _max?: LargeSectionMaxOrderByAggregateInput
    _min?: LargeSectionMinOrderByAggregateInput
    _sum?: LargeSectionSumOrderByAggregateInput
  }

  export type LargeSectionScalarWhereWithAggregatesInput = {
    AND?: LargeSectionScalarWhereWithAggregatesInput | LargeSectionScalarWhereWithAggregatesInput[]
    OR?: LargeSectionScalarWhereWithAggregatesInput[]
    NOT?: LargeSectionScalarWhereWithAggregatesInput | LargeSectionScalarWhereWithAggregatesInput[]
    sectionId?: IntWithAggregatesFilter<"LargeSection"> | number
    name?: StringWithAggregatesFilter<"LargeSection"> | string
    description?: StringNullableWithAggregatesFilter<"LargeSection"> | string | null
    area?: DecimalNullableWithAggregatesFilter<"LargeSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableWithAggregatesFilter<"LargeSection"> | number | null
    insiderToId?: IntNullableWithAggregatesFilter<"LargeSection"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LargeSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LargeSection"> | Date | string
  }

  export type MediumSectionWhereInput = {
    AND?: MediumSectionWhereInput | MediumSectionWhereInput[]
    OR?: MediumSectionWhereInput[]
    NOT?: MediumSectionWhereInput | MediumSectionWhereInput[]
    sectionId?: IntFilter<"MediumSection"> | number
    name?: StringFilter<"MediumSection"> | string
    description?: StringNullableFilter<"MediumSection"> | string | null
    area?: DecimalNullableFilter<"MediumSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"MediumSection"> | number | null
    insiderToId?: IntNullableFilter<"MediumSection"> | number | null
    createdAt?: DateTimeFilter<"MediumSection"> | Date | string
    updatedAt?: DateTimeFilter<"MediumSection"> | Date | string
    largeSection?: XOR<LargeSectionNullableRelationFilter, LargeSectionWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
    smallSections?: SmallSectionListRelationFilter
  }

  export type MediumSectionOrderByWithRelationInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    largeSection?: LargeSectionOrderByWithRelationInput
    sectionType?: SectionTypeOrderByWithRelationInput
    smallSections?: SmallSectionOrderByRelationAggregateInput
  }

  export type MediumSectionWhereUniqueInput = Prisma.AtLeast<{
    sectionId?: number
    AND?: MediumSectionWhereInput | MediumSectionWhereInput[]
    OR?: MediumSectionWhereInput[]
    NOT?: MediumSectionWhereInput | MediumSectionWhereInput[]
    name?: StringFilter<"MediumSection"> | string
    description?: StringNullableFilter<"MediumSection"> | string | null
    area?: DecimalNullableFilter<"MediumSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"MediumSection"> | number | null
    insiderToId?: IntNullableFilter<"MediumSection"> | number | null
    createdAt?: DateTimeFilter<"MediumSection"> | Date | string
    updatedAt?: DateTimeFilter<"MediumSection"> | Date | string
    largeSection?: XOR<LargeSectionNullableRelationFilter, LargeSectionWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
    smallSections?: SmallSectionListRelationFilter
  }, "sectionId">

  export type MediumSectionOrderByWithAggregationInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediumSectionCountOrderByAggregateInput
    _avg?: MediumSectionAvgOrderByAggregateInput
    _max?: MediumSectionMaxOrderByAggregateInput
    _min?: MediumSectionMinOrderByAggregateInput
    _sum?: MediumSectionSumOrderByAggregateInput
  }

  export type MediumSectionScalarWhereWithAggregatesInput = {
    AND?: MediumSectionScalarWhereWithAggregatesInput | MediumSectionScalarWhereWithAggregatesInput[]
    OR?: MediumSectionScalarWhereWithAggregatesInput[]
    NOT?: MediumSectionScalarWhereWithAggregatesInput | MediumSectionScalarWhereWithAggregatesInput[]
    sectionId?: IntWithAggregatesFilter<"MediumSection"> | number
    name?: StringWithAggregatesFilter<"MediumSection"> | string
    description?: StringNullableWithAggregatesFilter<"MediumSection"> | string | null
    area?: DecimalNullableWithAggregatesFilter<"MediumSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableWithAggregatesFilter<"MediumSection"> | number | null
    insiderToId?: IntNullableWithAggregatesFilter<"MediumSection"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MediumSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediumSection"> | Date | string
  }

  export type SmallSectionWhereInput = {
    AND?: SmallSectionWhereInput | SmallSectionWhereInput[]
    OR?: SmallSectionWhereInput[]
    NOT?: SmallSectionWhereInput | SmallSectionWhereInput[]
    sectionId?: IntFilter<"SmallSection"> | number
    name?: StringFilter<"SmallSection"> | string
    description?: StringNullableFilter<"SmallSection"> | string | null
    area?: DecimalNullableFilter<"SmallSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"SmallSection"> | number | null
    insiderToId?: IntNullableFilter<"SmallSection"> | number | null
    createdAt?: DateTimeFilter<"SmallSection"> | Date | string
    updatedAt?: DateTimeFilter<"SmallSection"> | Date | string
    mediumSection?: XOR<MediumSectionNullableRelationFilter, MediumSectionWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
    microSections?: MicroSectionListRelationFilter
  }

  export type SmallSectionOrderByWithRelationInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediumSection?: MediumSectionOrderByWithRelationInput
    sectionType?: SectionTypeOrderByWithRelationInput
    microSections?: MicroSectionOrderByRelationAggregateInput
  }

  export type SmallSectionWhereUniqueInput = Prisma.AtLeast<{
    sectionId?: number
    AND?: SmallSectionWhereInput | SmallSectionWhereInput[]
    OR?: SmallSectionWhereInput[]
    NOT?: SmallSectionWhereInput | SmallSectionWhereInput[]
    name?: StringFilter<"SmallSection"> | string
    description?: StringNullableFilter<"SmallSection"> | string | null
    area?: DecimalNullableFilter<"SmallSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"SmallSection"> | number | null
    insiderToId?: IntNullableFilter<"SmallSection"> | number | null
    createdAt?: DateTimeFilter<"SmallSection"> | Date | string
    updatedAt?: DateTimeFilter<"SmallSection"> | Date | string
    mediumSection?: XOR<MediumSectionNullableRelationFilter, MediumSectionWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
    microSections?: MicroSectionListRelationFilter
  }, "sectionId">

  export type SmallSectionOrderByWithAggregationInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SmallSectionCountOrderByAggregateInput
    _avg?: SmallSectionAvgOrderByAggregateInput
    _max?: SmallSectionMaxOrderByAggregateInput
    _min?: SmallSectionMinOrderByAggregateInput
    _sum?: SmallSectionSumOrderByAggregateInput
  }

  export type SmallSectionScalarWhereWithAggregatesInput = {
    AND?: SmallSectionScalarWhereWithAggregatesInput | SmallSectionScalarWhereWithAggregatesInput[]
    OR?: SmallSectionScalarWhereWithAggregatesInput[]
    NOT?: SmallSectionScalarWhereWithAggregatesInput | SmallSectionScalarWhereWithAggregatesInput[]
    sectionId?: IntWithAggregatesFilter<"SmallSection"> | number
    name?: StringWithAggregatesFilter<"SmallSection"> | string
    description?: StringNullableWithAggregatesFilter<"SmallSection"> | string | null
    area?: DecimalNullableWithAggregatesFilter<"SmallSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableWithAggregatesFilter<"SmallSection"> | number | null
    insiderToId?: IntNullableWithAggregatesFilter<"SmallSection"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SmallSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SmallSection"> | Date | string
  }

  export type MicroSectionWhereInput = {
    AND?: MicroSectionWhereInput | MicroSectionWhereInput[]
    OR?: MicroSectionWhereInput[]
    NOT?: MicroSectionWhereInput | MicroSectionWhereInput[]
    sectionId?: IntFilter<"MicroSection"> | number
    name?: StringFilter<"MicroSection"> | string
    description?: StringNullableFilter<"MicroSection"> | string | null
    area?: DecimalNullableFilter<"MicroSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"MicroSection"> | number | null
    insiderToId?: IntNullableFilter<"MicroSection"> | number | null
    createdAt?: DateTimeFilter<"MicroSection"> | Date | string
    updatedAt?: DateTimeFilter<"MicroSection"> | Date | string
    smallSection?: XOR<SmallSectionNullableRelationFilter, SmallSectionWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
    unitSections?: UnitSectionListRelationFilter
  }

  export type MicroSectionOrderByWithRelationInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    smallSection?: SmallSectionOrderByWithRelationInput
    sectionType?: SectionTypeOrderByWithRelationInput
    unitSections?: UnitSectionOrderByRelationAggregateInput
  }

  export type MicroSectionWhereUniqueInput = Prisma.AtLeast<{
    sectionId?: number
    AND?: MicroSectionWhereInput | MicroSectionWhereInput[]
    OR?: MicroSectionWhereInput[]
    NOT?: MicroSectionWhereInput | MicroSectionWhereInput[]
    name?: StringFilter<"MicroSection"> | string
    description?: StringNullableFilter<"MicroSection"> | string | null
    area?: DecimalNullableFilter<"MicroSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"MicroSection"> | number | null
    insiderToId?: IntNullableFilter<"MicroSection"> | number | null
    createdAt?: DateTimeFilter<"MicroSection"> | Date | string
    updatedAt?: DateTimeFilter<"MicroSection"> | Date | string
    smallSection?: XOR<SmallSectionNullableRelationFilter, SmallSectionWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
    unitSections?: UnitSectionListRelationFilter
  }, "sectionId">

  export type MicroSectionOrderByWithAggregationInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MicroSectionCountOrderByAggregateInput
    _avg?: MicroSectionAvgOrderByAggregateInput
    _max?: MicroSectionMaxOrderByAggregateInput
    _min?: MicroSectionMinOrderByAggregateInput
    _sum?: MicroSectionSumOrderByAggregateInput
  }

  export type MicroSectionScalarWhereWithAggregatesInput = {
    AND?: MicroSectionScalarWhereWithAggregatesInput | MicroSectionScalarWhereWithAggregatesInput[]
    OR?: MicroSectionScalarWhereWithAggregatesInput[]
    NOT?: MicroSectionScalarWhereWithAggregatesInput | MicroSectionScalarWhereWithAggregatesInput[]
    sectionId?: IntWithAggregatesFilter<"MicroSection"> | number
    name?: StringWithAggregatesFilter<"MicroSection"> | string
    description?: StringNullableWithAggregatesFilter<"MicroSection"> | string | null
    area?: DecimalNullableWithAggregatesFilter<"MicroSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableWithAggregatesFilter<"MicroSection"> | number | null
    insiderToId?: IntNullableWithAggregatesFilter<"MicroSection"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MicroSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MicroSection"> | Date | string
  }

  export type UnitSectionWhereInput = {
    AND?: UnitSectionWhereInput | UnitSectionWhereInput[]
    OR?: UnitSectionWhereInput[]
    NOT?: UnitSectionWhereInput | UnitSectionWhereInput[]
    unitId?: IntFilter<"UnitSection"> | number
    name?: StringFilter<"UnitSection"> | string
    description?: StringNullableFilter<"UnitSection"> | string | null
    model?: StringNullableFilter<"UnitSection"> | string | null
    typeId?: IntNullableFilter<"UnitSection"> | number | null
    insiderToId?: IntNullableFilter<"UnitSection"> | number | null
    createdAt?: DateTimeFilter<"UnitSection"> | Date | string
    updatedAt?: DateTimeFilter<"UnitSection"> | Date | string
    microSection?: XOR<MicroSectionNullableRelationFilter, MicroSectionWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
  }

  export type UnitSectionOrderByWithRelationInput = {
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    microSection?: MicroSectionOrderByWithRelationInput
    sectionType?: SectionTypeOrderByWithRelationInput
  }

  export type UnitSectionWhereUniqueInput = Prisma.AtLeast<{
    unitId?: number
    AND?: UnitSectionWhereInput | UnitSectionWhereInput[]
    OR?: UnitSectionWhereInput[]
    NOT?: UnitSectionWhereInput | UnitSectionWhereInput[]
    name?: StringFilter<"UnitSection"> | string
    description?: StringNullableFilter<"UnitSection"> | string | null
    model?: StringNullableFilter<"UnitSection"> | string | null
    typeId?: IntNullableFilter<"UnitSection"> | number | null
    insiderToId?: IntNullableFilter<"UnitSection"> | number | null
    createdAt?: DateTimeFilter<"UnitSection"> | Date | string
    updatedAt?: DateTimeFilter<"UnitSection"> | Date | string
    microSection?: XOR<MicroSectionNullableRelationFilter, MicroSectionWhereInput> | null
    sectionType?: XOR<SectionTypeNullableRelationFilter, SectionTypeWhereInput> | null
  }, "unitId">

  export type UnitSectionOrderByWithAggregationInput = {
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    typeId?: SortOrderInput | SortOrder
    insiderToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitSectionCountOrderByAggregateInput
    _avg?: UnitSectionAvgOrderByAggregateInput
    _max?: UnitSectionMaxOrderByAggregateInput
    _min?: UnitSectionMinOrderByAggregateInput
    _sum?: UnitSectionSumOrderByAggregateInput
  }

  export type UnitSectionScalarWhereWithAggregatesInput = {
    AND?: UnitSectionScalarWhereWithAggregatesInput | UnitSectionScalarWhereWithAggregatesInput[]
    OR?: UnitSectionScalarWhereWithAggregatesInput[]
    NOT?: UnitSectionScalarWhereWithAggregatesInput | UnitSectionScalarWhereWithAggregatesInput[]
    unitId?: IntWithAggregatesFilter<"UnitSection"> | number
    name?: StringWithAggregatesFilter<"UnitSection"> | string
    description?: StringNullableWithAggregatesFilter<"UnitSection"> | string | null
    model?: StringNullableWithAggregatesFilter<"UnitSection"> | string | null
    typeId?: IntNullableWithAggregatesFilter<"UnitSection"> | number | null
    insiderToId?: IntNullableWithAggregatesFilter<"UnitSection"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UnitSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UnitSection"> | Date | string
  }

  export type SectionTypeWhereInput = {
    AND?: SectionTypeWhereInput | SectionTypeWhereInput[]
    OR?: SectionTypeWhereInput[]
    NOT?: SectionTypeWhereInput | SectionTypeWhereInput[]
    typeId?: IntFilter<"SectionType"> | number
    scaleLevel?: IntFilter<"SectionType"> | number
    name?: StringFilter<"SectionType"> | string
    description?: StringNullableFilter<"SectionType"> | string | null
    createdAt?: DateTimeFilter<"SectionType"> | Date | string
    updatedAt?: DateTimeFilter<"SectionType"> | Date | string
    largeSections?: LargeSectionListRelationFilter
    mediumSections?: MediumSectionListRelationFilter
    smallSections?: SmallSectionListRelationFilter
    microSections?: MicroSectionListRelationFilter
    unitSections?: UnitSectionListRelationFilter
    sectionItems?: SectionItemListRelationFilter
  }

  export type SectionTypeOrderByWithRelationInput = {
    typeId?: SortOrder
    scaleLevel?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    largeSections?: LargeSectionOrderByRelationAggregateInput
    mediumSections?: MediumSectionOrderByRelationAggregateInput
    smallSections?: SmallSectionOrderByRelationAggregateInput
    microSections?: MicroSectionOrderByRelationAggregateInput
    unitSections?: UnitSectionOrderByRelationAggregateInput
    sectionItems?: SectionItemOrderByRelationAggregateInput
  }

  export type SectionTypeWhereUniqueInput = Prisma.AtLeast<{
    typeId?: number
    scaleLevel_name?: SectionTypeScaleLevelNameCompoundUniqueInput
    AND?: SectionTypeWhereInput | SectionTypeWhereInput[]
    OR?: SectionTypeWhereInput[]
    NOT?: SectionTypeWhereInput | SectionTypeWhereInput[]
    scaleLevel?: IntFilter<"SectionType"> | number
    name?: StringFilter<"SectionType"> | string
    description?: StringNullableFilter<"SectionType"> | string | null
    createdAt?: DateTimeFilter<"SectionType"> | Date | string
    updatedAt?: DateTimeFilter<"SectionType"> | Date | string
    largeSections?: LargeSectionListRelationFilter
    mediumSections?: MediumSectionListRelationFilter
    smallSections?: SmallSectionListRelationFilter
    microSections?: MicroSectionListRelationFilter
    unitSections?: UnitSectionListRelationFilter
    sectionItems?: SectionItemListRelationFilter
  }, "typeId" | "scaleLevel_name">

  export type SectionTypeOrderByWithAggregationInput = {
    typeId?: SortOrder
    scaleLevel?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionTypeCountOrderByAggregateInput
    _avg?: SectionTypeAvgOrderByAggregateInput
    _max?: SectionTypeMaxOrderByAggregateInput
    _min?: SectionTypeMinOrderByAggregateInput
    _sum?: SectionTypeSumOrderByAggregateInput
  }

  export type SectionTypeScalarWhereWithAggregatesInput = {
    AND?: SectionTypeScalarWhereWithAggregatesInput | SectionTypeScalarWhereWithAggregatesInput[]
    OR?: SectionTypeScalarWhereWithAggregatesInput[]
    NOT?: SectionTypeScalarWhereWithAggregatesInput | SectionTypeScalarWhereWithAggregatesInput[]
    typeId?: IntWithAggregatesFilter<"SectionType"> | number
    scaleLevel?: IntWithAggregatesFilter<"SectionType"> | number
    name?: StringWithAggregatesFilter<"SectionType"> | string
    description?: StringNullableWithAggregatesFilter<"SectionType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SectionType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SectionType"> | Date | string
  }

  export type SectionItemWhereInput = {
    AND?: SectionItemWhereInput | SectionItemWhereInput[]
    OR?: SectionItemWhereInput[]
    NOT?: SectionItemWhereInput | SectionItemWhereInput[]
    itemId?: IntFilter<"SectionItem"> | number
    typeId?: IntFilter<"SectionItem"> | number
    itemName?: StringFilter<"SectionItem"> | string
    sectionType?: XOR<SectionTypeRelationFilter, SectionTypeWhereInput>
  }

  export type SectionItemOrderByWithRelationInput = {
    itemId?: SortOrder
    typeId?: SortOrder
    itemName?: SortOrder
    sectionType?: SectionTypeOrderByWithRelationInput
  }

  export type SectionItemWhereUniqueInput = Prisma.AtLeast<{
    itemId?: number
    AND?: SectionItemWhereInput | SectionItemWhereInput[]
    OR?: SectionItemWhereInput[]
    NOT?: SectionItemWhereInput | SectionItemWhereInput[]
    typeId?: IntFilter<"SectionItem"> | number
    itemName?: StringFilter<"SectionItem"> | string
    sectionType?: XOR<SectionTypeRelationFilter, SectionTypeWhereInput>
  }, "itemId">

  export type SectionItemOrderByWithAggregationInput = {
    itemId?: SortOrder
    typeId?: SortOrder
    itemName?: SortOrder
    _count?: SectionItemCountOrderByAggregateInput
    _avg?: SectionItemAvgOrderByAggregateInput
    _max?: SectionItemMaxOrderByAggregateInput
    _min?: SectionItemMinOrderByAggregateInput
    _sum?: SectionItemSumOrderByAggregateInput
  }

  export type SectionItemScalarWhereWithAggregatesInput = {
    AND?: SectionItemScalarWhereWithAggregatesInput | SectionItemScalarWhereWithAggregatesInput[]
    OR?: SectionItemScalarWhereWithAggregatesInput[]
    NOT?: SectionItemScalarWhereWithAggregatesInput | SectionItemScalarWhereWithAggregatesInput[]
    itemId?: IntWithAggregatesFilter<"SectionItem"> | number
    typeId?: IntWithAggregatesFilter<"SectionItem"> | number
    itemName?: StringWithAggregatesFilter<"SectionItem"> | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    positionId?: IntFilter<"Position"> | number
    positionName?: StringFilter<"Position"> | string
    description?: StringFilter<"Position"> | string
    isActive?: BoolFilter<"Position"> | boolean
    createdAt?: DateTimeFilter<"Position"> | Date | string
    updatedAt?: DateTimeFilter<"Position"> | Date | string
    responsibilities?: JsonFilter<"Position">
    Users?: UserListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responsibilities?: SortOrder
    Users?: UserOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    positionId?: number
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    positionName?: StringFilter<"Position"> | string
    description?: StringFilter<"Position"> | string
    isActive?: BoolFilter<"Position"> | boolean
    createdAt?: DateTimeFilter<"Position"> | Date | string
    updatedAt?: DateTimeFilter<"Position"> | Date | string
    responsibilities?: JsonFilter<"Position">
    Users?: UserListRelationFilter
  }, "positionId">

  export type PositionOrderByWithAggregationInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responsibilities?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    positionId?: IntWithAggregatesFilter<"Position"> | number
    positionName?: StringWithAggregatesFilter<"Position"> | string
    description?: StringWithAggregatesFilter<"Position"> | string
    isActive?: BoolWithAggregatesFilter<"Position"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Position"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Position"> | Date | string
    responsibilities?: JsonWithAggregatesFilter<"Position">
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleId?: IntFilter<"Role"> | number
    roleName?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: JsonFilter<"Role">
    isActive?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    Users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: number
    roleName?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: JsonFilter<"Role">
    isActive?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    Users?: UserListRelationFilter
  }, "roleId" | "roleName">

  export type RoleOrderByWithAggregationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"Role"> | number
    roleName?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    permissions?: JsonWithAggregatesFilter<"Role">
    isActive?: BoolWithAggregatesFilter<"Role"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    permissionId?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
    category?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    isActive?: BoolFilter<"Permission"> | boolean
  }

  export type PermissionOrderByWithRelationInput = {
    permissionId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    permissionId?: number
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    category?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    isActive?: BoolFilter<"Permission"> | boolean
  }, "permissionId" | "name">

  export type PermissionOrderByWithAggregationInput = {
    permissionId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    permissionId?: IntWithAggregatesFilter<"Permission"> | number
    name?: StringWithAggregatesFilter<"Permission"> | string
    category?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    isActive?: BoolWithAggregatesFilter<"Permission"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    userRoleId?: IntFilter<"User"> | number
    positionId?: IntNullableFilter<"User"> | number | null
    isActive?: BoolFilter<"User"> | boolean
    profileImage?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: IntNullableFilter<"User"> | number | null
    userRole?: XOR<RoleRelationFilter, RoleWhereInput>
    Position?: XOR<PositionNullableRelationFilter, PositionWhereInput> | null
    Creator?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    CreatedUsers?: UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    userRoleId?: SortOrder
    positionId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    userRole?: RoleOrderByWithRelationInput
    Position?: PositionOrderByWithRelationInput
    Creator?: UserOrderByWithRelationInput
    CreatedUsers?: UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    userRoleId?: IntFilter<"User"> | number
    positionId?: IntNullableFilter<"User"> | number | null
    isActive?: BoolFilter<"User"> | boolean
    profileImage?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: IntNullableFilter<"User"> | number | null
    userRole?: XOR<RoleRelationFilter, RoleWhereInput>
    Position?: XOR<PositionNullableRelationFilter, PositionWhereInput> | null
    Creator?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    CreatedUsers?: UserListRelationFilter
  }, "userId" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    userRoleId?: SortOrder
    positionId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    userRoleId?: IntWithAggregatesFilter<"User"> | number
    positionId?: IntNullableWithAggregatesFilter<"User"> | number | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type MineCreateInput = {
    mineName: string
    locationLatitude: Decimal | DecimalJsLike | number | string
    locationLongitude: Decimal | DecimalJsLike | number | string
    address: string
    mineType: string
    productionCapacity: Decimal | DecimalJsLike | number | string
    operationalStatus: string
    startDate: Date | string
    endDate?: Date | string | null
    owner: OwnerCreateNestedOneWithoutMinesInput
    largeSections?: LargeSectionCreateNestedManyWithoutMineInput
  }

  export type MineUncheckedCreateInput = {
    mineId?: number
    mineName: string
    locationLatitude: Decimal | DecimalJsLike | number | string
    locationLongitude: Decimal | DecimalJsLike | number | string
    address: string
    ownerId: number
    mineType: string
    productionCapacity: Decimal | DecimalJsLike | number | string
    operationalStatus: string
    startDate: Date | string
    endDate?: Date | string | null
    largeSections?: LargeSectionUncheckedCreateNestedManyWithoutMineInput
  }

  export type MineUpdateInput = {
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: OwnerUpdateOneRequiredWithoutMinesNestedInput
    largeSections?: LargeSectionUpdateManyWithoutMineNestedInput
  }

  export type MineUncheckedUpdateInput = {
    mineId?: IntFieldUpdateOperationsInput | number
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    largeSections?: LargeSectionUncheckedUpdateManyWithoutMineNestedInput
  }

  export type MineCreateManyInput = {
    mineId?: number
    mineName: string
    locationLatitude: Decimal | DecimalJsLike | number | string
    locationLongitude: Decimal | DecimalJsLike | number | string
    address: string
    ownerId: number
    mineType: string
    productionCapacity: Decimal | DecimalJsLike | number | string
    operationalStatus: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type MineUpdateManyMutationInput = {
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MineUncheckedUpdateManyInput = {
    mineId?: IntFieldUpdateOperationsInput | number
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerCreateInput = {
    ownerName: string
    contactName: string
    contactEmail: string
    contactPhone: string
    mines?: MineCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    ownerId?: number
    ownerName: string
    contactName: string
    contactEmail: string
    contactPhone: string
    mines?: MineUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    mines?: MineUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    ownerName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    mines?: MineUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    ownerId?: number
    ownerName: string
    contactName: string
    contactEmail: string
    contactPhone: string
  }

  export type OwnerUpdateManyMutationInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateManyInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    ownerName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type LargeSectionCreateInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mine?: MineCreateNestedOneWithoutLargeSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutLargeSectionsInput
    mediumSections?: MediumSectionCreateNestedManyWithoutLargeSectionInput
  }

  export type LargeSectionUncheckedCreateInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutLargeSectionInput
  }

  export type LargeSectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mine?: MineUpdateOneWithoutLargeSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutLargeSectionsNestedInput
    mediumSections?: MediumSectionUpdateManyWithoutLargeSectionNestedInput
  }

  export type LargeSectionUncheckedUpdateInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutLargeSectionNestedInput
  }

  export type LargeSectionCreateManyInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LargeSectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LargeSectionUncheckedUpdateManyInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediumSectionCreateInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSection?: LargeSectionCreateNestedOneWithoutMediumSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutMediumSectionsInput
    smallSections?: SmallSectionCreateNestedManyWithoutMediumSectionInput
  }

  export type MediumSectionUncheckedCreateInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutMediumSectionInput
  }

  export type MediumSectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSection?: LargeSectionUpdateOneWithoutMediumSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutMediumSectionsNestedInput
    smallSections?: SmallSectionUpdateManyWithoutMediumSectionNestedInput
  }

  export type MediumSectionUncheckedUpdateInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smallSections?: SmallSectionUncheckedUpdateManyWithoutMediumSectionNestedInput
  }

  export type MediumSectionCreateManyInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediumSectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediumSectionUncheckedUpdateManyInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmallSectionCreateInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediumSection?: MediumSectionCreateNestedOneWithoutSmallSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutSmallSectionsInput
    microSections?: MicroSectionCreateNestedManyWithoutSmallSectionInput
  }

  export type SmallSectionUncheckedCreateInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSmallSectionInput
  }

  export type SmallSectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediumSection?: MediumSectionUpdateOneWithoutSmallSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutSmallSectionsNestedInput
    microSections?: MicroSectionUpdateManyWithoutSmallSectionNestedInput
  }

  export type SmallSectionUncheckedUpdateInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microSections?: MicroSectionUncheckedUpdateManyWithoutSmallSectionNestedInput
  }

  export type SmallSectionCreateManyInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmallSectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmallSectionUncheckedUpdateManyInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MicroSectionCreateInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    smallSection?: SmallSectionCreateNestedOneWithoutMicroSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutMicroSectionsInput
    unitSections?: UnitSectionCreateNestedManyWithoutMicroSectionInput
  }

  export type MicroSectionUncheckedCreateInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutMicroSectionInput
  }

  export type MicroSectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smallSection?: SmallSectionUpdateOneWithoutMicroSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutMicroSectionsNestedInput
    unitSections?: UnitSectionUpdateManyWithoutMicroSectionNestedInput
  }

  export type MicroSectionUncheckedUpdateInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitSections?: UnitSectionUncheckedUpdateManyWithoutMicroSectionNestedInput
  }

  export type MicroSectionCreateManyInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MicroSectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MicroSectionUncheckedUpdateManyInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitSectionCreateInput = {
    name: string
    description?: string | null
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    microSection?: MicroSectionCreateNestedOneWithoutUnitSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutUnitSectionsInput
  }

  export type UnitSectionUncheckedCreateInput = {
    unitId?: number
    name: string
    description?: string | null
    model?: string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitSectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microSection?: MicroSectionUpdateOneWithoutUnitSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutUnitSectionsNestedInput
  }

  export type UnitSectionUncheckedUpdateInput = {
    unitId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitSectionCreateManyInput = {
    unitId?: number
    name: string
    description?: string | null
    model?: string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitSectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitSectionUncheckedUpdateManyInput = {
    unitId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionTypeCreateInput = {
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeUncheckedCreateInput = {
    typeId?: number
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemUncheckedCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeUpdateInput = {
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUpdateManyWithoutSectionTypeNestedInput
  }

  export type SectionTypeUncheckedUpdateInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUncheckedUpdateManyWithoutSectionTypeNestedInput
  }

  export type SectionTypeCreateManyInput = {
    typeId?: number
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionTypeUpdateManyMutationInput = {
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionTypeUncheckedUpdateManyInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionItemCreateInput = {
    itemName: string
    sectionType: SectionTypeCreateNestedOneWithoutSectionItemsInput
  }

  export type SectionItemUncheckedCreateInput = {
    itemId?: number
    typeId: number
    itemName: string
  }

  export type SectionItemUpdateInput = {
    itemName?: StringFieldUpdateOperationsInput | string
    sectionType?: SectionTypeUpdateOneRequiredWithoutSectionItemsNestedInput
  }

  export type SectionItemUncheckedUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
  }

  export type SectionItemCreateManyInput = {
    itemId?: number
    typeId: number
    itemName: string
  }

  export type SectionItemUpdateManyMutationInput = {
    itemName?: StringFieldUpdateOperationsInput | string
  }

  export type SectionItemUncheckedUpdateManyInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
  }

  export type PositionCreateInput = {
    positionName: string
    description: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responsibilities: JsonNullValueInput | InputJsonValue
    Users?: UserCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    positionId?: number
    positionName: string
    description: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responsibilities: JsonNullValueInput | InputJsonValue
    Users?: UserUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    positionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibilities?: JsonNullValueInput | InputJsonValue
    Users?: UserUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    positionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibilities?: JsonNullValueInput | InputJsonValue
    Users?: UserUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    positionId?: number
    positionName: string
    description: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responsibilities: JsonNullValueInput | InputJsonValue
  }

  export type PositionUpdateManyMutationInput = {
    positionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibilities?: JsonNullValueInput | InputJsonValue
  }

  export type PositionUncheckedUpdateManyInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    positionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibilities?: JsonNullValueInput | InputJsonValue
  }

  export type RoleCreateInput = {
    roleName: string
    description?: string | null
    permissions: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UserCreateNestedManyWithoutUserRoleInput
  }

  export type RoleUncheckedCreateInput = {
    roleId?: number
    roleName: string
    description?: string | null
    permissions: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UserUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type RoleUpdateInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUpdateManyWithoutUserRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UserUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type RoleCreateManyInput = {
    roleId?: number
    roleName: string
    description?: string | null
    permissions: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    name: string
    category: string
    description?: string | null
    isActive?: boolean
  }

  export type PermissionUncheckedCreateInput = {
    permissionId?: number
    name: string
    category: string
    description?: string | null
    isActive?: boolean
  }

  export type PermissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissionUncheckedUpdateInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissionCreateManyInput = {
    permissionId?: number
    name: string
    category: string
    description?: string | null
    isActive?: boolean
  }

  export type PermissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PermissionUncheckedUpdateManyInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: RoleCreateNestedOneWithoutUsersInput
    Position?: PositionCreateNestedOneWithoutUsersInput
    Creator?: UserCreateNestedOneWithoutCreatedUsersInput
    CreatedUsers?: UserCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    userRoleId: number
    positionId?: number | null
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
    CreatedUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: RoleUpdateOneRequiredWithoutUsersNestedInput
    Position?: PositionUpdateOneWithoutUsersNestedInput
    Creator?: UserUpdateOneWithoutCreatedUsersNestedInput
    CreatedUsers?: UserUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    positionId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    CreatedUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    userRoleId: number
    positionId?: number | null
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    positionId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OwnerRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type LargeSectionListRelationFilter = {
    every?: LargeSectionWhereInput
    some?: LargeSectionWhereInput
    none?: LargeSectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LargeSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MineCountOrderByAggregateInput = {
    mineId?: SortOrder
    mineName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    address?: SortOrder
    ownerId?: SortOrder
    mineType?: SortOrder
    productionCapacity?: SortOrder
    operationalStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type MineAvgOrderByAggregateInput = {
    mineId?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    ownerId?: SortOrder
    productionCapacity?: SortOrder
  }

  export type MineMaxOrderByAggregateInput = {
    mineId?: SortOrder
    mineName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    address?: SortOrder
    ownerId?: SortOrder
    mineType?: SortOrder
    productionCapacity?: SortOrder
    operationalStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type MineMinOrderByAggregateInput = {
    mineId?: SortOrder
    mineName?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    address?: SortOrder
    ownerId?: SortOrder
    mineType?: SortOrder
    productionCapacity?: SortOrder
    operationalStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type MineSumOrderByAggregateInput = {
    mineId?: SortOrder
    locationLatitude?: SortOrder
    locationLongitude?: SortOrder
    ownerId?: SortOrder
    productionCapacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MineListRelationFilter = {
    every?: MineWhereInput
    some?: MineWhereInput
    none?: MineWhereInput
  }

  export type MineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    ownerId?: SortOrder
    ownerName?: SortOrder
    contactName?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
  }

  export type OwnerAvgOrderByAggregateInput = {
    ownerId?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    ownerId?: SortOrder
    ownerName?: SortOrder
    contactName?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    ownerId?: SortOrder
    ownerName?: SortOrder
    contactName?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
  }

  export type OwnerSumOrderByAggregateInput = {
    ownerId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MineNullableRelationFilter = {
    is?: MineWhereInput | null
    isNot?: MineWhereInput | null
  }

  export type SectionTypeNullableRelationFilter = {
    is?: SectionTypeWhereInput | null
    isNot?: SectionTypeWhereInput | null
  }

  export type MediumSectionListRelationFilter = {
    every?: MediumSectionWhereInput
    some?: MediumSectionWhereInput
    none?: MediumSectionWhereInput
  }

  export type MediumSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LargeSectionCountOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LargeSectionAvgOrderByAggregateInput = {
    sectionId?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type LargeSectionMaxOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LargeSectionMinOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LargeSectionSumOrderByAggregateInput = {
    sectionId?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LargeSectionNullableRelationFilter = {
    is?: LargeSectionWhereInput | null
    isNot?: LargeSectionWhereInput | null
  }

  export type SmallSectionListRelationFilter = {
    every?: SmallSectionWhereInput
    some?: SmallSectionWhereInput
    none?: SmallSectionWhereInput
  }

  export type SmallSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediumSectionCountOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediumSectionAvgOrderByAggregateInput = {
    sectionId?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type MediumSectionMaxOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediumSectionMinOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediumSectionSumOrderByAggregateInput = {
    sectionId?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type MediumSectionNullableRelationFilter = {
    is?: MediumSectionWhereInput | null
    isNot?: MediumSectionWhereInput | null
  }

  export type MicroSectionListRelationFilter = {
    every?: MicroSectionWhereInput
    some?: MicroSectionWhereInput
    none?: MicroSectionWhereInput
  }

  export type MicroSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SmallSectionCountOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmallSectionAvgOrderByAggregateInput = {
    sectionId?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type SmallSectionMaxOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmallSectionMinOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmallSectionSumOrderByAggregateInput = {
    sectionId?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type SmallSectionNullableRelationFilter = {
    is?: SmallSectionWhereInput | null
    isNot?: SmallSectionWhereInput | null
  }

  export type UnitSectionListRelationFilter = {
    every?: UnitSectionWhereInput
    some?: UnitSectionWhereInput
    none?: UnitSectionWhereInput
  }

  export type UnitSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MicroSectionCountOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MicroSectionAvgOrderByAggregateInput = {
    sectionId?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type MicroSectionMaxOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MicroSectionMinOrderByAggregateInput = {
    sectionId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MicroSectionSumOrderByAggregateInput = {
    sectionId?: SortOrder
    area?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type MicroSectionNullableRelationFilter = {
    is?: MicroSectionWhereInput | null
    isNot?: MicroSectionWhereInput | null
  }

  export type UnitSectionCountOrderByAggregateInput = {
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    model?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSectionAvgOrderByAggregateInput = {
    unitId?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type UnitSectionMaxOrderByAggregateInput = {
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    model?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSectionMinOrderByAggregateInput = {
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    model?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSectionSumOrderByAggregateInput = {
    unitId?: SortOrder
    typeId?: SortOrder
    insiderToId?: SortOrder
  }

  export type SectionItemListRelationFilter = {
    every?: SectionItemWhereInput
    some?: SectionItemWhereInput
    none?: SectionItemWhereInput
  }

  export type SectionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionTypeScaleLevelNameCompoundUniqueInput = {
    scaleLevel: number
    name: string
  }

  export type SectionTypeCountOrderByAggregateInput = {
    typeId?: SortOrder
    scaleLevel?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionTypeAvgOrderByAggregateInput = {
    typeId?: SortOrder
    scaleLevel?: SortOrder
  }

  export type SectionTypeMaxOrderByAggregateInput = {
    typeId?: SortOrder
    scaleLevel?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionTypeMinOrderByAggregateInput = {
    typeId?: SortOrder
    scaleLevel?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionTypeSumOrderByAggregateInput = {
    typeId?: SortOrder
    scaleLevel?: SortOrder
  }

  export type SectionTypeRelationFilter = {
    is?: SectionTypeWhereInput
    isNot?: SectionTypeWhereInput
  }

  export type SectionItemCountOrderByAggregateInput = {
    itemId?: SortOrder
    typeId?: SortOrder
    itemName?: SortOrder
  }

  export type SectionItemAvgOrderByAggregateInput = {
    itemId?: SortOrder
    typeId?: SortOrder
  }

  export type SectionItemMaxOrderByAggregateInput = {
    itemId?: SortOrder
    typeId?: SortOrder
    itemName?: SortOrder
  }

  export type SectionItemMinOrderByAggregateInput = {
    itemId?: SortOrder
    typeId?: SortOrder
    itemName?: SortOrder
  }

  export type SectionItemSumOrderByAggregateInput = {
    itemId?: SortOrder
    typeId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PositionCountOrderByAggregateInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responsibilities?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    positionId?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    positionId?: SortOrder
    positionName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    positionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    description?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    permissionId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    permissionId?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    permissionId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    permissionId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    permissionId?: SortOrder
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type PositionNullableRelationFilter = {
    is?: PositionWhereInput | null
    isNot?: PositionWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    userRoleId?: SortOrder
    positionId?: SortOrder
    isActive?: SortOrder
    profileImage?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
    userRoleId?: SortOrder
    positionId?: SortOrder
    createdBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    userRoleId?: SortOrder
    positionId?: SortOrder
    isActive?: SortOrder
    profileImage?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    salt?: SortOrder
    userRoleId?: SortOrder
    positionId?: SortOrder
    isActive?: SortOrder
    profileImage?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
    userRoleId?: SortOrder
    positionId?: SortOrder
    createdBy?: SortOrder
  }

  export type OwnerCreateNestedOneWithoutMinesInput = {
    create?: XOR<OwnerCreateWithoutMinesInput, OwnerUncheckedCreateWithoutMinesInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutMinesInput
    connect?: OwnerWhereUniqueInput
  }

  export type LargeSectionCreateNestedManyWithoutMineInput = {
    create?: XOR<LargeSectionCreateWithoutMineInput, LargeSectionUncheckedCreateWithoutMineInput> | LargeSectionCreateWithoutMineInput[] | LargeSectionUncheckedCreateWithoutMineInput[]
    connectOrCreate?: LargeSectionCreateOrConnectWithoutMineInput | LargeSectionCreateOrConnectWithoutMineInput[]
    createMany?: LargeSectionCreateManyMineInputEnvelope
    connect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
  }

  export type LargeSectionUncheckedCreateNestedManyWithoutMineInput = {
    create?: XOR<LargeSectionCreateWithoutMineInput, LargeSectionUncheckedCreateWithoutMineInput> | LargeSectionCreateWithoutMineInput[] | LargeSectionUncheckedCreateWithoutMineInput[]
    connectOrCreate?: LargeSectionCreateOrConnectWithoutMineInput | LargeSectionCreateOrConnectWithoutMineInput[]
    createMany?: LargeSectionCreateManyMineInputEnvelope
    connect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OwnerUpdateOneRequiredWithoutMinesNestedInput = {
    create?: XOR<OwnerCreateWithoutMinesInput, OwnerUncheckedCreateWithoutMinesInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutMinesInput
    upsert?: OwnerUpsertWithoutMinesInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutMinesInput, OwnerUpdateWithoutMinesInput>, OwnerUncheckedUpdateWithoutMinesInput>
  }

  export type LargeSectionUpdateManyWithoutMineNestedInput = {
    create?: XOR<LargeSectionCreateWithoutMineInput, LargeSectionUncheckedCreateWithoutMineInput> | LargeSectionCreateWithoutMineInput[] | LargeSectionUncheckedCreateWithoutMineInput[]
    connectOrCreate?: LargeSectionCreateOrConnectWithoutMineInput | LargeSectionCreateOrConnectWithoutMineInput[]
    upsert?: LargeSectionUpsertWithWhereUniqueWithoutMineInput | LargeSectionUpsertWithWhereUniqueWithoutMineInput[]
    createMany?: LargeSectionCreateManyMineInputEnvelope
    set?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    disconnect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    delete?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    connect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    update?: LargeSectionUpdateWithWhereUniqueWithoutMineInput | LargeSectionUpdateWithWhereUniqueWithoutMineInput[]
    updateMany?: LargeSectionUpdateManyWithWhereWithoutMineInput | LargeSectionUpdateManyWithWhereWithoutMineInput[]
    deleteMany?: LargeSectionScalarWhereInput | LargeSectionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LargeSectionUncheckedUpdateManyWithoutMineNestedInput = {
    create?: XOR<LargeSectionCreateWithoutMineInput, LargeSectionUncheckedCreateWithoutMineInput> | LargeSectionCreateWithoutMineInput[] | LargeSectionUncheckedCreateWithoutMineInput[]
    connectOrCreate?: LargeSectionCreateOrConnectWithoutMineInput | LargeSectionCreateOrConnectWithoutMineInput[]
    upsert?: LargeSectionUpsertWithWhereUniqueWithoutMineInput | LargeSectionUpsertWithWhereUniqueWithoutMineInput[]
    createMany?: LargeSectionCreateManyMineInputEnvelope
    set?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    disconnect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    delete?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    connect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    update?: LargeSectionUpdateWithWhereUniqueWithoutMineInput | LargeSectionUpdateWithWhereUniqueWithoutMineInput[]
    updateMany?: LargeSectionUpdateManyWithWhereWithoutMineInput | LargeSectionUpdateManyWithWhereWithoutMineInput[]
    deleteMany?: LargeSectionScalarWhereInput | LargeSectionScalarWhereInput[]
  }

  export type MineCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MineCreateWithoutOwnerInput, MineUncheckedCreateWithoutOwnerInput> | MineCreateWithoutOwnerInput[] | MineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MineCreateOrConnectWithoutOwnerInput | MineCreateOrConnectWithoutOwnerInput[]
    createMany?: MineCreateManyOwnerInputEnvelope
    connect?: MineWhereUniqueInput | MineWhereUniqueInput[]
  }

  export type MineUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MineCreateWithoutOwnerInput, MineUncheckedCreateWithoutOwnerInput> | MineCreateWithoutOwnerInput[] | MineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MineCreateOrConnectWithoutOwnerInput | MineCreateOrConnectWithoutOwnerInput[]
    createMany?: MineCreateManyOwnerInputEnvelope
    connect?: MineWhereUniqueInput | MineWhereUniqueInput[]
  }

  export type MineUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MineCreateWithoutOwnerInput, MineUncheckedCreateWithoutOwnerInput> | MineCreateWithoutOwnerInput[] | MineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MineCreateOrConnectWithoutOwnerInput | MineCreateOrConnectWithoutOwnerInput[]
    upsert?: MineUpsertWithWhereUniqueWithoutOwnerInput | MineUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MineCreateManyOwnerInputEnvelope
    set?: MineWhereUniqueInput | MineWhereUniqueInput[]
    disconnect?: MineWhereUniqueInput | MineWhereUniqueInput[]
    delete?: MineWhereUniqueInput | MineWhereUniqueInput[]
    connect?: MineWhereUniqueInput | MineWhereUniqueInput[]
    update?: MineUpdateWithWhereUniqueWithoutOwnerInput | MineUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MineUpdateManyWithWhereWithoutOwnerInput | MineUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MineScalarWhereInput | MineScalarWhereInput[]
  }

  export type MineUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MineCreateWithoutOwnerInput, MineUncheckedCreateWithoutOwnerInput> | MineCreateWithoutOwnerInput[] | MineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MineCreateOrConnectWithoutOwnerInput | MineCreateOrConnectWithoutOwnerInput[]
    upsert?: MineUpsertWithWhereUniqueWithoutOwnerInput | MineUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MineCreateManyOwnerInputEnvelope
    set?: MineWhereUniqueInput | MineWhereUniqueInput[]
    disconnect?: MineWhereUniqueInput | MineWhereUniqueInput[]
    delete?: MineWhereUniqueInput | MineWhereUniqueInput[]
    connect?: MineWhereUniqueInput | MineWhereUniqueInput[]
    update?: MineUpdateWithWhereUniqueWithoutOwnerInput | MineUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MineUpdateManyWithWhereWithoutOwnerInput | MineUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MineScalarWhereInput | MineScalarWhereInput[]
  }

  export type MineCreateNestedOneWithoutLargeSectionsInput = {
    create?: XOR<MineCreateWithoutLargeSectionsInput, MineUncheckedCreateWithoutLargeSectionsInput>
    connectOrCreate?: MineCreateOrConnectWithoutLargeSectionsInput
    connect?: MineWhereUniqueInput
  }

  export type SectionTypeCreateNestedOneWithoutLargeSectionsInput = {
    create?: XOR<SectionTypeCreateWithoutLargeSectionsInput, SectionTypeUncheckedCreateWithoutLargeSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutLargeSectionsInput
    connect?: SectionTypeWhereUniqueInput
  }

  export type MediumSectionCreateNestedManyWithoutLargeSectionInput = {
    create?: XOR<MediumSectionCreateWithoutLargeSectionInput, MediumSectionUncheckedCreateWithoutLargeSectionInput> | MediumSectionCreateWithoutLargeSectionInput[] | MediumSectionUncheckedCreateWithoutLargeSectionInput[]
    connectOrCreate?: MediumSectionCreateOrConnectWithoutLargeSectionInput | MediumSectionCreateOrConnectWithoutLargeSectionInput[]
    createMany?: MediumSectionCreateManyLargeSectionInputEnvelope
    connect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
  }

  export type MediumSectionUncheckedCreateNestedManyWithoutLargeSectionInput = {
    create?: XOR<MediumSectionCreateWithoutLargeSectionInput, MediumSectionUncheckedCreateWithoutLargeSectionInput> | MediumSectionCreateWithoutLargeSectionInput[] | MediumSectionUncheckedCreateWithoutLargeSectionInput[]
    connectOrCreate?: MediumSectionCreateOrConnectWithoutLargeSectionInput | MediumSectionCreateOrConnectWithoutLargeSectionInput[]
    createMany?: MediumSectionCreateManyLargeSectionInputEnvelope
    connect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MineUpdateOneWithoutLargeSectionsNestedInput = {
    create?: XOR<MineCreateWithoutLargeSectionsInput, MineUncheckedCreateWithoutLargeSectionsInput>
    connectOrCreate?: MineCreateOrConnectWithoutLargeSectionsInput
    upsert?: MineUpsertWithoutLargeSectionsInput
    disconnect?: MineWhereInput | boolean
    delete?: MineWhereInput | boolean
    connect?: MineWhereUniqueInput
    update?: XOR<XOR<MineUpdateToOneWithWhereWithoutLargeSectionsInput, MineUpdateWithoutLargeSectionsInput>, MineUncheckedUpdateWithoutLargeSectionsInput>
  }

  export type SectionTypeUpdateOneWithoutLargeSectionsNestedInput = {
    create?: XOR<SectionTypeCreateWithoutLargeSectionsInput, SectionTypeUncheckedCreateWithoutLargeSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutLargeSectionsInput
    upsert?: SectionTypeUpsertWithoutLargeSectionsInput
    disconnect?: SectionTypeWhereInput | boolean
    delete?: SectionTypeWhereInput | boolean
    connect?: SectionTypeWhereUniqueInput
    update?: XOR<XOR<SectionTypeUpdateToOneWithWhereWithoutLargeSectionsInput, SectionTypeUpdateWithoutLargeSectionsInput>, SectionTypeUncheckedUpdateWithoutLargeSectionsInput>
  }

  export type MediumSectionUpdateManyWithoutLargeSectionNestedInput = {
    create?: XOR<MediumSectionCreateWithoutLargeSectionInput, MediumSectionUncheckedCreateWithoutLargeSectionInput> | MediumSectionCreateWithoutLargeSectionInput[] | MediumSectionUncheckedCreateWithoutLargeSectionInput[]
    connectOrCreate?: MediumSectionCreateOrConnectWithoutLargeSectionInput | MediumSectionCreateOrConnectWithoutLargeSectionInput[]
    upsert?: MediumSectionUpsertWithWhereUniqueWithoutLargeSectionInput | MediumSectionUpsertWithWhereUniqueWithoutLargeSectionInput[]
    createMany?: MediumSectionCreateManyLargeSectionInputEnvelope
    set?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    disconnect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    delete?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    connect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    update?: MediumSectionUpdateWithWhereUniqueWithoutLargeSectionInput | MediumSectionUpdateWithWhereUniqueWithoutLargeSectionInput[]
    updateMany?: MediumSectionUpdateManyWithWhereWithoutLargeSectionInput | MediumSectionUpdateManyWithWhereWithoutLargeSectionInput[]
    deleteMany?: MediumSectionScalarWhereInput | MediumSectionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MediumSectionUncheckedUpdateManyWithoutLargeSectionNestedInput = {
    create?: XOR<MediumSectionCreateWithoutLargeSectionInput, MediumSectionUncheckedCreateWithoutLargeSectionInput> | MediumSectionCreateWithoutLargeSectionInput[] | MediumSectionUncheckedCreateWithoutLargeSectionInput[]
    connectOrCreate?: MediumSectionCreateOrConnectWithoutLargeSectionInput | MediumSectionCreateOrConnectWithoutLargeSectionInput[]
    upsert?: MediumSectionUpsertWithWhereUniqueWithoutLargeSectionInput | MediumSectionUpsertWithWhereUniqueWithoutLargeSectionInput[]
    createMany?: MediumSectionCreateManyLargeSectionInputEnvelope
    set?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    disconnect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    delete?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    connect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    update?: MediumSectionUpdateWithWhereUniqueWithoutLargeSectionInput | MediumSectionUpdateWithWhereUniqueWithoutLargeSectionInput[]
    updateMany?: MediumSectionUpdateManyWithWhereWithoutLargeSectionInput | MediumSectionUpdateManyWithWhereWithoutLargeSectionInput[]
    deleteMany?: MediumSectionScalarWhereInput | MediumSectionScalarWhereInput[]
  }

  export type LargeSectionCreateNestedOneWithoutMediumSectionsInput = {
    create?: XOR<LargeSectionCreateWithoutMediumSectionsInput, LargeSectionUncheckedCreateWithoutMediumSectionsInput>
    connectOrCreate?: LargeSectionCreateOrConnectWithoutMediumSectionsInput
    connect?: LargeSectionWhereUniqueInput
  }

  export type SectionTypeCreateNestedOneWithoutMediumSectionsInput = {
    create?: XOR<SectionTypeCreateWithoutMediumSectionsInput, SectionTypeUncheckedCreateWithoutMediumSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutMediumSectionsInput
    connect?: SectionTypeWhereUniqueInput
  }

  export type SmallSectionCreateNestedManyWithoutMediumSectionInput = {
    create?: XOR<SmallSectionCreateWithoutMediumSectionInput, SmallSectionUncheckedCreateWithoutMediumSectionInput> | SmallSectionCreateWithoutMediumSectionInput[] | SmallSectionUncheckedCreateWithoutMediumSectionInput[]
    connectOrCreate?: SmallSectionCreateOrConnectWithoutMediumSectionInput | SmallSectionCreateOrConnectWithoutMediumSectionInput[]
    createMany?: SmallSectionCreateManyMediumSectionInputEnvelope
    connect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
  }

  export type SmallSectionUncheckedCreateNestedManyWithoutMediumSectionInput = {
    create?: XOR<SmallSectionCreateWithoutMediumSectionInput, SmallSectionUncheckedCreateWithoutMediumSectionInput> | SmallSectionCreateWithoutMediumSectionInput[] | SmallSectionUncheckedCreateWithoutMediumSectionInput[]
    connectOrCreate?: SmallSectionCreateOrConnectWithoutMediumSectionInput | SmallSectionCreateOrConnectWithoutMediumSectionInput[]
    createMany?: SmallSectionCreateManyMediumSectionInputEnvelope
    connect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
  }

  export type LargeSectionUpdateOneWithoutMediumSectionsNestedInput = {
    create?: XOR<LargeSectionCreateWithoutMediumSectionsInput, LargeSectionUncheckedCreateWithoutMediumSectionsInput>
    connectOrCreate?: LargeSectionCreateOrConnectWithoutMediumSectionsInput
    upsert?: LargeSectionUpsertWithoutMediumSectionsInput
    disconnect?: LargeSectionWhereInput | boolean
    delete?: LargeSectionWhereInput | boolean
    connect?: LargeSectionWhereUniqueInput
    update?: XOR<XOR<LargeSectionUpdateToOneWithWhereWithoutMediumSectionsInput, LargeSectionUpdateWithoutMediumSectionsInput>, LargeSectionUncheckedUpdateWithoutMediumSectionsInput>
  }

  export type SectionTypeUpdateOneWithoutMediumSectionsNestedInput = {
    create?: XOR<SectionTypeCreateWithoutMediumSectionsInput, SectionTypeUncheckedCreateWithoutMediumSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutMediumSectionsInput
    upsert?: SectionTypeUpsertWithoutMediumSectionsInput
    disconnect?: SectionTypeWhereInput | boolean
    delete?: SectionTypeWhereInput | boolean
    connect?: SectionTypeWhereUniqueInput
    update?: XOR<XOR<SectionTypeUpdateToOneWithWhereWithoutMediumSectionsInput, SectionTypeUpdateWithoutMediumSectionsInput>, SectionTypeUncheckedUpdateWithoutMediumSectionsInput>
  }

  export type SmallSectionUpdateManyWithoutMediumSectionNestedInput = {
    create?: XOR<SmallSectionCreateWithoutMediumSectionInput, SmallSectionUncheckedCreateWithoutMediumSectionInput> | SmallSectionCreateWithoutMediumSectionInput[] | SmallSectionUncheckedCreateWithoutMediumSectionInput[]
    connectOrCreate?: SmallSectionCreateOrConnectWithoutMediumSectionInput | SmallSectionCreateOrConnectWithoutMediumSectionInput[]
    upsert?: SmallSectionUpsertWithWhereUniqueWithoutMediumSectionInput | SmallSectionUpsertWithWhereUniqueWithoutMediumSectionInput[]
    createMany?: SmallSectionCreateManyMediumSectionInputEnvelope
    set?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    disconnect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    delete?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    connect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    update?: SmallSectionUpdateWithWhereUniqueWithoutMediumSectionInput | SmallSectionUpdateWithWhereUniqueWithoutMediumSectionInput[]
    updateMany?: SmallSectionUpdateManyWithWhereWithoutMediumSectionInput | SmallSectionUpdateManyWithWhereWithoutMediumSectionInput[]
    deleteMany?: SmallSectionScalarWhereInput | SmallSectionScalarWhereInput[]
  }

  export type SmallSectionUncheckedUpdateManyWithoutMediumSectionNestedInput = {
    create?: XOR<SmallSectionCreateWithoutMediumSectionInput, SmallSectionUncheckedCreateWithoutMediumSectionInput> | SmallSectionCreateWithoutMediumSectionInput[] | SmallSectionUncheckedCreateWithoutMediumSectionInput[]
    connectOrCreate?: SmallSectionCreateOrConnectWithoutMediumSectionInput | SmallSectionCreateOrConnectWithoutMediumSectionInput[]
    upsert?: SmallSectionUpsertWithWhereUniqueWithoutMediumSectionInput | SmallSectionUpsertWithWhereUniqueWithoutMediumSectionInput[]
    createMany?: SmallSectionCreateManyMediumSectionInputEnvelope
    set?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    disconnect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    delete?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    connect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    update?: SmallSectionUpdateWithWhereUniqueWithoutMediumSectionInput | SmallSectionUpdateWithWhereUniqueWithoutMediumSectionInput[]
    updateMany?: SmallSectionUpdateManyWithWhereWithoutMediumSectionInput | SmallSectionUpdateManyWithWhereWithoutMediumSectionInput[]
    deleteMany?: SmallSectionScalarWhereInput | SmallSectionScalarWhereInput[]
  }

  export type MediumSectionCreateNestedOneWithoutSmallSectionsInput = {
    create?: XOR<MediumSectionCreateWithoutSmallSectionsInput, MediumSectionUncheckedCreateWithoutSmallSectionsInput>
    connectOrCreate?: MediumSectionCreateOrConnectWithoutSmallSectionsInput
    connect?: MediumSectionWhereUniqueInput
  }

  export type SectionTypeCreateNestedOneWithoutSmallSectionsInput = {
    create?: XOR<SectionTypeCreateWithoutSmallSectionsInput, SectionTypeUncheckedCreateWithoutSmallSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutSmallSectionsInput
    connect?: SectionTypeWhereUniqueInput
  }

  export type MicroSectionCreateNestedManyWithoutSmallSectionInput = {
    create?: XOR<MicroSectionCreateWithoutSmallSectionInput, MicroSectionUncheckedCreateWithoutSmallSectionInput> | MicroSectionCreateWithoutSmallSectionInput[] | MicroSectionUncheckedCreateWithoutSmallSectionInput[]
    connectOrCreate?: MicroSectionCreateOrConnectWithoutSmallSectionInput | MicroSectionCreateOrConnectWithoutSmallSectionInput[]
    createMany?: MicroSectionCreateManySmallSectionInputEnvelope
    connect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
  }

  export type MicroSectionUncheckedCreateNestedManyWithoutSmallSectionInput = {
    create?: XOR<MicroSectionCreateWithoutSmallSectionInput, MicroSectionUncheckedCreateWithoutSmallSectionInput> | MicroSectionCreateWithoutSmallSectionInput[] | MicroSectionUncheckedCreateWithoutSmallSectionInput[]
    connectOrCreate?: MicroSectionCreateOrConnectWithoutSmallSectionInput | MicroSectionCreateOrConnectWithoutSmallSectionInput[]
    createMany?: MicroSectionCreateManySmallSectionInputEnvelope
    connect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
  }

  export type MediumSectionUpdateOneWithoutSmallSectionsNestedInput = {
    create?: XOR<MediumSectionCreateWithoutSmallSectionsInput, MediumSectionUncheckedCreateWithoutSmallSectionsInput>
    connectOrCreate?: MediumSectionCreateOrConnectWithoutSmallSectionsInput
    upsert?: MediumSectionUpsertWithoutSmallSectionsInput
    disconnect?: MediumSectionWhereInput | boolean
    delete?: MediumSectionWhereInput | boolean
    connect?: MediumSectionWhereUniqueInput
    update?: XOR<XOR<MediumSectionUpdateToOneWithWhereWithoutSmallSectionsInput, MediumSectionUpdateWithoutSmallSectionsInput>, MediumSectionUncheckedUpdateWithoutSmallSectionsInput>
  }

  export type SectionTypeUpdateOneWithoutSmallSectionsNestedInput = {
    create?: XOR<SectionTypeCreateWithoutSmallSectionsInput, SectionTypeUncheckedCreateWithoutSmallSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutSmallSectionsInput
    upsert?: SectionTypeUpsertWithoutSmallSectionsInput
    disconnect?: SectionTypeWhereInput | boolean
    delete?: SectionTypeWhereInput | boolean
    connect?: SectionTypeWhereUniqueInput
    update?: XOR<XOR<SectionTypeUpdateToOneWithWhereWithoutSmallSectionsInput, SectionTypeUpdateWithoutSmallSectionsInput>, SectionTypeUncheckedUpdateWithoutSmallSectionsInput>
  }

  export type MicroSectionUpdateManyWithoutSmallSectionNestedInput = {
    create?: XOR<MicroSectionCreateWithoutSmallSectionInput, MicroSectionUncheckedCreateWithoutSmallSectionInput> | MicroSectionCreateWithoutSmallSectionInput[] | MicroSectionUncheckedCreateWithoutSmallSectionInput[]
    connectOrCreate?: MicroSectionCreateOrConnectWithoutSmallSectionInput | MicroSectionCreateOrConnectWithoutSmallSectionInput[]
    upsert?: MicroSectionUpsertWithWhereUniqueWithoutSmallSectionInput | MicroSectionUpsertWithWhereUniqueWithoutSmallSectionInput[]
    createMany?: MicroSectionCreateManySmallSectionInputEnvelope
    set?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    disconnect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    delete?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    connect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    update?: MicroSectionUpdateWithWhereUniqueWithoutSmallSectionInput | MicroSectionUpdateWithWhereUniqueWithoutSmallSectionInput[]
    updateMany?: MicroSectionUpdateManyWithWhereWithoutSmallSectionInput | MicroSectionUpdateManyWithWhereWithoutSmallSectionInput[]
    deleteMany?: MicroSectionScalarWhereInput | MicroSectionScalarWhereInput[]
  }

  export type MicroSectionUncheckedUpdateManyWithoutSmallSectionNestedInput = {
    create?: XOR<MicroSectionCreateWithoutSmallSectionInput, MicroSectionUncheckedCreateWithoutSmallSectionInput> | MicroSectionCreateWithoutSmallSectionInput[] | MicroSectionUncheckedCreateWithoutSmallSectionInput[]
    connectOrCreate?: MicroSectionCreateOrConnectWithoutSmallSectionInput | MicroSectionCreateOrConnectWithoutSmallSectionInput[]
    upsert?: MicroSectionUpsertWithWhereUniqueWithoutSmallSectionInput | MicroSectionUpsertWithWhereUniqueWithoutSmallSectionInput[]
    createMany?: MicroSectionCreateManySmallSectionInputEnvelope
    set?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    disconnect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    delete?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    connect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    update?: MicroSectionUpdateWithWhereUniqueWithoutSmallSectionInput | MicroSectionUpdateWithWhereUniqueWithoutSmallSectionInput[]
    updateMany?: MicroSectionUpdateManyWithWhereWithoutSmallSectionInput | MicroSectionUpdateManyWithWhereWithoutSmallSectionInput[]
    deleteMany?: MicroSectionScalarWhereInput | MicroSectionScalarWhereInput[]
  }

  export type SmallSectionCreateNestedOneWithoutMicroSectionsInput = {
    create?: XOR<SmallSectionCreateWithoutMicroSectionsInput, SmallSectionUncheckedCreateWithoutMicroSectionsInput>
    connectOrCreate?: SmallSectionCreateOrConnectWithoutMicroSectionsInput
    connect?: SmallSectionWhereUniqueInput
  }

  export type SectionTypeCreateNestedOneWithoutMicroSectionsInput = {
    create?: XOR<SectionTypeCreateWithoutMicroSectionsInput, SectionTypeUncheckedCreateWithoutMicroSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutMicroSectionsInput
    connect?: SectionTypeWhereUniqueInput
  }

  export type UnitSectionCreateNestedManyWithoutMicroSectionInput = {
    create?: XOR<UnitSectionCreateWithoutMicroSectionInput, UnitSectionUncheckedCreateWithoutMicroSectionInput> | UnitSectionCreateWithoutMicroSectionInput[] | UnitSectionUncheckedCreateWithoutMicroSectionInput[]
    connectOrCreate?: UnitSectionCreateOrConnectWithoutMicroSectionInput | UnitSectionCreateOrConnectWithoutMicroSectionInput[]
    createMany?: UnitSectionCreateManyMicroSectionInputEnvelope
    connect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
  }

  export type UnitSectionUncheckedCreateNestedManyWithoutMicroSectionInput = {
    create?: XOR<UnitSectionCreateWithoutMicroSectionInput, UnitSectionUncheckedCreateWithoutMicroSectionInput> | UnitSectionCreateWithoutMicroSectionInput[] | UnitSectionUncheckedCreateWithoutMicroSectionInput[]
    connectOrCreate?: UnitSectionCreateOrConnectWithoutMicroSectionInput | UnitSectionCreateOrConnectWithoutMicroSectionInput[]
    createMany?: UnitSectionCreateManyMicroSectionInputEnvelope
    connect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
  }

  export type SmallSectionUpdateOneWithoutMicroSectionsNestedInput = {
    create?: XOR<SmallSectionCreateWithoutMicroSectionsInput, SmallSectionUncheckedCreateWithoutMicroSectionsInput>
    connectOrCreate?: SmallSectionCreateOrConnectWithoutMicroSectionsInput
    upsert?: SmallSectionUpsertWithoutMicroSectionsInput
    disconnect?: SmallSectionWhereInput | boolean
    delete?: SmallSectionWhereInput | boolean
    connect?: SmallSectionWhereUniqueInput
    update?: XOR<XOR<SmallSectionUpdateToOneWithWhereWithoutMicroSectionsInput, SmallSectionUpdateWithoutMicroSectionsInput>, SmallSectionUncheckedUpdateWithoutMicroSectionsInput>
  }

  export type SectionTypeUpdateOneWithoutMicroSectionsNestedInput = {
    create?: XOR<SectionTypeCreateWithoutMicroSectionsInput, SectionTypeUncheckedCreateWithoutMicroSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutMicroSectionsInput
    upsert?: SectionTypeUpsertWithoutMicroSectionsInput
    disconnect?: SectionTypeWhereInput | boolean
    delete?: SectionTypeWhereInput | boolean
    connect?: SectionTypeWhereUniqueInput
    update?: XOR<XOR<SectionTypeUpdateToOneWithWhereWithoutMicroSectionsInput, SectionTypeUpdateWithoutMicroSectionsInput>, SectionTypeUncheckedUpdateWithoutMicroSectionsInput>
  }

  export type UnitSectionUpdateManyWithoutMicroSectionNestedInput = {
    create?: XOR<UnitSectionCreateWithoutMicroSectionInput, UnitSectionUncheckedCreateWithoutMicroSectionInput> | UnitSectionCreateWithoutMicroSectionInput[] | UnitSectionUncheckedCreateWithoutMicroSectionInput[]
    connectOrCreate?: UnitSectionCreateOrConnectWithoutMicroSectionInput | UnitSectionCreateOrConnectWithoutMicroSectionInput[]
    upsert?: UnitSectionUpsertWithWhereUniqueWithoutMicroSectionInput | UnitSectionUpsertWithWhereUniqueWithoutMicroSectionInput[]
    createMany?: UnitSectionCreateManyMicroSectionInputEnvelope
    set?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    disconnect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    delete?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    connect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    update?: UnitSectionUpdateWithWhereUniqueWithoutMicroSectionInput | UnitSectionUpdateWithWhereUniqueWithoutMicroSectionInput[]
    updateMany?: UnitSectionUpdateManyWithWhereWithoutMicroSectionInput | UnitSectionUpdateManyWithWhereWithoutMicroSectionInput[]
    deleteMany?: UnitSectionScalarWhereInput | UnitSectionScalarWhereInput[]
  }

  export type UnitSectionUncheckedUpdateManyWithoutMicroSectionNestedInput = {
    create?: XOR<UnitSectionCreateWithoutMicroSectionInput, UnitSectionUncheckedCreateWithoutMicroSectionInput> | UnitSectionCreateWithoutMicroSectionInput[] | UnitSectionUncheckedCreateWithoutMicroSectionInput[]
    connectOrCreate?: UnitSectionCreateOrConnectWithoutMicroSectionInput | UnitSectionCreateOrConnectWithoutMicroSectionInput[]
    upsert?: UnitSectionUpsertWithWhereUniqueWithoutMicroSectionInput | UnitSectionUpsertWithWhereUniqueWithoutMicroSectionInput[]
    createMany?: UnitSectionCreateManyMicroSectionInputEnvelope
    set?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    disconnect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    delete?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    connect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    update?: UnitSectionUpdateWithWhereUniqueWithoutMicroSectionInput | UnitSectionUpdateWithWhereUniqueWithoutMicroSectionInput[]
    updateMany?: UnitSectionUpdateManyWithWhereWithoutMicroSectionInput | UnitSectionUpdateManyWithWhereWithoutMicroSectionInput[]
    deleteMany?: UnitSectionScalarWhereInput | UnitSectionScalarWhereInput[]
  }

  export type MicroSectionCreateNestedOneWithoutUnitSectionsInput = {
    create?: XOR<MicroSectionCreateWithoutUnitSectionsInput, MicroSectionUncheckedCreateWithoutUnitSectionsInput>
    connectOrCreate?: MicroSectionCreateOrConnectWithoutUnitSectionsInput
    connect?: MicroSectionWhereUniqueInput
  }

  export type SectionTypeCreateNestedOneWithoutUnitSectionsInput = {
    create?: XOR<SectionTypeCreateWithoutUnitSectionsInput, SectionTypeUncheckedCreateWithoutUnitSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutUnitSectionsInput
    connect?: SectionTypeWhereUniqueInput
  }

  export type MicroSectionUpdateOneWithoutUnitSectionsNestedInput = {
    create?: XOR<MicroSectionCreateWithoutUnitSectionsInput, MicroSectionUncheckedCreateWithoutUnitSectionsInput>
    connectOrCreate?: MicroSectionCreateOrConnectWithoutUnitSectionsInput
    upsert?: MicroSectionUpsertWithoutUnitSectionsInput
    disconnect?: MicroSectionWhereInput | boolean
    delete?: MicroSectionWhereInput | boolean
    connect?: MicroSectionWhereUniqueInput
    update?: XOR<XOR<MicroSectionUpdateToOneWithWhereWithoutUnitSectionsInput, MicroSectionUpdateWithoutUnitSectionsInput>, MicroSectionUncheckedUpdateWithoutUnitSectionsInput>
  }

  export type SectionTypeUpdateOneWithoutUnitSectionsNestedInput = {
    create?: XOR<SectionTypeCreateWithoutUnitSectionsInput, SectionTypeUncheckedCreateWithoutUnitSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutUnitSectionsInput
    upsert?: SectionTypeUpsertWithoutUnitSectionsInput
    disconnect?: SectionTypeWhereInput | boolean
    delete?: SectionTypeWhereInput | boolean
    connect?: SectionTypeWhereUniqueInput
    update?: XOR<XOR<SectionTypeUpdateToOneWithWhereWithoutUnitSectionsInput, SectionTypeUpdateWithoutUnitSectionsInput>, SectionTypeUncheckedUpdateWithoutUnitSectionsInput>
  }

  export type LargeSectionCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<LargeSectionCreateWithoutSectionTypeInput, LargeSectionUncheckedCreateWithoutSectionTypeInput> | LargeSectionCreateWithoutSectionTypeInput[] | LargeSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: LargeSectionCreateOrConnectWithoutSectionTypeInput | LargeSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: LargeSectionCreateManySectionTypeInputEnvelope
    connect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
  }

  export type MediumSectionCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<MediumSectionCreateWithoutSectionTypeInput, MediumSectionUncheckedCreateWithoutSectionTypeInput> | MediumSectionCreateWithoutSectionTypeInput[] | MediumSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: MediumSectionCreateOrConnectWithoutSectionTypeInput | MediumSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: MediumSectionCreateManySectionTypeInputEnvelope
    connect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
  }

  export type SmallSectionCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<SmallSectionCreateWithoutSectionTypeInput, SmallSectionUncheckedCreateWithoutSectionTypeInput> | SmallSectionCreateWithoutSectionTypeInput[] | SmallSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: SmallSectionCreateOrConnectWithoutSectionTypeInput | SmallSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: SmallSectionCreateManySectionTypeInputEnvelope
    connect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
  }

  export type MicroSectionCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<MicroSectionCreateWithoutSectionTypeInput, MicroSectionUncheckedCreateWithoutSectionTypeInput> | MicroSectionCreateWithoutSectionTypeInput[] | MicroSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: MicroSectionCreateOrConnectWithoutSectionTypeInput | MicroSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: MicroSectionCreateManySectionTypeInputEnvelope
    connect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
  }

  export type UnitSectionCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<UnitSectionCreateWithoutSectionTypeInput, UnitSectionUncheckedCreateWithoutSectionTypeInput> | UnitSectionCreateWithoutSectionTypeInput[] | UnitSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: UnitSectionCreateOrConnectWithoutSectionTypeInput | UnitSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: UnitSectionCreateManySectionTypeInputEnvelope
    connect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
  }

  export type SectionItemCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<SectionItemCreateWithoutSectionTypeInput, SectionItemUncheckedCreateWithoutSectionTypeInput> | SectionItemCreateWithoutSectionTypeInput[] | SectionItemUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: SectionItemCreateOrConnectWithoutSectionTypeInput | SectionItemCreateOrConnectWithoutSectionTypeInput[]
    createMany?: SectionItemCreateManySectionTypeInputEnvelope
    connect?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
  }

  export type LargeSectionUncheckedCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<LargeSectionCreateWithoutSectionTypeInput, LargeSectionUncheckedCreateWithoutSectionTypeInput> | LargeSectionCreateWithoutSectionTypeInput[] | LargeSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: LargeSectionCreateOrConnectWithoutSectionTypeInput | LargeSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: LargeSectionCreateManySectionTypeInputEnvelope
    connect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
  }

  export type MediumSectionUncheckedCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<MediumSectionCreateWithoutSectionTypeInput, MediumSectionUncheckedCreateWithoutSectionTypeInput> | MediumSectionCreateWithoutSectionTypeInput[] | MediumSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: MediumSectionCreateOrConnectWithoutSectionTypeInput | MediumSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: MediumSectionCreateManySectionTypeInputEnvelope
    connect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
  }

  export type SmallSectionUncheckedCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<SmallSectionCreateWithoutSectionTypeInput, SmallSectionUncheckedCreateWithoutSectionTypeInput> | SmallSectionCreateWithoutSectionTypeInput[] | SmallSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: SmallSectionCreateOrConnectWithoutSectionTypeInput | SmallSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: SmallSectionCreateManySectionTypeInputEnvelope
    connect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
  }

  export type MicroSectionUncheckedCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<MicroSectionCreateWithoutSectionTypeInput, MicroSectionUncheckedCreateWithoutSectionTypeInput> | MicroSectionCreateWithoutSectionTypeInput[] | MicroSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: MicroSectionCreateOrConnectWithoutSectionTypeInput | MicroSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: MicroSectionCreateManySectionTypeInputEnvelope
    connect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
  }

  export type UnitSectionUncheckedCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<UnitSectionCreateWithoutSectionTypeInput, UnitSectionUncheckedCreateWithoutSectionTypeInput> | UnitSectionCreateWithoutSectionTypeInput[] | UnitSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: UnitSectionCreateOrConnectWithoutSectionTypeInput | UnitSectionCreateOrConnectWithoutSectionTypeInput[]
    createMany?: UnitSectionCreateManySectionTypeInputEnvelope
    connect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
  }

  export type SectionItemUncheckedCreateNestedManyWithoutSectionTypeInput = {
    create?: XOR<SectionItemCreateWithoutSectionTypeInput, SectionItemUncheckedCreateWithoutSectionTypeInput> | SectionItemCreateWithoutSectionTypeInput[] | SectionItemUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: SectionItemCreateOrConnectWithoutSectionTypeInput | SectionItemCreateOrConnectWithoutSectionTypeInput[]
    createMany?: SectionItemCreateManySectionTypeInputEnvelope
    connect?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
  }

  export type LargeSectionUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<LargeSectionCreateWithoutSectionTypeInput, LargeSectionUncheckedCreateWithoutSectionTypeInput> | LargeSectionCreateWithoutSectionTypeInput[] | LargeSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: LargeSectionCreateOrConnectWithoutSectionTypeInput | LargeSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: LargeSectionUpsertWithWhereUniqueWithoutSectionTypeInput | LargeSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: LargeSectionCreateManySectionTypeInputEnvelope
    set?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    disconnect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    delete?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    connect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    update?: LargeSectionUpdateWithWhereUniqueWithoutSectionTypeInput | LargeSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: LargeSectionUpdateManyWithWhereWithoutSectionTypeInput | LargeSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: LargeSectionScalarWhereInput | LargeSectionScalarWhereInput[]
  }

  export type MediumSectionUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<MediumSectionCreateWithoutSectionTypeInput, MediumSectionUncheckedCreateWithoutSectionTypeInput> | MediumSectionCreateWithoutSectionTypeInput[] | MediumSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: MediumSectionCreateOrConnectWithoutSectionTypeInput | MediumSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: MediumSectionUpsertWithWhereUniqueWithoutSectionTypeInput | MediumSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: MediumSectionCreateManySectionTypeInputEnvelope
    set?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    disconnect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    delete?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    connect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    update?: MediumSectionUpdateWithWhereUniqueWithoutSectionTypeInput | MediumSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: MediumSectionUpdateManyWithWhereWithoutSectionTypeInput | MediumSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: MediumSectionScalarWhereInput | MediumSectionScalarWhereInput[]
  }

  export type SmallSectionUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<SmallSectionCreateWithoutSectionTypeInput, SmallSectionUncheckedCreateWithoutSectionTypeInput> | SmallSectionCreateWithoutSectionTypeInput[] | SmallSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: SmallSectionCreateOrConnectWithoutSectionTypeInput | SmallSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: SmallSectionUpsertWithWhereUniqueWithoutSectionTypeInput | SmallSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: SmallSectionCreateManySectionTypeInputEnvelope
    set?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    disconnect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    delete?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    connect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    update?: SmallSectionUpdateWithWhereUniqueWithoutSectionTypeInput | SmallSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: SmallSectionUpdateManyWithWhereWithoutSectionTypeInput | SmallSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: SmallSectionScalarWhereInput | SmallSectionScalarWhereInput[]
  }

  export type MicroSectionUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<MicroSectionCreateWithoutSectionTypeInput, MicroSectionUncheckedCreateWithoutSectionTypeInput> | MicroSectionCreateWithoutSectionTypeInput[] | MicroSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: MicroSectionCreateOrConnectWithoutSectionTypeInput | MicroSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: MicroSectionUpsertWithWhereUniqueWithoutSectionTypeInput | MicroSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: MicroSectionCreateManySectionTypeInputEnvelope
    set?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    disconnect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    delete?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    connect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    update?: MicroSectionUpdateWithWhereUniqueWithoutSectionTypeInput | MicroSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: MicroSectionUpdateManyWithWhereWithoutSectionTypeInput | MicroSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: MicroSectionScalarWhereInput | MicroSectionScalarWhereInput[]
  }

  export type UnitSectionUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<UnitSectionCreateWithoutSectionTypeInput, UnitSectionUncheckedCreateWithoutSectionTypeInput> | UnitSectionCreateWithoutSectionTypeInput[] | UnitSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: UnitSectionCreateOrConnectWithoutSectionTypeInput | UnitSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: UnitSectionUpsertWithWhereUniqueWithoutSectionTypeInput | UnitSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: UnitSectionCreateManySectionTypeInputEnvelope
    set?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    disconnect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    delete?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    connect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    update?: UnitSectionUpdateWithWhereUniqueWithoutSectionTypeInput | UnitSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: UnitSectionUpdateManyWithWhereWithoutSectionTypeInput | UnitSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: UnitSectionScalarWhereInput | UnitSectionScalarWhereInput[]
  }

  export type SectionItemUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<SectionItemCreateWithoutSectionTypeInput, SectionItemUncheckedCreateWithoutSectionTypeInput> | SectionItemCreateWithoutSectionTypeInput[] | SectionItemUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: SectionItemCreateOrConnectWithoutSectionTypeInput | SectionItemCreateOrConnectWithoutSectionTypeInput[]
    upsert?: SectionItemUpsertWithWhereUniqueWithoutSectionTypeInput | SectionItemUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: SectionItemCreateManySectionTypeInputEnvelope
    set?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
    disconnect?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
    delete?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
    connect?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
    update?: SectionItemUpdateWithWhereUniqueWithoutSectionTypeInput | SectionItemUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: SectionItemUpdateManyWithWhereWithoutSectionTypeInput | SectionItemUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: SectionItemScalarWhereInput | SectionItemScalarWhereInput[]
  }

  export type LargeSectionUncheckedUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<LargeSectionCreateWithoutSectionTypeInput, LargeSectionUncheckedCreateWithoutSectionTypeInput> | LargeSectionCreateWithoutSectionTypeInput[] | LargeSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: LargeSectionCreateOrConnectWithoutSectionTypeInput | LargeSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: LargeSectionUpsertWithWhereUniqueWithoutSectionTypeInput | LargeSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: LargeSectionCreateManySectionTypeInputEnvelope
    set?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    disconnect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    delete?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    connect?: LargeSectionWhereUniqueInput | LargeSectionWhereUniqueInput[]
    update?: LargeSectionUpdateWithWhereUniqueWithoutSectionTypeInput | LargeSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: LargeSectionUpdateManyWithWhereWithoutSectionTypeInput | LargeSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: LargeSectionScalarWhereInput | LargeSectionScalarWhereInput[]
  }

  export type MediumSectionUncheckedUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<MediumSectionCreateWithoutSectionTypeInput, MediumSectionUncheckedCreateWithoutSectionTypeInput> | MediumSectionCreateWithoutSectionTypeInput[] | MediumSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: MediumSectionCreateOrConnectWithoutSectionTypeInput | MediumSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: MediumSectionUpsertWithWhereUniqueWithoutSectionTypeInput | MediumSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: MediumSectionCreateManySectionTypeInputEnvelope
    set?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    disconnect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    delete?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    connect?: MediumSectionWhereUniqueInput | MediumSectionWhereUniqueInput[]
    update?: MediumSectionUpdateWithWhereUniqueWithoutSectionTypeInput | MediumSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: MediumSectionUpdateManyWithWhereWithoutSectionTypeInput | MediumSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: MediumSectionScalarWhereInput | MediumSectionScalarWhereInput[]
  }

  export type SmallSectionUncheckedUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<SmallSectionCreateWithoutSectionTypeInput, SmallSectionUncheckedCreateWithoutSectionTypeInput> | SmallSectionCreateWithoutSectionTypeInput[] | SmallSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: SmallSectionCreateOrConnectWithoutSectionTypeInput | SmallSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: SmallSectionUpsertWithWhereUniqueWithoutSectionTypeInput | SmallSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: SmallSectionCreateManySectionTypeInputEnvelope
    set?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    disconnect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    delete?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    connect?: SmallSectionWhereUniqueInput | SmallSectionWhereUniqueInput[]
    update?: SmallSectionUpdateWithWhereUniqueWithoutSectionTypeInput | SmallSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: SmallSectionUpdateManyWithWhereWithoutSectionTypeInput | SmallSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: SmallSectionScalarWhereInput | SmallSectionScalarWhereInput[]
  }

  export type MicroSectionUncheckedUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<MicroSectionCreateWithoutSectionTypeInput, MicroSectionUncheckedCreateWithoutSectionTypeInput> | MicroSectionCreateWithoutSectionTypeInput[] | MicroSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: MicroSectionCreateOrConnectWithoutSectionTypeInput | MicroSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: MicroSectionUpsertWithWhereUniqueWithoutSectionTypeInput | MicroSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: MicroSectionCreateManySectionTypeInputEnvelope
    set?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    disconnect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    delete?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    connect?: MicroSectionWhereUniqueInput | MicroSectionWhereUniqueInput[]
    update?: MicroSectionUpdateWithWhereUniqueWithoutSectionTypeInput | MicroSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: MicroSectionUpdateManyWithWhereWithoutSectionTypeInput | MicroSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: MicroSectionScalarWhereInput | MicroSectionScalarWhereInput[]
  }

  export type UnitSectionUncheckedUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<UnitSectionCreateWithoutSectionTypeInput, UnitSectionUncheckedCreateWithoutSectionTypeInput> | UnitSectionCreateWithoutSectionTypeInput[] | UnitSectionUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: UnitSectionCreateOrConnectWithoutSectionTypeInput | UnitSectionCreateOrConnectWithoutSectionTypeInput[]
    upsert?: UnitSectionUpsertWithWhereUniqueWithoutSectionTypeInput | UnitSectionUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: UnitSectionCreateManySectionTypeInputEnvelope
    set?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    disconnect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    delete?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    connect?: UnitSectionWhereUniqueInput | UnitSectionWhereUniqueInput[]
    update?: UnitSectionUpdateWithWhereUniqueWithoutSectionTypeInput | UnitSectionUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: UnitSectionUpdateManyWithWhereWithoutSectionTypeInput | UnitSectionUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: UnitSectionScalarWhereInput | UnitSectionScalarWhereInput[]
  }

  export type SectionItemUncheckedUpdateManyWithoutSectionTypeNestedInput = {
    create?: XOR<SectionItemCreateWithoutSectionTypeInput, SectionItemUncheckedCreateWithoutSectionTypeInput> | SectionItemCreateWithoutSectionTypeInput[] | SectionItemUncheckedCreateWithoutSectionTypeInput[]
    connectOrCreate?: SectionItemCreateOrConnectWithoutSectionTypeInput | SectionItemCreateOrConnectWithoutSectionTypeInput[]
    upsert?: SectionItemUpsertWithWhereUniqueWithoutSectionTypeInput | SectionItemUpsertWithWhereUniqueWithoutSectionTypeInput[]
    createMany?: SectionItemCreateManySectionTypeInputEnvelope
    set?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
    disconnect?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
    delete?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
    connect?: SectionItemWhereUniqueInput | SectionItemWhereUniqueInput[]
    update?: SectionItemUpdateWithWhereUniqueWithoutSectionTypeInput | SectionItemUpdateWithWhereUniqueWithoutSectionTypeInput[]
    updateMany?: SectionItemUpdateManyWithWhereWithoutSectionTypeInput | SectionItemUpdateManyWithWhereWithoutSectionTypeInput[]
    deleteMany?: SectionItemScalarWhereInput | SectionItemScalarWhereInput[]
  }

  export type SectionTypeCreateNestedOneWithoutSectionItemsInput = {
    create?: XOR<SectionTypeCreateWithoutSectionItemsInput, SectionTypeUncheckedCreateWithoutSectionItemsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutSectionItemsInput
    connect?: SectionTypeWhereUniqueInput
  }

  export type SectionTypeUpdateOneRequiredWithoutSectionItemsNestedInput = {
    create?: XOR<SectionTypeCreateWithoutSectionItemsInput, SectionTypeUncheckedCreateWithoutSectionItemsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutSectionItemsInput
    upsert?: SectionTypeUpsertWithoutSectionItemsInput
    connect?: SectionTypeWhereUniqueInput
    update?: XOR<XOR<SectionTypeUpdateToOneWithWhereWithoutSectionItemsInput, SectionTypeUpdateWithoutSectionItemsInput>, SectionTypeUncheckedUpdateWithoutSectionItemsInput>
  }

  export type UserCreateNestedManyWithoutPositionInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateManyWithoutPositionNestedInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPositionInput | UserUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPositionInput | UserUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPositionInput | UserUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput> | UserCreateWithoutPositionInput[] | UserUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPositionInput | UserCreateOrConnectWithoutPositionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPositionInput | UserUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: UserCreateManyPositionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPositionInput | UserUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPositionInput | UserUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput | UserUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserRoleInput | UserUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput | UserUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput | UserUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserRoleInput | UserUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput | UserUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type PositionCreateNestedOneWithoutUsersInput = {
    create?: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUsersInput
    connect?: PositionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCreatorInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type PositionUpdateOneWithoutUsersNestedInput = {
    create?: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PositionCreateOrConnectWithoutUsersInput
    upsert?: PositionUpsertWithoutUsersInput
    disconnect?: PositionWhereInput | boolean
    delete?: PositionWhereInput | boolean
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutUsersInput, PositionUpdateWithoutUsersInput>, PositionUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatorInput | UserUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatorInput | UserUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatorInput | UserUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput> | UserCreateWithoutCreatorInput[] | UserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatorInput | UserCreateOrConnectWithoutCreatorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatorInput | UserUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: UserCreateManyCreatorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatorInput | UserUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatorInput | UserUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OwnerCreateWithoutMinesInput = {
    ownerName: string
    contactName: string
    contactEmail: string
    contactPhone: string
  }

  export type OwnerUncheckedCreateWithoutMinesInput = {
    ownerId?: number
    ownerName: string
    contactName: string
    contactEmail: string
    contactPhone: string
  }

  export type OwnerCreateOrConnectWithoutMinesInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutMinesInput, OwnerUncheckedCreateWithoutMinesInput>
  }

  export type LargeSectionCreateWithoutMineInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionType?: SectionTypeCreateNestedOneWithoutLargeSectionsInput
    mediumSections?: MediumSectionCreateNestedManyWithoutLargeSectionInput
  }

  export type LargeSectionUncheckedCreateWithoutMineInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutLargeSectionInput
  }

  export type LargeSectionCreateOrConnectWithoutMineInput = {
    where: LargeSectionWhereUniqueInput
    create: XOR<LargeSectionCreateWithoutMineInput, LargeSectionUncheckedCreateWithoutMineInput>
  }

  export type LargeSectionCreateManyMineInputEnvelope = {
    data: LargeSectionCreateManyMineInput | LargeSectionCreateManyMineInput[]
    skipDuplicates?: boolean
  }

  export type OwnerUpsertWithoutMinesInput = {
    update: XOR<OwnerUpdateWithoutMinesInput, OwnerUncheckedUpdateWithoutMinesInput>
    create: XOR<OwnerCreateWithoutMinesInput, OwnerUncheckedCreateWithoutMinesInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutMinesInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutMinesInput, OwnerUncheckedUpdateWithoutMinesInput>
  }

  export type OwnerUpdateWithoutMinesInput = {
    ownerName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateWithoutMinesInput = {
    ownerId?: IntFieldUpdateOperationsInput | number
    ownerName?: StringFieldUpdateOperationsInput | string
    contactName?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
  }

  export type LargeSectionUpsertWithWhereUniqueWithoutMineInput = {
    where: LargeSectionWhereUniqueInput
    update: XOR<LargeSectionUpdateWithoutMineInput, LargeSectionUncheckedUpdateWithoutMineInput>
    create: XOR<LargeSectionCreateWithoutMineInput, LargeSectionUncheckedCreateWithoutMineInput>
  }

  export type LargeSectionUpdateWithWhereUniqueWithoutMineInput = {
    where: LargeSectionWhereUniqueInput
    data: XOR<LargeSectionUpdateWithoutMineInput, LargeSectionUncheckedUpdateWithoutMineInput>
  }

  export type LargeSectionUpdateManyWithWhereWithoutMineInput = {
    where: LargeSectionScalarWhereInput
    data: XOR<LargeSectionUpdateManyMutationInput, LargeSectionUncheckedUpdateManyWithoutMineInput>
  }

  export type LargeSectionScalarWhereInput = {
    AND?: LargeSectionScalarWhereInput | LargeSectionScalarWhereInput[]
    OR?: LargeSectionScalarWhereInput[]
    NOT?: LargeSectionScalarWhereInput | LargeSectionScalarWhereInput[]
    sectionId?: IntFilter<"LargeSection"> | number
    name?: StringFilter<"LargeSection"> | string
    description?: StringNullableFilter<"LargeSection"> | string | null
    area?: DecimalNullableFilter<"LargeSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"LargeSection"> | number | null
    insiderToId?: IntNullableFilter<"LargeSection"> | number | null
    createdAt?: DateTimeFilter<"LargeSection"> | Date | string
    updatedAt?: DateTimeFilter<"LargeSection"> | Date | string
  }

  export type MineCreateWithoutOwnerInput = {
    mineName: string
    locationLatitude: Decimal | DecimalJsLike | number | string
    locationLongitude: Decimal | DecimalJsLike | number | string
    address: string
    mineType: string
    productionCapacity: Decimal | DecimalJsLike | number | string
    operationalStatus: string
    startDate: Date | string
    endDate?: Date | string | null
    largeSections?: LargeSectionCreateNestedManyWithoutMineInput
  }

  export type MineUncheckedCreateWithoutOwnerInput = {
    mineId?: number
    mineName: string
    locationLatitude: Decimal | DecimalJsLike | number | string
    locationLongitude: Decimal | DecimalJsLike | number | string
    address: string
    mineType: string
    productionCapacity: Decimal | DecimalJsLike | number | string
    operationalStatus: string
    startDate: Date | string
    endDate?: Date | string | null
    largeSections?: LargeSectionUncheckedCreateNestedManyWithoutMineInput
  }

  export type MineCreateOrConnectWithoutOwnerInput = {
    where: MineWhereUniqueInput
    create: XOR<MineCreateWithoutOwnerInput, MineUncheckedCreateWithoutOwnerInput>
  }

  export type MineCreateManyOwnerInputEnvelope = {
    data: MineCreateManyOwnerInput | MineCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type MineUpsertWithWhereUniqueWithoutOwnerInput = {
    where: MineWhereUniqueInput
    update: XOR<MineUpdateWithoutOwnerInput, MineUncheckedUpdateWithoutOwnerInput>
    create: XOR<MineCreateWithoutOwnerInput, MineUncheckedCreateWithoutOwnerInput>
  }

  export type MineUpdateWithWhereUniqueWithoutOwnerInput = {
    where: MineWhereUniqueInput
    data: XOR<MineUpdateWithoutOwnerInput, MineUncheckedUpdateWithoutOwnerInput>
  }

  export type MineUpdateManyWithWhereWithoutOwnerInput = {
    where: MineScalarWhereInput
    data: XOR<MineUpdateManyMutationInput, MineUncheckedUpdateManyWithoutOwnerInput>
  }

  export type MineScalarWhereInput = {
    AND?: MineScalarWhereInput | MineScalarWhereInput[]
    OR?: MineScalarWhereInput[]
    NOT?: MineScalarWhereInput | MineScalarWhereInput[]
    mineId?: IntFilter<"Mine"> | number
    mineName?: StringFilter<"Mine"> | string
    locationLatitude?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    address?: StringFilter<"Mine"> | string
    ownerId?: IntFilter<"Mine"> | number
    mineType?: StringFilter<"Mine"> | string
    productionCapacity?: DecimalFilter<"Mine"> | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFilter<"Mine"> | string
    startDate?: DateTimeFilter<"Mine"> | Date | string
    endDate?: DateTimeNullableFilter<"Mine"> | Date | string | null
  }

  export type MineCreateWithoutLargeSectionsInput = {
    mineName: string
    locationLatitude: Decimal | DecimalJsLike | number | string
    locationLongitude: Decimal | DecimalJsLike | number | string
    address: string
    mineType: string
    productionCapacity: Decimal | DecimalJsLike | number | string
    operationalStatus: string
    startDate: Date | string
    endDate?: Date | string | null
    owner: OwnerCreateNestedOneWithoutMinesInput
  }

  export type MineUncheckedCreateWithoutLargeSectionsInput = {
    mineId?: number
    mineName: string
    locationLatitude: Decimal | DecimalJsLike | number | string
    locationLongitude: Decimal | DecimalJsLike | number | string
    address: string
    ownerId: number
    mineType: string
    productionCapacity: Decimal | DecimalJsLike | number | string
    operationalStatus: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type MineCreateOrConnectWithoutLargeSectionsInput = {
    where: MineWhereUniqueInput
    create: XOR<MineCreateWithoutLargeSectionsInput, MineUncheckedCreateWithoutLargeSectionsInput>
  }

  export type SectionTypeCreateWithoutLargeSectionsInput = {
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediumSections?: MediumSectionCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeUncheckedCreateWithoutLargeSectionsInput = {
    typeId?: number
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemUncheckedCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeCreateOrConnectWithoutLargeSectionsInput = {
    where: SectionTypeWhereUniqueInput
    create: XOR<SectionTypeCreateWithoutLargeSectionsInput, SectionTypeUncheckedCreateWithoutLargeSectionsInput>
  }

  export type MediumSectionCreateWithoutLargeSectionInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionType?: SectionTypeCreateNestedOneWithoutMediumSectionsInput
    smallSections?: SmallSectionCreateNestedManyWithoutMediumSectionInput
  }

  export type MediumSectionUncheckedCreateWithoutLargeSectionInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutMediumSectionInput
  }

  export type MediumSectionCreateOrConnectWithoutLargeSectionInput = {
    where: MediumSectionWhereUniqueInput
    create: XOR<MediumSectionCreateWithoutLargeSectionInput, MediumSectionUncheckedCreateWithoutLargeSectionInput>
  }

  export type MediumSectionCreateManyLargeSectionInputEnvelope = {
    data: MediumSectionCreateManyLargeSectionInput | MediumSectionCreateManyLargeSectionInput[]
    skipDuplicates?: boolean
  }

  export type MineUpsertWithoutLargeSectionsInput = {
    update: XOR<MineUpdateWithoutLargeSectionsInput, MineUncheckedUpdateWithoutLargeSectionsInput>
    create: XOR<MineCreateWithoutLargeSectionsInput, MineUncheckedCreateWithoutLargeSectionsInput>
    where?: MineWhereInput
  }

  export type MineUpdateToOneWithWhereWithoutLargeSectionsInput = {
    where?: MineWhereInput
    data: XOR<MineUpdateWithoutLargeSectionsInput, MineUncheckedUpdateWithoutLargeSectionsInput>
  }

  export type MineUpdateWithoutLargeSectionsInput = {
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: OwnerUpdateOneRequiredWithoutMinesNestedInput
  }

  export type MineUncheckedUpdateWithoutLargeSectionsInput = {
    mineId?: IntFieldUpdateOperationsInput | number
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SectionTypeUpsertWithoutLargeSectionsInput = {
    update: XOR<SectionTypeUpdateWithoutLargeSectionsInput, SectionTypeUncheckedUpdateWithoutLargeSectionsInput>
    create: XOR<SectionTypeCreateWithoutLargeSectionsInput, SectionTypeUncheckedCreateWithoutLargeSectionsInput>
    where?: SectionTypeWhereInput
  }

  export type SectionTypeUpdateToOneWithWhereWithoutLargeSectionsInput = {
    where?: SectionTypeWhereInput
    data: XOR<SectionTypeUpdateWithoutLargeSectionsInput, SectionTypeUncheckedUpdateWithoutLargeSectionsInput>
  }

  export type SectionTypeUpdateWithoutLargeSectionsInput = {
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediumSections?: MediumSectionUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUpdateManyWithoutSectionTypeNestedInput
  }

  export type SectionTypeUncheckedUpdateWithoutLargeSectionsInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUncheckedUpdateManyWithoutSectionTypeNestedInput
  }

  export type MediumSectionUpsertWithWhereUniqueWithoutLargeSectionInput = {
    where: MediumSectionWhereUniqueInput
    update: XOR<MediumSectionUpdateWithoutLargeSectionInput, MediumSectionUncheckedUpdateWithoutLargeSectionInput>
    create: XOR<MediumSectionCreateWithoutLargeSectionInput, MediumSectionUncheckedCreateWithoutLargeSectionInput>
  }

  export type MediumSectionUpdateWithWhereUniqueWithoutLargeSectionInput = {
    where: MediumSectionWhereUniqueInput
    data: XOR<MediumSectionUpdateWithoutLargeSectionInput, MediumSectionUncheckedUpdateWithoutLargeSectionInput>
  }

  export type MediumSectionUpdateManyWithWhereWithoutLargeSectionInput = {
    where: MediumSectionScalarWhereInput
    data: XOR<MediumSectionUpdateManyMutationInput, MediumSectionUncheckedUpdateManyWithoutLargeSectionInput>
  }

  export type MediumSectionScalarWhereInput = {
    AND?: MediumSectionScalarWhereInput | MediumSectionScalarWhereInput[]
    OR?: MediumSectionScalarWhereInput[]
    NOT?: MediumSectionScalarWhereInput | MediumSectionScalarWhereInput[]
    sectionId?: IntFilter<"MediumSection"> | number
    name?: StringFilter<"MediumSection"> | string
    description?: StringNullableFilter<"MediumSection"> | string | null
    area?: DecimalNullableFilter<"MediumSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"MediumSection"> | number | null
    insiderToId?: IntNullableFilter<"MediumSection"> | number | null
    createdAt?: DateTimeFilter<"MediumSection"> | Date | string
    updatedAt?: DateTimeFilter<"MediumSection"> | Date | string
  }

  export type LargeSectionCreateWithoutMediumSectionsInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mine?: MineCreateNestedOneWithoutLargeSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutLargeSectionsInput
  }

  export type LargeSectionUncheckedCreateWithoutMediumSectionsInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LargeSectionCreateOrConnectWithoutMediumSectionsInput = {
    where: LargeSectionWhereUniqueInput
    create: XOR<LargeSectionCreateWithoutMediumSectionsInput, LargeSectionUncheckedCreateWithoutMediumSectionsInput>
  }

  export type SectionTypeCreateWithoutMediumSectionsInput = {
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeUncheckedCreateWithoutMediumSectionsInput = {
    typeId?: number
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemUncheckedCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeCreateOrConnectWithoutMediumSectionsInput = {
    where: SectionTypeWhereUniqueInput
    create: XOR<SectionTypeCreateWithoutMediumSectionsInput, SectionTypeUncheckedCreateWithoutMediumSectionsInput>
  }

  export type SmallSectionCreateWithoutMediumSectionInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionType?: SectionTypeCreateNestedOneWithoutSmallSectionsInput
    microSections?: MicroSectionCreateNestedManyWithoutSmallSectionInput
  }

  export type SmallSectionUncheckedCreateWithoutMediumSectionInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSmallSectionInput
  }

  export type SmallSectionCreateOrConnectWithoutMediumSectionInput = {
    where: SmallSectionWhereUniqueInput
    create: XOR<SmallSectionCreateWithoutMediumSectionInput, SmallSectionUncheckedCreateWithoutMediumSectionInput>
  }

  export type SmallSectionCreateManyMediumSectionInputEnvelope = {
    data: SmallSectionCreateManyMediumSectionInput | SmallSectionCreateManyMediumSectionInput[]
    skipDuplicates?: boolean
  }

  export type LargeSectionUpsertWithoutMediumSectionsInput = {
    update: XOR<LargeSectionUpdateWithoutMediumSectionsInput, LargeSectionUncheckedUpdateWithoutMediumSectionsInput>
    create: XOR<LargeSectionCreateWithoutMediumSectionsInput, LargeSectionUncheckedCreateWithoutMediumSectionsInput>
    where?: LargeSectionWhereInput
  }

  export type LargeSectionUpdateToOneWithWhereWithoutMediumSectionsInput = {
    where?: LargeSectionWhereInput
    data: XOR<LargeSectionUpdateWithoutMediumSectionsInput, LargeSectionUncheckedUpdateWithoutMediumSectionsInput>
  }

  export type LargeSectionUpdateWithoutMediumSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mine?: MineUpdateOneWithoutLargeSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutLargeSectionsNestedInput
  }

  export type LargeSectionUncheckedUpdateWithoutMediumSectionsInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionTypeUpsertWithoutMediumSectionsInput = {
    update: XOR<SectionTypeUpdateWithoutMediumSectionsInput, SectionTypeUncheckedUpdateWithoutMediumSectionsInput>
    create: XOR<SectionTypeCreateWithoutMediumSectionsInput, SectionTypeUncheckedCreateWithoutMediumSectionsInput>
    where?: SectionTypeWhereInput
  }

  export type SectionTypeUpdateToOneWithWhereWithoutMediumSectionsInput = {
    where?: SectionTypeWhereInput
    data: XOR<SectionTypeUpdateWithoutMediumSectionsInput, SectionTypeUncheckedUpdateWithoutMediumSectionsInput>
  }

  export type SectionTypeUpdateWithoutMediumSectionsInput = {
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUpdateManyWithoutSectionTypeNestedInput
  }

  export type SectionTypeUncheckedUpdateWithoutMediumSectionsInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUncheckedUpdateManyWithoutSectionTypeNestedInput
  }

  export type SmallSectionUpsertWithWhereUniqueWithoutMediumSectionInput = {
    where: SmallSectionWhereUniqueInput
    update: XOR<SmallSectionUpdateWithoutMediumSectionInput, SmallSectionUncheckedUpdateWithoutMediumSectionInput>
    create: XOR<SmallSectionCreateWithoutMediumSectionInput, SmallSectionUncheckedCreateWithoutMediumSectionInput>
  }

  export type SmallSectionUpdateWithWhereUniqueWithoutMediumSectionInput = {
    where: SmallSectionWhereUniqueInput
    data: XOR<SmallSectionUpdateWithoutMediumSectionInput, SmallSectionUncheckedUpdateWithoutMediumSectionInput>
  }

  export type SmallSectionUpdateManyWithWhereWithoutMediumSectionInput = {
    where: SmallSectionScalarWhereInput
    data: XOR<SmallSectionUpdateManyMutationInput, SmallSectionUncheckedUpdateManyWithoutMediumSectionInput>
  }

  export type SmallSectionScalarWhereInput = {
    AND?: SmallSectionScalarWhereInput | SmallSectionScalarWhereInput[]
    OR?: SmallSectionScalarWhereInput[]
    NOT?: SmallSectionScalarWhereInput | SmallSectionScalarWhereInput[]
    sectionId?: IntFilter<"SmallSection"> | number
    name?: StringFilter<"SmallSection"> | string
    description?: StringNullableFilter<"SmallSection"> | string | null
    area?: DecimalNullableFilter<"SmallSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"SmallSection"> | number | null
    insiderToId?: IntNullableFilter<"SmallSection"> | number | null
    createdAt?: DateTimeFilter<"SmallSection"> | Date | string
    updatedAt?: DateTimeFilter<"SmallSection"> | Date | string
  }

  export type MediumSectionCreateWithoutSmallSectionsInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSection?: LargeSectionCreateNestedOneWithoutMediumSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutMediumSectionsInput
  }

  export type MediumSectionUncheckedCreateWithoutSmallSectionsInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediumSectionCreateOrConnectWithoutSmallSectionsInput = {
    where: MediumSectionWhereUniqueInput
    create: XOR<MediumSectionCreateWithoutSmallSectionsInput, MediumSectionUncheckedCreateWithoutSmallSectionsInput>
  }

  export type SectionTypeCreateWithoutSmallSectionsInput = {
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeUncheckedCreateWithoutSmallSectionsInput = {
    typeId?: number
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemUncheckedCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeCreateOrConnectWithoutSmallSectionsInput = {
    where: SectionTypeWhereUniqueInput
    create: XOR<SectionTypeCreateWithoutSmallSectionsInput, SectionTypeUncheckedCreateWithoutSmallSectionsInput>
  }

  export type MicroSectionCreateWithoutSmallSectionInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionType?: SectionTypeCreateNestedOneWithoutMicroSectionsInput
    unitSections?: UnitSectionCreateNestedManyWithoutMicroSectionInput
  }

  export type MicroSectionUncheckedCreateWithoutSmallSectionInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutMicroSectionInput
  }

  export type MicroSectionCreateOrConnectWithoutSmallSectionInput = {
    where: MicroSectionWhereUniqueInput
    create: XOR<MicroSectionCreateWithoutSmallSectionInput, MicroSectionUncheckedCreateWithoutSmallSectionInput>
  }

  export type MicroSectionCreateManySmallSectionInputEnvelope = {
    data: MicroSectionCreateManySmallSectionInput | MicroSectionCreateManySmallSectionInput[]
    skipDuplicates?: boolean
  }

  export type MediumSectionUpsertWithoutSmallSectionsInput = {
    update: XOR<MediumSectionUpdateWithoutSmallSectionsInput, MediumSectionUncheckedUpdateWithoutSmallSectionsInput>
    create: XOR<MediumSectionCreateWithoutSmallSectionsInput, MediumSectionUncheckedCreateWithoutSmallSectionsInput>
    where?: MediumSectionWhereInput
  }

  export type MediumSectionUpdateToOneWithWhereWithoutSmallSectionsInput = {
    where?: MediumSectionWhereInput
    data: XOR<MediumSectionUpdateWithoutSmallSectionsInput, MediumSectionUncheckedUpdateWithoutSmallSectionsInput>
  }

  export type MediumSectionUpdateWithoutSmallSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSection?: LargeSectionUpdateOneWithoutMediumSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutMediumSectionsNestedInput
  }

  export type MediumSectionUncheckedUpdateWithoutSmallSectionsInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionTypeUpsertWithoutSmallSectionsInput = {
    update: XOR<SectionTypeUpdateWithoutSmallSectionsInput, SectionTypeUncheckedUpdateWithoutSmallSectionsInput>
    create: XOR<SectionTypeCreateWithoutSmallSectionsInput, SectionTypeUncheckedCreateWithoutSmallSectionsInput>
    where?: SectionTypeWhereInput
  }

  export type SectionTypeUpdateToOneWithWhereWithoutSmallSectionsInput = {
    where?: SectionTypeWhereInput
    data: XOR<SectionTypeUpdateWithoutSmallSectionsInput, SectionTypeUncheckedUpdateWithoutSmallSectionsInput>
  }

  export type SectionTypeUpdateWithoutSmallSectionsInput = {
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUpdateManyWithoutSectionTypeNestedInput
  }

  export type SectionTypeUncheckedUpdateWithoutSmallSectionsInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUncheckedUpdateManyWithoutSectionTypeNestedInput
  }

  export type MicroSectionUpsertWithWhereUniqueWithoutSmallSectionInput = {
    where: MicroSectionWhereUniqueInput
    update: XOR<MicroSectionUpdateWithoutSmallSectionInput, MicroSectionUncheckedUpdateWithoutSmallSectionInput>
    create: XOR<MicroSectionCreateWithoutSmallSectionInput, MicroSectionUncheckedCreateWithoutSmallSectionInput>
  }

  export type MicroSectionUpdateWithWhereUniqueWithoutSmallSectionInput = {
    where: MicroSectionWhereUniqueInput
    data: XOR<MicroSectionUpdateWithoutSmallSectionInput, MicroSectionUncheckedUpdateWithoutSmallSectionInput>
  }

  export type MicroSectionUpdateManyWithWhereWithoutSmallSectionInput = {
    where: MicroSectionScalarWhereInput
    data: XOR<MicroSectionUpdateManyMutationInput, MicroSectionUncheckedUpdateManyWithoutSmallSectionInput>
  }

  export type MicroSectionScalarWhereInput = {
    AND?: MicroSectionScalarWhereInput | MicroSectionScalarWhereInput[]
    OR?: MicroSectionScalarWhereInput[]
    NOT?: MicroSectionScalarWhereInput | MicroSectionScalarWhereInput[]
    sectionId?: IntFilter<"MicroSection"> | number
    name?: StringFilter<"MicroSection"> | string
    description?: StringNullableFilter<"MicroSection"> | string | null
    area?: DecimalNullableFilter<"MicroSection"> | Decimal | DecimalJsLike | number | string | null
    typeId?: IntNullableFilter<"MicroSection"> | number | null
    insiderToId?: IntNullableFilter<"MicroSection"> | number | null
    createdAt?: DateTimeFilter<"MicroSection"> | Date | string
    updatedAt?: DateTimeFilter<"MicroSection"> | Date | string
  }

  export type SmallSectionCreateWithoutMicroSectionsInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediumSection?: MediumSectionCreateNestedOneWithoutSmallSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutSmallSectionsInput
  }

  export type SmallSectionUncheckedCreateWithoutMicroSectionsInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmallSectionCreateOrConnectWithoutMicroSectionsInput = {
    where: SmallSectionWhereUniqueInput
    create: XOR<SmallSectionCreateWithoutMicroSectionsInput, SmallSectionUncheckedCreateWithoutMicroSectionsInput>
  }

  export type SectionTypeCreateWithoutMicroSectionsInput = {
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeUncheckedCreateWithoutMicroSectionsInput = {
    typeId?: number
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemUncheckedCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeCreateOrConnectWithoutMicroSectionsInput = {
    where: SectionTypeWhereUniqueInput
    create: XOR<SectionTypeCreateWithoutMicroSectionsInput, SectionTypeUncheckedCreateWithoutMicroSectionsInput>
  }

  export type UnitSectionCreateWithoutMicroSectionInput = {
    name: string
    description?: string | null
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sectionType?: SectionTypeCreateNestedOneWithoutUnitSectionsInput
  }

  export type UnitSectionUncheckedCreateWithoutMicroSectionInput = {
    unitId?: number
    name: string
    description?: string | null
    model?: string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitSectionCreateOrConnectWithoutMicroSectionInput = {
    where: UnitSectionWhereUniqueInput
    create: XOR<UnitSectionCreateWithoutMicroSectionInput, UnitSectionUncheckedCreateWithoutMicroSectionInput>
  }

  export type UnitSectionCreateManyMicroSectionInputEnvelope = {
    data: UnitSectionCreateManyMicroSectionInput | UnitSectionCreateManyMicroSectionInput[]
    skipDuplicates?: boolean
  }

  export type SmallSectionUpsertWithoutMicroSectionsInput = {
    update: XOR<SmallSectionUpdateWithoutMicroSectionsInput, SmallSectionUncheckedUpdateWithoutMicroSectionsInput>
    create: XOR<SmallSectionCreateWithoutMicroSectionsInput, SmallSectionUncheckedCreateWithoutMicroSectionsInput>
    where?: SmallSectionWhereInput
  }

  export type SmallSectionUpdateToOneWithWhereWithoutMicroSectionsInput = {
    where?: SmallSectionWhereInput
    data: XOR<SmallSectionUpdateWithoutMicroSectionsInput, SmallSectionUncheckedUpdateWithoutMicroSectionsInput>
  }

  export type SmallSectionUpdateWithoutMicroSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediumSection?: MediumSectionUpdateOneWithoutSmallSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutSmallSectionsNestedInput
  }

  export type SmallSectionUncheckedUpdateWithoutMicroSectionsInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionTypeUpsertWithoutMicroSectionsInput = {
    update: XOR<SectionTypeUpdateWithoutMicroSectionsInput, SectionTypeUncheckedUpdateWithoutMicroSectionsInput>
    create: XOR<SectionTypeCreateWithoutMicroSectionsInput, SectionTypeUncheckedCreateWithoutMicroSectionsInput>
    where?: SectionTypeWhereInput
  }

  export type SectionTypeUpdateToOneWithWhereWithoutMicroSectionsInput = {
    where?: SectionTypeWhereInput
    data: XOR<SectionTypeUpdateWithoutMicroSectionsInput, SectionTypeUncheckedUpdateWithoutMicroSectionsInput>
  }

  export type SectionTypeUpdateWithoutMicroSectionsInput = {
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUpdateManyWithoutSectionTypeNestedInput
  }

  export type SectionTypeUncheckedUpdateWithoutMicroSectionsInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUncheckedUpdateManyWithoutSectionTypeNestedInput
  }

  export type UnitSectionUpsertWithWhereUniqueWithoutMicroSectionInput = {
    where: UnitSectionWhereUniqueInput
    update: XOR<UnitSectionUpdateWithoutMicroSectionInput, UnitSectionUncheckedUpdateWithoutMicroSectionInput>
    create: XOR<UnitSectionCreateWithoutMicroSectionInput, UnitSectionUncheckedCreateWithoutMicroSectionInput>
  }

  export type UnitSectionUpdateWithWhereUniqueWithoutMicroSectionInput = {
    where: UnitSectionWhereUniqueInput
    data: XOR<UnitSectionUpdateWithoutMicroSectionInput, UnitSectionUncheckedUpdateWithoutMicroSectionInput>
  }

  export type UnitSectionUpdateManyWithWhereWithoutMicroSectionInput = {
    where: UnitSectionScalarWhereInput
    data: XOR<UnitSectionUpdateManyMutationInput, UnitSectionUncheckedUpdateManyWithoutMicroSectionInput>
  }

  export type UnitSectionScalarWhereInput = {
    AND?: UnitSectionScalarWhereInput | UnitSectionScalarWhereInput[]
    OR?: UnitSectionScalarWhereInput[]
    NOT?: UnitSectionScalarWhereInput | UnitSectionScalarWhereInput[]
    unitId?: IntFilter<"UnitSection"> | number
    name?: StringFilter<"UnitSection"> | string
    description?: StringNullableFilter<"UnitSection"> | string | null
    model?: StringNullableFilter<"UnitSection"> | string | null
    typeId?: IntNullableFilter<"UnitSection"> | number | null
    insiderToId?: IntNullableFilter<"UnitSection"> | number | null
    createdAt?: DateTimeFilter<"UnitSection"> | Date | string
    updatedAt?: DateTimeFilter<"UnitSection"> | Date | string
  }

  export type MicroSectionCreateWithoutUnitSectionsInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    smallSection?: SmallSectionCreateNestedOneWithoutMicroSectionsInput
    sectionType?: SectionTypeCreateNestedOneWithoutMicroSectionsInput
  }

  export type MicroSectionUncheckedCreateWithoutUnitSectionsInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MicroSectionCreateOrConnectWithoutUnitSectionsInput = {
    where: MicroSectionWhereUniqueInput
    create: XOR<MicroSectionCreateWithoutUnitSectionsInput, MicroSectionUncheckedCreateWithoutUnitSectionsInput>
  }

  export type SectionTypeCreateWithoutUnitSectionsInput = {
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeUncheckedCreateWithoutUnitSectionsInput = {
    typeId?: number
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    sectionItems?: SectionItemUncheckedCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeCreateOrConnectWithoutUnitSectionsInput = {
    where: SectionTypeWhereUniqueInput
    create: XOR<SectionTypeCreateWithoutUnitSectionsInput, SectionTypeUncheckedCreateWithoutUnitSectionsInput>
  }

  export type MicroSectionUpsertWithoutUnitSectionsInput = {
    update: XOR<MicroSectionUpdateWithoutUnitSectionsInput, MicroSectionUncheckedUpdateWithoutUnitSectionsInput>
    create: XOR<MicroSectionCreateWithoutUnitSectionsInput, MicroSectionUncheckedCreateWithoutUnitSectionsInput>
    where?: MicroSectionWhereInput
  }

  export type MicroSectionUpdateToOneWithWhereWithoutUnitSectionsInput = {
    where?: MicroSectionWhereInput
    data: XOR<MicroSectionUpdateWithoutUnitSectionsInput, MicroSectionUncheckedUpdateWithoutUnitSectionsInput>
  }

  export type MicroSectionUpdateWithoutUnitSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smallSection?: SmallSectionUpdateOneWithoutMicroSectionsNestedInput
    sectionType?: SectionTypeUpdateOneWithoutMicroSectionsNestedInput
  }

  export type MicroSectionUncheckedUpdateWithoutUnitSectionsInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionTypeUpsertWithoutUnitSectionsInput = {
    update: XOR<SectionTypeUpdateWithoutUnitSectionsInput, SectionTypeUncheckedUpdateWithoutUnitSectionsInput>
    create: XOR<SectionTypeCreateWithoutUnitSectionsInput, SectionTypeUncheckedCreateWithoutUnitSectionsInput>
    where?: SectionTypeWhereInput
  }

  export type SectionTypeUpdateToOneWithWhereWithoutUnitSectionsInput = {
    where?: SectionTypeWhereInput
    data: XOR<SectionTypeUpdateWithoutUnitSectionsInput, SectionTypeUncheckedUpdateWithoutUnitSectionsInput>
  }

  export type SectionTypeUpdateWithoutUnitSectionsInput = {
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUpdateManyWithoutSectionTypeNestedInput
  }

  export type SectionTypeUncheckedUpdateWithoutUnitSectionsInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    sectionItems?: SectionItemUncheckedUpdateManyWithoutSectionTypeNestedInput
  }

  export type LargeSectionCreateWithoutSectionTypeInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mine?: MineCreateNestedOneWithoutLargeSectionsInput
    mediumSections?: MediumSectionCreateNestedManyWithoutLargeSectionInput
  }

  export type LargeSectionUncheckedCreateWithoutSectionTypeInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutLargeSectionInput
  }

  export type LargeSectionCreateOrConnectWithoutSectionTypeInput = {
    where: LargeSectionWhereUniqueInput
    create: XOR<LargeSectionCreateWithoutSectionTypeInput, LargeSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type LargeSectionCreateManySectionTypeInputEnvelope = {
    data: LargeSectionCreateManySectionTypeInput | LargeSectionCreateManySectionTypeInput[]
    skipDuplicates?: boolean
  }

  export type MediumSectionCreateWithoutSectionTypeInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSection?: LargeSectionCreateNestedOneWithoutMediumSectionsInput
    smallSections?: SmallSectionCreateNestedManyWithoutMediumSectionInput
  }

  export type MediumSectionUncheckedCreateWithoutSectionTypeInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutMediumSectionInput
  }

  export type MediumSectionCreateOrConnectWithoutSectionTypeInput = {
    where: MediumSectionWhereUniqueInput
    create: XOR<MediumSectionCreateWithoutSectionTypeInput, MediumSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type MediumSectionCreateManySectionTypeInputEnvelope = {
    data: MediumSectionCreateManySectionTypeInput | MediumSectionCreateManySectionTypeInput[]
    skipDuplicates?: boolean
  }

  export type SmallSectionCreateWithoutSectionTypeInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mediumSection?: MediumSectionCreateNestedOneWithoutSmallSectionsInput
    microSections?: MicroSectionCreateNestedManyWithoutSmallSectionInput
  }

  export type SmallSectionUncheckedCreateWithoutSectionTypeInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSmallSectionInput
  }

  export type SmallSectionCreateOrConnectWithoutSectionTypeInput = {
    where: SmallSectionWhereUniqueInput
    create: XOR<SmallSectionCreateWithoutSectionTypeInput, SmallSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type SmallSectionCreateManySectionTypeInputEnvelope = {
    data: SmallSectionCreateManySectionTypeInput | SmallSectionCreateManySectionTypeInput[]
    skipDuplicates?: boolean
  }

  export type MicroSectionCreateWithoutSectionTypeInput = {
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    smallSection?: SmallSectionCreateNestedOneWithoutMicroSectionsInput
    unitSections?: UnitSectionCreateNestedManyWithoutMicroSectionInput
  }

  export type MicroSectionUncheckedCreateWithoutSectionTypeInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutMicroSectionInput
  }

  export type MicroSectionCreateOrConnectWithoutSectionTypeInput = {
    where: MicroSectionWhereUniqueInput
    create: XOR<MicroSectionCreateWithoutSectionTypeInput, MicroSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type MicroSectionCreateManySectionTypeInputEnvelope = {
    data: MicroSectionCreateManySectionTypeInput | MicroSectionCreateManySectionTypeInput[]
    skipDuplicates?: boolean
  }

  export type UnitSectionCreateWithoutSectionTypeInput = {
    name: string
    description?: string | null
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    microSection?: MicroSectionCreateNestedOneWithoutUnitSectionsInput
  }

  export type UnitSectionUncheckedCreateWithoutSectionTypeInput = {
    unitId?: number
    name: string
    description?: string | null
    model?: string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitSectionCreateOrConnectWithoutSectionTypeInput = {
    where: UnitSectionWhereUniqueInput
    create: XOR<UnitSectionCreateWithoutSectionTypeInput, UnitSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type UnitSectionCreateManySectionTypeInputEnvelope = {
    data: UnitSectionCreateManySectionTypeInput | UnitSectionCreateManySectionTypeInput[]
    skipDuplicates?: boolean
  }

  export type SectionItemCreateWithoutSectionTypeInput = {
    itemName: string
  }

  export type SectionItemUncheckedCreateWithoutSectionTypeInput = {
    itemId?: number
    itemName: string
  }

  export type SectionItemCreateOrConnectWithoutSectionTypeInput = {
    where: SectionItemWhereUniqueInput
    create: XOR<SectionItemCreateWithoutSectionTypeInput, SectionItemUncheckedCreateWithoutSectionTypeInput>
  }

  export type SectionItemCreateManySectionTypeInputEnvelope = {
    data: SectionItemCreateManySectionTypeInput | SectionItemCreateManySectionTypeInput[]
    skipDuplicates?: boolean
  }

  export type LargeSectionUpsertWithWhereUniqueWithoutSectionTypeInput = {
    where: LargeSectionWhereUniqueInput
    update: XOR<LargeSectionUpdateWithoutSectionTypeInput, LargeSectionUncheckedUpdateWithoutSectionTypeInput>
    create: XOR<LargeSectionCreateWithoutSectionTypeInput, LargeSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type LargeSectionUpdateWithWhereUniqueWithoutSectionTypeInput = {
    where: LargeSectionWhereUniqueInput
    data: XOR<LargeSectionUpdateWithoutSectionTypeInput, LargeSectionUncheckedUpdateWithoutSectionTypeInput>
  }

  export type LargeSectionUpdateManyWithWhereWithoutSectionTypeInput = {
    where: LargeSectionScalarWhereInput
    data: XOR<LargeSectionUpdateManyMutationInput, LargeSectionUncheckedUpdateManyWithoutSectionTypeInput>
  }

  export type MediumSectionUpsertWithWhereUniqueWithoutSectionTypeInput = {
    where: MediumSectionWhereUniqueInput
    update: XOR<MediumSectionUpdateWithoutSectionTypeInput, MediumSectionUncheckedUpdateWithoutSectionTypeInput>
    create: XOR<MediumSectionCreateWithoutSectionTypeInput, MediumSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type MediumSectionUpdateWithWhereUniqueWithoutSectionTypeInput = {
    where: MediumSectionWhereUniqueInput
    data: XOR<MediumSectionUpdateWithoutSectionTypeInput, MediumSectionUncheckedUpdateWithoutSectionTypeInput>
  }

  export type MediumSectionUpdateManyWithWhereWithoutSectionTypeInput = {
    where: MediumSectionScalarWhereInput
    data: XOR<MediumSectionUpdateManyMutationInput, MediumSectionUncheckedUpdateManyWithoutSectionTypeInput>
  }

  export type SmallSectionUpsertWithWhereUniqueWithoutSectionTypeInput = {
    where: SmallSectionWhereUniqueInput
    update: XOR<SmallSectionUpdateWithoutSectionTypeInput, SmallSectionUncheckedUpdateWithoutSectionTypeInput>
    create: XOR<SmallSectionCreateWithoutSectionTypeInput, SmallSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type SmallSectionUpdateWithWhereUniqueWithoutSectionTypeInput = {
    where: SmallSectionWhereUniqueInput
    data: XOR<SmallSectionUpdateWithoutSectionTypeInput, SmallSectionUncheckedUpdateWithoutSectionTypeInput>
  }

  export type SmallSectionUpdateManyWithWhereWithoutSectionTypeInput = {
    where: SmallSectionScalarWhereInput
    data: XOR<SmallSectionUpdateManyMutationInput, SmallSectionUncheckedUpdateManyWithoutSectionTypeInput>
  }

  export type MicroSectionUpsertWithWhereUniqueWithoutSectionTypeInput = {
    where: MicroSectionWhereUniqueInput
    update: XOR<MicroSectionUpdateWithoutSectionTypeInput, MicroSectionUncheckedUpdateWithoutSectionTypeInput>
    create: XOR<MicroSectionCreateWithoutSectionTypeInput, MicroSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type MicroSectionUpdateWithWhereUniqueWithoutSectionTypeInput = {
    where: MicroSectionWhereUniqueInput
    data: XOR<MicroSectionUpdateWithoutSectionTypeInput, MicroSectionUncheckedUpdateWithoutSectionTypeInput>
  }

  export type MicroSectionUpdateManyWithWhereWithoutSectionTypeInput = {
    where: MicroSectionScalarWhereInput
    data: XOR<MicroSectionUpdateManyMutationInput, MicroSectionUncheckedUpdateManyWithoutSectionTypeInput>
  }

  export type UnitSectionUpsertWithWhereUniqueWithoutSectionTypeInput = {
    where: UnitSectionWhereUniqueInput
    update: XOR<UnitSectionUpdateWithoutSectionTypeInput, UnitSectionUncheckedUpdateWithoutSectionTypeInput>
    create: XOR<UnitSectionCreateWithoutSectionTypeInput, UnitSectionUncheckedCreateWithoutSectionTypeInput>
  }

  export type UnitSectionUpdateWithWhereUniqueWithoutSectionTypeInput = {
    where: UnitSectionWhereUniqueInput
    data: XOR<UnitSectionUpdateWithoutSectionTypeInput, UnitSectionUncheckedUpdateWithoutSectionTypeInput>
  }

  export type UnitSectionUpdateManyWithWhereWithoutSectionTypeInput = {
    where: UnitSectionScalarWhereInput
    data: XOR<UnitSectionUpdateManyMutationInput, UnitSectionUncheckedUpdateManyWithoutSectionTypeInput>
  }

  export type SectionItemUpsertWithWhereUniqueWithoutSectionTypeInput = {
    where: SectionItemWhereUniqueInput
    update: XOR<SectionItemUpdateWithoutSectionTypeInput, SectionItemUncheckedUpdateWithoutSectionTypeInput>
    create: XOR<SectionItemCreateWithoutSectionTypeInput, SectionItemUncheckedCreateWithoutSectionTypeInput>
  }

  export type SectionItemUpdateWithWhereUniqueWithoutSectionTypeInput = {
    where: SectionItemWhereUniqueInput
    data: XOR<SectionItemUpdateWithoutSectionTypeInput, SectionItemUncheckedUpdateWithoutSectionTypeInput>
  }

  export type SectionItemUpdateManyWithWhereWithoutSectionTypeInput = {
    where: SectionItemScalarWhereInput
    data: XOR<SectionItemUpdateManyMutationInput, SectionItemUncheckedUpdateManyWithoutSectionTypeInput>
  }

  export type SectionItemScalarWhereInput = {
    AND?: SectionItemScalarWhereInput | SectionItemScalarWhereInput[]
    OR?: SectionItemScalarWhereInput[]
    NOT?: SectionItemScalarWhereInput | SectionItemScalarWhereInput[]
    itemId?: IntFilter<"SectionItem"> | number
    typeId?: IntFilter<"SectionItem"> | number
    itemName?: StringFilter<"SectionItem"> | string
  }

  export type SectionTypeCreateWithoutSectionItemsInput = {
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeUncheckedCreateWithoutSectionItemsInput = {
    typeId?: number
    scaleLevel: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    largeSections?: LargeSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    mediumSections?: MediumSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    smallSections?: SmallSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    microSections?: MicroSectionUncheckedCreateNestedManyWithoutSectionTypeInput
    unitSections?: UnitSectionUncheckedCreateNestedManyWithoutSectionTypeInput
  }

  export type SectionTypeCreateOrConnectWithoutSectionItemsInput = {
    where: SectionTypeWhereUniqueInput
    create: XOR<SectionTypeCreateWithoutSectionItemsInput, SectionTypeUncheckedCreateWithoutSectionItemsInput>
  }

  export type SectionTypeUpsertWithoutSectionItemsInput = {
    update: XOR<SectionTypeUpdateWithoutSectionItemsInput, SectionTypeUncheckedUpdateWithoutSectionItemsInput>
    create: XOR<SectionTypeCreateWithoutSectionItemsInput, SectionTypeUncheckedCreateWithoutSectionItemsInput>
    where?: SectionTypeWhereInput
  }

  export type SectionTypeUpdateToOneWithWhereWithoutSectionItemsInput = {
    where?: SectionTypeWhereInput
    data: XOR<SectionTypeUpdateWithoutSectionItemsInput, SectionTypeUncheckedUpdateWithoutSectionItemsInput>
  }

  export type SectionTypeUpdateWithoutSectionItemsInput = {
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUpdateManyWithoutSectionTypeNestedInput
  }

  export type SectionTypeUncheckedUpdateWithoutSectionItemsInput = {
    typeId?: IntFieldUpdateOperationsInput | number
    scaleLevel?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSections?: LargeSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    smallSections?: SmallSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    microSections?: MicroSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
    unitSections?: UnitSectionUncheckedUpdateManyWithoutSectionTypeNestedInput
  }

  export type UserCreateWithoutPositionInput = {
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: RoleCreateNestedOneWithoutUsersInput
    Creator?: UserCreateNestedOneWithoutCreatedUsersInput
    CreatedUsers?: UserCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutPositionInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    userRoleId: number
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
    CreatedUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutPositionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserCreateManyPositionInputEnvelope = {
    data: UserCreateManyPositionInput | UserCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
    create: XOR<UserCreateWithoutPositionInput, UserUncheckedCreateWithoutPositionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPositionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPositionInput, UserUncheckedUpdateWithoutPositionInput>
  }

  export type UserUpdateManyWithWhereWithoutPositionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPositionInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    userRoleId?: IntFilter<"User"> | number
    positionId?: IntNullableFilter<"User"> | number | null
    isActive?: BoolFilter<"User"> | boolean
    profileImage?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: IntNullableFilter<"User"> | number | null
  }

  export type UserCreateWithoutUserRoleInput = {
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Position?: PositionCreateNestedOneWithoutUsersInput
    Creator?: UserCreateNestedOneWithoutCreatedUsersInput
    CreatedUsers?: UserCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutUserRoleInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    positionId?: number | null
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
    CreatedUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type UserCreateManyUserRoleInputEnvelope = {
    data: UserCreateManyUserRoleInput | UserCreateManyUserRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutUserRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserRoleInput>
  }

  export type RoleCreateWithoutUsersInput = {
    roleName: string
    description?: string | null
    permissions: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    roleId?: number
    roleName: string
    description?: string | null
    permissions: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type PositionCreateWithoutUsersInput = {
    positionName: string
    description: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responsibilities: JsonNullValueInput | InputJsonValue
  }

  export type PositionUncheckedCreateWithoutUsersInput = {
    positionId?: number
    positionName: string
    description: string
    isActive: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responsibilities: JsonNullValueInput | InputJsonValue
  }

  export type PositionCreateOrConnectWithoutUsersInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutCreatedUsersInput = {
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: RoleCreateNestedOneWithoutUsersInput
    Position?: PositionCreateNestedOneWithoutUsersInput
    Creator?: UserCreateNestedOneWithoutCreatedUsersInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    userRoleId: number
    positionId?: number | null
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutCreatorInput = {
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRole: RoleCreateNestedOneWithoutUsersInput
    Position?: PositionCreateNestedOneWithoutUsersInput
    CreatedUsers?: UserCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutCreatorInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    userRoleId: number
    positionId?: number | null
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CreatedUsers?: UserUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput>
  }

  export type UserCreateManyCreatorInputEnvelope = {
    data: UserCreateManyCreatorInput | UserCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUpsertWithoutUsersInput = {
    update: XOR<PositionUpdateWithoutUsersInput, PositionUncheckedUpdateWithoutUsersInput>
    create: XOR<PositionCreateWithoutUsersInput, PositionUncheckedCreateWithoutUsersInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutUsersInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutUsersInput, PositionUncheckedUpdateWithoutUsersInput>
  }

  export type PositionUpdateWithoutUsersInput = {
    positionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibilities?: JsonNullValueInput | InputJsonValue
  }

  export type PositionUncheckedUpdateWithoutUsersInput = {
    positionId?: IntFieldUpdateOperationsInput | number
    positionName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsibilities?: JsonNullValueInput | InputJsonValue
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: RoleUpdateOneRequiredWithoutUsersNestedInput
    Position?: PositionUpdateOneWithoutUsersNestedInput
    Creator?: UserUpdateOneWithoutCreatedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    positionId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithWhereUniqueWithoutCreatorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatorInput, UserUncheckedUpdateWithoutCreatorInput>
    create: XOR<UserCreateWithoutCreatorInput, UserUncheckedCreateWithoutCreatorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatorInput, UserUncheckedUpdateWithoutCreatorInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatorInput>
  }

  export type LargeSectionCreateManyMineInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LargeSectionUpdateWithoutMineInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionType?: SectionTypeUpdateOneWithoutLargeSectionsNestedInput
    mediumSections?: MediumSectionUpdateManyWithoutLargeSectionNestedInput
  }

  export type LargeSectionUncheckedUpdateWithoutMineInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutLargeSectionNestedInput
  }

  export type LargeSectionUncheckedUpdateManyWithoutMineInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MineCreateManyOwnerInput = {
    mineId?: number
    mineName: string
    locationLatitude: Decimal | DecimalJsLike | number | string
    locationLongitude: Decimal | DecimalJsLike | number | string
    address: string
    mineType: string
    productionCapacity: Decimal | DecimalJsLike | number | string
    operationalStatus: string
    startDate: Date | string
    endDate?: Date | string | null
  }

  export type MineUpdateWithoutOwnerInput = {
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    largeSections?: LargeSectionUpdateManyWithoutMineNestedInput
  }

  export type MineUncheckedUpdateWithoutOwnerInput = {
    mineId?: IntFieldUpdateOperationsInput | number
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    largeSections?: LargeSectionUncheckedUpdateManyWithoutMineNestedInput
  }

  export type MineUncheckedUpdateManyWithoutOwnerInput = {
    mineId?: IntFieldUpdateOperationsInput | number
    mineName?: StringFieldUpdateOperationsInput | string
    locationLatitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    locationLongitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: StringFieldUpdateOperationsInput | string
    mineType?: StringFieldUpdateOperationsInput | string
    productionCapacity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    operationalStatus?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MediumSectionCreateManyLargeSectionInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediumSectionUpdateWithoutLargeSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionType?: SectionTypeUpdateOneWithoutMediumSectionsNestedInput
    smallSections?: SmallSectionUpdateManyWithoutMediumSectionNestedInput
  }

  export type MediumSectionUncheckedUpdateWithoutLargeSectionInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smallSections?: SmallSectionUncheckedUpdateManyWithoutMediumSectionNestedInput
  }

  export type MediumSectionUncheckedUpdateManyWithoutLargeSectionInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmallSectionCreateManyMediumSectionInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmallSectionUpdateWithoutMediumSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionType?: SectionTypeUpdateOneWithoutSmallSectionsNestedInput
    microSections?: MicroSectionUpdateManyWithoutSmallSectionNestedInput
  }

  export type SmallSectionUncheckedUpdateWithoutMediumSectionInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microSections?: MicroSectionUncheckedUpdateManyWithoutSmallSectionNestedInput
  }

  export type SmallSectionUncheckedUpdateManyWithoutMediumSectionInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MicroSectionCreateManySmallSectionInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MicroSectionUpdateWithoutSmallSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionType?: SectionTypeUpdateOneWithoutMicroSectionsNestedInput
    unitSections?: UnitSectionUpdateManyWithoutMicroSectionNestedInput
  }

  export type MicroSectionUncheckedUpdateWithoutSmallSectionInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitSections?: UnitSectionUncheckedUpdateManyWithoutMicroSectionNestedInput
  }

  export type MicroSectionUncheckedUpdateManyWithoutSmallSectionInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitSectionCreateManyMicroSectionInput = {
    unitId?: number
    name: string
    description?: string | null
    model?: string | null
    typeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitSectionUpdateWithoutMicroSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sectionType?: SectionTypeUpdateOneWithoutUnitSectionsNestedInput
  }

  export type UnitSectionUncheckedUpdateWithoutMicroSectionInput = {
    unitId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitSectionUncheckedUpdateManyWithoutMicroSectionInput = {
    unitId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LargeSectionCreateManySectionTypeInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediumSectionCreateManySectionTypeInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmallSectionCreateManySectionTypeInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MicroSectionCreateManySectionTypeInput = {
    sectionId?: number
    name: string
    description?: string | null
    area?: Decimal | DecimalJsLike | number | string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitSectionCreateManySectionTypeInput = {
    unitId?: number
    name: string
    description?: string | null
    model?: string | null
    insiderToId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectionItemCreateManySectionTypeInput = {
    itemId?: number
    itemName: string
  }

  export type LargeSectionUpdateWithoutSectionTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mine?: MineUpdateOneWithoutLargeSectionsNestedInput
    mediumSections?: MediumSectionUpdateManyWithoutLargeSectionNestedInput
  }

  export type LargeSectionUncheckedUpdateWithoutSectionTypeInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediumSections?: MediumSectionUncheckedUpdateManyWithoutLargeSectionNestedInput
  }

  export type LargeSectionUncheckedUpdateManyWithoutSectionTypeInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediumSectionUpdateWithoutSectionTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    largeSection?: LargeSectionUpdateOneWithoutMediumSectionsNestedInput
    smallSections?: SmallSectionUpdateManyWithoutMediumSectionNestedInput
  }

  export type MediumSectionUncheckedUpdateWithoutSectionTypeInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smallSections?: SmallSectionUncheckedUpdateManyWithoutMediumSectionNestedInput
  }

  export type MediumSectionUncheckedUpdateManyWithoutSectionTypeInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmallSectionUpdateWithoutSectionTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediumSection?: MediumSectionUpdateOneWithoutSmallSectionsNestedInput
    microSections?: MicroSectionUpdateManyWithoutSmallSectionNestedInput
  }

  export type SmallSectionUncheckedUpdateWithoutSectionTypeInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microSections?: MicroSectionUncheckedUpdateManyWithoutSmallSectionNestedInput
  }

  export type SmallSectionUncheckedUpdateManyWithoutSectionTypeInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MicroSectionUpdateWithoutSectionTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    smallSection?: SmallSectionUpdateOneWithoutMicroSectionsNestedInput
    unitSections?: UnitSectionUpdateManyWithoutMicroSectionNestedInput
  }

  export type MicroSectionUncheckedUpdateWithoutSectionTypeInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unitSections?: UnitSectionUncheckedUpdateManyWithoutMicroSectionNestedInput
  }

  export type MicroSectionUncheckedUpdateManyWithoutSectionTypeInput = {
    sectionId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitSectionUpdateWithoutSectionTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    microSection?: MicroSectionUpdateOneWithoutUnitSectionsNestedInput
  }

  export type UnitSectionUncheckedUpdateWithoutSectionTypeInput = {
    unitId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitSectionUncheckedUpdateManyWithoutSectionTypeInput = {
    unitId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    insiderToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionItemUpdateWithoutSectionTypeInput = {
    itemName?: StringFieldUpdateOperationsInput | string
  }

  export type SectionItemUncheckedUpdateWithoutSectionTypeInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
  }

  export type SectionItemUncheckedUpdateManyWithoutSectionTypeInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    itemName?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyPositionInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    userRoleId: number
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type UserUpdateWithoutPositionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: RoleUpdateOneRequiredWithoutUsersNestedInput
    Creator?: UserUpdateOneWithoutCreatedUsersNestedInput
    CreatedUsers?: UserUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutPositionInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    CreatedUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPositionInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyUserRoleInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    positionId?: number | null
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type UserUpdateWithoutUserRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Position?: PositionUpdateOneWithoutUsersNestedInput
    Creator?: UserUpdateOneWithoutCreatedUsersNestedInput
    CreatedUsers?: UserUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    positionId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    CreatedUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    positionId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyCreatorInput = {
    userId?: number
    username: string
    email: string
    phone?: string | null
    passwordHash: string
    salt: string
    userRoleId: number
    positionId?: number | null
    isActive?: boolean
    profileImage?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCreatorInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRole?: RoleUpdateOneRequiredWithoutUsersNestedInput
    Position?: PositionUpdateOneWithoutUsersNestedInput
    CreatedUsers?: UserUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatorInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    positionId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedUsers?: UserUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatorInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    userRoleId?: IntFieldUpdateOperationsInput | number
    positionId?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MineCountOutputTypeDefaultArgs instead
     */
    export type MineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OwnerCountOutputTypeDefaultArgs instead
     */
    export type OwnerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OwnerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LargeSectionCountOutputTypeDefaultArgs instead
     */
    export type LargeSectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LargeSectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediumSectionCountOutputTypeDefaultArgs instead
     */
    export type MediumSectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediumSectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SmallSectionCountOutputTypeDefaultArgs instead
     */
    export type SmallSectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SmallSectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MicroSectionCountOutputTypeDefaultArgs instead
     */
    export type MicroSectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MicroSectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionTypeCountOutputTypeDefaultArgs instead
     */
    export type SectionTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionCountOutputTypeDefaultArgs instead
     */
    export type PositionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MineDefaultArgs instead
     */
    export type MineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OwnerDefaultArgs instead
     */
    export type OwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OwnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LargeSectionDefaultArgs instead
     */
    export type LargeSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LargeSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediumSectionDefaultArgs instead
     */
    export type MediumSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediumSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SmallSectionDefaultArgs instead
     */
    export type SmallSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SmallSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MicroSectionDefaultArgs instead
     */
    export type MicroSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MicroSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnitSectionDefaultArgs instead
     */
    export type UnitSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnitSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionTypeDefaultArgs instead
     */
    export type SectionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionItemDefaultArgs instead
     */
    export type SectionItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionDefaultArgs instead
     */
    export type PositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionDefaultArgs instead
     */
    export type PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}