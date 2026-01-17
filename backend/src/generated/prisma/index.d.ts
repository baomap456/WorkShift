
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


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
 * Model EmployeeAvailability
 * 
 */
export type EmployeeAvailability = $Result.DefaultSelection<Prisma.$EmployeeAvailabilityPayload>
/**
 * Model WorkSchedule
 * 
 */
export type WorkSchedule = $Result.DefaultSelection<Prisma.$WorkSchedulePayload>
/**
 * Model ShiftSwapRequest
 * 
 */
export type ShiftSwapRequest = $Result.DefaultSelection<Prisma.$ShiftSwapRequestPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model MonthlySalary
 * 
 */
export type MonthlySalary = $Result.DefaultSelection<Prisma.$MonthlySalaryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EmployeeType: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME'
};

export type EmployeeType = (typeof EmployeeType)[keyof typeof EmployeeType]


export const SwapStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type SwapStatus = (typeof SwapStatus)[keyof typeof SwapStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EmployeeType = $Enums.EmployeeType

export const EmployeeType: typeof $Enums.EmployeeType

export type SwapStatus = $Enums.SwapStatus

export const SwapStatus: typeof $Enums.SwapStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeAvailability`: Exposes CRUD operations for the **EmployeeAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeAvailabilities
    * const employeeAvailabilities = await prisma.employeeAvailability.findMany()
    * ```
    */
  get employeeAvailability(): Prisma.EmployeeAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workSchedule`: Exposes CRUD operations for the **WorkSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkSchedules
    * const workSchedules = await prisma.workSchedule.findMany()
    * ```
    */
  get workSchedule(): Prisma.WorkScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftSwapRequest`: Exposes CRUD operations for the **ShiftSwapRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftSwapRequests
    * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany()
    * ```
    */
  get shiftSwapRequest(): Prisma.ShiftSwapRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlySalary`: Exposes CRUD operations for the **MonthlySalary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlySalaries
    * const monthlySalaries = await prisma.monthlySalary.findMany()
    * ```
    */
  get monthlySalary(): Prisma.MonthlySalaryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Shift: 'Shift',
    EmployeeAvailability: 'EmployeeAvailability',
    WorkSchedule: 'WorkSchedule',
    ShiftSwapRequest: 'ShiftSwapRequest',
    Attendance: 'Attendance',
    MonthlySalary: 'MonthlySalary'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "shift" | "employeeAvailability" | "workSchedule" | "shiftSwapRequest" | "attendance" | "monthlySalary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      EmployeeAvailability: {
        payload: Prisma.$EmployeeAvailabilityPayload<ExtArgs>
        fields: Prisma.EmployeeAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.EmployeeAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload>
          }
          findMany: {
            args: Prisma.EmployeeAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload>[]
          }
          create: {
            args: Prisma.EmployeeAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload>
          }
          createMany: {
            args: Prisma.EmployeeAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload>
          }
          update: {
            args: Prisma.EmployeeAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.EmployeeAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeAvailability>
          }
          groupBy: {
            args: Prisma.EmployeeAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      WorkSchedule: {
        payload: Prisma.$WorkSchedulePayload<ExtArgs>
        fields: Prisma.WorkScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          findFirst: {
            args: Prisma.WorkScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          findMany: {
            args: Prisma.WorkScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>[]
          }
          create: {
            args: Prisma.WorkScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          createMany: {
            args: Prisma.WorkScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          update: {
            args: Prisma.WorkScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          deleteMany: {
            args: Prisma.WorkScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkSchedulePayload>
          }
          aggregate: {
            args: Prisma.WorkScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkSchedule>
          }
          groupBy: {
            args: Prisma.WorkScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<WorkScheduleCountAggregateOutputType> | number
          }
        }
      }
      ShiftSwapRequest: {
        payload: Prisma.$ShiftSwapRequestPayload<ExtArgs>
        fields: Prisma.ShiftSwapRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftSwapRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          findFirst: {
            args: Prisma.ShiftSwapRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          findMany: {
            args: Prisma.ShiftSwapRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>[]
          }
          create: {
            args: Prisma.ShiftSwapRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          createMany: {
            args: Prisma.ShiftSwapRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShiftSwapRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          update: {
            args: Prisma.ShiftSwapRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          deleteMany: {
            args: Prisma.ShiftSwapRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftSwapRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShiftSwapRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          aggregate: {
            args: Prisma.ShiftSwapRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftSwapRequest>
          }
          groupBy: {
            args: Prisma.ShiftSwapRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftSwapRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftSwapRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftSwapRequestCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      MonthlySalary: {
        payload: Prisma.$MonthlySalaryPayload<ExtArgs>
        fields: Prisma.MonthlySalaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlySalaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlySalaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload>
          }
          findFirst: {
            args: Prisma.MonthlySalaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlySalaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload>
          }
          findMany: {
            args: Prisma.MonthlySalaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload>[]
          }
          create: {
            args: Prisma.MonthlySalaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload>
          }
          createMany: {
            args: Prisma.MonthlySalaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MonthlySalaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload>
          }
          update: {
            args: Prisma.MonthlySalaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload>
          }
          deleteMany: {
            args: Prisma.MonthlySalaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlySalaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthlySalaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySalaryPayload>
          }
          aggregate: {
            args: Prisma.MonthlySalaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlySalary>
          }
          groupBy: {
            args: Prisma.MonthlySalaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlySalaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlySalaryCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlySalaryCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    shift?: ShiftOmit
    employeeAvailability?: EmployeeAvailabilityOmit
    workSchedule?: WorkScheduleOmit
    shiftSwapRequest?: ShiftSwapRequestOmit
    attendance?: AttendanceOmit
    monthlySalary?: MonthlySalaryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    availabilities: number
    workSchedules: number
    attendances: number
    monthlySalaries: number
    sentSwaps: number
    receivedSwaps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | UserCountOutputTypeCountAvailabilitiesArgs
    workSchedules?: boolean | UserCountOutputTypeCountWorkSchedulesArgs
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
    monthlySalaries?: boolean | UserCountOutputTypeCountMonthlySalariesArgs
    sentSwaps?: boolean | UserCountOutputTypeCountSentSwapsArgs
    receivedSwaps?: boolean | UserCountOutputTypeCountReceivedSwapsArgs
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
  export type UserCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeAvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMonthlySalariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlySalaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentSwapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedSwapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }


  /**
   * Count Type ShiftCountOutputType
   */

  export type ShiftCountOutputType = {
    availabilities: number
    workSchedules: number
  }

  export type ShiftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | ShiftCountOutputTypeCountAvailabilitiesArgs
    workSchedules?: boolean | ShiftCountOutputTypeCountWorkSchedulesArgs
  }

  // Custom InputTypes
  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftCountOutputType
     */
    select?: ShiftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeAvailabilityWhereInput
  }

  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeCountWorkSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
  }


  /**
   * Count Type WorkScheduleCountOutputType
   */

  export type WorkScheduleCountOutputType = {
    swapRequests: number
  }

  export type WorkScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    swapRequests?: boolean | WorkScheduleCountOutputTypeCountSwapRequestsArgs
  }

  // Custom InputTypes
  /**
   * WorkScheduleCountOutputType without action
   */
  export type WorkScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkScheduleCountOutputType
     */
    select?: WorkScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkScheduleCountOutputType without action
   */
  export type WorkScheduleCountOutputTypeCountSwapRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
    baseSalary: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    baseSalary: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    role: $Enums.Role | null
    type: $Enums.EmployeeType | null
    baseSalary: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    fullName: string | null
    role: $Enums.Role | null
    type: $Enums.EmployeeType | null
    baseSalary: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    fullName: number
    role: number
    type: number
    baseSalary: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    baseSalary?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    baseSalary?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    role?: true
    type?: true
    baseSalary?: true
    isActive?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    role?: true
    type?: true
    baseSalary?: true
    isActive?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    fullName?: true
    role?: true
    type?: true
    baseSalary?: true
    isActive?: true
    createdAt?: true
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
    id: number
    email: string
    password: string
    fullName: string
    role: $Enums.Role
    type: $Enums.EmployeeType
    baseSalary: number
    isActive: boolean
    createdAt: Date
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
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    type?: boolean
    baseSalary?: boolean
    isActive?: boolean
    createdAt?: boolean
    availabilities?: boolean | User$availabilitiesArgs<ExtArgs>
    workSchedules?: boolean | User$workSchedulesArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    monthlySalaries?: boolean | User$monthlySalariesArgs<ExtArgs>
    sentSwaps?: boolean | User$sentSwapsArgs<ExtArgs>
    receivedSwaps?: boolean | User$receivedSwapsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    role?: boolean
    type?: boolean
    baseSalary?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "fullName" | "role" | "type" | "baseSalary" | "isActive" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | User$availabilitiesArgs<ExtArgs>
    workSchedules?: boolean | User$workSchedulesArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    monthlySalaries?: boolean | User$monthlySalariesArgs<ExtArgs>
    sentSwaps?: boolean | User$sentSwapsArgs<ExtArgs>
    receivedSwaps?: boolean | User$receivedSwapsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      availabilities: Prisma.$EmployeeAvailabilityPayload<ExtArgs>[]
      workSchedules: Prisma.$WorkSchedulePayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      monthlySalaries: Prisma.$MonthlySalaryPayload<ExtArgs>[]
      sentSwaps: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
      receivedSwaps: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      fullName: string
      role: $Enums.Role
      type: $Enums.EmployeeType
      baseSalary: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availabilities<T extends User$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workSchedules<T extends User$workSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$workSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthlySalaries<T extends User$monthlySalariesArgs<ExtArgs> = {}>(args?: Subset<T, User$monthlySalariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentSwaps<T extends User$sentSwapsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentSwapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedSwaps<T extends User$receivedSwapsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedSwapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly type: FieldRef<"User", 'EmployeeType'>
    readonly baseSalary: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.availabilities
   */
  export type User$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    where?: EmployeeAvailabilityWhereInput
    orderBy?: EmployeeAvailabilityOrderByWithRelationInput | EmployeeAvailabilityOrderByWithRelationInput[]
    cursor?: EmployeeAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeAvailabilityScalarFieldEnum | EmployeeAvailabilityScalarFieldEnum[]
  }

  /**
   * User.workSchedules
   */
  export type User$workSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    cursor?: WorkScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.monthlySalaries
   */
  export type User$monthlySalariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    where?: MonthlySalaryWhereInput
    orderBy?: MonthlySalaryOrderByWithRelationInput | MonthlySalaryOrderByWithRelationInput[]
    cursor?: MonthlySalaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlySalaryScalarFieldEnum | MonthlySalaryScalarFieldEnum[]
  }

  /**
   * User.sentSwaps
   */
  export type User$sentSwapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * User.receivedSwaps
   */
  export type User$receivedSwapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    id: number | null
    unitPrice: number | null
  }

  export type ShiftSumAggregateOutputType = {
    id: number | null
    unitPrice: number | null
  }

  export type ShiftMinAggregateOutputType = {
    id: number | null
    name: string | null
    startTime: string | null
    endTime: string | null
    unitPrice: number | null
  }

  export type ShiftMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startTime: string | null
    endTime: string | null
    unitPrice: number | null
  }

  export type ShiftCountAggregateOutputType = {
    id: number
    name: number
    startTime: number
    endTime: number
    unitPrice: number
    _all: number
  }


  export type ShiftAvgAggregateInputType = {
    id?: true
    unitPrice?: true
  }

  export type ShiftSumAggregateInputType = {
    id?: true
    unitPrice?: true
  }

  export type ShiftMinAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    unitPrice?: true
  }

  export type ShiftMaxAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    unitPrice?: true
  }

  export type ShiftCountAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    unitPrice?: true
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
    id: number
    name: string
    startTime: string
    endTime: string
    unitPrice: number | null
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
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    unitPrice?: boolean
    availabilities?: boolean | Shift$availabilitiesArgs<ExtArgs>
    workSchedules?: boolean | Shift$workSchedulesArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>



  export type ShiftSelectScalar = {
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    unitPrice?: boolean
  }

  export type ShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startTime" | "endTime" | "unitPrice", ExtArgs["result"]["shift"]>
  export type ShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | Shift$availabilitiesArgs<ExtArgs>
    workSchedules?: boolean | Shift$workSchedulesArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {
      availabilities: Prisma.$EmployeeAvailabilityPayload<ExtArgs>[]
      workSchedules: Prisma.$WorkSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      startTime: string
      endTime: string
      unitPrice: number | null
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends ShiftFindUniqueArgs>(args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ShiftFindFirstArgs>(args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `id`
     * const shiftWithIdOnly = await prisma.shift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftFindManyArgs>(args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ShiftCreateArgs>(args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends ShiftDeleteArgs>(args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ShiftUpdateArgs>(args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends ShiftUpsertArgs>(args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availabilities<T extends Shift$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Shift$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workSchedules<T extends Shift$workSchedulesArgs<ExtArgs> = {}>(args?: Subset<T, Shift$workSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Shift", 'Int'>
    readonly name: FieldRef<"Shift", 'String'>
    readonly startTime: FieldRef<"Shift", 'String'>
    readonly endTime: FieldRef<"Shift", 'String'>
    readonly unitPrice: FieldRef<"Shift", 'Int'>
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
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
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
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
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
    /**
     * Limit how many Shifts to delete.
     */
    limit?: number
  }

  /**
   * Shift.availabilities
   */
  export type Shift$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    where?: EmployeeAvailabilityWhereInput
    orderBy?: EmployeeAvailabilityOrderByWithRelationInput | EmployeeAvailabilityOrderByWithRelationInput[]
    cursor?: EmployeeAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeAvailabilityScalarFieldEnum | EmployeeAvailabilityScalarFieldEnum[]
  }

  /**
   * Shift.workSchedules
   */
  export type Shift$workSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    cursor?: WorkScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeAvailability
   */

  export type AggregateEmployeeAvailability = {
    _count: EmployeeAvailabilityCountAggregateOutputType | null
    _avg: EmployeeAvailabilityAvgAggregateOutputType | null
    _sum: EmployeeAvailabilitySumAggregateOutputType | null
    _min: EmployeeAvailabilityMinAggregateOutputType | null
    _max: EmployeeAvailabilityMaxAggregateOutputType | null
  }

  export type EmployeeAvailabilityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    shiftId: number | null
  }

  export type EmployeeAvailabilitySumAggregateOutputType = {
    id: number | null
    userId: number | null
    shiftId: number | null
  }

  export type EmployeeAvailabilityMinAggregateOutputType = {
    id: number | null
    userId: number | null
    shiftId: number | null
    date: Date | null
  }

  export type EmployeeAvailabilityMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    shiftId: number | null
    date: Date | null
  }

  export type EmployeeAvailabilityCountAggregateOutputType = {
    id: number
    userId: number
    shiftId: number
    date: number
    _all: number
  }


  export type EmployeeAvailabilityAvgAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
  }

  export type EmployeeAvailabilitySumAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
  }

  export type EmployeeAvailabilityMinAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    date?: true
  }

  export type EmployeeAvailabilityMaxAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    date?: true
  }

  export type EmployeeAvailabilityCountAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    date?: true
    _all?: true
  }

  export type EmployeeAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeAvailability to aggregate.
     */
    where?: EmployeeAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAvailabilities to fetch.
     */
    orderBy?: EmployeeAvailabilityOrderByWithRelationInput | EmployeeAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeAvailabilities
    **/
    _count?: true | EmployeeAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeAvailabilityMaxAggregateInputType
  }

  export type GetEmployeeAvailabilityAggregateType<T extends EmployeeAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeAvailability[P]>
      : GetScalarType<T[P], AggregateEmployeeAvailability[P]>
  }




  export type EmployeeAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeAvailabilityWhereInput
    orderBy?: EmployeeAvailabilityOrderByWithAggregationInput | EmployeeAvailabilityOrderByWithAggregationInput[]
    by: EmployeeAvailabilityScalarFieldEnum[] | EmployeeAvailabilityScalarFieldEnum
    having?: EmployeeAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeAvailabilityCountAggregateInputType | true
    _avg?: EmployeeAvailabilityAvgAggregateInputType
    _sum?: EmployeeAvailabilitySumAggregateInputType
    _min?: EmployeeAvailabilityMinAggregateInputType
    _max?: EmployeeAvailabilityMaxAggregateInputType
  }

  export type EmployeeAvailabilityGroupByOutputType = {
    id: number
    userId: number
    shiftId: number
    date: Date
    _count: EmployeeAvailabilityCountAggregateOutputType | null
    _avg: EmployeeAvailabilityAvgAggregateOutputType | null
    _sum: EmployeeAvailabilitySumAggregateOutputType | null
    _min: EmployeeAvailabilityMinAggregateOutputType | null
    _max: EmployeeAvailabilityMaxAggregateOutputType | null
  }

  type GetEmployeeAvailabilityGroupByPayload<T extends EmployeeAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shiftId?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeAvailability"]>



  export type EmployeeAvailabilitySelectScalar = {
    id?: boolean
    userId?: boolean
    shiftId?: boolean
    date?: boolean
  }

  export type EmployeeAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shiftId" | "date", ExtArgs["result"]["employeeAvailability"]>
  export type EmployeeAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
  }

  export type $EmployeeAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeAvailability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shift: Prisma.$ShiftPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      shiftId: number
      date: Date
    }, ExtArgs["result"]["employeeAvailability"]>
    composites: {}
  }

  type EmployeeAvailabilityGetPayload<S extends boolean | null | undefined | EmployeeAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$EmployeeAvailabilityPayload, S>

  type EmployeeAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeAvailabilityCountAggregateInputType | true
    }

  export interface EmployeeAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeAvailability'], meta: { name: 'EmployeeAvailability' } }
    /**
     * Find zero or one EmployeeAvailability that matches the filter.
     * @param {EmployeeAvailabilityFindUniqueArgs} args - Arguments to find a EmployeeAvailability
     * @example
     * // Get one EmployeeAvailability
     * const employeeAvailability = await prisma.employeeAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeAvailabilityFindUniqueArgs>(args: SelectSubset<T, EmployeeAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__EmployeeAvailabilityClient<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a EmployeeAvailability
     * @example
     * // Get one EmployeeAvailability
     * const employeeAvailability = await prisma.employeeAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeAvailabilityClient<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAvailabilityFindFirstArgs} args - Arguments to find a EmployeeAvailability
     * @example
     * // Get one EmployeeAvailability
     * const employeeAvailability = await prisma.employeeAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeAvailabilityFindFirstArgs>(args?: SelectSubset<T, EmployeeAvailabilityFindFirstArgs<ExtArgs>>): Prisma__EmployeeAvailabilityClient<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAvailabilityFindFirstOrThrowArgs} args - Arguments to find a EmployeeAvailability
     * @example
     * // Get one EmployeeAvailability
     * const employeeAvailability = await prisma.employeeAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeAvailabilityClient<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeAvailabilities
     * const employeeAvailabilities = await prisma.employeeAvailability.findMany()
     * 
     * // Get first 10 EmployeeAvailabilities
     * const employeeAvailabilities = await prisma.employeeAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeAvailabilityWithIdOnly = await prisma.employeeAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeAvailabilityFindManyArgs>(args?: SelectSubset<T, EmployeeAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeAvailability.
     * @param {EmployeeAvailabilityCreateArgs} args - Arguments to create a EmployeeAvailability.
     * @example
     * // Create one EmployeeAvailability
     * const EmployeeAvailability = await prisma.employeeAvailability.create({
     *   data: {
     *     // ... data to create a EmployeeAvailability
     *   }
     * })
     * 
     */
    create<T extends EmployeeAvailabilityCreateArgs>(args: SelectSubset<T, EmployeeAvailabilityCreateArgs<ExtArgs>>): Prisma__EmployeeAvailabilityClient<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeAvailabilities.
     * @param {EmployeeAvailabilityCreateManyArgs} args - Arguments to create many EmployeeAvailabilities.
     * @example
     * // Create many EmployeeAvailabilities
     * const employeeAvailability = await prisma.employeeAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeAvailabilityCreateManyArgs>(args?: SelectSubset<T, EmployeeAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmployeeAvailability.
     * @param {EmployeeAvailabilityDeleteArgs} args - Arguments to delete one EmployeeAvailability.
     * @example
     * // Delete one EmployeeAvailability
     * const EmployeeAvailability = await prisma.employeeAvailability.delete({
     *   where: {
     *     // ... filter to delete one EmployeeAvailability
     *   }
     * })
     * 
     */
    delete<T extends EmployeeAvailabilityDeleteArgs>(args: SelectSubset<T, EmployeeAvailabilityDeleteArgs<ExtArgs>>): Prisma__EmployeeAvailabilityClient<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeAvailability.
     * @param {EmployeeAvailabilityUpdateArgs} args - Arguments to update one EmployeeAvailability.
     * @example
     * // Update one EmployeeAvailability
     * const employeeAvailability = await prisma.employeeAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeAvailabilityUpdateArgs>(args: SelectSubset<T, EmployeeAvailabilityUpdateArgs<ExtArgs>>): Prisma__EmployeeAvailabilityClient<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeAvailabilities.
     * @param {EmployeeAvailabilityDeleteManyArgs} args - Arguments to filter EmployeeAvailabilities to delete.
     * @example
     * // Delete a few EmployeeAvailabilities
     * const { count } = await prisma.employeeAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeAvailabilityDeleteManyArgs>(args?: SelectSubset<T, EmployeeAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeAvailabilities
     * const employeeAvailability = await prisma.employeeAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeAvailabilityUpdateManyArgs>(args: SelectSubset<T, EmployeeAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmployeeAvailability.
     * @param {EmployeeAvailabilityUpsertArgs} args - Arguments to update or create a EmployeeAvailability.
     * @example
     * // Update or create a EmployeeAvailability
     * const employeeAvailability = await prisma.employeeAvailability.upsert({
     *   create: {
     *     // ... data to create a EmployeeAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeAvailability we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeAvailabilityUpsertArgs>(args: SelectSubset<T, EmployeeAvailabilityUpsertArgs<ExtArgs>>): Prisma__EmployeeAvailabilityClient<$Result.GetResult<Prisma.$EmployeeAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAvailabilityCountArgs} args - Arguments to filter EmployeeAvailabilities to count.
     * @example
     * // Count the number of EmployeeAvailabilities
     * const count = await prisma.employeeAvailability.count({
     *   where: {
     *     // ... the filter for the EmployeeAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends EmployeeAvailabilityCountArgs>(
      args?: Subset<T, EmployeeAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAvailabilityAggregateArgs>(args: Subset<T, EmployeeAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAvailabilityAggregateType<T>>

    /**
     * Group by EmployeeAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends EmployeeAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeAvailability model
   */
  readonly fields: EmployeeAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shift<T extends ShiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftDefaultArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmployeeAvailability model
   */
  interface EmployeeAvailabilityFieldRefs {
    readonly id: FieldRef<"EmployeeAvailability", 'Int'>
    readonly userId: FieldRef<"EmployeeAvailability", 'Int'>
    readonly shiftId: FieldRef<"EmployeeAvailability", 'Int'>
    readonly date: FieldRef<"EmployeeAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeAvailability findUnique
   */
  export type EmployeeAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAvailability to fetch.
     */
    where: EmployeeAvailabilityWhereUniqueInput
  }

  /**
   * EmployeeAvailability findUniqueOrThrow
   */
  export type EmployeeAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAvailability to fetch.
     */
    where: EmployeeAvailabilityWhereUniqueInput
  }

  /**
   * EmployeeAvailability findFirst
   */
  export type EmployeeAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAvailability to fetch.
     */
    where?: EmployeeAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAvailabilities to fetch.
     */
    orderBy?: EmployeeAvailabilityOrderByWithRelationInput | EmployeeAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeAvailabilities.
     */
    cursor?: EmployeeAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeAvailabilities.
     */
    distinct?: EmployeeAvailabilityScalarFieldEnum | EmployeeAvailabilityScalarFieldEnum[]
  }

  /**
   * EmployeeAvailability findFirstOrThrow
   */
  export type EmployeeAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAvailability to fetch.
     */
    where?: EmployeeAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAvailabilities to fetch.
     */
    orderBy?: EmployeeAvailabilityOrderByWithRelationInput | EmployeeAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeAvailabilities.
     */
    cursor?: EmployeeAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeAvailabilities.
     */
    distinct?: EmployeeAvailabilityScalarFieldEnum | EmployeeAvailabilityScalarFieldEnum[]
  }

  /**
   * EmployeeAvailability findMany
   */
  export type EmployeeAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeAvailabilities to fetch.
     */
    where?: EmployeeAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeAvailabilities to fetch.
     */
    orderBy?: EmployeeAvailabilityOrderByWithRelationInput | EmployeeAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeAvailabilities.
     */
    cursor?: EmployeeAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeAvailabilities.
     */
    skip?: number
    distinct?: EmployeeAvailabilityScalarFieldEnum | EmployeeAvailabilityScalarFieldEnum[]
  }

  /**
   * EmployeeAvailability create
   */
  export type EmployeeAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeAvailability.
     */
    data: XOR<EmployeeAvailabilityCreateInput, EmployeeAvailabilityUncheckedCreateInput>
  }

  /**
   * EmployeeAvailability createMany
   */
  export type EmployeeAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeAvailabilities.
     */
    data: EmployeeAvailabilityCreateManyInput | EmployeeAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeAvailability update
   */
  export type EmployeeAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeAvailability.
     */
    data: XOR<EmployeeAvailabilityUpdateInput, EmployeeAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which EmployeeAvailability to update.
     */
    where: EmployeeAvailabilityWhereUniqueInput
  }

  /**
   * EmployeeAvailability updateMany
   */
  export type EmployeeAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeAvailabilities.
     */
    data: XOR<EmployeeAvailabilityUpdateManyMutationInput, EmployeeAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeAvailabilities to update
     */
    where?: EmployeeAvailabilityWhereInput
    /**
     * Limit how many EmployeeAvailabilities to update.
     */
    limit?: number
  }

  /**
   * EmployeeAvailability upsert
   */
  export type EmployeeAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeAvailability to update in case it exists.
     */
    where: EmployeeAvailabilityWhereUniqueInput
    /**
     * In case the EmployeeAvailability found by the `where` argument doesn't exist, create a new EmployeeAvailability with this data.
     */
    create: XOR<EmployeeAvailabilityCreateInput, EmployeeAvailabilityUncheckedCreateInput>
    /**
     * In case the EmployeeAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeAvailabilityUpdateInput, EmployeeAvailabilityUncheckedUpdateInput>
  }

  /**
   * EmployeeAvailability delete
   */
  export type EmployeeAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which EmployeeAvailability to delete.
     */
    where: EmployeeAvailabilityWhereUniqueInput
  }

  /**
   * EmployeeAvailability deleteMany
   */
  export type EmployeeAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeAvailabilities to delete
     */
    where?: EmployeeAvailabilityWhereInput
    /**
     * Limit how many EmployeeAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * EmployeeAvailability without action
   */
  export type EmployeeAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeAvailability
     */
    select?: EmployeeAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeAvailability
     */
    omit?: EmployeeAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model WorkSchedule
   */

  export type AggregateWorkSchedule = {
    _count: WorkScheduleCountAggregateOutputType | null
    _avg: WorkScheduleAvgAggregateOutputType | null
    _sum: WorkScheduleSumAggregateOutputType | null
    _min: WorkScheduleMinAggregateOutputType | null
    _max: WorkScheduleMaxAggregateOutputType | null
  }

  export type WorkScheduleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    shiftId: number | null
  }

  export type WorkScheduleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    shiftId: number | null
  }

  export type WorkScheduleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    shiftId: number | null
    date: Date | null
    isPublished: boolean | null
  }

  export type WorkScheduleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    shiftId: number | null
    date: Date | null
    isPublished: boolean | null
  }

  export type WorkScheduleCountAggregateOutputType = {
    id: number
    userId: number
    shiftId: number
    date: number
    isPublished: number
    _all: number
  }


  export type WorkScheduleAvgAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
  }

  export type WorkScheduleSumAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
  }

  export type WorkScheduleMinAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    date?: true
    isPublished?: true
  }

  export type WorkScheduleMaxAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    date?: true
    isPublished?: true
  }

  export type WorkScheduleCountAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    date?: true
    isPublished?: true
    _all?: true
  }

  export type WorkScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSchedule to aggregate.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkSchedules
    **/
    _count?: true | WorkScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkScheduleMaxAggregateInputType
  }

  export type GetWorkScheduleAggregateType<T extends WorkScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkSchedule[P]>
      : GetScalarType<T[P], AggregateWorkSchedule[P]>
  }




  export type WorkScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkScheduleWhereInput
    orderBy?: WorkScheduleOrderByWithAggregationInput | WorkScheduleOrderByWithAggregationInput[]
    by: WorkScheduleScalarFieldEnum[] | WorkScheduleScalarFieldEnum
    having?: WorkScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkScheduleCountAggregateInputType | true
    _avg?: WorkScheduleAvgAggregateInputType
    _sum?: WorkScheduleSumAggregateInputType
    _min?: WorkScheduleMinAggregateInputType
    _max?: WorkScheduleMaxAggregateInputType
  }

  export type WorkScheduleGroupByOutputType = {
    id: number
    userId: number
    shiftId: number
    date: Date
    isPublished: boolean
    _count: WorkScheduleCountAggregateOutputType | null
    _avg: WorkScheduleAvgAggregateOutputType | null
    _sum: WorkScheduleSumAggregateOutputType | null
    _min: WorkScheduleMinAggregateOutputType | null
    _max: WorkScheduleMaxAggregateOutputType | null
  }

  type GetWorkScheduleGroupByPayload<T extends WorkScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], WorkScheduleGroupByOutputType[P]>
        }
      >
    >


  export type WorkScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shiftId?: boolean
    date?: boolean
    isPublished?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    attendance?: boolean | WorkSchedule$attendanceArgs<ExtArgs>
    swapRequests?: boolean | WorkSchedule$swapRequestsArgs<ExtArgs>
    _count?: boolean | WorkScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workSchedule"]>



  export type WorkScheduleSelectScalar = {
    id?: boolean
    userId?: boolean
    shiftId?: boolean
    date?: boolean
    isPublished?: boolean
  }

  export type WorkScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shiftId" | "date" | "isPublished", ExtArgs["result"]["workSchedule"]>
  export type WorkScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    attendance?: boolean | WorkSchedule$attendanceArgs<ExtArgs>
    swapRequests?: boolean | WorkSchedule$swapRequestsArgs<ExtArgs>
    _count?: boolean | WorkScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkSchedule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shift: Prisma.$ShiftPayload<ExtArgs>
      attendance: Prisma.$AttendancePayload<ExtArgs> | null
      swapRequests: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      shiftId: number
      date: Date
      isPublished: boolean
    }, ExtArgs["result"]["workSchedule"]>
    composites: {}
  }

  type WorkScheduleGetPayload<S extends boolean | null | undefined | WorkScheduleDefaultArgs> = $Result.GetResult<Prisma.$WorkSchedulePayload, S>

  type WorkScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkScheduleCountAggregateInputType | true
    }

  export interface WorkScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkSchedule'], meta: { name: 'WorkSchedule' } }
    /**
     * Find zero or one WorkSchedule that matches the filter.
     * @param {WorkScheduleFindUniqueArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkScheduleFindUniqueArgs>(args: SelectSubset<T, WorkScheduleFindUniqueArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkScheduleFindUniqueOrThrowArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindFirstArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkScheduleFindFirstArgs>(args?: SelectSubset<T, WorkScheduleFindFirstArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindFirstOrThrowArgs} args - Arguments to find a WorkSchedule
     * @example
     * // Get one WorkSchedule
     * const workSchedule = await prisma.workSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkSchedules
     * const workSchedules = await prisma.workSchedule.findMany()
     * 
     * // Get first 10 WorkSchedules
     * const workSchedules = await prisma.workSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workScheduleWithIdOnly = await prisma.workSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkScheduleFindManyArgs>(args?: SelectSubset<T, WorkScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkSchedule.
     * @param {WorkScheduleCreateArgs} args - Arguments to create a WorkSchedule.
     * @example
     * // Create one WorkSchedule
     * const WorkSchedule = await prisma.workSchedule.create({
     *   data: {
     *     // ... data to create a WorkSchedule
     *   }
     * })
     * 
     */
    create<T extends WorkScheduleCreateArgs>(args: SelectSubset<T, WorkScheduleCreateArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkSchedules.
     * @param {WorkScheduleCreateManyArgs} args - Arguments to create many WorkSchedules.
     * @example
     * // Create many WorkSchedules
     * const workSchedule = await prisma.workSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkScheduleCreateManyArgs>(args?: SelectSubset<T, WorkScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkSchedule.
     * @param {WorkScheduleDeleteArgs} args - Arguments to delete one WorkSchedule.
     * @example
     * // Delete one WorkSchedule
     * const WorkSchedule = await prisma.workSchedule.delete({
     *   where: {
     *     // ... filter to delete one WorkSchedule
     *   }
     * })
     * 
     */
    delete<T extends WorkScheduleDeleteArgs>(args: SelectSubset<T, WorkScheduleDeleteArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkSchedule.
     * @param {WorkScheduleUpdateArgs} args - Arguments to update one WorkSchedule.
     * @example
     * // Update one WorkSchedule
     * const workSchedule = await prisma.workSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkScheduleUpdateArgs>(args: SelectSubset<T, WorkScheduleUpdateArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkSchedules.
     * @param {WorkScheduleDeleteManyArgs} args - Arguments to filter WorkSchedules to delete.
     * @example
     * // Delete a few WorkSchedules
     * const { count } = await prisma.workSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkScheduleDeleteManyArgs>(args?: SelectSubset<T, WorkScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkSchedules
     * const workSchedule = await prisma.workSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkScheduleUpdateManyArgs>(args: SelectSubset<T, WorkScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkSchedule.
     * @param {WorkScheduleUpsertArgs} args - Arguments to update or create a WorkSchedule.
     * @example
     * // Update or create a WorkSchedule
     * const workSchedule = await prisma.workSchedule.upsert({
     *   create: {
     *     // ... data to create a WorkSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkSchedule we want to update
     *   }
     * })
     */
    upsert<T extends WorkScheduleUpsertArgs>(args: SelectSubset<T, WorkScheduleUpsertArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleCountArgs} args - Arguments to filter WorkSchedules to count.
     * @example
     * // Count the number of WorkSchedules
     * const count = await prisma.workSchedule.count({
     *   where: {
     *     // ... the filter for the WorkSchedules we want to count
     *   }
     * })
    **/
    count<T extends WorkScheduleCountArgs>(
      args?: Subset<T, WorkScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkScheduleAggregateArgs>(args: Subset<T, WorkScheduleAggregateArgs>): Prisma.PrismaPromise<GetWorkScheduleAggregateType<T>>

    /**
     * Group by WorkSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkScheduleGroupByArgs} args - Group by arguments.
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
      T extends WorkScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkScheduleGroupByArgs['orderBy'] }
        : { orderBy?: WorkScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkSchedule model
   */
  readonly fields: WorkScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shift<T extends ShiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftDefaultArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendance<T extends WorkSchedule$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, WorkSchedule$attendanceArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    swapRequests<T extends WorkSchedule$swapRequestsArgs<ExtArgs> = {}>(args?: Subset<T, WorkSchedule$swapRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkSchedule model
   */
  interface WorkScheduleFieldRefs {
    readonly id: FieldRef<"WorkSchedule", 'Int'>
    readonly userId: FieldRef<"WorkSchedule", 'Int'>
    readonly shiftId: FieldRef<"WorkSchedule", 'Int'>
    readonly date: FieldRef<"WorkSchedule", 'DateTime'>
    readonly isPublished: FieldRef<"WorkSchedule", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * WorkSchedule findUnique
   */
  export type WorkScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule findUniqueOrThrow
   */
  export type WorkScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule findFirst
   */
  export type WorkScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSchedules.
     */
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule findFirstOrThrow
   */
  export type WorkScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedule to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkSchedules.
     */
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule findMany
   */
  export type WorkScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter, which WorkSchedules to fetch.
     */
    where?: WorkScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkSchedules to fetch.
     */
    orderBy?: WorkScheduleOrderByWithRelationInput | WorkScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkSchedules.
     */
    cursor?: WorkScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkSchedules.
     */
    skip?: number
    distinct?: WorkScheduleScalarFieldEnum | WorkScheduleScalarFieldEnum[]
  }

  /**
   * WorkSchedule create
   */
  export type WorkScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkSchedule.
     */
    data: XOR<WorkScheduleCreateInput, WorkScheduleUncheckedCreateInput>
  }

  /**
   * WorkSchedule createMany
   */
  export type WorkScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkSchedules.
     */
    data: WorkScheduleCreateManyInput | WorkScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkSchedule update
   */
  export type WorkScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkSchedule.
     */
    data: XOR<WorkScheduleUpdateInput, WorkScheduleUncheckedUpdateInput>
    /**
     * Choose, which WorkSchedule to update.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule updateMany
   */
  export type WorkScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkSchedules.
     */
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyInput>
    /**
     * Filter which WorkSchedules to update
     */
    where?: WorkScheduleWhereInput
    /**
     * Limit how many WorkSchedules to update.
     */
    limit?: number
  }

  /**
   * WorkSchedule upsert
   */
  export type WorkScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkSchedule to update in case it exists.
     */
    where: WorkScheduleWhereUniqueInput
    /**
     * In case the WorkSchedule found by the `where` argument doesn't exist, create a new WorkSchedule with this data.
     */
    create: XOR<WorkScheduleCreateInput, WorkScheduleUncheckedCreateInput>
    /**
     * In case the WorkSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkScheduleUpdateInput, WorkScheduleUncheckedUpdateInput>
  }

  /**
   * WorkSchedule delete
   */
  export type WorkScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
    /**
     * Filter which WorkSchedule to delete.
     */
    where: WorkScheduleWhereUniqueInput
  }

  /**
   * WorkSchedule deleteMany
   */
  export type WorkScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkSchedules to delete
     */
    where?: WorkScheduleWhereInput
    /**
     * Limit how many WorkSchedules to delete.
     */
    limit?: number
  }

  /**
   * WorkSchedule.attendance
   */
  export type WorkSchedule$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
  }

  /**
   * WorkSchedule.swapRequests
   */
  export type WorkSchedule$swapRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * WorkSchedule without action
   */
  export type WorkScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkSchedule
     */
    select?: WorkScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkSchedule
     */
    omit?: WorkScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkScheduleInclude<ExtArgs> | null
  }


  /**
   * Model ShiftSwapRequest
   */

  export type AggregateShiftSwapRequest = {
    _count: ShiftSwapRequestCountAggregateOutputType | null
    _avg: ShiftSwapRequestAvgAggregateOutputType | null
    _sum: ShiftSwapRequestSumAggregateOutputType | null
    _min: ShiftSwapRequestMinAggregateOutputType | null
    _max: ShiftSwapRequestMaxAggregateOutputType | null
  }

  export type ShiftSwapRequestAvgAggregateOutputType = {
    id: number | null
    workScheduleId: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type ShiftSwapRequestSumAggregateOutputType = {
    id: number | null
    workScheduleId: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type ShiftSwapRequestMinAggregateOutputType = {
    id: number | null
    workScheduleId: number | null
    senderId: number | null
    receiverId: number | null
    reason: string | null
    status: $Enums.SwapStatus | null
    createdAt: Date | null
  }

  export type ShiftSwapRequestMaxAggregateOutputType = {
    id: number | null
    workScheduleId: number | null
    senderId: number | null
    receiverId: number | null
    reason: string | null
    status: $Enums.SwapStatus | null
    createdAt: Date | null
  }

  export type ShiftSwapRequestCountAggregateOutputType = {
    id: number
    workScheduleId: number
    senderId: number
    receiverId: number
    reason: number
    status: number
    createdAt: number
    _all: number
  }


  export type ShiftSwapRequestAvgAggregateInputType = {
    id?: true
    workScheduleId?: true
    senderId?: true
    receiverId?: true
  }

  export type ShiftSwapRequestSumAggregateInputType = {
    id?: true
    workScheduleId?: true
    senderId?: true
    receiverId?: true
  }

  export type ShiftSwapRequestMinAggregateInputType = {
    id?: true
    workScheduleId?: true
    senderId?: true
    receiverId?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type ShiftSwapRequestMaxAggregateInputType = {
    id?: true
    workScheduleId?: true
    senderId?: true
    receiverId?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type ShiftSwapRequestCountAggregateInputType = {
    id?: true
    workScheduleId?: true
    senderId?: true
    receiverId?: true
    reason?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ShiftSwapRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftSwapRequest to aggregate.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftSwapRequests
    **/
    _count?: true | ShiftSwapRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftSwapRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftSwapRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftSwapRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftSwapRequestMaxAggregateInputType
  }

  export type GetShiftSwapRequestAggregateType<T extends ShiftSwapRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftSwapRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftSwapRequest[P]>
      : GetScalarType<T[P], AggregateShiftSwapRequest[P]>
  }




  export type ShiftSwapRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithAggregationInput | ShiftSwapRequestOrderByWithAggregationInput[]
    by: ShiftSwapRequestScalarFieldEnum[] | ShiftSwapRequestScalarFieldEnum
    having?: ShiftSwapRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftSwapRequestCountAggregateInputType | true
    _avg?: ShiftSwapRequestAvgAggregateInputType
    _sum?: ShiftSwapRequestSumAggregateInputType
    _min?: ShiftSwapRequestMinAggregateInputType
    _max?: ShiftSwapRequestMaxAggregateInputType
  }

  export type ShiftSwapRequestGroupByOutputType = {
    id: number
    workScheduleId: number
    senderId: number
    receiverId: number | null
    reason: string | null
    status: $Enums.SwapStatus
    createdAt: Date
    _count: ShiftSwapRequestCountAggregateOutputType | null
    _avg: ShiftSwapRequestAvgAggregateOutputType | null
    _sum: ShiftSwapRequestSumAggregateOutputType | null
    _min: ShiftSwapRequestMinAggregateOutputType | null
    _max: ShiftSwapRequestMaxAggregateOutputType | null
  }

  type GetShiftSwapRequestGroupByPayload<T extends ShiftSwapRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftSwapRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftSwapRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftSwapRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftSwapRequestGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSwapRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workScheduleId?: boolean
    senderId?: boolean
    receiverId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    schedule?: boolean | WorkScheduleDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | ShiftSwapRequest$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["shiftSwapRequest"]>



  export type ShiftSwapRequestSelectScalar = {
    id?: boolean
    workScheduleId?: boolean
    senderId?: boolean
    receiverId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ShiftSwapRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workScheduleId" | "senderId" | "receiverId" | "reason" | "status" | "createdAt", ExtArgs["result"]["shiftSwapRequest"]>
  export type ShiftSwapRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | WorkScheduleDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | ShiftSwapRequest$receiverArgs<ExtArgs>
  }

  export type $ShiftSwapRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftSwapRequest"
    objects: {
      schedule: Prisma.$WorkSchedulePayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workScheduleId: number
      senderId: number
      receiverId: number | null
      reason: string | null
      status: $Enums.SwapStatus
      createdAt: Date
    }, ExtArgs["result"]["shiftSwapRequest"]>
    composites: {}
  }

  type ShiftSwapRequestGetPayload<S extends boolean | null | undefined | ShiftSwapRequestDefaultArgs> = $Result.GetResult<Prisma.$ShiftSwapRequestPayload, S>

  type ShiftSwapRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftSwapRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftSwapRequestCountAggregateInputType | true
    }

  export interface ShiftSwapRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftSwapRequest'], meta: { name: 'ShiftSwapRequest' } }
    /**
     * Find zero or one ShiftSwapRequest that matches the filter.
     * @param {ShiftSwapRequestFindUniqueArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftSwapRequestFindUniqueArgs>(args: SelectSubset<T, ShiftSwapRequestFindUniqueArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftSwapRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftSwapRequestFindUniqueOrThrowArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftSwapRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftSwapRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindFirstArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftSwapRequestFindFirstArgs>(args?: SelectSubset<T, ShiftSwapRequestFindFirstArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftSwapRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindFirstOrThrowArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftSwapRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftSwapRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftSwapRequests
     * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany()
     * 
     * // Get first 10 ShiftSwapRequests
     * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftSwapRequestWithIdOnly = await prisma.shiftSwapRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftSwapRequestFindManyArgs>(args?: SelectSubset<T, ShiftSwapRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftSwapRequest.
     * @param {ShiftSwapRequestCreateArgs} args - Arguments to create a ShiftSwapRequest.
     * @example
     * // Create one ShiftSwapRequest
     * const ShiftSwapRequest = await prisma.shiftSwapRequest.create({
     *   data: {
     *     // ... data to create a ShiftSwapRequest
     *   }
     * })
     * 
     */
    create<T extends ShiftSwapRequestCreateArgs>(args: SelectSubset<T, ShiftSwapRequestCreateArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftSwapRequests.
     * @param {ShiftSwapRequestCreateManyArgs} args - Arguments to create many ShiftSwapRequests.
     * @example
     * // Create many ShiftSwapRequests
     * const shiftSwapRequest = await prisma.shiftSwapRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftSwapRequestCreateManyArgs>(args?: SelectSubset<T, ShiftSwapRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShiftSwapRequest.
     * @param {ShiftSwapRequestDeleteArgs} args - Arguments to delete one ShiftSwapRequest.
     * @example
     * // Delete one ShiftSwapRequest
     * const ShiftSwapRequest = await prisma.shiftSwapRequest.delete({
     *   where: {
     *     // ... filter to delete one ShiftSwapRequest
     *   }
     * })
     * 
     */
    delete<T extends ShiftSwapRequestDeleteArgs>(args: SelectSubset<T, ShiftSwapRequestDeleteArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftSwapRequest.
     * @param {ShiftSwapRequestUpdateArgs} args - Arguments to update one ShiftSwapRequest.
     * @example
     * // Update one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftSwapRequestUpdateArgs>(args: SelectSubset<T, ShiftSwapRequestUpdateArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftSwapRequests.
     * @param {ShiftSwapRequestDeleteManyArgs} args - Arguments to filter ShiftSwapRequests to delete.
     * @example
     * // Delete a few ShiftSwapRequests
     * const { count } = await prisma.shiftSwapRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftSwapRequestDeleteManyArgs>(args?: SelectSubset<T, ShiftSwapRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftSwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftSwapRequests
     * const shiftSwapRequest = await prisma.shiftSwapRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftSwapRequestUpdateManyArgs>(args: SelectSubset<T, ShiftSwapRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShiftSwapRequest.
     * @param {ShiftSwapRequestUpsertArgs} args - Arguments to update or create a ShiftSwapRequest.
     * @example
     * // Update or create a ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.upsert({
     *   create: {
     *     // ... data to create a ShiftSwapRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftSwapRequest we want to update
     *   }
     * })
     */
    upsert<T extends ShiftSwapRequestUpsertArgs>(args: SelectSubset<T, ShiftSwapRequestUpsertArgs<ExtArgs>>): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftSwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestCountArgs} args - Arguments to filter ShiftSwapRequests to count.
     * @example
     * // Count the number of ShiftSwapRequests
     * const count = await prisma.shiftSwapRequest.count({
     *   where: {
     *     // ... the filter for the ShiftSwapRequests we want to count
     *   }
     * })
    **/
    count<T extends ShiftSwapRequestCountArgs>(
      args?: Subset<T, ShiftSwapRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftSwapRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftSwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftSwapRequestAggregateArgs>(args: Subset<T, ShiftSwapRequestAggregateArgs>): Prisma.PrismaPromise<GetShiftSwapRequestAggregateType<T>>

    /**
     * Group by ShiftSwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestGroupByArgs} args - Group by arguments.
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
      T extends ShiftSwapRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftSwapRequestGroupByArgs['orderBy'] }
        : { orderBy?: ShiftSwapRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftSwapRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftSwapRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftSwapRequest model
   */
  readonly fields: ShiftSwapRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftSwapRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftSwapRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends WorkScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkScheduleDefaultArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends ShiftSwapRequest$receiverArgs<ExtArgs> = {}>(args?: Subset<T, ShiftSwapRequest$receiverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShiftSwapRequest model
   */
  interface ShiftSwapRequestFieldRefs {
    readonly id: FieldRef<"ShiftSwapRequest", 'Int'>
    readonly workScheduleId: FieldRef<"ShiftSwapRequest", 'Int'>
    readonly senderId: FieldRef<"ShiftSwapRequest", 'Int'>
    readonly receiverId: FieldRef<"ShiftSwapRequest", 'Int'>
    readonly reason: FieldRef<"ShiftSwapRequest", 'String'>
    readonly status: FieldRef<"ShiftSwapRequest", 'SwapStatus'>
    readonly createdAt: FieldRef<"ShiftSwapRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShiftSwapRequest findUnique
   */
  export type ShiftSwapRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }

  /**
   * ShiftSwapRequest findUniqueOrThrow
   */
  export type ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }

  /**
   * ShiftSwapRequest findFirst
   */
  export type ShiftSwapRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftSwapRequests.
     */
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * ShiftSwapRequest findFirstOrThrow
   */
  export type ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftSwapRequests.
     */
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * ShiftSwapRequest findMany
   */
  export type ShiftSwapRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequests to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }

  /**
   * ShiftSwapRequest create
   */
  export type ShiftSwapRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftSwapRequest.
     */
    data: XOR<ShiftSwapRequestCreateInput, ShiftSwapRequestUncheckedCreateInput>
  }

  /**
   * ShiftSwapRequest createMany
   */
  export type ShiftSwapRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftSwapRequests.
     */
    data: ShiftSwapRequestCreateManyInput | ShiftSwapRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftSwapRequest update
   */
  export type ShiftSwapRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftSwapRequest.
     */
    data: XOR<ShiftSwapRequestUpdateInput, ShiftSwapRequestUncheckedUpdateInput>
    /**
     * Choose, which ShiftSwapRequest to update.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }

  /**
   * ShiftSwapRequest updateMany
   */
  export type ShiftSwapRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftSwapRequests.
     */
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyInput>
    /**
     * Filter which ShiftSwapRequests to update
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * Limit how many ShiftSwapRequests to update.
     */
    limit?: number
  }

  /**
   * ShiftSwapRequest upsert
   */
  export type ShiftSwapRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftSwapRequest to update in case it exists.
     */
    where: ShiftSwapRequestWhereUniqueInput
    /**
     * In case the ShiftSwapRequest found by the `where` argument doesn't exist, create a new ShiftSwapRequest with this data.
     */
    create: XOR<ShiftSwapRequestCreateInput, ShiftSwapRequestUncheckedCreateInput>
    /**
     * In case the ShiftSwapRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftSwapRequestUpdateInput, ShiftSwapRequestUncheckedUpdateInput>
  }

  /**
   * ShiftSwapRequest delete
   */
  export type ShiftSwapRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter which ShiftSwapRequest to delete.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }

  /**
   * ShiftSwapRequest deleteMany
   */
  export type ShiftSwapRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftSwapRequests to delete
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * Limit how many ShiftSwapRequests to delete.
     */
    limit?: number
  }

  /**
   * ShiftSwapRequest.receiver
   */
  export type ShiftSwapRequest$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ShiftSwapRequest without action
   */
  export type ShiftSwapRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftSwapRequest
     */
    omit?: ShiftSwapRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    workScheduleId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    workScheduleId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    workScheduleId: number | null
    checkIn: Date | null
    checkOut: Date | null
    status: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    workScheduleId: number | null
    checkIn: Date | null
    checkOut: Date | null
    status: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    userId: number
    workScheduleId: number
    checkIn: number
    checkOut: number
    status: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    userId?: true
    workScheduleId?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    userId?: true
    workScheduleId?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    userId?: true
    workScheduleId?: true
    checkIn?: true
    checkOut?: true
    status?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    userId?: true
    workScheduleId?: true
    checkIn?: true
    checkOut?: true
    status?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    userId?: true
    workScheduleId?: true
    checkIn?: true
    checkOut?: true
    status?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    userId: number
    workScheduleId: number
    checkIn: Date
    checkOut: Date | null
    status: string | null
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workScheduleId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | WorkScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type AttendanceSelectScalar = {
    id?: boolean
    userId?: boolean
    workScheduleId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workScheduleId" | "checkIn" | "checkOut" | "status", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | WorkScheduleDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      schedule: Prisma.$WorkSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      workScheduleId: number
      checkIn: Date
      checkOut: Date | null
      status: string | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends WorkScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkScheduleDefaultArgs<ExtArgs>>): Prisma__WorkScheduleClient<$Result.GetResult<Prisma.$WorkSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly userId: FieldRef<"Attendance", 'Int'>
    readonly workScheduleId: FieldRef<"Attendance", 'Int'>
    readonly checkIn: FieldRef<"Attendance", 'DateTime'>
    readonly checkOut: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model MonthlySalary
   */

  export type AggregateMonthlySalary = {
    _count: MonthlySalaryCountAggregateOutputType | null
    _avg: MonthlySalaryAvgAggregateOutputType | null
    _sum: MonthlySalarySumAggregateOutputType | null
    _min: MonthlySalaryMinAggregateOutputType | null
    _max: MonthlySalaryMaxAggregateOutputType | null
  }

  export type MonthlySalaryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    month: number | null
    year: number | null
    totalHours: number | null
    totalSalary: number | null
  }

  export type MonthlySalarySumAggregateOutputType = {
    id: number | null
    userId: number | null
    month: number | null
    year: number | null
    totalHours: number | null
    totalSalary: number | null
  }

  export type MonthlySalaryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    month: number | null
    year: number | null
    totalHours: number | null
    totalSalary: number | null
    isPaid: boolean | null
  }

  export type MonthlySalaryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    month: number | null
    year: number | null
    totalHours: number | null
    totalSalary: number | null
    isPaid: boolean | null
  }

  export type MonthlySalaryCountAggregateOutputType = {
    id: number
    userId: number
    month: number
    year: number
    totalHours: number
    totalSalary: number
    isPaid: number
    _all: number
  }


  export type MonthlySalaryAvgAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    totalHours?: true
    totalSalary?: true
  }

  export type MonthlySalarySumAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    totalHours?: true
    totalSalary?: true
  }

  export type MonthlySalaryMinAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    totalHours?: true
    totalSalary?: true
    isPaid?: true
  }

  export type MonthlySalaryMaxAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    totalHours?: true
    totalSalary?: true
    isPaid?: true
  }

  export type MonthlySalaryCountAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    totalHours?: true
    totalSalary?: true
    isPaid?: true
    _all?: true
  }

  export type MonthlySalaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlySalary to aggregate.
     */
    where?: MonthlySalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySalaries to fetch.
     */
    orderBy?: MonthlySalaryOrderByWithRelationInput | MonthlySalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlySalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySalaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySalaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlySalaries
    **/
    _count?: true | MonthlySalaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlySalaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlySalarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlySalaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlySalaryMaxAggregateInputType
  }

  export type GetMonthlySalaryAggregateType<T extends MonthlySalaryAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlySalary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlySalary[P]>
      : GetScalarType<T[P], AggregateMonthlySalary[P]>
  }




  export type MonthlySalaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlySalaryWhereInput
    orderBy?: MonthlySalaryOrderByWithAggregationInput | MonthlySalaryOrderByWithAggregationInput[]
    by: MonthlySalaryScalarFieldEnum[] | MonthlySalaryScalarFieldEnum
    having?: MonthlySalaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlySalaryCountAggregateInputType | true
    _avg?: MonthlySalaryAvgAggregateInputType
    _sum?: MonthlySalarySumAggregateInputType
    _min?: MonthlySalaryMinAggregateInputType
    _max?: MonthlySalaryMaxAggregateInputType
  }

  export type MonthlySalaryGroupByOutputType = {
    id: number
    userId: number
    month: number
    year: number
    totalHours: number
    totalSalary: number
    isPaid: boolean
    _count: MonthlySalaryCountAggregateOutputType | null
    _avg: MonthlySalaryAvgAggregateOutputType | null
    _sum: MonthlySalarySumAggregateOutputType | null
    _min: MonthlySalaryMinAggregateOutputType | null
    _max: MonthlySalaryMaxAggregateOutputType | null
  }

  type GetMonthlySalaryGroupByPayload<T extends MonthlySalaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlySalaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlySalaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlySalaryGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlySalaryGroupByOutputType[P]>
        }
      >
    >


  export type MonthlySalarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    totalHours?: boolean
    totalSalary?: boolean
    isPaid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthlySalary"]>



  export type MonthlySalarySelectScalar = {
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    totalHours?: boolean
    totalSalary?: boolean
    isPaid?: boolean
  }

  export type MonthlySalaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "month" | "year" | "totalHours" | "totalSalary" | "isPaid", ExtArgs["result"]["monthlySalary"]>
  export type MonthlySalaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MonthlySalaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlySalary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      month: number
      year: number
      totalHours: number
      totalSalary: number
      isPaid: boolean
    }, ExtArgs["result"]["monthlySalary"]>
    composites: {}
  }

  type MonthlySalaryGetPayload<S extends boolean | null | undefined | MonthlySalaryDefaultArgs> = $Result.GetResult<Prisma.$MonthlySalaryPayload, S>

  type MonthlySalaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlySalaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlySalaryCountAggregateInputType | true
    }

  export interface MonthlySalaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlySalary'], meta: { name: 'MonthlySalary' } }
    /**
     * Find zero or one MonthlySalary that matches the filter.
     * @param {MonthlySalaryFindUniqueArgs} args - Arguments to find a MonthlySalary
     * @example
     * // Get one MonthlySalary
     * const monthlySalary = await prisma.monthlySalary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlySalaryFindUniqueArgs>(args: SelectSubset<T, MonthlySalaryFindUniqueArgs<ExtArgs>>): Prisma__MonthlySalaryClient<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlySalary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlySalaryFindUniqueOrThrowArgs} args - Arguments to find a MonthlySalary
     * @example
     * // Get one MonthlySalary
     * const monthlySalary = await prisma.monthlySalary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlySalaryFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlySalaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlySalaryClient<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlySalary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySalaryFindFirstArgs} args - Arguments to find a MonthlySalary
     * @example
     * // Get one MonthlySalary
     * const monthlySalary = await prisma.monthlySalary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlySalaryFindFirstArgs>(args?: SelectSubset<T, MonthlySalaryFindFirstArgs<ExtArgs>>): Prisma__MonthlySalaryClient<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlySalary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySalaryFindFirstOrThrowArgs} args - Arguments to find a MonthlySalary
     * @example
     * // Get one MonthlySalary
     * const monthlySalary = await prisma.monthlySalary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlySalaryFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlySalaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlySalaryClient<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlySalaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySalaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlySalaries
     * const monthlySalaries = await prisma.monthlySalary.findMany()
     * 
     * // Get first 10 MonthlySalaries
     * const monthlySalaries = await prisma.monthlySalary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlySalaryWithIdOnly = await prisma.monthlySalary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlySalaryFindManyArgs>(args?: SelectSubset<T, MonthlySalaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlySalary.
     * @param {MonthlySalaryCreateArgs} args - Arguments to create a MonthlySalary.
     * @example
     * // Create one MonthlySalary
     * const MonthlySalary = await prisma.monthlySalary.create({
     *   data: {
     *     // ... data to create a MonthlySalary
     *   }
     * })
     * 
     */
    create<T extends MonthlySalaryCreateArgs>(args: SelectSubset<T, MonthlySalaryCreateArgs<ExtArgs>>): Prisma__MonthlySalaryClient<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlySalaries.
     * @param {MonthlySalaryCreateManyArgs} args - Arguments to create many MonthlySalaries.
     * @example
     * // Create many MonthlySalaries
     * const monthlySalary = await prisma.monthlySalary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlySalaryCreateManyArgs>(args?: SelectSubset<T, MonthlySalaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MonthlySalary.
     * @param {MonthlySalaryDeleteArgs} args - Arguments to delete one MonthlySalary.
     * @example
     * // Delete one MonthlySalary
     * const MonthlySalary = await prisma.monthlySalary.delete({
     *   where: {
     *     // ... filter to delete one MonthlySalary
     *   }
     * })
     * 
     */
    delete<T extends MonthlySalaryDeleteArgs>(args: SelectSubset<T, MonthlySalaryDeleteArgs<ExtArgs>>): Prisma__MonthlySalaryClient<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlySalary.
     * @param {MonthlySalaryUpdateArgs} args - Arguments to update one MonthlySalary.
     * @example
     * // Update one MonthlySalary
     * const monthlySalary = await prisma.monthlySalary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlySalaryUpdateArgs>(args: SelectSubset<T, MonthlySalaryUpdateArgs<ExtArgs>>): Prisma__MonthlySalaryClient<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlySalaries.
     * @param {MonthlySalaryDeleteManyArgs} args - Arguments to filter MonthlySalaries to delete.
     * @example
     * // Delete a few MonthlySalaries
     * const { count } = await prisma.monthlySalary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlySalaryDeleteManyArgs>(args?: SelectSubset<T, MonthlySalaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlySalaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySalaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlySalaries
     * const monthlySalary = await prisma.monthlySalary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlySalaryUpdateManyArgs>(args: SelectSubset<T, MonthlySalaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlySalary.
     * @param {MonthlySalaryUpsertArgs} args - Arguments to update or create a MonthlySalary.
     * @example
     * // Update or create a MonthlySalary
     * const monthlySalary = await prisma.monthlySalary.upsert({
     *   create: {
     *     // ... data to create a MonthlySalary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlySalary we want to update
     *   }
     * })
     */
    upsert<T extends MonthlySalaryUpsertArgs>(args: SelectSubset<T, MonthlySalaryUpsertArgs<ExtArgs>>): Prisma__MonthlySalaryClient<$Result.GetResult<Prisma.$MonthlySalaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlySalaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySalaryCountArgs} args - Arguments to filter MonthlySalaries to count.
     * @example
     * // Count the number of MonthlySalaries
     * const count = await prisma.monthlySalary.count({
     *   where: {
     *     // ... the filter for the MonthlySalaries we want to count
     *   }
     * })
    **/
    count<T extends MonthlySalaryCountArgs>(
      args?: Subset<T, MonthlySalaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlySalaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlySalary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySalaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlySalaryAggregateArgs>(args: Subset<T, MonthlySalaryAggregateArgs>): Prisma.PrismaPromise<GetMonthlySalaryAggregateType<T>>

    /**
     * Group by MonthlySalary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySalaryGroupByArgs} args - Group by arguments.
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
      T extends MonthlySalaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlySalaryGroupByArgs['orderBy'] }
        : { orderBy?: MonthlySalaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonthlySalaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlySalaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlySalary model
   */
  readonly fields: MonthlySalaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlySalary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlySalaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MonthlySalary model
   */
  interface MonthlySalaryFieldRefs {
    readonly id: FieldRef<"MonthlySalary", 'Int'>
    readonly userId: FieldRef<"MonthlySalary", 'Int'>
    readonly month: FieldRef<"MonthlySalary", 'Int'>
    readonly year: FieldRef<"MonthlySalary", 'Int'>
    readonly totalHours: FieldRef<"MonthlySalary", 'Float'>
    readonly totalSalary: FieldRef<"MonthlySalary", 'Int'>
    readonly isPaid: FieldRef<"MonthlySalary", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MonthlySalary findUnique
   */
  export type MonthlySalaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * Filter, which MonthlySalary to fetch.
     */
    where: MonthlySalaryWhereUniqueInput
  }

  /**
   * MonthlySalary findUniqueOrThrow
   */
  export type MonthlySalaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * Filter, which MonthlySalary to fetch.
     */
    where: MonthlySalaryWhereUniqueInput
  }

  /**
   * MonthlySalary findFirst
   */
  export type MonthlySalaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * Filter, which MonthlySalary to fetch.
     */
    where?: MonthlySalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySalaries to fetch.
     */
    orderBy?: MonthlySalaryOrderByWithRelationInput | MonthlySalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlySalaries.
     */
    cursor?: MonthlySalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySalaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySalaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlySalaries.
     */
    distinct?: MonthlySalaryScalarFieldEnum | MonthlySalaryScalarFieldEnum[]
  }

  /**
   * MonthlySalary findFirstOrThrow
   */
  export type MonthlySalaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * Filter, which MonthlySalary to fetch.
     */
    where?: MonthlySalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySalaries to fetch.
     */
    orderBy?: MonthlySalaryOrderByWithRelationInput | MonthlySalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlySalaries.
     */
    cursor?: MonthlySalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySalaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySalaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlySalaries.
     */
    distinct?: MonthlySalaryScalarFieldEnum | MonthlySalaryScalarFieldEnum[]
  }

  /**
   * MonthlySalary findMany
   */
  export type MonthlySalaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * Filter, which MonthlySalaries to fetch.
     */
    where?: MonthlySalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySalaries to fetch.
     */
    orderBy?: MonthlySalaryOrderByWithRelationInput | MonthlySalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlySalaries.
     */
    cursor?: MonthlySalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySalaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySalaries.
     */
    skip?: number
    distinct?: MonthlySalaryScalarFieldEnum | MonthlySalaryScalarFieldEnum[]
  }

  /**
   * MonthlySalary create
   */
  export type MonthlySalaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlySalary.
     */
    data: XOR<MonthlySalaryCreateInput, MonthlySalaryUncheckedCreateInput>
  }

  /**
   * MonthlySalary createMany
   */
  export type MonthlySalaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlySalaries.
     */
    data: MonthlySalaryCreateManyInput | MonthlySalaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlySalary update
   */
  export type MonthlySalaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlySalary.
     */
    data: XOR<MonthlySalaryUpdateInput, MonthlySalaryUncheckedUpdateInput>
    /**
     * Choose, which MonthlySalary to update.
     */
    where: MonthlySalaryWhereUniqueInput
  }

  /**
   * MonthlySalary updateMany
   */
  export type MonthlySalaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlySalaries.
     */
    data: XOR<MonthlySalaryUpdateManyMutationInput, MonthlySalaryUncheckedUpdateManyInput>
    /**
     * Filter which MonthlySalaries to update
     */
    where?: MonthlySalaryWhereInput
    /**
     * Limit how many MonthlySalaries to update.
     */
    limit?: number
  }

  /**
   * MonthlySalary upsert
   */
  export type MonthlySalaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlySalary to update in case it exists.
     */
    where: MonthlySalaryWhereUniqueInput
    /**
     * In case the MonthlySalary found by the `where` argument doesn't exist, create a new MonthlySalary with this data.
     */
    create: XOR<MonthlySalaryCreateInput, MonthlySalaryUncheckedCreateInput>
    /**
     * In case the MonthlySalary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlySalaryUpdateInput, MonthlySalaryUncheckedUpdateInput>
  }

  /**
   * MonthlySalary delete
   */
  export type MonthlySalaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
    /**
     * Filter which MonthlySalary to delete.
     */
    where: MonthlySalaryWhereUniqueInput
  }

  /**
   * MonthlySalary deleteMany
   */
  export type MonthlySalaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlySalaries to delete
     */
    where?: MonthlySalaryWhereInput
    /**
     * Limit how many MonthlySalaries to delete.
     */
    limit?: number
  }

  /**
   * MonthlySalary without action
   */
  export type MonthlySalaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySalary
     */
    select?: MonthlySalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySalary
     */
    omit?: MonthlySalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthlySalaryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    role: 'role',
    type: 'type',
    baseSalary: 'baseSalary',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShiftScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime',
    unitPrice: 'unitPrice'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const EmployeeAvailabilityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shiftId: 'shiftId',
    date: 'date'
  };

  export type EmployeeAvailabilityScalarFieldEnum = (typeof EmployeeAvailabilityScalarFieldEnum)[keyof typeof EmployeeAvailabilityScalarFieldEnum]


  export const WorkScheduleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shiftId: 'shiftId',
    date: 'date',
    isPublished: 'isPublished'
  };

  export type WorkScheduleScalarFieldEnum = (typeof WorkScheduleScalarFieldEnum)[keyof typeof WorkScheduleScalarFieldEnum]


  export const ShiftSwapRequestScalarFieldEnum: {
    id: 'id',
    workScheduleId: 'workScheduleId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ShiftSwapRequestScalarFieldEnum = (typeof ShiftSwapRequestScalarFieldEnum)[keyof typeof ShiftSwapRequestScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workScheduleId: 'workScheduleId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    status: 'status'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const MonthlySalaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    month: 'month',
    year: 'year',
    totalHours: 'totalHours',
    totalSalary: 'totalSalary',
    isPaid: 'isPaid'
  };

  export type MonthlySalaryScalarFieldEnum = (typeof MonthlySalaryScalarFieldEnum)[keyof typeof MonthlySalaryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    fullName: 'fullName'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ShiftOrderByRelevanceFieldEnum: {
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type ShiftOrderByRelevanceFieldEnum = (typeof ShiftOrderByRelevanceFieldEnum)[keyof typeof ShiftOrderByRelevanceFieldEnum]


  export const ShiftSwapRequestOrderByRelevanceFieldEnum: {
    reason: 'reason'
  };

  export type ShiftSwapRequestOrderByRelevanceFieldEnum = (typeof ShiftSwapRequestOrderByRelevanceFieldEnum)[keyof typeof ShiftSwapRequestOrderByRelevanceFieldEnum]


  export const AttendanceOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type AttendanceOrderByRelevanceFieldEnum = (typeof AttendanceOrderByRelevanceFieldEnum)[keyof typeof AttendanceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'EmployeeType'
   */
  export type EnumEmployeeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'SwapStatus'
   */
  export type EnumSwapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwapStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    type?: EnumEmployeeTypeFilter<"User"> | $Enums.EmployeeType
    baseSalary?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    availabilities?: EmployeeAvailabilityListRelationFilter
    workSchedules?: WorkScheduleListRelationFilter
    attendances?: AttendanceListRelationFilter
    monthlySalaries?: MonthlySalaryListRelationFilter
    sentSwaps?: ShiftSwapRequestListRelationFilter
    receivedSwaps?: ShiftSwapRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    type?: SortOrder
    baseSalary?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    availabilities?: EmployeeAvailabilityOrderByRelationAggregateInput
    workSchedules?: WorkScheduleOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    monthlySalaries?: MonthlySalaryOrderByRelationAggregateInput
    sentSwaps?: ShiftSwapRequestOrderByRelationAggregateInput
    receivedSwaps?: ShiftSwapRequestOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    type?: EnumEmployeeTypeFilter<"User"> | $Enums.EmployeeType
    baseSalary?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    availabilities?: EmployeeAvailabilityListRelationFilter
    workSchedules?: WorkScheduleListRelationFilter
    attendances?: AttendanceListRelationFilter
    monthlySalaries?: MonthlySalaryListRelationFilter
    sentSwaps?: ShiftSwapRequestListRelationFilter
    receivedSwaps?: ShiftSwapRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    type?: SortOrder
    baseSalary?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    type?: EnumEmployeeTypeWithAggregatesFilter<"User"> | $Enums.EmployeeType
    baseSalary?: IntWithAggregatesFilter<"User"> | number
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    id?: IntFilter<"Shift"> | number
    name?: StringFilter<"Shift"> | string
    startTime?: StringFilter<"Shift"> | string
    endTime?: StringFilter<"Shift"> | string
    unitPrice?: IntNullableFilter<"Shift"> | number | null
    availabilities?: EmployeeAvailabilityListRelationFilter
    workSchedules?: WorkScheduleListRelationFilter
  }

  export type ShiftOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    availabilities?: EmployeeAvailabilityOrderByRelationAggregateInput
    workSchedules?: WorkScheduleOrderByRelationAggregateInput
    _relevance?: ShiftOrderByRelevanceInput
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    name?: StringFilter<"Shift"> | string
    startTime?: StringFilter<"Shift"> | string
    endTime?: StringFilter<"Shift"> | string
    unitPrice?: IntNullableFilter<"Shift"> | number | null
    availabilities?: EmployeeAvailabilityListRelationFilter
    workSchedules?: WorkScheduleListRelationFilter
  }, "id">

  export type ShiftOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
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
    id?: IntWithAggregatesFilter<"Shift"> | number
    name?: StringWithAggregatesFilter<"Shift"> | string
    startTime?: StringWithAggregatesFilter<"Shift"> | string
    endTime?: StringWithAggregatesFilter<"Shift"> | string
    unitPrice?: IntNullableWithAggregatesFilter<"Shift"> | number | null
  }

  export type EmployeeAvailabilityWhereInput = {
    AND?: EmployeeAvailabilityWhereInput | EmployeeAvailabilityWhereInput[]
    OR?: EmployeeAvailabilityWhereInput[]
    NOT?: EmployeeAvailabilityWhereInput | EmployeeAvailabilityWhereInput[]
    id?: IntFilter<"EmployeeAvailability"> | number
    userId?: IntFilter<"EmployeeAvailability"> | number
    shiftId?: IntFilter<"EmployeeAvailability"> | number
    date?: DateTimeFilter<"EmployeeAvailability"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
  }

  export type EmployeeAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
    user?: UserOrderByWithRelationInput
    shift?: ShiftOrderByWithRelationInput
  }

  export type EmployeeAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_shiftId_date?: EmployeeAvailabilityUserIdShiftIdDateCompoundUniqueInput
    AND?: EmployeeAvailabilityWhereInput | EmployeeAvailabilityWhereInput[]
    OR?: EmployeeAvailabilityWhereInput[]
    NOT?: EmployeeAvailabilityWhereInput | EmployeeAvailabilityWhereInput[]
    userId?: IntFilter<"EmployeeAvailability"> | number
    shiftId?: IntFilter<"EmployeeAvailability"> | number
    date?: DateTimeFilter<"EmployeeAvailability"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
  }, "id" | "userId_shiftId_date">

  export type EmployeeAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
    _count?: EmployeeAvailabilityCountOrderByAggregateInput
    _avg?: EmployeeAvailabilityAvgOrderByAggregateInput
    _max?: EmployeeAvailabilityMaxOrderByAggregateInput
    _min?: EmployeeAvailabilityMinOrderByAggregateInput
    _sum?: EmployeeAvailabilitySumOrderByAggregateInput
  }

  export type EmployeeAvailabilityScalarWhereWithAggregatesInput = {
    AND?: EmployeeAvailabilityScalarWhereWithAggregatesInput | EmployeeAvailabilityScalarWhereWithAggregatesInput[]
    OR?: EmployeeAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: EmployeeAvailabilityScalarWhereWithAggregatesInput | EmployeeAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmployeeAvailability"> | number
    userId?: IntWithAggregatesFilter<"EmployeeAvailability"> | number
    shiftId?: IntWithAggregatesFilter<"EmployeeAvailability"> | number
    date?: DateTimeWithAggregatesFilter<"EmployeeAvailability"> | Date | string
  }

  export type WorkScheduleWhereInput = {
    AND?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    OR?: WorkScheduleWhereInput[]
    NOT?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    id?: IntFilter<"WorkSchedule"> | number
    userId?: IntFilter<"WorkSchedule"> | number
    shiftId?: IntFilter<"WorkSchedule"> | number
    date?: DateTimeFilter<"WorkSchedule"> | Date | string
    isPublished?: BoolFilter<"WorkSchedule"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
    attendance?: XOR<AttendanceNullableScalarRelationFilter, AttendanceWhereInput> | null
    swapRequests?: ShiftSwapRequestListRelationFilter
  }

  export type WorkScheduleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
    user?: UserOrderByWithRelationInput
    shift?: ShiftOrderByWithRelationInput
    attendance?: AttendanceOrderByWithRelationInput
    swapRequests?: ShiftSwapRequestOrderByRelationAggregateInput
  }

  export type WorkScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    OR?: WorkScheduleWhereInput[]
    NOT?: WorkScheduleWhereInput | WorkScheduleWhereInput[]
    userId?: IntFilter<"WorkSchedule"> | number
    shiftId?: IntFilter<"WorkSchedule"> | number
    date?: DateTimeFilter<"WorkSchedule"> | Date | string
    isPublished?: BoolFilter<"WorkSchedule"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
    attendance?: XOR<AttendanceNullableScalarRelationFilter, AttendanceWhereInput> | null
    swapRequests?: ShiftSwapRequestListRelationFilter
  }, "id">

  export type WorkScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
    _count?: WorkScheduleCountOrderByAggregateInput
    _avg?: WorkScheduleAvgOrderByAggregateInput
    _max?: WorkScheduleMaxOrderByAggregateInput
    _min?: WorkScheduleMinOrderByAggregateInput
    _sum?: WorkScheduleSumOrderByAggregateInput
  }

  export type WorkScheduleScalarWhereWithAggregatesInput = {
    AND?: WorkScheduleScalarWhereWithAggregatesInput | WorkScheduleScalarWhereWithAggregatesInput[]
    OR?: WorkScheduleScalarWhereWithAggregatesInput[]
    NOT?: WorkScheduleScalarWhereWithAggregatesInput | WorkScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkSchedule"> | number
    userId?: IntWithAggregatesFilter<"WorkSchedule"> | number
    shiftId?: IntWithAggregatesFilter<"WorkSchedule"> | number
    date?: DateTimeWithAggregatesFilter<"WorkSchedule"> | Date | string
    isPublished?: BoolWithAggregatesFilter<"WorkSchedule"> | boolean
  }

  export type ShiftSwapRequestWhereInput = {
    AND?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    OR?: ShiftSwapRequestWhereInput[]
    NOT?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    id?: IntFilter<"ShiftSwapRequest"> | number
    workScheduleId?: IntFilter<"ShiftSwapRequest"> | number
    senderId?: IntFilter<"ShiftSwapRequest"> | number
    receiverId?: IntNullableFilter<"ShiftSwapRequest"> | number | null
    reason?: StringNullableFilter<"ShiftSwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"ShiftSwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
    schedule?: XOR<WorkScheduleScalarRelationFilter, WorkScheduleWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ShiftSwapRequestOrderByWithRelationInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    schedule?: WorkScheduleOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    _relevance?: ShiftSwapRequestOrderByRelevanceInput
  }

  export type ShiftSwapRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    OR?: ShiftSwapRequestWhereInput[]
    NOT?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    workScheduleId?: IntFilter<"ShiftSwapRequest"> | number
    senderId?: IntFilter<"ShiftSwapRequest"> | number
    receiverId?: IntNullableFilter<"ShiftSwapRequest"> | number | null
    reason?: StringNullableFilter<"ShiftSwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"ShiftSwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
    schedule?: XOR<WorkScheduleScalarRelationFilter, WorkScheduleWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ShiftSwapRequestOrderByWithAggregationInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ShiftSwapRequestCountOrderByAggregateInput
    _avg?: ShiftSwapRequestAvgOrderByAggregateInput
    _max?: ShiftSwapRequestMaxOrderByAggregateInput
    _min?: ShiftSwapRequestMinOrderByAggregateInput
    _sum?: ShiftSwapRequestSumOrderByAggregateInput
  }

  export type ShiftSwapRequestScalarWhereWithAggregatesInput = {
    AND?: ShiftSwapRequestScalarWhereWithAggregatesInput | ShiftSwapRequestScalarWhereWithAggregatesInput[]
    OR?: ShiftSwapRequestScalarWhereWithAggregatesInput[]
    NOT?: ShiftSwapRequestScalarWhereWithAggregatesInput | ShiftSwapRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShiftSwapRequest"> | number
    workScheduleId?: IntWithAggregatesFilter<"ShiftSwapRequest"> | number
    senderId?: IntWithAggregatesFilter<"ShiftSwapRequest"> | number
    receiverId?: IntNullableWithAggregatesFilter<"ShiftSwapRequest"> | number | null
    reason?: StringNullableWithAggregatesFilter<"ShiftSwapRequest"> | string | null
    status?: EnumSwapStatusWithAggregatesFilter<"ShiftSwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeWithAggregatesFilter<"ShiftSwapRequest"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    userId?: IntFilter<"Attendance"> | number
    workScheduleId?: IntFilter<"Attendance"> | number
    checkIn?: DateTimeFilter<"Attendance"> | Date | string
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringNullableFilter<"Attendance"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<WorkScheduleScalarRelationFilter, WorkScheduleWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workScheduleId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    schedule?: WorkScheduleOrderByWithRelationInput
    _relevance?: AttendanceOrderByRelevanceInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    workScheduleId?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    userId?: IntFilter<"Attendance"> | number
    checkIn?: DateTimeFilter<"Attendance"> | Date | string
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringNullableFilter<"Attendance"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<WorkScheduleScalarRelationFilter, WorkScheduleWhereInput>
  }, "id" | "workScheduleId">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workScheduleId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    userId?: IntWithAggregatesFilter<"Attendance"> | number
    workScheduleId?: IntWithAggregatesFilter<"Attendance"> | number
    checkIn?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    checkOut?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
  }

  export type MonthlySalaryWhereInput = {
    AND?: MonthlySalaryWhereInput | MonthlySalaryWhereInput[]
    OR?: MonthlySalaryWhereInput[]
    NOT?: MonthlySalaryWhereInput | MonthlySalaryWhereInput[]
    id?: IntFilter<"MonthlySalary"> | number
    userId?: IntFilter<"MonthlySalary"> | number
    month?: IntFilter<"MonthlySalary"> | number
    year?: IntFilter<"MonthlySalary"> | number
    totalHours?: FloatFilter<"MonthlySalary"> | number
    totalSalary?: IntFilter<"MonthlySalary"> | number
    isPaid?: BoolFilter<"MonthlySalary"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MonthlySalaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    totalSalary?: SortOrder
    isPaid?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MonthlySalaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_month_year?: MonthlySalaryUserIdMonthYearCompoundUniqueInput
    AND?: MonthlySalaryWhereInput | MonthlySalaryWhereInput[]
    OR?: MonthlySalaryWhereInput[]
    NOT?: MonthlySalaryWhereInput | MonthlySalaryWhereInput[]
    userId?: IntFilter<"MonthlySalary"> | number
    month?: IntFilter<"MonthlySalary"> | number
    year?: IntFilter<"MonthlySalary"> | number
    totalHours?: FloatFilter<"MonthlySalary"> | number
    totalSalary?: IntFilter<"MonthlySalary"> | number
    isPaid?: BoolFilter<"MonthlySalary"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_month_year">

  export type MonthlySalaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    totalSalary?: SortOrder
    isPaid?: SortOrder
    _count?: MonthlySalaryCountOrderByAggregateInput
    _avg?: MonthlySalaryAvgOrderByAggregateInput
    _max?: MonthlySalaryMaxOrderByAggregateInput
    _min?: MonthlySalaryMinOrderByAggregateInput
    _sum?: MonthlySalarySumOrderByAggregateInput
  }

  export type MonthlySalaryScalarWhereWithAggregatesInput = {
    AND?: MonthlySalaryScalarWhereWithAggregatesInput | MonthlySalaryScalarWhereWithAggregatesInput[]
    OR?: MonthlySalaryScalarWhereWithAggregatesInput[]
    NOT?: MonthlySalaryScalarWhereWithAggregatesInput | MonthlySalaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonthlySalary"> | number
    userId?: IntWithAggregatesFilter<"MonthlySalary"> | number
    month?: IntWithAggregatesFilter<"MonthlySalary"> | number
    year?: IntWithAggregatesFilter<"MonthlySalary"> | number
    totalHours?: FloatWithAggregatesFilter<"MonthlySalary"> | number
    totalSalary?: IntWithAggregatesFilter<"MonthlySalary"> | number
    isPaid?: BoolWithAggregatesFilter<"MonthlySalary"> | boolean
  }

  export type UserCreateInput = {
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityUncheckedCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryUncheckedCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUncheckedUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateInput = {
    name: string
    startTime: string
    endTime: string
    unitPrice?: number | null
    availabilities?: EmployeeAvailabilityCreateNestedManyWithoutShiftInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateInput = {
    id?: number
    name: string
    startTime: string
    endTime: string
    unitPrice?: number | null
    availabilities?: EmployeeAvailabilityUncheckedCreateNestedManyWithoutShiftInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    availabilities?: EmployeeAvailabilityUpdateManyWithoutShiftNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    availabilities?: EmployeeAvailabilityUncheckedUpdateManyWithoutShiftNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftCreateManyInput = {
    id?: number
    name: string
    startTime: string
    endTime: string
    unitPrice?: number | null
  }

  export type ShiftUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ShiftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmployeeAvailabilityCreateInput = {
    date: Date | string
    user: UserCreateNestedOneWithoutAvailabilitiesInput
    shift: ShiftCreateNestedOneWithoutAvailabilitiesInput
  }

  export type EmployeeAvailabilityUncheckedCreateInput = {
    id?: number
    userId: number
    shiftId: number
    date: Date | string
  }

  export type EmployeeAvailabilityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAvailabilitiesNestedInput
    shift?: ShiftUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type EmployeeAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAvailabilityCreateManyInput = {
    id?: number
    userId: number
    shiftId: number
    date: Date | string
  }

  export type EmployeeAvailabilityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleCreateInput = {
    date: Date | string
    isPublished?: boolean
    user: UserCreateNestedOneWithoutWorkSchedulesInput
    shift: ShiftCreateNestedOneWithoutWorkSchedulesInput
    attendance?: AttendanceCreateNestedOneWithoutScheduleInput
    swapRequests?: ShiftSwapRequestCreateNestedManyWithoutScheduleInput
  }

  export type WorkScheduleUncheckedCreateInput = {
    id?: number
    userId: number
    shiftId: number
    date: Date | string
    isPublished?: boolean
    attendance?: AttendanceUncheckedCreateNestedOneWithoutScheduleInput
    swapRequests?: ShiftSwapRequestUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type WorkScheduleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutWorkSchedulesNestedInput
    shift?: ShiftUpdateOneRequiredWithoutWorkSchedulesNestedInput
    attendance?: AttendanceUpdateOneWithoutScheduleNestedInput
    swapRequests?: ShiftSwapRequestUpdateManyWithoutScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    attendance?: AttendanceUncheckedUpdateOneWithoutScheduleNestedInput
    swapRequests?: ShiftSwapRequestUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type WorkScheduleCreateManyInput = {
    id?: number
    userId: number
    shiftId: number
    date: Date | string
    isPublished?: boolean
  }

  export type WorkScheduleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WorkScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftSwapRequestCreateInput = {
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    schedule: WorkScheduleCreateNestedOneWithoutSwapRequestsInput
    sender: UserCreateNestedOneWithoutSentSwapsInput
    receiver?: UserCreateNestedOneWithoutReceivedSwapsInput
  }

  export type ShiftSwapRequestUncheckedCreateInput = {
    id?: number
    workScheduleId: number
    senderId: number
    receiverId?: number | null
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
  }

  export type ShiftSwapRequestUpdateInput = {
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: WorkScheduleUpdateOneRequiredWithoutSwapRequestsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentSwapsNestedInput
    receiver?: UserUpdateOneWithoutReceivedSwapsNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestCreateManyInput = {
    id?: number
    workScheduleId: number
    senderId: number
    receiverId?: number | null
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
  }

  export type ShiftSwapRequestUpdateManyMutationInput = {
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    checkIn?: Date | string
    checkOut?: Date | string | null
    status?: string | null
    user: UserCreateNestedOneWithoutAttendancesInput
    schedule: WorkScheduleCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    userId: number
    workScheduleId: number
    checkIn?: Date | string
    checkOut?: Date | string | null
    status?: string | null
  }

  export type AttendanceUpdateInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    schedule?: WorkScheduleUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManyInput = {
    id?: number
    userId: number
    workScheduleId: number
    checkIn?: Date | string
    checkOut?: Date | string | null
    status?: string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlySalaryCreateInput = {
    month: number
    year: number
    totalHours?: number
    totalSalary?: number
    isPaid?: boolean
    user: UserCreateNestedOneWithoutMonthlySalariesInput
  }

  export type MonthlySalaryUncheckedCreateInput = {
    id?: number
    userId: number
    month: number
    year: number
    totalHours?: number
    totalSalary?: number
    isPaid?: boolean
  }

  export type MonthlySalaryUpdateInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalSalary?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMonthlySalariesNestedInput
  }

  export type MonthlySalaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalSalary?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MonthlySalaryCreateManyInput = {
    id?: number
    userId: number
    month: number
    year: number
    totalHours?: number
    totalSalary?: number
    isPaid?: boolean
  }

  export type MonthlySalaryUpdateManyMutationInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalSalary?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MonthlySalaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalSalary?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumEmployeeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[]
    notIn?: $Enums.EmployeeType[]
    not?: NestedEnumEmployeeTypeFilter<$PrismaModel> | $Enums.EmployeeType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeeAvailabilityListRelationFilter = {
    every?: EmployeeAvailabilityWhereInput
    some?: EmployeeAvailabilityWhereInput
    none?: EmployeeAvailabilityWhereInput
  }

  export type WorkScheduleListRelationFilter = {
    every?: WorkScheduleWhereInput
    some?: WorkScheduleWhereInput
    none?: WorkScheduleWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type MonthlySalaryListRelationFilter = {
    every?: MonthlySalaryWhereInput
    some?: MonthlySalaryWhereInput
    none?: MonthlySalaryWhereInput
  }

  export type ShiftSwapRequestListRelationFilter = {
    every?: ShiftSwapRequestWhereInput
    some?: ShiftSwapRequestWhereInput
    none?: ShiftSwapRequestWhereInput
  }

  export type EmployeeAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlySalaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftSwapRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    type?: SortOrder
    baseSalary?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    baseSalary?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    type?: SortOrder
    baseSalary?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    role?: SortOrder
    type?: SortOrder
    baseSalary?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    baseSalary?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumEmployeeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[]
    notIn?: $Enums.EmployeeType[]
    not?: NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeTypeFilter<$PrismaModel>
    _max?: NestedEnumEmployeeTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShiftOrderByRelevanceInput = {
    fields: ShiftOrderByRelevanceFieldEnum | ShiftOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShiftCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    unitPrice?: SortOrder
  }

  export type ShiftAvgOrderByAggregateInput = {
    id?: SortOrder
    unitPrice?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    unitPrice?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    unitPrice?: SortOrder
  }

  export type ShiftSumOrderByAggregateInput = {
    id?: SortOrder
    unitPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShiftScalarRelationFilter = {
    is?: ShiftWhereInput
    isNot?: ShiftWhereInput
  }

  export type EmployeeAvailabilityUserIdShiftIdDateCompoundUniqueInput = {
    userId: number
    shiftId: number
    date: Date | string
  }

  export type EmployeeAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
  }

  export type EmployeeAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
  }

  export type EmployeeAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
  }

  export type EmployeeAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
  }

  export type EmployeeAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
  }

  export type AttendanceNullableScalarRelationFilter = {
    is?: AttendanceWhereInput | null
    isNot?: AttendanceWhereInput | null
  }

  export type WorkScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
  }

  export type WorkScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
  }

  export type WorkScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
  }

  export type WorkScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    date?: SortOrder
    isPublished?: SortOrder
  }

  export type WorkScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[]
    notIn?: $Enums.SwapStatus[]
    not?: NestedEnumSwapStatusFilter<$PrismaModel> | $Enums.SwapStatus
  }

  export type WorkScheduleScalarRelationFilter = {
    is?: WorkScheduleWhereInput
    isNot?: WorkScheduleWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShiftSwapRequestOrderByRelevanceInput = {
    fields: ShiftSwapRequestOrderByRelevanceFieldEnum | ShiftSwapRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShiftSwapRequestCountOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftSwapRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type ShiftSwapRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftSwapRequestMinOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftSwapRequestSumOrderByAggregateInput = {
    id?: SortOrder
    workScheduleId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[]
    notIn?: $Enums.SwapStatus[]
    not?: NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.SwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumSwapStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AttendanceOrderByRelevanceInput = {
    fields: AttendanceOrderByRelevanceFieldEnum | AttendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workScheduleId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workScheduleId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workScheduleId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workScheduleId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workScheduleId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MonthlySalaryUserIdMonthYearCompoundUniqueInput = {
    userId: number
    month: number
    year: number
  }

  export type MonthlySalaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    totalSalary?: SortOrder
    isPaid?: SortOrder
  }

  export type MonthlySalaryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    totalSalary?: SortOrder
  }

  export type MonthlySalaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    totalSalary?: SortOrder
    isPaid?: SortOrder
  }

  export type MonthlySalaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    totalSalary?: SortOrder
    isPaid?: SortOrder
  }

  export type MonthlySalarySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    totalHours?: SortOrder
    totalSalary?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EmployeeAvailabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeAvailabilityCreateWithoutUserInput, EmployeeAvailabilityUncheckedCreateWithoutUserInput> | EmployeeAvailabilityCreateWithoutUserInput[] | EmployeeAvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeAvailabilityCreateOrConnectWithoutUserInput | EmployeeAvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: EmployeeAvailabilityCreateManyUserInputEnvelope
    connect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
  }

  export type WorkScheduleCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkScheduleCreateWithoutUserInput, WorkScheduleUncheckedCreateWithoutUserInput> | WorkScheduleCreateWithoutUserInput[] | WorkScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutUserInput | WorkScheduleCreateOrConnectWithoutUserInput[]
    createMany?: WorkScheduleCreateManyUserInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type MonthlySalaryCreateNestedManyWithoutUserInput = {
    create?: XOR<MonthlySalaryCreateWithoutUserInput, MonthlySalaryUncheckedCreateWithoutUserInput> | MonthlySalaryCreateWithoutUserInput[] | MonthlySalaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthlySalaryCreateOrConnectWithoutUserInput | MonthlySalaryCreateOrConnectWithoutUserInput[]
    createMany?: MonthlySalaryCreateManyUserInputEnvelope
    connect?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
  }

  export type ShiftSwapRequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutSenderInput, ShiftSwapRequestUncheckedCreateWithoutSenderInput> | ShiftSwapRequestCreateWithoutSenderInput[] | ShiftSwapRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutSenderInput | ShiftSwapRequestCreateOrConnectWithoutSenderInput[]
    createMany?: ShiftSwapRequestCreateManySenderInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutReceiverInput, ShiftSwapRequestUncheckedCreateWithoutReceiverInput> | ShiftSwapRequestCreateWithoutReceiverInput[] | ShiftSwapRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutReceiverInput | ShiftSwapRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: ShiftSwapRequestCreateManyReceiverInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type EmployeeAvailabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmployeeAvailabilityCreateWithoutUserInput, EmployeeAvailabilityUncheckedCreateWithoutUserInput> | EmployeeAvailabilityCreateWithoutUserInput[] | EmployeeAvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeAvailabilityCreateOrConnectWithoutUserInput | EmployeeAvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: EmployeeAvailabilityCreateManyUserInputEnvelope
    connect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
  }

  export type WorkScheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkScheduleCreateWithoutUserInput, WorkScheduleUncheckedCreateWithoutUserInput> | WorkScheduleCreateWithoutUserInput[] | WorkScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutUserInput | WorkScheduleCreateOrConnectWithoutUserInput[]
    createMany?: WorkScheduleCreateManyUserInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type MonthlySalaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MonthlySalaryCreateWithoutUserInput, MonthlySalaryUncheckedCreateWithoutUserInput> | MonthlySalaryCreateWithoutUserInput[] | MonthlySalaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthlySalaryCreateOrConnectWithoutUserInput | MonthlySalaryCreateOrConnectWithoutUserInput[]
    createMany?: MonthlySalaryCreateManyUserInputEnvelope
    connect?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutSenderInput, ShiftSwapRequestUncheckedCreateWithoutSenderInput> | ShiftSwapRequestCreateWithoutSenderInput[] | ShiftSwapRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutSenderInput | ShiftSwapRequestCreateOrConnectWithoutSenderInput[]
    createMany?: ShiftSwapRequestCreateManySenderInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutReceiverInput, ShiftSwapRequestUncheckedCreateWithoutReceiverInput> | ShiftSwapRequestCreateWithoutReceiverInput[] | ShiftSwapRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutReceiverInput | ShiftSwapRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: ShiftSwapRequestCreateManyReceiverInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumEmployeeTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeAvailabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeAvailabilityCreateWithoutUserInput, EmployeeAvailabilityUncheckedCreateWithoutUserInput> | EmployeeAvailabilityCreateWithoutUserInput[] | EmployeeAvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeAvailabilityCreateOrConnectWithoutUserInput | EmployeeAvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeAvailabilityUpsertWithWhereUniqueWithoutUserInput | EmployeeAvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeeAvailabilityCreateManyUserInputEnvelope
    set?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    disconnect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    delete?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    connect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    update?: EmployeeAvailabilityUpdateWithWhereUniqueWithoutUserInput | EmployeeAvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeAvailabilityUpdateManyWithWhereWithoutUserInput | EmployeeAvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeAvailabilityScalarWhereInput | EmployeeAvailabilityScalarWhereInput[]
  }

  export type WorkScheduleUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutUserInput, WorkScheduleUncheckedCreateWithoutUserInput> | WorkScheduleCreateWithoutUserInput[] | WorkScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutUserInput | WorkScheduleCreateOrConnectWithoutUserInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutUserInput | WorkScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkScheduleCreateManyUserInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutUserInput | WorkScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutUserInput | WorkScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type MonthlySalaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonthlySalaryCreateWithoutUserInput, MonthlySalaryUncheckedCreateWithoutUserInput> | MonthlySalaryCreateWithoutUserInput[] | MonthlySalaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthlySalaryCreateOrConnectWithoutUserInput | MonthlySalaryCreateOrConnectWithoutUserInput[]
    upsert?: MonthlySalaryUpsertWithWhereUniqueWithoutUserInput | MonthlySalaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonthlySalaryCreateManyUserInputEnvelope
    set?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
    disconnect?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
    delete?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
    connect?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
    update?: MonthlySalaryUpdateWithWhereUniqueWithoutUserInput | MonthlySalaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonthlySalaryUpdateManyWithWhereWithoutUserInput | MonthlySalaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonthlySalaryScalarWhereInput | MonthlySalaryScalarWhereInput[]
  }

  export type ShiftSwapRequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutSenderInput, ShiftSwapRequestUncheckedCreateWithoutSenderInput> | ShiftSwapRequestCreateWithoutSenderInput[] | ShiftSwapRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutSenderInput | ShiftSwapRequestCreateOrConnectWithoutSenderInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutSenderInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ShiftSwapRequestCreateManySenderInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutSenderInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutSenderInput | ShiftSwapRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutReceiverInput, ShiftSwapRequestUncheckedCreateWithoutReceiverInput> | ShiftSwapRequestCreateWithoutReceiverInput[] | ShiftSwapRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutReceiverInput | ShiftSwapRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutReceiverInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ShiftSwapRequestCreateManyReceiverInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutReceiverInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutReceiverInput | ShiftSwapRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type EmployeeAvailabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmployeeAvailabilityCreateWithoutUserInput, EmployeeAvailabilityUncheckedCreateWithoutUserInput> | EmployeeAvailabilityCreateWithoutUserInput[] | EmployeeAvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmployeeAvailabilityCreateOrConnectWithoutUserInput | EmployeeAvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: EmployeeAvailabilityUpsertWithWhereUniqueWithoutUserInput | EmployeeAvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmployeeAvailabilityCreateManyUserInputEnvelope
    set?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    disconnect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    delete?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    connect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    update?: EmployeeAvailabilityUpdateWithWhereUniqueWithoutUserInput | EmployeeAvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmployeeAvailabilityUpdateManyWithWhereWithoutUserInput | EmployeeAvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmployeeAvailabilityScalarWhereInput | EmployeeAvailabilityScalarWhereInput[]
  }

  export type WorkScheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutUserInput, WorkScheduleUncheckedCreateWithoutUserInput> | WorkScheduleCreateWithoutUserInput[] | WorkScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutUserInput | WorkScheduleCreateOrConnectWithoutUserInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutUserInput | WorkScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkScheduleCreateManyUserInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutUserInput | WorkScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutUserInput | WorkScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type MonthlySalaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonthlySalaryCreateWithoutUserInput, MonthlySalaryUncheckedCreateWithoutUserInput> | MonthlySalaryCreateWithoutUserInput[] | MonthlySalaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonthlySalaryCreateOrConnectWithoutUserInput | MonthlySalaryCreateOrConnectWithoutUserInput[]
    upsert?: MonthlySalaryUpsertWithWhereUniqueWithoutUserInput | MonthlySalaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonthlySalaryCreateManyUserInputEnvelope
    set?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
    disconnect?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
    delete?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
    connect?: MonthlySalaryWhereUniqueInput | MonthlySalaryWhereUniqueInput[]
    update?: MonthlySalaryUpdateWithWhereUniqueWithoutUserInput | MonthlySalaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonthlySalaryUpdateManyWithWhereWithoutUserInput | MonthlySalaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonthlySalaryScalarWhereInput | MonthlySalaryScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutSenderInput, ShiftSwapRequestUncheckedCreateWithoutSenderInput> | ShiftSwapRequestCreateWithoutSenderInput[] | ShiftSwapRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutSenderInput | ShiftSwapRequestCreateOrConnectWithoutSenderInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutSenderInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ShiftSwapRequestCreateManySenderInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutSenderInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutSenderInput | ShiftSwapRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutReceiverInput, ShiftSwapRequestUncheckedCreateWithoutReceiverInput> | ShiftSwapRequestCreateWithoutReceiverInput[] | ShiftSwapRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutReceiverInput | ShiftSwapRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutReceiverInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ShiftSwapRequestCreateManyReceiverInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutReceiverInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutReceiverInput | ShiftSwapRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type EmployeeAvailabilityCreateNestedManyWithoutShiftInput = {
    create?: XOR<EmployeeAvailabilityCreateWithoutShiftInput, EmployeeAvailabilityUncheckedCreateWithoutShiftInput> | EmployeeAvailabilityCreateWithoutShiftInput[] | EmployeeAvailabilityUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: EmployeeAvailabilityCreateOrConnectWithoutShiftInput | EmployeeAvailabilityCreateOrConnectWithoutShiftInput[]
    createMany?: EmployeeAvailabilityCreateManyShiftInputEnvelope
    connect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
  }

  export type WorkScheduleCreateNestedManyWithoutShiftInput = {
    create?: XOR<WorkScheduleCreateWithoutShiftInput, WorkScheduleUncheckedCreateWithoutShiftInput> | WorkScheduleCreateWithoutShiftInput[] | WorkScheduleUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutShiftInput | WorkScheduleCreateOrConnectWithoutShiftInput[]
    createMany?: WorkScheduleCreateManyShiftInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type EmployeeAvailabilityUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<EmployeeAvailabilityCreateWithoutShiftInput, EmployeeAvailabilityUncheckedCreateWithoutShiftInput> | EmployeeAvailabilityCreateWithoutShiftInput[] | EmployeeAvailabilityUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: EmployeeAvailabilityCreateOrConnectWithoutShiftInput | EmployeeAvailabilityCreateOrConnectWithoutShiftInput[]
    createMany?: EmployeeAvailabilityCreateManyShiftInputEnvelope
    connect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
  }

  export type WorkScheduleUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<WorkScheduleCreateWithoutShiftInput, WorkScheduleUncheckedCreateWithoutShiftInput> | WorkScheduleCreateWithoutShiftInput[] | WorkScheduleUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutShiftInput | WorkScheduleCreateOrConnectWithoutShiftInput[]
    createMany?: WorkScheduleCreateManyShiftInputEnvelope
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeAvailabilityUpdateManyWithoutShiftNestedInput = {
    create?: XOR<EmployeeAvailabilityCreateWithoutShiftInput, EmployeeAvailabilityUncheckedCreateWithoutShiftInput> | EmployeeAvailabilityCreateWithoutShiftInput[] | EmployeeAvailabilityUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: EmployeeAvailabilityCreateOrConnectWithoutShiftInput | EmployeeAvailabilityCreateOrConnectWithoutShiftInput[]
    upsert?: EmployeeAvailabilityUpsertWithWhereUniqueWithoutShiftInput | EmployeeAvailabilityUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: EmployeeAvailabilityCreateManyShiftInputEnvelope
    set?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    disconnect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    delete?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    connect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    update?: EmployeeAvailabilityUpdateWithWhereUniqueWithoutShiftInput | EmployeeAvailabilityUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: EmployeeAvailabilityUpdateManyWithWhereWithoutShiftInput | EmployeeAvailabilityUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: EmployeeAvailabilityScalarWhereInput | EmployeeAvailabilityScalarWhereInput[]
  }

  export type WorkScheduleUpdateManyWithoutShiftNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutShiftInput, WorkScheduleUncheckedCreateWithoutShiftInput> | WorkScheduleCreateWithoutShiftInput[] | WorkScheduleUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutShiftInput | WorkScheduleCreateOrConnectWithoutShiftInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutShiftInput | WorkScheduleUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: WorkScheduleCreateManyShiftInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutShiftInput | WorkScheduleUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutShiftInput | WorkScheduleUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type EmployeeAvailabilityUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<EmployeeAvailabilityCreateWithoutShiftInput, EmployeeAvailabilityUncheckedCreateWithoutShiftInput> | EmployeeAvailabilityCreateWithoutShiftInput[] | EmployeeAvailabilityUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: EmployeeAvailabilityCreateOrConnectWithoutShiftInput | EmployeeAvailabilityCreateOrConnectWithoutShiftInput[]
    upsert?: EmployeeAvailabilityUpsertWithWhereUniqueWithoutShiftInput | EmployeeAvailabilityUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: EmployeeAvailabilityCreateManyShiftInputEnvelope
    set?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    disconnect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    delete?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    connect?: EmployeeAvailabilityWhereUniqueInput | EmployeeAvailabilityWhereUniqueInput[]
    update?: EmployeeAvailabilityUpdateWithWhereUniqueWithoutShiftInput | EmployeeAvailabilityUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: EmployeeAvailabilityUpdateManyWithWhereWithoutShiftInput | EmployeeAvailabilityUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: EmployeeAvailabilityScalarWhereInput | EmployeeAvailabilityScalarWhereInput[]
  }

  export type WorkScheduleUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutShiftInput, WorkScheduleUncheckedCreateWithoutShiftInput> | WorkScheduleCreateWithoutShiftInput[] | WorkScheduleUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutShiftInput | WorkScheduleCreateOrConnectWithoutShiftInput[]
    upsert?: WorkScheduleUpsertWithWhereUniqueWithoutShiftInput | WorkScheduleUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: WorkScheduleCreateManyShiftInputEnvelope
    set?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    disconnect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    delete?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    connect?: WorkScheduleWhereUniqueInput | WorkScheduleWhereUniqueInput[]
    update?: WorkScheduleUpdateWithWhereUniqueWithoutShiftInput | WorkScheduleUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: WorkScheduleUpdateManyWithWhereWithoutShiftInput | WorkScheduleUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<UserCreateWithoutAvailabilitiesInput, UserUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilitiesInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<ShiftCreateWithoutAvailabilitiesInput, ShiftUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAvailabilitiesInput
    connect?: ShiftWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilitiesInput, UserUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilitiesInput
    upsert?: UserUpsertWithoutAvailabilitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilitiesInput, UserUpdateWithoutAvailabilitiesInput>, UserUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ShiftUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<ShiftCreateWithoutAvailabilitiesInput, ShiftUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAvailabilitiesInput
    upsert?: ShiftUpsertWithoutAvailabilitiesInput
    connect?: ShiftWhereUniqueInput
    update?: XOR<XOR<ShiftUpdateToOneWithWhereWithoutAvailabilitiesInput, ShiftUpdateWithoutAvailabilitiesInput>, ShiftUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type UserCreateNestedOneWithoutWorkSchedulesInput = {
    create?: XOR<UserCreateWithoutWorkSchedulesInput, UserUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftCreateNestedOneWithoutWorkSchedulesInput = {
    create?: XOR<ShiftCreateWithoutWorkSchedulesInput, ShiftUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutWorkSchedulesInput
    connect?: ShiftWhereUniqueInput
  }

  export type AttendanceCreateNestedOneWithoutScheduleInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput
    connect?: AttendanceWhereUniqueInput
  }

  export type ShiftSwapRequestCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutScheduleInput, ShiftSwapRequestUncheckedCreateWithoutScheduleInput> | ShiftSwapRequestCreateWithoutScheduleInput[] | ShiftSwapRequestUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutScheduleInput | ShiftSwapRequestCreateOrConnectWithoutScheduleInput[]
    createMany?: ShiftSwapRequestCreateManyScheduleInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedOneWithoutScheduleInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput
    connect?: AttendanceWhereUniqueInput
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutScheduleInput, ShiftSwapRequestUncheckedCreateWithoutScheduleInput> | ShiftSwapRequestCreateWithoutScheduleInput[] | ShiftSwapRequestUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutScheduleInput | ShiftSwapRequestCreateOrConnectWithoutScheduleInput[]
    createMany?: ShiftSwapRequestCreateManyScheduleInputEnvelope
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutWorkSchedulesInput, UserUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkSchedulesInput
    upsert?: UserUpsertWithoutWorkSchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkSchedulesInput, UserUpdateWithoutWorkSchedulesInput>, UserUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type ShiftUpdateOneRequiredWithoutWorkSchedulesNestedInput = {
    create?: XOR<ShiftCreateWithoutWorkSchedulesInput, ShiftUncheckedCreateWithoutWorkSchedulesInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutWorkSchedulesInput
    upsert?: ShiftUpsertWithoutWorkSchedulesInput
    connect?: ShiftWhereUniqueInput
    update?: XOR<XOR<ShiftUpdateToOneWithWhereWithoutWorkSchedulesInput, ShiftUpdateWithoutWorkSchedulesInput>, ShiftUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type AttendanceUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput
    upsert?: AttendanceUpsertWithoutScheduleInput
    disconnect?: AttendanceWhereInput | boolean
    delete?: AttendanceWhereInput | boolean
    connect?: AttendanceWhereUniqueInput
    update?: XOR<XOR<AttendanceUpdateToOneWithWhereWithoutScheduleInput, AttendanceUpdateWithoutScheduleInput>, AttendanceUncheckedUpdateWithoutScheduleInput>
  }

  export type ShiftSwapRequestUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutScheduleInput, ShiftSwapRequestUncheckedCreateWithoutScheduleInput> | ShiftSwapRequestCreateWithoutScheduleInput[] | ShiftSwapRequestUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutScheduleInput | ShiftSwapRequestCreateOrConnectWithoutScheduleInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutScheduleInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ShiftSwapRequestCreateManyScheduleInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutScheduleInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutScheduleInput | ShiftSwapRequestUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateOneWithoutScheduleNestedInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput
    upsert?: AttendanceUpsertWithoutScheduleInput
    disconnect?: AttendanceWhereInput | boolean
    delete?: AttendanceWhereInput | boolean
    connect?: AttendanceWhereUniqueInput
    update?: XOR<XOR<AttendanceUpdateToOneWithWhereWithoutScheduleInput, AttendanceUpdateWithoutScheduleInput>, AttendanceUncheckedUpdateWithoutScheduleInput>
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutScheduleInput, ShiftSwapRequestUncheckedCreateWithoutScheduleInput> | ShiftSwapRequestCreateWithoutScheduleInput[] | ShiftSwapRequestUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutScheduleInput | ShiftSwapRequestCreateOrConnectWithoutScheduleInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutScheduleInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: ShiftSwapRequestCreateManyScheduleInputEnvelope
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutScheduleInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutScheduleInput | ShiftSwapRequestUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type WorkScheduleCreateNestedOneWithoutSwapRequestsInput = {
    create?: XOR<WorkScheduleCreateWithoutSwapRequestsInput, WorkScheduleUncheckedCreateWithoutSwapRequestsInput>
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutSwapRequestsInput
    connect?: WorkScheduleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentSwapsInput = {
    create?: XOR<UserCreateWithoutSentSwapsInput, UserUncheckedCreateWithoutSentSwapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentSwapsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedSwapsInput = {
    create?: XOR<UserCreateWithoutReceivedSwapsInput, UserUncheckedCreateWithoutReceivedSwapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedSwapsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSwapStatusFieldUpdateOperationsInput = {
    set?: $Enums.SwapStatus
  }

  export type WorkScheduleUpdateOneRequiredWithoutSwapRequestsNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutSwapRequestsInput, WorkScheduleUncheckedCreateWithoutSwapRequestsInput>
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutSwapRequestsInput
    upsert?: WorkScheduleUpsertWithoutSwapRequestsInput
    connect?: WorkScheduleWhereUniqueInput
    update?: XOR<XOR<WorkScheduleUpdateToOneWithWhereWithoutSwapRequestsInput, WorkScheduleUpdateWithoutSwapRequestsInput>, WorkScheduleUncheckedUpdateWithoutSwapRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutSentSwapsNestedInput = {
    create?: XOR<UserCreateWithoutSentSwapsInput, UserUncheckedCreateWithoutSentSwapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentSwapsInput
    upsert?: UserUpsertWithoutSentSwapsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentSwapsInput, UserUpdateWithoutSentSwapsInput>, UserUncheckedUpdateWithoutSentSwapsInput>
  }

  export type UserUpdateOneWithoutReceivedSwapsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedSwapsInput, UserUncheckedCreateWithoutReceivedSwapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedSwapsInput
    upsert?: UserUpsertWithoutReceivedSwapsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedSwapsInput, UserUpdateWithoutReceivedSwapsInput>, UserUncheckedUpdateWithoutReceivedSwapsInput>
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkScheduleCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<WorkScheduleCreateWithoutAttendanceInput, WorkScheduleUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutAttendanceInput
    connect?: WorkScheduleWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type WorkScheduleUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<WorkScheduleCreateWithoutAttendanceInput, WorkScheduleUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: WorkScheduleCreateOrConnectWithoutAttendanceInput
    upsert?: WorkScheduleUpsertWithoutAttendanceInput
    connect?: WorkScheduleWhereUniqueInput
    update?: XOR<XOR<WorkScheduleUpdateToOneWithWhereWithoutAttendanceInput, WorkScheduleUpdateWithoutAttendanceInput>, WorkScheduleUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserCreateNestedOneWithoutMonthlySalariesInput = {
    create?: XOR<UserCreateWithoutMonthlySalariesInput, UserUncheckedCreateWithoutMonthlySalariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthlySalariesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMonthlySalariesNestedInput = {
    create?: XOR<UserCreateWithoutMonthlySalariesInput, UserUncheckedCreateWithoutMonthlySalariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonthlySalariesInput
    upsert?: UserUpsertWithoutMonthlySalariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMonthlySalariesInput, UserUpdateWithoutMonthlySalariesInput>, UserUncheckedUpdateWithoutMonthlySalariesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumEmployeeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[]
    notIn?: $Enums.EmployeeType[]
    not?: NestedEnumEmployeeTypeFilter<$PrismaModel> | $Enums.EmployeeType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[]
    notIn?: $Enums.EmployeeType[]
    not?: NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeTypeFilter<$PrismaModel>
    _max?: NestedEnumEmployeeTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSwapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[]
    notIn?: $Enums.SwapStatus[]
    not?: NestedEnumSwapStatusFilter<$PrismaModel> | $Enums.SwapStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwapStatus | EnumSwapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SwapStatus[]
    notIn?: $Enums.SwapStatus[]
    not?: NestedEnumSwapStatusWithAggregatesFilter<$PrismaModel> | $Enums.SwapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwapStatusFilter<$PrismaModel>
    _max?: NestedEnumSwapStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EmployeeAvailabilityCreateWithoutUserInput = {
    date: Date | string
    shift: ShiftCreateNestedOneWithoutAvailabilitiesInput
  }

  export type EmployeeAvailabilityUncheckedCreateWithoutUserInput = {
    id?: number
    shiftId: number
    date: Date | string
  }

  export type EmployeeAvailabilityCreateOrConnectWithoutUserInput = {
    where: EmployeeAvailabilityWhereUniqueInput
    create: XOR<EmployeeAvailabilityCreateWithoutUserInput, EmployeeAvailabilityUncheckedCreateWithoutUserInput>
  }

  export type EmployeeAvailabilityCreateManyUserInputEnvelope = {
    data: EmployeeAvailabilityCreateManyUserInput | EmployeeAvailabilityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkScheduleCreateWithoutUserInput = {
    date: Date | string
    isPublished?: boolean
    shift: ShiftCreateNestedOneWithoutWorkSchedulesInput
    attendance?: AttendanceCreateNestedOneWithoutScheduleInput
    swapRequests?: ShiftSwapRequestCreateNestedManyWithoutScheduleInput
  }

  export type WorkScheduleUncheckedCreateWithoutUserInput = {
    id?: number
    shiftId: number
    date: Date | string
    isPublished?: boolean
    attendance?: AttendanceUncheckedCreateNestedOneWithoutScheduleInput
    swapRequests?: ShiftSwapRequestUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type WorkScheduleCreateOrConnectWithoutUserInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutUserInput, WorkScheduleUncheckedCreateWithoutUserInput>
  }

  export type WorkScheduleCreateManyUserInputEnvelope = {
    data: WorkScheduleCreateManyUserInput | WorkScheduleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutUserInput = {
    checkIn?: Date | string
    checkOut?: Date | string | null
    status?: string | null
    schedule: WorkScheduleCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    id?: number
    workScheduleId: number
    checkIn?: Date | string
    checkOut?: Date | string | null
    status?: string | null
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MonthlySalaryCreateWithoutUserInput = {
    month: number
    year: number
    totalHours?: number
    totalSalary?: number
    isPaid?: boolean
  }

  export type MonthlySalaryUncheckedCreateWithoutUserInput = {
    id?: number
    month: number
    year: number
    totalHours?: number
    totalSalary?: number
    isPaid?: boolean
  }

  export type MonthlySalaryCreateOrConnectWithoutUserInput = {
    where: MonthlySalaryWhereUniqueInput
    create: XOR<MonthlySalaryCreateWithoutUserInput, MonthlySalaryUncheckedCreateWithoutUserInput>
  }

  export type MonthlySalaryCreateManyUserInputEnvelope = {
    data: MonthlySalaryCreateManyUserInput | MonthlySalaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShiftSwapRequestCreateWithoutSenderInput = {
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    schedule: WorkScheduleCreateNestedOneWithoutSwapRequestsInput
    receiver?: UserCreateNestedOneWithoutReceivedSwapsInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutSenderInput = {
    id?: number
    workScheduleId: number
    receiverId?: number | null
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutSenderInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutSenderInput, ShiftSwapRequestUncheckedCreateWithoutSenderInput>
  }

  export type ShiftSwapRequestCreateManySenderInputEnvelope = {
    data: ShiftSwapRequestCreateManySenderInput | ShiftSwapRequestCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ShiftSwapRequestCreateWithoutReceiverInput = {
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    schedule: WorkScheduleCreateNestedOneWithoutSwapRequestsInput
    sender: UserCreateNestedOneWithoutSentSwapsInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutReceiverInput = {
    id?: number
    workScheduleId: number
    senderId: number
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutReceiverInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutReceiverInput, ShiftSwapRequestUncheckedCreateWithoutReceiverInput>
  }

  export type ShiftSwapRequestCreateManyReceiverInputEnvelope = {
    data: ShiftSwapRequestCreateManyReceiverInput | ShiftSwapRequestCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeAvailabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: EmployeeAvailabilityWhereUniqueInput
    update: XOR<EmployeeAvailabilityUpdateWithoutUserInput, EmployeeAvailabilityUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeeAvailabilityCreateWithoutUserInput, EmployeeAvailabilityUncheckedCreateWithoutUserInput>
  }

  export type EmployeeAvailabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: EmployeeAvailabilityWhereUniqueInput
    data: XOR<EmployeeAvailabilityUpdateWithoutUserInput, EmployeeAvailabilityUncheckedUpdateWithoutUserInput>
  }

  export type EmployeeAvailabilityUpdateManyWithWhereWithoutUserInput = {
    where: EmployeeAvailabilityScalarWhereInput
    data: XOR<EmployeeAvailabilityUpdateManyMutationInput, EmployeeAvailabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type EmployeeAvailabilityScalarWhereInput = {
    AND?: EmployeeAvailabilityScalarWhereInput | EmployeeAvailabilityScalarWhereInput[]
    OR?: EmployeeAvailabilityScalarWhereInput[]
    NOT?: EmployeeAvailabilityScalarWhereInput | EmployeeAvailabilityScalarWhereInput[]
    id?: IntFilter<"EmployeeAvailability"> | number
    userId?: IntFilter<"EmployeeAvailability"> | number
    shiftId?: IntFilter<"EmployeeAvailability"> | number
    date?: DateTimeFilter<"EmployeeAvailability"> | Date | string
  }

  export type WorkScheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkScheduleWhereUniqueInput
    update: XOR<WorkScheduleUpdateWithoutUserInput, WorkScheduleUncheckedUpdateWithoutUserInput>
    create: XOR<WorkScheduleCreateWithoutUserInput, WorkScheduleUncheckedCreateWithoutUserInput>
  }

  export type WorkScheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkScheduleWhereUniqueInput
    data: XOR<WorkScheduleUpdateWithoutUserInput, WorkScheduleUncheckedUpdateWithoutUserInput>
  }

  export type WorkScheduleUpdateManyWithWhereWithoutUserInput = {
    where: WorkScheduleScalarWhereInput
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkScheduleScalarWhereInput = {
    AND?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
    OR?: WorkScheduleScalarWhereInput[]
    NOT?: WorkScheduleScalarWhereInput | WorkScheduleScalarWhereInput[]
    id?: IntFilter<"WorkSchedule"> | number
    userId?: IntFilter<"WorkSchedule"> | number
    shiftId?: IntFilter<"WorkSchedule"> | number
    date?: DateTimeFilter<"WorkSchedule"> | Date | string
    isPublished?: BoolFilter<"WorkSchedule"> | boolean
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    userId?: IntFilter<"Attendance"> | number
    workScheduleId?: IntFilter<"Attendance"> | number
    checkIn?: DateTimeFilter<"Attendance"> | Date | string
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringNullableFilter<"Attendance"> | string | null
  }

  export type MonthlySalaryUpsertWithWhereUniqueWithoutUserInput = {
    where: MonthlySalaryWhereUniqueInput
    update: XOR<MonthlySalaryUpdateWithoutUserInput, MonthlySalaryUncheckedUpdateWithoutUserInput>
    create: XOR<MonthlySalaryCreateWithoutUserInput, MonthlySalaryUncheckedCreateWithoutUserInput>
  }

  export type MonthlySalaryUpdateWithWhereUniqueWithoutUserInput = {
    where: MonthlySalaryWhereUniqueInput
    data: XOR<MonthlySalaryUpdateWithoutUserInput, MonthlySalaryUncheckedUpdateWithoutUserInput>
  }

  export type MonthlySalaryUpdateManyWithWhereWithoutUserInput = {
    where: MonthlySalaryScalarWhereInput
    data: XOR<MonthlySalaryUpdateManyMutationInput, MonthlySalaryUncheckedUpdateManyWithoutUserInput>
  }

  export type MonthlySalaryScalarWhereInput = {
    AND?: MonthlySalaryScalarWhereInput | MonthlySalaryScalarWhereInput[]
    OR?: MonthlySalaryScalarWhereInput[]
    NOT?: MonthlySalaryScalarWhereInput | MonthlySalaryScalarWhereInput[]
    id?: IntFilter<"MonthlySalary"> | number
    userId?: IntFilter<"MonthlySalary"> | number
    month?: IntFilter<"MonthlySalary"> | number
    year?: IntFilter<"MonthlySalary"> | number
    totalHours?: FloatFilter<"MonthlySalary"> | number
    totalSalary?: IntFilter<"MonthlySalary"> | number
    isPaid?: BoolFilter<"MonthlySalary"> | boolean
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutSenderInput, ShiftSwapRequestUncheckedUpdateWithoutSenderInput>
    create: XOR<ShiftSwapRequestCreateWithoutSenderInput, ShiftSwapRequestUncheckedCreateWithoutSenderInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutSenderInput, ShiftSwapRequestUncheckedUpdateWithoutSenderInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutSenderInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type ShiftSwapRequestScalarWhereInput = {
    AND?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
    OR?: ShiftSwapRequestScalarWhereInput[]
    NOT?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
    id?: IntFilter<"ShiftSwapRequest"> | number
    workScheduleId?: IntFilter<"ShiftSwapRequest"> | number
    senderId?: IntFilter<"ShiftSwapRequest"> | number
    receiverId?: IntNullableFilter<"ShiftSwapRequest"> | number | null
    reason?: StringNullableFilter<"ShiftSwapRequest"> | string | null
    status?: EnumSwapStatusFilter<"ShiftSwapRequest"> | $Enums.SwapStatus
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutReceiverInput, ShiftSwapRequestUncheckedUpdateWithoutReceiverInput>
    create: XOR<ShiftSwapRequestCreateWithoutReceiverInput, ShiftSwapRequestUncheckedCreateWithoutReceiverInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutReceiverInput, ShiftSwapRequestUncheckedUpdateWithoutReceiverInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutReceiverInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutReceiverInput>
  }

  export type EmployeeAvailabilityCreateWithoutShiftInput = {
    date: Date | string
    user: UserCreateNestedOneWithoutAvailabilitiesInput
  }

  export type EmployeeAvailabilityUncheckedCreateWithoutShiftInput = {
    id?: number
    userId: number
    date: Date | string
  }

  export type EmployeeAvailabilityCreateOrConnectWithoutShiftInput = {
    where: EmployeeAvailabilityWhereUniqueInput
    create: XOR<EmployeeAvailabilityCreateWithoutShiftInput, EmployeeAvailabilityUncheckedCreateWithoutShiftInput>
  }

  export type EmployeeAvailabilityCreateManyShiftInputEnvelope = {
    data: EmployeeAvailabilityCreateManyShiftInput | EmployeeAvailabilityCreateManyShiftInput[]
    skipDuplicates?: boolean
  }

  export type WorkScheduleCreateWithoutShiftInput = {
    date: Date | string
    isPublished?: boolean
    user: UserCreateNestedOneWithoutWorkSchedulesInput
    attendance?: AttendanceCreateNestedOneWithoutScheduleInput
    swapRequests?: ShiftSwapRequestCreateNestedManyWithoutScheduleInput
  }

  export type WorkScheduleUncheckedCreateWithoutShiftInput = {
    id?: number
    userId: number
    date: Date | string
    isPublished?: boolean
    attendance?: AttendanceUncheckedCreateNestedOneWithoutScheduleInput
    swapRequests?: ShiftSwapRequestUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type WorkScheduleCreateOrConnectWithoutShiftInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutShiftInput, WorkScheduleUncheckedCreateWithoutShiftInput>
  }

  export type WorkScheduleCreateManyShiftInputEnvelope = {
    data: WorkScheduleCreateManyShiftInput | WorkScheduleCreateManyShiftInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeAvailabilityUpsertWithWhereUniqueWithoutShiftInput = {
    where: EmployeeAvailabilityWhereUniqueInput
    update: XOR<EmployeeAvailabilityUpdateWithoutShiftInput, EmployeeAvailabilityUncheckedUpdateWithoutShiftInput>
    create: XOR<EmployeeAvailabilityCreateWithoutShiftInput, EmployeeAvailabilityUncheckedCreateWithoutShiftInput>
  }

  export type EmployeeAvailabilityUpdateWithWhereUniqueWithoutShiftInput = {
    where: EmployeeAvailabilityWhereUniqueInput
    data: XOR<EmployeeAvailabilityUpdateWithoutShiftInput, EmployeeAvailabilityUncheckedUpdateWithoutShiftInput>
  }

  export type EmployeeAvailabilityUpdateManyWithWhereWithoutShiftInput = {
    where: EmployeeAvailabilityScalarWhereInput
    data: XOR<EmployeeAvailabilityUpdateManyMutationInput, EmployeeAvailabilityUncheckedUpdateManyWithoutShiftInput>
  }

  export type WorkScheduleUpsertWithWhereUniqueWithoutShiftInput = {
    where: WorkScheduleWhereUniqueInput
    update: XOR<WorkScheduleUpdateWithoutShiftInput, WorkScheduleUncheckedUpdateWithoutShiftInput>
    create: XOR<WorkScheduleCreateWithoutShiftInput, WorkScheduleUncheckedCreateWithoutShiftInput>
  }

  export type WorkScheduleUpdateWithWhereUniqueWithoutShiftInput = {
    where: WorkScheduleWhereUniqueInput
    data: XOR<WorkScheduleUpdateWithoutShiftInput, WorkScheduleUncheckedUpdateWithoutShiftInput>
  }

  export type WorkScheduleUpdateManyWithWhereWithoutShiftInput = {
    where: WorkScheduleScalarWhereInput
    data: XOR<WorkScheduleUpdateManyMutationInput, WorkScheduleUncheckedUpdateManyWithoutShiftInput>
  }

  export type UserCreateWithoutAvailabilitiesInput = {
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    workSchedules?: WorkScheduleCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryUncheckedCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutAvailabilitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilitiesInput, UserUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type ShiftCreateWithoutAvailabilitiesInput = {
    name: string
    startTime: string
    endTime: string
    unitPrice?: number | null
    workSchedules?: WorkScheduleCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    name: string
    startTime: string
    endTime: string
    unitPrice?: number | null
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutAvailabilitiesInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutAvailabilitiesInput, ShiftUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type UserUpsertWithoutAvailabilitiesInput = {
    update: XOR<UserUpdateWithoutAvailabilitiesInput, UserUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<UserCreateWithoutAvailabilitiesInput, UserUncheckedCreateWithoutAvailabilitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilitiesInput, UserUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type UserUpdateWithoutAvailabilitiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workSchedules?: WorkScheduleUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUncheckedUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ShiftUpsertWithoutAvailabilitiesInput = {
    update: XOR<ShiftUpdateWithoutAvailabilitiesInput, ShiftUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<ShiftCreateWithoutAvailabilitiesInput, ShiftUncheckedCreateWithoutAvailabilitiesInput>
    where?: ShiftWhereInput
  }

  export type ShiftUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: ShiftWhereInput
    data: XOR<ShiftUpdateWithoutAvailabilitiesInput, ShiftUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ShiftUpdateWithoutAvailabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    workSchedules?: WorkScheduleUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type UserCreateWithoutWorkSchedulesInput = {
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutWorkSchedulesInput = {
    id?: number
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryUncheckedCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutWorkSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkSchedulesInput, UserUncheckedCreateWithoutWorkSchedulesInput>
  }

  export type ShiftCreateWithoutWorkSchedulesInput = {
    name: string
    startTime: string
    endTime: string
    unitPrice?: number | null
    availabilities?: EmployeeAvailabilityCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutWorkSchedulesInput = {
    id?: number
    name: string
    startTime: string
    endTime: string
    unitPrice?: number | null
    availabilities?: EmployeeAvailabilityUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutWorkSchedulesInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutWorkSchedulesInput, ShiftUncheckedCreateWithoutWorkSchedulesInput>
  }

  export type AttendanceCreateWithoutScheduleInput = {
    checkIn?: Date | string
    checkOut?: Date | string | null
    status?: string | null
    user: UserCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutScheduleInput = {
    id?: number
    userId: number
    checkIn?: Date | string
    checkOut?: Date | string | null
    status?: string | null
  }

  export type AttendanceCreateOrConnectWithoutScheduleInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
  }

  export type ShiftSwapRequestCreateWithoutScheduleInput = {
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentSwapsInput
    receiver?: UserCreateNestedOneWithoutReceivedSwapsInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutScheduleInput = {
    id?: number
    senderId: number
    receiverId?: number | null
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutScheduleInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutScheduleInput, ShiftSwapRequestUncheckedCreateWithoutScheduleInput>
  }

  export type ShiftSwapRequestCreateManyScheduleInputEnvelope = {
    data: ShiftSwapRequestCreateManyScheduleInput | ShiftSwapRequestCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkSchedulesInput = {
    update: XOR<UserUpdateWithoutWorkSchedulesInput, UserUncheckedUpdateWithoutWorkSchedulesInput>
    create: XOR<UserCreateWithoutWorkSchedulesInput, UserUncheckedCreateWithoutWorkSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkSchedulesInput, UserUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type UserUpdateWithoutWorkSchedulesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUncheckedUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ShiftUpsertWithoutWorkSchedulesInput = {
    update: XOR<ShiftUpdateWithoutWorkSchedulesInput, ShiftUncheckedUpdateWithoutWorkSchedulesInput>
    create: XOR<ShiftCreateWithoutWorkSchedulesInput, ShiftUncheckedCreateWithoutWorkSchedulesInput>
    where?: ShiftWhereInput
  }

  export type ShiftUpdateToOneWithWhereWithoutWorkSchedulesInput = {
    where?: ShiftWhereInput
    data: XOR<ShiftUpdateWithoutWorkSchedulesInput, ShiftUncheckedUpdateWithoutWorkSchedulesInput>
  }

  export type ShiftUpdateWithoutWorkSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    availabilities?: EmployeeAvailabilityUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutWorkSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    availabilities?: EmployeeAvailabilityUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type AttendanceUpsertWithoutScheduleInput = {
    update: XOR<AttendanceUpdateWithoutScheduleInput, AttendanceUncheckedUpdateWithoutScheduleInput>
    create: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
    where?: AttendanceWhereInput
  }

  export type AttendanceUpdateToOneWithWhereWithoutScheduleInput = {
    where?: AttendanceWhereInput
    data: XOR<AttendanceUpdateWithoutScheduleInput, AttendanceUncheckedUpdateWithoutScheduleInput>
  }

  export type AttendanceUpdateWithoutScheduleInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutScheduleInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutScheduleInput, ShiftSwapRequestUncheckedUpdateWithoutScheduleInput>
    create: XOR<ShiftSwapRequestCreateWithoutScheduleInput, ShiftSwapRequestUncheckedCreateWithoutScheduleInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutScheduleInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutScheduleInput, ShiftSwapRequestUncheckedUpdateWithoutScheduleInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutScheduleInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutScheduleInput>
  }

  export type WorkScheduleCreateWithoutSwapRequestsInput = {
    date: Date | string
    isPublished?: boolean
    user: UserCreateNestedOneWithoutWorkSchedulesInput
    shift: ShiftCreateNestedOneWithoutWorkSchedulesInput
    attendance?: AttendanceCreateNestedOneWithoutScheduleInput
  }

  export type WorkScheduleUncheckedCreateWithoutSwapRequestsInput = {
    id?: number
    userId: number
    shiftId: number
    date: Date | string
    isPublished?: boolean
    attendance?: AttendanceUncheckedCreateNestedOneWithoutScheduleInput
  }

  export type WorkScheduleCreateOrConnectWithoutSwapRequestsInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutSwapRequestsInput, WorkScheduleUncheckedCreateWithoutSwapRequestsInput>
  }

  export type UserCreateWithoutSentSwapsInput = {
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryCreateNestedManyWithoutUserInput
    receivedSwaps?: ShiftSwapRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentSwapsInput = {
    id?: number
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityUncheckedCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryUncheckedCreateNestedManyWithoutUserInput
    receivedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentSwapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentSwapsInput, UserUncheckedCreateWithoutSentSwapsInput>
  }

  export type UserCreateWithoutReceivedSwapsInput = {
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedSwapsInput = {
    id?: number
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityUncheckedCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryUncheckedCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedSwapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedSwapsInput, UserUncheckedCreateWithoutReceivedSwapsInput>
  }

  export type WorkScheduleUpsertWithoutSwapRequestsInput = {
    update: XOR<WorkScheduleUpdateWithoutSwapRequestsInput, WorkScheduleUncheckedUpdateWithoutSwapRequestsInput>
    create: XOR<WorkScheduleCreateWithoutSwapRequestsInput, WorkScheduleUncheckedCreateWithoutSwapRequestsInput>
    where?: WorkScheduleWhereInput
  }

  export type WorkScheduleUpdateToOneWithWhereWithoutSwapRequestsInput = {
    where?: WorkScheduleWhereInput
    data: XOR<WorkScheduleUpdateWithoutSwapRequestsInput, WorkScheduleUncheckedUpdateWithoutSwapRequestsInput>
  }

  export type WorkScheduleUpdateWithoutSwapRequestsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutWorkSchedulesNestedInput
    shift?: ShiftUpdateOneRequiredWithoutWorkSchedulesNestedInput
    attendance?: AttendanceUpdateOneWithoutScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateWithoutSwapRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    attendance?: AttendanceUncheckedUpdateOneWithoutScheduleNestedInput
  }

  export type UserUpsertWithoutSentSwapsInput = {
    update: XOR<UserUpdateWithoutSentSwapsInput, UserUncheckedUpdateWithoutSentSwapsInput>
    create: XOR<UserCreateWithoutSentSwapsInput, UserUncheckedCreateWithoutSentSwapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentSwapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentSwapsInput, UserUncheckedUpdateWithoutSentSwapsInput>
  }

  export type UserUpdateWithoutSentSwapsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUpdateManyWithoutUserNestedInput
    receivedSwaps?: ShiftSwapRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentSwapsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUncheckedUpdateManyWithoutUserNestedInput
    receivedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedSwapsInput = {
    update: XOR<UserUpdateWithoutReceivedSwapsInput, UserUncheckedUpdateWithoutReceivedSwapsInput>
    create: XOR<UserCreateWithoutReceivedSwapsInput, UserUncheckedCreateWithoutReceivedSwapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedSwapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedSwapsInput, UserUncheckedUpdateWithoutReceivedSwapsInput>
  }

  export type UserUpdateWithoutReceivedSwapsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedSwapsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUncheckedUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutAttendancesInput = {
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: number
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityUncheckedCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutUserInput
    monthlySalaries?: MonthlySalaryUncheckedCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type WorkScheduleCreateWithoutAttendanceInput = {
    date: Date | string
    isPublished?: boolean
    user: UserCreateNestedOneWithoutWorkSchedulesInput
    shift: ShiftCreateNestedOneWithoutWorkSchedulesInput
    swapRequests?: ShiftSwapRequestCreateNestedManyWithoutScheduleInput
  }

  export type WorkScheduleUncheckedCreateWithoutAttendanceInput = {
    id?: number
    userId: number
    shiftId: number
    date: Date | string
    isPublished?: boolean
    swapRequests?: ShiftSwapRequestUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type WorkScheduleCreateOrConnectWithoutAttendanceInput = {
    where: WorkScheduleWhereUniqueInput
    create: XOR<WorkScheduleCreateWithoutAttendanceInput, WorkScheduleUncheckedCreateWithoutAttendanceInput>
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutUserNestedInput
    monthlySalaries?: MonthlySalaryUncheckedUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type WorkScheduleUpsertWithoutAttendanceInput = {
    update: XOR<WorkScheduleUpdateWithoutAttendanceInput, WorkScheduleUncheckedUpdateWithoutAttendanceInput>
    create: XOR<WorkScheduleCreateWithoutAttendanceInput, WorkScheduleUncheckedCreateWithoutAttendanceInput>
    where?: WorkScheduleWhereInput
  }

  export type WorkScheduleUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: WorkScheduleWhereInput
    data: XOR<WorkScheduleUpdateWithoutAttendanceInput, WorkScheduleUncheckedUpdateWithoutAttendanceInput>
  }

  export type WorkScheduleUpdateWithoutAttendanceInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutWorkSchedulesNestedInput
    shift?: ShiftUpdateOneRequiredWithoutWorkSchedulesNestedInput
    swapRequests?: ShiftSwapRequestUpdateManyWithoutScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    swapRequests?: ShiftSwapRequestUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type UserCreateWithoutMonthlySalariesInput = {
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMonthlySalariesInput = {
    id?: number
    email: string
    password: string
    fullName: string
    role?: $Enums.Role
    type?: $Enums.EmployeeType
    baseSalary?: number
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: EmployeeAvailabilityUncheckedCreateNestedManyWithoutUserInput
    workSchedules?: WorkScheduleUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    sentSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMonthlySalariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMonthlySalariesInput, UserUncheckedCreateWithoutMonthlySalariesInput>
  }

  export type UserUpsertWithoutMonthlySalariesInput = {
    update: XOR<UserUpdateWithoutMonthlySalariesInput, UserUncheckedUpdateWithoutMonthlySalariesInput>
    create: XOR<UserCreateWithoutMonthlySalariesInput, UserUncheckedCreateWithoutMonthlySalariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMonthlySalariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMonthlySalariesInput, UserUncheckedUpdateWithoutMonthlySalariesInput>
  }

  export type UserUpdateWithoutMonthlySalariesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMonthlySalariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    baseSalary?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: EmployeeAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    workSchedules?: WorkScheduleUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    sentSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type EmployeeAvailabilityCreateManyUserInput = {
    id?: number
    shiftId: number
    date: Date | string
  }

  export type WorkScheduleCreateManyUserInput = {
    id?: number
    shiftId: number
    date: Date | string
    isPublished?: boolean
  }

  export type AttendanceCreateManyUserInput = {
    id?: number
    workScheduleId: number
    checkIn?: Date | string
    checkOut?: Date | string | null
    status?: string | null
  }

  export type MonthlySalaryCreateManyUserInput = {
    id?: number
    month: number
    year: number
    totalHours?: number
    totalSalary?: number
    isPaid?: boolean
  }

  export type ShiftSwapRequestCreateManySenderInput = {
    id?: number
    workScheduleId: number
    receiverId?: number | null
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
  }

  export type ShiftSwapRequestCreateManyReceiverInput = {
    id?: number
    workScheduleId: number
    senderId: number
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
  }

  export type EmployeeAvailabilityUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: ShiftUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type EmployeeAvailabilityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAvailabilityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    shift?: ShiftUpdateOneRequiredWithoutWorkSchedulesNestedInput
    attendance?: AttendanceUpdateOneWithoutScheduleNestedInput
    swapRequests?: ShiftSwapRequestUpdateManyWithoutScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    attendance?: AttendanceUncheckedUpdateOneWithoutScheduleNestedInput
    swapRequests?: ShiftSwapRequestUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceUpdateWithoutUserInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: WorkScheduleUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlySalaryUpdateWithoutUserInput = {
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalSalary?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MonthlySalaryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalSalary?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MonthlySalaryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    totalHours?: FloatFieldUpdateOperationsInput | number
    totalSalary?: IntFieldUpdateOperationsInput | number
    isPaid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftSwapRequestUpdateWithoutSenderInput = {
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: WorkScheduleUpdateOneRequiredWithoutSwapRequestsNestedInput
    receiver?: UserUpdateOneWithoutReceivedSwapsNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUpdateWithoutReceiverInput = {
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: WorkScheduleUpdateOneRequiredWithoutSwapRequestsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentSwapsNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    workScheduleId?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAvailabilityCreateManyShiftInput = {
    id?: number
    userId: number
    date: Date | string
  }

  export type WorkScheduleCreateManyShiftInput = {
    id?: number
    userId: number
    date: Date | string
    isPublished?: boolean
  }

  export type EmployeeAvailabilityUpdateWithoutShiftInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type EmployeeAvailabilityUncheckedUpdateWithoutShiftInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeAvailabilityUncheckedUpdateManyWithoutShiftInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkScheduleUpdateWithoutShiftInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutWorkSchedulesNestedInput
    attendance?: AttendanceUpdateOneWithoutScheduleNestedInput
    swapRequests?: ShiftSwapRequestUpdateManyWithoutScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateWithoutShiftInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    attendance?: AttendanceUncheckedUpdateOneWithoutScheduleNestedInput
    swapRequests?: ShiftSwapRequestUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type WorkScheduleUncheckedUpdateManyWithoutShiftInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShiftSwapRequestCreateManyScheduleInput = {
    id?: number
    senderId: number
    receiverId?: number | null
    reason?: string | null
    status?: $Enums.SwapStatus
    createdAt?: Date | string
  }

  export type ShiftSwapRequestUpdateWithoutScheduleInput = {
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentSwapsNestedInput
    receiver?: UserUpdateOneWithoutReceivedSwapsNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSwapStatusFieldUpdateOperationsInput | $Enums.SwapStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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