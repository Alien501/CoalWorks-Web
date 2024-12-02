
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
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model PlanAssets
 * 
 */
export type PlanAssets = $Result.DefaultSelection<Prisma.$PlanAssetsPayload>
/**
 * Model Planfiles
 * 
 */
export type Planfiles = $Result.DefaultSelection<Prisma.$PlanfilesPayload>
/**
 * Model ActivePlans
 * 
 */
export type ActivePlans = $Result.DefaultSelection<Prisma.$ActivePlansPayload>
/**
 * Model SectionType
 * 
 */
export type SectionType = $Result.DefaultSelection<Prisma.$SectionTypePayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model AssetType
 * 
 */
export type AssetType = $Result.DefaultSelection<Prisma.$AssetTypePayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model Coordinate
 * 
 */
export type Coordinate = $Result.DefaultSelection<Prisma.$CoordinatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlanStatus: {
  Draft: 'Draft',
  Unpublished: 'Unpublished',
  Published: 'Published'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]

}

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

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

  /**
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.planAssets`: Exposes CRUD operations for the **PlanAssets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanAssets
    * const planAssets = await prisma.planAssets.findMany()
    * ```
    */
  get planAssets(): Prisma.PlanAssetsDelegate<ExtArgs>;

  /**
   * `prisma.planfiles`: Exposes CRUD operations for the **Planfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planfiles
    * const planfiles = await prisma.planfiles.findMany()
    * ```
    */
  get planfiles(): Prisma.PlanfilesDelegate<ExtArgs>;

  /**
   * `prisma.activePlans`: Exposes CRUD operations for the **ActivePlans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivePlans
    * const activePlans = await prisma.activePlans.findMany()
    * ```
    */
  get activePlans(): Prisma.ActivePlansDelegate<ExtArgs>;

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
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs>;

  /**
   * `prisma.assetType`: Exposes CRUD operations for the **AssetType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssetTypes
    * const assetTypes = await prisma.assetType.findMany()
    * ```
    */
  get assetType(): Prisma.AssetTypeDelegate<ExtArgs>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs>;

  /**
   * `prisma.coordinate`: Exposes CRUD operations for the **Coordinate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coordinates
    * const coordinates = await prisma.coordinate.findMany()
    * ```
    */
  get coordinate(): Prisma.CoordinateDelegate<ExtArgs>;
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
    Position: 'Position',
    Role: 'Role',
    Permission: 'Permission',
    User: 'User',
    Shift: 'Shift',
    Plan: 'Plan',
    PlanAssets: 'PlanAssets',
    Planfiles: 'Planfiles',
    ActivePlans: 'ActivePlans',
    SectionType: 'SectionType',
    Section: 'Section',
    AssetType: 'AssetType',
    Asset: 'Asset',
    Coordinate: 'Coordinate'
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
      modelProps: "mine" | "owner" | "position" | "role" | "permission" | "user" | "shift" | "plan" | "planAssets" | "planfiles" | "activePlans" | "sectionType" | "section" | "assetType" | "asset" | "coordinate"
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
      Shift: {
        payload: Prisma.$ShiftPayload<ExtArgs>
        fields: Prisma.ShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findFirst: {
            args: Prisma.ShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findMany: {
            args: Prisma.ShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          create: {
            args: Prisma.ShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          createMany: {
            args: Prisma.ShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          delete: {
            args: Prisma.ShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          update: {
            args: Prisma.ShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          deleteMany: {
            args: Prisma.ShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          aggregate: {
            args: Prisma.ShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShift>
          }
          groupBy: {
            args: Prisma.ShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      PlanAssets: {
        payload: Prisma.$PlanAssetsPayload<ExtArgs>
        fields: Prisma.PlanAssetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanAssetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanAssetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload>
          }
          findFirst: {
            args: Prisma.PlanAssetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanAssetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload>
          }
          findMany: {
            args: Prisma.PlanAssetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload>[]
          }
          create: {
            args: Prisma.PlanAssetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload>
          }
          createMany: {
            args: Prisma.PlanAssetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanAssetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload>[]
          }
          delete: {
            args: Prisma.PlanAssetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload>
          }
          update: {
            args: Prisma.PlanAssetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload>
          }
          deleteMany: {
            args: Prisma.PlanAssetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanAssetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanAssetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanAssetsPayload>
          }
          aggregate: {
            args: Prisma.PlanAssetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanAssets>
          }
          groupBy: {
            args: Prisma.PlanAssetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanAssetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanAssetsCountArgs<ExtArgs>
            result: $Utils.Optional<PlanAssetsCountAggregateOutputType> | number
          }
        }
      }
      Planfiles: {
        payload: Prisma.$PlanfilesPayload<ExtArgs>
        fields: Prisma.PlanfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload>
          }
          findFirst: {
            args: Prisma.PlanfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload>
          }
          findMany: {
            args: Prisma.PlanfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload>[]
          }
          create: {
            args: Prisma.PlanfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload>
          }
          createMany: {
            args: Prisma.PlanfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload>[]
          }
          delete: {
            args: Prisma.PlanfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload>
          }
          update: {
            args: Prisma.PlanfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload>
          }
          deleteMany: {
            args: Prisma.PlanfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanfilesPayload>
          }
          aggregate: {
            args: Prisma.PlanfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanfiles>
          }
          groupBy: {
            args: Prisma.PlanfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanfilesCountArgs<ExtArgs>
            result: $Utils.Optional<PlanfilesCountAggregateOutputType> | number
          }
        }
      }
      ActivePlans: {
        payload: Prisma.$ActivePlansPayload<ExtArgs>
        fields: Prisma.ActivePlansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivePlansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivePlansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload>
          }
          findFirst: {
            args: Prisma.ActivePlansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivePlansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload>
          }
          findMany: {
            args: Prisma.ActivePlansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload>[]
          }
          create: {
            args: Prisma.ActivePlansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload>
          }
          createMany: {
            args: Prisma.ActivePlansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivePlansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload>[]
          }
          delete: {
            args: Prisma.ActivePlansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload>
          }
          update: {
            args: Prisma.ActivePlansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload>
          }
          deleteMany: {
            args: Prisma.ActivePlansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivePlansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivePlansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivePlansPayload>
          }
          aggregate: {
            args: Prisma.ActivePlansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivePlans>
          }
          groupBy: {
            args: Prisma.ActivePlansGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivePlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivePlansCountArgs<ExtArgs>
            result: $Utils.Optional<ActivePlansCountAggregateOutputType> | number
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
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      AssetType: {
        payload: Prisma.$AssetTypePayload<ExtArgs>
        fields: Prisma.AssetTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          findFirst: {
            args: Prisma.AssetTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          findMany: {
            args: Prisma.AssetTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>[]
          }
          create: {
            args: Prisma.AssetTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          createMany: {
            args: Prisma.AssetTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>[]
          }
          delete: {
            args: Prisma.AssetTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          update: {
            args: Prisma.AssetTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          deleteMany: {
            args: Prisma.AssetTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetTypePayload>
          }
          aggregate: {
            args: Prisma.AssetTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssetType>
          }
          groupBy: {
            args: Prisma.AssetTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AssetTypeCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      Coordinate: {
        payload: Prisma.$CoordinatePayload<ExtArgs>
        fields: Prisma.CoordinateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoordinateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoordinateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          findFirst: {
            args: Prisma.CoordinateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoordinateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          findMany: {
            args: Prisma.CoordinateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>[]
          }
          create: {
            args: Prisma.CoordinateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          createMany: {
            args: Prisma.CoordinateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoordinateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>[]
          }
          delete: {
            args: Prisma.CoordinateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          update: {
            args: Prisma.CoordinateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          deleteMany: {
            args: Prisma.CoordinateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoordinateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoordinateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          aggregate: {
            args: Prisma.CoordinateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoordinate>
          }
          groupBy: {
            args: Prisma.CoordinateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoordinateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoordinateCountArgs<ExtArgs>
            result: $Utils.Optional<CoordinateCountAggregateOutputType> | number
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
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    planFiles: number
    activePlans: number
    planAssets: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planFiles?: boolean | PlanCountOutputTypeCountPlanFilesArgs
    activePlans?: boolean | PlanCountOutputTypeCountActivePlansArgs
    planAssets?: boolean | PlanCountOutputTypeCountPlanAssetsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountPlanFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanfilesWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountActivePlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivePlansWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountPlanAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanAssetsWhereInput
  }


  /**
   * Count Type SectionTypeCountOutputType
   */

  export type SectionTypeCountOutputType = {
    sections: number
  }

  export type SectionTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | SectionTypeCountOutputTypeCountSectionsArgs
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
  export type SectionTypeCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    assets: number
    coordinates: number
    activePlans: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | SectionCountOutputTypeCountAssetsArgs
    coordinates?: boolean | SectionCountOutputTypeCountCoordinatesArgs
    activePlans?: boolean | SectionCountOutputTypeCountActivePlansArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountCoordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoordinateWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountActivePlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivePlansWhereInput
  }


  /**
   * Count Type AssetTypeCountOutputType
   */

  export type AssetTypeCountOutputType = {
    assets: number
  }

  export type AssetTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | AssetTypeCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * AssetTypeCountOutputType without action
   */
  export type AssetTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetTypeCountOutputType
     */
    select?: AssetTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetTypeCountOutputType without action
   */
  export type AssetTypeCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    planAssets: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planAssets?: boolean | AssetCountOutputTypeCountPlanAssetsArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountPlanAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanAssetsWhereInput
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
  }
  export type MineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $MinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mine"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
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
   * Model Shift
   */

  export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  export type ShiftAvgAggregateOutputType = {
    shiftId: number | null
  }

  export type ShiftSumAggregateOutputType = {
    shiftId: number | null
  }

  export type ShiftMinAggregateOutputType = {
    shiftId: number | null
    name: string | null
    startTime: string | null
    endTime: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftMaxAggregateOutputType = {
    shiftId: number | null
    name: string | null
    startTime: string | null
    endTime: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftCountAggregateOutputType = {
    shiftId: number
    name: number
    startTime: number
    endTime: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftAvgAggregateInputType = {
    shiftId?: true
  }

  export type ShiftSumAggregateInputType = {
    shiftId?: true
  }

  export type ShiftMinAggregateInputType = {
    shiftId?: true
    name?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftMaxAggregateInputType = {
    shiftId?: true
    name?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftCountAggregateInputType = {
    shiftId?: true
    name?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shift to aggregate.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftMaxAggregateInputType
  }

  export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShift[P]>
      : GetScalarType<T[P], AggregateShift[P]>
  }




  export type ShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithAggregationInput | ShiftOrderByWithAggregationInput[]
    by: ShiftScalarFieldEnum[] | ShiftScalarFieldEnum
    having?: ShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftCountAggregateInputType | true
    _avg?: ShiftAvgAggregateInputType
    _sum?: ShiftSumAggregateInputType
    _min?: ShiftMinAggregateInputType
    _max?: ShiftMaxAggregateInputType
  }

  export type ShiftGroupByOutputType = {
    shiftId: number
    name: string
    startTime: string
    endTime: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shiftId?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    shiftId?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectScalar = {
    shiftId?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      shiftId: number
      name: string
      startTime: string
      endTime: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shift'], meta: { name: 'Shift' } }
    /**
     * Find zero or one Shift that matches the filter.
     * @param {ShiftFindUniqueArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftFindUniqueArgs>(args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Shift that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShiftFindUniqueOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftFindFirstArgs>(args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shift.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shift.findMany({ take: 10 })
     * 
     * // Only select the `shiftId`
     * const shiftWithShiftIdOnly = await prisma.shift.findMany({ select: { shiftId: true } })
     * 
     */
    findMany<T extends ShiftFindManyArgs>(args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Shift.
     * @param {ShiftCreateArgs} args - Arguments to create a Shift.
     * @example
     * // Create one Shift
     * const Shift = await prisma.shift.create({
     *   data: {
     *     // ... data to create a Shift
     *   }
     * })
     * 
     */
    create<T extends ShiftCreateArgs>(args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Shifts.
     * @param {ShiftCreateManyArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftCreateManyArgs>(args?: SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shifts and returns the data saved in the database.
     * @param {ShiftCreateManyAndReturnArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shifts and only return the `shiftId`
     * const shiftWithShiftIdOnly = await prisma.shift.createManyAndReturn({ 
     *   select: { shiftId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Shift.
     * @param {ShiftDeleteArgs} args - Arguments to delete one Shift.
     * @example
     * // Delete one Shift
     * const Shift = await prisma.shift.delete({
     *   where: {
     *     // ... filter to delete one Shift
     *   }
     * })
     * 
     */
    delete<T extends ShiftDeleteArgs>(args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Shift.
     * @param {ShiftUpdateArgs} args - Arguments to update one Shift.
     * @example
     * // Update one Shift
     * const shift = await prisma.shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftUpdateArgs>(args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftDeleteManyArgs>(args?: SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftUpdateManyArgs>(args: SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shift.
     * @param {ShiftUpsertArgs} args - Arguments to update or create a Shift.
     * @example
     * // Update or create a Shift
     * const shift = await prisma.shift.upsert({
     *   create: {
     *     // ... data to create a Shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shift we want to update
     *   }
     * })
     */
    upsert<T extends ShiftUpsertArgs>(args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shift.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftCountArgs>(
      args?: Subset<T, ShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftAggregateArgs>(args: Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>

    /**
     * Group by Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftGroupByArgs} args - Group by arguments.
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
      T extends ShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftGroupByArgs['orderBy'] }
        : { orderBy?: ShiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shift model
   */
  readonly fields: ShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Shift model
   */ 
  interface ShiftFieldRefs {
    readonly shiftId: FieldRef<"Shift", 'Int'>
    readonly name: FieldRef<"Shift", 'String'>
    readonly startTime: FieldRef<"Shift", 'String'>
    readonly endTime: FieldRef<"Shift", 'String'>
    readonly isActive: FieldRef<"Shift", 'Boolean'>
    readonly createdAt: FieldRef<"Shift", 'DateTime'>
    readonly updatedAt: FieldRef<"Shift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shift findUnique
   */
  export type ShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findUniqueOrThrow
   */
  export type ShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findFirst
   */
  export type ShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findFirstOrThrow
   */
  export type ShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findMany
   */
  export type ShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Filter, which Shifts to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift create
   */
  export type ShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * The data needed to create a Shift.
     */
    data: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
  }

  /**
   * Shift createMany
   */
  export type ShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shift createManyAndReturn
   */
  export type ShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * The data needed to update a Shift.
     */
    data: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
    /**
     * Choose, which Shift to update.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift updateMany
   */
  export type ShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
  }

  /**
   * Shift upsert
   */
  export type ShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * The filter to search for the Shift to update in case it exists.
     */
    where: ShiftWhereUniqueInput
    /**
     * In case the Shift found by the `where` argument doesn't exist, create a new Shift with this data.
     */
    create: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
    /**
     * In case the Shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
  }

  /**
   * Shift delete
   */
  export type ShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Filter which Shift to delete.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift deleteMany
   */
  export type ShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shifts to delete
     */
    where?: ShiftWhereInput
  }

  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    planId: number | null
  }

  export type PlanSumAggregateOutputType = {
    planId: number | null
  }

  export type PlanMinAggregateOutputType = {
    planId: number | null
    planName: string | null
    planDescription: string | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    notes: string | null
  }

  export type PlanMaxAggregateOutputType = {
    planId: number | null
    planName: string | null
    planDescription: string | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    notes: string | null
  }

  export type PlanCountAggregateOutputType = {
    planId: number
    planName: number
    planDescription: number
    form: number
    status: number
    createdAt: number
    updatedAt: number
    notes: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    planId?: true
  }

  export type PlanSumAggregateInputType = {
    planId?: true
  }

  export type PlanMinAggregateInputType = {
    planId?: true
    planName?: true
    planDescription?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
  }

  export type PlanMaxAggregateInputType = {
    planId?: true
    planName?: true
    planDescription?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
  }

  export type PlanCountAggregateInputType = {
    planId?: true
    planName?: true
    planDescription?: true
    form?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    planId: number
    planName: string
    planDescription: string | null
    form: JsonValue
    status: $Enums.PlanStatus
    createdAt: Date
    updatedAt: Date
    notes: string | null
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planId?: boolean
    planName?: boolean
    planDescription?: boolean
    form?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    planFiles?: boolean | Plan$planFilesArgs<ExtArgs>
    activePlans?: boolean | Plan$activePlansArgs<ExtArgs>
    planAssets?: boolean | Plan$planAssetsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    planId?: boolean
    planName?: boolean
    planDescription?: boolean
    form?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    planId?: boolean
    planName?: boolean
    planDescription?: boolean
    form?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planFiles?: boolean | Plan$planFilesArgs<ExtArgs>
    activePlans?: boolean | Plan$activePlansArgs<ExtArgs>
    planAssets?: boolean | Plan$planAssetsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      planFiles: Prisma.$PlanfilesPayload<ExtArgs>[]
      activePlans: Prisma.$ActivePlansPayload<ExtArgs>[]
      planAssets: Prisma.$PlanAssetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      planId: number
      planName: string
      planDescription: string | null
      form: Prisma.JsonValue
      status: $Enums.PlanStatus
      createdAt: Date
      updatedAt: Date
      notes: string | null
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `planId`
     * const planWithPlanIdOnly = await prisma.plan.findMany({ select: { planId: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `planId`
     * const planWithPlanIdOnly = await prisma.plan.createManyAndReturn({ 
     *   select: { planId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planFiles<T extends Plan$planFilesArgs<ExtArgs> = {}>(args?: Subset<T, Plan$planFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "findMany"> | Null>
    activePlans<T extends Plan$activePlansArgs<ExtArgs> = {}>(args?: Subset<T, Plan$activePlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "findMany"> | Null>
    planAssets<T extends Plan$planAssetsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$planAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly planId: FieldRef<"Plan", 'Int'>
    readonly planName: FieldRef<"Plan", 'String'>
    readonly planDescription: FieldRef<"Plan", 'String'>
    readonly form: FieldRef<"Plan", 'Json'>
    readonly status: FieldRef<"Plan", 'PlanStatus'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
    readonly notes: FieldRef<"Plan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }

  /**
   * Plan.planFiles
   */
  export type Plan$planFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    where?: PlanfilesWhereInput
    orderBy?: PlanfilesOrderByWithRelationInput | PlanfilesOrderByWithRelationInput[]
    cursor?: PlanfilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanfilesScalarFieldEnum | PlanfilesScalarFieldEnum[]
  }

  /**
   * Plan.activePlans
   */
  export type Plan$activePlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    where?: ActivePlansWhereInput
    orderBy?: ActivePlansOrderByWithRelationInput | ActivePlansOrderByWithRelationInput[]
    cursor?: ActivePlansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivePlansScalarFieldEnum | ActivePlansScalarFieldEnum[]
  }

  /**
   * Plan.planAssets
   */
  export type Plan$planAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    where?: PlanAssetsWhereInput
    orderBy?: PlanAssetsOrderByWithRelationInput | PlanAssetsOrderByWithRelationInput[]
    cursor?: PlanAssetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanAssetsScalarFieldEnum | PlanAssetsScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model PlanAssets
   */

  export type AggregatePlanAssets = {
    _count: PlanAssetsCountAggregateOutputType | null
    _avg: PlanAssetsAvgAggregateOutputType | null
    _sum: PlanAssetsSumAggregateOutputType | null
    _min: PlanAssetsMinAggregateOutputType | null
    _max: PlanAssetsMaxAggregateOutputType | null
  }

  export type PlanAssetsAvgAggregateOutputType = {
    id: number | null
    planId: number | null
    assetId: number | null
  }

  export type PlanAssetsSumAggregateOutputType = {
    id: number | null
    planId: number | null
    assetId: number | null
  }

  export type PlanAssetsMinAggregateOutputType = {
    id: number | null
    planId: number | null
    assetId: number | null
    assetName: string | null
  }

  export type PlanAssetsMaxAggregateOutputType = {
    id: number | null
    planId: number | null
    assetId: number | null
    assetName: string | null
  }

  export type PlanAssetsCountAggregateOutputType = {
    id: number
    planId: number
    assetId: number
    assetName: number
    _all: number
  }


  export type PlanAssetsAvgAggregateInputType = {
    id?: true
    planId?: true
    assetId?: true
  }

  export type PlanAssetsSumAggregateInputType = {
    id?: true
    planId?: true
    assetId?: true
  }

  export type PlanAssetsMinAggregateInputType = {
    id?: true
    planId?: true
    assetId?: true
    assetName?: true
  }

  export type PlanAssetsMaxAggregateInputType = {
    id?: true
    planId?: true
    assetId?: true
    assetName?: true
  }

  export type PlanAssetsCountAggregateInputType = {
    id?: true
    planId?: true
    assetId?: true
    assetName?: true
    _all?: true
  }

  export type PlanAssetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanAssets to aggregate.
     */
    where?: PlanAssetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanAssets to fetch.
     */
    orderBy?: PlanAssetsOrderByWithRelationInput | PlanAssetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanAssetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanAssets
    **/
    _count?: true | PlanAssetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAssetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanAssetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanAssetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanAssetsMaxAggregateInputType
  }

  export type GetPlanAssetsAggregateType<T extends PlanAssetsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanAssets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanAssets[P]>
      : GetScalarType<T[P], AggregatePlanAssets[P]>
  }




  export type PlanAssetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanAssetsWhereInput
    orderBy?: PlanAssetsOrderByWithAggregationInput | PlanAssetsOrderByWithAggregationInput[]
    by: PlanAssetsScalarFieldEnum[] | PlanAssetsScalarFieldEnum
    having?: PlanAssetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanAssetsCountAggregateInputType | true
    _avg?: PlanAssetsAvgAggregateInputType
    _sum?: PlanAssetsSumAggregateInputType
    _min?: PlanAssetsMinAggregateInputType
    _max?: PlanAssetsMaxAggregateInputType
  }

  export type PlanAssetsGroupByOutputType = {
    id: number
    planId: number
    assetId: number
    assetName: string
    _count: PlanAssetsCountAggregateOutputType | null
    _avg: PlanAssetsAvgAggregateOutputType | null
    _sum: PlanAssetsSumAggregateOutputType | null
    _min: PlanAssetsMinAggregateOutputType | null
    _max: PlanAssetsMaxAggregateOutputType | null
  }

  type GetPlanAssetsGroupByPayload<T extends PlanAssetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanAssetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanAssetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanAssetsGroupByOutputType[P]>
            : GetScalarType<T[P], PlanAssetsGroupByOutputType[P]>
        }
      >
    >


  export type PlanAssetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    assetId?: boolean
    assetName?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planAssets"]>

  export type PlanAssetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    assetId?: boolean
    assetName?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planAssets"]>

  export type PlanAssetsSelectScalar = {
    id?: boolean
    planId?: boolean
    assetId?: boolean
    assetName?: boolean
  }

  export type PlanAssetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }
  export type PlanAssetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    asset?: boolean | AssetDefaultArgs<ExtArgs>
  }

  export type $PlanAssetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanAssets"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      asset: Prisma.$AssetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      planId: number
      assetId: number
      assetName: string
    }, ExtArgs["result"]["planAssets"]>
    composites: {}
  }

  type PlanAssetsGetPayload<S extends boolean | null | undefined | PlanAssetsDefaultArgs> = $Result.GetResult<Prisma.$PlanAssetsPayload, S>

  type PlanAssetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanAssetsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanAssetsCountAggregateInputType | true
    }

  export interface PlanAssetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanAssets'], meta: { name: 'PlanAssets' } }
    /**
     * Find zero or one PlanAssets that matches the filter.
     * @param {PlanAssetsFindUniqueArgs} args - Arguments to find a PlanAssets
     * @example
     * // Get one PlanAssets
     * const planAssets = await prisma.planAssets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanAssetsFindUniqueArgs>(args: SelectSubset<T, PlanAssetsFindUniqueArgs<ExtArgs>>): Prisma__PlanAssetsClient<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlanAssets that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanAssetsFindUniqueOrThrowArgs} args - Arguments to find a PlanAssets
     * @example
     * // Get one PlanAssets
     * const planAssets = await prisma.planAssets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanAssetsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanAssetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanAssetsClient<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlanAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAssetsFindFirstArgs} args - Arguments to find a PlanAssets
     * @example
     * // Get one PlanAssets
     * const planAssets = await prisma.planAssets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanAssetsFindFirstArgs>(args?: SelectSubset<T, PlanAssetsFindFirstArgs<ExtArgs>>): Prisma__PlanAssetsClient<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlanAssets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAssetsFindFirstOrThrowArgs} args - Arguments to find a PlanAssets
     * @example
     * // Get one PlanAssets
     * const planAssets = await prisma.planAssets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanAssetsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanAssetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanAssetsClient<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlanAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAssetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanAssets
     * const planAssets = await prisma.planAssets.findMany()
     * 
     * // Get first 10 PlanAssets
     * const planAssets = await prisma.planAssets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planAssetsWithIdOnly = await prisma.planAssets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanAssetsFindManyArgs>(args?: SelectSubset<T, PlanAssetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlanAssets.
     * @param {PlanAssetsCreateArgs} args - Arguments to create a PlanAssets.
     * @example
     * // Create one PlanAssets
     * const PlanAssets = await prisma.planAssets.create({
     *   data: {
     *     // ... data to create a PlanAssets
     *   }
     * })
     * 
     */
    create<T extends PlanAssetsCreateArgs>(args: SelectSubset<T, PlanAssetsCreateArgs<ExtArgs>>): Prisma__PlanAssetsClient<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlanAssets.
     * @param {PlanAssetsCreateManyArgs} args - Arguments to create many PlanAssets.
     * @example
     * // Create many PlanAssets
     * const planAssets = await prisma.planAssets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanAssetsCreateManyArgs>(args?: SelectSubset<T, PlanAssetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanAssets and returns the data saved in the database.
     * @param {PlanAssetsCreateManyAndReturnArgs} args - Arguments to create many PlanAssets.
     * @example
     * // Create many PlanAssets
     * const planAssets = await prisma.planAssets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanAssets and only return the `id`
     * const planAssetsWithIdOnly = await prisma.planAssets.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanAssetsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanAssetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlanAssets.
     * @param {PlanAssetsDeleteArgs} args - Arguments to delete one PlanAssets.
     * @example
     * // Delete one PlanAssets
     * const PlanAssets = await prisma.planAssets.delete({
     *   where: {
     *     // ... filter to delete one PlanAssets
     *   }
     * })
     * 
     */
    delete<T extends PlanAssetsDeleteArgs>(args: SelectSubset<T, PlanAssetsDeleteArgs<ExtArgs>>): Prisma__PlanAssetsClient<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlanAssets.
     * @param {PlanAssetsUpdateArgs} args - Arguments to update one PlanAssets.
     * @example
     * // Update one PlanAssets
     * const planAssets = await prisma.planAssets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanAssetsUpdateArgs>(args: SelectSubset<T, PlanAssetsUpdateArgs<ExtArgs>>): Prisma__PlanAssetsClient<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlanAssets.
     * @param {PlanAssetsDeleteManyArgs} args - Arguments to filter PlanAssets to delete.
     * @example
     * // Delete a few PlanAssets
     * const { count } = await prisma.planAssets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanAssetsDeleteManyArgs>(args?: SelectSubset<T, PlanAssetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAssetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanAssets
     * const planAssets = await prisma.planAssets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanAssetsUpdateManyArgs>(args: SelectSubset<T, PlanAssetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlanAssets.
     * @param {PlanAssetsUpsertArgs} args - Arguments to update or create a PlanAssets.
     * @example
     * // Update or create a PlanAssets
     * const planAssets = await prisma.planAssets.upsert({
     *   create: {
     *     // ... data to create a PlanAssets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanAssets we want to update
     *   }
     * })
     */
    upsert<T extends PlanAssetsUpsertArgs>(args: SelectSubset<T, PlanAssetsUpsertArgs<ExtArgs>>): Prisma__PlanAssetsClient<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlanAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAssetsCountArgs} args - Arguments to filter PlanAssets to count.
     * @example
     * // Count the number of PlanAssets
     * const count = await prisma.planAssets.count({
     *   where: {
     *     // ... the filter for the PlanAssets we want to count
     *   }
     * })
    **/
    count<T extends PlanAssetsCountArgs>(
      args?: Subset<T, PlanAssetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanAssetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAssetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAssetsAggregateArgs>(args: Subset<T, PlanAssetsAggregateArgs>): Prisma.PrismaPromise<GetPlanAssetsAggregateType<T>>

    /**
     * Group by PlanAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAssetsGroupByArgs} args - Group by arguments.
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
      T extends PlanAssetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanAssetsGroupByArgs['orderBy'] }
        : { orderBy?: PlanAssetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanAssetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanAssetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanAssets model
   */
  readonly fields: PlanAssetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanAssets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanAssetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    asset<T extends AssetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetDefaultArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PlanAssets model
   */ 
  interface PlanAssetsFieldRefs {
    readonly id: FieldRef<"PlanAssets", 'Int'>
    readonly planId: FieldRef<"PlanAssets", 'Int'>
    readonly assetId: FieldRef<"PlanAssets", 'Int'>
    readonly assetName: FieldRef<"PlanAssets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlanAssets findUnique
   */
  export type PlanAssetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * Filter, which PlanAssets to fetch.
     */
    where: PlanAssetsWhereUniqueInput
  }

  /**
   * PlanAssets findUniqueOrThrow
   */
  export type PlanAssetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * Filter, which PlanAssets to fetch.
     */
    where: PlanAssetsWhereUniqueInput
  }

  /**
   * PlanAssets findFirst
   */
  export type PlanAssetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * Filter, which PlanAssets to fetch.
     */
    where?: PlanAssetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanAssets to fetch.
     */
    orderBy?: PlanAssetsOrderByWithRelationInput | PlanAssetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanAssets.
     */
    cursor?: PlanAssetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanAssets.
     */
    distinct?: PlanAssetsScalarFieldEnum | PlanAssetsScalarFieldEnum[]
  }

  /**
   * PlanAssets findFirstOrThrow
   */
  export type PlanAssetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * Filter, which PlanAssets to fetch.
     */
    where?: PlanAssetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanAssets to fetch.
     */
    orderBy?: PlanAssetsOrderByWithRelationInput | PlanAssetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanAssets.
     */
    cursor?: PlanAssetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanAssets.
     */
    distinct?: PlanAssetsScalarFieldEnum | PlanAssetsScalarFieldEnum[]
  }

  /**
   * PlanAssets findMany
   */
  export type PlanAssetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * Filter, which PlanAssets to fetch.
     */
    where?: PlanAssetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanAssets to fetch.
     */
    orderBy?: PlanAssetsOrderByWithRelationInput | PlanAssetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanAssets.
     */
    cursor?: PlanAssetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanAssets.
     */
    skip?: number
    distinct?: PlanAssetsScalarFieldEnum | PlanAssetsScalarFieldEnum[]
  }

  /**
   * PlanAssets create
   */
  export type PlanAssetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanAssets.
     */
    data: XOR<PlanAssetsCreateInput, PlanAssetsUncheckedCreateInput>
  }

  /**
   * PlanAssets createMany
   */
  export type PlanAssetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanAssets.
     */
    data: PlanAssetsCreateManyInput | PlanAssetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanAssets createManyAndReturn
   */
  export type PlanAssetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlanAssets.
     */
    data: PlanAssetsCreateManyInput | PlanAssetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanAssets update
   */
  export type PlanAssetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanAssets.
     */
    data: XOR<PlanAssetsUpdateInput, PlanAssetsUncheckedUpdateInput>
    /**
     * Choose, which PlanAssets to update.
     */
    where: PlanAssetsWhereUniqueInput
  }

  /**
   * PlanAssets updateMany
   */
  export type PlanAssetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanAssets.
     */
    data: XOR<PlanAssetsUpdateManyMutationInput, PlanAssetsUncheckedUpdateManyInput>
    /**
     * Filter which PlanAssets to update
     */
    where?: PlanAssetsWhereInput
  }

  /**
   * PlanAssets upsert
   */
  export type PlanAssetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanAssets to update in case it exists.
     */
    where: PlanAssetsWhereUniqueInput
    /**
     * In case the PlanAssets found by the `where` argument doesn't exist, create a new PlanAssets with this data.
     */
    create: XOR<PlanAssetsCreateInput, PlanAssetsUncheckedCreateInput>
    /**
     * In case the PlanAssets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanAssetsUpdateInput, PlanAssetsUncheckedUpdateInput>
  }

  /**
   * PlanAssets delete
   */
  export type PlanAssetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    /**
     * Filter which PlanAssets to delete.
     */
    where: PlanAssetsWhereUniqueInput
  }

  /**
   * PlanAssets deleteMany
   */
  export type PlanAssetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanAssets to delete
     */
    where?: PlanAssetsWhereInput
  }

  /**
   * PlanAssets without action
   */
  export type PlanAssetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
  }


  /**
   * Model Planfiles
   */

  export type AggregatePlanfiles = {
    _count: PlanfilesCountAggregateOutputType | null
    _avg: PlanfilesAvgAggregateOutputType | null
    _sum: PlanfilesSumAggregateOutputType | null
    _min: PlanfilesMinAggregateOutputType | null
    _max: PlanfilesMaxAggregateOutputType | null
  }

  export type PlanfilesAvgAggregateOutputType = {
    fileId: number | null
    planId: number | null
  }

  export type PlanfilesSumAggregateOutputType = {
    fileId: number | null
    planId: number | null
  }

  export type PlanfilesMinAggregateOutputType = {
    fileId: number | null
    fileName: string | null
    filePath: string | null
    type: string | null
    planId: number | null
  }

  export type PlanfilesMaxAggregateOutputType = {
    fileId: number | null
    fileName: string | null
    filePath: string | null
    type: string | null
    planId: number | null
  }

  export type PlanfilesCountAggregateOutputType = {
    fileId: number
    fileName: number
    filePath: number
    type: number
    planId: number
    _all: number
  }


  export type PlanfilesAvgAggregateInputType = {
    fileId?: true
    planId?: true
  }

  export type PlanfilesSumAggregateInputType = {
    fileId?: true
    planId?: true
  }

  export type PlanfilesMinAggregateInputType = {
    fileId?: true
    fileName?: true
    filePath?: true
    type?: true
    planId?: true
  }

  export type PlanfilesMaxAggregateInputType = {
    fileId?: true
    fileName?: true
    filePath?: true
    type?: true
    planId?: true
  }

  export type PlanfilesCountAggregateInputType = {
    fileId?: true
    fileName?: true
    filePath?: true
    type?: true
    planId?: true
    _all?: true
  }

  export type PlanfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planfiles to aggregate.
     */
    where?: PlanfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planfiles to fetch.
     */
    orderBy?: PlanfilesOrderByWithRelationInput | PlanfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planfiles
    **/
    _count?: true | PlanfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanfilesMaxAggregateInputType
  }

  export type GetPlanfilesAggregateType<T extends PlanfilesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanfiles[P]>
      : GetScalarType<T[P], AggregatePlanfiles[P]>
  }




  export type PlanfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanfilesWhereInput
    orderBy?: PlanfilesOrderByWithAggregationInput | PlanfilesOrderByWithAggregationInput[]
    by: PlanfilesScalarFieldEnum[] | PlanfilesScalarFieldEnum
    having?: PlanfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanfilesCountAggregateInputType | true
    _avg?: PlanfilesAvgAggregateInputType
    _sum?: PlanfilesSumAggregateInputType
    _min?: PlanfilesMinAggregateInputType
    _max?: PlanfilesMaxAggregateInputType
  }

  export type PlanfilesGroupByOutputType = {
    fileId: number
    fileName: string
    filePath: string
    type: string
    planId: number
    _count: PlanfilesCountAggregateOutputType | null
    _avg: PlanfilesAvgAggregateOutputType | null
    _sum: PlanfilesSumAggregateOutputType | null
    _min: PlanfilesMinAggregateOutputType | null
    _max: PlanfilesMaxAggregateOutputType | null
  }

  type GetPlanfilesGroupByPayload<T extends PlanfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanfilesGroupByOutputType[P]>
            : GetScalarType<T[P], PlanfilesGroupByOutputType[P]>
        }
      >
    >


  export type PlanfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileName?: boolean
    filePath?: boolean
    type?: boolean
    planId?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planfiles"]>

  export type PlanfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fileId?: boolean
    fileName?: boolean
    filePath?: boolean
    type?: boolean
    planId?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planfiles"]>

  export type PlanfilesSelectScalar = {
    fileId?: boolean
    fileName?: boolean
    filePath?: boolean
    type?: boolean
    planId?: boolean
  }

  export type PlanfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PlanfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $PlanfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Planfiles"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fileId: number
      fileName: string
      filePath: string
      type: string
      planId: number
    }, ExtArgs["result"]["planfiles"]>
    composites: {}
  }

  type PlanfilesGetPayload<S extends boolean | null | undefined | PlanfilesDefaultArgs> = $Result.GetResult<Prisma.$PlanfilesPayload, S>

  type PlanfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanfilesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanfilesCountAggregateInputType | true
    }

  export interface PlanfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Planfiles'], meta: { name: 'Planfiles' } }
    /**
     * Find zero or one Planfiles that matches the filter.
     * @param {PlanfilesFindUniqueArgs} args - Arguments to find a Planfiles
     * @example
     * // Get one Planfiles
     * const planfiles = await prisma.planfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanfilesFindUniqueArgs>(args: SelectSubset<T, PlanfilesFindUniqueArgs<ExtArgs>>): Prisma__PlanfilesClient<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Planfiles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanfilesFindUniqueOrThrowArgs} args - Arguments to find a Planfiles
     * @example
     * // Get one Planfiles
     * const planfiles = await prisma.planfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanfilesClient<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Planfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanfilesFindFirstArgs} args - Arguments to find a Planfiles
     * @example
     * // Get one Planfiles
     * const planfiles = await prisma.planfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanfilesFindFirstArgs>(args?: SelectSubset<T, PlanfilesFindFirstArgs<ExtArgs>>): Prisma__PlanfilesClient<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Planfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanfilesFindFirstOrThrowArgs} args - Arguments to find a Planfiles
     * @example
     * // Get one Planfiles
     * const planfiles = await prisma.planfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanfilesClient<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Planfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planfiles
     * const planfiles = await prisma.planfiles.findMany()
     * 
     * // Get first 10 Planfiles
     * const planfiles = await prisma.planfiles.findMany({ take: 10 })
     * 
     * // Only select the `fileId`
     * const planfilesWithFileIdOnly = await prisma.planfiles.findMany({ select: { fileId: true } })
     * 
     */
    findMany<T extends PlanfilesFindManyArgs>(args?: SelectSubset<T, PlanfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Planfiles.
     * @param {PlanfilesCreateArgs} args - Arguments to create a Planfiles.
     * @example
     * // Create one Planfiles
     * const Planfiles = await prisma.planfiles.create({
     *   data: {
     *     // ... data to create a Planfiles
     *   }
     * })
     * 
     */
    create<T extends PlanfilesCreateArgs>(args: SelectSubset<T, PlanfilesCreateArgs<ExtArgs>>): Prisma__PlanfilesClient<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Planfiles.
     * @param {PlanfilesCreateManyArgs} args - Arguments to create many Planfiles.
     * @example
     * // Create many Planfiles
     * const planfiles = await prisma.planfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanfilesCreateManyArgs>(args?: SelectSubset<T, PlanfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Planfiles and returns the data saved in the database.
     * @param {PlanfilesCreateManyAndReturnArgs} args - Arguments to create many Planfiles.
     * @example
     * // Create many Planfiles
     * const planfiles = await prisma.planfiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Planfiles and only return the `fileId`
     * const planfilesWithFileIdOnly = await prisma.planfiles.createManyAndReturn({ 
     *   select: { fileId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Planfiles.
     * @param {PlanfilesDeleteArgs} args - Arguments to delete one Planfiles.
     * @example
     * // Delete one Planfiles
     * const Planfiles = await prisma.planfiles.delete({
     *   where: {
     *     // ... filter to delete one Planfiles
     *   }
     * })
     * 
     */
    delete<T extends PlanfilesDeleteArgs>(args: SelectSubset<T, PlanfilesDeleteArgs<ExtArgs>>): Prisma__PlanfilesClient<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Planfiles.
     * @param {PlanfilesUpdateArgs} args - Arguments to update one Planfiles.
     * @example
     * // Update one Planfiles
     * const planfiles = await prisma.planfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanfilesUpdateArgs>(args: SelectSubset<T, PlanfilesUpdateArgs<ExtArgs>>): Prisma__PlanfilesClient<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Planfiles.
     * @param {PlanfilesDeleteManyArgs} args - Arguments to filter Planfiles to delete.
     * @example
     * // Delete a few Planfiles
     * const { count } = await prisma.planfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanfilesDeleteManyArgs>(args?: SelectSubset<T, PlanfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planfiles
     * const planfiles = await prisma.planfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanfilesUpdateManyArgs>(args: SelectSubset<T, PlanfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planfiles.
     * @param {PlanfilesUpsertArgs} args - Arguments to update or create a Planfiles.
     * @example
     * // Update or create a Planfiles
     * const planfiles = await prisma.planfiles.upsert({
     *   create: {
     *     // ... data to create a Planfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planfiles we want to update
     *   }
     * })
     */
    upsert<T extends PlanfilesUpsertArgs>(args: SelectSubset<T, PlanfilesUpsertArgs<ExtArgs>>): Prisma__PlanfilesClient<$Result.GetResult<Prisma.$PlanfilesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Planfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanfilesCountArgs} args - Arguments to filter Planfiles to count.
     * @example
     * // Count the number of Planfiles
     * const count = await prisma.planfiles.count({
     *   where: {
     *     // ... the filter for the Planfiles we want to count
     *   }
     * })
    **/
    count<T extends PlanfilesCountArgs>(
      args?: Subset<T, PlanfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanfilesAggregateArgs>(args: Subset<T, PlanfilesAggregateArgs>): Prisma.PrismaPromise<GetPlanfilesAggregateType<T>>

    /**
     * Group by Planfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanfilesGroupByArgs} args - Group by arguments.
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
      T extends PlanfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanfilesGroupByArgs['orderBy'] }
        : { orderBy?: PlanfilesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Planfiles model
   */
  readonly fields: PlanfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Planfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Planfiles model
   */ 
  interface PlanfilesFieldRefs {
    readonly fileId: FieldRef<"Planfiles", 'Int'>
    readonly fileName: FieldRef<"Planfiles", 'String'>
    readonly filePath: FieldRef<"Planfiles", 'String'>
    readonly type: FieldRef<"Planfiles", 'String'>
    readonly planId: FieldRef<"Planfiles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Planfiles findUnique
   */
  export type PlanfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * Filter, which Planfiles to fetch.
     */
    where: PlanfilesWhereUniqueInput
  }

  /**
   * Planfiles findUniqueOrThrow
   */
  export type PlanfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * Filter, which Planfiles to fetch.
     */
    where: PlanfilesWhereUniqueInput
  }

  /**
   * Planfiles findFirst
   */
  export type PlanfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * Filter, which Planfiles to fetch.
     */
    where?: PlanfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planfiles to fetch.
     */
    orderBy?: PlanfilesOrderByWithRelationInput | PlanfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planfiles.
     */
    cursor?: PlanfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planfiles.
     */
    distinct?: PlanfilesScalarFieldEnum | PlanfilesScalarFieldEnum[]
  }

  /**
   * Planfiles findFirstOrThrow
   */
  export type PlanfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * Filter, which Planfiles to fetch.
     */
    where?: PlanfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planfiles to fetch.
     */
    orderBy?: PlanfilesOrderByWithRelationInput | PlanfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planfiles.
     */
    cursor?: PlanfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planfiles.
     */
    distinct?: PlanfilesScalarFieldEnum | PlanfilesScalarFieldEnum[]
  }

  /**
   * Planfiles findMany
   */
  export type PlanfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * Filter, which Planfiles to fetch.
     */
    where?: PlanfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planfiles to fetch.
     */
    orderBy?: PlanfilesOrderByWithRelationInput | PlanfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planfiles.
     */
    cursor?: PlanfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planfiles.
     */
    skip?: number
    distinct?: PlanfilesScalarFieldEnum | PlanfilesScalarFieldEnum[]
  }

  /**
   * Planfiles create
   */
  export type PlanfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Planfiles.
     */
    data: XOR<PlanfilesCreateInput, PlanfilesUncheckedCreateInput>
  }

  /**
   * Planfiles createMany
   */
  export type PlanfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Planfiles.
     */
    data: PlanfilesCreateManyInput | PlanfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planfiles createManyAndReturn
   */
  export type PlanfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Planfiles.
     */
    data: PlanfilesCreateManyInput | PlanfilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Planfiles update
   */
  export type PlanfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Planfiles.
     */
    data: XOR<PlanfilesUpdateInput, PlanfilesUncheckedUpdateInput>
    /**
     * Choose, which Planfiles to update.
     */
    where: PlanfilesWhereUniqueInput
  }

  /**
   * Planfiles updateMany
   */
  export type PlanfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Planfiles.
     */
    data: XOR<PlanfilesUpdateManyMutationInput, PlanfilesUncheckedUpdateManyInput>
    /**
     * Filter which Planfiles to update
     */
    where?: PlanfilesWhereInput
  }

  /**
   * Planfiles upsert
   */
  export type PlanfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Planfiles to update in case it exists.
     */
    where: PlanfilesWhereUniqueInput
    /**
     * In case the Planfiles found by the `where` argument doesn't exist, create a new Planfiles with this data.
     */
    create: XOR<PlanfilesCreateInput, PlanfilesUncheckedCreateInput>
    /**
     * In case the Planfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanfilesUpdateInput, PlanfilesUncheckedUpdateInput>
  }

  /**
   * Planfiles delete
   */
  export type PlanfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
    /**
     * Filter which Planfiles to delete.
     */
    where: PlanfilesWhereUniqueInput
  }

  /**
   * Planfiles deleteMany
   */
  export type PlanfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planfiles to delete
     */
    where?: PlanfilesWhereInput
  }

  /**
   * Planfiles without action
   */
  export type PlanfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planfiles
     */
    select?: PlanfilesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanfilesInclude<ExtArgs> | null
  }


  /**
   * Model ActivePlans
   */

  export type AggregateActivePlans = {
    _count: ActivePlansCountAggregateOutputType | null
    _avg: ActivePlansAvgAggregateOutputType | null
    _sum: ActivePlansSumAggregateOutputType | null
    _min: ActivePlansMinAggregateOutputType | null
    _max: ActivePlansMaxAggregateOutputType | null
  }

  export type ActivePlansAvgAggregateOutputType = {
    id: number | null
    planId: number | null
    sectionId: number | null
  }

  export type ActivePlansSumAggregateOutputType = {
    id: number | null
    planId: number | null
    sectionId: number | null
  }

  export type ActivePlansMinAggregateOutputType = {
    id: number | null
    planName: string | null
    planId: number | null
    sectionId: number | null
  }

  export type ActivePlansMaxAggregateOutputType = {
    id: number | null
    planName: string | null
    planId: number | null
    sectionId: number | null
  }

  export type ActivePlansCountAggregateOutputType = {
    id: number
    planName: number
    planId: number
    sectionId: number
    _all: number
  }


  export type ActivePlansAvgAggregateInputType = {
    id?: true
    planId?: true
    sectionId?: true
  }

  export type ActivePlansSumAggregateInputType = {
    id?: true
    planId?: true
    sectionId?: true
  }

  export type ActivePlansMinAggregateInputType = {
    id?: true
    planName?: true
    planId?: true
    sectionId?: true
  }

  export type ActivePlansMaxAggregateInputType = {
    id?: true
    planName?: true
    planId?: true
    sectionId?: true
  }

  export type ActivePlansCountAggregateInputType = {
    id?: true
    planName?: true
    planId?: true
    sectionId?: true
    _all?: true
  }

  export type ActivePlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivePlans to aggregate.
     */
    where?: ActivePlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivePlans to fetch.
     */
    orderBy?: ActivePlansOrderByWithRelationInput | ActivePlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivePlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivePlans
    **/
    _count?: true | ActivePlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivePlansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivePlansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivePlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivePlansMaxAggregateInputType
  }

  export type GetActivePlansAggregateType<T extends ActivePlansAggregateArgs> = {
        [P in keyof T & keyof AggregateActivePlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivePlans[P]>
      : GetScalarType<T[P], AggregateActivePlans[P]>
  }




  export type ActivePlansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivePlansWhereInput
    orderBy?: ActivePlansOrderByWithAggregationInput | ActivePlansOrderByWithAggregationInput[]
    by: ActivePlansScalarFieldEnum[] | ActivePlansScalarFieldEnum
    having?: ActivePlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivePlansCountAggregateInputType | true
    _avg?: ActivePlansAvgAggregateInputType
    _sum?: ActivePlansSumAggregateInputType
    _min?: ActivePlansMinAggregateInputType
    _max?: ActivePlansMaxAggregateInputType
  }

  export type ActivePlansGroupByOutputType = {
    id: number
    planName: string
    planId: number
    sectionId: number
    _count: ActivePlansCountAggregateOutputType | null
    _avg: ActivePlansAvgAggregateOutputType | null
    _sum: ActivePlansSumAggregateOutputType | null
    _min: ActivePlansMinAggregateOutputType | null
    _max: ActivePlansMaxAggregateOutputType | null
  }

  type GetActivePlansGroupByPayload<T extends ActivePlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivePlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivePlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivePlansGroupByOutputType[P]>
            : GetScalarType<T[P], ActivePlansGroupByOutputType[P]>
        }
      >
    >


  export type ActivePlansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planName?: boolean
    planId?: boolean
    sectionId?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activePlans"]>

  export type ActivePlansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planName?: boolean
    planId?: boolean
    sectionId?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activePlans"]>

  export type ActivePlansSelectScalar = {
    id?: boolean
    planName?: boolean
    planId?: boolean
    sectionId?: boolean
  }

  export type ActivePlansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type ActivePlansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $ActivePlansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivePlans"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      planName: string
      planId: number
      sectionId: number
    }, ExtArgs["result"]["activePlans"]>
    composites: {}
  }

  type ActivePlansGetPayload<S extends boolean | null | undefined | ActivePlansDefaultArgs> = $Result.GetResult<Prisma.$ActivePlansPayload, S>

  type ActivePlansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivePlansFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivePlansCountAggregateInputType | true
    }

  export interface ActivePlansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivePlans'], meta: { name: 'ActivePlans' } }
    /**
     * Find zero or one ActivePlans that matches the filter.
     * @param {ActivePlansFindUniqueArgs} args - Arguments to find a ActivePlans
     * @example
     * // Get one ActivePlans
     * const activePlans = await prisma.activePlans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivePlansFindUniqueArgs>(args: SelectSubset<T, ActivePlansFindUniqueArgs<ExtArgs>>): Prisma__ActivePlansClient<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActivePlans that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivePlansFindUniqueOrThrowArgs} args - Arguments to find a ActivePlans
     * @example
     * // Get one ActivePlans
     * const activePlans = await prisma.activePlans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivePlansFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivePlansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivePlansClient<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActivePlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivePlansFindFirstArgs} args - Arguments to find a ActivePlans
     * @example
     * // Get one ActivePlans
     * const activePlans = await prisma.activePlans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivePlansFindFirstArgs>(args?: SelectSubset<T, ActivePlansFindFirstArgs<ExtArgs>>): Prisma__ActivePlansClient<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActivePlans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivePlansFindFirstOrThrowArgs} args - Arguments to find a ActivePlans
     * @example
     * // Get one ActivePlans
     * const activePlans = await prisma.activePlans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivePlansFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivePlansFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivePlansClient<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActivePlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivePlansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivePlans
     * const activePlans = await prisma.activePlans.findMany()
     * 
     * // Get first 10 ActivePlans
     * const activePlans = await prisma.activePlans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activePlansWithIdOnly = await prisma.activePlans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivePlansFindManyArgs>(args?: SelectSubset<T, ActivePlansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActivePlans.
     * @param {ActivePlansCreateArgs} args - Arguments to create a ActivePlans.
     * @example
     * // Create one ActivePlans
     * const ActivePlans = await prisma.activePlans.create({
     *   data: {
     *     // ... data to create a ActivePlans
     *   }
     * })
     * 
     */
    create<T extends ActivePlansCreateArgs>(args: SelectSubset<T, ActivePlansCreateArgs<ExtArgs>>): Prisma__ActivePlansClient<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActivePlans.
     * @param {ActivePlansCreateManyArgs} args - Arguments to create many ActivePlans.
     * @example
     * // Create many ActivePlans
     * const activePlans = await prisma.activePlans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivePlansCreateManyArgs>(args?: SelectSubset<T, ActivePlansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivePlans and returns the data saved in the database.
     * @param {ActivePlansCreateManyAndReturnArgs} args - Arguments to create many ActivePlans.
     * @example
     * // Create many ActivePlans
     * const activePlans = await prisma.activePlans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivePlans and only return the `id`
     * const activePlansWithIdOnly = await prisma.activePlans.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivePlansCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivePlansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActivePlans.
     * @param {ActivePlansDeleteArgs} args - Arguments to delete one ActivePlans.
     * @example
     * // Delete one ActivePlans
     * const ActivePlans = await prisma.activePlans.delete({
     *   where: {
     *     // ... filter to delete one ActivePlans
     *   }
     * })
     * 
     */
    delete<T extends ActivePlansDeleteArgs>(args: SelectSubset<T, ActivePlansDeleteArgs<ExtArgs>>): Prisma__ActivePlansClient<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActivePlans.
     * @param {ActivePlansUpdateArgs} args - Arguments to update one ActivePlans.
     * @example
     * // Update one ActivePlans
     * const activePlans = await prisma.activePlans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivePlansUpdateArgs>(args: SelectSubset<T, ActivePlansUpdateArgs<ExtArgs>>): Prisma__ActivePlansClient<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActivePlans.
     * @param {ActivePlansDeleteManyArgs} args - Arguments to filter ActivePlans to delete.
     * @example
     * // Delete a few ActivePlans
     * const { count } = await prisma.activePlans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivePlansDeleteManyArgs>(args?: SelectSubset<T, ActivePlansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivePlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivePlans
     * const activePlans = await prisma.activePlans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivePlansUpdateManyArgs>(args: SelectSubset<T, ActivePlansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivePlans.
     * @param {ActivePlansUpsertArgs} args - Arguments to update or create a ActivePlans.
     * @example
     * // Update or create a ActivePlans
     * const activePlans = await prisma.activePlans.upsert({
     *   create: {
     *     // ... data to create a ActivePlans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivePlans we want to update
     *   }
     * })
     */
    upsert<T extends ActivePlansUpsertArgs>(args: SelectSubset<T, ActivePlansUpsertArgs<ExtArgs>>): Prisma__ActivePlansClient<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActivePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivePlansCountArgs} args - Arguments to filter ActivePlans to count.
     * @example
     * // Count the number of ActivePlans
     * const count = await prisma.activePlans.count({
     *   where: {
     *     // ... the filter for the ActivePlans we want to count
     *   }
     * })
    **/
    count<T extends ActivePlansCountArgs>(
      args?: Subset<T, ActivePlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivePlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivePlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivePlansAggregateArgs>(args: Subset<T, ActivePlansAggregateArgs>): Prisma.PrismaPromise<GetActivePlansAggregateType<T>>

    /**
     * Group by ActivePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivePlansGroupByArgs} args - Group by arguments.
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
      T extends ActivePlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivePlansGroupByArgs['orderBy'] }
        : { orderBy?: ActivePlansGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivePlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivePlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivePlans model
   */
  readonly fields: ActivePlansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivePlans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivePlansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ActivePlans model
   */ 
  interface ActivePlansFieldRefs {
    readonly id: FieldRef<"ActivePlans", 'Int'>
    readonly planName: FieldRef<"ActivePlans", 'String'>
    readonly planId: FieldRef<"ActivePlans", 'Int'>
    readonly sectionId: FieldRef<"ActivePlans", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ActivePlans findUnique
   */
  export type ActivePlansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * Filter, which ActivePlans to fetch.
     */
    where: ActivePlansWhereUniqueInput
  }

  /**
   * ActivePlans findUniqueOrThrow
   */
  export type ActivePlansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * Filter, which ActivePlans to fetch.
     */
    where: ActivePlansWhereUniqueInput
  }

  /**
   * ActivePlans findFirst
   */
  export type ActivePlansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * Filter, which ActivePlans to fetch.
     */
    where?: ActivePlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivePlans to fetch.
     */
    orderBy?: ActivePlansOrderByWithRelationInput | ActivePlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivePlans.
     */
    cursor?: ActivePlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivePlans.
     */
    distinct?: ActivePlansScalarFieldEnum | ActivePlansScalarFieldEnum[]
  }

  /**
   * ActivePlans findFirstOrThrow
   */
  export type ActivePlansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * Filter, which ActivePlans to fetch.
     */
    where?: ActivePlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivePlans to fetch.
     */
    orderBy?: ActivePlansOrderByWithRelationInput | ActivePlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivePlans.
     */
    cursor?: ActivePlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivePlans.
     */
    distinct?: ActivePlansScalarFieldEnum | ActivePlansScalarFieldEnum[]
  }

  /**
   * ActivePlans findMany
   */
  export type ActivePlansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * Filter, which ActivePlans to fetch.
     */
    where?: ActivePlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivePlans to fetch.
     */
    orderBy?: ActivePlansOrderByWithRelationInput | ActivePlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivePlans.
     */
    cursor?: ActivePlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivePlans.
     */
    skip?: number
    distinct?: ActivePlansScalarFieldEnum | ActivePlansScalarFieldEnum[]
  }

  /**
   * ActivePlans create
   */
  export type ActivePlansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivePlans.
     */
    data: XOR<ActivePlansCreateInput, ActivePlansUncheckedCreateInput>
  }

  /**
   * ActivePlans createMany
   */
  export type ActivePlansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivePlans.
     */
    data: ActivePlansCreateManyInput | ActivePlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivePlans createManyAndReturn
   */
  export type ActivePlansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActivePlans.
     */
    data: ActivePlansCreateManyInput | ActivePlansCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivePlans update
   */
  export type ActivePlansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivePlans.
     */
    data: XOR<ActivePlansUpdateInput, ActivePlansUncheckedUpdateInput>
    /**
     * Choose, which ActivePlans to update.
     */
    where: ActivePlansWhereUniqueInput
  }

  /**
   * ActivePlans updateMany
   */
  export type ActivePlansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivePlans.
     */
    data: XOR<ActivePlansUpdateManyMutationInput, ActivePlansUncheckedUpdateManyInput>
    /**
     * Filter which ActivePlans to update
     */
    where?: ActivePlansWhereInput
  }

  /**
   * ActivePlans upsert
   */
  export type ActivePlansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivePlans to update in case it exists.
     */
    where: ActivePlansWhereUniqueInput
    /**
     * In case the ActivePlans found by the `where` argument doesn't exist, create a new ActivePlans with this data.
     */
    create: XOR<ActivePlansCreateInput, ActivePlansUncheckedCreateInput>
    /**
     * In case the ActivePlans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivePlansUpdateInput, ActivePlansUncheckedUpdateInput>
  }

  /**
   * ActivePlans delete
   */
  export type ActivePlansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    /**
     * Filter which ActivePlans to delete.
     */
    where: ActivePlansWhereUniqueInput
  }

  /**
   * ActivePlans deleteMany
   */
  export type ActivePlansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivePlans to delete
     */
    where?: ActivePlansWhereInput
  }

  /**
   * ActivePlans without action
   */
  export type ActivePlansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
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
    id: number | null
  }

  export type SectionTypeSumAggregateOutputType = {
    id: number | null
  }

  export type SectionTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type SectionTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type SectionTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type SectionTypeAvgAggregateInputType = {
    id?: true
  }

  export type SectionTypeSumAggregateInputType = {
    id?: true
  }

  export type SectionTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SectionTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type SectionTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
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
    id: number
    name: string
    description: string
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
    id?: boolean
    name?: boolean
    description?: boolean
    sections?: boolean | SectionType$sectionsArgs<ExtArgs>
    _count?: boolean | SectionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionType"]>

  export type SectionTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["sectionType"]>

  export type SectionTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type SectionTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | SectionType$sectionsArgs<ExtArgs>
    _count?: boolean | SectionTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SectionTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionType"
    objects: {
      sections: Prisma.$SectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
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
     * // Only select the `id`
     * const sectionTypeWithIdOnly = await prisma.sectionType.findMany({ select: { id: true } })
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
     * // Create many SectionTypes and only return the `id`
     * const sectionTypeWithIdOnly = await prisma.sectionType.createManyAndReturn({ 
     *   select: { id: true },
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
    sections<T extends SectionType$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, SectionType$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"SectionType", 'Int'>
    readonly name: FieldRef<"SectionType", 'String'>
    readonly description: FieldRef<"SectionType", 'String'>
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
   * SectionType.sections
   */
  export type SectionType$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
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
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    id: number | null
    sectionType: number | null
    area: number | null
  }

  export type SectionSumAggregateOutputType = {
    id: number | null
    sectionType: number | null
    area: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: number | null
    name: string | null
    sectionType: number | null
    area: number | null
  }

  export type SectionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sectionType: number | null
    area: number | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    name: number
    sectionType: number
    area: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    id?: true
    sectionType?: true
    area?: true
  }

  export type SectionSumAggregateInputType = {
    id?: true
    sectionType?: true
    area?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    name?: true
    sectionType?: true
    area?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    name?: true
    sectionType?: true
    area?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    name?: true
    sectionType?: true
    area?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: number
    name: string
    sectionType: number
    area: number | null
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectionType?: boolean
    area?: boolean
    type?: boolean | SectionTypeDefaultArgs<ExtArgs>
    assets?: boolean | Section$assetsArgs<ExtArgs>
    coordinates?: boolean | Section$coordinatesArgs<ExtArgs>
    activePlans?: boolean | Section$activePlansArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sectionType?: boolean
    area?: boolean
    type?: boolean | SectionTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    name?: boolean
    sectionType?: boolean
    area?: boolean
  }

  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | SectionTypeDefaultArgs<ExtArgs>
    assets?: boolean | Section$assetsArgs<ExtArgs>
    coordinates?: boolean | Section$coordinatesArgs<ExtArgs>
    activePlans?: boolean | Section$activePlansArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | SectionTypeDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      type: Prisma.$SectionTypePayload<ExtArgs>
      assets: Prisma.$AssetPayload<ExtArgs>[]
      coordinates: Prisma.$CoordinatePayload<ExtArgs>[]
      activePlans: Prisma.$ActivePlansPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sectionType: number
      area: number | null
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends SectionTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionTypeDefaultArgs<ExtArgs>>): Prisma__SectionTypeClient<$Result.GetResult<Prisma.$SectionTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assets<T extends Section$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Section$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany"> | Null>
    coordinates<T extends Section$coordinatesArgs<ExtArgs> = {}>(args?: Subset<T, Section$coordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findMany"> | Null>
    activePlans<T extends Section$activePlansArgs<ExtArgs> = {}>(args?: Subset<T, Section$activePlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivePlansPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Section model
   */ 
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'Int'>
    readonly name: FieldRef<"Section", 'String'>
    readonly sectionType: FieldRef<"Section", 'Int'>
    readonly area: FieldRef<"Section", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
  }

  /**
   * Section.assets
   */
  export type Section$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Section.coordinates
   */
  export type Section$coordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    where?: CoordinateWhereInput
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    cursor?: CoordinateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Section.activePlans
   */
  export type Section$activePlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivePlans
     */
    select?: ActivePlansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivePlansInclude<ExtArgs> | null
    where?: ActivePlansWhereInput
    orderBy?: ActivePlansOrderByWithRelationInput | ActivePlansOrderByWithRelationInput[]
    cursor?: ActivePlansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivePlansScalarFieldEnum | ActivePlansScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model AssetType
   */

  export type AggregateAssetType = {
    _count: AssetTypeCountAggregateOutputType | null
    _avg: AssetTypeAvgAggregateOutputType | null
    _sum: AssetTypeSumAggregateOutputType | null
    _min: AssetTypeMinAggregateOutputType | null
    _max: AssetTypeMaxAggregateOutputType | null
  }

  export type AssetTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type AssetTypeSumAggregateOutputType = {
    id: number | null
  }

  export type AssetTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type AssetTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type AssetTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type AssetTypeAvgAggregateInputType = {
    id?: true
  }

  export type AssetTypeSumAggregateInputType = {
    id?: true
  }

  export type AssetTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type AssetTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type AssetTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type AssetTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetType to aggregate.
     */
    where?: AssetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetTypes to fetch.
     */
    orderBy?: AssetTypeOrderByWithRelationInput | AssetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssetTypes
    **/
    _count?: true | AssetTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetTypeMaxAggregateInputType
  }

  export type GetAssetTypeAggregateType<T extends AssetTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAssetType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssetType[P]>
      : GetScalarType<T[P], AggregateAssetType[P]>
  }




  export type AssetTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetTypeWhereInput
    orderBy?: AssetTypeOrderByWithAggregationInput | AssetTypeOrderByWithAggregationInput[]
    by: AssetTypeScalarFieldEnum[] | AssetTypeScalarFieldEnum
    having?: AssetTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetTypeCountAggregateInputType | true
    _avg?: AssetTypeAvgAggregateInputType
    _sum?: AssetTypeSumAggregateInputType
    _min?: AssetTypeMinAggregateInputType
    _max?: AssetTypeMaxAggregateInputType
  }

  export type AssetTypeGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: AssetTypeCountAggregateOutputType | null
    _avg: AssetTypeAvgAggregateOutputType | null
    _sum: AssetTypeSumAggregateOutputType | null
    _min: AssetTypeMinAggregateOutputType | null
    _max: AssetTypeMaxAggregateOutputType | null
  }

  type GetAssetTypeGroupByPayload<T extends AssetTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AssetTypeGroupByOutputType[P]>
        }
      >
    >


  export type AssetTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    assets?: boolean | AssetType$assetsArgs<ExtArgs>
    _count?: boolean | AssetTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assetType"]>

  export type AssetTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["assetType"]>

  export type AssetTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type AssetTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | AssetType$assetsArgs<ExtArgs>
    _count?: boolean | AssetTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssetTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssetType"
    objects: {
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["assetType"]>
    composites: {}
  }

  type AssetTypeGetPayload<S extends boolean | null | undefined | AssetTypeDefaultArgs> = $Result.GetResult<Prisma.$AssetTypePayload, S>

  type AssetTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetTypeCountAggregateInputType | true
    }

  export interface AssetTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssetType'], meta: { name: 'AssetType' } }
    /**
     * Find zero or one AssetType that matches the filter.
     * @param {AssetTypeFindUniqueArgs} args - Arguments to find a AssetType
     * @example
     * // Get one AssetType
     * const assetType = await prisma.assetType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetTypeFindUniqueArgs>(args: SelectSubset<T, AssetTypeFindUniqueArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssetType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssetTypeFindUniqueOrThrowArgs} args - Arguments to find a AssetType
     * @example
     * // Get one AssetType
     * const assetType = await prisma.assetType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssetType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeFindFirstArgs} args - Arguments to find a AssetType
     * @example
     * // Get one AssetType
     * const assetType = await prisma.assetType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetTypeFindFirstArgs>(args?: SelectSubset<T, AssetTypeFindFirstArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssetType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeFindFirstOrThrowArgs} args - Arguments to find a AssetType
     * @example
     * // Get one AssetType
     * const assetType = await prisma.assetType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssetTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssetTypes
     * const assetTypes = await prisma.assetType.findMany()
     * 
     * // Get first 10 AssetTypes
     * const assetTypes = await prisma.assetType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetTypeWithIdOnly = await prisma.assetType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetTypeFindManyArgs>(args?: SelectSubset<T, AssetTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssetType.
     * @param {AssetTypeCreateArgs} args - Arguments to create a AssetType.
     * @example
     * // Create one AssetType
     * const AssetType = await prisma.assetType.create({
     *   data: {
     *     // ... data to create a AssetType
     *   }
     * })
     * 
     */
    create<T extends AssetTypeCreateArgs>(args: SelectSubset<T, AssetTypeCreateArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssetTypes.
     * @param {AssetTypeCreateManyArgs} args - Arguments to create many AssetTypes.
     * @example
     * // Create many AssetTypes
     * const assetType = await prisma.assetType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetTypeCreateManyArgs>(args?: SelectSubset<T, AssetTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssetTypes and returns the data saved in the database.
     * @param {AssetTypeCreateManyAndReturnArgs} args - Arguments to create many AssetTypes.
     * @example
     * // Create many AssetTypes
     * const assetType = await prisma.assetType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssetTypes and only return the `id`
     * const assetTypeWithIdOnly = await prisma.assetType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AssetType.
     * @param {AssetTypeDeleteArgs} args - Arguments to delete one AssetType.
     * @example
     * // Delete one AssetType
     * const AssetType = await prisma.assetType.delete({
     *   where: {
     *     // ... filter to delete one AssetType
     *   }
     * })
     * 
     */
    delete<T extends AssetTypeDeleteArgs>(args: SelectSubset<T, AssetTypeDeleteArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssetType.
     * @param {AssetTypeUpdateArgs} args - Arguments to update one AssetType.
     * @example
     * // Update one AssetType
     * const assetType = await prisma.assetType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetTypeUpdateArgs>(args: SelectSubset<T, AssetTypeUpdateArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssetTypes.
     * @param {AssetTypeDeleteManyArgs} args - Arguments to filter AssetTypes to delete.
     * @example
     * // Delete a few AssetTypes
     * const { count } = await prisma.assetType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetTypeDeleteManyArgs>(args?: SelectSubset<T, AssetTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssetTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssetTypes
     * const assetType = await prisma.assetType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetTypeUpdateManyArgs>(args: SelectSubset<T, AssetTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssetType.
     * @param {AssetTypeUpsertArgs} args - Arguments to update or create a AssetType.
     * @example
     * // Update or create a AssetType
     * const assetType = await prisma.assetType.upsert({
     *   create: {
     *     // ... data to create a AssetType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssetType we want to update
     *   }
     * })
     */
    upsert<T extends AssetTypeUpsertArgs>(args: SelectSubset<T, AssetTypeUpsertArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssetTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeCountArgs} args - Arguments to filter AssetTypes to count.
     * @example
     * // Count the number of AssetTypes
     * const count = await prisma.assetType.count({
     *   where: {
     *     // ... the filter for the AssetTypes we want to count
     *   }
     * })
    **/
    count<T extends AssetTypeCountArgs>(
      args?: Subset<T, AssetTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssetType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetTypeAggregateArgs>(args: Subset<T, AssetTypeAggregateArgs>): Prisma.PrismaPromise<GetAssetTypeAggregateType<T>>

    /**
     * Group by AssetType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetTypeGroupByArgs} args - Group by arguments.
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
      T extends AssetTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetTypeGroupByArgs['orderBy'] }
        : { orderBy?: AssetTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssetType model
   */
  readonly fields: AssetTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssetType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends AssetType$assetsArgs<ExtArgs> = {}>(args?: Subset<T, AssetType$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AssetType model
   */ 
  interface AssetTypeFieldRefs {
    readonly id: FieldRef<"AssetType", 'Int'>
    readonly name: FieldRef<"AssetType", 'String'>
    readonly description: FieldRef<"AssetType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AssetType findUnique
   */
  export type AssetTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetType to fetch.
     */
    where: AssetTypeWhereUniqueInput
  }

  /**
   * AssetType findUniqueOrThrow
   */
  export type AssetTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetType to fetch.
     */
    where: AssetTypeWhereUniqueInput
  }

  /**
   * AssetType findFirst
   */
  export type AssetTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetType to fetch.
     */
    where?: AssetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetTypes to fetch.
     */
    orderBy?: AssetTypeOrderByWithRelationInput | AssetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetTypes.
     */
    cursor?: AssetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetTypes.
     */
    distinct?: AssetTypeScalarFieldEnum | AssetTypeScalarFieldEnum[]
  }

  /**
   * AssetType findFirstOrThrow
   */
  export type AssetTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetType to fetch.
     */
    where?: AssetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetTypes to fetch.
     */
    orderBy?: AssetTypeOrderByWithRelationInput | AssetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssetTypes.
     */
    cursor?: AssetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssetTypes.
     */
    distinct?: AssetTypeScalarFieldEnum | AssetTypeScalarFieldEnum[]
  }

  /**
   * AssetType findMany
   */
  export type AssetTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter, which AssetTypes to fetch.
     */
    where?: AssetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssetTypes to fetch.
     */
    orderBy?: AssetTypeOrderByWithRelationInput | AssetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssetTypes.
     */
    cursor?: AssetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssetTypes.
     */
    skip?: number
    distinct?: AssetTypeScalarFieldEnum | AssetTypeScalarFieldEnum[]
  }

  /**
   * AssetType create
   */
  export type AssetTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AssetType.
     */
    data: XOR<AssetTypeCreateInput, AssetTypeUncheckedCreateInput>
  }

  /**
   * AssetType createMany
   */
  export type AssetTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssetTypes.
     */
    data: AssetTypeCreateManyInput | AssetTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetType createManyAndReturn
   */
  export type AssetTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AssetTypes.
     */
    data: AssetTypeCreateManyInput | AssetTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssetType update
   */
  export type AssetTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AssetType.
     */
    data: XOR<AssetTypeUpdateInput, AssetTypeUncheckedUpdateInput>
    /**
     * Choose, which AssetType to update.
     */
    where: AssetTypeWhereUniqueInput
  }

  /**
   * AssetType updateMany
   */
  export type AssetTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssetTypes.
     */
    data: XOR<AssetTypeUpdateManyMutationInput, AssetTypeUncheckedUpdateManyInput>
    /**
     * Filter which AssetTypes to update
     */
    where?: AssetTypeWhereInput
  }

  /**
   * AssetType upsert
   */
  export type AssetTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AssetType to update in case it exists.
     */
    where: AssetTypeWhereUniqueInput
    /**
     * In case the AssetType found by the `where` argument doesn't exist, create a new AssetType with this data.
     */
    create: XOR<AssetTypeCreateInput, AssetTypeUncheckedCreateInput>
    /**
     * In case the AssetType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetTypeUpdateInput, AssetTypeUncheckedUpdateInput>
  }

  /**
   * AssetType delete
   */
  export type AssetTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
    /**
     * Filter which AssetType to delete.
     */
    where: AssetTypeWhereUniqueInput
  }

  /**
   * AssetType deleteMany
   */
  export type AssetTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssetTypes to delete
     */
    where?: AssetTypeWhereInput
  }

  /**
   * AssetType.assets
   */
  export type AssetType$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * AssetType without action
   */
  export type AssetTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetType
     */
    select?: AssetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetTypeInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetAvgAggregateOutputType = {
    id: number | null
    assetType: number | null
    assetSection: number | null
  }

  export type AssetSumAggregateOutputType = {
    id: number | null
    assetType: number | null
    assetSection: number | null
  }

  export type AssetMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    assetType: number | null
    assetSection: number | null
  }

  export type AssetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    assetType: number | null
    assetSection: number | null
  }

  export type AssetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    assetType: number
    assetSection: number
    _all: number
  }


  export type AssetAvgAggregateInputType = {
    id?: true
    assetType?: true
    assetSection?: true
  }

  export type AssetSumAggregateInputType = {
    id?: true
    assetType?: true
    assetSection?: true
  }

  export type AssetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    assetType?: true
    assetSection?: true
  }

  export type AssetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    assetType?: true
    assetSection?: true
  }

  export type AssetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    assetType?: true
    assetSection?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _avg?: AssetAvgAggregateInputType
    _sum?: AssetSumAggregateInputType
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    id: number
    name: string
    description: string
    assetType: number
    assetSection: number
    _count: AssetCountAggregateOutputType | null
    _avg: AssetAvgAggregateOutputType | null
    _sum: AssetSumAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    assetType?: boolean
    assetSection?: boolean
    planAssets?: boolean | Asset$planAssetsArgs<ExtArgs>
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    assetType?: boolean
    assetSection?: boolean
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    assetType?: boolean
    assetSection?: boolean
  }

  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planAssets?: boolean | Asset$planAssetsArgs<ExtArgs>
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AssetTypeDefaultArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      planAssets: Prisma.$PlanAssetsPayload<ExtArgs>[]
      type: Prisma.$AssetTypePayload<ExtArgs>
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      assetType: number
      assetSection: number
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetWithIdOnly = await prisma.asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `id`
     * const assetWithIdOnly = await prisma.asset.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
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
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planAssets<T extends Asset$planAssetsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$planAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanAssetsPayload<ExtArgs>, T, "findMany"> | Null>
    type<T extends AssetTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssetTypeDefaultArgs<ExtArgs>>): Prisma__AssetTypeClient<$Result.GetResult<Prisma.$AssetTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Asset model
   */ 
  interface AssetFieldRefs {
    readonly id: FieldRef<"Asset", 'Int'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly description: FieldRef<"Asset", 'String'>
    readonly assetType: FieldRef<"Asset", 'Int'>
    readonly assetSection: FieldRef<"Asset", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
  }

  /**
   * Asset.planAssets
   */
  export type Asset$planAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanAssets
     */
    select?: PlanAssetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanAssetsInclude<ExtArgs> | null
    where?: PlanAssetsWhereInput
    orderBy?: PlanAssetsOrderByWithRelationInput | PlanAssetsOrderByWithRelationInput[]
    cursor?: PlanAssetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanAssetsScalarFieldEnum | PlanAssetsScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model Coordinate
   */

  export type AggregateCoordinate = {
    _count: CoordinateCountAggregateOutputType | null
    _avg: CoordinateAvgAggregateOutputType | null
    _sum: CoordinateSumAggregateOutputType | null
    _min: CoordinateMinAggregateOutputType | null
    _max: CoordinateMaxAggregateOutputType | null
  }

  export type CoordinateAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    sectionId: number | null
  }

  export type CoordinateSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    sectionId: number | null
  }

  export type CoordinateMinAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    sectionId: number | null
  }

  export type CoordinateMaxAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    sectionId: number | null
  }

  export type CoordinateCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    sectionId: number
    _all: number
  }


  export type CoordinateAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    sectionId?: true
  }

  export type CoordinateSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    sectionId?: true
  }

  export type CoordinateMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    sectionId?: true
  }

  export type CoordinateMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    sectionId?: true
  }

  export type CoordinateCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    sectionId?: true
    _all?: true
  }

  export type CoordinateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinate to aggregate.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coordinates
    **/
    _count?: true | CoordinateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoordinateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoordinateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoordinateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoordinateMaxAggregateInputType
  }

  export type GetCoordinateAggregateType<T extends CoordinateAggregateArgs> = {
        [P in keyof T & keyof AggregateCoordinate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoordinate[P]>
      : GetScalarType<T[P], AggregateCoordinate[P]>
  }




  export type CoordinateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoordinateWhereInput
    orderBy?: CoordinateOrderByWithAggregationInput | CoordinateOrderByWithAggregationInput[]
    by: CoordinateScalarFieldEnum[] | CoordinateScalarFieldEnum
    having?: CoordinateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoordinateCountAggregateInputType | true
    _avg?: CoordinateAvgAggregateInputType
    _sum?: CoordinateSumAggregateInputType
    _min?: CoordinateMinAggregateInputType
    _max?: CoordinateMaxAggregateInputType
  }

  export type CoordinateGroupByOutputType = {
    id: number
    latitude: number
    longitude: number
    sectionId: number
    _count: CoordinateCountAggregateOutputType | null
    _avg: CoordinateAvgAggregateOutputType | null
    _sum: CoordinateSumAggregateOutputType | null
    _min: CoordinateMinAggregateOutputType | null
    _max: CoordinateMaxAggregateOutputType | null
  }

  type GetCoordinateGroupByPayload<T extends CoordinateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoordinateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoordinateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoordinateGroupByOutputType[P]>
            : GetScalarType<T[P], CoordinateGroupByOutputType[P]>
        }
      >
    >


  export type CoordinateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coordinate"]>

  export type CoordinateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coordinate"]>

  export type CoordinateSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    sectionId?: boolean
  }

  export type CoordinateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }
  export type CoordinateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $CoordinatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coordinate"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      latitude: number
      longitude: number
      sectionId: number
    }, ExtArgs["result"]["coordinate"]>
    composites: {}
  }

  type CoordinateGetPayload<S extends boolean | null | undefined | CoordinateDefaultArgs> = $Result.GetResult<Prisma.$CoordinatePayload, S>

  type CoordinateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoordinateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoordinateCountAggregateInputType | true
    }

  export interface CoordinateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coordinate'], meta: { name: 'Coordinate' } }
    /**
     * Find zero or one Coordinate that matches the filter.
     * @param {CoordinateFindUniqueArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoordinateFindUniqueArgs>(args: SelectSubset<T, CoordinateFindUniqueArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Coordinate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CoordinateFindUniqueOrThrowArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoordinateFindUniqueOrThrowArgs>(args: SelectSubset<T, CoordinateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Coordinate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindFirstArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoordinateFindFirstArgs>(args?: SelectSubset<T, CoordinateFindFirstArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Coordinate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindFirstOrThrowArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoordinateFindFirstOrThrowArgs>(args?: SelectSubset<T, CoordinateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Coordinates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coordinates
     * const coordinates = await prisma.coordinate.findMany()
     * 
     * // Get first 10 Coordinates
     * const coordinates = await prisma.coordinate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coordinateWithIdOnly = await prisma.coordinate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoordinateFindManyArgs>(args?: SelectSubset<T, CoordinateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Coordinate.
     * @param {CoordinateCreateArgs} args - Arguments to create a Coordinate.
     * @example
     * // Create one Coordinate
     * const Coordinate = await prisma.coordinate.create({
     *   data: {
     *     // ... data to create a Coordinate
     *   }
     * })
     * 
     */
    create<T extends CoordinateCreateArgs>(args: SelectSubset<T, CoordinateCreateArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Coordinates.
     * @param {CoordinateCreateManyArgs} args - Arguments to create many Coordinates.
     * @example
     * // Create many Coordinates
     * const coordinate = await prisma.coordinate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoordinateCreateManyArgs>(args?: SelectSubset<T, CoordinateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coordinates and returns the data saved in the database.
     * @param {CoordinateCreateManyAndReturnArgs} args - Arguments to create many Coordinates.
     * @example
     * // Create many Coordinates
     * const coordinate = await prisma.coordinate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coordinates and only return the `id`
     * const coordinateWithIdOnly = await prisma.coordinate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoordinateCreateManyAndReturnArgs>(args?: SelectSubset<T, CoordinateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Coordinate.
     * @param {CoordinateDeleteArgs} args - Arguments to delete one Coordinate.
     * @example
     * // Delete one Coordinate
     * const Coordinate = await prisma.coordinate.delete({
     *   where: {
     *     // ... filter to delete one Coordinate
     *   }
     * })
     * 
     */
    delete<T extends CoordinateDeleteArgs>(args: SelectSubset<T, CoordinateDeleteArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Coordinate.
     * @param {CoordinateUpdateArgs} args - Arguments to update one Coordinate.
     * @example
     * // Update one Coordinate
     * const coordinate = await prisma.coordinate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoordinateUpdateArgs>(args: SelectSubset<T, CoordinateUpdateArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Coordinates.
     * @param {CoordinateDeleteManyArgs} args - Arguments to filter Coordinates to delete.
     * @example
     * // Delete a few Coordinates
     * const { count } = await prisma.coordinate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoordinateDeleteManyArgs>(args?: SelectSubset<T, CoordinateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coordinates
     * const coordinate = await prisma.coordinate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoordinateUpdateManyArgs>(args: SelectSubset<T, CoordinateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coordinate.
     * @param {CoordinateUpsertArgs} args - Arguments to update or create a Coordinate.
     * @example
     * // Update or create a Coordinate
     * const coordinate = await prisma.coordinate.upsert({
     *   create: {
     *     // ... data to create a Coordinate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coordinate we want to update
     *   }
     * })
     */
    upsert<T extends CoordinateUpsertArgs>(args: SelectSubset<T, CoordinateUpsertArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateCountArgs} args - Arguments to filter Coordinates to count.
     * @example
     * // Count the number of Coordinates
     * const count = await prisma.coordinate.count({
     *   where: {
     *     // ... the filter for the Coordinates we want to count
     *   }
     * })
    **/
    count<T extends CoordinateCountArgs>(
      args?: Subset<T, CoordinateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoordinateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coordinate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoordinateAggregateArgs>(args: Subset<T, CoordinateAggregateArgs>): Prisma.PrismaPromise<GetCoordinateAggregateType<T>>

    /**
     * Group by Coordinate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateGroupByArgs} args - Group by arguments.
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
      T extends CoordinateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoordinateGroupByArgs['orderBy'] }
        : { orderBy?: CoordinateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoordinateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoordinateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coordinate model
   */
  readonly fields: CoordinateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coordinate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoordinateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Coordinate model
   */ 
  interface CoordinateFieldRefs {
    readonly id: FieldRef<"Coordinate", 'Int'>
    readonly latitude: FieldRef<"Coordinate", 'Float'>
    readonly longitude: FieldRef<"Coordinate", 'Float'>
    readonly sectionId: FieldRef<"Coordinate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Coordinate findUnique
   */
  export type CoordinateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate findUniqueOrThrow
   */
  export type CoordinateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate findFirst
   */
  export type CoordinateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinates.
     */
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate findFirstOrThrow
   */
  export type CoordinateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinates.
     */
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate findMany
   */
  export type CoordinateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinates to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate create
   */
  export type CoordinateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The data needed to create a Coordinate.
     */
    data: XOR<CoordinateCreateInput, CoordinateUncheckedCreateInput>
  }

  /**
   * Coordinate createMany
   */
  export type CoordinateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coordinates.
     */
    data: CoordinateCreateManyInput | CoordinateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coordinate createManyAndReturn
   */
  export type CoordinateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Coordinates.
     */
    data: CoordinateCreateManyInput | CoordinateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coordinate update
   */
  export type CoordinateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The data needed to update a Coordinate.
     */
    data: XOR<CoordinateUpdateInput, CoordinateUncheckedUpdateInput>
    /**
     * Choose, which Coordinate to update.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate updateMany
   */
  export type CoordinateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coordinates.
     */
    data: XOR<CoordinateUpdateManyMutationInput, CoordinateUncheckedUpdateManyInput>
    /**
     * Filter which Coordinates to update
     */
    where?: CoordinateWhereInput
  }

  /**
   * Coordinate upsert
   */
  export type CoordinateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The filter to search for the Coordinate to update in case it exists.
     */
    where: CoordinateWhereUniqueInput
    /**
     * In case the Coordinate found by the `where` argument doesn't exist, create a new Coordinate with this data.
     */
    create: XOR<CoordinateCreateInput, CoordinateUncheckedCreateInput>
    /**
     * In case the Coordinate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoordinateUpdateInput, CoordinateUncheckedUpdateInput>
  }

  /**
   * Coordinate delete
   */
  export type CoordinateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter which Coordinate to delete.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate deleteMany
   */
  export type CoordinateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinates to delete
     */
    where?: CoordinateWhereInput
  }

  /**
   * Coordinate without action
   */
  export type CoordinateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
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


  export const ShiftScalarFieldEnum: {
    shiftId: 'shiftId',
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    planId: 'planId',
    planName: 'planName',
    planDescription: 'planDescription',
    form: 'form',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    notes: 'notes'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const PlanAssetsScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    assetId: 'assetId',
    assetName: 'assetName'
  };

  export type PlanAssetsScalarFieldEnum = (typeof PlanAssetsScalarFieldEnum)[keyof typeof PlanAssetsScalarFieldEnum]


  export const PlanfilesScalarFieldEnum: {
    fileId: 'fileId',
    fileName: 'fileName',
    filePath: 'filePath',
    type: 'type',
    planId: 'planId'
  };

  export type PlanfilesScalarFieldEnum = (typeof PlanfilesScalarFieldEnum)[keyof typeof PlanfilesScalarFieldEnum]


  export const ActivePlansScalarFieldEnum: {
    id: 'id',
    planName: 'planName',
    planId: 'planId',
    sectionId: 'sectionId'
  };

  export type ActivePlansScalarFieldEnum = (typeof ActivePlansScalarFieldEnum)[keyof typeof ActivePlansScalarFieldEnum]


  export const SectionTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type SectionTypeScalarFieldEnum = (typeof SectionTypeScalarFieldEnum)[keyof typeof SectionTypeScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sectionType: 'sectionType',
    area: 'area'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const AssetTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type AssetTypeScalarFieldEnum = (typeof AssetTypeScalarFieldEnum)[keyof typeof AssetTypeScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    assetType: 'assetType',
    assetSection: 'assetSection'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const CoordinateScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    sectionId: 'sectionId'
  };

  export type CoordinateScalarFieldEnum = (typeof CoordinateScalarFieldEnum)[keyof typeof CoordinateScalarFieldEnum]


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
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


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

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    shiftId?: IntFilter<"Shift"> | number
    name?: StringFilter<"Shift"> | string
    startTime?: StringFilter<"Shift"> | string
    endTime?: StringFilter<"Shift"> | string
    isActive?: BoolFilter<"Shift"> | boolean
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }

  export type ShiftOrderByWithRelationInput = {
    shiftId?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    shiftId?: number
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    name?: StringFilter<"Shift"> | string
    startTime?: StringFilter<"Shift"> | string
    endTime?: StringFilter<"Shift"> | string
    isActive?: BoolFilter<"Shift"> | boolean
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }, "shiftId">

  export type ShiftOrderByWithAggregationInput = {
    shiftId?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftCountOrderByAggregateInput
    _avg?: ShiftAvgOrderByAggregateInput
    _max?: ShiftMaxOrderByAggregateInput
    _min?: ShiftMinOrderByAggregateInput
    _sum?: ShiftSumOrderByAggregateInput
  }

  export type ShiftScalarWhereWithAggregatesInput = {
    AND?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    OR?: ShiftScalarWhereWithAggregatesInput[]
    NOT?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    shiftId?: IntWithAggregatesFilter<"Shift"> | number
    name?: StringWithAggregatesFilter<"Shift"> | string
    startTime?: StringWithAggregatesFilter<"Shift"> | string
    endTime?: StringWithAggregatesFilter<"Shift"> | string
    isActive?: BoolWithAggregatesFilter<"Shift"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    planId?: IntFilter<"Plan"> | number
    planName?: StringFilter<"Plan"> | string
    planDescription?: StringNullableFilter<"Plan"> | string | null
    form?: JsonFilter<"Plan">
    status?: EnumPlanStatusFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    notes?: StringNullableFilter<"Plan"> | string | null
    planFiles?: PlanfilesListRelationFilter
    activePlans?: ActivePlansListRelationFilter
    planAssets?: PlanAssetsListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    planId?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrderInput | SortOrder
    form?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    planFiles?: PlanfilesOrderByRelationAggregateInput
    activePlans?: ActivePlansOrderByRelationAggregateInput
    planAssets?: PlanAssetsOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    planId?: number
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    planName?: StringFilter<"Plan"> | string
    planDescription?: StringNullableFilter<"Plan"> | string | null
    form?: JsonFilter<"Plan">
    status?: EnumPlanStatusFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    notes?: StringNullableFilter<"Plan"> | string | null
    planFiles?: PlanfilesListRelationFilter
    activePlans?: ActivePlansListRelationFilter
    planAssets?: PlanAssetsListRelationFilter
  }, "planId">

  export type PlanOrderByWithAggregationInput = {
    planId?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrderInput | SortOrder
    form?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    planId?: IntWithAggregatesFilter<"Plan"> | number
    planName?: StringWithAggregatesFilter<"Plan"> | string
    planDescription?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    form?: JsonWithAggregatesFilter<"Plan">
    status?: EnumPlanStatusWithAggregatesFilter<"Plan"> | $Enums.PlanStatus
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Plan"> | string | null
  }

  export type PlanAssetsWhereInput = {
    AND?: PlanAssetsWhereInput | PlanAssetsWhereInput[]
    OR?: PlanAssetsWhereInput[]
    NOT?: PlanAssetsWhereInput | PlanAssetsWhereInput[]
    id?: IntFilter<"PlanAssets"> | number
    planId?: IntFilter<"PlanAssets"> | number
    assetId?: IntFilter<"PlanAssets"> | number
    assetName?: StringFilter<"PlanAssets"> | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    asset?: XOR<AssetRelationFilter, AssetWhereInput>
  }

  export type PlanAssetsOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    assetId?: SortOrder
    assetName?: SortOrder
    plan?: PlanOrderByWithRelationInput
    asset?: AssetOrderByWithRelationInput
  }

  export type PlanAssetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanAssetsWhereInput | PlanAssetsWhereInput[]
    OR?: PlanAssetsWhereInput[]
    NOT?: PlanAssetsWhereInput | PlanAssetsWhereInput[]
    planId?: IntFilter<"PlanAssets"> | number
    assetId?: IntFilter<"PlanAssets"> | number
    assetName?: StringFilter<"PlanAssets"> | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    asset?: XOR<AssetRelationFilter, AssetWhereInput>
  }, "id">

  export type PlanAssetsOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    assetId?: SortOrder
    assetName?: SortOrder
    _count?: PlanAssetsCountOrderByAggregateInput
    _avg?: PlanAssetsAvgOrderByAggregateInput
    _max?: PlanAssetsMaxOrderByAggregateInput
    _min?: PlanAssetsMinOrderByAggregateInput
    _sum?: PlanAssetsSumOrderByAggregateInput
  }

  export type PlanAssetsScalarWhereWithAggregatesInput = {
    AND?: PlanAssetsScalarWhereWithAggregatesInput | PlanAssetsScalarWhereWithAggregatesInput[]
    OR?: PlanAssetsScalarWhereWithAggregatesInput[]
    NOT?: PlanAssetsScalarWhereWithAggregatesInput | PlanAssetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlanAssets"> | number
    planId?: IntWithAggregatesFilter<"PlanAssets"> | number
    assetId?: IntWithAggregatesFilter<"PlanAssets"> | number
    assetName?: StringWithAggregatesFilter<"PlanAssets"> | string
  }

  export type PlanfilesWhereInput = {
    AND?: PlanfilesWhereInput | PlanfilesWhereInput[]
    OR?: PlanfilesWhereInput[]
    NOT?: PlanfilesWhereInput | PlanfilesWhereInput[]
    fileId?: IntFilter<"Planfiles"> | number
    fileName?: StringFilter<"Planfiles"> | string
    filePath?: StringFilter<"Planfiles"> | string
    type?: StringFilter<"Planfiles"> | string
    planId?: IntFilter<"Planfiles"> | number
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
  }

  export type PlanfilesOrderByWithRelationInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    type?: SortOrder
    planId?: SortOrder
    plan?: PlanOrderByWithRelationInput
  }

  export type PlanfilesWhereUniqueInput = Prisma.AtLeast<{
    fileId?: number
    AND?: PlanfilesWhereInput | PlanfilesWhereInput[]
    OR?: PlanfilesWhereInput[]
    NOT?: PlanfilesWhereInput | PlanfilesWhereInput[]
    fileName?: StringFilter<"Planfiles"> | string
    filePath?: StringFilter<"Planfiles"> | string
    type?: StringFilter<"Planfiles"> | string
    planId?: IntFilter<"Planfiles"> | number
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
  }, "fileId">

  export type PlanfilesOrderByWithAggregationInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    type?: SortOrder
    planId?: SortOrder
    _count?: PlanfilesCountOrderByAggregateInput
    _avg?: PlanfilesAvgOrderByAggregateInput
    _max?: PlanfilesMaxOrderByAggregateInput
    _min?: PlanfilesMinOrderByAggregateInput
    _sum?: PlanfilesSumOrderByAggregateInput
  }

  export type PlanfilesScalarWhereWithAggregatesInput = {
    AND?: PlanfilesScalarWhereWithAggregatesInput | PlanfilesScalarWhereWithAggregatesInput[]
    OR?: PlanfilesScalarWhereWithAggregatesInput[]
    NOT?: PlanfilesScalarWhereWithAggregatesInput | PlanfilesScalarWhereWithAggregatesInput[]
    fileId?: IntWithAggregatesFilter<"Planfiles"> | number
    fileName?: StringWithAggregatesFilter<"Planfiles"> | string
    filePath?: StringWithAggregatesFilter<"Planfiles"> | string
    type?: StringWithAggregatesFilter<"Planfiles"> | string
    planId?: IntWithAggregatesFilter<"Planfiles"> | number
  }

  export type ActivePlansWhereInput = {
    AND?: ActivePlansWhereInput | ActivePlansWhereInput[]
    OR?: ActivePlansWhereInput[]
    NOT?: ActivePlansWhereInput | ActivePlansWhereInput[]
    id?: IntFilter<"ActivePlans"> | number
    planName?: StringFilter<"ActivePlans"> | string
    planId?: IntFilter<"ActivePlans"> | number
    sectionId?: IntFilter<"ActivePlans"> | number
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    section?: XOR<SectionRelationFilter, SectionWhereInput>
  }

  export type ActivePlansOrderByWithRelationInput = {
    id?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    sectionId?: SortOrder
    plan?: PlanOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
  }

  export type ActivePlansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivePlansWhereInput | ActivePlansWhereInput[]
    OR?: ActivePlansWhereInput[]
    NOT?: ActivePlansWhereInput | ActivePlansWhereInput[]
    planName?: StringFilter<"ActivePlans"> | string
    planId?: IntFilter<"ActivePlans"> | number
    sectionId?: IntFilter<"ActivePlans"> | number
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    section?: XOR<SectionRelationFilter, SectionWhereInput>
  }, "id">

  export type ActivePlansOrderByWithAggregationInput = {
    id?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    sectionId?: SortOrder
    _count?: ActivePlansCountOrderByAggregateInput
    _avg?: ActivePlansAvgOrderByAggregateInput
    _max?: ActivePlansMaxOrderByAggregateInput
    _min?: ActivePlansMinOrderByAggregateInput
    _sum?: ActivePlansSumOrderByAggregateInput
  }

  export type ActivePlansScalarWhereWithAggregatesInput = {
    AND?: ActivePlansScalarWhereWithAggregatesInput | ActivePlansScalarWhereWithAggregatesInput[]
    OR?: ActivePlansScalarWhereWithAggregatesInput[]
    NOT?: ActivePlansScalarWhereWithAggregatesInput | ActivePlansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivePlans"> | number
    planName?: StringWithAggregatesFilter<"ActivePlans"> | string
    planId?: IntWithAggregatesFilter<"ActivePlans"> | number
    sectionId?: IntWithAggregatesFilter<"ActivePlans"> | number
  }

  export type SectionTypeWhereInput = {
    AND?: SectionTypeWhereInput | SectionTypeWhereInput[]
    OR?: SectionTypeWhereInput[]
    NOT?: SectionTypeWhereInput | SectionTypeWhereInput[]
    id?: IntFilter<"SectionType"> | number
    name?: StringFilter<"SectionType"> | string
    description?: StringFilter<"SectionType"> | string
    sections?: SectionListRelationFilter
  }

  export type SectionTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sections?: SectionOrderByRelationAggregateInput
  }

  export type SectionTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SectionTypeWhereInput | SectionTypeWhereInput[]
    OR?: SectionTypeWhereInput[]
    NOT?: SectionTypeWhereInput | SectionTypeWhereInput[]
    name?: StringFilter<"SectionType"> | string
    description?: StringFilter<"SectionType"> | string
    sections?: SectionListRelationFilter
  }, "id">

  export type SectionTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
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
    id?: IntWithAggregatesFilter<"SectionType"> | number
    name?: StringWithAggregatesFilter<"SectionType"> | string
    description?: StringWithAggregatesFilter<"SectionType"> | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: IntFilter<"Section"> | number
    name?: StringFilter<"Section"> | string
    sectionType?: IntFilter<"Section"> | number
    area?: IntNullableFilter<"Section"> | number | null
    type?: XOR<SectionTypeRelationFilter, SectionTypeWhereInput>
    assets?: AssetListRelationFilter
    coordinates?: CoordinateListRelationFilter
    activePlans?: ActivePlansListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sectionType?: SortOrder
    area?: SortOrderInput | SortOrder
    type?: SectionTypeOrderByWithRelationInput
    assets?: AssetOrderByRelationAggregateInput
    coordinates?: CoordinateOrderByRelationAggregateInput
    activePlans?: ActivePlansOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    name?: StringFilter<"Section"> | string
    sectionType?: IntFilter<"Section"> | number
    area?: IntNullableFilter<"Section"> | number | null
    type?: XOR<SectionTypeRelationFilter, SectionTypeWhereInput>
    assets?: AssetListRelationFilter
    coordinates?: CoordinateListRelationFilter
    activePlans?: ActivePlansListRelationFilter
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sectionType?: SortOrder
    area?: SortOrderInput | SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Section"> | number
    name?: StringWithAggregatesFilter<"Section"> | string
    sectionType?: IntWithAggregatesFilter<"Section"> | number
    area?: IntNullableWithAggregatesFilter<"Section"> | number | null
  }

  export type AssetTypeWhereInput = {
    AND?: AssetTypeWhereInput | AssetTypeWhereInput[]
    OR?: AssetTypeWhereInput[]
    NOT?: AssetTypeWhereInput | AssetTypeWhereInput[]
    id?: IntFilter<"AssetType"> | number
    name?: StringFilter<"AssetType"> | string
    description?: StringFilter<"AssetType"> | string
    assets?: AssetListRelationFilter
  }

  export type AssetTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assets?: AssetOrderByRelationAggregateInput
  }

  export type AssetTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssetTypeWhereInput | AssetTypeWhereInput[]
    OR?: AssetTypeWhereInput[]
    NOT?: AssetTypeWhereInput | AssetTypeWhereInput[]
    name?: StringFilter<"AssetType"> | string
    description?: StringFilter<"AssetType"> | string
    assets?: AssetListRelationFilter
  }, "id">

  export type AssetTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: AssetTypeCountOrderByAggregateInput
    _avg?: AssetTypeAvgOrderByAggregateInput
    _max?: AssetTypeMaxOrderByAggregateInput
    _min?: AssetTypeMinOrderByAggregateInput
    _sum?: AssetTypeSumOrderByAggregateInput
  }

  export type AssetTypeScalarWhereWithAggregatesInput = {
    AND?: AssetTypeScalarWhereWithAggregatesInput | AssetTypeScalarWhereWithAggregatesInput[]
    OR?: AssetTypeScalarWhereWithAggregatesInput[]
    NOT?: AssetTypeScalarWhereWithAggregatesInput | AssetTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssetType"> | number
    name?: StringWithAggregatesFilter<"AssetType"> | string
    description?: StringWithAggregatesFilter<"AssetType"> | string
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    id?: IntFilter<"Asset"> | number
    name?: StringFilter<"Asset"> | string
    description?: StringFilter<"Asset"> | string
    assetType?: IntFilter<"Asset"> | number
    assetSection?: IntFilter<"Asset"> | number
    planAssets?: PlanAssetsListRelationFilter
    type?: XOR<AssetTypeRelationFilter, AssetTypeWhereInput>
    section?: XOR<SectionRelationFilter, SectionWhereInput>
  }

  export type AssetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assetType?: SortOrder
    assetSection?: SortOrder
    planAssets?: PlanAssetsOrderByRelationAggregateInput
    type?: AssetTypeOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    name?: StringFilter<"Asset"> | string
    description?: StringFilter<"Asset"> | string
    assetType?: IntFilter<"Asset"> | number
    assetSection?: IntFilter<"Asset"> | number
    planAssets?: PlanAssetsListRelationFilter
    type?: XOR<AssetTypeRelationFilter, AssetTypeWhereInput>
    section?: XOR<SectionRelationFilter, SectionWhereInput>
  }, "id">

  export type AssetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assetType?: SortOrder
    assetSection?: SortOrder
    _count?: AssetCountOrderByAggregateInput
    _avg?: AssetAvgOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
    _sum?: AssetSumOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asset"> | number
    name?: StringWithAggregatesFilter<"Asset"> | string
    description?: StringWithAggregatesFilter<"Asset"> | string
    assetType?: IntWithAggregatesFilter<"Asset"> | number
    assetSection?: IntWithAggregatesFilter<"Asset"> | number
  }

  export type CoordinateWhereInput = {
    AND?: CoordinateWhereInput | CoordinateWhereInput[]
    OR?: CoordinateWhereInput[]
    NOT?: CoordinateWhereInput | CoordinateWhereInput[]
    id?: IntFilter<"Coordinate"> | number
    latitude?: FloatFilter<"Coordinate"> | number
    longitude?: FloatFilter<"Coordinate"> | number
    sectionId?: IntFilter<"Coordinate"> | number
    section?: XOR<SectionRelationFilter, SectionWhereInput>
  }

  export type CoordinateOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sectionId?: SortOrder
    section?: SectionOrderByWithRelationInput
  }

  export type CoordinateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoordinateWhereInput | CoordinateWhereInput[]
    OR?: CoordinateWhereInput[]
    NOT?: CoordinateWhereInput | CoordinateWhereInput[]
    latitude?: FloatFilter<"Coordinate"> | number
    longitude?: FloatFilter<"Coordinate"> | number
    sectionId?: IntFilter<"Coordinate"> | number
    section?: XOR<SectionRelationFilter, SectionWhereInput>
  }, "id">

  export type CoordinateOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sectionId?: SortOrder
    _count?: CoordinateCountOrderByAggregateInput
    _avg?: CoordinateAvgOrderByAggregateInput
    _max?: CoordinateMaxOrderByAggregateInput
    _min?: CoordinateMinOrderByAggregateInput
    _sum?: CoordinateSumOrderByAggregateInput
  }

  export type CoordinateScalarWhereWithAggregatesInput = {
    AND?: CoordinateScalarWhereWithAggregatesInput | CoordinateScalarWhereWithAggregatesInput[]
    OR?: CoordinateScalarWhereWithAggregatesInput[]
    NOT?: CoordinateScalarWhereWithAggregatesInput | CoordinateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coordinate"> | number
    latitude?: FloatWithAggregatesFilter<"Coordinate"> | number
    longitude?: FloatWithAggregatesFilter<"Coordinate"> | number
    sectionId?: IntWithAggregatesFilter<"Coordinate"> | number
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

  export type ShiftCreateInput = {
    name: string
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUncheckedCreateInput = {
    shiftId?: number
    name: string
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateInput = {
    shiftId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateManyInput = {
    shiftId?: number
    name: string
    startTime: string
    endTime: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyInput = {
    shiftId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    planFiles?: PlanfilesCreateNestedManyWithoutPlanInput
    activePlans?: ActivePlansCreateNestedManyWithoutPlanInput
    planAssets?: PlanAssetsCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    planId?: number
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    planFiles?: PlanfilesUncheckedCreateNestedManyWithoutPlanInput
    activePlans?: ActivePlansUncheckedCreateNestedManyWithoutPlanInput
    planAssets?: PlanAssetsUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planFiles?: PlanfilesUpdateManyWithoutPlanNestedInput
    activePlans?: ActivePlansUpdateManyWithoutPlanNestedInput
    planAssets?: PlanAssetsUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    planId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planFiles?: PlanfilesUncheckedUpdateManyWithoutPlanNestedInput
    activePlans?: ActivePlansUncheckedUpdateManyWithoutPlanNestedInput
    planAssets?: PlanAssetsUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    planId?: number
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
  }

  export type PlanUpdateManyMutationInput = {
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanUncheckedUpdateManyInput = {
    planId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanAssetsCreateInput = {
    assetName: string
    plan: PlanCreateNestedOneWithoutPlanAssetsInput
    asset: AssetCreateNestedOneWithoutPlanAssetsInput
  }

  export type PlanAssetsUncheckedCreateInput = {
    id?: number
    planId: number
    assetId: number
    assetName: string
  }

  export type PlanAssetsUpdateInput = {
    assetName?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutPlanAssetsNestedInput
    asset?: AssetUpdateOneRequiredWithoutPlanAssetsNestedInput
  }

  export type PlanAssetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    assetName?: StringFieldUpdateOperationsInput | string
  }

  export type PlanAssetsCreateManyInput = {
    id?: number
    planId: number
    assetId: number
    assetName: string
  }

  export type PlanAssetsUpdateManyMutationInput = {
    assetName?: StringFieldUpdateOperationsInput | string
  }

  export type PlanAssetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    assetName?: StringFieldUpdateOperationsInput | string
  }

  export type PlanfilesCreateInput = {
    fileName: string
    filePath: string
    type: string
    plan: PlanCreateNestedOneWithoutPlanFilesInput
  }

  export type PlanfilesUncheckedCreateInput = {
    fileId?: number
    fileName: string
    filePath: string
    type: string
    planId: number
  }

  export type PlanfilesUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutPlanFilesNestedInput
  }

  export type PlanfilesUncheckedUpdateInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
  }

  export type PlanfilesCreateManyInput = {
    fileId?: number
    fileName: string
    filePath: string
    type: string
    planId: number
  }

  export type PlanfilesUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PlanfilesUncheckedUpdateManyInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivePlansCreateInput = {
    planName: string
    plan: PlanCreateNestedOneWithoutActivePlansInput
    section: SectionCreateNestedOneWithoutActivePlansInput
  }

  export type ActivePlansUncheckedCreateInput = {
    id?: number
    planName: string
    planId: number
    sectionId: number
  }

  export type ActivePlansUpdateInput = {
    planName?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutActivePlansNestedInput
    section?: SectionUpdateOneRequiredWithoutActivePlansNestedInput
  }

  export type ActivePlansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivePlansCreateManyInput = {
    id?: number
    planName: string
    planId: number
    sectionId: number
  }

  export type ActivePlansUpdateManyMutationInput = {
    planName?: StringFieldUpdateOperationsInput | string
  }

  export type ActivePlansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
  }

  export type SectionTypeCreateInput = {
    name: string
    description: string
    sections?: SectionCreateNestedManyWithoutTypeInput
  }

  export type SectionTypeUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    sections?: SectionUncheckedCreateNestedManyWithoutTypeInput
  }

  export type SectionTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sections?: SectionUpdateManyWithoutTypeNestedInput
  }

  export type SectionTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sections?: SectionUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type SectionTypeCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type SectionTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SectionTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateInput = {
    name: string
    area?: number | null
    type: SectionTypeCreateNestedOneWithoutSectionsInput
    assets?: AssetCreateNestedManyWithoutSectionInput
    coordinates?: CoordinateCreateNestedManyWithoutSectionInput
    activePlans?: ActivePlansCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: number
    name: string
    sectionType: number
    area?: number | null
    assets?: AssetUncheckedCreateNestedManyWithoutSectionInput
    coordinates?: CoordinateUncheckedCreateNestedManyWithoutSectionInput
    activePlans?: ActivePlansUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableIntFieldUpdateOperationsInput | number | null
    type?: SectionTypeUpdateOneRequiredWithoutSectionsNestedInput
    assets?: AssetUpdateManyWithoutSectionNestedInput
    coordinates?: CoordinateUpdateManyWithoutSectionNestedInput
    activePlans?: ActivePlansUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sectionType?: IntFieldUpdateOperationsInput | number
    area?: NullableIntFieldUpdateOperationsInput | number | null
    assets?: AssetUncheckedUpdateManyWithoutSectionNestedInput
    coordinates?: CoordinateUncheckedUpdateManyWithoutSectionNestedInput
    activePlans?: ActivePlansUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: number
    name: string
    sectionType: number
    area?: number | null
  }

  export type SectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sectionType?: IntFieldUpdateOperationsInput | number
    area?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssetTypeCreateInput = {
    name: string
    description: string
    assets?: AssetCreateNestedManyWithoutTypeInput
  }

  export type AssetTypeUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    assets?: AssetUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AssetTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assets?: AssetUpdateManyWithoutTypeNestedInput
  }

  export type AssetTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assets?: AssetUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AssetTypeCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type AssetTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AssetTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AssetCreateInput = {
    name: string
    description: string
    planAssets?: PlanAssetsCreateNestedManyWithoutAssetInput
    type: AssetTypeCreateNestedOneWithoutAssetsInput
    section: SectionCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    assetType: number
    assetSection: number
    planAssets?: PlanAssetsUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    planAssets?: PlanAssetsUpdateManyWithoutAssetNestedInput
    type?: AssetTypeUpdateOneRequiredWithoutAssetsNestedInput
    section?: SectionUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assetType?: IntFieldUpdateOperationsInput | number
    assetSection?: IntFieldUpdateOperationsInput | number
    planAssets?: PlanAssetsUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    id?: number
    name: string
    description: string
    assetType: number
    assetSection: number
  }

  export type AssetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assetType?: IntFieldUpdateOperationsInput | number
    assetSection?: IntFieldUpdateOperationsInput | number
  }

  export type CoordinateCreateInput = {
    latitude: number
    longitude: number
    section: SectionCreateNestedOneWithoutCoordinatesInput
  }

  export type CoordinateUncheckedCreateInput = {
    id?: number
    latitude: number
    longitude: number
    sectionId: number
  }

  export type CoordinateUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutCoordinatesNestedInput
  }

  export type CoordinateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
  }

  export type CoordinateCreateManyInput = {
    id?: number
    latitude: number
    longitude: number
    sectionId: number
  }

  export type CoordinateUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type CoordinateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    sectionId?: IntFieldUpdateOperationsInput | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type ShiftCountOrderByAggregateInput = {
    shiftId?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftAvgOrderByAggregateInput = {
    shiftId?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    shiftId?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    shiftId?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftSumOrderByAggregateInput = {
    shiftId?: SortOrder
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type PlanfilesListRelationFilter = {
    every?: PlanfilesWhereInput
    some?: PlanfilesWhereInput
    none?: PlanfilesWhereInput
  }

  export type ActivePlansListRelationFilter = {
    every?: ActivePlansWhereInput
    some?: ActivePlansWhereInput
    none?: ActivePlansWhereInput
  }

  export type PlanAssetsListRelationFilter = {
    every?: PlanAssetsWhereInput
    some?: PlanAssetsWhereInput
    none?: PlanAssetsWhereInput
  }

  export type PlanfilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivePlansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanAssetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    planId?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrder
    form?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    planId?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    planId?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    planId?: SortOrder
    planName?: SortOrder
    planDescription?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    planId?: SortOrder
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type PlanRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type AssetRelationFilter = {
    is?: AssetWhereInput
    isNot?: AssetWhereInput
  }

  export type PlanAssetsCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    assetId?: SortOrder
    assetName?: SortOrder
  }

  export type PlanAssetsAvgOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    assetId?: SortOrder
  }

  export type PlanAssetsMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    assetId?: SortOrder
    assetName?: SortOrder
  }

  export type PlanAssetsMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    assetId?: SortOrder
    assetName?: SortOrder
  }

  export type PlanAssetsSumOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    assetId?: SortOrder
  }

  export type PlanfilesCountOrderByAggregateInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    type?: SortOrder
    planId?: SortOrder
  }

  export type PlanfilesAvgOrderByAggregateInput = {
    fileId?: SortOrder
    planId?: SortOrder
  }

  export type PlanfilesMaxOrderByAggregateInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    type?: SortOrder
    planId?: SortOrder
  }

  export type PlanfilesMinOrderByAggregateInput = {
    fileId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    type?: SortOrder
    planId?: SortOrder
  }

  export type PlanfilesSumOrderByAggregateInput = {
    fileId?: SortOrder
    planId?: SortOrder
  }

  export type SectionRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type ActivePlansCountOrderByAggregateInput = {
    id?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    sectionId?: SortOrder
  }

  export type ActivePlansAvgOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    sectionId?: SortOrder
  }

  export type ActivePlansMaxOrderByAggregateInput = {
    id?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    sectionId?: SortOrder
  }

  export type ActivePlansMinOrderByAggregateInput = {
    id?: SortOrder
    planName?: SortOrder
    planId?: SortOrder
    sectionId?: SortOrder
  }

  export type ActivePlansSumOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    sectionId?: SortOrder
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SectionTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SectionTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SectionTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SectionTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SectionTypeRelationFilter = {
    is?: SectionTypeWhereInput
    isNot?: SectionTypeWhereInput
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type CoordinateListRelationFilter = {
    every?: CoordinateWhereInput
    some?: CoordinateWhereInput
    none?: CoordinateWhereInput
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoordinateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionType?: SortOrder
    area?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    id?: SortOrder
    sectionType?: SortOrder
    area?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionType?: SortOrder
    area?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sectionType?: SortOrder
    area?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    id?: SortOrder
    sectionType?: SortOrder
    area?: SortOrder
  }

  export type AssetTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AssetTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AssetTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AssetTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type AssetTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AssetTypeRelationFilter = {
    is?: AssetTypeWhereInput
    isNot?: AssetTypeWhereInput
  }

  export type AssetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assetType?: SortOrder
    assetSection?: SortOrder
  }

  export type AssetAvgOrderByAggregateInput = {
    id?: SortOrder
    assetType?: SortOrder
    assetSection?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assetType?: SortOrder
    assetSection?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    assetType?: SortOrder
    assetSection?: SortOrder
  }

  export type AssetSumOrderByAggregateInput = {
    id?: SortOrder
    assetType?: SortOrder
    assetSection?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CoordinateCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sectionId?: SortOrder
  }

  export type CoordinateAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sectionId?: SortOrder
  }

  export type CoordinateMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sectionId?: SortOrder
  }

  export type CoordinateMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sectionId?: SortOrder
  }

  export type CoordinateSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    sectionId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OwnerCreateNestedOneWithoutMinesInput = {
    create?: XOR<OwnerCreateWithoutMinesInput, OwnerUncheckedCreateWithoutMinesInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutMinesInput
    connect?: OwnerWhereUniqueInput
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type PlanfilesCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanfilesCreateWithoutPlanInput, PlanfilesUncheckedCreateWithoutPlanInput> | PlanfilesCreateWithoutPlanInput[] | PlanfilesUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanfilesCreateOrConnectWithoutPlanInput | PlanfilesCreateOrConnectWithoutPlanInput[]
    createMany?: PlanfilesCreateManyPlanInputEnvelope
    connect?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
  }

  export type ActivePlansCreateNestedManyWithoutPlanInput = {
    create?: XOR<ActivePlansCreateWithoutPlanInput, ActivePlansUncheckedCreateWithoutPlanInput> | ActivePlansCreateWithoutPlanInput[] | ActivePlansUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ActivePlansCreateOrConnectWithoutPlanInput | ActivePlansCreateOrConnectWithoutPlanInput[]
    createMany?: ActivePlansCreateManyPlanInputEnvelope
    connect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
  }

  export type PlanAssetsCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanAssetsCreateWithoutPlanInput, PlanAssetsUncheckedCreateWithoutPlanInput> | PlanAssetsCreateWithoutPlanInput[] | PlanAssetsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanAssetsCreateOrConnectWithoutPlanInput | PlanAssetsCreateOrConnectWithoutPlanInput[]
    createMany?: PlanAssetsCreateManyPlanInputEnvelope
    connect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
  }

  export type PlanfilesUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanfilesCreateWithoutPlanInput, PlanfilesUncheckedCreateWithoutPlanInput> | PlanfilesCreateWithoutPlanInput[] | PlanfilesUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanfilesCreateOrConnectWithoutPlanInput | PlanfilesCreateOrConnectWithoutPlanInput[]
    createMany?: PlanfilesCreateManyPlanInputEnvelope
    connect?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
  }

  export type ActivePlansUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<ActivePlansCreateWithoutPlanInput, ActivePlansUncheckedCreateWithoutPlanInput> | ActivePlansCreateWithoutPlanInput[] | ActivePlansUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ActivePlansCreateOrConnectWithoutPlanInput | ActivePlansCreateOrConnectWithoutPlanInput[]
    createMany?: ActivePlansCreateManyPlanInputEnvelope
    connect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
  }

  export type PlanAssetsUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PlanAssetsCreateWithoutPlanInput, PlanAssetsUncheckedCreateWithoutPlanInput> | PlanAssetsCreateWithoutPlanInput[] | PlanAssetsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanAssetsCreateOrConnectWithoutPlanInput | PlanAssetsCreateOrConnectWithoutPlanInput[]
    createMany?: PlanAssetsCreateManyPlanInputEnvelope
    connect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type PlanfilesUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanfilesCreateWithoutPlanInput, PlanfilesUncheckedCreateWithoutPlanInput> | PlanfilesCreateWithoutPlanInput[] | PlanfilesUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanfilesCreateOrConnectWithoutPlanInput | PlanfilesCreateOrConnectWithoutPlanInput[]
    upsert?: PlanfilesUpsertWithWhereUniqueWithoutPlanInput | PlanfilesUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanfilesCreateManyPlanInputEnvelope
    set?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
    disconnect?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
    delete?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
    connect?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
    update?: PlanfilesUpdateWithWhereUniqueWithoutPlanInput | PlanfilesUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanfilesUpdateManyWithWhereWithoutPlanInput | PlanfilesUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanfilesScalarWhereInput | PlanfilesScalarWhereInput[]
  }

  export type ActivePlansUpdateManyWithoutPlanNestedInput = {
    create?: XOR<ActivePlansCreateWithoutPlanInput, ActivePlansUncheckedCreateWithoutPlanInput> | ActivePlansCreateWithoutPlanInput[] | ActivePlansUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ActivePlansCreateOrConnectWithoutPlanInput | ActivePlansCreateOrConnectWithoutPlanInput[]
    upsert?: ActivePlansUpsertWithWhereUniqueWithoutPlanInput | ActivePlansUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: ActivePlansCreateManyPlanInputEnvelope
    set?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    disconnect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    delete?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    connect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    update?: ActivePlansUpdateWithWhereUniqueWithoutPlanInput | ActivePlansUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: ActivePlansUpdateManyWithWhereWithoutPlanInput | ActivePlansUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: ActivePlansScalarWhereInput | ActivePlansScalarWhereInput[]
  }

  export type PlanAssetsUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanAssetsCreateWithoutPlanInput, PlanAssetsUncheckedCreateWithoutPlanInput> | PlanAssetsCreateWithoutPlanInput[] | PlanAssetsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanAssetsCreateOrConnectWithoutPlanInput | PlanAssetsCreateOrConnectWithoutPlanInput[]
    upsert?: PlanAssetsUpsertWithWhereUniqueWithoutPlanInput | PlanAssetsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanAssetsCreateManyPlanInputEnvelope
    set?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    disconnect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    delete?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    connect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    update?: PlanAssetsUpdateWithWhereUniqueWithoutPlanInput | PlanAssetsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanAssetsUpdateManyWithWhereWithoutPlanInput | PlanAssetsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanAssetsScalarWhereInput | PlanAssetsScalarWhereInput[]
  }

  export type PlanfilesUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanfilesCreateWithoutPlanInput, PlanfilesUncheckedCreateWithoutPlanInput> | PlanfilesCreateWithoutPlanInput[] | PlanfilesUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanfilesCreateOrConnectWithoutPlanInput | PlanfilesCreateOrConnectWithoutPlanInput[]
    upsert?: PlanfilesUpsertWithWhereUniqueWithoutPlanInput | PlanfilesUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanfilesCreateManyPlanInputEnvelope
    set?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
    disconnect?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
    delete?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
    connect?: PlanfilesWhereUniqueInput | PlanfilesWhereUniqueInput[]
    update?: PlanfilesUpdateWithWhereUniqueWithoutPlanInput | PlanfilesUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanfilesUpdateManyWithWhereWithoutPlanInput | PlanfilesUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanfilesScalarWhereInput | PlanfilesScalarWhereInput[]
  }

  export type ActivePlansUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<ActivePlansCreateWithoutPlanInput, ActivePlansUncheckedCreateWithoutPlanInput> | ActivePlansCreateWithoutPlanInput[] | ActivePlansUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ActivePlansCreateOrConnectWithoutPlanInput | ActivePlansCreateOrConnectWithoutPlanInput[]
    upsert?: ActivePlansUpsertWithWhereUniqueWithoutPlanInput | ActivePlansUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: ActivePlansCreateManyPlanInputEnvelope
    set?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    disconnect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    delete?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    connect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    update?: ActivePlansUpdateWithWhereUniqueWithoutPlanInput | ActivePlansUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: ActivePlansUpdateManyWithWhereWithoutPlanInput | ActivePlansUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: ActivePlansScalarWhereInput | ActivePlansScalarWhereInput[]
  }

  export type PlanAssetsUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PlanAssetsCreateWithoutPlanInput, PlanAssetsUncheckedCreateWithoutPlanInput> | PlanAssetsCreateWithoutPlanInput[] | PlanAssetsUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PlanAssetsCreateOrConnectWithoutPlanInput | PlanAssetsCreateOrConnectWithoutPlanInput[]
    upsert?: PlanAssetsUpsertWithWhereUniqueWithoutPlanInput | PlanAssetsUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PlanAssetsCreateManyPlanInputEnvelope
    set?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    disconnect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    delete?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    connect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    update?: PlanAssetsUpdateWithWhereUniqueWithoutPlanInput | PlanAssetsUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PlanAssetsUpdateManyWithWhereWithoutPlanInput | PlanAssetsUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PlanAssetsScalarWhereInput | PlanAssetsScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutPlanAssetsInput = {
    create?: XOR<PlanCreateWithoutPlanAssetsInput, PlanUncheckedCreateWithoutPlanAssetsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPlanAssetsInput
    connect?: PlanWhereUniqueInput
  }

  export type AssetCreateNestedOneWithoutPlanAssetsInput = {
    create?: XOR<AssetCreateWithoutPlanAssetsInput, AssetUncheckedCreateWithoutPlanAssetsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutPlanAssetsInput
    connect?: AssetWhereUniqueInput
  }

  export type PlanUpdateOneRequiredWithoutPlanAssetsNestedInput = {
    create?: XOR<PlanCreateWithoutPlanAssetsInput, PlanUncheckedCreateWithoutPlanAssetsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPlanAssetsInput
    upsert?: PlanUpsertWithoutPlanAssetsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutPlanAssetsInput, PlanUpdateWithoutPlanAssetsInput>, PlanUncheckedUpdateWithoutPlanAssetsInput>
  }

  export type AssetUpdateOneRequiredWithoutPlanAssetsNestedInput = {
    create?: XOR<AssetCreateWithoutPlanAssetsInput, AssetUncheckedCreateWithoutPlanAssetsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutPlanAssetsInput
    upsert?: AssetUpsertWithoutPlanAssetsInput
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutPlanAssetsInput, AssetUpdateWithoutPlanAssetsInput>, AssetUncheckedUpdateWithoutPlanAssetsInput>
  }

  export type PlanCreateNestedOneWithoutPlanFilesInput = {
    create?: XOR<PlanCreateWithoutPlanFilesInput, PlanUncheckedCreateWithoutPlanFilesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPlanFilesInput
    connect?: PlanWhereUniqueInput
  }

  export type PlanUpdateOneRequiredWithoutPlanFilesNestedInput = {
    create?: XOR<PlanCreateWithoutPlanFilesInput, PlanUncheckedCreateWithoutPlanFilesInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPlanFilesInput
    upsert?: PlanUpsertWithoutPlanFilesInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutPlanFilesInput, PlanUpdateWithoutPlanFilesInput>, PlanUncheckedUpdateWithoutPlanFilesInput>
  }

  export type PlanCreateNestedOneWithoutActivePlansInput = {
    create?: XOR<PlanCreateWithoutActivePlansInput, PlanUncheckedCreateWithoutActivePlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutActivePlansInput
    connect?: PlanWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutActivePlansInput = {
    create?: XOR<SectionCreateWithoutActivePlansInput, SectionUncheckedCreateWithoutActivePlansInput>
    connectOrCreate?: SectionCreateOrConnectWithoutActivePlansInput
    connect?: SectionWhereUniqueInput
  }

  export type PlanUpdateOneRequiredWithoutActivePlansNestedInput = {
    create?: XOR<PlanCreateWithoutActivePlansInput, PlanUncheckedCreateWithoutActivePlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutActivePlansInput
    upsert?: PlanUpsertWithoutActivePlansInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutActivePlansInput, PlanUpdateWithoutActivePlansInput>, PlanUncheckedUpdateWithoutActivePlansInput>
  }

  export type SectionUpdateOneRequiredWithoutActivePlansNestedInput = {
    create?: XOR<SectionCreateWithoutActivePlansInput, SectionUncheckedCreateWithoutActivePlansInput>
    connectOrCreate?: SectionCreateOrConnectWithoutActivePlansInput
    upsert?: SectionUpsertWithoutActivePlansInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutActivePlansInput, SectionUpdateWithoutActivePlansInput>, SectionUncheckedUpdateWithoutActivePlansInput>
  }

  export type SectionCreateNestedManyWithoutTypeInput = {
    create?: XOR<SectionCreateWithoutTypeInput, SectionUncheckedCreateWithoutTypeInput> | SectionCreateWithoutTypeInput[] | SectionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutTypeInput | SectionCreateOrConnectWithoutTypeInput[]
    createMany?: SectionCreateManyTypeInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<SectionCreateWithoutTypeInput, SectionUncheckedCreateWithoutTypeInput> | SectionCreateWithoutTypeInput[] | SectionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutTypeInput | SectionCreateOrConnectWithoutTypeInput[]
    createMany?: SectionCreateManyTypeInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SectionUpdateManyWithoutTypeNestedInput = {
    create?: XOR<SectionCreateWithoutTypeInput, SectionUncheckedCreateWithoutTypeInput> | SectionCreateWithoutTypeInput[] | SectionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutTypeInput | SectionCreateOrConnectWithoutTypeInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutTypeInput | SectionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: SectionCreateManyTypeInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutTypeInput | SectionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutTypeInput | SectionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<SectionCreateWithoutTypeInput, SectionUncheckedCreateWithoutTypeInput> | SectionCreateWithoutTypeInput[] | SectionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutTypeInput | SectionCreateOrConnectWithoutTypeInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutTypeInput | SectionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: SectionCreateManyTypeInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutTypeInput | SectionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutTypeInput | SectionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SectionTypeCreateNestedOneWithoutSectionsInput = {
    create?: XOR<SectionTypeCreateWithoutSectionsInput, SectionTypeUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutSectionsInput
    connect?: SectionTypeWhereUniqueInput
  }

  export type AssetCreateNestedManyWithoutSectionInput = {
    create?: XOR<AssetCreateWithoutSectionInput, AssetUncheckedCreateWithoutSectionInput> | AssetCreateWithoutSectionInput[] | AssetUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutSectionInput | AssetCreateOrConnectWithoutSectionInput[]
    createMany?: AssetCreateManySectionInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type CoordinateCreateNestedManyWithoutSectionInput = {
    create?: XOR<CoordinateCreateWithoutSectionInput, CoordinateUncheckedCreateWithoutSectionInput> | CoordinateCreateWithoutSectionInput[] | CoordinateUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: CoordinateCreateOrConnectWithoutSectionInput | CoordinateCreateOrConnectWithoutSectionInput[]
    createMany?: CoordinateCreateManySectionInputEnvelope
    connect?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
  }

  export type ActivePlansCreateNestedManyWithoutSectionInput = {
    create?: XOR<ActivePlansCreateWithoutSectionInput, ActivePlansUncheckedCreateWithoutSectionInput> | ActivePlansCreateWithoutSectionInput[] | ActivePlansUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ActivePlansCreateOrConnectWithoutSectionInput | ActivePlansCreateOrConnectWithoutSectionInput[]
    createMany?: ActivePlansCreateManySectionInputEnvelope
    connect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<AssetCreateWithoutSectionInput, AssetUncheckedCreateWithoutSectionInput> | AssetCreateWithoutSectionInput[] | AssetUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutSectionInput | AssetCreateOrConnectWithoutSectionInput[]
    createMany?: AssetCreateManySectionInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type CoordinateUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<CoordinateCreateWithoutSectionInput, CoordinateUncheckedCreateWithoutSectionInput> | CoordinateCreateWithoutSectionInput[] | CoordinateUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: CoordinateCreateOrConnectWithoutSectionInput | CoordinateCreateOrConnectWithoutSectionInput[]
    createMany?: CoordinateCreateManySectionInputEnvelope
    connect?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
  }

  export type ActivePlansUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ActivePlansCreateWithoutSectionInput, ActivePlansUncheckedCreateWithoutSectionInput> | ActivePlansCreateWithoutSectionInput[] | ActivePlansUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ActivePlansCreateOrConnectWithoutSectionInput | ActivePlansCreateOrConnectWithoutSectionInput[]
    createMany?: ActivePlansCreateManySectionInputEnvelope
    connect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
  }

  export type SectionTypeUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<SectionTypeCreateWithoutSectionsInput, SectionTypeUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: SectionTypeCreateOrConnectWithoutSectionsInput
    upsert?: SectionTypeUpsertWithoutSectionsInput
    connect?: SectionTypeWhereUniqueInput
    update?: XOR<XOR<SectionTypeUpdateToOneWithWhereWithoutSectionsInput, SectionTypeUpdateWithoutSectionsInput>, SectionTypeUncheckedUpdateWithoutSectionsInput>
  }

  export type AssetUpdateManyWithoutSectionNestedInput = {
    create?: XOR<AssetCreateWithoutSectionInput, AssetUncheckedCreateWithoutSectionInput> | AssetCreateWithoutSectionInput[] | AssetUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutSectionInput | AssetCreateOrConnectWithoutSectionInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutSectionInput | AssetUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: AssetCreateManySectionInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutSectionInput | AssetUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutSectionInput | AssetUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type CoordinateUpdateManyWithoutSectionNestedInput = {
    create?: XOR<CoordinateCreateWithoutSectionInput, CoordinateUncheckedCreateWithoutSectionInput> | CoordinateCreateWithoutSectionInput[] | CoordinateUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: CoordinateCreateOrConnectWithoutSectionInput | CoordinateCreateOrConnectWithoutSectionInput[]
    upsert?: CoordinateUpsertWithWhereUniqueWithoutSectionInput | CoordinateUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: CoordinateCreateManySectionInputEnvelope
    set?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
    disconnect?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
    delete?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
    connect?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
    update?: CoordinateUpdateWithWhereUniqueWithoutSectionInput | CoordinateUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: CoordinateUpdateManyWithWhereWithoutSectionInput | CoordinateUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: CoordinateScalarWhereInput | CoordinateScalarWhereInput[]
  }

  export type ActivePlansUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ActivePlansCreateWithoutSectionInput, ActivePlansUncheckedCreateWithoutSectionInput> | ActivePlansCreateWithoutSectionInput[] | ActivePlansUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ActivePlansCreateOrConnectWithoutSectionInput | ActivePlansCreateOrConnectWithoutSectionInput[]
    upsert?: ActivePlansUpsertWithWhereUniqueWithoutSectionInput | ActivePlansUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ActivePlansCreateManySectionInputEnvelope
    set?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    disconnect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    delete?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    connect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    update?: ActivePlansUpdateWithWhereUniqueWithoutSectionInput | ActivePlansUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ActivePlansUpdateManyWithWhereWithoutSectionInput | ActivePlansUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ActivePlansScalarWhereInput | ActivePlansScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<AssetCreateWithoutSectionInput, AssetUncheckedCreateWithoutSectionInput> | AssetCreateWithoutSectionInput[] | AssetUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutSectionInput | AssetCreateOrConnectWithoutSectionInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutSectionInput | AssetUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: AssetCreateManySectionInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutSectionInput | AssetUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutSectionInput | AssetUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type CoordinateUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<CoordinateCreateWithoutSectionInput, CoordinateUncheckedCreateWithoutSectionInput> | CoordinateCreateWithoutSectionInput[] | CoordinateUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: CoordinateCreateOrConnectWithoutSectionInput | CoordinateCreateOrConnectWithoutSectionInput[]
    upsert?: CoordinateUpsertWithWhereUniqueWithoutSectionInput | CoordinateUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: CoordinateCreateManySectionInputEnvelope
    set?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
    disconnect?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
    delete?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
    connect?: CoordinateWhereUniqueInput | CoordinateWhereUniqueInput[]
    update?: CoordinateUpdateWithWhereUniqueWithoutSectionInput | CoordinateUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: CoordinateUpdateManyWithWhereWithoutSectionInput | CoordinateUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: CoordinateScalarWhereInput | CoordinateScalarWhereInput[]
  }

  export type ActivePlansUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ActivePlansCreateWithoutSectionInput, ActivePlansUncheckedCreateWithoutSectionInput> | ActivePlansCreateWithoutSectionInput[] | ActivePlansUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ActivePlansCreateOrConnectWithoutSectionInput | ActivePlansCreateOrConnectWithoutSectionInput[]
    upsert?: ActivePlansUpsertWithWhereUniqueWithoutSectionInput | ActivePlansUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ActivePlansCreateManySectionInputEnvelope
    set?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    disconnect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    delete?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    connect?: ActivePlansWhereUniqueInput | ActivePlansWhereUniqueInput[]
    update?: ActivePlansUpdateWithWhereUniqueWithoutSectionInput | ActivePlansUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ActivePlansUpdateManyWithWhereWithoutSectionInput | ActivePlansUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ActivePlansScalarWhereInput | ActivePlansScalarWhereInput[]
  }

  export type AssetCreateNestedManyWithoutTypeInput = {
    create?: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput> | AssetCreateWithoutTypeInput[] | AssetUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutTypeInput | AssetCreateOrConnectWithoutTypeInput[]
    createMany?: AssetCreateManyTypeInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput> | AssetCreateWithoutTypeInput[] | AssetUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutTypeInput | AssetCreateOrConnectWithoutTypeInput[]
    createMany?: AssetCreateManyTypeInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput> | AssetCreateWithoutTypeInput[] | AssetUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutTypeInput | AssetCreateOrConnectWithoutTypeInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutTypeInput | AssetUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AssetCreateManyTypeInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutTypeInput | AssetUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutTypeInput | AssetUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput> | AssetCreateWithoutTypeInput[] | AssetUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutTypeInput | AssetCreateOrConnectWithoutTypeInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutTypeInput | AssetUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AssetCreateManyTypeInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutTypeInput | AssetUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutTypeInput | AssetUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type PlanAssetsCreateNestedManyWithoutAssetInput = {
    create?: XOR<PlanAssetsCreateWithoutAssetInput, PlanAssetsUncheckedCreateWithoutAssetInput> | PlanAssetsCreateWithoutAssetInput[] | PlanAssetsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: PlanAssetsCreateOrConnectWithoutAssetInput | PlanAssetsCreateOrConnectWithoutAssetInput[]
    createMany?: PlanAssetsCreateManyAssetInputEnvelope
    connect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
  }

  export type AssetTypeCreateNestedOneWithoutAssetsInput = {
    create?: XOR<AssetTypeCreateWithoutAssetsInput, AssetTypeUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: AssetTypeCreateOrConnectWithoutAssetsInput
    connect?: AssetTypeWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutAssetsInput = {
    create?: XOR<SectionCreateWithoutAssetsInput, SectionUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutAssetsInput
    connect?: SectionWhereUniqueInput
  }

  export type PlanAssetsUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<PlanAssetsCreateWithoutAssetInput, PlanAssetsUncheckedCreateWithoutAssetInput> | PlanAssetsCreateWithoutAssetInput[] | PlanAssetsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: PlanAssetsCreateOrConnectWithoutAssetInput | PlanAssetsCreateOrConnectWithoutAssetInput[]
    createMany?: PlanAssetsCreateManyAssetInputEnvelope
    connect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
  }

  export type PlanAssetsUpdateManyWithoutAssetNestedInput = {
    create?: XOR<PlanAssetsCreateWithoutAssetInput, PlanAssetsUncheckedCreateWithoutAssetInput> | PlanAssetsCreateWithoutAssetInput[] | PlanAssetsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: PlanAssetsCreateOrConnectWithoutAssetInput | PlanAssetsCreateOrConnectWithoutAssetInput[]
    upsert?: PlanAssetsUpsertWithWhereUniqueWithoutAssetInput | PlanAssetsUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: PlanAssetsCreateManyAssetInputEnvelope
    set?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    disconnect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    delete?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    connect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    update?: PlanAssetsUpdateWithWhereUniqueWithoutAssetInput | PlanAssetsUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: PlanAssetsUpdateManyWithWhereWithoutAssetInput | PlanAssetsUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: PlanAssetsScalarWhereInput | PlanAssetsScalarWhereInput[]
  }

  export type AssetTypeUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<AssetTypeCreateWithoutAssetsInput, AssetTypeUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: AssetTypeCreateOrConnectWithoutAssetsInput
    upsert?: AssetTypeUpsertWithoutAssetsInput
    connect?: AssetTypeWhereUniqueInput
    update?: XOR<XOR<AssetTypeUpdateToOneWithWhereWithoutAssetsInput, AssetTypeUpdateWithoutAssetsInput>, AssetTypeUncheckedUpdateWithoutAssetsInput>
  }

  export type SectionUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<SectionCreateWithoutAssetsInput, SectionUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutAssetsInput
    upsert?: SectionUpsertWithoutAssetsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutAssetsInput, SectionUpdateWithoutAssetsInput>, SectionUncheckedUpdateWithoutAssetsInput>
  }

  export type PlanAssetsUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<PlanAssetsCreateWithoutAssetInput, PlanAssetsUncheckedCreateWithoutAssetInput> | PlanAssetsCreateWithoutAssetInput[] | PlanAssetsUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: PlanAssetsCreateOrConnectWithoutAssetInput | PlanAssetsCreateOrConnectWithoutAssetInput[]
    upsert?: PlanAssetsUpsertWithWhereUniqueWithoutAssetInput | PlanAssetsUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: PlanAssetsCreateManyAssetInputEnvelope
    set?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    disconnect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    delete?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    connect?: PlanAssetsWhereUniqueInput | PlanAssetsWhereUniqueInput[]
    update?: PlanAssetsUpdateWithWhereUniqueWithoutAssetInput | PlanAssetsUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: PlanAssetsUpdateManyWithWhereWithoutAssetInput | PlanAssetsUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: PlanAssetsScalarWhereInput | PlanAssetsScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutCoordinatesInput = {
    create?: XOR<SectionCreateWithoutCoordinatesInput, SectionUncheckedCreateWithoutCoordinatesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutCoordinatesInput
    connect?: SectionWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SectionUpdateOneRequiredWithoutCoordinatesNestedInput = {
    create?: XOR<SectionCreateWithoutCoordinatesInput, SectionUncheckedCreateWithoutCoordinatesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutCoordinatesInput
    upsert?: SectionUpsertWithoutCoordinatesInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutCoordinatesInput, SectionUpdateWithoutCoordinatesInput>, SectionUncheckedUpdateWithoutCoordinatesInput>
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

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type PlanfilesCreateWithoutPlanInput = {
    fileName: string
    filePath: string
    type: string
  }

  export type PlanfilesUncheckedCreateWithoutPlanInput = {
    fileId?: number
    fileName: string
    filePath: string
    type: string
  }

  export type PlanfilesCreateOrConnectWithoutPlanInput = {
    where: PlanfilesWhereUniqueInput
    create: XOR<PlanfilesCreateWithoutPlanInput, PlanfilesUncheckedCreateWithoutPlanInput>
  }

  export type PlanfilesCreateManyPlanInputEnvelope = {
    data: PlanfilesCreateManyPlanInput | PlanfilesCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type ActivePlansCreateWithoutPlanInput = {
    planName: string
    section: SectionCreateNestedOneWithoutActivePlansInput
  }

  export type ActivePlansUncheckedCreateWithoutPlanInput = {
    id?: number
    planName: string
    sectionId: number
  }

  export type ActivePlansCreateOrConnectWithoutPlanInput = {
    where: ActivePlansWhereUniqueInput
    create: XOR<ActivePlansCreateWithoutPlanInput, ActivePlansUncheckedCreateWithoutPlanInput>
  }

  export type ActivePlansCreateManyPlanInputEnvelope = {
    data: ActivePlansCreateManyPlanInput | ActivePlansCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PlanAssetsCreateWithoutPlanInput = {
    assetName: string
    asset: AssetCreateNestedOneWithoutPlanAssetsInput
  }

  export type PlanAssetsUncheckedCreateWithoutPlanInput = {
    id?: number
    assetId: number
    assetName: string
  }

  export type PlanAssetsCreateOrConnectWithoutPlanInput = {
    where: PlanAssetsWhereUniqueInput
    create: XOR<PlanAssetsCreateWithoutPlanInput, PlanAssetsUncheckedCreateWithoutPlanInput>
  }

  export type PlanAssetsCreateManyPlanInputEnvelope = {
    data: PlanAssetsCreateManyPlanInput | PlanAssetsCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PlanfilesUpsertWithWhereUniqueWithoutPlanInput = {
    where: PlanfilesWhereUniqueInput
    update: XOR<PlanfilesUpdateWithoutPlanInput, PlanfilesUncheckedUpdateWithoutPlanInput>
    create: XOR<PlanfilesCreateWithoutPlanInput, PlanfilesUncheckedCreateWithoutPlanInput>
  }

  export type PlanfilesUpdateWithWhereUniqueWithoutPlanInput = {
    where: PlanfilesWhereUniqueInput
    data: XOR<PlanfilesUpdateWithoutPlanInput, PlanfilesUncheckedUpdateWithoutPlanInput>
  }

  export type PlanfilesUpdateManyWithWhereWithoutPlanInput = {
    where: PlanfilesScalarWhereInput
    data: XOR<PlanfilesUpdateManyMutationInput, PlanfilesUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanfilesScalarWhereInput = {
    AND?: PlanfilesScalarWhereInput | PlanfilesScalarWhereInput[]
    OR?: PlanfilesScalarWhereInput[]
    NOT?: PlanfilesScalarWhereInput | PlanfilesScalarWhereInput[]
    fileId?: IntFilter<"Planfiles"> | number
    fileName?: StringFilter<"Planfiles"> | string
    filePath?: StringFilter<"Planfiles"> | string
    type?: StringFilter<"Planfiles"> | string
    planId?: IntFilter<"Planfiles"> | number
  }

  export type ActivePlansUpsertWithWhereUniqueWithoutPlanInput = {
    where: ActivePlansWhereUniqueInput
    update: XOR<ActivePlansUpdateWithoutPlanInput, ActivePlansUncheckedUpdateWithoutPlanInput>
    create: XOR<ActivePlansCreateWithoutPlanInput, ActivePlansUncheckedCreateWithoutPlanInput>
  }

  export type ActivePlansUpdateWithWhereUniqueWithoutPlanInput = {
    where: ActivePlansWhereUniqueInput
    data: XOR<ActivePlansUpdateWithoutPlanInput, ActivePlansUncheckedUpdateWithoutPlanInput>
  }

  export type ActivePlansUpdateManyWithWhereWithoutPlanInput = {
    where: ActivePlansScalarWhereInput
    data: XOR<ActivePlansUpdateManyMutationInput, ActivePlansUncheckedUpdateManyWithoutPlanInput>
  }

  export type ActivePlansScalarWhereInput = {
    AND?: ActivePlansScalarWhereInput | ActivePlansScalarWhereInput[]
    OR?: ActivePlansScalarWhereInput[]
    NOT?: ActivePlansScalarWhereInput | ActivePlansScalarWhereInput[]
    id?: IntFilter<"ActivePlans"> | number
    planName?: StringFilter<"ActivePlans"> | string
    planId?: IntFilter<"ActivePlans"> | number
    sectionId?: IntFilter<"ActivePlans"> | number
  }

  export type PlanAssetsUpsertWithWhereUniqueWithoutPlanInput = {
    where: PlanAssetsWhereUniqueInput
    update: XOR<PlanAssetsUpdateWithoutPlanInput, PlanAssetsUncheckedUpdateWithoutPlanInput>
    create: XOR<PlanAssetsCreateWithoutPlanInput, PlanAssetsUncheckedCreateWithoutPlanInput>
  }

  export type PlanAssetsUpdateWithWhereUniqueWithoutPlanInput = {
    where: PlanAssetsWhereUniqueInput
    data: XOR<PlanAssetsUpdateWithoutPlanInput, PlanAssetsUncheckedUpdateWithoutPlanInput>
  }

  export type PlanAssetsUpdateManyWithWhereWithoutPlanInput = {
    where: PlanAssetsScalarWhereInput
    data: XOR<PlanAssetsUpdateManyMutationInput, PlanAssetsUncheckedUpdateManyWithoutPlanInput>
  }

  export type PlanAssetsScalarWhereInput = {
    AND?: PlanAssetsScalarWhereInput | PlanAssetsScalarWhereInput[]
    OR?: PlanAssetsScalarWhereInput[]
    NOT?: PlanAssetsScalarWhereInput | PlanAssetsScalarWhereInput[]
    id?: IntFilter<"PlanAssets"> | number
    planId?: IntFilter<"PlanAssets"> | number
    assetId?: IntFilter<"PlanAssets"> | number
    assetName?: StringFilter<"PlanAssets"> | string
  }

  export type PlanCreateWithoutPlanAssetsInput = {
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    planFiles?: PlanfilesCreateNestedManyWithoutPlanInput
    activePlans?: ActivePlansCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutPlanAssetsInput = {
    planId?: number
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    planFiles?: PlanfilesUncheckedCreateNestedManyWithoutPlanInput
    activePlans?: ActivePlansUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutPlanAssetsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutPlanAssetsInput, PlanUncheckedCreateWithoutPlanAssetsInput>
  }

  export type AssetCreateWithoutPlanAssetsInput = {
    name: string
    description: string
    type: AssetTypeCreateNestedOneWithoutAssetsInput
    section: SectionCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateWithoutPlanAssetsInput = {
    id?: number
    name: string
    description: string
    assetType: number
    assetSection: number
  }

  export type AssetCreateOrConnectWithoutPlanAssetsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutPlanAssetsInput, AssetUncheckedCreateWithoutPlanAssetsInput>
  }

  export type PlanUpsertWithoutPlanAssetsInput = {
    update: XOR<PlanUpdateWithoutPlanAssetsInput, PlanUncheckedUpdateWithoutPlanAssetsInput>
    create: XOR<PlanCreateWithoutPlanAssetsInput, PlanUncheckedCreateWithoutPlanAssetsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutPlanAssetsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutPlanAssetsInput, PlanUncheckedUpdateWithoutPlanAssetsInput>
  }

  export type PlanUpdateWithoutPlanAssetsInput = {
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planFiles?: PlanfilesUpdateManyWithoutPlanNestedInput
    activePlans?: ActivePlansUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutPlanAssetsInput = {
    planId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planFiles?: PlanfilesUncheckedUpdateManyWithoutPlanNestedInput
    activePlans?: ActivePlansUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type AssetUpsertWithoutPlanAssetsInput = {
    update: XOR<AssetUpdateWithoutPlanAssetsInput, AssetUncheckedUpdateWithoutPlanAssetsInput>
    create: XOR<AssetCreateWithoutPlanAssetsInput, AssetUncheckedCreateWithoutPlanAssetsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutPlanAssetsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutPlanAssetsInput, AssetUncheckedUpdateWithoutPlanAssetsInput>
  }

  export type AssetUpdateWithoutPlanAssetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: AssetTypeUpdateOneRequiredWithoutAssetsNestedInput
    section?: SectionUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateWithoutPlanAssetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assetType?: IntFieldUpdateOperationsInput | number
    assetSection?: IntFieldUpdateOperationsInput | number
  }

  export type PlanCreateWithoutPlanFilesInput = {
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    activePlans?: ActivePlansCreateNestedManyWithoutPlanInput
    planAssets?: PlanAssetsCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutPlanFilesInput = {
    planId?: number
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    activePlans?: ActivePlansUncheckedCreateNestedManyWithoutPlanInput
    planAssets?: PlanAssetsUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutPlanFilesInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutPlanFilesInput, PlanUncheckedCreateWithoutPlanFilesInput>
  }

  export type PlanUpsertWithoutPlanFilesInput = {
    update: XOR<PlanUpdateWithoutPlanFilesInput, PlanUncheckedUpdateWithoutPlanFilesInput>
    create: XOR<PlanCreateWithoutPlanFilesInput, PlanUncheckedCreateWithoutPlanFilesInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutPlanFilesInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutPlanFilesInput, PlanUncheckedUpdateWithoutPlanFilesInput>
  }

  export type PlanUpdateWithoutPlanFilesInput = {
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    activePlans?: ActivePlansUpdateManyWithoutPlanNestedInput
    planAssets?: PlanAssetsUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutPlanFilesInput = {
    planId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    activePlans?: ActivePlansUncheckedUpdateManyWithoutPlanNestedInput
    planAssets?: PlanAssetsUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateWithoutActivePlansInput = {
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    planFiles?: PlanfilesCreateNestedManyWithoutPlanInput
    planAssets?: PlanAssetsCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutActivePlansInput = {
    planId?: number
    planName: string
    planDescription?: string | null
    form: JsonNullValueInput | InputJsonValue
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    planFiles?: PlanfilesUncheckedCreateNestedManyWithoutPlanInput
    planAssets?: PlanAssetsUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutActivePlansInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutActivePlansInput, PlanUncheckedCreateWithoutActivePlansInput>
  }

  export type SectionCreateWithoutActivePlansInput = {
    name: string
    area?: number | null
    type: SectionTypeCreateNestedOneWithoutSectionsInput
    assets?: AssetCreateNestedManyWithoutSectionInput
    coordinates?: CoordinateCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutActivePlansInput = {
    id?: number
    name: string
    sectionType: number
    area?: number | null
    assets?: AssetUncheckedCreateNestedManyWithoutSectionInput
    coordinates?: CoordinateUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutActivePlansInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutActivePlansInput, SectionUncheckedCreateWithoutActivePlansInput>
  }

  export type PlanUpsertWithoutActivePlansInput = {
    update: XOR<PlanUpdateWithoutActivePlansInput, PlanUncheckedUpdateWithoutActivePlansInput>
    create: XOR<PlanCreateWithoutActivePlansInput, PlanUncheckedCreateWithoutActivePlansInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutActivePlansInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutActivePlansInput, PlanUncheckedUpdateWithoutActivePlansInput>
  }

  export type PlanUpdateWithoutActivePlansInput = {
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planFiles?: PlanfilesUpdateManyWithoutPlanNestedInput
    planAssets?: PlanAssetsUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutActivePlansInput = {
    planId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planDescription?: NullableStringFieldUpdateOperationsInput | string | null
    form?: JsonNullValueInput | InputJsonValue
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    planFiles?: PlanfilesUncheckedUpdateManyWithoutPlanNestedInput
    planAssets?: PlanAssetsUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SectionUpsertWithoutActivePlansInput = {
    update: XOR<SectionUpdateWithoutActivePlansInput, SectionUncheckedUpdateWithoutActivePlansInput>
    create: XOR<SectionCreateWithoutActivePlansInput, SectionUncheckedCreateWithoutActivePlansInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutActivePlansInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutActivePlansInput, SectionUncheckedUpdateWithoutActivePlansInput>
  }

  export type SectionUpdateWithoutActivePlansInput = {
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableIntFieldUpdateOperationsInput | number | null
    type?: SectionTypeUpdateOneRequiredWithoutSectionsNestedInput
    assets?: AssetUpdateManyWithoutSectionNestedInput
    coordinates?: CoordinateUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutActivePlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sectionType?: IntFieldUpdateOperationsInput | number
    area?: NullableIntFieldUpdateOperationsInput | number | null
    assets?: AssetUncheckedUpdateManyWithoutSectionNestedInput
    coordinates?: CoordinateUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateWithoutTypeInput = {
    name: string
    area?: number | null
    assets?: AssetCreateNestedManyWithoutSectionInput
    coordinates?: CoordinateCreateNestedManyWithoutSectionInput
    activePlans?: ActivePlansCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    area?: number | null
    assets?: AssetUncheckedCreateNestedManyWithoutSectionInput
    coordinates?: CoordinateUncheckedCreateNestedManyWithoutSectionInput
    activePlans?: ActivePlansUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutTypeInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutTypeInput, SectionUncheckedCreateWithoutTypeInput>
  }

  export type SectionCreateManyTypeInputEnvelope = {
    data: SectionCreateManyTypeInput | SectionCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithWhereUniqueWithoutTypeInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutTypeInput, SectionUncheckedUpdateWithoutTypeInput>
    create: XOR<SectionCreateWithoutTypeInput, SectionUncheckedCreateWithoutTypeInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutTypeInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutTypeInput, SectionUncheckedUpdateWithoutTypeInput>
  }

  export type SectionUpdateManyWithWhereWithoutTypeInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutTypeInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: IntFilter<"Section"> | number
    name?: StringFilter<"Section"> | string
    sectionType?: IntFilter<"Section"> | number
    area?: IntNullableFilter<"Section"> | number | null
  }

  export type SectionTypeCreateWithoutSectionsInput = {
    name: string
    description: string
  }

  export type SectionTypeUncheckedCreateWithoutSectionsInput = {
    id?: number
    name: string
    description: string
  }

  export type SectionTypeCreateOrConnectWithoutSectionsInput = {
    where: SectionTypeWhereUniqueInput
    create: XOR<SectionTypeCreateWithoutSectionsInput, SectionTypeUncheckedCreateWithoutSectionsInput>
  }

  export type AssetCreateWithoutSectionInput = {
    name: string
    description: string
    planAssets?: PlanAssetsCreateNestedManyWithoutAssetInput
    type: AssetTypeCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateWithoutSectionInput = {
    id?: number
    name: string
    description: string
    assetType: number
    planAssets?: PlanAssetsUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutSectionInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutSectionInput, AssetUncheckedCreateWithoutSectionInput>
  }

  export type AssetCreateManySectionInputEnvelope = {
    data: AssetCreateManySectionInput | AssetCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type CoordinateCreateWithoutSectionInput = {
    latitude: number
    longitude: number
  }

  export type CoordinateUncheckedCreateWithoutSectionInput = {
    id?: number
    latitude: number
    longitude: number
  }

  export type CoordinateCreateOrConnectWithoutSectionInput = {
    where: CoordinateWhereUniqueInput
    create: XOR<CoordinateCreateWithoutSectionInput, CoordinateUncheckedCreateWithoutSectionInput>
  }

  export type CoordinateCreateManySectionInputEnvelope = {
    data: CoordinateCreateManySectionInput | CoordinateCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type ActivePlansCreateWithoutSectionInput = {
    planName: string
    plan: PlanCreateNestedOneWithoutActivePlansInput
  }

  export type ActivePlansUncheckedCreateWithoutSectionInput = {
    id?: number
    planName: string
    planId: number
  }

  export type ActivePlansCreateOrConnectWithoutSectionInput = {
    where: ActivePlansWhereUniqueInput
    create: XOR<ActivePlansCreateWithoutSectionInput, ActivePlansUncheckedCreateWithoutSectionInput>
  }

  export type ActivePlansCreateManySectionInputEnvelope = {
    data: ActivePlansCreateManySectionInput | ActivePlansCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type SectionTypeUpsertWithoutSectionsInput = {
    update: XOR<SectionTypeUpdateWithoutSectionsInput, SectionTypeUncheckedUpdateWithoutSectionsInput>
    create: XOR<SectionTypeCreateWithoutSectionsInput, SectionTypeUncheckedCreateWithoutSectionsInput>
    where?: SectionTypeWhereInput
  }

  export type SectionTypeUpdateToOneWithWhereWithoutSectionsInput = {
    where?: SectionTypeWhereInput
    data: XOR<SectionTypeUpdateWithoutSectionsInput, SectionTypeUncheckedUpdateWithoutSectionsInput>
  }

  export type SectionTypeUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SectionTypeUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AssetUpsertWithWhereUniqueWithoutSectionInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutSectionInput, AssetUncheckedUpdateWithoutSectionInput>
    create: XOR<AssetCreateWithoutSectionInput, AssetUncheckedCreateWithoutSectionInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutSectionInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutSectionInput, AssetUncheckedUpdateWithoutSectionInput>
  }

  export type AssetUpdateManyWithWhereWithoutSectionInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutSectionInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    id?: IntFilter<"Asset"> | number
    name?: StringFilter<"Asset"> | string
    description?: StringFilter<"Asset"> | string
    assetType?: IntFilter<"Asset"> | number
    assetSection?: IntFilter<"Asset"> | number
  }

  export type CoordinateUpsertWithWhereUniqueWithoutSectionInput = {
    where: CoordinateWhereUniqueInput
    update: XOR<CoordinateUpdateWithoutSectionInput, CoordinateUncheckedUpdateWithoutSectionInput>
    create: XOR<CoordinateCreateWithoutSectionInput, CoordinateUncheckedCreateWithoutSectionInput>
  }

  export type CoordinateUpdateWithWhereUniqueWithoutSectionInput = {
    where: CoordinateWhereUniqueInput
    data: XOR<CoordinateUpdateWithoutSectionInput, CoordinateUncheckedUpdateWithoutSectionInput>
  }

  export type CoordinateUpdateManyWithWhereWithoutSectionInput = {
    where: CoordinateScalarWhereInput
    data: XOR<CoordinateUpdateManyMutationInput, CoordinateUncheckedUpdateManyWithoutSectionInput>
  }

  export type CoordinateScalarWhereInput = {
    AND?: CoordinateScalarWhereInput | CoordinateScalarWhereInput[]
    OR?: CoordinateScalarWhereInput[]
    NOT?: CoordinateScalarWhereInput | CoordinateScalarWhereInput[]
    id?: IntFilter<"Coordinate"> | number
    latitude?: FloatFilter<"Coordinate"> | number
    longitude?: FloatFilter<"Coordinate"> | number
    sectionId?: IntFilter<"Coordinate"> | number
  }

  export type ActivePlansUpsertWithWhereUniqueWithoutSectionInput = {
    where: ActivePlansWhereUniqueInput
    update: XOR<ActivePlansUpdateWithoutSectionInput, ActivePlansUncheckedUpdateWithoutSectionInput>
    create: XOR<ActivePlansCreateWithoutSectionInput, ActivePlansUncheckedCreateWithoutSectionInput>
  }

  export type ActivePlansUpdateWithWhereUniqueWithoutSectionInput = {
    where: ActivePlansWhereUniqueInput
    data: XOR<ActivePlansUpdateWithoutSectionInput, ActivePlansUncheckedUpdateWithoutSectionInput>
  }

  export type ActivePlansUpdateManyWithWhereWithoutSectionInput = {
    where: ActivePlansScalarWhereInput
    data: XOR<ActivePlansUpdateManyMutationInput, ActivePlansUncheckedUpdateManyWithoutSectionInput>
  }

  export type AssetCreateWithoutTypeInput = {
    name: string
    description: string
    planAssets?: PlanAssetsCreateNestedManyWithoutAssetInput
    section: SectionCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    description: string
    assetSection: number
    planAssets?: PlanAssetsUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutTypeInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput>
  }

  export type AssetCreateManyTypeInputEnvelope = {
    data: AssetCreateManyTypeInput | AssetCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type AssetUpsertWithWhereUniqueWithoutTypeInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutTypeInput, AssetUncheckedUpdateWithoutTypeInput>
    create: XOR<AssetCreateWithoutTypeInput, AssetUncheckedCreateWithoutTypeInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutTypeInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutTypeInput, AssetUncheckedUpdateWithoutTypeInput>
  }

  export type AssetUpdateManyWithWhereWithoutTypeInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutTypeInput>
  }

  export type PlanAssetsCreateWithoutAssetInput = {
    assetName: string
    plan: PlanCreateNestedOneWithoutPlanAssetsInput
  }

  export type PlanAssetsUncheckedCreateWithoutAssetInput = {
    id?: number
    planId: number
    assetName: string
  }

  export type PlanAssetsCreateOrConnectWithoutAssetInput = {
    where: PlanAssetsWhereUniqueInput
    create: XOR<PlanAssetsCreateWithoutAssetInput, PlanAssetsUncheckedCreateWithoutAssetInput>
  }

  export type PlanAssetsCreateManyAssetInputEnvelope = {
    data: PlanAssetsCreateManyAssetInput | PlanAssetsCreateManyAssetInput[]
    skipDuplicates?: boolean
  }

  export type AssetTypeCreateWithoutAssetsInput = {
    name: string
    description: string
  }

  export type AssetTypeUncheckedCreateWithoutAssetsInput = {
    id?: number
    name: string
    description: string
  }

  export type AssetTypeCreateOrConnectWithoutAssetsInput = {
    where: AssetTypeWhereUniqueInput
    create: XOR<AssetTypeCreateWithoutAssetsInput, AssetTypeUncheckedCreateWithoutAssetsInput>
  }

  export type SectionCreateWithoutAssetsInput = {
    name: string
    area?: number | null
    type: SectionTypeCreateNestedOneWithoutSectionsInput
    coordinates?: CoordinateCreateNestedManyWithoutSectionInput
    activePlans?: ActivePlansCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutAssetsInput = {
    id?: number
    name: string
    sectionType: number
    area?: number | null
    coordinates?: CoordinateUncheckedCreateNestedManyWithoutSectionInput
    activePlans?: ActivePlansUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutAssetsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutAssetsInput, SectionUncheckedCreateWithoutAssetsInput>
  }

  export type PlanAssetsUpsertWithWhereUniqueWithoutAssetInput = {
    where: PlanAssetsWhereUniqueInput
    update: XOR<PlanAssetsUpdateWithoutAssetInput, PlanAssetsUncheckedUpdateWithoutAssetInput>
    create: XOR<PlanAssetsCreateWithoutAssetInput, PlanAssetsUncheckedCreateWithoutAssetInput>
  }

  export type PlanAssetsUpdateWithWhereUniqueWithoutAssetInput = {
    where: PlanAssetsWhereUniqueInput
    data: XOR<PlanAssetsUpdateWithoutAssetInput, PlanAssetsUncheckedUpdateWithoutAssetInput>
  }

  export type PlanAssetsUpdateManyWithWhereWithoutAssetInput = {
    where: PlanAssetsScalarWhereInput
    data: XOR<PlanAssetsUpdateManyMutationInput, PlanAssetsUncheckedUpdateManyWithoutAssetInput>
  }

  export type AssetTypeUpsertWithoutAssetsInput = {
    update: XOR<AssetTypeUpdateWithoutAssetsInput, AssetTypeUncheckedUpdateWithoutAssetsInput>
    create: XOR<AssetTypeCreateWithoutAssetsInput, AssetTypeUncheckedCreateWithoutAssetsInput>
    where?: AssetTypeWhereInput
  }

  export type AssetTypeUpdateToOneWithWhereWithoutAssetsInput = {
    where?: AssetTypeWhereInput
    data: XOR<AssetTypeUpdateWithoutAssetsInput, AssetTypeUncheckedUpdateWithoutAssetsInput>
  }

  export type AssetTypeUpdateWithoutAssetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AssetTypeUncheckedUpdateWithoutAssetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SectionUpsertWithoutAssetsInput = {
    update: XOR<SectionUpdateWithoutAssetsInput, SectionUncheckedUpdateWithoutAssetsInput>
    create: XOR<SectionCreateWithoutAssetsInput, SectionUncheckedCreateWithoutAssetsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutAssetsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutAssetsInput, SectionUncheckedUpdateWithoutAssetsInput>
  }

  export type SectionUpdateWithoutAssetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableIntFieldUpdateOperationsInput | number | null
    type?: SectionTypeUpdateOneRequiredWithoutSectionsNestedInput
    coordinates?: CoordinateUpdateManyWithoutSectionNestedInput
    activePlans?: ActivePlansUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutAssetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sectionType?: IntFieldUpdateOperationsInput | number
    area?: NullableIntFieldUpdateOperationsInput | number | null
    coordinates?: CoordinateUncheckedUpdateManyWithoutSectionNestedInput
    activePlans?: ActivePlansUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateWithoutCoordinatesInput = {
    name: string
    area?: number | null
    type: SectionTypeCreateNestedOneWithoutSectionsInput
    assets?: AssetCreateNestedManyWithoutSectionInput
    activePlans?: ActivePlansCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutCoordinatesInput = {
    id?: number
    name: string
    sectionType: number
    area?: number | null
    assets?: AssetUncheckedCreateNestedManyWithoutSectionInput
    activePlans?: ActivePlansUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutCoordinatesInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCoordinatesInput, SectionUncheckedCreateWithoutCoordinatesInput>
  }

  export type SectionUpsertWithoutCoordinatesInput = {
    update: XOR<SectionUpdateWithoutCoordinatesInput, SectionUncheckedUpdateWithoutCoordinatesInput>
    create: XOR<SectionCreateWithoutCoordinatesInput, SectionUncheckedCreateWithoutCoordinatesInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutCoordinatesInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutCoordinatesInput, SectionUncheckedUpdateWithoutCoordinatesInput>
  }

  export type SectionUpdateWithoutCoordinatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableIntFieldUpdateOperationsInput | number | null
    type?: SectionTypeUpdateOneRequiredWithoutSectionsNestedInput
    assets?: AssetUpdateManyWithoutSectionNestedInput
    activePlans?: ActivePlansUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutCoordinatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sectionType?: IntFieldUpdateOperationsInput | number
    area?: NullableIntFieldUpdateOperationsInput | number | null
    assets?: AssetUncheckedUpdateManyWithoutSectionNestedInput
    activePlans?: ActivePlansUncheckedUpdateManyWithoutSectionNestedInput
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

  export type PlanfilesCreateManyPlanInput = {
    fileId?: number
    fileName: string
    filePath: string
    type: string
  }

  export type ActivePlansCreateManyPlanInput = {
    id?: number
    planName: string
    sectionId: number
  }

  export type PlanAssetsCreateManyPlanInput = {
    id?: number
    assetId: number
    assetName: string
  }

  export type PlanfilesUpdateWithoutPlanInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PlanfilesUncheckedUpdateWithoutPlanInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PlanfilesUncheckedUpdateManyWithoutPlanInput = {
    fileId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ActivePlansUpdateWithoutPlanInput = {
    planName?: StringFieldUpdateOperationsInput | string
    section?: SectionUpdateOneRequiredWithoutActivePlansNestedInput
  }

  export type ActivePlansUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    sectionId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivePlansUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    sectionId?: IntFieldUpdateOperationsInput | number
  }

  export type PlanAssetsUpdateWithoutPlanInput = {
    assetName?: StringFieldUpdateOperationsInput | string
    asset?: AssetUpdateOneRequiredWithoutPlanAssetsNestedInput
  }

  export type PlanAssetsUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    assetName?: StringFieldUpdateOperationsInput | string
  }

  export type PlanAssetsUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    assetName?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateManyTypeInput = {
    id?: number
    name: string
    area?: number | null
  }

  export type SectionUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableIntFieldUpdateOperationsInput | number | null
    assets?: AssetUpdateManyWithoutSectionNestedInput
    coordinates?: CoordinateUpdateManyWithoutSectionNestedInput
    activePlans?: ActivePlansUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableIntFieldUpdateOperationsInput | number | null
    assets?: AssetUncheckedUpdateManyWithoutSectionNestedInput
    coordinates?: CoordinateUncheckedUpdateManyWithoutSectionNestedInput
    activePlans?: ActivePlansUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    area?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssetCreateManySectionInput = {
    id?: number
    name: string
    description: string
    assetType: number
  }

  export type CoordinateCreateManySectionInput = {
    id?: number
    latitude: number
    longitude: number
  }

  export type ActivePlansCreateManySectionInput = {
    id?: number
    planName: string
    planId: number
  }

  export type AssetUpdateWithoutSectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    planAssets?: PlanAssetsUpdateManyWithoutAssetNestedInput
    type?: AssetTypeUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assetType?: IntFieldUpdateOperationsInput | number
    planAssets?: PlanAssetsUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assetType?: IntFieldUpdateOperationsInput | number
  }

  export type CoordinateUpdateWithoutSectionInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type CoordinateUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type CoordinateUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivePlansUpdateWithoutSectionInput = {
    planName?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutActivePlansNestedInput
  }

  export type ActivePlansUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
  }

  export type ActivePlansUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    planId?: IntFieldUpdateOperationsInput | number
  }

  export type AssetCreateManyTypeInput = {
    id?: number
    name: string
    description: string
    assetSection: number
  }

  export type AssetUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    planAssets?: PlanAssetsUpdateManyWithoutAssetNestedInput
    section?: SectionUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assetSection?: IntFieldUpdateOperationsInput | number
    planAssets?: PlanAssetsUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    assetSection?: IntFieldUpdateOperationsInput | number
  }

  export type PlanAssetsCreateManyAssetInput = {
    id?: number
    planId: number
    assetName: string
  }

  export type PlanAssetsUpdateWithoutAssetInput = {
    assetName?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutPlanAssetsNestedInput
  }

  export type PlanAssetsUncheckedUpdateWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    assetName?: StringFieldUpdateOperationsInput | string
  }

  export type PlanAssetsUncheckedUpdateManyWithoutAssetInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    assetName?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OwnerCountOutputTypeDefaultArgs instead
     */
    export type OwnerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OwnerCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionTypeCountOutputTypeDefaultArgs instead
     */
    export type SectionTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionCountOutputTypeDefaultArgs instead
     */
    export type SectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetTypeCountOutputTypeDefaultArgs instead
     */
    export type AssetTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetCountOutputTypeDefaultArgs instead
     */
    export type AssetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MineDefaultArgs instead
     */
    export type MineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OwnerDefaultArgs instead
     */
    export type OwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OwnerDefaultArgs<ExtArgs>
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
     * @deprecated Use ShiftDefaultArgs instead
     */
    export type ShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanAssetsDefaultArgs instead
     */
    export type PlanAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanAssetsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanfilesDefaultArgs instead
     */
    export type PlanfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanfilesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivePlansDefaultArgs instead
     */
    export type ActivePlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivePlansDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionTypeDefaultArgs instead
     */
    export type SectionTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionDefaultArgs instead
     */
    export type SectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetTypeDefaultArgs instead
     */
    export type AssetTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssetDefaultArgs instead
     */
    export type AssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoordinateDefaultArgs instead
     */
    export type CoordinateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoordinateDefaultArgs<ExtArgs>

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