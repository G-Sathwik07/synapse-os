
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ConnectedAccount
 * 
 */
export type ConnectedAccount = $Result.DefaultSelection<Prisma.$ConnectedAccountPayload>
/**
 * Model EmailMessage
 * 
 */
export type EmailMessage = $Result.DefaultSelection<Prisma.$EmailMessagePayload>
/**
 * Model ConnectedCalendar
 * 
 */
export type ConnectedCalendar = $Result.DefaultSelection<Prisma.$ConnectedCalendarPayload>
/**
 * Model CalendarEvent
 * 
 */
export type CalendarEvent = $Result.DefaultSelection<Prisma.$CalendarEventPayload>
/**
 * Model WhatsAppSession
 * 
 */
export type WhatsAppSession = $Result.DefaultSelection<Prisma.$WhatsAppSessionPayload>
/**
 * Model CommunicationConversation
 * 
 */
export type CommunicationConversation = $Result.DefaultSelection<Prisma.$CommunicationConversationPayload>
/**
 * Model CommunicationParticipant
 * 
 */
export type CommunicationParticipant = $Result.DefaultSelection<Prisma.$CommunicationParticipantPayload>
/**
 * Model CommunicationMessage
 * 
 */
export type CommunicationMessage = $Result.DefaultSelection<Prisma.$CommunicationMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AICategory: {
  WORK: 'WORK',
  COLLEGE: 'COLLEGE',
  PLACEMENT: 'PLACEMENT',
  PERSONAL: 'PERSONAL',
  FINANCE: 'FINANCE',
  SOCIAL: 'SOCIAL',
  PROMOTION: 'PROMOTION',
  NEWSLETTER: 'NEWSLETTER',
  SECURITY: 'SECURITY',
  TRANSACTION: 'TRANSACTION',
  OTHER: 'OTHER'
};

export type AICategory = (typeof AICategory)[keyof typeof AICategory]


export const AIPriority: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type AIPriority = (typeof AIPriority)[keyof typeof AIPriority]

}

export type AICategory = $Enums.AICategory

export const AICategory: typeof $Enums.AICategory

export type AIPriority = $Enums.AIPriority

export const AIPriority: typeof $Enums.AIPriority

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

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
   * `prisma.connectedAccount`: Exposes CRUD operations for the **ConnectedAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectedAccounts
    * const connectedAccounts = await prisma.connectedAccount.findMany()
    * ```
    */
  get connectedAccount(): Prisma.ConnectedAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailMessage`: Exposes CRUD operations for the **EmailMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailMessages
    * const emailMessages = await prisma.emailMessage.findMany()
    * ```
    */
  get emailMessage(): Prisma.EmailMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connectedCalendar`: Exposes CRUD operations for the **ConnectedCalendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectedCalendars
    * const connectedCalendars = await prisma.connectedCalendar.findMany()
    * ```
    */
  get connectedCalendar(): Prisma.ConnectedCalendarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarEvent`: Exposes CRUD operations for the **CalendarEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarEvents
    * const calendarEvents = await prisma.calendarEvent.findMany()
    * ```
    */
  get calendarEvent(): Prisma.CalendarEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whatsAppSession`: Exposes CRUD operations for the **WhatsAppSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppSessions
    * const whatsAppSessions = await prisma.whatsAppSession.findMany()
    * ```
    */
  get whatsAppSession(): Prisma.WhatsAppSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communicationConversation`: Exposes CRUD operations for the **CommunicationConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunicationConversations
    * const communicationConversations = await prisma.communicationConversation.findMany()
    * ```
    */
  get communicationConversation(): Prisma.CommunicationConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communicationParticipant`: Exposes CRUD operations for the **CommunicationParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunicationParticipants
    * const communicationParticipants = await prisma.communicationParticipant.findMany()
    * ```
    */
  get communicationParticipant(): Prisma.CommunicationParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communicationMessage`: Exposes CRUD operations for the **CommunicationMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunicationMessages
    * const communicationMessages = await prisma.communicationMessage.findMany()
    * ```
    */
  get communicationMessage(): Prisma.CommunicationMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    User: 'User',
    ConnectedAccount: 'ConnectedAccount',
    EmailMessage: 'EmailMessage',
    ConnectedCalendar: 'ConnectedCalendar',
    CalendarEvent: 'CalendarEvent',
    WhatsAppSession: 'WhatsAppSession',
    CommunicationConversation: 'CommunicationConversation',
    CommunicationParticipant: 'CommunicationParticipant',
    CommunicationMessage: 'CommunicationMessage'
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
      modelProps: "user" | "connectedAccount" | "emailMessage" | "connectedCalendar" | "calendarEvent" | "whatsAppSession" | "communicationConversation" | "communicationParticipant" | "communicationMessage"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      ConnectedAccount: {
        payload: Prisma.$ConnectedAccountPayload<ExtArgs>
        fields: Prisma.ConnectedAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectedAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectedAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>
          }
          findFirst: {
            args: Prisma.ConnectedAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectedAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>
          }
          findMany: {
            args: Prisma.ConnectedAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>[]
          }
          create: {
            args: Prisma.ConnectedAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>
          }
          createMany: {
            args: Prisma.ConnectedAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectedAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>[]
          }
          delete: {
            args: Prisma.ConnectedAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>
          }
          update: {
            args: Prisma.ConnectedAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>
          }
          deleteMany: {
            args: Prisma.ConnectedAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectedAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectedAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>[]
          }
          upsert: {
            args: Prisma.ConnectedAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedAccountPayload>
          }
          aggregate: {
            args: Prisma.ConnectedAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnectedAccount>
          }
          groupBy: {
            args: Prisma.ConnectedAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectedAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectedAccountCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectedAccountCountAggregateOutputType> | number
          }
        }
      }
      EmailMessage: {
        payload: Prisma.$EmailMessagePayload<ExtArgs>
        fields: Prisma.EmailMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          findFirst: {
            args: Prisma.EmailMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          findMany: {
            args: Prisma.EmailMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>[]
          }
          create: {
            args: Prisma.EmailMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          createMany: {
            args: Prisma.EmailMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>[]
          }
          delete: {
            args: Prisma.EmailMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          update: {
            args: Prisma.EmailMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          deleteMany: {
            args: Prisma.EmailMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>[]
          }
          upsert: {
            args: Prisma.EmailMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailMessagePayload>
          }
          aggregate: {
            args: Prisma.EmailMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailMessage>
          }
          groupBy: {
            args: Prisma.EmailMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailMessageCountArgs<ExtArgs>
            result: $Utils.Optional<EmailMessageCountAggregateOutputType> | number
          }
        }
      }
      ConnectedCalendar: {
        payload: Prisma.$ConnectedCalendarPayload<ExtArgs>
        fields: Prisma.ConnectedCalendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectedCalendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectedCalendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>
          }
          findFirst: {
            args: Prisma.ConnectedCalendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectedCalendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>
          }
          findMany: {
            args: Prisma.ConnectedCalendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>[]
          }
          create: {
            args: Prisma.ConnectedCalendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>
          }
          createMany: {
            args: Prisma.ConnectedCalendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectedCalendarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>[]
          }
          delete: {
            args: Prisma.ConnectedCalendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>
          }
          update: {
            args: Prisma.ConnectedCalendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>
          }
          deleteMany: {
            args: Prisma.ConnectedCalendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectedCalendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectedCalendarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>[]
          }
          upsert: {
            args: Prisma.ConnectedCalendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectedCalendarPayload>
          }
          aggregate: {
            args: Prisma.ConnectedCalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnectedCalendar>
          }
          groupBy: {
            args: Prisma.ConnectedCalendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectedCalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectedCalendarCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectedCalendarCountAggregateOutputType> | number
          }
        }
      }
      CalendarEvent: {
        payload: Prisma.$CalendarEventPayload<ExtArgs>
        fields: Prisma.CalendarEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findFirst: {
            args: Prisma.CalendarEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findMany: {
            args: Prisma.CalendarEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          create: {
            args: Prisma.CalendarEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          createMany: {
            args: Prisma.CalendarEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          delete: {
            args: Prisma.CalendarEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          update: {
            args: Prisma.CalendarEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          deleteMany: {
            args: Prisma.CalendarEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          upsert: {
            args: Prisma.CalendarEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          aggregate: {
            args: Prisma.CalendarEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarEvent>
          }
          groupBy: {
            args: Prisma.CalendarEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarEventCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppSession: {
        payload: Prisma.$WhatsAppSessionPayload<ExtArgs>
        fields: Prisma.WhatsAppSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          findFirst: {
            args: Prisma.WhatsAppSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          findMany: {
            args: Prisma.WhatsAppSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>[]
          }
          create: {
            args: Prisma.WhatsAppSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          createMany: {
            args: Prisma.WhatsAppSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsAppSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>[]
          }
          delete: {
            args: Prisma.WhatsAppSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          update: {
            args: Prisma.WhatsAppSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhatsAppSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>[]
          }
          upsert: {
            args: Prisma.WhatsAppSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppSessionPayload>
          }
          aggregate: {
            args: Prisma.WhatsAppSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppSession>
          }
          groupBy: {
            args: Prisma.WhatsAppSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppSessionCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppSessionCountAggregateOutputType> | number
          }
        }
      }
      CommunicationConversation: {
        payload: Prisma.$CommunicationConversationPayload<ExtArgs>
        fields: Prisma.CommunicationConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunicationConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunicationConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>
          }
          findFirst: {
            args: Prisma.CommunicationConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunicationConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>
          }
          findMany: {
            args: Prisma.CommunicationConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>[]
          }
          create: {
            args: Prisma.CommunicationConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>
          }
          createMany: {
            args: Prisma.CommunicationConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunicationConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>[]
          }
          delete: {
            args: Prisma.CommunicationConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>
          }
          update: {
            args: Prisma.CommunicationConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>
          }
          deleteMany: {
            args: Prisma.CommunicationConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunicationConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunicationConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>[]
          }
          upsert: {
            args: Prisma.CommunicationConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationConversationPayload>
          }
          aggregate: {
            args: Prisma.CommunicationConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunicationConversation>
          }
          groupBy: {
            args: Prisma.CommunicationConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunicationConversationCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationConversationCountAggregateOutputType> | number
          }
        }
      }
      CommunicationParticipant: {
        payload: Prisma.$CommunicationParticipantPayload<ExtArgs>
        fields: Prisma.CommunicationParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunicationParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunicationParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>
          }
          findFirst: {
            args: Prisma.CommunicationParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunicationParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>
          }
          findMany: {
            args: Prisma.CommunicationParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>[]
          }
          create: {
            args: Prisma.CommunicationParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>
          }
          createMany: {
            args: Prisma.CommunicationParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunicationParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>[]
          }
          delete: {
            args: Prisma.CommunicationParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>
          }
          update: {
            args: Prisma.CommunicationParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>
          }
          deleteMany: {
            args: Prisma.CommunicationParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunicationParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunicationParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>[]
          }
          upsert: {
            args: Prisma.CommunicationParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationParticipantPayload>
          }
          aggregate: {
            args: Prisma.CommunicationParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunicationParticipant>
          }
          groupBy: {
            args: Prisma.CommunicationParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunicationParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationParticipantCountAggregateOutputType> | number
          }
        }
      }
      CommunicationMessage: {
        payload: Prisma.$CommunicationMessagePayload<ExtArgs>
        fields: Prisma.CommunicationMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunicationMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunicationMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>
          }
          findFirst: {
            args: Prisma.CommunicationMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunicationMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>
          }
          findMany: {
            args: Prisma.CommunicationMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>[]
          }
          create: {
            args: Prisma.CommunicationMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>
          }
          createMany: {
            args: Prisma.CommunicationMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunicationMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>[]
          }
          delete: {
            args: Prisma.CommunicationMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>
          }
          update: {
            args: Prisma.CommunicationMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>
          }
          deleteMany: {
            args: Prisma.CommunicationMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunicationMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunicationMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>[]
          }
          upsert: {
            args: Prisma.CommunicationMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationMessagePayload>
          }
          aggregate: {
            args: Prisma.CommunicationMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunicationMessage>
          }
          groupBy: {
            args: Prisma.CommunicationMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunicationMessageCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationMessageCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    connectedAccount?: ConnectedAccountOmit
    emailMessage?: EmailMessageOmit
    connectedCalendar?: ConnectedCalendarOmit
    calendarEvent?: CalendarEventOmit
    whatsAppSession?: WhatsAppSessionOmit
    communicationConversation?: CommunicationConversationOmit
    communicationParticipant?: CommunicationParticipantOmit
    communicationMessage?: CommunicationMessageOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    connectedAccounts: number
    emailMessages: number
    connectedCalendars: number
    calendarEvents: number
    communicationConversations: number
    communicationMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connectedAccounts?: boolean | UserCountOutputTypeCountConnectedAccountsArgs
    emailMessages?: boolean | UserCountOutputTypeCountEmailMessagesArgs
    connectedCalendars?: boolean | UserCountOutputTypeCountConnectedCalendarsArgs
    calendarEvents?: boolean | UserCountOutputTypeCountCalendarEventsArgs
    communicationConversations?: boolean | UserCountOutputTypeCountCommunicationConversationsArgs
    communicationMessages?: boolean | UserCountOutputTypeCountCommunicationMessagesArgs
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
  export type UserCountOutputTypeCountConnectedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectedAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConnectedCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectedCalendarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCalendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunicationConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunicationMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationMessageWhereInput
  }


  /**
   * Count Type ConnectedAccountCountOutputType
   */

  export type ConnectedAccountCountOutputType = {
    emailMessages: number
    connectedCalendars: number
    calendarEvents: number
    communicationConversations: number
    communicationMessages: number
  }

  export type ConnectedAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailMessages?: boolean | ConnectedAccountCountOutputTypeCountEmailMessagesArgs
    connectedCalendars?: boolean | ConnectedAccountCountOutputTypeCountConnectedCalendarsArgs
    calendarEvents?: boolean | ConnectedAccountCountOutputTypeCountCalendarEventsArgs
    communicationConversations?: boolean | ConnectedAccountCountOutputTypeCountCommunicationConversationsArgs
    communicationMessages?: boolean | ConnectedAccountCountOutputTypeCountCommunicationMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConnectedAccountCountOutputType without action
   */
  export type ConnectedAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccountCountOutputType
     */
    select?: ConnectedAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConnectedAccountCountOutputType without action
   */
  export type ConnectedAccountCountOutputTypeCountEmailMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailMessageWhereInput
  }

  /**
   * ConnectedAccountCountOutputType without action
   */
  export type ConnectedAccountCountOutputTypeCountConnectedCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectedCalendarWhereInput
  }

  /**
   * ConnectedAccountCountOutputType without action
   */
  export type ConnectedAccountCountOutputTypeCountCalendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }

  /**
   * ConnectedAccountCountOutputType without action
   */
  export type ConnectedAccountCountOutputTypeCountCommunicationConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationConversationWhereInput
  }

  /**
   * ConnectedAccountCountOutputType without action
   */
  export type ConnectedAccountCountOutputTypeCountCommunicationMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationMessageWhereInput
  }


  /**
   * Count Type ConnectedCalendarCountOutputType
   */

  export type ConnectedCalendarCountOutputType = {
    calendarEvents: number
  }

  export type ConnectedCalendarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendarEvents?: boolean | ConnectedCalendarCountOutputTypeCountCalendarEventsArgs
  }

  // Custom InputTypes
  /**
   * ConnectedCalendarCountOutputType without action
   */
  export type ConnectedCalendarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendarCountOutputType
     */
    select?: ConnectedCalendarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConnectedCalendarCountOutputType without action
   */
  export type ConnectedCalendarCountOutputTypeCountCalendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }


  /**
   * Count Type CommunicationConversationCountOutputType
   */

  export type CommunicationConversationCountOutputType = {
    messages: number
    participants: number
  }

  export type CommunicationConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | CommunicationConversationCountOutputTypeCountMessagesArgs
    participants?: boolean | CommunicationConversationCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * CommunicationConversationCountOutputType without action
   */
  export type CommunicationConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversationCountOutputType
     */
    select?: CommunicationConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunicationConversationCountOutputType without action
   */
  export type CommunicationConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationMessageWhereInput
  }

  /**
   * CommunicationConversationCountOutputType without action
   */
  export type CommunicationConversationCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    image?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    passwordHash: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    passwordHash?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    connectedAccounts?: boolean | User$connectedAccountsArgs<ExtArgs>
    emailMessages?: boolean | User$emailMessagesArgs<ExtArgs>
    connectedCalendars?: boolean | User$connectedCalendarsArgs<ExtArgs>
    calendarEvents?: boolean | User$calendarEventsArgs<ExtArgs>
    communicationConversations?: boolean | User$communicationConversationsArgs<ExtArgs>
    communicationMessages?: boolean | User$communicationMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connectedAccounts?: boolean | User$connectedAccountsArgs<ExtArgs>
    emailMessages?: boolean | User$emailMessagesArgs<ExtArgs>
    connectedCalendars?: boolean | User$connectedCalendarsArgs<ExtArgs>
    calendarEvents?: boolean | User$calendarEventsArgs<ExtArgs>
    communicationConversations?: boolean | User$communicationConversationsArgs<ExtArgs>
    communicationMessages?: boolean | User$communicationMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      connectedAccounts: Prisma.$ConnectedAccountPayload<ExtArgs>[]
      emailMessages: Prisma.$EmailMessagePayload<ExtArgs>[]
      connectedCalendars: Prisma.$ConnectedCalendarPayload<ExtArgs>[]
      calendarEvents: Prisma.$CalendarEventPayload<ExtArgs>[]
      communicationConversations: Prisma.$CommunicationConversationPayload<ExtArgs>[]
      communicationMessages: Prisma.$CommunicationMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      passwordHash: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    connectedAccounts<T extends User$connectedAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$connectedAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    emailMessages<T extends User$emailMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$emailMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    connectedCalendars<T extends User$connectedCalendarsArgs<ExtArgs> = {}>(args?: Subset<T, User$connectedCalendarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    calendarEvents<T extends User$calendarEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    communicationConversations<T extends User$communicationConversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$communicationConversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    communicationMessages<T extends User$communicationMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$communicationMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.connectedAccounts
   */
  export type User$connectedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    where?: ConnectedAccountWhereInput
    orderBy?: ConnectedAccountOrderByWithRelationInput | ConnectedAccountOrderByWithRelationInput[]
    cursor?: ConnectedAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectedAccountScalarFieldEnum | ConnectedAccountScalarFieldEnum[]
  }

  /**
   * User.emailMessages
   */
  export type User$emailMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    where?: EmailMessageWhereInput
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    cursor?: EmailMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * User.connectedCalendars
   */
  export type User$connectedCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    where?: ConnectedCalendarWhereInput
    orderBy?: ConnectedCalendarOrderByWithRelationInput | ConnectedCalendarOrderByWithRelationInput[]
    cursor?: ConnectedCalendarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectedCalendarScalarFieldEnum | ConnectedCalendarScalarFieldEnum[]
  }

  /**
   * User.calendarEvents
   */
  export type User$calendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    cursor?: CalendarEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * User.communicationConversations
   */
  export type User$communicationConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    where?: CommunicationConversationWhereInput
    orderBy?: CommunicationConversationOrderByWithRelationInput | CommunicationConversationOrderByWithRelationInput[]
    cursor?: CommunicationConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationConversationScalarFieldEnum | CommunicationConversationScalarFieldEnum[]
  }

  /**
   * User.communicationMessages
   */
  export type User$communicationMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    where?: CommunicationMessageWhereInput
    orderBy?: CommunicationMessageOrderByWithRelationInput | CommunicationMessageOrderByWithRelationInput[]
    cursor?: CommunicationMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationMessageScalarFieldEnum | CommunicationMessageScalarFieldEnum[]
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
   * Model ConnectedAccount
   */

  export type AggregateConnectedAccount = {
    _count: ConnectedAccountCountAggregateOutputType | null
    _min: ConnectedAccountMinAggregateOutputType | null
    _max: ConnectedAccountMaxAggregateOutputType | null
  }

  export type ConnectedAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerAccountId: string | null
    email: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectedAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerAccountId: string | null
    email: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectedAccountCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerAccountId: number
    email: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    scope: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConnectedAccountMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    email?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectedAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    email?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectedAccountCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerAccountId?: true
    email?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConnectedAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectedAccount to aggregate.
     */
    where?: ConnectedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectedAccounts to fetch.
     */
    orderBy?: ConnectedAccountOrderByWithRelationInput | ConnectedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectedAccounts
    **/
    _count?: true | ConnectedAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectedAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectedAccountMaxAggregateInputType
  }

  export type GetConnectedAccountAggregateType<T extends ConnectedAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectedAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectedAccount[P]>
      : GetScalarType<T[P], AggregateConnectedAccount[P]>
  }




  export type ConnectedAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectedAccountWhereInput
    orderBy?: ConnectedAccountOrderByWithAggregationInput | ConnectedAccountOrderByWithAggregationInput[]
    by: ConnectedAccountScalarFieldEnum[] | ConnectedAccountScalarFieldEnum
    having?: ConnectedAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectedAccountCountAggregateInputType | true
    _min?: ConnectedAccountMinAggregateInputType
    _max?: ConnectedAccountMaxAggregateInputType
  }

  export type ConnectedAccountGroupByOutputType = {
    id: string
    userId: string
    provider: string
    providerAccountId: string
    email: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    status: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConnectedAccountCountAggregateOutputType | null
    _min: ConnectedAccountMinAggregateOutputType | null
    _max: ConnectedAccountMaxAggregateOutputType | null
  }

  type GetConnectedAccountGroupByPayload<T extends ConnectedAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectedAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectedAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectedAccountGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectedAccountGroupByOutputType[P]>
        }
      >
    >


  export type ConnectedAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    email?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    emailMessages?: boolean | ConnectedAccount$emailMessagesArgs<ExtArgs>
    connectedCalendars?: boolean | ConnectedAccount$connectedCalendarsArgs<ExtArgs>
    calendarEvents?: boolean | ConnectedAccount$calendarEventsArgs<ExtArgs>
    whatsappSession?: boolean | ConnectedAccount$whatsappSessionArgs<ExtArgs>
    communicationConversations?: boolean | ConnectedAccount$communicationConversationsArgs<ExtArgs>
    communicationMessages?: boolean | ConnectedAccount$communicationMessagesArgs<ExtArgs>
    _count?: boolean | ConnectedAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectedAccount"]>

  export type ConnectedAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    email?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectedAccount"]>

  export type ConnectedAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    email?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectedAccount"]>

  export type ConnectedAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerAccountId?: boolean
    email?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConnectedAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId" | "email" | "accessToken" | "refreshToken" | "expiresAt" | "scope" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["connectedAccount"]>
  export type ConnectedAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    emailMessages?: boolean | ConnectedAccount$emailMessagesArgs<ExtArgs>
    connectedCalendars?: boolean | ConnectedAccount$connectedCalendarsArgs<ExtArgs>
    calendarEvents?: boolean | ConnectedAccount$calendarEventsArgs<ExtArgs>
    whatsappSession?: boolean | ConnectedAccount$whatsappSessionArgs<ExtArgs>
    communicationConversations?: boolean | ConnectedAccount$communicationConversationsArgs<ExtArgs>
    communicationMessages?: boolean | ConnectedAccount$communicationMessagesArgs<ExtArgs>
    _count?: boolean | ConnectedAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConnectedAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectedAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConnectedAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectedAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      emailMessages: Prisma.$EmailMessagePayload<ExtArgs>[]
      connectedCalendars: Prisma.$ConnectedCalendarPayload<ExtArgs>[]
      calendarEvents: Prisma.$CalendarEventPayload<ExtArgs>[]
      whatsappSession: Prisma.$WhatsAppSessionPayload<ExtArgs> | null
      communicationConversations: Prisma.$CommunicationConversationPayload<ExtArgs>[]
      communicationMessages: Prisma.$CommunicationMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      providerAccountId: string
      email: string | null
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
      scope: string | null
      status: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["connectedAccount"]>
    composites: {}
  }

  type ConnectedAccountGetPayload<S extends boolean | null | undefined | ConnectedAccountDefaultArgs> = $Result.GetResult<Prisma.$ConnectedAccountPayload, S>

  type ConnectedAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectedAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectedAccountCountAggregateInputType | true
    }

  export interface ConnectedAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectedAccount'], meta: { name: 'ConnectedAccount' } }
    /**
     * Find zero or one ConnectedAccount that matches the filter.
     * @param {ConnectedAccountFindUniqueArgs} args - Arguments to find a ConnectedAccount
     * @example
     * // Get one ConnectedAccount
     * const connectedAccount = await prisma.connectedAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectedAccountFindUniqueArgs>(args: SelectSubset<T, ConnectedAccountFindUniqueArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ConnectedAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectedAccountFindUniqueOrThrowArgs} args - Arguments to find a ConnectedAccount
     * @example
     * // Get one ConnectedAccount
     * const connectedAccount = await prisma.connectedAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectedAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectedAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ConnectedAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedAccountFindFirstArgs} args - Arguments to find a ConnectedAccount
     * @example
     * // Get one ConnectedAccount
     * const connectedAccount = await prisma.connectedAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectedAccountFindFirstArgs>(args?: SelectSubset<T, ConnectedAccountFindFirstArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ConnectedAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedAccountFindFirstOrThrowArgs} args - Arguments to find a ConnectedAccount
     * @example
     * // Get one ConnectedAccount
     * const connectedAccount = await prisma.connectedAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectedAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectedAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ConnectedAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectedAccounts
     * const connectedAccounts = await prisma.connectedAccount.findMany()
     * 
     * // Get first 10 ConnectedAccounts
     * const connectedAccounts = await prisma.connectedAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectedAccountWithIdOnly = await prisma.connectedAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectedAccountFindManyArgs>(args?: SelectSubset<T, ConnectedAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ConnectedAccount.
     * @param {ConnectedAccountCreateArgs} args - Arguments to create a ConnectedAccount.
     * @example
     * // Create one ConnectedAccount
     * const ConnectedAccount = await prisma.connectedAccount.create({
     *   data: {
     *     // ... data to create a ConnectedAccount
     *   }
     * })
     * 
     */
    create<T extends ConnectedAccountCreateArgs>(args: SelectSubset<T, ConnectedAccountCreateArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ConnectedAccounts.
     * @param {ConnectedAccountCreateManyArgs} args - Arguments to create many ConnectedAccounts.
     * @example
     * // Create many ConnectedAccounts
     * const connectedAccount = await prisma.connectedAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectedAccountCreateManyArgs>(args?: SelectSubset<T, ConnectedAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConnectedAccounts and returns the data saved in the database.
     * @param {ConnectedAccountCreateManyAndReturnArgs} args - Arguments to create many ConnectedAccounts.
     * @example
     * // Create many ConnectedAccounts
     * const connectedAccount = await prisma.connectedAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConnectedAccounts and only return the `id`
     * const connectedAccountWithIdOnly = await prisma.connectedAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectedAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectedAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ConnectedAccount.
     * @param {ConnectedAccountDeleteArgs} args - Arguments to delete one ConnectedAccount.
     * @example
     * // Delete one ConnectedAccount
     * const ConnectedAccount = await prisma.connectedAccount.delete({
     *   where: {
     *     // ... filter to delete one ConnectedAccount
     *   }
     * })
     * 
     */
    delete<T extends ConnectedAccountDeleteArgs>(args: SelectSubset<T, ConnectedAccountDeleteArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ConnectedAccount.
     * @param {ConnectedAccountUpdateArgs} args - Arguments to update one ConnectedAccount.
     * @example
     * // Update one ConnectedAccount
     * const connectedAccount = await prisma.connectedAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectedAccountUpdateArgs>(args: SelectSubset<T, ConnectedAccountUpdateArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ConnectedAccounts.
     * @param {ConnectedAccountDeleteManyArgs} args - Arguments to filter ConnectedAccounts to delete.
     * @example
     * // Delete a few ConnectedAccounts
     * const { count } = await prisma.connectedAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectedAccountDeleteManyArgs>(args?: SelectSubset<T, ConnectedAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectedAccounts
     * const connectedAccount = await prisma.connectedAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectedAccountUpdateManyArgs>(args: SelectSubset<T, ConnectedAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectedAccounts and returns the data updated in the database.
     * @param {ConnectedAccountUpdateManyAndReturnArgs} args - Arguments to update many ConnectedAccounts.
     * @example
     * // Update many ConnectedAccounts
     * const connectedAccount = await prisma.connectedAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConnectedAccounts and only return the `id`
     * const connectedAccountWithIdOnly = await prisma.connectedAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectedAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectedAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ConnectedAccount.
     * @param {ConnectedAccountUpsertArgs} args - Arguments to update or create a ConnectedAccount.
     * @example
     * // Update or create a ConnectedAccount
     * const connectedAccount = await prisma.connectedAccount.upsert({
     *   create: {
     *     // ... data to create a ConnectedAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectedAccount we want to update
     *   }
     * })
     */
    upsert<T extends ConnectedAccountUpsertArgs>(args: SelectSubset<T, ConnectedAccountUpsertArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ConnectedAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedAccountCountArgs} args - Arguments to filter ConnectedAccounts to count.
     * @example
     * // Count the number of ConnectedAccounts
     * const count = await prisma.connectedAccount.count({
     *   where: {
     *     // ... the filter for the ConnectedAccounts we want to count
     *   }
     * })
    **/
    count<T extends ConnectedAccountCountArgs>(
      args?: Subset<T, ConnectedAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectedAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectedAccountAggregateArgs>(args: Subset<T, ConnectedAccountAggregateArgs>): Prisma.PrismaPromise<GetConnectedAccountAggregateType<T>>

    /**
     * Group by ConnectedAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedAccountGroupByArgs} args - Group by arguments.
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
      T extends ConnectedAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectedAccountGroupByArgs['orderBy'] }
        : { orderBy?: ConnectedAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectedAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectedAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectedAccount model
   */
  readonly fields: ConnectedAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectedAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectedAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    emailMessages<T extends ConnectedAccount$emailMessagesArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccount$emailMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    connectedCalendars<T extends ConnectedAccount$connectedCalendarsArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccount$connectedCalendarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    calendarEvents<T extends ConnectedAccount$calendarEventsArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccount$calendarEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    whatsappSession<T extends ConnectedAccount$whatsappSessionArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccount$whatsappSessionArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    communicationConversations<T extends ConnectedAccount$communicationConversationsArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccount$communicationConversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    communicationMessages<T extends ConnectedAccount$communicationMessagesArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccount$communicationMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the ConnectedAccount model
   */ 
  interface ConnectedAccountFieldRefs {
    readonly id: FieldRef<"ConnectedAccount", 'String'>
    readonly userId: FieldRef<"ConnectedAccount", 'String'>
    readonly provider: FieldRef<"ConnectedAccount", 'String'>
    readonly providerAccountId: FieldRef<"ConnectedAccount", 'String'>
    readonly email: FieldRef<"ConnectedAccount", 'String'>
    readonly accessToken: FieldRef<"ConnectedAccount", 'String'>
    readonly refreshToken: FieldRef<"ConnectedAccount", 'String'>
    readonly expiresAt: FieldRef<"ConnectedAccount", 'DateTime'>
    readonly scope: FieldRef<"ConnectedAccount", 'String'>
    readonly status: FieldRef<"ConnectedAccount", 'String'>
    readonly createdAt: FieldRef<"ConnectedAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"ConnectedAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConnectedAccount findUnique
   */
  export type ConnectedAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedAccount to fetch.
     */
    where: ConnectedAccountWhereUniqueInput
  }

  /**
   * ConnectedAccount findUniqueOrThrow
   */
  export type ConnectedAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedAccount to fetch.
     */
    where: ConnectedAccountWhereUniqueInput
  }

  /**
   * ConnectedAccount findFirst
   */
  export type ConnectedAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedAccount to fetch.
     */
    where?: ConnectedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectedAccounts to fetch.
     */
    orderBy?: ConnectedAccountOrderByWithRelationInput | ConnectedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectedAccounts.
     */
    cursor?: ConnectedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectedAccounts.
     */
    distinct?: ConnectedAccountScalarFieldEnum | ConnectedAccountScalarFieldEnum[]
  }

  /**
   * ConnectedAccount findFirstOrThrow
   */
  export type ConnectedAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedAccount to fetch.
     */
    where?: ConnectedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectedAccounts to fetch.
     */
    orderBy?: ConnectedAccountOrderByWithRelationInput | ConnectedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectedAccounts.
     */
    cursor?: ConnectedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectedAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectedAccounts.
     */
    distinct?: ConnectedAccountScalarFieldEnum | ConnectedAccountScalarFieldEnum[]
  }

  /**
   * ConnectedAccount findMany
   */
  export type ConnectedAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedAccounts to fetch.
     */
    where?: ConnectedAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectedAccounts to fetch.
     */
    orderBy?: ConnectedAccountOrderByWithRelationInput | ConnectedAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectedAccounts.
     */
    cursor?: ConnectedAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectedAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectedAccounts.
     */
    skip?: number
    distinct?: ConnectedAccountScalarFieldEnum | ConnectedAccountScalarFieldEnum[]
  }

  /**
   * ConnectedAccount create
   */
  export type ConnectedAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a ConnectedAccount.
     */
    data: XOR<ConnectedAccountCreateInput, ConnectedAccountUncheckedCreateInput>
  }

  /**
   * ConnectedAccount createMany
   */
  export type ConnectedAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConnectedAccounts.
     */
    data: ConnectedAccountCreateManyInput | ConnectedAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConnectedAccount createManyAndReturn
   */
  export type ConnectedAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * The data used to create many ConnectedAccounts.
     */
    data: ConnectedAccountCreateManyInput | ConnectedAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConnectedAccount update
   */
  export type ConnectedAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a ConnectedAccount.
     */
    data: XOR<ConnectedAccountUpdateInput, ConnectedAccountUncheckedUpdateInput>
    /**
     * Choose, which ConnectedAccount to update.
     */
    where: ConnectedAccountWhereUniqueInput
  }

  /**
   * ConnectedAccount updateMany
   */
  export type ConnectedAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectedAccounts.
     */
    data: XOR<ConnectedAccountUpdateManyMutationInput, ConnectedAccountUncheckedUpdateManyInput>
    /**
     * Filter which ConnectedAccounts to update
     */
    where?: ConnectedAccountWhereInput
    /**
     * Limit how many ConnectedAccounts to update.
     */
    limit?: number
  }

  /**
   * ConnectedAccount updateManyAndReturn
   */
  export type ConnectedAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * The data used to update ConnectedAccounts.
     */
    data: XOR<ConnectedAccountUpdateManyMutationInput, ConnectedAccountUncheckedUpdateManyInput>
    /**
     * Filter which ConnectedAccounts to update
     */
    where?: ConnectedAccountWhereInput
    /**
     * Limit how many ConnectedAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConnectedAccount upsert
   */
  export type ConnectedAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the ConnectedAccount to update in case it exists.
     */
    where: ConnectedAccountWhereUniqueInput
    /**
     * In case the ConnectedAccount found by the `where` argument doesn't exist, create a new ConnectedAccount with this data.
     */
    create: XOR<ConnectedAccountCreateInput, ConnectedAccountUncheckedCreateInput>
    /**
     * In case the ConnectedAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectedAccountUpdateInput, ConnectedAccountUncheckedUpdateInput>
  }

  /**
   * ConnectedAccount delete
   */
  export type ConnectedAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
    /**
     * Filter which ConnectedAccount to delete.
     */
    where: ConnectedAccountWhereUniqueInput
  }

  /**
   * ConnectedAccount deleteMany
   */
  export type ConnectedAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectedAccounts to delete
     */
    where?: ConnectedAccountWhereInput
    /**
     * Limit how many ConnectedAccounts to delete.
     */
    limit?: number
  }

  /**
   * ConnectedAccount.emailMessages
   */
  export type ConnectedAccount$emailMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    where?: EmailMessageWhereInput
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    cursor?: EmailMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * ConnectedAccount.connectedCalendars
   */
  export type ConnectedAccount$connectedCalendarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    where?: ConnectedCalendarWhereInput
    orderBy?: ConnectedCalendarOrderByWithRelationInput | ConnectedCalendarOrderByWithRelationInput[]
    cursor?: ConnectedCalendarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectedCalendarScalarFieldEnum | ConnectedCalendarScalarFieldEnum[]
  }

  /**
   * ConnectedAccount.calendarEvents
   */
  export type ConnectedAccount$calendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    cursor?: CalendarEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * ConnectedAccount.whatsappSession
   */
  export type ConnectedAccount$whatsappSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    where?: WhatsAppSessionWhereInput
  }

  /**
   * ConnectedAccount.communicationConversations
   */
  export type ConnectedAccount$communicationConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    where?: CommunicationConversationWhereInput
    orderBy?: CommunicationConversationOrderByWithRelationInput | CommunicationConversationOrderByWithRelationInput[]
    cursor?: CommunicationConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationConversationScalarFieldEnum | CommunicationConversationScalarFieldEnum[]
  }

  /**
   * ConnectedAccount.communicationMessages
   */
  export type ConnectedAccount$communicationMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    where?: CommunicationMessageWhereInput
    orderBy?: CommunicationMessageOrderByWithRelationInput | CommunicationMessageOrderByWithRelationInput[]
    cursor?: CommunicationMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationMessageScalarFieldEnum | CommunicationMessageScalarFieldEnum[]
  }

  /**
   * ConnectedAccount without action
   */
  export type ConnectedAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedAccount
     */
    select?: ConnectedAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedAccount
     */
    omit?: ConnectedAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedAccountInclude<ExtArgs> | null
  }


  /**
   * Model EmailMessage
   */

  export type AggregateEmailMessage = {
    _count: EmailMessageCountAggregateOutputType | null
    _min: EmailMessageMinAggregateOutputType | null
    _max: EmailMessageMaxAggregateOutputType | null
  }

  export type EmailMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    connectedAccountId: string | null
    gmailMessageId: string | null
    threadId: string | null
    sender: string | null
    recipients: string | null
    subject: string | null
    snippet: string | null
    bodyText: string | null
    receivedAt: Date | null
    isRead: boolean | null
    labels: string | null
    aiCategory: $Enums.AICategory | null
    aiPriority: $Enums.AIPriority | null
    aiActionable: boolean | null
    aiSummary: string | null
    aiReason: string | null
    aiProcessedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    connectedAccountId: string | null
    gmailMessageId: string | null
    threadId: string | null
    sender: string | null
    recipients: string | null
    subject: string | null
    snippet: string | null
    bodyText: string | null
    receivedAt: Date | null
    isRead: boolean | null
    labels: string | null
    aiCategory: $Enums.AICategory | null
    aiPriority: $Enums.AIPriority | null
    aiActionable: boolean | null
    aiSummary: string | null
    aiReason: string | null
    aiProcessedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailMessageCountAggregateOutputType = {
    id: number
    userId: number
    connectedAccountId: number
    gmailMessageId: number
    threadId: number
    sender: number
    recipients: number
    subject: number
    snippet: number
    bodyText: number
    receivedAt: number
    isRead: number
    labels: number
    aiCategory: number
    aiPriority: number
    aiActionable: number
    aiSummary: number
    aiReason: number
    aiProcessedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailMessageMinAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    gmailMessageId?: true
    threadId?: true
    sender?: true
    recipients?: true
    subject?: true
    snippet?: true
    bodyText?: true
    receivedAt?: true
    isRead?: true
    labels?: true
    aiCategory?: true
    aiPriority?: true
    aiActionable?: true
    aiSummary?: true
    aiReason?: true
    aiProcessedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    gmailMessageId?: true
    threadId?: true
    sender?: true
    recipients?: true
    subject?: true
    snippet?: true
    bodyText?: true
    receivedAt?: true
    isRead?: true
    labels?: true
    aiCategory?: true
    aiPriority?: true
    aiActionable?: true
    aiSummary?: true
    aiReason?: true
    aiProcessedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailMessageCountAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    gmailMessageId?: true
    threadId?: true
    sender?: true
    recipients?: true
    subject?: true
    snippet?: true
    bodyText?: true
    receivedAt?: true
    isRead?: true
    labels?: true
    aiCategory?: true
    aiPriority?: true
    aiActionable?: true
    aiSummary?: true
    aiReason?: true
    aiProcessedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailMessage to aggregate.
     */
    where?: EmailMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailMessages to fetch.
     */
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailMessages
    **/
    _count?: true | EmailMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMessageMaxAggregateInputType
  }

  export type GetEmailMessageAggregateType<T extends EmailMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailMessage[P]>
      : GetScalarType<T[P], AggregateEmailMessage[P]>
  }




  export type EmailMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailMessageWhereInput
    orderBy?: EmailMessageOrderByWithAggregationInput | EmailMessageOrderByWithAggregationInput[]
    by: EmailMessageScalarFieldEnum[] | EmailMessageScalarFieldEnum
    having?: EmailMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailMessageCountAggregateInputType | true
    _min?: EmailMessageMinAggregateInputType
    _max?: EmailMessageMaxAggregateInputType
  }

  export type EmailMessageGroupByOutputType = {
    id: string
    userId: string
    connectedAccountId: string
    gmailMessageId: string
    threadId: string | null
    sender: string | null
    recipients: string | null
    subject: string | null
    snippet: string | null
    bodyText: string | null
    receivedAt: Date | null
    isRead: boolean
    labels: string | null
    aiCategory: $Enums.AICategory | null
    aiPriority: $Enums.AIPriority | null
    aiActionable: boolean | null
    aiSummary: string | null
    aiReason: string | null
    aiProcessedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmailMessageCountAggregateOutputType | null
    _min: EmailMessageMinAggregateOutputType | null
    _max: EmailMessageMaxAggregateOutputType | null
  }

  type GetEmailMessageGroupByPayload<T extends EmailMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailMessageGroupByOutputType[P]>
            : GetScalarType<T[P], EmailMessageGroupByOutputType[P]>
        }
      >
    >


  export type EmailMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    gmailMessageId?: boolean
    threadId?: boolean
    sender?: boolean
    recipients?: boolean
    subject?: boolean
    snippet?: boolean
    bodyText?: boolean
    receivedAt?: boolean
    isRead?: boolean
    labels?: boolean
    aiCategory?: boolean
    aiPriority?: boolean
    aiActionable?: boolean
    aiSummary?: boolean
    aiReason?: boolean
    aiProcessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    gmailMessageId?: boolean
    threadId?: boolean
    sender?: boolean
    recipients?: boolean
    subject?: boolean
    snippet?: boolean
    bodyText?: boolean
    receivedAt?: boolean
    isRead?: boolean
    labels?: boolean
    aiCategory?: boolean
    aiPriority?: boolean
    aiActionable?: boolean
    aiSummary?: boolean
    aiReason?: boolean
    aiProcessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    gmailMessageId?: boolean
    threadId?: boolean
    sender?: boolean
    recipients?: boolean
    subject?: boolean
    snippet?: boolean
    bodyText?: boolean
    receivedAt?: boolean
    isRead?: boolean
    labels?: boolean
    aiCategory?: boolean
    aiPriority?: boolean
    aiActionable?: boolean
    aiSummary?: boolean
    aiReason?: boolean
    aiProcessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailMessage"]>

  export type EmailMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    gmailMessageId?: boolean
    threadId?: boolean
    sender?: boolean
    recipients?: boolean
    subject?: boolean
    snippet?: boolean
    bodyText?: boolean
    receivedAt?: boolean
    isRead?: boolean
    labels?: boolean
    aiCategory?: boolean
    aiPriority?: boolean
    aiActionable?: boolean
    aiSummary?: boolean
    aiReason?: boolean
    aiProcessedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "connectedAccountId" | "gmailMessageId" | "threadId" | "sender" | "recipients" | "subject" | "snippet" | "bodyText" | "receivedAt" | "isRead" | "labels" | "aiCategory" | "aiPriority" | "aiActionable" | "aiSummary" | "aiReason" | "aiProcessedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["emailMessage"]>
  export type EmailMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }
  export type EmailMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }
  export type EmailMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }

  export type $EmailMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      connectedAccount: Prisma.$ConnectedAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      connectedAccountId: string
      gmailMessageId: string
      threadId: string | null
      sender: string | null
      recipients: string | null
      subject: string | null
      snippet: string | null
      bodyText: string | null
      receivedAt: Date | null
      isRead: boolean
      labels: string | null
      aiCategory: $Enums.AICategory | null
      aiPriority: $Enums.AIPriority | null
      aiActionable: boolean | null
      aiSummary: string | null
      aiReason: string | null
      aiProcessedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailMessage"]>
    composites: {}
  }

  type EmailMessageGetPayload<S extends boolean | null | undefined | EmailMessageDefaultArgs> = $Result.GetResult<Prisma.$EmailMessagePayload, S>

  type EmailMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailMessageCountAggregateInputType | true
    }

  export interface EmailMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailMessage'], meta: { name: 'EmailMessage' } }
    /**
     * Find zero or one EmailMessage that matches the filter.
     * @param {EmailMessageFindUniqueArgs} args - Arguments to find a EmailMessage
     * @example
     * // Get one EmailMessage
     * const emailMessage = await prisma.emailMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailMessageFindUniqueArgs>(args: SelectSubset<T, EmailMessageFindUniqueArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EmailMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailMessageFindUniqueOrThrowArgs} args - Arguments to find a EmailMessage
     * @example
     * // Get one EmailMessage
     * const emailMessage = await prisma.emailMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EmailMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageFindFirstArgs} args - Arguments to find a EmailMessage
     * @example
     * // Get one EmailMessage
     * const emailMessage = await prisma.emailMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailMessageFindFirstArgs>(args?: SelectSubset<T, EmailMessageFindFirstArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EmailMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageFindFirstOrThrowArgs} args - Arguments to find a EmailMessage
     * @example
     * // Get one EmailMessage
     * const emailMessage = await prisma.emailMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EmailMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailMessages
     * const emailMessages = await prisma.emailMessage.findMany()
     * 
     * // Get first 10 EmailMessages
     * const emailMessages = await prisma.emailMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailMessageWithIdOnly = await prisma.emailMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailMessageFindManyArgs>(args?: SelectSubset<T, EmailMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EmailMessage.
     * @param {EmailMessageCreateArgs} args - Arguments to create a EmailMessage.
     * @example
     * // Create one EmailMessage
     * const EmailMessage = await prisma.emailMessage.create({
     *   data: {
     *     // ... data to create a EmailMessage
     *   }
     * })
     * 
     */
    create<T extends EmailMessageCreateArgs>(args: SelectSubset<T, EmailMessageCreateArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EmailMessages.
     * @param {EmailMessageCreateManyArgs} args - Arguments to create many EmailMessages.
     * @example
     * // Create many EmailMessages
     * const emailMessage = await prisma.emailMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailMessageCreateManyArgs>(args?: SelectSubset<T, EmailMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailMessages and returns the data saved in the database.
     * @param {EmailMessageCreateManyAndReturnArgs} args - Arguments to create many EmailMessages.
     * @example
     * // Create many EmailMessages
     * const emailMessage = await prisma.emailMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailMessages and only return the `id`
     * const emailMessageWithIdOnly = await prisma.emailMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a EmailMessage.
     * @param {EmailMessageDeleteArgs} args - Arguments to delete one EmailMessage.
     * @example
     * // Delete one EmailMessage
     * const EmailMessage = await prisma.emailMessage.delete({
     *   where: {
     *     // ... filter to delete one EmailMessage
     *   }
     * })
     * 
     */
    delete<T extends EmailMessageDeleteArgs>(args: SelectSubset<T, EmailMessageDeleteArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EmailMessage.
     * @param {EmailMessageUpdateArgs} args - Arguments to update one EmailMessage.
     * @example
     * // Update one EmailMessage
     * const emailMessage = await prisma.emailMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailMessageUpdateArgs>(args: SelectSubset<T, EmailMessageUpdateArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EmailMessages.
     * @param {EmailMessageDeleteManyArgs} args - Arguments to filter EmailMessages to delete.
     * @example
     * // Delete a few EmailMessages
     * const { count } = await prisma.emailMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailMessageDeleteManyArgs>(args?: SelectSubset<T, EmailMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailMessages
     * const emailMessage = await prisma.emailMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailMessageUpdateManyArgs>(args: SelectSubset<T, EmailMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailMessages and returns the data updated in the database.
     * @param {EmailMessageUpdateManyAndReturnArgs} args - Arguments to update many EmailMessages.
     * @example
     * // Update many EmailMessages
     * const emailMessage = await prisma.emailMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailMessages and only return the `id`
     * const emailMessageWithIdOnly = await prisma.emailMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one EmailMessage.
     * @param {EmailMessageUpsertArgs} args - Arguments to update or create a EmailMessage.
     * @example
     * // Update or create a EmailMessage
     * const emailMessage = await prisma.emailMessage.upsert({
     *   create: {
     *     // ... data to create a EmailMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailMessage we want to update
     *   }
     * })
     */
    upsert<T extends EmailMessageUpsertArgs>(args: SelectSubset<T, EmailMessageUpsertArgs<ExtArgs>>): Prisma__EmailMessageClient<$Result.GetResult<Prisma.$EmailMessagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EmailMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageCountArgs} args - Arguments to filter EmailMessages to count.
     * @example
     * // Count the number of EmailMessages
     * const count = await prisma.emailMessage.count({
     *   where: {
     *     // ... the filter for the EmailMessages we want to count
     *   }
     * })
    **/
    count<T extends EmailMessageCountArgs>(
      args?: Subset<T, EmailMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailMessageAggregateArgs>(args: Subset<T, EmailMessageAggregateArgs>): Prisma.PrismaPromise<GetEmailMessageAggregateType<T>>

    /**
     * Group by EmailMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailMessageGroupByArgs} args - Group by arguments.
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
      T extends EmailMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailMessageGroupByArgs['orderBy'] }
        : { orderBy?: EmailMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailMessage model
   */
  readonly fields: EmailMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    connectedAccount<T extends ConnectedAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccountDefaultArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the EmailMessage model
   */ 
  interface EmailMessageFieldRefs {
    readonly id: FieldRef<"EmailMessage", 'String'>
    readonly userId: FieldRef<"EmailMessage", 'String'>
    readonly connectedAccountId: FieldRef<"EmailMessage", 'String'>
    readonly gmailMessageId: FieldRef<"EmailMessage", 'String'>
    readonly threadId: FieldRef<"EmailMessage", 'String'>
    readonly sender: FieldRef<"EmailMessage", 'String'>
    readonly recipients: FieldRef<"EmailMessage", 'String'>
    readonly subject: FieldRef<"EmailMessage", 'String'>
    readonly snippet: FieldRef<"EmailMessage", 'String'>
    readonly bodyText: FieldRef<"EmailMessage", 'String'>
    readonly receivedAt: FieldRef<"EmailMessage", 'DateTime'>
    readonly isRead: FieldRef<"EmailMessage", 'Boolean'>
    readonly labels: FieldRef<"EmailMessage", 'String'>
    readonly aiCategory: FieldRef<"EmailMessage", 'AICategory'>
    readonly aiPriority: FieldRef<"EmailMessage", 'AIPriority'>
    readonly aiActionable: FieldRef<"EmailMessage", 'Boolean'>
    readonly aiSummary: FieldRef<"EmailMessage", 'String'>
    readonly aiReason: FieldRef<"EmailMessage", 'String'>
    readonly aiProcessedAt: FieldRef<"EmailMessage", 'DateTime'>
    readonly createdAt: FieldRef<"EmailMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailMessage findUnique
   */
  export type EmailMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * Filter, which EmailMessage to fetch.
     */
    where: EmailMessageWhereUniqueInput
  }

  /**
   * EmailMessage findUniqueOrThrow
   */
  export type EmailMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * Filter, which EmailMessage to fetch.
     */
    where: EmailMessageWhereUniqueInput
  }

  /**
   * EmailMessage findFirst
   */
  export type EmailMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * Filter, which EmailMessage to fetch.
     */
    where?: EmailMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailMessages to fetch.
     */
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailMessages.
     */
    cursor?: EmailMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailMessages.
     */
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * EmailMessage findFirstOrThrow
   */
  export type EmailMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * Filter, which EmailMessage to fetch.
     */
    where?: EmailMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailMessages to fetch.
     */
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailMessages.
     */
    cursor?: EmailMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailMessages.
     */
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * EmailMessage findMany
   */
  export type EmailMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * Filter, which EmailMessages to fetch.
     */
    where?: EmailMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailMessages to fetch.
     */
    orderBy?: EmailMessageOrderByWithRelationInput | EmailMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailMessages.
     */
    cursor?: EmailMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailMessages.
     */
    skip?: number
    distinct?: EmailMessageScalarFieldEnum | EmailMessageScalarFieldEnum[]
  }

  /**
   * EmailMessage create
   */
  export type EmailMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailMessage.
     */
    data: XOR<EmailMessageCreateInput, EmailMessageUncheckedCreateInput>
  }

  /**
   * EmailMessage createMany
   */
  export type EmailMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailMessages.
     */
    data: EmailMessageCreateManyInput | EmailMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailMessage createManyAndReturn
   */
  export type EmailMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * The data used to create many EmailMessages.
     */
    data: EmailMessageCreateManyInput | EmailMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailMessage update
   */
  export type EmailMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailMessage.
     */
    data: XOR<EmailMessageUpdateInput, EmailMessageUncheckedUpdateInput>
    /**
     * Choose, which EmailMessage to update.
     */
    where: EmailMessageWhereUniqueInput
  }

  /**
   * EmailMessage updateMany
   */
  export type EmailMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailMessages.
     */
    data: XOR<EmailMessageUpdateManyMutationInput, EmailMessageUncheckedUpdateManyInput>
    /**
     * Filter which EmailMessages to update
     */
    where?: EmailMessageWhereInput
    /**
     * Limit how many EmailMessages to update.
     */
    limit?: number
  }

  /**
   * EmailMessage updateManyAndReturn
   */
  export type EmailMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * The data used to update EmailMessages.
     */
    data: XOR<EmailMessageUpdateManyMutationInput, EmailMessageUncheckedUpdateManyInput>
    /**
     * Filter which EmailMessages to update
     */
    where?: EmailMessageWhereInput
    /**
     * Limit how many EmailMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailMessage upsert
   */
  export type EmailMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailMessage to update in case it exists.
     */
    where: EmailMessageWhereUniqueInput
    /**
     * In case the EmailMessage found by the `where` argument doesn't exist, create a new EmailMessage with this data.
     */
    create: XOR<EmailMessageCreateInput, EmailMessageUncheckedCreateInput>
    /**
     * In case the EmailMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailMessageUpdateInput, EmailMessageUncheckedUpdateInput>
  }

  /**
   * EmailMessage delete
   */
  export type EmailMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
    /**
     * Filter which EmailMessage to delete.
     */
    where: EmailMessageWhereUniqueInput
  }

  /**
   * EmailMessage deleteMany
   */
  export type EmailMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailMessages to delete
     */
    where?: EmailMessageWhereInput
    /**
     * Limit how many EmailMessages to delete.
     */
    limit?: number
  }

  /**
   * EmailMessage without action
   */
  export type EmailMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailMessage
     */
    select?: EmailMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailMessage
     */
    omit?: EmailMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailMessageInclude<ExtArgs> | null
  }


  /**
   * Model ConnectedCalendar
   */

  export type AggregateConnectedCalendar = {
    _count: ConnectedCalendarCountAggregateOutputType | null
    _min: ConnectedCalendarMinAggregateOutputType | null
    _max: ConnectedCalendarMaxAggregateOutputType | null
  }

  export type ConnectedCalendarMinAggregateOutputType = {
    id: string | null
    userId: string | null
    connectedAccountId: string | null
    googleCalendarId: string | null
    summary: string | null
    description: string | null
    timeZone: string | null
    isPrimary: boolean | null
    isSelected: boolean | null
    accessRole: string | null
    syncToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectedCalendarMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    connectedAccountId: string | null
    googleCalendarId: string | null
    summary: string | null
    description: string | null
    timeZone: string | null
    isPrimary: boolean | null
    isSelected: boolean | null
    accessRole: string | null
    syncToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectedCalendarCountAggregateOutputType = {
    id: number
    userId: number
    connectedAccountId: number
    googleCalendarId: number
    summary: number
    description: number
    timeZone: number
    isPrimary: number
    isSelected: number
    accessRole: number
    syncToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConnectedCalendarMinAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    googleCalendarId?: true
    summary?: true
    description?: true
    timeZone?: true
    isPrimary?: true
    isSelected?: true
    accessRole?: true
    syncToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectedCalendarMaxAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    googleCalendarId?: true
    summary?: true
    description?: true
    timeZone?: true
    isPrimary?: true
    isSelected?: true
    accessRole?: true
    syncToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectedCalendarCountAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    googleCalendarId?: true
    summary?: true
    description?: true
    timeZone?: true
    isPrimary?: true
    isSelected?: true
    accessRole?: true
    syncToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConnectedCalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectedCalendar to aggregate.
     */
    where?: ConnectedCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectedCalendars to fetch.
     */
    orderBy?: ConnectedCalendarOrderByWithRelationInput | ConnectedCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectedCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectedCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectedCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectedCalendars
    **/
    _count?: true | ConnectedCalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectedCalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectedCalendarMaxAggregateInputType
  }

  export type GetConnectedCalendarAggregateType<T extends ConnectedCalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectedCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectedCalendar[P]>
      : GetScalarType<T[P], AggregateConnectedCalendar[P]>
  }




  export type ConnectedCalendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectedCalendarWhereInput
    orderBy?: ConnectedCalendarOrderByWithAggregationInput | ConnectedCalendarOrderByWithAggregationInput[]
    by: ConnectedCalendarScalarFieldEnum[] | ConnectedCalendarScalarFieldEnum
    having?: ConnectedCalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectedCalendarCountAggregateInputType | true
    _min?: ConnectedCalendarMinAggregateInputType
    _max?: ConnectedCalendarMaxAggregateInputType
  }

  export type ConnectedCalendarGroupByOutputType = {
    id: string
    userId: string
    connectedAccountId: string
    googleCalendarId: string
    summary: string
    description: string | null
    timeZone: string | null
    isPrimary: boolean
    isSelected: boolean
    accessRole: string | null
    syncToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConnectedCalendarCountAggregateOutputType | null
    _min: ConnectedCalendarMinAggregateOutputType | null
    _max: ConnectedCalendarMaxAggregateOutputType | null
  }

  type GetConnectedCalendarGroupByPayload<T extends ConnectedCalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectedCalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectedCalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectedCalendarGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectedCalendarGroupByOutputType[P]>
        }
      >
    >


  export type ConnectedCalendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    googleCalendarId?: boolean
    summary?: boolean
    description?: boolean
    timeZone?: boolean
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: boolean
    syncToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    calendarEvents?: boolean | ConnectedCalendar$calendarEventsArgs<ExtArgs>
    _count?: boolean | ConnectedCalendarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectedCalendar"]>

  export type ConnectedCalendarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    googleCalendarId?: boolean
    summary?: boolean
    description?: boolean
    timeZone?: boolean
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: boolean
    syncToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectedCalendar"]>

  export type ConnectedCalendarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    googleCalendarId?: boolean
    summary?: boolean
    description?: boolean
    timeZone?: boolean
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: boolean
    syncToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectedCalendar"]>

  export type ConnectedCalendarSelectScalar = {
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    googleCalendarId?: boolean
    summary?: boolean
    description?: boolean
    timeZone?: boolean
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: boolean
    syncToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConnectedCalendarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "connectedAccountId" | "googleCalendarId" | "summary" | "description" | "timeZone" | "isPrimary" | "isSelected" | "accessRole" | "syncToken" | "createdAt" | "updatedAt", ExtArgs["result"]["connectedCalendar"]>
  export type ConnectedCalendarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    calendarEvents?: boolean | ConnectedCalendar$calendarEventsArgs<ExtArgs>
    _count?: boolean | ConnectedCalendarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConnectedCalendarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }
  export type ConnectedCalendarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }

  export type $ConnectedCalendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectedCalendar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      connectedAccount: Prisma.$ConnectedAccountPayload<ExtArgs>
      calendarEvents: Prisma.$CalendarEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      connectedAccountId: string
      googleCalendarId: string
      summary: string
      description: string | null
      timeZone: string | null
      isPrimary: boolean
      isSelected: boolean
      accessRole: string | null
      syncToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["connectedCalendar"]>
    composites: {}
  }

  type ConnectedCalendarGetPayload<S extends boolean | null | undefined | ConnectedCalendarDefaultArgs> = $Result.GetResult<Prisma.$ConnectedCalendarPayload, S>

  type ConnectedCalendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectedCalendarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectedCalendarCountAggregateInputType | true
    }

  export interface ConnectedCalendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectedCalendar'], meta: { name: 'ConnectedCalendar' } }
    /**
     * Find zero or one ConnectedCalendar that matches the filter.
     * @param {ConnectedCalendarFindUniqueArgs} args - Arguments to find a ConnectedCalendar
     * @example
     * // Get one ConnectedCalendar
     * const connectedCalendar = await prisma.connectedCalendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectedCalendarFindUniqueArgs>(args: SelectSubset<T, ConnectedCalendarFindUniqueArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ConnectedCalendar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectedCalendarFindUniqueOrThrowArgs} args - Arguments to find a ConnectedCalendar
     * @example
     * // Get one ConnectedCalendar
     * const connectedCalendar = await prisma.connectedCalendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectedCalendarFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectedCalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ConnectedCalendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedCalendarFindFirstArgs} args - Arguments to find a ConnectedCalendar
     * @example
     * // Get one ConnectedCalendar
     * const connectedCalendar = await prisma.connectedCalendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectedCalendarFindFirstArgs>(args?: SelectSubset<T, ConnectedCalendarFindFirstArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ConnectedCalendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedCalendarFindFirstOrThrowArgs} args - Arguments to find a ConnectedCalendar
     * @example
     * // Get one ConnectedCalendar
     * const connectedCalendar = await prisma.connectedCalendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectedCalendarFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectedCalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ConnectedCalendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedCalendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectedCalendars
     * const connectedCalendars = await prisma.connectedCalendar.findMany()
     * 
     * // Get first 10 ConnectedCalendars
     * const connectedCalendars = await prisma.connectedCalendar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectedCalendarWithIdOnly = await prisma.connectedCalendar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectedCalendarFindManyArgs>(args?: SelectSubset<T, ConnectedCalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ConnectedCalendar.
     * @param {ConnectedCalendarCreateArgs} args - Arguments to create a ConnectedCalendar.
     * @example
     * // Create one ConnectedCalendar
     * const ConnectedCalendar = await prisma.connectedCalendar.create({
     *   data: {
     *     // ... data to create a ConnectedCalendar
     *   }
     * })
     * 
     */
    create<T extends ConnectedCalendarCreateArgs>(args: SelectSubset<T, ConnectedCalendarCreateArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ConnectedCalendars.
     * @param {ConnectedCalendarCreateManyArgs} args - Arguments to create many ConnectedCalendars.
     * @example
     * // Create many ConnectedCalendars
     * const connectedCalendar = await prisma.connectedCalendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectedCalendarCreateManyArgs>(args?: SelectSubset<T, ConnectedCalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConnectedCalendars and returns the data saved in the database.
     * @param {ConnectedCalendarCreateManyAndReturnArgs} args - Arguments to create many ConnectedCalendars.
     * @example
     * // Create many ConnectedCalendars
     * const connectedCalendar = await prisma.connectedCalendar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConnectedCalendars and only return the `id`
     * const connectedCalendarWithIdOnly = await prisma.connectedCalendar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectedCalendarCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectedCalendarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ConnectedCalendar.
     * @param {ConnectedCalendarDeleteArgs} args - Arguments to delete one ConnectedCalendar.
     * @example
     * // Delete one ConnectedCalendar
     * const ConnectedCalendar = await prisma.connectedCalendar.delete({
     *   where: {
     *     // ... filter to delete one ConnectedCalendar
     *   }
     * })
     * 
     */
    delete<T extends ConnectedCalendarDeleteArgs>(args: SelectSubset<T, ConnectedCalendarDeleteArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ConnectedCalendar.
     * @param {ConnectedCalendarUpdateArgs} args - Arguments to update one ConnectedCalendar.
     * @example
     * // Update one ConnectedCalendar
     * const connectedCalendar = await prisma.connectedCalendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectedCalendarUpdateArgs>(args: SelectSubset<T, ConnectedCalendarUpdateArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ConnectedCalendars.
     * @param {ConnectedCalendarDeleteManyArgs} args - Arguments to filter ConnectedCalendars to delete.
     * @example
     * // Delete a few ConnectedCalendars
     * const { count } = await prisma.connectedCalendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectedCalendarDeleteManyArgs>(args?: SelectSubset<T, ConnectedCalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectedCalendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedCalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectedCalendars
     * const connectedCalendar = await prisma.connectedCalendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectedCalendarUpdateManyArgs>(args: SelectSubset<T, ConnectedCalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectedCalendars and returns the data updated in the database.
     * @param {ConnectedCalendarUpdateManyAndReturnArgs} args - Arguments to update many ConnectedCalendars.
     * @example
     * // Update many ConnectedCalendars
     * const connectedCalendar = await prisma.connectedCalendar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConnectedCalendars and only return the `id`
     * const connectedCalendarWithIdOnly = await prisma.connectedCalendar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectedCalendarUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectedCalendarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ConnectedCalendar.
     * @param {ConnectedCalendarUpsertArgs} args - Arguments to update or create a ConnectedCalendar.
     * @example
     * // Update or create a ConnectedCalendar
     * const connectedCalendar = await prisma.connectedCalendar.upsert({
     *   create: {
     *     // ... data to create a ConnectedCalendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectedCalendar we want to update
     *   }
     * })
     */
    upsert<T extends ConnectedCalendarUpsertArgs>(args: SelectSubset<T, ConnectedCalendarUpsertArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ConnectedCalendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedCalendarCountArgs} args - Arguments to filter ConnectedCalendars to count.
     * @example
     * // Count the number of ConnectedCalendars
     * const count = await prisma.connectedCalendar.count({
     *   where: {
     *     // ... the filter for the ConnectedCalendars we want to count
     *   }
     * })
    **/
    count<T extends ConnectedCalendarCountArgs>(
      args?: Subset<T, ConnectedCalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectedCalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectedCalendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedCalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectedCalendarAggregateArgs>(args: Subset<T, ConnectedCalendarAggregateArgs>): Prisma.PrismaPromise<GetConnectedCalendarAggregateType<T>>

    /**
     * Group by ConnectedCalendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectedCalendarGroupByArgs} args - Group by arguments.
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
      T extends ConnectedCalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectedCalendarGroupByArgs['orderBy'] }
        : { orderBy?: ConnectedCalendarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectedCalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectedCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectedCalendar model
   */
  readonly fields: ConnectedCalendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectedCalendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectedCalendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    connectedAccount<T extends ConnectedAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccountDefaultArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    calendarEvents<T extends ConnectedCalendar$calendarEventsArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedCalendar$calendarEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the ConnectedCalendar model
   */ 
  interface ConnectedCalendarFieldRefs {
    readonly id: FieldRef<"ConnectedCalendar", 'String'>
    readonly userId: FieldRef<"ConnectedCalendar", 'String'>
    readonly connectedAccountId: FieldRef<"ConnectedCalendar", 'String'>
    readonly googleCalendarId: FieldRef<"ConnectedCalendar", 'String'>
    readonly summary: FieldRef<"ConnectedCalendar", 'String'>
    readonly description: FieldRef<"ConnectedCalendar", 'String'>
    readonly timeZone: FieldRef<"ConnectedCalendar", 'String'>
    readonly isPrimary: FieldRef<"ConnectedCalendar", 'Boolean'>
    readonly isSelected: FieldRef<"ConnectedCalendar", 'Boolean'>
    readonly accessRole: FieldRef<"ConnectedCalendar", 'String'>
    readonly syncToken: FieldRef<"ConnectedCalendar", 'String'>
    readonly createdAt: FieldRef<"ConnectedCalendar", 'DateTime'>
    readonly updatedAt: FieldRef<"ConnectedCalendar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConnectedCalendar findUnique
   */
  export type ConnectedCalendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedCalendar to fetch.
     */
    where: ConnectedCalendarWhereUniqueInput
  }

  /**
   * ConnectedCalendar findUniqueOrThrow
   */
  export type ConnectedCalendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedCalendar to fetch.
     */
    where: ConnectedCalendarWhereUniqueInput
  }

  /**
   * ConnectedCalendar findFirst
   */
  export type ConnectedCalendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedCalendar to fetch.
     */
    where?: ConnectedCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectedCalendars to fetch.
     */
    orderBy?: ConnectedCalendarOrderByWithRelationInput | ConnectedCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectedCalendars.
     */
    cursor?: ConnectedCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectedCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectedCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectedCalendars.
     */
    distinct?: ConnectedCalendarScalarFieldEnum | ConnectedCalendarScalarFieldEnum[]
  }

  /**
   * ConnectedCalendar findFirstOrThrow
   */
  export type ConnectedCalendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedCalendar to fetch.
     */
    where?: ConnectedCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectedCalendars to fetch.
     */
    orderBy?: ConnectedCalendarOrderByWithRelationInput | ConnectedCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectedCalendars.
     */
    cursor?: ConnectedCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectedCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectedCalendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectedCalendars.
     */
    distinct?: ConnectedCalendarScalarFieldEnum | ConnectedCalendarScalarFieldEnum[]
  }

  /**
   * ConnectedCalendar findMany
   */
  export type ConnectedCalendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * Filter, which ConnectedCalendars to fetch.
     */
    where?: ConnectedCalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectedCalendars to fetch.
     */
    orderBy?: ConnectedCalendarOrderByWithRelationInput | ConnectedCalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectedCalendars.
     */
    cursor?: ConnectedCalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectedCalendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectedCalendars.
     */
    skip?: number
    distinct?: ConnectedCalendarScalarFieldEnum | ConnectedCalendarScalarFieldEnum[]
  }

  /**
   * ConnectedCalendar create
   */
  export type ConnectedCalendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * The data needed to create a ConnectedCalendar.
     */
    data: XOR<ConnectedCalendarCreateInput, ConnectedCalendarUncheckedCreateInput>
  }

  /**
   * ConnectedCalendar createMany
   */
  export type ConnectedCalendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConnectedCalendars.
     */
    data: ConnectedCalendarCreateManyInput | ConnectedCalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConnectedCalendar createManyAndReturn
   */
  export type ConnectedCalendarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * The data used to create many ConnectedCalendars.
     */
    data: ConnectedCalendarCreateManyInput | ConnectedCalendarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConnectedCalendar update
   */
  export type ConnectedCalendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * The data needed to update a ConnectedCalendar.
     */
    data: XOR<ConnectedCalendarUpdateInput, ConnectedCalendarUncheckedUpdateInput>
    /**
     * Choose, which ConnectedCalendar to update.
     */
    where: ConnectedCalendarWhereUniqueInput
  }

  /**
   * ConnectedCalendar updateMany
   */
  export type ConnectedCalendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectedCalendars.
     */
    data: XOR<ConnectedCalendarUpdateManyMutationInput, ConnectedCalendarUncheckedUpdateManyInput>
    /**
     * Filter which ConnectedCalendars to update
     */
    where?: ConnectedCalendarWhereInput
    /**
     * Limit how many ConnectedCalendars to update.
     */
    limit?: number
  }

  /**
   * ConnectedCalendar updateManyAndReturn
   */
  export type ConnectedCalendarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * The data used to update ConnectedCalendars.
     */
    data: XOR<ConnectedCalendarUpdateManyMutationInput, ConnectedCalendarUncheckedUpdateManyInput>
    /**
     * Filter which ConnectedCalendars to update
     */
    where?: ConnectedCalendarWhereInput
    /**
     * Limit how many ConnectedCalendars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConnectedCalendar upsert
   */
  export type ConnectedCalendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * The filter to search for the ConnectedCalendar to update in case it exists.
     */
    where: ConnectedCalendarWhereUniqueInput
    /**
     * In case the ConnectedCalendar found by the `where` argument doesn't exist, create a new ConnectedCalendar with this data.
     */
    create: XOR<ConnectedCalendarCreateInput, ConnectedCalendarUncheckedCreateInput>
    /**
     * In case the ConnectedCalendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectedCalendarUpdateInput, ConnectedCalendarUncheckedUpdateInput>
  }

  /**
   * ConnectedCalendar delete
   */
  export type ConnectedCalendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
    /**
     * Filter which ConnectedCalendar to delete.
     */
    where: ConnectedCalendarWhereUniqueInput
  }

  /**
   * ConnectedCalendar deleteMany
   */
  export type ConnectedCalendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectedCalendars to delete
     */
    where?: ConnectedCalendarWhereInput
    /**
     * Limit how many ConnectedCalendars to delete.
     */
    limit?: number
  }

  /**
   * ConnectedCalendar.calendarEvents
   */
  export type ConnectedCalendar$calendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    cursor?: CalendarEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * ConnectedCalendar without action
   */
  export type ConnectedCalendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectedCalendar
     */
    select?: ConnectedCalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectedCalendar
     */
    omit?: ConnectedCalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectedCalendarInclude<ExtArgs> | null
  }


  /**
   * Model CalendarEvent
   */

  export type AggregateCalendarEvent = {
    _count: CalendarEventCountAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  export type CalendarEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    connectedAccountId: string | null
    calendarId: string | null
    googleEventId: string | null
    title: string | null
    description: string | null
    location: string | null
    startTime: Date | null
    endTime: Date | null
    isAllDay: boolean | null
    timeZone: string | null
    status: string | null
    htmlLink: string | null
    organizer: string | null
    attendees: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    connectedAccountId: string | null
    calendarId: string | null
    googleEventId: string | null
    title: string | null
    description: string | null
    location: string | null
    startTime: Date | null
    endTime: Date | null
    isAllDay: boolean | null
    timeZone: string | null
    status: string | null
    htmlLink: string | null
    organizer: string | null
    attendees: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarEventCountAggregateOutputType = {
    id: number
    userId: number
    connectedAccountId: number
    calendarId: number
    googleEventId: number
    title: number
    description: number
    location: number
    startTime: number
    endTime: number
    isAllDay: number
    timeZone: number
    status: number
    htmlLink: number
    organizer: number
    attendees: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalendarEventMinAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    calendarId?: true
    googleEventId?: true
    title?: true
    description?: true
    location?: true
    startTime?: true
    endTime?: true
    isAllDay?: true
    timeZone?: true
    status?: true
    htmlLink?: true
    organizer?: true
    attendees?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarEventMaxAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    calendarId?: true
    googleEventId?: true
    title?: true
    description?: true
    location?: true
    startTime?: true
    endTime?: true
    isAllDay?: true
    timeZone?: true
    status?: true
    htmlLink?: true
    organizer?: true
    attendees?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarEventCountAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    calendarId?: true
    googleEventId?: true
    title?: true
    description?: true
    location?: true
    startTime?: true
    endTime?: true
    isAllDay?: true
    timeZone?: true
    status?: true
    htmlLink?: true
    organizer?: true
    attendees?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalendarEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvent to aggregate.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarEvents
    **/
    _count?: true | CalendarEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarEventMaxAggregateInputType
  }

  export type GetCalendarEventAggregateType<T extends CalendarEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarEvent[P]>
      : GetScalarType<T[P], AggregateCalendarEvent[P]>
  }




  export type CalendarEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithAggregationInput | CalendarEventOrderByWithAggregationInput[]
    by: CalendarEventScalarFieldEnum[] | CalendarEventScalarFieldEnum
    having?: CalendarEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarEventCountAggregateInputType | true
    _min?: CalendarEventMinAggregateInputType
    _max?: CalendarEventMaxAggregateInputType
  }

  export type CalendarEventGroupByOutputType = {
    id: string
    userId: string
    connectedAccountId: string
    calendarId: string
    googleEventId: string
    title: string
    description: string | null
    location: string | null
    startTime: Date
    endTime: Date
    isAllDay: boolean
    timeZone: string | null
    status: string | null
    htmlLink: string | null
    organizer: string | null
    attendees: string | null
    createdAt: Date
    updatedAt: Date
    _count: CalendarEventCountAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  type GetCalendarEventGroupByPayload<T extends CalendarEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
        }
      >
    >


  export type CalendarEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    calendarId?: boolean
    googleEventId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startTime?: boolean
    endTime?: boolean
    isAllDay?: boolean
    timeZone?: boolean
    status?: boolean
    htmlLink?: boolean
    organizer?: boolean
    attendees?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    calendar?: boolean | ConnectedCalendarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    calendarId?: boolean
    googleEventId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startTime?: boolean
    endTime?: boolean
    isAllDay?: boolean
    timeZone?: boolean
    status?: boolean
    htmlLink?: boolean
    organizer?: boolean
    attendees?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    calendar?: boolean | ConnectedCalendarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    calendarId?: boolean
    googleEventId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startTime?: boolean
    endTime?: boolean
    isAllDay?: boolean
    timeZone?: boolean
    status?: boolean
    htmlLink?: boolean
    organizer?: boolean
    attendees?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    calendar?: boolean | ConnectedCalendarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectScalar = {
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    calendarId?: boolean
    googleEventId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startTime?: boolean
    endTime?: boolean
    isAllDay?: boolean
    timeZone?: boolean
    status?: boolean
    htmlLink?: boolean
    organizer?: boolean
    attendees?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalendarEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "connectedAccountId" | "calendarId" | "googleEventId" | "title" | "description" | "location" | "startTime" | "endTime" | "isAllDay" | "timeZone" | "status" | "htmlLink" | "organizer" | "attendees" | "createdAt" | "updatedAt", ExtArgs["result"]["calendarEvent"]>
  export type CalendarEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    calendar?: boolean | ConnectedCalendarDefaultArgs<ExtArgs>
  }
  export type CalendarEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    calendar?: boolean | ConnectedCalendarDefaultArgs<ExtArgs>
  }
  export type CalendarEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    calendar?: boolean | ConnectedCalendarDefaultArgs<ExtArgs>
  }

  export type $CalendarEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      connectedAccount: Prisma.$ConnectedAccountPayload<ExtArgs>
      calendar: Prisma.$ConnectedCalendarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      connectedAccountId: string
      calendarId: string
      googleEventId: string
      title: string
      description: string | null
      location: string | null
      startTime: Date
      endTime: Date
      isAllDay: boolean
      timeZone: string | null
      status: string | null
      htmlLink: string | null
      organizer: string | null
      attendees: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calendarEvent"]>
    composites: {}
  }

  type CalendarEventGetPayload<S extends boolean | null | undefined | CalendarEventDefaultArgs> = $Result.GetResult<Prisma.$CalendarEventPayload, S>

  type CalendarEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarEventCountAggregateInputType | true
    }

  export interface CalendarEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarEvent'], meta: { name: 'CalendarEvent' } }
    /**
     * Find zero or one CalendarEvent that matches the filter.
     * @param {CalendarEventFindUniqueArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarEventFindUniqueArgs>(args: SelectSubset<T, CalendarEventFindUniqueArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CalendarEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarEventFindUniqueOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CalendarEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarEventFindFirstArgs>(args?: SelectSubset<T, CalendarEventFindFirstArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CalendarEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CalendarEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany()
     * 
     * // Get first 10 CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarEventFindManyArgs>(args?: SelectSubset<T, CalendarEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CalendarEvent.
     * @param {CalendarEventCreateArgs} args - Arguments to create a CalendarEvent.
     * @example
     * // Create one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.create({
     *   data: {
     *     // ... data to create a CalendarEvent
     *   }
     * })
     * 
     */
    create<T extends CalendarEventCreateArgs>(args: SelectSubset<T, CalendarEventCreateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CalendarEvents.
     * @param {CalendarEventCreateManyArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarEventCreateManyArgs>(args?: SelectSubset<T, CalendarEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarEvents and returns the data saved in the database.
     * @param {CalendarEventCreateManyAndReturnArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CalendarEvent.
     * @param {CalendarEventDeleteArgs} args - Arguments to delete one CalendarEvent.
     * @example
     * // Delete one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.delete({
     *   where: {
     *     // ... filter to delete one CalendarEvent
     *   }
     * })
     * 
     */
    delete<T extends CalendarEventDeleteArgs>(args: SelectSubset<T, CalendarEventDeleteArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CalendarEvent.
     * @param {CalendarEventUpdateArgs} args - Arguments to update one CalendarEvent.
     * @example
     * // Update one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarEventUpdateArgs>(args: SelectSubset<T, CalendarEventUpdateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CalendarEvents.
     * @param {CalendarEventDeleteManyArgs} args - Arguments to filter CalendarEvents to delete.
     * @example
     * // Delete a few CalendarEvents
     * const { count } = await prisma.calendarEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarEventDeleteManyArgs>(args?: SelectSubset<T, CalendarEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarEventUpdateManyArgs>(args: SelectSubset<T, CalendarEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents and returns the data updated in the database.
     * @param {CalendarEventUpdateManyAndReturnArgs} args - Arguments to update many CalendarEvents.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CalendarEventUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CalendarEvent.
     * @param {CalendarEventUpsertArgs} args - Arguments to update or create a CalendarEvent.
     * @example
     * // Update or create a CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.upsert({
     *   create: {
     *     // ... data to create a CalendarEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarEvent we want to update
     *   }
     * })
     */
    upsert<T extends CalendarEventUpsertArgs>(args: SelectSubset<T, CalendarEventUpsertArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventCountArgs} args - Arguments to filter CalendarEvents to count.
     * @example
     * // Count the number of CalendarEvents
     * const count = await prisma.calendarEvent.count({
     *   where: {
     *     // ... the filter for the CalendarEvents we want to count
     *   }
     * })
    **/
    count<T extends CalendarEventCountArgs>(
      args?: Subset<T, CalendarEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendarEventAggregateArgs>(args: Subset<T, CalendarEventAggregateArgs>): Prisma.PrismaPromise<GetCalendarEventAggregateType<T>>

    /**
     * Group by CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventGroupByArgs} args - Group by arguments.
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
      T extends CalendarEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarEventGroupByArgs['orderBy'] }
        : { orderBy?: CalendarEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalendarEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarEvent model
   */
  readonly fields: CalendarEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    connectedAccount<T extends ConnectedAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccountDefaultArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    calendar<T extends ConnectedCalendarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedCalendarDefaultArgs<ExtArgs>>): Prisma__ConnectedCalendarClient<$Result.GetResult<Prisma.$ConnectedCalendarPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the CalendarEvent model
   */ 
  interface CalendarEventFieldRefs {
    readonly id: FieldRef<"CalendarEvent", 'String'>
    readonly userId: FieldRef<"CalendarEvent", 'String'>
    readonly connectedAccountId: FieldRef<"CalendarEvent", 'String'>
    readonly calendarId: FieldRef<"CalendarEvent", 'String'>
    readonly googleEventId: FieldRef<"CalendarEvent", 'String'>
    readonly title: FieldRef<"CalendarEvent", 'String'>
    readonly description: FieldRef<"CalendarEvent", 'String'>
    readonly location: FieldRef<"CalendarEvent", 'String'>
    readonly startTime: FieldRef<"CalendarEvent", 'DateTime'>
    readonly endTime: FieldRef<"CalendarEvent", 'DateTime'>
    readonly isAllDay: FieldRef<"CalendarEvent", 'Boolean'>
    readonly timeZone: FieldRef<"CalendarEvent", 'String'>
    readonly status: FieldRef<"CalendarEvent", 'String'>
    readonly htmlLink: FieldRef<"CalendarEvent", 'String'>
    readonly organizer: FieldRef<"CalendarEvent", 'String'>
    readonly attendees: FieldRef<"CalendarEvent", 'String'>
    readonly createdAt: FieldRef<"CalendarEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"CalendarEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalendarEvent findUnique
   */
  export type CalendarEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findUniqueOrThrow
   */
  export type CalendarEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findFirst
   */
  export type CalendarEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findFirstOrThrow
   */
  export type CalendarEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findMany
   */
  export type CalendarEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvents to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent create
   */
  export type CalendarEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The data needed to create a CalendarEvent.
     */
    data: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
  }

  /**
   * CalendarEvent createMany
   */
  export type CalendarEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarEvent createManyAndReturn
   */
  export type CalendarEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarEvent update
   */
  export type CalendarEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The data needed to update a CalendarEvent.
     */
    data: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
    /**
     * Choose, which CalendarEvent to update.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent updateMany
   */
  export type CalendarEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
  }

  /**
   * CalendarEvent updateManyAndReturn
   */
  export type CalendarEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarEvent upsert
   */
  export type CalendarEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The filter to search for the CalendarEvent to update in case it exists.
     */
    where: CalendarEventWhereUniqueInput
    /**
     * In case the CalendarEvent found by the `where` argument doesn't exist, create a new CalendarEvent with this data.
     */
    create: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
    /**
     * In case the CalendarEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
  }

  /**
   * CalendarEvent delete
   */
  export type CalendarEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter which CalendarEvent to delete.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent deleteMany
   */
  export type CalendarEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvents to delete
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to delete.
     */
    limit?: number
  }

  /**
   * CalendarEvent without action
   */
  export type CalendarEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
  }


  /**
   * Model WhatsAppSession
   */

  export type AggregateWhatsAppSession = {
    _count: WhatsAppSessionCountAggregateOutputType | null
    _min: WhatsAppSessionMinAggregateOutputType | null
    _max: WhatsAppSessionMaxAggregateOutputType | null
  }

  export type WhatsAppSessionMinAggregateOutputType = {
    id: string | null
    connectedAccountId: string | null
    creds: string | null
    keys: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppSessionMaxAggregateOutputType = {
    id: string | null
    connectedAccountId: string | null
    creds: string | null
    keys: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhatsAppSessionCountAggregateOutputType = {
    id: number
    connectedAccountId: number
    creds: number
    keys: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhatsAppSessionMinAggregateInputType = {
    id?: true
    connectedAccountId?: true
    creds?: true
    keys?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppSessionMaxAggregateInputType = {
    id?: true
    connectedAccountId?: true
    creds?: true
    keys?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhatsAppSessionCountAggregateInputType = {
    id?: true
    connectedAccountId?: true
    creds?: true
    keys?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhatsAppSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppSession to aggregate.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppSessions
    **/
    _count?: true | WhatsAppSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppSessionMaxAggregateInputType
  }

  export type GetWhatsAppSessionAggregateType<T extends WhatsAppSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppSession[P]>
      : GetScalarType<T[P], AggregateWhatsAppSession[P]>
  }




  export type WhatsAppSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppSessionWhereInput
    orderBy?: WhatsAppSessionOrderByWithAggregationInput | WhatsAppSessionOrderByWithAggregationInput[]
    by: WhatsAppSessionScalarFieldEnum[] | WhatsAppSessionScalarFieldEnum
    having?: WhatsAppSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppSessionCountAggregateInputType | true
    _min?: WhatsAppSessionMinAggregateInputType
    _max?: WhatsAppSessionMaxAggregateInputType
  }

  export type WhatsAppSessionGroupByOutputType = {
    id: string
    connectedAccountId: string
    creds: string
    keys: string
    createdAt: Date
    updatedAt: Date
    _count: WhatsAppSessionCountAggregateOutputType | null
    _min: WhatsAppSessionMinAggregateOutputType | null
    _max: WhatsAppSessionMaxAggregateOutputType | null
  }

  type GetWhatsAppSessionGroupByPayload<T extends WhatsAppSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppSessionGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connectedAccountId?: boolean
    creds?: boolean
    keys?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppSession"]>

  export type WhatsAppSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connectedAccountId?: boolean
    creds?: boolean
    keys?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppSession"]>

  export type WhatsAppSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connectedAccountId?: boolean
    creds?: boolean
    keys?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppSession"]>

  export type WhatsAppSessionSelectScalar = {
    id?: boolean
    connectedAccountId?: boolean
    creds?: boolean
    keys?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhatsAppSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "connectedAccountId" | "creds" | "keys" | "createdAt" | "updatedAt", ExtArgs["result"]["whatsAppSession"]>
  export type WhatsAppSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }
  export type WhatsAppSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }
  export type WhatsAppSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }

  export type $WhatsAppSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppSession"
    objects: {
      connectedAccount: Prisma.$ConnectedAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      connectedAccountId: string
      creds: string
      keys: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whatsAppSession"]>
    composites: {}
  }

  type WhatsAppSessionGetPayload<S extends boolean | null | undefined | WhatsAppSessionDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppSessionPayload, S>

  type WhatsAppSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhatsAppSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhatsAppSessionCountAggregateInputType | true
    }

  export interface WhatsAppSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppSession'], meta: { name: 'WhatsAppSession' } }
    /**
     * Find zero or one WhatsAppSession that matches the filter.
     * @param {WhatsAppSessionFindUniqueArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppSessionFindUniqueArgs>(args: SelectSubset<T, WhatsAppSessionFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one WhatsAppSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhatsAppSessionFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first WhatsAppSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindFirstArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppSessionFindFirstArgs>(args?: SelectSubset<T, WhatsAppSessionFindFirstArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first WhatsAppSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindFirstOrThrowArgs} args - Arguments to find a WhatsAppSession
     * @example
     * // Get one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more WhatsAppSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppSessions
     * const whatsAppSessions = await prisma.whatsAppSession.findMany()
     * 
     * // Get first 10 WhatsAppSessions
     * const whatsAppSessions = await prisma.whatsAppSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppSessionWithIdOnly = await prisma.whatsAppSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppSessionFindManyArgs>(args?: SelectSubset<T, WhatsAppSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a WhatsAppSession.
     * @param {WhatsAppSessionCreateArgs} args - Arguments to create a WhatsAppSession.
     * @example
     * // Create one WhatsAppSession
     * const WhatsAppSession = await prisma.whatsAppSession.create({
     *   data: {
     *     // ... data to create a WhatsAppSession
     *   }
     * })
     * 
     */
    create<T extends WhatsAppSessionCreateArgs>(args: SelectSubset<T, WhatsAppSessionCreateArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many WhatsAppSessions.
     * @param {WhatsAppSessionCreateManyArgs} args - Arguments to create many WhatsAppSessions.
     * @example
     * // Create many WhatsAppSessions
     * const whatsAppSession = await prisma.whatsAppSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppSessionCreateManyArgs>(args?: SelectSubset<T, WhatsAppSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsAppSessions and returns the data saved in the database.
     * @param {WhatsAppSessionCreateManyAndReturnArgs} args - Arguments to create many WhatsAppSessions.
     * @example
     * // Create many WhatsAppSessions
     * const whatsAppSession = await prisma.whatsAppSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsAppSessions and only return the `id`
     * const whatsAppSessionWithIdOnly = await prisma.whatsAppSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsAppSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsAppSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a WhatsAppSession.
     * @param {WhatsAppSessionDeleteArgs} args - Arguments to delete one WhatsAppSession.
     * @example
     * // Delete one WhatsAppSession
     * const WhatsAppSession = await prisma.whatsAppSession.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppSession
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppSessionDeleteArgs>(args: SelectSubset<T, WhatsAppSessionDeleteArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one WhatsAppSession.
     * @param {WhatsAppSessionUpdateArgs} args - Arguments to update one WhatsAppSession.
     * @example
     * // Update one WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppSessionUpdateArgs>(args: SelectSubset<T, WhatsAppSessionUpdateArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more WhatsAppSessions.
     * @param {WhatsAppSessionDeleteManyArgs} args - Arguments to filter WhatsAppSessions to delete.
     * @example
     * // Delete a few WhatsAppSessions
     * const { count } = await prisma.whatsAppSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppSessionDeleteManyArgs>(args?: SelectSubset<T, WhatsAppSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppSessions
     * const whatsAppSession = await prisma.whatsAppSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppSessionUpdateManyArgs>(args: SelectSubset<T, WhatsAppSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppSessions and returns the data updated in the database.
     * @param {WhatsAppSessionUpdateManyAndReturnArgs} args - Arguments to update many WhatsAppSessions.
     * @example
     * // Update many WhatsAppSessions
     * const whatsAppSession = await prisma.whatsAppSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhatsAppSessions and only return the `id`
     * const whatsAppSessionWithIdOnly = await prisma.whatsAppSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhatsAppSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, WhatsAppSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one WhatsAppSession.
     * @param {WhatsAppSessionUpsertArgs} args - Arguments to update or create a WhatsAppSession.
     * @example
     * // Update or create a WhatsAppSession
     * const whatsAppSession = await prisma.whatsAppSession.upsert({
     *   create: {
     *     // ... data to create a WhatsAppSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppSession we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppSessionUpsertArgs>(args: SelectSubset<T, WhatsAppSessionUpsertArgs<ExtArgs>>): Prisma__WhatsAppSessionClient<$Result.GetResult<Prisma.$WhatsAppSessionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of WhatsAppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionCountArgs} args - Arguments to filter WhatsAppSessions to count.
     * @example
     * // Count the number of WhatsAppSessions
     * const count = await prisma.whatsAppSession.count({
     *   where: {
     *     // ... the filter for the WhatsAppSessions we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppSessionCountArgs>(
      args?: Subset<T, WhatsAppSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhatsAppSessionAggregateArgs>(args: Subset<T, WhatsAppSessionAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppSessionAggregateType<T>>

    /**
     * Group by WhatsAppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppSessionGroupByArgs} args - Group by arguments.
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
      T extends WhatsAppSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppSessionGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhatsAppSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppSession model
   */
  readonly fields: WhatsAppSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    connectedAccount<T extends ConnectedAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccountDefaultArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the WhatsAppSession model
   */ 
  interface WhatsAppSessionFieldRefs {
    readonly id: FieldRef<"WhatsAppSession", 'String'>
    readonly connectedAccountId: FieldRef<"WhatsAppSession", 'String'>
    readonly creds: FieldRef<"WhatsAppSession", 'String'>
    readonly keys: FieldRef<"WhatsAppSession", 'String'>
    readonly createdAt: FieldRef<"WhatsAppSession", 'DateTime'>
    readonly updatedAt: FieldRef<"WhatsAppSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppSession findUnique
   */
  export type WhatsAppSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession findUniqueOrThrow
   */
  export type WhatsAppSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession findFirst
   */
  export type WhatsAppSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppSessions.
     */
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession findFirstOrThrow
   */
  export type WhatsAppSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSession to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppSessions.
     */
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession findMany
   */
  export type WhatsAppSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppSessions to fetch.
     */
    where?: WhatsAppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppSessions to fetch.
     */
    orderBy?: WhatsAppSessionOrderByWithRelationInput | WhatsAppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppSessions.
     */
    cursor?: WhatsAppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppSessions.
     */
    skip?: number
    distinct?: WhatsAppSessionScalarFieldEnum | WhatsAppSessionScalarFieldEnum[]
  }

  /**
   * WhatsAppSession create
   */
  export type WhatsAppSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppSession.
     */
    data: XOR<WhatsAppSessionCreateInput, WhatsAppSessionUncheckedCreateInput>
  }

  /**
   * WhatsAppSession createMany
   */
  export type WhatsAppSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppSessions.
     */
    data: WhatsAppSessionCreateManyInput | WhatsAppSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppSession createManyAndReturn
   */
  export type WhatsAppSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * The data used to create many WhatsAppSessions.
     */
    data: WhatsAppSessionCreateManyInput | WhatsAppSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppSession update
   */
  export type WhatsAppSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppSession.
     */
    data: XOR<WhatsAppSessionUpdateInput, WhatsAppSessionUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppSession to update.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession updateMany
   */
  export type WhatsAppSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppSessions.
     */
    data: XOR<WhatsAppSessionUpdateManyMutationInput, WhatsAppSessionUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppSessions to update
     */
    where?: WhatsAppSessionWhereInput
    /**
     * Limit how many WhatsAppSessions to update.
     */
    limit?: number
  }

  /**
   * WhatsAppSession updateManyAndReturn
   */
  export type WhatsAppSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * The data used to update WhatsAppSessions.
     */
    data: XOR<WhatsAppSessionUpdateManyMutationInput, WhatsAppSessionUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppSessions to update
     */
    where?: WhatsAppSessionWhereInput
    /**
     * Limit how many WhatsAppSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppSession upsert
   */
  export type WhatsAppSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppSession to update in case it exists.
     */
    where: WhatsAppSessionWhereUniqueInput
    /**
     * In case the WhatsAppSession found by the `where` argument doesn't exist, create a new WhatsAppSession with this data.
     */
    create: XOR<WhatsAppSessionCreateInput, WhatsAppSessionUncheckedCreateInput>
    /**
     * In case the WhatsAppSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppSessionUpdateInput, WhatsAppSessionUncheckedUpdateInput>
  }

  /**
   * WhatsAppSession delete
   */
  export type WhatsAppSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppSession to delete.
     */
    where: WhatsAppSessionWhereUniqueInput
  }

  /**
   * WhatsAppSession deleteMany
   */
  export type WhatsAppSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppSessions to delete
     */
    where?: WhatsAppSessionWhereInput
    /**
     * Limit how many WhatsAppSessions to delete.
     */
    limit?: number
  }

  /**
   * WhatsAppSession without action
   */
  export type WhatsAppSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppSession
     */
    select?: WhatsAppSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhatsAppSession
     */
    omit?: WhatsAppSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppSessionInclude<ExtArgs> | null
  }


  /**
   * Model CommunicationConversation
   */

  export type AggregateCommunicationConversation = {
    _count: CommunicationConversationCountAggregateOutputType | null
    _avg: CommunicationConversationAvgAggregateOutputType | null
    _sum: CommunicationConversationSumAggregateOutputType | null
    _min: CommunicationConversationMinAggregateOutputType | null
    _max: CommunicationConversationMaxAggregateOutputType | null
  }

  export type CommunicationConversationAvgAggregateOutputType = {
    unreadCount: number | null
  }

  export type CommunicationConversationSumAggregateOutputType = {
    unreadCount: number | null
  }

  export type CommunicationConversationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    connectedAccountId: string | null
    source: string | null
    remoteConversationId: string | null
    title: string | null
    avatar: string | null
    isGroup: boolean | null
    lastMessageAt: Date | null
    lastMessagePreview: string | null
    unreadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunicationConversationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    connectedAccountId: string | null
    source: string | null
    remoteConversationId: string | null
    title: string | null
    avatar: string | null
    isGroup: boolean | null
    lastMessageAt: Date | null
    lastMessagePreview: string | null
    unreadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunicationConversationCountAggregateOutputType = {
    id: number
    userId: number
    connectedAccountId: number
    source: number
    remoteConversationId: number
    title: number
    avatar: number
    isGroup: number
    lastMessageAt: number
    lastMessagePreview: number
    unreadCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunicationConversationAvgAggregateInputType = {
    unreadCount?: true
  }

  export type CommunicationConversationSumAggregateInputType = {
    unreadCount?: true
  }

  export type CommunicationConversationMinAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    source?: true
    remoteConversationId?: true
    title?: true
    avatar?: true
    isGroup?: true
    lastMessageAt?: true
    lastMessagePreview?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunicationConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    source?: true
    remoteConversationId?: true
    title?: true
    avatar?: true
    isGroup?: true
    lastMessageAt?: true
    lastMessagePreview?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunicationConversationCountAggregateInputType = {
    id?: true
    userId?: true
    connectedAccountId?: true
    source?: true
    remoteConversationId?: true
    title?: true
    avatar?: true
    isGroup?: true
    lastMessageAt?: true
    lastMessagePreview?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunicationConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationConversation to aggregate.
     */
    where?: CommunicationConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationConversations to fetch.
     */
    orderBy?: CommunicationConversationOrderByWithRelationInput | CommunicationConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunicationConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunicationConversations
    **/
    _count?: true | CommunicationConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunicationConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunicationConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationConversationMaxAggregateInputType
  }

  export type GetCommunicationConversationAggregateType<T extends CommunicationConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunicationConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunicationConversation[P]>
      : GetScalarType<T[P], AggregateCommunicationConversation[P]>
  }




  export type CommunicationConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationConversationWhereInput
    orderBy?: CommunicationConversationOrderByWithAggregationInput | CommunicationConversationOrderByWithAggregationInput[]
    by: CommunicationConversationScalarFieldEnum[] | CommunicationConversationScalarFieldEnum
    having?: CommunicationConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationConversationCountAggregateInputType | true
    _avg?: CommunicationConversationAvgAggregateInputType
    _sum?: CommunicationConversationSumAggregateInputType
    _min?: CommunicationConversationMinAggregateInputType
    _max?: CommunicationConversationMaxAggregateInputType
  }

  export type CommunicationConversationGroupByOutputType = {
    id: string
    userId: string
    connectedAccountId: string
    source: string
    remoteConversationId: string
    title: string | null
    avatar: string | null
    isGroup: boolean
    lastMessageAt: Date
    lastMessagePreview: string | null
    unreadCount: number
    createdAt: Date
    updatedAt: Date
    _count: CommunicationConversationCountAggregateOutputType | null
    _avg: CommunicationConversationAvgAggregateOutputType | null
    _sum: CommunicationConversationSumAggregateOutputType | null
    _min: CommunicationConversationMinAggregateOutputType | null
    _max: CommunicationConversationMaxAggregateOutputType | null
  }

  type GetCommunicationConversationGroupByPayload<T extends CommunicationConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationConversationGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationConversationGroupByOutputType[P]>
        }
      >
    >


  export type CommunicationConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    source?: boolean
    remoteConversationId?: boolean
    title?: boolean
    avatar?: boolean
    isGroup?: boolean
    lastMessageAt?: boolean
    lastMessagePreview?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    messages?: boolean | CommunicationConversation$messagesArgs<ExtArgs>
    participants?: boolean | CommunicationConversation$participantsArgs<ExtArgs>
    _count?: boolean | CommunicationConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationConversation"]>

  export type CommunicationConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    source?: boolean
    remoteConversationId?: boolean
    title?: boolean
    avatar?: boolean
    isGroup?: boolean
    lastMessageAt?: boolean
    lastMessagePreview?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationConversation"]>

  export type CommunicationConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    source?: boolean
    remoteConversationId?: boolean
    title?: boolean
    avatar?: boolean
    isGroup?: boolean
    lastMessageAt?: boolean
    lastMessagePreview?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationConversation"]>

  export type CommunicationConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    connectedAccountId?: boolean
    source?: boolean
    remoteConversationId?: boolean
    title?: boolean
    avatar?: boolean
    isGroup?: boolean
    lastMessageAt?: boolean
    lastMessagePreview?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunicationConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "connectedAccountId" | "source" | "remoteConversationId" | "title" | "avatar" | "isGroup" | "lastMessageAt" | "lastMessagePreview" | "unreadCount" | "createdAt" | "updatedAt", ExtArgs["result"]["communicationConversation"]>
  export type CommunicationConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    messages?: boolean | CommunicationConversation$messagesArgs<ExtArgs>
    participants?: boolean | CommunicationConversation$participantsArgs<ExtArgs>
    _count?: boolean | CommunicationConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunicationConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }
  export type CommunicationConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
  }

  export type $CommunicationConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunicationConversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      connectedAccount: Prisma.$ConnectedAccountPayload<ExtArgs>
      messages: Prisma.$CommunicationMessagePayload<ExtArgs>[]
      participants: Prisma.$CommunicationParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      connectedAccountId: string
      source: string
      remoteConversationId: string
      title: string | null
      avatar: string | null
      isGroup: boolean
      lastMessageAt: Date
      lastMessagePreview: string | null
      unreadCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communicationConversation"]>
    composites: {}
  }

  type CommunicationConversationGetPayload<S extends boolean | null | undefined | CommunicationConversationDefaultArgs> = $Result.GetResult<Prisma.$CommunicationConversationPayload, S>

  type CommunicationConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunicationConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationConversationCountAggregateInputType | true
    }

  export interface CommunicationConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunicationConversation'], meta: { name: 'CommunicationConversation' } }
    /**
     * Find zero or one CommunicationConversation that matches the filter.
     * @param {CommunicationConversationFindUniqueArgs} args - Arguments to find a CommunicationConversation
     * @example
     * // Get one CommunicationConversation
     * const communicationConversation = await prisma.communicationConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunicationConversationFindUniqueArgs>(args: SelectSubset<T, CommunicationConversationFindUniqueArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CommunicationConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunicationConversationFindUniqueOrThrowArgs} args - Arguments to find a CommunicationConversation
     * @example
     * // Get one CommunicationConversation
     * const communicationConversation = await prisma.communicationConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunicationConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunicationConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CommunicationConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationConversationFindFirstArgs} args - Arguments to find a CommunicationConversation
     * @example
     * // Get one CommunicationConversation
     * const communicationConversation = await prisma.communicationConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunicationConversationFindFirstArgs>(args?: SelectSubset<T, CommunicationConversationFindFirstArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CommunicationConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationConversationFindFirstOrThrowArgs} args - Arguments to find a CommunicationConversation
     * @example
     * // Get one CommunicationConversation
     * const communicationConversation = await prisma.communicationConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunicationConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunicationConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CommunicationConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunicationConversations
     * const communicationConversations = await prisma.communicationConversation.findMany()
     * 
     * // Get first 10 CommunicationConversations
     * const communicationConversations = await prisma.communicationConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communicationConversationWithIdOnly = await prisma.communicationConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunicationConversationFindManyArgs>(args?: SelectSubset<T, CommunicationConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CommunicationConversation.
     * @param {CommunicationConversationCreateArgs} args - Arguments to create a CommunicationConversation.
     * @example
     * // Create one CommunicationConversation
     * const CommunicationConversation = await prisma.communicationConversation.create({
     *   data: {
     *     // ... data to create a CommunicationConversation
     *   }
     * })
     * 
     */
    create<T extends CommunicationConversationCreateArgs>(args: SelectSubset<T, CommunicationConversationCreateArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CommunicationConversations.
     * @param {CommunicationConversationCreateManyArgs} args - Arguments to create many CommunicationConversations.
     * @example
     * // Create many CommunicationConversations
     * const communicationConversation = await prisma.communicationConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunicationConversationCreateManyArgs>(args?: SelectSubset<T, CommunicationConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunicationConversations and returns the data saved in the database.
     * @param {CommunicationConversationCreateManyAndReturnArgs} args - Arguments to create many CommunicationConversations.
     * @example
     * // Create many CommunicationConversations
     * const communicationConversation = await prisma.communicationConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunicationConversations and only return the `id`
     * const communicationConversationWithIdOnly = await prisma.communicationConversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunicationConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunicationConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CommunicationConversation.
     * @param {CommunicationConversationDeleteArgs} args - Arguments to delete one CommunicationConversation.
     * @example
     * // Delete one CommunicationConversation
     * const CommunicationConversation = await prisma.communicationConversation.delete({
     *   where: {
     *     // ... filter to delete one CommunicationConversation
     *   }
     * })
     * 
     */
    delete<T extends CommunicationConversationDeleteArgs>(args: SelectSubset<T, CommunicationConversationDeleteArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CommunicationConversation.
     * @param {CommunicationConversationUpdateArgs} args - Arguments to update one CommunicationConversation.
     * @example
     * // Update one CommunicationConversation
     * const communicationConversation = await prisma.communicationConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunicationConversationUpdateArgs>(args: SelectSubset<T, CommunicationConversationUpdateArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CommunicationConversations.
     * @param {CommunicationConversationDeleteManyArgs} args - Arguments to filter CommunicationConversations to delete.
     * @example
     * // Delete a few CommunicationConversations
     * const { count } = await prisma.communicationConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunicationConversationDeleteManyArgs>(args?: SelectSubset<T, CommunicationConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunicationConversations
     * const communicationConversation = await prisma.communicationConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunicationConversationUpdateManyArgs>(args: SelectSubset<T, CommunicationConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationConversations and returns the data updated in the database.
     * @param {CommunicationConversationUpdateManyAndReturnArgs} args - Arguments to update many CommunicationConversations.
     * @example
     * // Update many CommunicationConversations
     * const communicationConversation = await prisma.communicationConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunicationConversations and only return the `id`
     * const communicationConversationWithIdOnly = await prisma.communicationConversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunicationConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunicationConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CommunicationConversation.
     * @param {CommunicationConversationUpsertArgs} args - Arguments to update or create a CommunicationConversation.
     * @example
     * // Update or create a CommunicationConversation
     * const communicationConversation = await prisma.communicationConversation.upsert({
     *   create: {
     *     // ... data to create a CommunicationConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunicationConversation we want to update
     *   }
     * })
     */
    upsert<T extends CommunicationConversationUpsertArgs>(args: SelectSubset<T, CommunicationConversationUpsertArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CommunicationConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationConversationCountArgs} args - Arguments to filter CommunicationConversations to count.
     * @example
     * // Count the number of CommunicationConversations
     * const count = await prisma.communicationConversation.count({
     *   where: {
     *     // ... the filter for the CommunicationConversations we want to count
     *   }
     * })
    **/
    count<T extends CommunicationConversationCountArgs>(
      args?: Subset<T, CommunicationConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunicationConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunicationConversationAggregateArgs>(args: Subset<T, CommunicationConversationAggregateArgs>): Prisma.PrismaPromise<GetCommunicationConversationAggregateType<T>>

    /**
     * Group by CommunicationConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationConversationGroupByArgs} args - Group by arguments.
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
      T extends CommunicationConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunicationConversationGroupByArgs['orderBy'] }
        : { orderBy?: CommunicationConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunicationConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunicationConversation model
   */
  readonly fields: CommunicationConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunicationConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunicationConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    connectedAccount<T extends ConnectedAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccountDefaultArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    messages<T extends CommunicationConversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, CommunicationConversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    participants<T extends CommunicationConversation$participantsArgs<ExtArgs> = {}>(args?: Subset<T, CommunicationConversation$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the CommunicationConversation model
   */ 
  interface CommunicationConversationFieldRefs {
    readonly id: FieldRef<"CommunicationConversation", 'String'>
    readonly userId: FieldRef<"CommunicationConversation", 'String'>
    readonly connectedAccountId: FieldRef<"CommunicationConversation", 'String'>
    readonly source: FieldRef<"CommunicationConversation", 'String'>
    readonly remoteConversationId: FieldRef<"CommunicationConversation", 'String'>
    readonly title: FieldRef<"CommunicationConversation", 'String'>
    readonly avatar: FieldRef<"CommunicationConversation", 'String'>
    readonly isGroup: FieldRef<"CommunicationConversation", 'Boolean'>
    readonly lastMessageAt: FieldRef<"CommunicationConversation", 'DateTime'>
    readonly lastMessagePreview: FieldRef<"CommunicationConversation", 'String'>
    readonly unreadCount: FieldRef<"CommunicationConversation", 'Int'>
    readonly createdAt: FieldRef<"CommunicationConversation", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunicationConversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunicationConversation findUnique
   */
  export type CommunicationConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationConversation to fetch.
     */
    where: CommunicationConversationWhereUniqueInput
  }

  /**
   * CommunicationConversation findUniqueOrThrow
   */
  export type CommunicationConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationConversation to fetch.
     */
    where: CommunicationConversationWhereUniqueInput
  }

  /**
   * CommunicationConversation findFirst
   */
  export type CommunicationConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationConversation to fetch.
     */
    where?: CommunicationConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationConversations to fetch.
     */
    orderBy?: CommunicationConversationOrderByWithRelationInput | CommunicationConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationConversations.
     */
    cursor?: CommunicationConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationConversations.
     */
    distinct?: CommunicationConversationScalarFieldEnum | CommunicationConversationScalarFieldEnum[]
  }

  /**
   * CommunicationConversation findFirstOrThrow
   */
  export type CommunicationConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationConversation to fetch.
     */
    where?: CommunicationConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationConversations to fetch.
     */
    orderBy?: CommunicationConversationOrderByWithRelationInput | CommunicationConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationConversations.
     */
    cursor?: CommunicationConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationConversations.
     */
    distinct?: CommunicationConversationScalarFieldEnum | CommunicationConversationScalarFieldEnum[]
  }

  /**
   * CommunicationConversation findMany
   */
  export type CommunicationConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationConversations to fetch.
     */
    where?: CommunicationConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationConversations to fetch.
     */
    orderBy?: CommunicationConversationOrderByWithRelationInput | CommunicationConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunicationConversations.
     */
    cursor?: CommunicationConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationConversations.
     */
    skip?: number
    distinct?: CommunicationConversationScalarFieldEnum | CommunicationConversationScalarFieldEnum[]
  }

  /**
   * CommunicationConversation create
   */
  export type CommunicationConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunicationConversation.
     */
    data: XOR<CommunicationConversationCreateInput, CommunicationConversationUncheckedCreateInput>
  }

  /**
   * CommunicationConversation createMany
   */
  export type CommunicationConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunicationConversations.
     */
    data: CommunicationConversationCreateManyInput | CommunicationConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunicationConversation createManyAndReturn
   */
  export type CommunicationConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * The data used to create many CommunicationConversations.
     */
    data: CommunicationConversationCreateManyInput | CommunicationConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunicationConversation update
   */
  export type CommunicationConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunicationConversation.
     */
    data: XOR<CommunicationConversationUpdateInput, CommunicationConversationUncheckedUpdateInput>
    /**
     * Choose, which CommunicationConversation to update.
     */
    where: CommunicationConversationWhereUniqueInput
  }

  /**
   * CommunicationConversation updateMany
   */
  export type CommunicationConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunicationConversations.
     */
    data: XOR<CommunicationConversationUpdateManyMutationInput, CommunicationConversationUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationConversations to update
     */
    where?: CommunicationConversationWhereInput
    /**
     * Limit how many CommunicationConversations to update.
     */
    limit?: number
  }

  /**
   * CommunicationConversation updateManyAndReturn
   */
  export type CommunicationConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * The data used to update CommunicationConversations.
     */
    data: XOR<CommunicationConversationUpdateManyMutationInput, CommunicationConversationUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationConversations to update
     */
    where?: CommunicationConversationWhereInput
    /**
     * Limit how many CommunicationConversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunicationConversation upsert
   */
  export type CommunicationConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunicationConversation to update in case it exists.
     */
    where: CommunicationConversationWhereUniqueInput
    /**
     * In case the CommunicationConversation found by the `where` argument doesn't exist, create a new CommunicationConversation with this data.
     */
    create: XOR<CommunicationConversationCreateInput, CommunicationConversationUncheckedCreateInput>
    /**
     * In case the CommunicationConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunicationConversationUpdateInput, CommunicationConversationUncheckedUpdateInput>
  }

  /**
   * CommunicationConversation delete
   */
  export type CommunicationConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
    /**
     * Filter which CommunicationConversation to delete.
     */
    where: CommunicationConversationWhereUniqueInput
  }

  /**
   * CommunicationConversation deleteMany
   */
  export type CommunicationConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationConversations to delete
     */
    where?: CommunicationConversationWhereInput
    /**
     * Limit how many CommunicationConversations to delete.
     */
    limit?: number
  }

  /**
   * CommunicationConversation.messages
   */
  export type CommunicationConversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    where?: CommunicationMessageWhereInput
    orderBy?: CommunicationMessageOrderByWithRelationInput | CommunicationMessageOrderByWithRelationInput[]
    cursor?: CommunicationMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationMessageScalarFieldEnum | CommunicationMessageScalarFieldEnum[]
  }

  /**
   * CommunicationConversation.participants
   */
  export type CommunicationConversation$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    where?: CommunicationParticipantWhereInput
    orderBy?: CommunicationParticipantOrderByWithRelationInput | CommunicationParticipantOrderByWithRelationInput[]
    cursor?: CommunicationParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunicationParticipantScalarFieldEnum | CommunicationParticipantScalarFieldEnum[]
  }

  /**
   * CommunicationConversation without action
   */
  export type CommunicationConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationConversation
     */
    select?: CommunicationConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationConversation
     */
    omit?: CommunicationConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationConversationInclude<ExtArgs> | null
  }


  /**
   * Model CommunicationParticipant
   */

  export type AggregateCommunicationParticipant = {
    _count: CommunicationParticipantCountAggregateOutputType | null
    _min: CommunicationParticipantMinAggregateOutputType | null
    _max: CommunicationParticipantMaxAggregateOutputType | null
  }

  export type CommunicationParticipantMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    remoteParticipantId: string | null
    phone: string | null
    displayName: string | null
    avatar: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunicationParticipantMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    remoteParticipantId: string | null
    phone: string | null
    displayName: string | null
    avatar: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunicationParticipantCountAggregateOutputType = {
    id: number
    conversationId: number
    remoteParticipantId: number
    phone: number
    displayName: number
    avatar: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunicationParticipantMinAggregateInputType = {
    id?: true
    conversationId?: true
    remoteParticipantId?: true
    phone?: true
    displayName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunicationParticipantMaxAggregateInputType = {
    id?: true
    conversationId?: true
    remoteParticipantId?: true
    phone?: true
    displayName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunicationParticipantCountAggregateInputType = {
    id?: true
    conversationId?: true
    remoteParticipantId?: true
    phone?: true
    displayName?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunicationParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationParticipant to aggregate.
     */
    where?: CommunicationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationParticipants to fetch.
     */
    orderBy?: CommunicationParticipantOrderByWithRelationInput | CommunicationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunicationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunicationParticipants
    **/
    _count?: true | CommunicationParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationParticipantMaxAggregateInputType
  }

  export type GetCommunicationParticipantAggregateType<T extends CommunicationParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunicationParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunicationParticipant[P]>
      : GetScalarType<T[P], AggregateCommunicationParticipant[P]>
  }




  export type CommunicationParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationParticipantWhereInput
    orderBy?: CommunicationParticipantOrderByWithAggregationInput | CommunicationParticipantOrderByWithAggregationInput[]
    by: CommunicationParticipantScalarFieldEnum[] | CommunicationParticipantScalarFieldEnum
    having?: CommunicationParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationParticipantCountAggregateInputType | true
    _min?: CommunicationParticipantMinAggregateInputType
    _max?: CommunicationParticipantMaxAggregateInputType
  }

  export type CommunicationParticipantGroupByOutputType = {
    id: string
    conversationId: string
    remoteParticipantId: string
    phone: string | null
    displayName: string | null
    avatar: string | null
    role: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommunicationParticipantCountAggregateOutputType | null
    _min: CommunicationParticipantMinAggregateOutputType | null
    _max: CommunicationParticipantMaxAggregateOutputType | null
  }

  type GetCommunicationParticipantGroupByPayload<T extends CommunicationParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationParticipantGroupByOutputType[P]>
        }
      >
    >


  export type CommunicationParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    remoteParticipantId?: boolean
    phone?: boolean
    displayName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationParticipant"]>

  export type CommunicationParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    remoteParticipantId?: boolean
    phone?: boolean
    displayName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationParticipant"]>

  export type CommunicationParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    remoteParticipantId?: boolean
    phone?: boolean
    displayName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationParticipant"]>

  export type CommunicationParticipantSelectScalar = {
    id?: boolean
    conversationId?: boolean
    remoteParticipantId?: boolean
    phone?: boolean
    displayName?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunicationParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "remoteParticipantId" | "phone" | "displayName" | "avatar" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["communicationParticipant"]>
  export type CommunicationParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }
  export type CommunicationParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }
  export type CommunicationParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }

  export type $CommunicationParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunicationParticipant"
    objects: {
      conversation: Prisma.$CommunicationConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      remoteParticipantId: string
      phone: string | null
      displayName: string | null
      avatar: string | null
      role: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communicationParticipant"]>
    composites: {}
  }

  type CommunicationParticipantGetPayload<S extends boolean | null | undefined | CommunicationParticipantDefaultArgs> = $Result.GetResult<Prisma.$CommunicationParticipantPayload, S>

  type CommunicationParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunicationParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationParticipantCountAggregateInputType | true
    }

  export interface CommunicationParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunicationParticipant'], meta: { name: 'CommunicationParticipant' } }
    /**
     * Find zero or one CommunicationParticipant that matches the filter.
     * @param {CommunicationParticipantFindUniqueArgs} args - Arguments to find a CommunicationParticipant
     * @example
     * // Get one CommunicationParticipant
     * const communicationParticipant = await prisma.communicationParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunicationParticipantFindUniqueArgs>(args: SelectSubset<T, CommunicationParticipantFindUniqueArgs<ExtArgs>>): Prisma__CommunicationParticipantClient<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CommunicationParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunicationParticipantFindUniqueOrThrowArgs} args - Arguments to find a CommunicationParticipant
     * @example
     * // Get one CommunicationParticipant
     * const communicationParticipant = await prisma.communicationParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunicationParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunicationParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunicationParticipantClient<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CommunicationParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationParticipantFindFirstArgs} args - Arguments to find a CommunicationParticipant
     * @example
     * // Get one CommunicationParticipant
     * const communicationParticipant = await prisma.communicationParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunicationParticipantFindFirstArgs>(args?: SelectSubset<T, CommunicationParticipantFindFirstArgs<ExtArgs>>): Prisma__CommunicationParticipantClient<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CommunicationParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationParticipantFindFirstOrThrowArgs} args - Arguments to find a CommunicationParticipant
     * @example
     * // Get one CommunicationParticipant
     * const communicationParticipant = await prisma.communicationParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunicationParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunicationParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunicationParticipantClient<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CommunicationParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunicationParticipants
     * const communicationParticipants = await prisma.communicationParticipant.findMany()
     * 
     * // Get first 10 CommunicationParticipants
     * const communicationParticipants = await prisma.communicationParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communicationParticipantWithIdOnly = await prisma.communicationParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunicationParticipantFindManyArgs>(args?: SelectSubset<T, CommunicationParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CommunicationParticipant.
     * @param {CommunicationParticipantCreateArgs} args - Arguments to create a CommunicationParticipant.
     * @example
     * // Create one CommunicationParticipant
     * const CommunicationParticipant = await prisma.communicationParticipant.create({
     *   data: {
     *     // ... data to create a CommunicationParticipant
     *   }
     * })
     * 
     */
    create<T extends CommunicationParticipantCreateArgs>(args: SelectSubset<T, CommunicationParticipantCreateArgs<ExtArgs>>): Prisma__CommunicationParticipantClient<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CommunicationParticipants.
     * @param {CommunicationParticipantCreateManyArgs} args - Arguments to create many CommunicationParticipants.
     * @example
     * // Create many CommunicationParticipants
     * const communicationParticipant = await prisma.communicationParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunicationParticipantCreateManyArgs>(args?: SelectSubset<T, CommunicationParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunicationParticipants and returns the data saved in the database.
     * @param {CommunicationParticipantCreateManyAndReturnArgs} args - Arguments to create many CommunicationParticipants.
     * @example
     * // Create many CommunicationParticipants
     * const communicationParticipant = await prisma.communicationParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunicationParticipants and only return the `id`
     * const communicationParticipantWithIdOnly = await prisma.communicationParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunicationParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunicationParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CommunicationParticipant.
     * @param {CommunicationParticipantDeleteArgs} args - Arguments to delete one CommunicationParticipant.
     * @example
     * // Delete one CommunicationParticipant
     * const CommunicationParticipant = await prisma.communicationParticipant.delete({
     *   where: {
     *     // ... filter to delete one CommunicationParticipant
     *   }
     * })
     * 
     */
    delete<T extends CommunicationParticipantDeleteArgs>(args: SelectSubset<T, CommunicationParticipantDeleteArgs<ExtArgs>>): Prisma__CommunicationParticipantClient<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CommunicationParticipant.
     * @param {CommunicationParticipantUpdateArgs} args - Arguments to update one CommunicationParticipant.
     * @example
     * // Update one CommunicationParticipant
     * const communicationParticipant = await prisma.communicationParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunicationParticipantUpdateArgs>(args: SelectSubset<T, CommunicationParticipantUpdateArgs<ExtArgs>>): Prisma__CommunicationParticipantClient<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CommunicationParticipants.
     * @param {CommunicationParticipantDeleteManyArgs} args - Arguments to filter CommunicationParticipants to delete.
     * @example
     * // Delete a few CommunicationParticipants
     * const { count } = await prisma.communicationParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunicationParticipantDeleteManyArgs>(args?: SelectSubset<T, CommunicationParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunicationParticipants
     * const communicationParticipant = await prisma.communicationParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunicationParticipantUpdateManyArgs>(args: SelectSubset<T, CommunicationParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationParticipants and returns the data updated in the database.
     * @param {CommunicationParticipantUpdateManyAndReturnArgs} args - Arguments to update many CommunicationParticipants.
     * @example
     * // Update many CommunicationParticipants
     * const communicationParticipant = await prisma.communicationParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunicationParticipants and only return the `id`
     * const communicationParticipantWithIdOnly = await prisma.communicationParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunicationParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunicationParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CommunicationParticipant.
     * @param {CommunicationParticipantUpsertArgs} args - Arguments to update or create a CommunicationParticipant.
     * @example
     * // Update or create a CommunicationParticipant
     * const communicationParticipant = await prisma.communicationParticipant.upsert({
     *   create: {
     *     // ... data to create a CommunicationParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunicationParticipant we want to update
     *   }
     * })
     */
    upsert<T extends CommunicationParticipantUpsertArgs>(args: SelectSubset<T, CommunicationParticipantUpsertArgs<ExtArgs>>): Prisma__CommunicationParticipantClient<$Result.GetResult<Prisma.$CommunicationParticipantPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CommunicationParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationParticipantCountArgs} args - Arguments to filter CommunicationParticipants to count.
     * @example
     * // Count the number of CommunicationParticipants
     * const count = await prisma.communicationParticipant.count({
     *   where: {
     *     // ... the filter for the CommunicationParticipants we want to count
     *   }
     * })
    **/
    count<T extends CommunicationParticipantCountArgs>(
      args?: Subset<T, CommunicationParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunicationParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunicationParticipantAggregateArgs>(args: Subset<T, CommunicationParticipantAggregateArgs>): Prisma.PrismaPromise<GetCommunicationParticipantAggregateType<T>>

    /**
     * Group by CommunicationParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationParticipantGroupByArgs} args - Group by arguments.
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
      T extends CommunicationParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunicationParticipantGroupByArgs['orderBy'] }
        : { orderBy?: CommunicationParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunicationParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunicationParticipant model
   */
  readonly fields: CommunicationParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunicationParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunicationParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends CommunicationConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunicationConversationDefaultArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the CommunicationParticipant model
   */ 
  interface CommunicationParticipantFieldRefs {
    readonly id: FieldRef<"CommunicationParticipant", 'String'>
    readonly conversationId: FieldRef<"CommunicationParticipant", 'String'>
    readonly remoteParticipantId: FieldRef<"CommunicationParticipant", 'String'>
    readonly phone: FieldRef<"CommunicationParticipant", 'String'>
    readonly displayName: FieldRef<"CommunicationParticipant", 'String'>
    readonly avatar: FieldRef<"CommunicationParticipant", 'String'>
    readonly role: FieldRef<"CommunicationParticipant", 'String'>
    readonly createdAt: FieldRef<"CommunicationParticipant", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunicationParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunicationParticipant findUnique
   */
  export type CommunicationParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationParticipant to fetch.
     */
    where: CommunicationParticipantWhereUniqueInput
  }

  /**
   * CommunicationParticipant findUniqueOrThrow
   */
  export type CommunicationParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationParticipant to fetch.
     */
    where: CommunicationParticipantWhereUniqueInput
  }

  /**
   * CommunicationParticipant findFirst
   */
  export type CommunicationParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationParticipant to fetch.
     */
    where?: CommunicationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationParticipants to fetch.
     */
    orderBy?: CommunicationParticipantOrderByWithRelationInput | CommunicationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationParticipants.
     */
    cursor?: CommunicationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationParticipants.
     */
    distinct?: CommunicationParticipantScalarFieldEnum | CommunicationParticipantScalarFieldEnum[]
  }

  /**
   * CommunicationParticipant findFirstOrThrow
   */
  export type CommunicationParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationParticipant to fetch.
     */
    where?: CommunicationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationParticipants to fetch.
     */
    orderBy?: CommunicationParticipantOrderByWithRelationInput | CommunicationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationParticipants.
     */
    cursor?: CommunicationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationParticipants.
     */
    distinct?: CommunicationParticipantScalarFieldEnum | CommunicationParticipantScalarFieldEnum[]
  }

  /**
   * CommunicationParticipant findMany
   */
  export type CommunicationParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationParticipants to fetch.
     */
    where?: CommunicationParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationParticipants to fetch.
     */
    orderBy?: CommunicationParticipantOrderByWithRelationInput | CommunicationParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunicationParticipants.
     */
    cursor?: CommunicationParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationParticipants.
     */
    skip?: number
    distinct?: CommunicationParticipantScalarFieldEnum | CommunicationParticipantScalarFieldEnum[]
  }

  /**
   * CommunicationParticipant create
   */
  export type CommunicationParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunicationParticipant.
     */
    data: XOR<CommunicationParticipantCreateInput, CommunicationParticipantUncheckedCreateInput>
  }

  /**
   * CommunicationParticipant createMany
   */
  export type CommunicationParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunicationParticipants.
     */
    data: CommunicationParticipantCreateManyInput | CommunicationParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunicationParticipant createManyAndReturn
   */
  export type CommunicationParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many CommunicationParticipants.
     */
    data: CommunicationParticipantCreateManyInput | CommunicationParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunicationParticipant update
   */
  export type CommunicationParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunicationParticipant.
     */
    data: XOR<CommunicationParticipantUpdateInput, CommunicationParticipantUncheckedUpdateInput>
    /**
     * Choose, which CommunicationParticipant to update.
     */
    where: CommunicationParticipantWhereUniqueInput
  }

  /**
   * CommunicationParticipant updateMany
   */
  export type CommunicationParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunicationParticipants.
     */
    data: XOR<CommunicationParticipantUpdateManyMutationInput, CommunicationParticipantUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationParticipants to update
     */
    where?: CommunicationParticipantWhereInput
    /**
     * Limit how many CommunicationParticipants to update.
     */
    limit?: number
  }

  /**
   * CommunicationParticipant updateManyAndReturn
   */
  export type CommunicationParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * The data used to update CommunicationParticipants.
     */
    data: XOR<CommunicationParticipantUpdateManyMutationInput, CommunicationParticipantUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationParticipants to update
     */
    where?: CommunicationParticipantWhereInput
    /**
     * Limit how many CommunicationParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunicationParticipant upsert
   */
  export type CommunicationParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunicationParticipant to update in case it exists.
     */
    where: CommunicationParticipantWhereUniqueInput
    /**
     * In case the CommunicationParticipant found by the `where` argument doesn't exist, create a new CommunicationParticipant with this data.
     */
    create: XOR<CommunicationParticipantCreateInput, CommunicationParticipantUncheckedCreateInput>
    /**
     * In case the CommunicationParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunicationParticipantUpdateInput, CommunicationParticipantUncheckedUpdateInput>
  }

  /**
   * CommunicationParticipant delete
   */
  export type CommunicationParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
    /**
     * Filter which CommunicationParticipant to delete.
     */
    where: CommunicationParticipantWhereUniqueInput
  }

  /**
   * CommunicationParticipant deleteMany
   */
  export type CommunicationParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationParticipants to delete
     */
    where?: CommunicationParticipantWhereInput
    /**
     * Limit how many CommunicationParticipants to delete.
     */
    limit?: number
  }

  /**
   * CommunicationParticipant without action
   */
  export type CommunicationParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationParticipant
     */
    select?: CommunicationParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationParticipant
     */
    omit?: CommunicationParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationParticipantInclude<ExtArgs> | null
  }


  /**
   * Model CommunicationMessage
   */

  export type AggregateCommunicationMessage = {
    _count: CommunicationMessageCountAggregateOutputType | null
    _min: CommunicationMessageMinAggregateOutputType | null
    _max: CommunicationMessageMaxAggregateOutputType | null
  }

  export type CommunicationMessageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    conversationId: string | null
    connectedAccountId: string | null
    source: string | null
    remoteMessageId: string | null
    senderId: string | null
    senderName: string | null
    text: string | null
    messageType: string | null
    isFromMe: boolean | null
    isRead: boolean | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    aiCategory: $Enums.AICategory | null
    aiPriority: $Enums.AIPriority | null
    aiActionable: boolean | null
    aiSummary: string | null
    aiReason: string | null
    aiProcessedAt: Date | null
  }

  export type CommunicationMessageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    conversationId: string | null
    connectedAccountId: string | null
    source: string | null
    remoteMessageId: string | null
    senderId: string | null
    senderName: string | null
    text: string | null
    messageType: string | null
    isFromMe: boolean | null
    isRead: boolean | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    aiCategory: $Enums.AICategory | null
    aiPriority: $Enums.AIPriority | null
    aiActionable: boolean | null
    aiSummary: string | null
    aiReason: string | null
    aiProcessedAt: Date | null
  }

  export type CommunicationMessageCountAggregateOutputType = {
    id: number
    userId: number
    conversationId: number
    connectedAccountId: number
    source: number
    remoteMessageId: number
    senderId: number
    senderName: number
    text: number
    messageType: number
    isFromMe: number
    isRead: number
    sentAt: number
    createdAt: number
    updatedAt: number
    aiCategory: number
    aiPriority: number
    aiActionable: number
    aiSummary: number
    aiReason: number
    aiProcessedAt: number
    _all: number
  }


  export type CommunicationMessageMinAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
    connectedAccountId?: true
    source?: true
    remoteMessageId?: true
    senderId?: true
    senderName?: true
    text?: true
    messageType?: true
    isFromMe?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    aiCategory?: true
    aiPriority?: true
    aiActionable?: true
    aiSummary?: true
    aiReason?: true
    aiProcessedAt?: true
  }

  export type CommunicationMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
    connectedAccountId?: true
    source?: true
    remoteMessageId?: true
    senderId?: true
    senderName?: true
    text?: true
    messageType?: true
    isFromMe?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    aiCategory?: true
    aiPriority?: true
    aiActionable?: true
    aiSummary?: true
    aiReason?: true
    aiProcessedAt?: true
  }

  export type CommunicationMessageCountAggregateInputType = {
    id?: true
    userId?: true
    conversationId?: true
    connectedAccountId?: true
    source?: true
    remoteMessageId?: true
    senderId?: true
    senderName?: true
    text?: true
    messageType?: true
    isFromMe?: true
    isRead?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    aiCategory?: true
    aiPriority?: true
    aiActionable?: true
    aiSummary?: true
    aiReason?: true
    aiProcessedAt?: true
    _all?: true
  }

  export type CommunicationMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationMessage to aggregate.
     */
    where?: CommunicationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationMessages to fetch.
     */
    orderBy?: CommunicationMessageOrderByWithRelationInput | CommunicationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunicationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunicationMessages
    **/
    _count?: true | CommunicationMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationMessageMaxAggregateInputType
  }

  export type GetCommunicationMessageAggregateType<T extends CommunicationMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunicationMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunicationMessage[P]>
      : GetScalarType<T[P], AggregateCommunicationMessage[P]>
  }




  export type CommunicationMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationMessageWhereInput
    orderBy?: CommunicationMessageOrderByWithAggregationInput | CommunicationMessageOrderByWithAggregationInput[]
    by: CommunicationMessageScalarFieldEnum[] | CommunicationMessageScalarFieldEnum
    having?: CommunicationMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationMessageCountAggregateInputType | true
    _min?: CommunicationMessageMinAggregateInputType
    _max?: CommunicationMessageMaxAggregateInputType
  }

  export type CommunicationMessageGroupByOutputType = {
    id: string
    userId: string
    conversationId: string
    connectedAccountId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName: string | null
    text: string | null
    messageType: string
    isFromMe: boolean
    isRead: boolean
    sentAt: Date
    createdAt: Date
    updatedAt: Date
    aiCategory: $Enums.AICategory | null
    aiPriority: $Enums.AIPriority | null
    aiActionable: boolean | null
    aiSummary: string | null
    aiReason: string | null
    aiProcessedAt: Date | null
    _count: CommunicationMessageCountAggregateOutputType | null
    _min: CommunicationMessageMinAggregateOutputType | null
    _max: CommunicationMessageMaxAggregateOutputType | null
  }

  type GetCommunicationMessageGroupByPayload<T extends CommunicationMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationMessageGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationMessageGroupByOutputType[P]>
        }
      >
    >


  export type CommunicationMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    connectedAccountId?: boolean
    source?: boolean
    remoteMessageId?: boolean
    senderId?: boolean
    senderName?: boolean
    text?: boolean
    messageType?: boolean
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiCategory?: boolean
    aiPriority?: boolean
    aiActionable?: boolean
    aiSummary?: boolean
    aiReason?: boolean
    aiProcessedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationMessage"]>

  export type CommunicationMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    connectedAccountId?: boolean
    source?: boolean
    remoteMessageId?: boolean
    senderId?: boolean
    senderName?: boolean
    text?: boolean
    messageType?: boolean
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiCategory?: boolean
    aiPriority?: boolean
    aiActionable?: boolean
    aiSummary?: boolean
    aiReason?: boolean
    aiProcessedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationMessage"]>

  export type CommunicationMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    connectedAccountId?: boolean
    source?: boolean
    remoteMessageId?: boolean
    senderId?: boolean
    senderName?: boolean
    text?: boolean
    messageType?: boolean
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiCategory?: boolean
    aiPriority?: boolean
    aiActionable?: boolean
    aiSummary?: boolean
    aiReason?: boolean
    aiProcessedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationMessage"]>

  export type CommunicationMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    conversationId?: boolean
    connectedAccountId?: boolean
    source?: boolean
    remoteMessageId?: boolean
    senderId?: boolean
    senderName?: boolean
    text?: boolean
    messageType?: boolean
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aiCategory?: boolean
    aiPriority?: boolean
    aiActionable?: boolean
    aiSummary?: boolean
    aiReason?: boolean
    aiProcessedAt?: boolean
  }

  export type CommunicationMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "conversationId" | "connectedAccountId" | "source" | "remoteMessageId" | "senderId" | "senderName" | "text" | "messageType" | "isFromMe" | "isRead" | "sentAt" | "createdAt" | "updatedAt" | "aiCategory" | "aiPriority" | "aiActionable" | "aiSummary" | "aiReason" | "aiProcessedAt", ExtArgs["result"]["communicationMessage"]>
  export type CommunicationMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }
  export type CommunicationMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }
  export type CommunicationMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    connectedAccount?: boolean | ConnectedAccountDefaultArgs<ExtArgs>
    conversation?: boolean | CommunicationConversationDefaultArgs<ExtArgs>
  }

  export type $CommunicationMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunicationMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      connectedAccount: Prisma.$ConnectedAccountPayload<ExtArgs>
      conversation: Prisma.$CommunicationConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      conversationId: string
      connectedAccountId: string
      source: string
      remoteMessageId: string
      senderId: string
      senderName: string | null
      text: string | null
      messageType: string
      isFromMe: boolean
      isRead: boolean
      sentAt: Date
      createdAt: Date
      updatedAt: Date
      aiCategory: $Enums.AICategory | null
      aiPriority: $Enums.AIPriority | null
      aiActionable: boolean | null
      aiSummary: string | null
      aiReason: string | null
      aiProcessedAt: Date | null
    }, ExtArgs["result"]["communicationMessage"]>
    composites: {}
  }

  type CommunicationMessageGetPayload<S extends boolean | null | undefined | CommunicationMessageDefaultArgs> = $Result.GetResult<Prisma.$CommunicationMessagePayload, S>

  type CommunicationMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunicationMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationMessageCountAggregateInputType | true
    }

  export interface CommunicationMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunicationMessage'], meta: { name: 'CommunicationMessage' } }
    /**
     * Find zero or one CommunicationMessage that matches the filter.
     * @param {CommunicationMessageFindUniqueArgs} args - Arguments to find a CommunicationMessage
     * @example
     * // Get one CommunicationMessage
     * const communicationMessage = await prisma.communicationMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunicationMessageFindUniqueArgs>(args: SelectSubset<T, CommunicationMessageFindUniqueArgs<ExtArgs>>): Prisma__CommunicationMessageClient<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CommunicationMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunicationMessageFindUniqueOrThrowArgs} args - Arguments to find a CommunicationMessage
     * @example
     * // Get one CommunicationMessage
     * const communicationMessage = await prisma.communicationMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunicationMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunicationMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunicationMessageClient<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CommunicationMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationMessageFindFirstArgs} args - Arguments to find a CommunicationMessage
     * @example
     * // Get one CommunicationMessage
     * const communicationMessage = await prisma.communicationMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunicationMessageFindFirstArgs>(args?: SelectSubset<T, CommunicationMessageFindFirstArgs<ExtArgs>>): Prisma__CommunicationMessageClient<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CommunicationMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationMessageFindFirstOrThrowArgs} args - Arguments to find a CommunicationMessage
     * @example
     * // Get one CommunicationMessage
     * const communicationMessage = await prisma.communicationMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunicationMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunicationMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunicationMessageClient<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CommunicationMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunicationMessages
     * const communicationMessages = await prisma.communicationMessage.findMany()
     * 
     * // Get first 10 CommunicationMessages
     * const communicationMessages = await prisma.communicationMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communicationMessageWithIdOnly = await prisma.communicationMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunicationMessageFindManyArgs>(args?: SelectSubset<T, CommunicationMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CommunicationMessage.
     * @param {CommunicationMessageCreateArgs} args - Arguments to create a CommunicationMessage.
     * @example
     * // Create one CommunicationMessage
     * const CommunicationMessage = await prisma.communicationMessage.create({
     *   data: {
     *     // ... data to create a CommunicationMessage
     *   }
     * })
     * 
     */
    create<T extends CommunicationMessageCreateArgs>(args: SelectSubset<T, CommunicationMessageCreateArgs<ExtArgs>>): Prisma__CommunicationMessageClient<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CommunicationMessages.
     * @param {CommunicationMessageCreateManyArgs} args - Arguments to create many CommunicationMessages.
     * @example
     * // Create many CommunicationMessages
     * const communicationMessage = await prisma.communicationMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunicationMessageCreateManyArgs>(args?: SelectSubset<T, CommunicationMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunicationMessages and returns the data saved in the database.
     * @param {CommunicationMessageCreateManyAndReturnArgs} args - Arguments to create many CommunicationMessages.
     * @example
     * // Create many CommunicationMessages
     * const communicationMessage = await prisma.communicationMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunicationMessages and only return the `id`
     * const communicationMessageWithIdOnly = await prisma.communicationMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunicationMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunicationMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CommunicationMessage.
     * @param {CommunicationMessageDeleteArgs} args - Arguments to delete one CommunicationMessage.
     * @example
     * // Delete one CommunicationMessage
     * const CommunicationMessage = await prisma.communicationMessage.delete({
     *   where: {
     *     // ... filter to delete one CommunicationMessage
     *   }
     * })
     * 
     */
    delete<T extends CommunicationMessageDeleteArgs>(args: SelectSubset<T, CommunicationMessageDeleteArgs<ExtArgs>>): Prisma__CommunicationMessageClient<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CommunicationMessage.
     * @param {CommunicationMessageUpdateArgs} args - Arguments to update one CommunicationMessage.
     * @example
     * // Update one CommunicationMessage
     * const communicationMessage = await prisma.communicationMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunicationMessageUpdateArgs>(args: SelectSubset<T, CommunicationMessageUpdateArgs<ExtArgs>>): Prisma__CommunicationMessageClient<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CommunicationMessages.
     * @param {CommunicationMessageDeleteManyArgs} args - Arguments to filter CommunicationMessages to delete.
     * @example
     * // Delete a few CommunicationMessages
     * const { count } = await prisma.communicationMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunicationMessageDeleteManyArgs>(args?: SelectSubset<T, CommunicationMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunicationMessages
     * const communicationMessage = await prisma.communicationMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunicationMessageUpdateManyArgs>(args: SelectSubset<T, CommunicationMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationMessages and returns the data updated in the database.
     * @param {CommunicationMessageUpdateManyAndReturnArgs} args - Arguments to update many CommunicationMessages.
     * @example
     * // Update many CommunicationMessages
     * const communicationMessage = await prisma.communicationMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunicationMessages and only return the `id`
     * const communicationMessageWithIdOnly = await prisma.communicationMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunicationMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunicationMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CommunicationMessage.
     * @param {CommunicationMessageUpsertArgs} args - Arguments to update or create a CommunicationMessage.
     * @example
     * // Update or create a CommunicationMessage
     * const communicationMessage = await prisma.communicationMessage.upsert({
     *   create: {
     *     // ... data to create a CommunicationMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunicationMessage we want to update
     *   }
     * })
     */
    upsert<T extends CommunicationMessageUpsertArgs>(args: SelectSubset<T, CommunicationMessageUpsertArgs<ExtArgs>>): Prisma__CommunicationMessageClient<$Result.GetResult<Prisma.$CommunicationMessagePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CommunicationMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationMessageCountArgs} args - Arguments to filter CommunicationMessages to count.
     * @example
     * // Count the number of CommunicationMessages
     * const count = await prisma.communicationMessage.count({
     *   where: {
     *     // ... the filter for the CommunicationMessages we want to count
     *   }
     * })
    **/
    count<T extends CommunicationMessageCountArgs>(
      args?: Subset<T, CommunicationMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunicationMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunicationMessageAggregateArgs>(args: Subset<T, CommunicationMessageAggregateArgs>): Prisma.PrismaPromise<GetCommunicationMessageAggregateType<T>>

    /**
     * Group by CommunicationMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationMessageGroupByArgs} args - Group by arguments.
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
      T extends CommunicationMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunicationMessageGroupByArgs['orderBy'] }
        : { orderBy?: CommunicationMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunicationMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunicationMessage model
   */
  readonly fields: CommunicationMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunicationMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunicationMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    connectedAccount<T extends ConnectedAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConnectedAccountDefaultArgs<ExtArgs>>): Prisma__ConnectedAccountClient<$Result.GetResult<Prisma.$ConnectedAccountPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    conversation<T extends CommunicationConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunicationConversationDefaultArgs<ExtArgs>>): Prisma__CommunicationConversationClient<$Result.GetResult<Prisma.$CommunicationConversationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the CommunicationMessage model
   */ 
  interface CommunicationMessageFieldRefs {
    readonly id: FieldRef<"CommunicationMessage", 'String'>
    readonly userId: FieldRef<"CommunicationMessage", 'String'>
    readonly conversationId: FieldRef<"CommunicationMessage", 'String'>
    readonly connectedAccountId: FieldRef<"CommunicationMessage", 'String'>
    readonly source: FieldRef<"CommunicationMessage", 'String'>
    readonly remoteMessageId: FieldRef<"CommunicationMessage", 'String'>
    readonly senderId: FieldRef<"CommunicationMessage", 'String'>
    readonly senderName: FieldRef<"CommunicationMessage", 'String'>
    readonly text: FieldRef<"CommunicationMessage", 'String'>
    readonly messageType: FieldRef<"CommunicationMessage", 'String'>
    readonly isFromMe: FieldRef<"CommunicationMessage", 'Boolean'>
    readonly isRead: FieldRef<"CommunicationMessage", 'Boolean'>
    readonly sentAt: FieldRef<"CommunicationMessage", 'DateTime'>
    readonly createdAt: FieldRef<"CommunicationMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunicationMessage", 'DateTime'>
    readonly aiCategory: FieldRef<"CommunicationMessage", 'AICategory'>
    readonly aiPriority: FieldRef<"CommunicationMessage", 'AIPriority'>
    readonly aiActionable: FieldRef<"CommunicationMessage", 'Boolean'>
    readonly aiSummary: FieldRef<"CommunicationMessage", 'String'>
    readonly aiReason: FieldRef<"CommunicationMessage", 'String'>
    readonly aiProcessedAt: FieldRef<"CommunicationMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunicationMessage findUnique
   */
  export type CommunicationMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationMessage to fetch.
     */
    where: CommunicationMessageWhereUniqueInput
  }

  /**
   * CommunicationMessage findUniqueOrThrow
   */
  export type CommunicationMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationMessage to fetch.
     */
    where: CommunicationMessageWhereUniqueInput
  }

  /**
   * CommunicationMessage findFirst
   */
  export type CommunicationMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationMessage to fetch.
     */
    where?: CommunicationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationMessages to fetch.
     */
    orderBy?: CommunicationMessageOrderByWithRelationInput | CommunicationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationMessages.
     */
    cursor?: CommunicationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationMessages.
     */
    distinct?: CommunicationMessageScalarFieldEnum | CommunicationMessageScalarFieldEnum[]
  }

  /**
   * CommunicationMessage findFirstOrThrow
   */
  export type CommunicationMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationMessage to fetch.
     */
    where?: CommunicationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationMessages to fetch.
     */
    orderBy?: CommunicationMessageOrderByWithRelationInput | CommunicationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationMessages.
     */
    cursor?: CommunicationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationMessages.
     */
    distinct?: CommunicationMessageScalarFieldEnum | CommunicationMessageScalarFieldEnum[]
  }

  /**
   * CommunicationMessage findMany
   */
  export type CommunicationMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationMessages to fetch.
     */
    where?: CommunicationMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationMessages to fetch.
     */
    orderBy?: CommunicationMessageOrderByWithRelationInput | CommunicationMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunicationMessages.
     */
    cursor?: CommunicationMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationMessages.
     */
    skip?: number
    distinct?: CommunicationMessageScalarFieldEnum | CommunicationMessageScalarFieldEnum[]
  }

  /**
   * CommunicationMessage create
   */
  export type CommunicationMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunicationMessage.
     */
    data: XOR<CommunicationMessageCreateInput, CommunicationMessageUncheckedCreateInput>
  }

  /**
   * CommunicationMessage createMany
   */
  export type CommunicationMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunicationMessages.
     */
    data: CommunicationMessageCreateManyInput | CommunicationMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunicationMessage createManyAndReturn
   */
  export type CommunicationMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * The data used to create many CommunicationMessages.
     */
    data: CommunicationMessageCreateManyInput | CommunicationMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunicationMessage update
   */
  export type CommunicationMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunicationMessage.
     */
    data: XOR<CommunicationMessageUpdateInput, CommunicationMessageUncheckedUpdateInput>
    /**
     * Choose, which CommunicationMessage to update.
     */
    where: CommunicationMessageWhereUniqueInput
  }

  /**
   * CommunicationMessage updateMany
   */
  export type CommunicationMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunicationMessages.
     */
    data: XOR<CommunicationMessageUpdateManyMutationInput, CommunicationMessageUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationMessages to update
     */
    where?: CommunicationMessageWhereInput
    /**
     * Limit how many CommunicationMessages to update.
     */
    limit?: number
  }

  /**
   * CommunicationMessage updateManyAndReturn
   */
  export type CommunicationMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * The data used to update CommunicationMessages.
     */
    data: XOR<CommunicationMessageUpdateManyMutationInput, CommunicationMessageUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationMessages to update
     */
    where?: CommunicationMessageWhereInput
    /**
     * Limit how many CommunicationMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunicationMessage upsert
   */
  export type CommunicationMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunicationMessage to update in case it exists.
     */
    where: CommunicationMessageWhereUniqueInput
    /**
     * In case the CommunicationMessage found by the `where` argument doesn't exist, create a new CommunicationMessage with this data.
     */
    create: XOR<CommunicationMessageCreateInput, CommunicationMessageUncheckedCreateInput>
    /**
     * In case the CommunicationMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunicationMessageUpdateInput, CommunicationMessageUncheckedUpdateInput>
  }

  /**
   * CommunicationMessage delete
   */
  export type CommunicationMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
    /**
     * Filter which CommunicationMessage to delete.
     */
    where: CommunicationMessageWhereUniqueInput
  }

  /**
   * CommunicationMessage deleteMany
   */
  export type CommunicationMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationMessages to delete
     */
    where?: CommunicationMessageWhereInput
    /**
     * Limit how many CommunicationMessages to delete.
     */
    limit?: number
  }

  /**
   * CommunicationMessage without action
   */
  export type CommunicationMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationMessage
     */
    select?: CommunicationMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationMessage
     */
    omit?: CommunicationMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationMessageInclude<ExtArgs> | null
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
    name: 'name',
    passwordHash: 'passwordHash',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConnectedAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    email: 'email',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    scope: 'scope',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConnectedAccountScalarFieldEnum = (typeof ConnectedAccountScalarFieldEnum)[keyof typeof ConnectedAccountScalarFieldEnum]


  export const EmailMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    connectedAccountId: 'connectedAccountId',
    gmailMessageId: 'gmailMessageId',
    threadId: 'threadId',
    sender: 'sender',
    recipients: 'recipients',
    subject: 'subject',
    snippet: 'snippet',
    bodyText: 'bodyText',
    receivedAt: 'receivedAt',
    isRead: 'isRead',
    labels: 'labels',
    aiCategory: 'aiCategory',
    aiPriority: 'aiPriority',
    aiActionable: 'aiActionable',
    aiSummary: 'aiSummary',
    aiReason: 'aiReason',
    aiProcessedAt: 'aiProcessedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailMessageScalarFieldEnum = (typeof EmailMessageScalarFieldEnum)[keyof typeof EmailMessageScalarFieldEnum]


  export const ConnectedCalendarScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    connectedAccountId: 'connectedAccountId',
    googleCalendarId: 'googleCalendarId',
    summary: 'summary',
    description: 'description',
    timeZone: 'timeZone',
    isPrimary: 'isPrimary',
    isSelected: 'isSelected',
    accessRole: 'accessRole',
    syncToken: 'syncToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConnectedCalendarScalarFieldEnum = (typeof ConnectedCalendarScalarFieldEnum)[keyof typeof ConnectedCalendarScalarFieldEnum]


  export const CalendarEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    connectedAccountId: 'connectedAccountId',
    calendarId: 'calendarId',
    googleEventId: 'googleEventId',
    title: 'title',
    description: 'description',
    location: 'location',
    startTime: 'startTime',
    endTime: 'endTime',
    isAllDay: 'isAllDay',
    timeZone: 'timeZone',
    status: 'status',
    htmlLink: 'htmlLink',
    organizer: 'organizer',
    attendees: 'attendees',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalendarEventScalarFieldEnum = (typeof CalendarEventScalarFieldEnum)[keyof typeof CalendarEventScalarFieldEnum]


  export const WhatsAppSessionScalarFieldEnum: {
    id: 'id',
    connectedAccountId: 'connectedAccountId',
    creds: 'creds',
    keys: 'keys',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhatsAppSessionScalarFieldEnum = (typeof WhatsAppSessionScalarFieldEnum)[keyof typeof WhatsAppSessionScalarFieldEnum]


  export const CommunicationConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    connectedAccountId: 'connectedAccountId',
    source: 'source',
    remoteConversationId: 'remoteConversationId',
    title: 'title',
    avatar: 'avatar',
    isGroup: 'isGroup',
    lastMessageAt: 'lastMessageAt',
    lastMessagePreview: 'lastMessagePreview',
    unreadCount: 'unreadCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunicationConversationScalarFieldEnum = (typeof CommunicationConversationScalarFieldEnum)[keyof typeof CommunicationConversationScalarFieldEnum]


  export const CommunicationParticipantScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    remoteParticipantId: 'remoteParticipantId',
    phone: 'phone',
    displayName: 'displayName',
    avatar: 'avatar',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunicationParticipantScalarFieldEnum = (typeof CommunicationParticipantScalarFieldEnum)[keyof typeof CommunicationParticipantScalarFieldEnum]


  export const CommunicationMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    conversationId: 'conversationId',
    connectedAccountId: 'connectedAccountId',
    source: 'source',
    remoteMessageId: 'remoteMessageId',
    senderId: 'senderId',
    senderName: 'senderName',
    text: 'text',
    messageType: 'messageType',
    isFromMe: 'isFromMe',
    isRead: 'isRead',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    aiCategory: 'aiCategory',
    aiPriority: 'aiPriority',
    aiActionable: 'aiActionable',
    aiSummary: 'aiSummary',
    aiReason: 'aiReason',
    aiProcessedAt: 'aiProcessedAt'
  };

  export type CommunicationMessageScalarFieldEnum = (typeof CommunicationMessageScalarFieldEnum)[keyof typeof CommunicationMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'AICategory'
   */
  export type EnumAICategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AICategory'>
    


  /**
   * Reference to a field of type 'AICategory[]'
   */
  export type ListEnumAICategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AICategory[]'>
    


  /**
   * Reference to a field of type 'AIPriority'
   */
  export type EnumAIPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIPriority'>
    


  /**
   * Reference to a field of type 'AIPriority[]'
   */
  export type ListEnumAIPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIPriority[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    connectedAccounts?: ConnectedAccountListRelationFilter
    emailMessages?: EmailMessageListRelationFilter
    connectedCalendars?: ConnectedCalendarListRelationFilter
    calendarEvents?: CalendarEventListRelationFilter
    communicationConversations?: CommunicationConversationListRelationFilter
    communicationMessages?: CommunicationMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    connectedAccounts?: ConnectedAccountOrderByRelationAggregateInput
    emailMessages?: EmailMessageOrderByRelationAggregateInput
    connectedCalendars?: ConnectedCalendarOrderByRelationAggregateInput
    calendarEvents?: CalendarEventOrderByRelationAggregateInput
    communicationConversations?: CommunicationConversationOrderByRelationAggregateInput
    communicationMessages?: CommunicationMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    connectedAccounts?: ConnectedAccountListRelationFilter
    emailMessages?: EmailMessageListRelationFilter
    connectedCalendars?: ConnectedCalendarListRelationFilter
    calendarEvents?: CalendarEventListRelationFilter
    communicationConversations?: CommunicationConversationListRelationFilter
    communicationMessages?: CommunicationMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ConnectedAccountWhereInput = {
    AND?: ConnectedAccountWhereInput | ConnectedAccountWhereInput[]
    OR?: ConnectedAccountWhereInput[]
    NOT?: ConnectedAccountWhereInput | ConnectedAccountWhereInput[]
    id?: StringFilter<"ConnectedAccount"> | string
    userId?: StringFilter<"ConnectedAccount"> | string
    provider?: StringFilter<"ConnectedAccount"> | string
    providerAccountId?: StringFilter<"ConnectedAccount"> | string
    email?: StringNullableFilter<"ConnectedAccount"> | string | null
    accessToken?: StringNullableFilter<"ConnectedAccount"> | string | null
    refreshToken?: StringNullableFilter<"ConnectedAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"ConnectedAccount"> | Date | string | null
    scope?: StringNullableFilter<"ConnectedAccount"> | string | null
    status?: StringNullableFilter<"ConnectedAccount"> | string | null
    createdAt?: DateTimeFilter<"ConnectedAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectedAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emailMessages?: EmailMessageListRelationFilter
    connectedCalendars?: ConnectedCalendarListRelationFilter
    calendarEvents?: CalendarEventListRelationFilter
    whatsappSession?: XOR<WhatsAppSessionNullableScalarRelationFilter, WhatsAppSessionWhereInput> | null
    communicationConversations?: CommunicationConversationListRelationFilter
    communicationMessages?: CommunicationMessageListRelationFilter
  }

  export type ConnectedAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    email?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    emailMessages?: EmailMessageOrderByRelationAggregateInput
    connectedCalendars?: ConnectedCalendarOrderByRelationAggregateInput
    calendarEvents?: CalendarEventOrderByRelationAggregateInput
    whatsappSession?: WhatsAppSessionOrderByWithRelationInput
    communicationConversations?: CommunicationConversationOrderByRelationAggregateInput
    communicationMessages?: CommunicationMessageOrderByRelationAggregateInput
  }

  export type ConnectedAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: ConnectedAccountProviderProviderAccountIdCompoundUniqueInput
    AND?: ConnectedAccountWhereInput | ConnectedAccountWhereInput[]
    OR?: ConnectedAccountWhereInput[]
    NOT?: ConnectedAccountWhereInput | ConnectedAccountWhereInput[]
    userId?: StringFilter<"ConnectedAccount"> | string
    provider?: StringFilter<"ConnectedAccount"> | string
    providerAccountId?: StringFilter<"ConnectedAccount"> | string
    email?: StringNullableFilter<"ConnectedAccount"> | string | null
    accessToken?: StringNullableFilter<"ConnectedAccount"> | string | null
    refreshToken?: StringNullableFilter<"ConnectedAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"ConnectedAccount"> | Date | string | null
    scope?: StringNullableFilter<"ConnectedAccount"> | string | null
    status?: StringNullableFilter<"ConnectedAccount"> | string | null
    createdAt?: DateTimeFilter<"ConnectedAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectedAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    emailMessages?: EmailMessageListRelationFilter
    connectedCalendars?: ConnectedCalendarListRelationFilter
    calendarEvents?: CalendarEventListRelationFilter
    whatsappSession?: XOR<WhatsAppSessionNullableScalarRelationFilter, WhatsAppSessionWhereInput> | null
    communicationConversations?: CommunicationConversationListRelationFilter
    communicationMessages?: CommunicationMessageListRelationFilter
  }, "id" | "provider_providerAccountId">

  export type ConnectedAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    email?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConnectedAccountCountOrderByAggregateInput
    _max?: ConnectedAccountMaxOrderByAggregateInput
    _min?: ConnectedAccountMinOrderByAggregateInput
  }

  export type ConnectedAccountScalarWhereWithAggregatesInput = {
    AND?: ConnectedAccountScalarWhereWithAggregatesInput | ConnectedAccountScalarWhereWithAggregatesInput[]
    OR?: ConnectedAccountScalarWhereWithAggregatesInput[]
    NOT?: ConnectedAccountScalarWhereWithAggregatesInput | ConnectedAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConnectedAccount"> | string
    userId?: StringWithAggregatesFilter<"ConnectedAccount"> | string
    provider?: StringWithAggregatesFilter<"ConnectedAccount"> | string
    providerAccountId?: StringWithAggregatesFilter<"ConnectedAccount"> | string
    email?: StringNullableWithAggregatesFilter<"ConnectedAccount"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"ConnectedAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"ConnectedAccount"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ConnectedAccount"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"ConnectedAccount"> | string | null
    status?: StringNullableWithAggregatesFilter<"ConnectedAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ConnectedAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConnectedAccount"> | Date | string
  }

  export type EmailMessageWhereInput = {
    AND?: EmailMessageWhereInput | EmailMessageWhereInput[]
    OR?: EmailMessageWhereInput[]
    NOT?: EmailMessageWhereInput | EmailMessageWhereInput[]
    id?: StringFilter<"EmailMessage"> | string
    userId?: StringFilter<"EmailMessage"> | string
    connectedAccountId?: StringFilter<"EmailMessage"> | string
    gmailMessageId?: StringFilter<"EmailMessage"> | string
    threadId?: StringNullableFilter<"EmailMessage"> | string | null
    sender?: StringNullableFilter<"EmailMessage"> | string | null
    recipients?: StringNullableFilter<"EmailMessage"> | string | null
    subject?: StringNullableFilter<"EmailMessage"> | string | null
    snippet?: StringNullableFilter<"EmailMessage"> | string | null
    bodyText?: StringNullableFilter<"EmailMessage"> | string | null
    receivedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    isRead?: BoolFilter<"EmailMessage"> | boolean
    labels?: StringNullableFilter<"EmailMessage"> | string | null
    aiCategory?: EnumAICategoryNullableFilter<"EmailMessage"> | $Enums.AICategory | null
    aiPriority?: EnumAIPriorityNullableFilter<"EmailMessage"> | $Enums.AIPriority | null
    aiActionable?: BoolNullableFilter<"EmailMessage"> | boolean | null
    aiSummary?: StringNullableFilter<"EmailMessage"> | string | null
    aiReason?: StringNullableFilter<"EmailMessage"> | string | null
    aiProcessedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailMessage"> | Date | string
    updatedAt?: DateTimeFilter<"EmailMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
  }

  export type EmailMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    gmailMessageId?: SortOrder
    threadId?: SortOrderInput | SortOrder
    sender?: SortOrderInput | SortOrder
    recipients?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    snippet?: SortOrderInput | SortOrder
    bodyText?: SortOrderInput | SortOrder
    receivedAt?: SortOrderInput | SortOrder
    isRead?: SortOrder
    labels?: SortOrderInput | SortOrder
    aiCategory?: SortOrderInput | SortOrder
    aiPriority?: SortOrderInput | SortOrder
    aiActionable?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    aiReason?: SortOrderInput | SortOrder
    aiProcessedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    connectedAccount?: ConnectedAccountOrderByWithRelationInput
  }

  export type EmailMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_gmailMessageId?: EmailMessageUserIdGmailMessageIdCompoundUniqueInput
    AND?: EmailMessageWhereInput | EmailMessageWhereInput[]
    OR?: EmailMessageWhereInput[]
    NOT?: EmailMessageWhereInput | EmailMessageWhereInput[]
    userId?: StringFilter<"EmailMessage"> | string
    connectedAccountId?: StringFilter<"EmailMessage"> | string
    gmailMessageId?: StringFilter<"EmailMessage"> | string
    threadId?: StringNullableFilter<"EmailMessage"> | string | null
    sender?: StringNullableFilter<"EmailMessage"> | string | null
    recipients?: StringNullableFilter<"EmailMessage"> | string | null
    subject?: StringNullableFilter<"EmailMessage"> | string | null
    snippet?: StringNullableFilter<"EmailMessage"> | string | null
    bodyText?: StringNullableFilter<"EmailMessage"> | string | null
    receivedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    isRead?: BoolFilter<"EmailMessage"> | boolean
    labels?: StringNullableFilter<"EmailMessage"> | string | null
    aiCategory?: EnumAICategoryNullableFilter<"EmailMessage"> | $Enums.AICategory | null
    aiPriority?: EnumAIPriorityNullableFilter<"EmailMessage"> | $Enums.AIPriority | null
    aiActionable?: BoolNullableFilter<"EmailMessage"> | boolean | null
    aiSummary?: StringNullableFilter<"EmailMessage"> | string | null
    aiReason?: StringNullableFilter<"EmailMessage"> | string | null
    aiProcessedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailMessage"> | Date | string
    updatedAt?: DateTimeFilter<"EmailMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
  }, "id" | "userId_gmailMessageId">

  export type EmailMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    gmailMessageId?: SortOrder
    threadId?: SortOrderInput | SortOrder
    sender?: SortOrderInput | SortOrder
    recipients?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    snippet?: SortOrderInput | SortOrder
    bodyText?: SortOrderInput | SortOrder
    receivedAt?: SortOrderInput | SortOrder
    isRead?: SortOrder
    labels?: SortOrderInput | SortOrder
    aiCategory?: SortOrderInput | SortOrder
    aiPriority?: SortOrderInput | SortOrder
    aiActionable?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    aiReason?: SortOrderInput | SortOrder
    aiProcessedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailMessageCountOrderByAggregateInput
    _max?: EmailMessageMaxOrderByAggregateInput
    _min?: EmailMessageMinOrderByAggregateInput
  }

  export type EmailMessageScalarWhereWithAggregatesInput = {
    AND?: EmailMessageScalarWhereWithAggregatesInput | EmailMessageScalarWhereWithAggregatesInput[]
    OR?: EmailMessageScalarWhereWithAggregatesInput[]
    NOT?: EmailMessageScalarWhereWithAggregatesInput | EmailMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailMessage"> | string
    userId?: StringWithAggregatesFilter<"EmailMessage"> | string
    connectedAccountId?: StringWithAggregatesFilter<"EmailMessage"> | string
    gmailMessageId?: StringWithAggregatesFilter<"EmailMessage"> | string
    threadId?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    sender?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    recipients?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    subject?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    snippet?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    bodyText?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    receivedAt?: DateTimeNullableWithAggregatesFilter<"EmailMessage"> | Date | string | null
    isRead?: BoolWithAggregatesFilter<"EmailMessage"> | boolean
    labels?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    aiCategory?: EnumAICategoryNullableWithAggregatesFilter<"EmailMessage"> | $Enums.AICategory | null
    aiPriority?: EnumAIPriorityNullableWithAggregatesFilter<"EmailMessage"> | $Enums.AIPriority | null
    aiActionable?: BoolNullableWithAggregatesFilter<"EmailMessage"> | boolean | null
    aiSummary?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    aiReason?: StringNullableWithAggregatesFilter<"EmailMessage"> | string | null
    aiProcessedAt?: DateTimeNullableWithAggregatesFilter<"EmailMessage"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailMessage"> | Date | string
  }

  export type ConnectedCalendarWhereInput = {
    AND?: ConnectedCalendarWhereInput | ConnectedCalendarWhereInput[]
    OR?: ConnectedCalendarWhereInput[]
    NOT?: ConnectedCalendarWhereInput | ConnectedCalendarWhereInput[]
    id?: StringFilter<"ConnectedCalendar"> | string
    userId?: StringFilter<"ConnectedCalendar"> | string
    connectedAccountId?: StringFilter<"ConnectedCalendar"> | string
    googleCalendarId?: StringFilter<"ConnectedCalendar"> | string
    summary?: StringFilter<"ConnectedCalendar"> | string
    description?: StringNullableFilter<"ConnectedCalendar"> | string | null
    timeZone?: StringNullableFilter<"ConnectedCalendar"> | string | null
    isPrimary?: BoolFilter<"ConnectedCalendar"> | boolean
    isSelected?: BoolFilter<"ConnectedCalendar"> | boolean
    accessRole?: StringNullableFilter<"ConnectedCalendar"> | string | null
    syncToken?: StringNullableFilter<"ConnectedCalendar"> | string | null
    createdAt?: DateTimeFilter<"ConnectedCalendar"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectedCalendar"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
    calendarEvents?: CalendarEventListRelationFilter
  }

  export type ConnectedCalendarOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    googleCalendarId?: SortOrder
    summary?: SortOrder
    description?: SortOrderInput | SortOrder
    timeZone?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    isSelected?: SortOrder
    accessRole?: SortOrderInput | SortOrder
    syncToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    connectedAccount?: ConnectedAccountOrderByWithRelationInput
    calendarEvents?: CalendarEventOrderByRelationAggregateInput
  }

  export type ConnectedCalendarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    connectedAccountId_googleCalendarId?: ConnectedCalendarConnectedAccountIdGoogleCalendarIdCompoundUniqueInput
    AND?: ConnectedCalendarWhereInput | ConnectedCalendarWhereInput[]
    OR?: ConnectedCalendarWhereInput[]
    NOT?: ConnectedCalendarWhereInput | ConnectedCalendarWhereInput[]
    userId?: StringFilter<"ConnectedCalendar"> | string
    connectedAccountId?: StringFilter<"ConnectedCalendar"> | string
    googleCalendarId?: StringFilter<"ConnectedCalendar"> | string
    summary?: StringFilter<"ConnectedCalendar"> | string
    description?: StringNullableFilter<"ConnectedCalendar"> | string | null
    timeZone?: StringNullableFilter<"ConnectedCalendar"> | string | null
    isPrimary?: BoolFilter<"ConnectedCalendar"> | boolean
    isSelected?: BoolFilter<"ConnectedCalendar"> | boolean
    accessRole?: StringNullableFilter<"ConnectedCalendar"> | string | null
    syncToken?: StringNullableFilter<"ConnectedCalendar"> | string | null
    createdAt?: DateTimeFilter<"ConnectedCalendar"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectedCalendar"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
    calendarEvents?: CalendarEventListRelationFilter
  }, "id" | "connectedAccountId_googleCalendarId">

  export type ConnectedCalendarOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    googleCalendarId?: SortOrder
    summary?: SortOrder
    description?: SortOrderInput | SortOrder
    timeZone?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    isSelected?: SortOrder
    accessRole?: SortOrderInput | SortOrder
    syncToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConnectedCalendarCountOrderByAggregateInput
    _max?: ConnectedCalendarMaxOrderByAggregateInput
    _min?: ConnectedCalendarMinOrderByAggregateInput
  }

  export type ConnectedCalendarScalarWhereWithAggregatesInput = {
    AND?: ConnectedCalendarScalarWhereWithAggregatesInput | ConnectedCalendarScalarWhereWithAggregatesInput[]
    OR?: ConnectedCalendarScalarWhereWithAggregatesInput[]
    NOT?: ConnectedCalendarScalarWhereWithAggregatesInput | ConnectedCalendarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConnectedCalendar"> | string
    userId?: StringWithAggregatesFilter<"ConnectedCalendar"> | string
    connectedAccountId?: StringWithAggregatesFilter<"ConnectedCalendar"> | string
    googleCalendarId?: StringWithAggregatesFilter<"ConnectedCalendar"> | string
    summary?: StringWithAggregatesFilter<"ConnectedCalendar"> | string
    description?: StringNullableWithAggregatesFilter<"ConnectedCalendar"> | string | null
    timeZone?: StringNullableWithAggregatesFilter<"ConnectedCalendar"> | string | null
    isPrimary?: BoolWithAggregatesFilter<"ConnectedCalendar"> | boolean
    isSelected?: BoolWithAggregatesFilter<"ConnectedCalendar"> | boolean
    accessRole?: StringNullableWithAggregatesFilter<"ConnectedCalendar"> | string | null
    syncToken?: StringNullableWithAggregatesFilter<"ConnectedCalendar"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ConnectedCalendar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConnectedCalendar"> | Date | string
  }

  export type CalendarEventWhereInput = {
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    id?: StringFilter<"CalendarEvent"> | string
    userId?: StringFilter<"CalendarEvent"> | string
    connectedAccountId?: StringFilter<"CalendarEvent"> | string
    calendarId?: StringFilter<"CalendarEvent"> | string
    googleEventId?: StringFilter<"CalendarEvent"> | string
    title?: StringFilter<"CalendarEvent"> | string
    description?: StringNullableFilter<"CalendarEvent"> | string | null
    location?: StringNullableFilter<"CalendarEvent"> | string | null
    startTime?: DateTimeFilter<"CalendarEvent"> | Date | string
    endTime?: DateTimeFilter<"CalendarEvent"> | Date | string
    isAllDay?: BoolFilter<"CalendarEvent"> | boolean
    timeZone?: StringNullableFilter<"CalendarEvent"> | string | null
    status?: StringNullableFilter<"CalendarEvent"> | string | null
    htmlLink?: StringNullableFilter<"CalendarEvent"> | string | null
    organizer?: StringNullableFilter<"CalendarEvent"> | string | null
    attendees?: StringNullableFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeFilter<"CalendarEvent"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
    calendar?: XOR<ConnectedCalendarScalarRelationFilter, ConnectedCalendarWhereInput>
  }

  export type CalendarEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    calendarId?: SortOrder
    googleEventId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAllDay?: SortOrder
    timeZone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    htmlLink?: SortOrderInput | SortOrder
    organizer?: SortOrderInput | SortOrder
    attendees?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    connectedAccount?: ConnectedAccountOrderByWithRelationInput
    calendar?: ConnectedCalendarOrderByWithRelationInput
  }

  export type CalendarEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    calendarId_googleEventId?: CalendarEventCalendarIdGoogleEventIdCompoundUniqueInput
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    userId?: StringFilter<"CalendarEvent"> | string
    connectedAccountId?: StringFilter<"CalendarEvent"> | string
    calendarId?: StringFilter<"CalendarEvent"> | string
    googleEventId?: StringFilter<"CalendarEvent"> | string
    title?: StringFilter<"CalendarEvent"> | string
    description?: StringNullableFilter<"CalendarEvent"> | string | null
    location?: StringNullableFilter<"CalendarEvent"> | string | null
    startTime?: DateTimeFilter<"CalendarEvent"> | Date | string
    endTime?: DateTimeFilter<"CalendarEvent"> | Date | string
    isAllDay?: BoolFilter<"CalendarEvent"> | boolean
    timeZone?: StringNullableFilter<"CalendarEvent"> | string | null
    status?: StringNullableFilter<"CalendarEvent"> | string | null
    htmlLink?: StringNullableFilter<"CalendarEvent"> | string | null
    organizer?: StringNullableFilter<"CalendarEvent"> | string | null
    attendees?: StringNullableFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeFilter<"CalendarEvent"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
    calendar?: XOR<ConnectedCalendarScalarRelationFilter, ConnectedCalendarWhereInput>
  }, "id" | "calendarId_googleEventId">

  export type CalendarEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    calendarId?: SortOrder
    googleEventId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAllDay?: SortOrder
    timeZone?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    htmlLink?: SortOrderInput | SortOrder
    organizer?: SortOrderInput | SortOrder
    attendees?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalendarEventCountOrderByAggregateInput
    _max?: CalendarEventMaxOrderByAggregateInput
    _min?: CalendarEventMinOrderByAggregateInput
  }

  export type CalendarEventScalarWhereWithAggregatesInput = {
    AND?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    OR?: CalendarEventScalarWhereWithAggregatesInput[]
    NOT?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalendarEvent"> | string
    userId?: StringWithAggregatesFilter<"CalendarEvent"> | string
    connectedAccountId?: StringWithAggregatesFilter<"CalendarEvent"> | string
    calendarId?: StringWithAggregatesFilter<"CalendarEvent"> | string
    googleEventId?: StringWithAggregatesFilter<"CalendarEvent"> | string
    title?: StringWithAggregatesFilter<"CalendarEvent"> | string
    description?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    location?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
    isAllDay?: BoolWithAggregatesFilter<"CalendarEvent"> | boolean
    timeZone?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    status?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    htmlLink?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    organizer?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    attendees?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
  }

  export type WhatsAppSessionWhereInput = {
    AND?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    OR?: WhatsAppSessionWhereInput[]
    NOT?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    id?: StringFilter<"WhatsAppSession"> | string
    connectedAccountId?: StringFilter<"WhatsAppSession"> | string
    creds?: StringFilter<"WhatsAppSession"> | string
    keys?: StringFilter<"WhatsAppSession"> | string
    createdAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
  }

  export type WhatsAppSessionOrderByWithRelationInput = {
    id?: SortOrder
    connectedAccountId?: SortOrder
    creds?: SortOrder
    keys?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    connectedAccount?: ConnectedAccountOrderByWithRelationInput
  }

  export type WhatsAppSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    connectedAccountId?: string
    AND?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    OR?: WhatsAppSessionWhereInput[]
    NOT?: WhatsAppSessionWhereInput | WhatsAppSessionWhereInput[]
    creds?: StringFilter<"WhatsAppSession"> | string
    keys?: StringFilter<"WhatsAppSession"> | string
    createdAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeFilter<"WhatsAppSession"> | Date | string
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
  }, "id" | "connectedAccountId">

  export type WhatsAppSessionOrderByWithAggregationInput = {
    id?: SortOrder
    connectedAccountId?: SortOrder
    creds?: SortOrder
    keys?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhatsAppSessionCountOrderByAggregateInput
    _max?: WhatsAppSessionMaxOrderByAggregateInput
    _min?: WhatsAppSessionMinOrderByAggregateInput
  }

  export type WhatsAppSessionScalarWhereWithAggregatesInput = {
    AND?: WhatsAppSessionScalarWhereWithAggregatesInput | WhatsAppSessionScalarWhereWithAggregatesInput[]
    OR?: WhatsAppSessionScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppSessionScalarWhereWithAggregatesInput | WhatsAppSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    connectedAccountId?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    creds?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    keys?: StringWithAggregatesFilter<"WhatsAppSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WhatsAppSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WhatsAppSession"> | Date | string
  }

  export type CommunicationConversationWhereInput = {
    AND?: CommunicationConversationWhereInput | CommunicationConversationWhereInput[]
    OR?: CommunicationConversationWhereInput[]
    NOT?: CommunicationConversationWhereInput | CommunicationConversationWhereInput[]
    id?: StringFilter<"CommunicationConversation"> | string
    userId?: StringFilter<"CommunicationConversation"> | string
    connectedAccountId?: StringFilter<"CommunicationConversation"> | string
    source?: StringFilter<"CommunicationConversation"> | string
    remoteConversationId?: StringFilter<"CommunicationConversation"> | string
    title?: StringNullableFilter<"CommunicationConversation"> | string | null
    avatar?: StringNullableFilter<"CommunicationConversation"> | string | null
    isGroup?: BoolFilter<"CommunicationConversation"> | boolean
    lastMessageAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
    lastMessagePreview?: StringNullableFilter<"CommunicationConversation"> | string | null
    unreadCount?: IntFilter<"CommunicationConversation"> | number
    createdAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
    messages?: CommunicationMessageListRelationFilter
    participants?: CommunicationParticipantListRelationFilter
  }

  export type CommunicationConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteConversationId?: SortOrder
    title?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    lastMessageAt?: SortOrder
    lastMessagePreview?: SortOrderInput | SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    connectedAccount?: ConnectedAccountOrderByWithRelationInput
    messages?: CommunicationMessageOrderByRelationAggregateInput
    participants?: CommunicationParticipantOrderByRelationAggregateInput
  }

  export type CommunicationConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    connectedAccountId_remoteConversationId?: CommunicationConversationConnectedAccountIdRemoteConversationIdCompoundUniqueInput
    AND?: CommunicationConversationWhereInput | CommunicationConversationWhereInput[]
    OR?: CommunicationConversationWhereInput[]
    NOT?: CommunicationConversationWhereInput | CommunicationConversationWhereInput[]
    userId?: StringFilter<"CommunicationConversation"> | string
    connectedAccountId?: StringFilter<"CommunicationConversation"> | string
    source?: StringFilter<"CommunicationConversation"> | string
    remoteConversationId?: StringFilter<"CommunicationConversation"> | string
    title?: StringNullableFilter<"CommunicationConversation"> | string | null
    avatar?: StringNullableFilter<"CommunicationConversation"> | string | null
    isGroup?: BoolFilter<"CommunicationConversation"> | boolean
    lastMessageAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
    lastMessagePreview?: StringNullableFilter<"CommunicationConversation"> | string | null
    unreadCount?: IntFilter<"CommunicationConversation"> | number
    createdAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
    messages?: CommunicationMessageListRelationFilter
    participants?: CommunicationParticipantListRelationFilter
  }, "id" | "connectedAccountId_remoteConversationId">

  export type CommunicationConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteConversationId?: SortOrder
    title?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    isGroup?: SortOrder
    lastMessageAt?: SortOrder
    lastMessagePreview?: SortOrderInput | SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunicationConversationCountOrderByAggregateInput
    _avg?: CommunicationConversationAvgOrderByAggregateInput
    _max?: CommunicationConversationMaxOrderByAggregateInput
    _min?: CommunicationConversationMinOrderByAggregateInput
    _sum?: CommunicationConversationSumOrderByAggregateInput
  }

  export type CommunicationConversationScalarWhereWithAggregatesInput = {
    AND?: CommunicationConversationScalarWhereWithAggregatesInput | CommunicationConversationScalarWhereWithAggregatesInput[]
    OR?: CommunicationConversationScalarWhereWithAggregatesInput[]
    NOT?: CommunicationConversationScalarWhereWithAggregatesInput | CommunicationConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunicationConversation"> | string
    userId?: StringWithAggregatesFilter<"CommunicationConversation"> | string
    connectedAccountId?: StringWithAggregatesFilter<"CommunicationConversation"> | string
    source?: StringWithAggregatesFilter<"CommunicationConversation"> | string
    remoteConversationId?: StringWithAggregatesFilter<"CommunicationConversation"> | string
    title?: StringNullableWithAggregatesFilter<"CommunicationConversation"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"CommunicationConversation"> | string | null
    isGroup?: BoolWithAggregatesFilter<"CommunicationConversation"> | boolean
    lastMessageAt?: DateTimeWithAggregatesFilter<"CommunicationConversation"> | Date | string
    lastMessagePreview?: StringNullableWithAggregatesFilter<"CommunicationConversation"> | string | null
    unreadCount?: IntWithAggregatesFilter<"CommunicationConversation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CommunicationConversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunicationConversation"> | Date | string
  }

  export type CommunicationParticipantWhereInput = {
    AND?: CommunicationParticipantWhereInput | CommunicationParticipantWhereInput[]
    OR?: CommunicationParticipantWhereInput[]
    NOT?: CommunicationParticipantWhereInput | CommunicationParticipantWhereInput[]
    id?: StringFilter<"CommunicationParticipant"> | string
    conversationId?: StringFilter<"CommunicationParticipant"> | string
    remoteParticipantId?: StringFilter<"CommunicationParticipant"> | string
    phone?: StringNullableFilter<"CommunicationParticipant"> | string | null
    displayName?: StringNullableFilter<"CommunicationParticipant"> | string | null
    avatar?: StringNullableFilter<"CommunicationParticipant"> | string | null
    role?: StringNullableFilter<"CommunicationParticipant"> | string | null
    createdAt?: DateTimeFilter<"CommunicationParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationParticipant"> | Date | string
    conversation?: XOR<CommunicationConversationScalarRelationFilter, CommunicationConversationWhereInput>
  }

  export type CommunicationParticipantOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    remoteParticipantId?: SortOrder
    phone?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conversation?: CommunicationConversationOrderByWithRelationInput
  }

  export type CommunicationParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    conversationId_remoteParticipantId?: CommunicationParticipantConversationIdRemoteParticipantIdCompoundUniqueInput
    AND?: CommunicationParticipantWhereInput | CommunicationParticipantWhereInput[]
    OR?: CommunicationParticipantWhereInput[]
    NOT?: CommunicationParticipantWhereInput | CommunicationParticipantWhereInput[]
    conversationId?: StringFilter<"CommunicationParticipant"> | string
    remoteParticipantId?: StringFilter<"CommunicationParticipant"> | string
    phone?: StringNullableFilter<"CommunicationParticipant"> | string | null
    displayName?: StringNullableFilter<"CommunicationParticipant"> | string | null
    avatar?: StringNullableFilter<"CommunicationParticipant"> | string | null
    role?: StringNullableFilter<"CommunicationParticipant"> | string | null
    createdAt?: DateTimeFilter<"CommunicationParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationParticipant"> | Date | string
    conversation?: XOR<CommunicationConversationScalarRelationFilter, CommunicationConversationWhereInput>
  }, "id" | "conversationId_remoteParticipantId">

  export type CommunicationParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    remoteParticipantId?: SortOrder
    phone?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunicationParticipantCountOrderByAggregateInput
    _max?: CommunicationParticipantMaxOrderByAggregateInput
    _min?: CommunicationParticipantMinOrderByAggregateInput
  }

  export type CommunicationParticipantScalarWhereWithAggregatesInput = {
    AND?: CommunicationParticipantScalarWhereWithAggregatesInput | CommunicationParticipantScalarWhereWithAggregatesInput[]
    OR?: CommunicationParticipantScalarWhereWithAggregatesInput[]
    NOT?: CommunicationParticipantScalarWhereWithAggregatesInput | CommunicationParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunicationParticipant"> | string
    conversationId?: StringWithAggregatesFilter<"CommunicationParticipant"> | string
    remoteParticipantId?: StringWithAggregatesFilter<"CommunicationParticipant"> | string
    phone?: StringNullableWithAggregatesFilter<"CommunicationParticipant"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"CommunicationParticipant"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"CommunicationParticipant"> | string | null
    role?: StringNullableWithAggregatesFilter<"CommunicationParticipant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommunicationParticipant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunicationParticipant"> | Date | string
  }

  export type CommunicationMessageWhereInput = {
    AND?: CommunicationMessageWhereInput | CommunicationMessageWhereInput[]
    OR?: CommunicationMessageWhereInput[]
    NOT?: CommunicationMessageWhereInput | CommunicationMessageWhereInput[]
    id?: StringFilter<"CommunicationMessage"> | string
    userId?: StringFilter<"CommunicationMessage"> | string
    conversationId?: StringFilter<"CommunicationMessage"> | string
    connectedAccountId?: StringFilter<"CommunicationMessage"> | string
    source?: StringFilter<"CommunicationMessage"> | string
    remoteMessageId?: StringFilter<"CommunicationMessage"> | string
    senderId?: StringFilter<"CommunicationMessage"> | string
    senderName?: StringNullableFilter<"CommunicationMessage"> | string | null
    text?: StringNullableFilter<"CommunicationMessage"> | string | null
    messageType?: StringFilter<"CommunicationMessage"> | string
    isFromMe?: BoolFilter<"CommunicationMessage"> | boolean
    isRead?: BoolFilter<"CommunicationMessage"> | boolean
    sentAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    createdAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    aiCategory?: EnumAICategoryNullableFilter<"CommunicationMessage"> | $Enums.AICategory | null
    aiPriority?: EnumAIPriorityNullableFilter<"CommunicationMessage"> | $Enums.AIPriority | null
    aiActionable?: BoolNullableFilter<"CommunicationMessage"> | boolean | null
    aiSummary?: StringNullableFilter<"CommunicationMessage"> | string | null
    aiReason?: StringNullableFilter<"CommunicationMessage"> | string | null
    aiProcessedAt?: DateTimeNullableFilter<"CommunicationMessage"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
    conversation?: XOR<CommunicationConversationScalarRelationFilter, CommunicationConversationWhereInput>
  }

  export type CommunicationMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteMessageId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    messageType?: SortOrder
    isFromMe?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCategory?: SortOrderInput | SortOrder
    aiPriority?: SortOrderInput | SortOrder
    aiActionable?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    aiReason?: SortOrderInput | SortOrder
    aiProcessedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    connectedAccount?: ConnectedAccountOrderByWithRelationInput
    conversation?: CommunicationConversationOrderByWithRelationInput
  }

  export type CommunicationMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    connectedAccountId_remoteMessageId?: CommunicationMessageConnectedAccountIdRemoteMessageIdCompoundUniqueInput
    AND?: CommunicationMessageWhereInput | CommunicationMessageWhereInput[]
    OR?: CommunicationMessageWhereInput[]
    NOT?: CommunicationMessageWhereInput | CommunicationMessageWhereInput[]
    userId?: StringFilter<"CommunicationMessage"> | string
    conversationId?: StringFilter<"CommunicationMessage"> | string
    connectedAccountId?: StringFilter<"CommunicationMessage"> | string
    source?: StringFilter<"CommunicationMessage"> | string
    remoteMessageId?: StringFilter<"CommunicationMessage"> | string
    senderId?: StringFilter<"CommunicationMessage"> | string
    senderName?: StringNullableFilter<"CommunicationMessage"> | string | null
    text?: StringNullableFilter<"CommunicationMessage"> | string | null
    messageType?: StringFilter<"CommunicationMessage"> | string
    isFromMe?: BoolFilter<"CommunicationMessage"> | boolean
    isRead?: BoolFilter<"CommunicationMessage"> | boolean
    sentAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    createdAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    aiCategory?: EnumAICategoryNullableFilter<"CommunicationMessage"> | $Enums.AICategory | null
    aiPriority?: EnumAIPriorityNullableFilter<"CommunicationMessage"> | $Enums.AIPriority | null
    aiActionable?: BoolNullableFilter<"CommunicationMessage"> | boolean | null
    aiSummary?: StringNullableFilter<"CommunicationMessage"> | string | null
    aiReason?: StringNullableFilter<"CommunicationMessage"> | string | null
    aiProcessedAt?: DateTimeNullableFilter<"CommunicationMessage"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    connectedAccount?: XOR<ConnectedAccountScalarRelationFilter, ConnectedAccountWhereInput>
    conversation?: XOR<CommunicationConversationScalarRelationFilter, CommunicationConversationWhereInput>
  }, "id" | "connectedAccountId_remoteMessageId">

  export type CommunicationMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteMessageId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    messageType?: SortOrder
    isFromMe?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCategory?: SortOrderInput | SortOrder
    aiPriority?: SortOrderInput | SortOrder
    aiActionable?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    aiReason?: SortOrderInput | SortOrder
    aiProcessedAt?: SortOrderInput | SortOrder
    _count?: CommunicationMessageCountOrderByAggregateInput
    _max?: CommunicationMessageMaxOrderByAggregateInput
    _min?: CommunicationMessageMinOrderByAggregateInput
  }

  export type CommunicationMessageScalarWhereWithAggregatesInput = {
    AND?: CommunicationMessageScalarWhereWithAggregatesInput | CommunicationMessageScalarWhereWithAggregatesInput[]
    OR?: CommunicationMessageScalarWhereWithAggregatesInput[]
    NOT?: CommunicationMessageScalarWhereWithAggregatesInput | CommunicationMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunicationMessage"> | string
    userId?: StringWithAggregatesFilter<"CommunicationMessage"> | string
    conversationId?: StringWithAggregatesFilter<"CommunicationMessage"> | string
    connectedAccountId?: StringWithAggregatesFilter<"CommunicationMessage"> | string
    source?: StringWithAggregatesFilter<"CommunicationMessage"> | string
    remoteMessageId?: StringWithAggregatesFilter<"CommunicationMessage"> | string
    senderId?: StringWithAggregatesFilter<"CommunicationMessage"> | string
    senderName?: StringNullableWithAggregatesFilter<"CommunicationMessage"> | string | null
    text?: StringNullableWithAggregatesFilter<"CommunicationMessage"> | string | null
    messageType?: StringWithAggregatesFilter<"CommunicationMessage"> | string
    isFromMe?: BoolWithAggregatesFilter<"CommunicationMessage"> | boolean
    isRead?: BoolWithAggregatesFilter<"CommunicationMessage"> | boolean
    sentAt?: DateTimeWithAggregatesFilter<"CommunicationMessage"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CommunicationMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunicationMessage"> | Date | string
    aiCategory?: EnumAICategoryNullableWithAggregatesFilter<"CommunicationMessage"> | $Enums.AICategory | null
    aiPriority?: EnumAIPriorityNullableWithAggregatesFilter<"CommunicationMessage"> | $Enums.AIPriority | null
    aiActionable?: BoolNullableWithAggregatesFilter<"CommunicationMessage"> | boolean | null
    aiSummary?: StringNullableWithAggregatesFilter<"CommunicationMessage"> | string | null
    aiReason?: StringNullableWithAggregatesFilter<"CommunicationMessage"> | string | null
    aiProcessedAt?: DateTimeNullableWithAggregatesFilter<"CommunicationMessage"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountUncheckedCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUncheckedUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectedAccountCreateInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedAccountsInput
    emailMessages?: EmailMessageCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionUncheckedCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedAccountsNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUncheckedUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountCreateManyInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectedAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectedAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageCreateInput = {
    id?: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmailMessagesInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutEmailMessagesInput
  }

  export type EmailMessageUncheckedCreateInput = {
    id?: string
    userId: string
    connectedAccountId: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailMessagesNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutEmailMessagesNestedInput
  }

  export type EmailMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageCreateManyInput = {
    id?: string
    userId: string
    connectedAccountId: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectedCalendarCreateInput = {
    id?: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedCalendarsInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutConnectedCalendarsInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutCalendarInput
  }

  export type ConnectedCalendarUncheckedCreateInput = {
    id?: string
    userId: string
    connectedAccountId: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type ConnectedCalendarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedCalendarsNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutConnectedCalendarsNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutCalendarNestedInput
  }

  export type ConnectedCalendarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type ConnectedCalendarCreateManyInput = {
    id?: string
    userId: string
    connectedAccountId: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectedCalendarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectedCalendarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateInput = {
    id?: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCalendarEventsInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCalendarEventsInput
    calendar: ConnectedCalendarCreateNestedOneWithoutCalendarEventsInput
  }

  export type CalendarEventUncheckedCreateInput = {
    id?: string
    userId: string
    connectedAccountId: string
    calendarId: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCalendarEventsNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCalendarEventsNestedInput
    calendar?: ConnectedCalendarUpdateOneRequiredWithoutCalendarEventsNestedInput
  }

  export type CalendarEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    calendarId?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateManyInput = {
    id?: string
    userId: string
    connectedAccountId: string
    calendarId: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    calendarId?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionCreateInput = {
    id?: string
    creds: string
    keys: string
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccount: ConnectedAccountCreateNestedOneWithoutWhatsappSessionInput
  }

  export type WhatsAppSessionUncheckedCreateInput = {
    id?: string
    connectedAccountId: string
    creds: string
    keys: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creds?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutWhatsappSessionNestedInput
  }

  export type WhatsAppSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    creds?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionCreateManyInput = {
    id?: string
    connectedAccountId: string
    creds: string
    keys: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    creds?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    creds?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationConversationCreateInput = {
    id?: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommunicationConversationsInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCommunicationConversationsInput
    messages?: CommunicationMessageCreateNestedManyWithoutConversationInput
    participants?: CommunicationParticipantCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationUncheckedCreateInput = {
    id?: string
    userId: string
    connectedAccountId: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: CommunicationMessageUncheckedCreateNestedManyWithoutConversationInput
    participants?: CommunicationParticipantUncheckedCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommunicationConversationsNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCommunicationConversationsNestedInput
    messages?: CommunicationMessageUpdateManyWithoutConversationNestedInput
    participants?: CommunicationParticipantUpdateManyWithoutConversationNestedInput
  }

  export type CommunicationConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: CommunicationMessageUncheckedUpdateManyWithoutConversationNestedInput
    participants?: CommunicationParticipantUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type CommunicationConversationCreateManyInput = {
    id?: string
    userId: string
    connectedAccountId: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationParticipantCreateInput = {
    id?: string
    remoteParticipantId: string
    phone?: string | null
    displayName?: string | null
    avatar?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversation: CommunicationConversationCreateNestedOneWithoutParticipantsInput
  }

  export type CommunicationParticipantUncheckedCreateInput = {
    id?: string
    conversationId: string
    remoteParticipantId: string
    phone?: string | null
    displayName?: string | null
    avatar?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteParticipantId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: CommunicationConversationUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type CommunicationParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    remoteParticipantId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationParticipantCreateManyInput = {
    id?: string
    conversationId: string
    remoteParticipantId: string
    phone?: string | null
    displayName?: string | null
    avatar?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteParticipantId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    remoteParticipantId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationMessageCreateInput = {
    id?: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommunicationMessagesInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCommunicationMessagesInput
    conversation: CommunicationConversationCreateNestedOneWithoutMessagesInput
  }

  export type CommunicationMessageUncheckedCreateInput = {
    id?: string
    userId: string
    conversationId: string
    connectedAccountId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
  }

  export type CommunicationMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommunicationMessagesNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCommunicationMessagesNestedInput
    conversation?: CommunicationConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type CommunicationMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationMessageCreateManyInput = {
    id?: string
    userId: string
    conversationId: string
    connectedAccountId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
  }

  export type CommunicationMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type ConnectedAccountListRelationFilter = {
    every?: ConnectedAccountWhereInput
    some?: ConnectedAccountWhereInput
    none?: ConnectedAccountWhereInput
  }

  export type EmailMessageListRelationFilter = {
    every?: EmailMessageWhereInput
    some?: EmailMessageWhereInput
    none?: EmailMessageWhereInput
  }

  export type ConnectedCalendarListRelationFilter = {
    every?: ConnectedCalendarWhereInput
    some?: ConnectedCalendarWhereInput
    none?: ConnectedCalendarWhereInput
  }

  export type CalendarEventListRelationFilter = {
    every?: CalendarEventWhereInput
    some?: CalendarEventWhereInput
    none?: CalendarEventWhereInput
  }

  export type CommunicationConversationListRelationFilter = {
    every?: CommunicationConversationWhereInput
    some?: CommunicationConversationWhereInput
    none?: CommunicationConversationWhereInput
  }

  export type CommunicationMessageListRelationFilter = {
    every?: CommunicationMessageWhereInput
    some?: CommunicationMessageWhereInput
    none?: CommunicationMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConnectedAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConnectedCalendarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunicationConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunicationMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WhatsAppSessionNullableScalarRelationFilter = {
    is?: WhatsAppSessionWhereInput | null
    isNot?: WhatsAppSessionWhereInput | null
  }

  export type ConnectedAccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type ConnectedAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectedAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectedAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    email?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAICategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AICategory | EnumAICategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.AICategory[] | ListEnumAICategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AICategory[] | ListEnumAICategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAICategoryNullableFilter<$PrismaModel> | $Enums.AICategory | null
  }

  export type EnumAIPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AIPriority | EnumAIPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIPriority[] | ListEnumAIPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIPriority[] | ListEnumAIPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIPriorityNullableFilter<$PrismaModel> | $Enums.AIPriority | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ConnectedAccountScalarRelationFilter = {
    is?: ConnectedAccountWhereInput
    isNot?: ConnectedAccountWhereInput
  }

  export type EmailMessageUserIdGmailMessageIdCompoundUniqueInput = {
    userId: string
    gmailMessageId: string
  }

  export type EmailMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    gmailMessageId?: SortOrder
    threadId?: SortOrder
    sender?: SortOrder
    recipients?: SortOrder
    subject?: SortOrder
    snippet?: SortOrder
    bodyText?: SortOrder
    receivedAt?: SortOrder
    isRead?: SortOrder
    labels?: SortOrder
    aiCategory?: SortOrder
    aiPriority?: SortOrder
    aiActionable?: SortOrder
    aiSummary?: SortOrder
    aiReason?: SortOrder
    aiProcessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    gmailMessageId?: SortOrder
    threadId?: SortOrder
    sender?: SortOrder
    recipients?: SortOrder
    subject?: SortOrder
    snippet?: SortOrder
    bodyText?: SortOrder
    receivedAt?: SortOrder
    isRead?: SortOrder
    labels?: SortOrder
    aiCategory?: SortOrder
    aiPriority?: SortOrder
    aiActionable?: SortOrder
    aiSummary?: SortOrder
    aiReason?: SortOrder
    aiProcessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    gmailMessageId?: SortOrder
    threadId?: SortOrder
    sender?: SortOrder
    recipients?: SortOrder
    subject?: SortOrder
    snippet?: SortOrder
    bodyText?: SortOrder
    receivedAt?: SortOrder
    isRead?: SortOrder
    labels?: SortOrder
    aiCategory?: SortOrder
    aiPriority?: SortOrder
    aiActionable?: SortOrder
    aiSummary?: SortOrder
    aiReason?: SortOrder
    aiProcessedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAICategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AICategory | EnumAICategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.AICategory[] | ListEnumAICategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AICategory[] | ListEnumAICategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAICategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.AICategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAICategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumAICategoryNullableFilter<$PrismaModel>
  }

  export type EnumAIPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIPriority | EnumAIPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIPriority[] | ListEnumAIPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIPriority[] | ListEnumAIPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.AIPriority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAIPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumAIPriorityNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ConnectedCalendarConnectedAccountIdGoogleCalendarIdCompoundUniqueInput = {
    connectedAccountId: string
    googleCalendarId: string
  }

  export type ConnectedCalendarCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    googleCalendarId?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    timeZone?: SortOrder
    isPrimary?: SortOrder
    isSelected?: SortOrder
    accessRole?: SortOrder
    syncToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectedCalendarMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    googleCalendarId?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    timeZone?: SortOrder
    isPrimary?: SortOrder
    isSelected?: SortOrder
    accessRole?: SortOrder
    syncToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectedCalendarMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    googleCalendarId?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    timeZone?: SortOrder
    isPrimary?: SortOrder
    isSelected?: SortOrder
    accessRole?: SortOrder
    syncToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectedCalendarScalarRelationFilter = {
    is?: ConnectedCalendarWhereInput
    isNot?: ConnectedCalendarWhereInput
  }

  export type CalendarEventCalendarIdGoogleEventIdCompoundUniqueInput = {
    calendarId: string
    googleEventId: string
  }

  export type CalendarEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    calendarId?: SortOrder
    googleEventId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAllDay?: SortOrder
    timeZone?: SortOrder
    status?: SortOrder
    htmlLink?: SortOrder
    organizer?: SortOrder
    attendees?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    calendarId?: SortOrder
    googleEventId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAllDay?: SortOrder
    timeZone?: SortOrder
    status?: SortOrder
    htmlLink?: SortOrder
    organizer?: SortOrder
    attendees?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    calendarId?: SortOrder
    googleEventId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAllDay?: SortOrder
    timeZone?: SortOrder
    status?: SortOrder
    htmlLink?: SortOrder
    organizer?: SortOrder
    attendees?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSessionCountOrderByAggregateInput = {
    id?: SortOrder
    connectedAccountId?: SortOrder
    creds?: SortOrder
    keys?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    connectedAccountId?: SortOrder
    creds?: SortOrder
    keys?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhatsAppSessionMinOrderByAggregateInput = {
    id?: SortOrder
    connectedAccountId?: SortOrder
    creds?: SortOrder
    keys?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CommunicationParticipantListRelationFilter = {
    every?: CommunicationParticipantWhereInput
    some?: CommunicationParticipantWhereInput
    none?: CommunicationParticipantWhereInput
  }

  export type CommunicationParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunicationConversationConnectedAccountIdRemoteConversationIdCompoundUniqueInput = {
    connectedAccountId: string
    remoteConversationId: string
  }

  export type CommunicationConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteConversationId?: SortOrder
    title?: SortOrder
    avatar?: SortOrder
    isGroup?: SortOrder
    lastMessageAt?: SortOrder
    lastMessagePreview?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationConversationAvgOrderByAggregateInput = {
    unreadCount?: SortOrder
  }

  export type CommunicationConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteConversationId?: SortOrder
    title?: SortOrder
    avatar?: SortOrder
    isGroup?: SortOrder
    lastMessageAt?: SortOrder
    lastMessagePreview?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteConversationId?: SortOrder
    title?: SortOrder
    avatar?: SortOrder
    isGroup?: SortOrder
    lastMessageAt?: SortOrder
    lastMessagePreview?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationConversationSumOrderByAggregateInput = {
    unreadCount?: SortOrder
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

  export type CommunicationConversationScalarRelationFilter = {
    is?: CommunicationConversationWhereInput
    isNot?: CommunicationConversationWhereInput
  }

  export type CommunicationParticipantConversationIdRemoteParticipantIdCompoundUniqueInput = {
    conversationId: string
    remoteParticipantId: string
  }

  export type CommunicationParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    remoteParticipantId?: SortOrder
    phone?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    remoteParticipantId?: SortOrder
    phone?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    remoteParticipantId?: SortOrder
    phone?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunicationMessageConnectedAccountIdRemoteMessageIdCompoundUniqueInput = {
    connectedAccountId: string
    remoteMessageId: string
  }

  export type CommunicationMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteMessageId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    text?: SortOrder
    messageType?: SortOrder
    isFromMe?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCategory?: SortOrder
    aiPriority?: SortOrder
    aiActionable?: SortOrder
    aiSummary?: SortOrder
    aiReason?: SortOrder
    aiProcessedAt?: SortOrder
  }

  export type CommunicationMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteMessageId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    text?: SortOrder
    messageType?: SortOrder
    isFromMe?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCategory?: SortOrder
    aiPriority?: SortOrder
    aiActionable?: SortOrder
    aiSummary?: SortOrder
    aiReason?: SortOrder
    aiProcessedAt?: SortOrder
  }

  export type CommunicationMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    conversationId?: SortOrder
    connectedAccountId?: SortOrder
    source?: SortOrder
    remoteMessageId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    text?: SortOrder
    messageType?: SortOrder
    isFromMe?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aiCategory?: SortOrder
    aiPriority?: SortOrder
    aiActionable?: SortOrder
    aiSummary?: SortOrder
    aiReason?: SortOrder
    aiProcessedAt?: SortOrder
  }

  export type ConnectedAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectedAccountCreateWithoutUserInput, ConnectedAccountUncheckedCreateWithoutUserInput> | ConnectedAccountCreateWithoutUserInput[] | ConnectedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutUserInput | ConnectedAccountCreateOrConnectWithoutUserInput[]
    createMany?: ConnectedAccountCreateManyUserInputEnvelope
    connect?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
  }

  export type EmailMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailMessageCreateWithoutUserInput, EmailMessageUncheckedCreateWithoutUserInput> | EmailMessageCreateWithoutUserInput[] | EmailMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutUserInput | EmailMessageCreateOrConnectWithoutUserInput[]
    createMany?: EmailMessageCreateManyUserInputEnvelope
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
  }

  export type ConnectedCalendarCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectedCalendarCreateWithoutUserInput, ConnectedCalendarUncheckedCreateWithoutUserInput> | ConnectedCalendarCreateWithoutUserInput[] | ConnectedCalendarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutUserInput | ConnectedCalendarCreateOrConnectWithoutUserInput[]
    createMany?: ConnectedCalendarCreateManyUserInputEnvelope
    connect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
  }

  export type CalendarEventCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput> | CalendarEventCreateWithoutUserInput[] | CalendarEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutUserInput | CalendarEventCreateOrConnectWithoutUserInput[]
    createMany?: CalendarEventCreateManyUserInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type CommunicationConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunicationConversationCreateWithoutUserInput, CommunicationConversationUncheckedCreateWithoutUserInput> | CommunicationConversationCreateWithoutUserInput[] | CommunicationConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutUserInput | CommunicationConversationCreateOrConnectWithoutUserInput[]
    createMany?: CommunicationConversationCreateManyUserInputEnvelope
    connect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
  }

  export type CommunicationMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunicationMessageCreateWithoutUserInput, CommunicationMessageUncheckedCreateWithoutUserInput> | CommunicationMessageCreateWithoutUserInput[] | CommunicationMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutUserInput | CommunicationMessageCreateOrConnectWithoutUserInput[]
    createMany?: CommunicationMessageCreateManyUserInputEnvelope
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
  }

  export type ConnectedAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectedAccountCreateWithoutUserInput, ConnectedAccountUncheckedCreateWithoutUserInput> | ConnectedAccountCreateWithoutUserInput[] | ConnectedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutUserInput | ConnectedAccountCreateOrConnectWithoutUserInput[]
    createMany?: ConnectedAccountCreateManyUserInputEnvelope
    connect?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
  }

  export type EmailMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailMessageCreateWithoutUserInput, EmailMessageUncheckedCreateWithoutUserInput> | EmailMessageCreateWithoutUserInput[] | EmailMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutUserInput | EmailMessageCreateOrConnectWithoutUserInput[]
    createMany?: EmailMessageCreateManyUserInputEnvelope
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
  }

  export type ConnectedCalendarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConnectedCalendarCreateWithoutUserInput, ConnectedCalendarUncheckedCreateWithoutUserInput> | ConnectedCalendarCreateWithoutUserInput[] | ConnectedCalendarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutUserInput | ConnectedCalendarCreateOrConnectWithoutUserInput[]
    createMany?: ConnectedCalendarCreateManyUserInputEnvelope
    connect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput> | CalendarEventCreateWithoutUserInput[] | CalendarEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutUserInput | CalendarEventCreateOrConnectWithoutUserInput[]
    createMany?: CalendarEventCreateManyUserInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type CommunicationConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunicationConversationCreateWithoutUserInput, CommunicationConversationUncheckedCreateWithoutUserInput> | CommunicationConversationCreateWithoutUserInput[] | CommunicationConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutUserInput | CommunicationConversationCreateOrConnectWithoutUserInput[]
    createMany?: CommunicationConversationCreateManyUserInputEnvelope
    connect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
  }

  export type CommunicationMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunicationMessageCreateWithoutUserInput, CommunicationMessageUncheckedCreateWithoutUserInput> | CommunicationMessageCreateWithoutUserInput[] | CommunicationMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutUserInput | CommunicationMessageCreateOrConnectWithoutUserInput[]
    createMany?: CommunicationMessageCreateManyUserInputEnvelope
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConnectedAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectedAccountCreateWithoutUserInput, ConnectedAccountUncheckedCreateWithoutUserInput> | ConnectedAccountCreateWithoutUserInput[] | ConnectedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutUserInput | ConnectedAccountCreateOrConnectWithoutUserInput[]
    upsert?: ConnectedAccountUpsertWithWhereUniqueWithoutUserInput | ConnectedAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectedAccountCreateManyUserInputEnvelope
    set?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
    disconnect?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
    delete?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
    connect?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
    update?: ConnectedAccountUpdateWithWhereUniqueWithoutUserInput | ConnectedAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectedAccountUpdateManyWithWhereWithoutUserInput | ConnectedAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectedAccountScalarWhereInput | ConnectedAccountScalarWhereInput[]
  }

  export type EmailMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailMessageCreateWithoutUserInput, EmailMessageUncheckedCreateWithoutUserInput> | EmailMessageCreateWithoutUserInput[] | EmailMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutUserInput | EmailMessageCreateOrConnectWithoutUserInput[]
    upsert?: EmailMessageUpsertWithWhereUniqueWithoutUserInput | EmailMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailMessageCreateManyUserInputEnvelope
    set?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    disconnect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    delete?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    update?: EmailMessageUpdateWithWhereUniqueWithoutUserInput | EmailMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailMessageUpdateManyWithWhereWithoutUserInput | EmailMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
  }

  export type ConnectedCalendarUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectedCalendarCreateWithoutUserInput, ConnectedCalendarUncheckedCreateWithoutUserInput> | ConnectedCalendarCreateWithoutUserInput[] | ConnectedCalendarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutUserInput | ConnectedCalendarCreateOrConnectWithoutUserInput[]
    upsert?: ConnectedCalendarUpsertWithWhereUniqueWithoutUserInput | ConnectedCalendarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectedCalendarCreateManyUserInputEnvelope
    set?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    disconnect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    delete?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    connect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    update?: ConnectedCalendarUpdateWithWhereUniqueWithoutUserInput | ConnectedCalendarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectedCalendarUpdateManyWithWhereWithoutUserInput | ConnectedCalendarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectedCalendarScalarWhereInput | ConnectedCalendarScalarWhereInput[]
  }

  export type CalendarEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput> | CalendarEventCreateWithoutUserInput[] | CalendarEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutUserInput | CalendarEventCreateOrConnectWithoutUserInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutUserInput | CalendarEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarEventCreateManyUserInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutUserInput | CalendarEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutUserInput | CalendarEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type CommunicationConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunicationConversationCreateWithoutUserInput, CommunicationConversationUncheckedCreateWithoutUserInput> | CommunicationConversationCreateWithoutUserInput[] | CommunicationConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutUserInput | CommunicationConversationCreateOrConnectWithoutUserInput[]
    upsert?: CommunicationConversationUpsertWithWhereUniqueWithoutUserInput | CommunicationConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunicationConversationCreateManyUserInputEnvelope
    set?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    disconnect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    delete?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    connect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    update?: CommunicationConversationUpdateWithWhereUniqueWithoutUserInput | CommunicationConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunicationConversationUpdateManyWithWhereWithoutUserInput | CommunicationConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunicationConversationScalarWhereInput | CommunicationConversationScalarWhereInput[]
  }

  export type CommunicationMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunicationMessageCreateWithoutUserInput, CommunicationMessageUncheckedCreateWithoutUserInput> | CommunicationMessageCreateWithoutUserInput[] | CommunicationMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutUserInput | CommunicationMessageCreateOrConnectWithoutUserInput[]
    upsert?: CommunicationMessageUpsertWithWhereUniqueWithoutUserInput | CommunicationMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunicationMessageCreateManyUserInputEnvelope
    set?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    disconnect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    delete?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    update?: CommunicationMessageUpdateWithWhereUniqueWithoutUserInput | CommunicationMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunicationMessageUpdateManyWithWhereWithoutUserInput | CommunicationMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunicationMessageScalarWhereInput | CommunicationMessageScalarWhereInput[]
  }

  export type ConnectedAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectedAccountCreateWithoutUserInput, ConnectedAccountUncheckedCreateWithoutUserInput> | ConnectedAccountCreateWithoutUserInput[] | ConnectedAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutUserInput | ConnectedAccountCreateOrConnectWithoutUserInput[]
    upsert?: ConnectedAccountUpsertWithWhereUniqueWithoutUserInput | ConnectedAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectedAccountCreateManyUserInputEnvelope
    set?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
    disconnect?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
    delete?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
    connect?: ConnectedAccountWhereUniqueInput | ConnectedAccountWhereUniqueInput[]
    update?: ConnectedAccountUpdateWithWhereUniqueWithoutUserInput | ConnectedAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectedAccountUpdateManyWithWhereWithoutUserInput | ConnectedAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectedAccountScalarWhereInput | ConnectedAccountScalarWhereInput[]
  }

  export type EmailMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailMessageCreateWithoutUserInput, EmailMessageUncheckedCreateWithoutUserInput> | EmailMessageCreateWithoutUserInput[] | EmailMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutUserInput | EmailMessageCreateOrConnectWithoutUserInput[]
    upsert?: EmailMessageUpsertWithWhereUniqueWithoutUserInput | EmailMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailMessageCreateManyUserInputEnvelope
    set?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    disconnect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    delete?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    update?: EmailMessageUpdateWithWhereUniqueWithoutUserInput | EmailMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailMessageUpdateManyWithWhereWithoutUserInput | EmailMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
  }

  export type ConnectedCalendarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConnectedCalendarCreateWithoutUserInput, ConnectedCalendarUncheckedCreateWithoutUserInput> | ConnectedCalendarCreateWithoutUserInput[] | ConnectedCalendarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutUserInput | ConnectedCalendarCreateOrConnectWithoutUserInput[]
    upsert?: ConnectedCalendarUpsertWithWhereUniqueWithoutUserInput | ConnectedCalendarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConnectedCalendarCreateManyUserInputEnvelope
    set?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    disconnect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    delete?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    connect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    update?: ConnectedCalendarUpdateWithWhereUniqueWithoutUserInput | ConnectedCalendarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConnectedCalendarUpdateManyWithWhereWithoutUserInput | ConnectedCalendarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConnectedCalendarScalarWhereInput | ConnectedCalendarScalarWhereInput[]
  }

  export type CalendarEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput> | CalendarEventCreateWithoutUserInput[] | CalendarEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutUserInput | CalendarEventCreateOrConnectWithoutUserInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutUserInput | CalendarEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarEventCreateManyUserInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutUserInput | CalendarEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutUserInput | CalendarEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type CommunicationConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunicationConversationCreateWithoutUserInput, CommunicationConversationUncheckedCreateWithoutUserInput> | CommunicationConversationCreateWithoutUserInput[] | CommunicationConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutUserInput | CommunicationConversationCreateOrConnectWithoutUserInput[]
    upsert?: CommunicationConversationUpsertWithWhereUniqueWithoutUserInput | CommunicationConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunicationConversationCreateManyUserInputEnvelope
    set?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    disconnect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    delete?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    connect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    update?: CommunicationConversationUpdateWithWhereUniqueWithoutUserInput | CommunicationConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunicationConversationUpdateManyWithWhereWithoutUserInput | CommunicationConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunicationConversationScalarWhereInput | CommunicationConversationScalarWhereInput[]
  }

  export type CommunicationMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunicationMessageCreateWithoutUserInput, CommunicationMessageUncheckedCreateWithoutUserInput> | CommunicationMessageCreateWithoutUserInput[] | CommunicationMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutUserInput | CommunicationMessageCreateOrConnectWithoutUserInput[]
    upsert?: CommunicationMessageUpsertWithWhereUniqueWithoutUserInput | CommunicationMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunicationMessageCreateManyUserInputEnvelope
    set?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    disconnect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    delete?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    update?: CommunicationMessageUpdateWithWhereUniqueWithoutUserInput | CommunicationMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunicationMessageUpdateManyWithWhereWithoutUserInput | CommunicationMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunicationMessageScalarWhereInput | CommunicationMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutConnectedAccountsInput = {
    create?: XOR<UserCreateWithoutConnectedAccountsInput, UserUncheckedCreateWithoutConnectedAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectedAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type EmailMessageCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<EmailMessageCreateWithoutConnectedAccountInput, EmailMessageUncheckedCreateWithoutConnectedAccountInput> | EmailMessageCreateWithoutConnectedAccountInput[] | EmailMessageUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutConnectedAccountInput | EmailMessageCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: EmailMessageCreateManyConnectedAccountInputEnvelope
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
  }

  export type ConnectedCalendarCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<ConnectedCalendarCreateWithoutConnectedAccountInput, ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput> | ConnectedCalendarCreateWithoutConnectedAccountInput[] | ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput | ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: ConnectedCalendarCreateManyConnectedAccountInputEnvelope
    connect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
  }

  export type CalendarEventCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<CalendarEventCreateWithoutConnectedAccountInput, CalendarEventUncheckedCreateWithoutConnectedAccountInput> | CalendarEventCreateWithoutConnectedAccountInput[] | CalendarEventUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutConnectedAccountInput | CalendarEventCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: CalendarEventCreateManyConnectedAccountInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type WhatsAppSessionCreateNestedOneWithoutConnectedAccountInput = {
    create?: XOR<WhatsAppSessionCreateWithoutConnectedAccountInput, WhatsAppSessionUncheckedCreateWithoutConnectedAccountInput>
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutConnectedAccountInput
    connect?: WhatsAppSessionWhereUniqueInput
  }

  export type CommunicationConversationCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<CommunicationConversationCreateWithoutConnectedAccountInput, CommunicationConversationUncheckedCreateWithoutConnectedAccountInput> | CommunicationConversationCreateWithoutConnectedAccountInput[] | CommunicationConversationUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutConnectedAccountInput | CommunicationConversationCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: CommunicationConversationCreateManyConnectedAccountInputEnvelope
    connect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
  }

  export type CommunicationMessageCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<CommunicationMessageCreateWithoutConnectedAccountInput, CommunicationMessageUncheckedCreateWithoutConnectedAccountInput> | CommunicationMessageCreateWithoutConnectedAccountInput[] | CommunicationMessageUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutConnectedAccountInput | CommunicationMessageCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: CommunicationMessageCreateManyConnectedAccountInputEnvelope
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
  }

  export type EmailMessageUncheckedCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<EmailMessageCreateWithoutConnectedAccountInput, EmailMessageUncheckedCreateWithoutConnectedAccountInput> | EmailMessageCreateWithoutConnectedAccountInput[] | EmailMessageUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutConnectedAccountInput | EmailMessageCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: EmailMessageCreateManyConnectedAccountInputEnvelope
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
  }

  export type ConnectedCalendarUncheckedCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<ConnectedCalendarCreateWithoutConnectedAccountInput, ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput> | ConnectedCalendarCreateWithoutConnectedAccountInput[] | ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput | ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: ConnectedCalendarCreateManyConnectedAccountInputEnvelope
    connect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<CalendarEventCreateWithoutConnectedAccountInput, CalendarEventUncheckedCreateWithoutConnectedAccountInput> | CalendarEventCreateWithoutConnectedAccountInput[] | CalendarEventUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutConnectedAccountInput | CalendarEventCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: CalendarEventCreateManyConnectedAccountInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type WhatsAppSessionUncheckedCreateNestedOneWithoutConnectedAccountInput = {
    create?: XOR<WhatsAppSessionCreateWithoutConnectedAccountInput, WhatsAppSessionUncheckedCreateWithoutConnectedAccountInput>
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutConnectedAccountInput
    connect?: WhatsAppSessionWhereUniqueInput
  }

  export type CommunicationConversationUncheckedCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<CommunicationConversationCreateWithoutConnectedAccountInput, CommunicationConversationUncheckedCreateWithoutConnectedAccountInput> | CommunicationConversationCreateWithoutConnectedAccountInput[] | CommunicationConversationUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutConnectedAccountInput | CommunicationConversationCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: CommunicationConversationCreateManyConnectedAccountInputEnvelope
    connect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
  }

  export type CommunicationMessageUncheckedCreateNestedManyWithoutConnectedAccountInput = {
    create?: XOR<CommunicationMessageCreateWithoutConnectedAccountInput, CommunicationMessageUncheckedCreateWithoutConnectedAccountInput> | CommunicationMessageCreateWithoutConnectedAccountInput[] | CommunicationMessageUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutConnectedAccountInput | CommunicationMessageCreateOrConnectWithoutConnectedAccountInput[]
    createMany?: CommunicationMessageCreateManyConnectedAccountInputEnvelope
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutConnectedAccountsNestedInput = {
    create?: XOR<UserCreateWithoutConnectedAccountsInput, UserUncheckedCreateWithoutConnectedAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectedAccountsInput
    upsert?: UserUpsertWithoutConnectedAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConnectedAccountsInput, UserUpdateWithoutConnectedAccountsInput>, UserUncheckedUpdateWithoutConnectedAccountsInput>
  }

  export type EmailMessageUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<EmailMessageCreateWithoutConnectedAccountInput, EmailMessageUncheckedCreateWithoutConnectedAccountInput> | EmailMessageCreateWithoutConnectedAccountInput[] | EmailMessageUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutConnectedAccountInput | EmailMessageCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: EmailMessageUpsertWithWhereUniqueWithoutConnectedAccountInput | EmailMessageUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: EmailMessageCreateManyConnectedAccountInputEnvelope
    set?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    disconnect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    delete?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    update?: EmailMessageUpdateWithWhereUniqueWithoutConnectedAccountInput | EmailMessageUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: EmailMessageUpdateManyWithWhereWithoutConnectedAccountInput | EmailMessageUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
  }

  export type ConnectedCalendarUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<ConnectedCalendarCreateWithoutConnectedAccountInput, ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput> | ConnectedCalendarCreateWithoutConnectedAccountInput[] | ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput | ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: ConnectedCalendarUpsertWithWhereUniqueWithoutConnectedAccountInput | ConnectedCalendarUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: ConnectedCalendarCreateManyConnectedAccountInputEnvelope
    set?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    disconnect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    delete?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    connect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    update?: ConnectedCalendarUpdateWithWhereUniqueWithoutConnectedAccountInput | ConnectedCalendarUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: ConnectedCalendarUpdateManyWithWhereWithoutConnectedAccountInput | ConnectedCalendarUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: ConnectedCalendarScalarWhereInput | ConnectedCalendarScalarWhereInput[]
  }

  export type CalendarEventUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<CalendarEventCreateWithoutConnectedAccountInput, CalendarEventUncheckedCreateWithoutConnectedAccountInput> | CalendarEventCreateWithoutConnectedAccountInput[] | CalendarEventUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutConnectedAccountInput | CalendarEventCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutConnectedAccountInput | CalendarEventUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: CalendarEventCreateManyConnectedAccountInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutConnectedAccountInput | CalendarEventUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutConnectedAccountInput | CalendarEventUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type WhatsAppSessionUpdateOneWithoutConnectedAccountNestedInput = {
    create?: XOR<WhatsAppSessionCreateWithoutConnectedAccountInput, WhatsAppSessionUncheckedCreateWithoutConnectedAccountInput>
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutConnectedAccountInput
    upsert?: WhatsAppSessionUpsertWithoutConnectedAccountInput
    disconnect?: WhatsAppSessionWhereInput | boolean
    delete?: WhatsAppSessionWhereInput | boolean
    connect?: WhatsAppSessionWhereUniqueInput
    update?: XOR<XOR<WhatsAppSessionUpdateToOneWithWhereWithoutConnectedAccountInput, WhatsAppSessionUpdateWithoutConnectedAccountInput>, WhatsAppSessionUncheckedUpdateWithoutConnectedAccountInput>
  }

  export type CommunicationConversationUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<CommunicationConversationCreateWithoutConnectedAccountInput, CommunicationConversationUncheckedCreateWithoutConnectedAccountInput> | CommunicationConversationCreateWithoutConnectedAccountInput[] | CommunicationConversationUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutConnectedAccountInput | CommunicationConversationCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: CommunicationConversationUpsertWithWhereUniqueWithoutConnectedAccountInput | CommunicationConversationUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: CommunicationConversationCreateManyConnectedAccountInputEnvelope
    set?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    disconnect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    delete?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    connect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    update?: CommunicationConversationUpdateWithWhereUniqueWithoutConnectedAccountInput | CommunicationConversationUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: CommunicationConversationUpdateManyWithWhereWithoutConnectedAccountInput | CommunicationConversationUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: CommunicationConversationScalarWhereInput | CommunicationConversationScalarWhereInput[]
  }

  export type CommunicationMessageUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<CommunicationMessageCreateWithoutConnectedAccountInput, CommunicationMessageUncheckedCreateWithoutConnectedAccountInput> | CommunicationMessageCreateWithoutConnectedAccountInput[] | CommunicationMessageUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutConnectedAccountInput | CommunicationMessageCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: CommunicationMessageUpsertWithWhereUniqueWithoutConnectedAccountInput | CommunicationMessageUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: CommunicationMessageCreateManyConnectedAccountInputEnvelope
    set?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    disconnect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    delete?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    update?: CommunicationMessageUpdateWithWhereUniqueWithoutConnectedAccountInput | CommunicationMessageUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: CommunicationMessageUpdateManyWithWhereWithoutConnectedAccountInput | CommunicationMessageUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: CommunicationMessageScalarWhereInput | CommunicationMessageScalarWhereInput[]
  }

  export type EmailMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<EmailMessageCreateWithoutConnectedAccountInput, EmailMessageUncheckedCreateWithoutConnectedAccountInput> | EmailMessageCreateWithoutConnectedAccountInput[] | EmailMessageUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: EmailMessageCreateOrConnectWithoutConnectedAccountInput | EmailMessageCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: EmailMessageUpsertWithWhereUniqueWithoutConnectedAccountInput | EmailMessageUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: EmailMessageCreateManyConnectedAccountInputEnvelope
    set?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    disconnect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    delete?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    connect?: EmailMessageWhereUniqueInput | EmailMessageWhereUniqueInput[]
    update?: EmailMessageUpdateWithWhereUniqueWithoutConnectedAccountInput | EmailMessageUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: EmailMessageUpdateManyWithWhereWithoutConnectedAccountInput | EmailMessageUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
  }

  export type ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<ConnectedCalendarCreateWithoutConnectedAccountInput, ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput> | ConnectedCalendarCreateWithoutConnectedAccountInput[] | ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput | ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: ConnectedCalendarUpsertWithWhereUniqueWithoutConnectedAccountInput | ConnectedCalendarUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: ConnectedCalendarCreateManyConnectedAccountInputEnvelope
    set?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    disconnect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    delete?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    connect?: ConnectedCalendarWhereUniqueInput | ConnectedCalendarWhereUniqueInput[]
    update?: ConnectedCalendarUpdateWithWhereUniqueWithoutConnectedAccountInput | ConnectedCalendarUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: ConnectedCalendarUpdateManyWithWhereWithoutConnectedAccountInput | ConnectedCalendarUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: ConnectedCalendarScalarWhereInput | ConnectedCalendarScalarWhereInput[]
  }

  export type CalendarEventUncheckedUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<CalendarEventCreateWithoutConnectedAccountInput, CalendarEventUncheckedCreateWithoutConnectedAccountInput> | CalendarEventCreateWithoutConnectedAccountInput[] | CalendarEventUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutConnectedAccountInput | CalendarEventCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutConnectedAccountInput | CalendarEventUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: CalendarEventCreateManyConnectedAccountInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutConnectedAccountInput | CalendarEventUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutConnectedAccountInput | CalendarEventUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type WhatsAppSessionUncheckedUpdateOneWithoutConnectedAccountNestedInput = {
    create?: XOR<WhatsAppSessionCreateWithoutConnectedAccountInput, WhatsAppSessionUncheckedCreateWithoutConnectedAccountInput>
    connectOrCreate?: WhatsAppSessionCreateOrConnectWithoutConnectedAccountInput
    upsert?: WhatsAppSessionUpsertWithoutConnectedAccountInput
    disconnect?: WhatsAppSessionWhereInput | boolean
    delete?: WhatsAppSessionWhereInput | boolean
    connect?: WhatsAppSessionWhereUniqueInput
    update?: XOR<XOR<WhatsAppSessionUpdateToOneWithWhereWithoutConnectedAccountInput, WhatsAppSessionUpdateWithoutConnectedAccountInput>, WhatsAppSessionUncheckedUpdateWithoutConnectedAccountInput>
  }

  export type CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<CommunicationConversationCreateWithoutConnectedAccountInput, CommunicationConversationUncheckedCreateWithoutConnectedAccountInput> | CommunicationConversationCreateWithoutConnectedAccountInput[] | CommunicationConversationUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutConnectedAccountInput | CommunicationConversationCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: CommunicationConversationUpsertWithWhereUniqueWithoutConnectedAccountInput | CommunicationConversationUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: CommunicationConversationCreateManyConnectedAccountInputEnvelope
    set?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    disconnect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    delete?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    connect?: CommunicationConversationWhereUniqueInput | CommunicationConversationWhereUniqueInput[]
    update?: CommunicationConversationUpdateWithWhereUniqueWithoutConnectedAccountInput | CommunicationConversationUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: CommunicationConversationUpdateManyWithWhereWithoutConnectedAccountInput | CommunicationConversationUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: CommunicationConversationScalarWhereInput | CommunicationConversationScalarWhereInput[]
  }

  export type CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput = {
    create?: XOR<CommunicationMessageCreateWithoutConnectedAccountInput, CommunicationMessageUncheckedCreateWithoutConnectedAccountInput> | CommunicationMessageCreateWithoutConnectedAccountInput[] | CommunicationMessageUncheckedCreateWithoutConnectedAccountInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutConnectedAccountInput | CommunicationMessageCreateOrConnectWithoutConnectedAccountInput[]
    upsert?: CommunicationMessageUpsertWithWhereUniqueWithoutConnectedAccountInput | CommunicationMessageUpsertWithWhereUniqueWithoutConnectedAccountInput[]
    createMany?: CommunicationMessageCreateManyConnectedAccountInputEnvelope
    set?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    disconnect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    delete?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    update?: CommunicationMessageUpdateWithWhereUniqueWithoutConnectedAccountInput | CommunicationMessageUpdateWithWhereUniqueWithoutConnectedAccountInput[]
    updateMany?: CommunicationMessageUpdateManyWithWhereWithoutConnectedAccountInput | CommunicationMessageUpdateManyWithWhereWithoutConnectedAccountInput[]
    deleteMany?: CommunicationMessageScalarWhereInput | CommunicationMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailMessagesInput = {
    create?: XOR<UserCreateWithoutEmailMessagesInput, UserUncheckedCreateWithoutEmailMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectedAccountCreateNestedOneWithoutEmailMessagesInput = {
    create?: XOR<ConnectedAccountCreateWithoutEmailMessagesInput, ConnectedAccountUncheckedCreateWithoutEmailMessagesInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutEmailMessagesInput
    connect?: ConnectedAccountWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumAICategoryFieldUpdateOperationsInput = {
    set?: $Enums.AICategory | null
  }

  export type NullableEnumAIPriorityFieldUpdateOperationsInput = {
    set?: $Enums.AIPriority | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutEmailMessagesNestedInput = {
    create?: XOR<UserCreateWithoutEmailMessagesInput, UserUncheckedCreateWithoutEmailMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailMessagesInput
    upsert?: UserUpsertWithoutEmailMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailMessagesInput, UserUpdateWithoutEmailMessagesInput>, UserUncheckedUpdateWithoutEmailMessagesInput>
  }

  export type ConnectedAccountUpdateOneRequiredWithoutEmailMessagesNestedInput = {
    create?: XOR<ConnectedAccountCreateWithoutEmailMessagesInput, ConnectedAccountUncheckedCreateWithoutEmailMessagesInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutEmailMessagesInput
    upsert?: ConnectedAccountUpsertWithoutEmailMessagesInput
    connect?: ConnectedAccountWhereUniqueInput
    update?: XOR<XOR<ConnectedAccountUpdateToOneWithWhereWithoutEmailMessagesInput, ConnectedAccountUpdateWithoutEmailMessagesInput>, ConnectedAccountUncheckedUpdateWithoutEmailMessagesInput>
  }

  export type UserCreateNestedOneWithoutConnectedCalendarsInput = {
    create?: XOR<UserCreateWithoutConnectedCalendarsInput, UserUncheckedCreateWithoutConnectedCalendarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectedCalendarsInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectedAccountCreateNestedOneWithoutConnectedCalendarsInput = {
    create?: XOR<ConnectedAccountCreateWithoutConnectedCalendarsInput, ConnectedAccountUncheckedCreateWithoutConnectedCalendarsInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutConnectedCalendarsInput
    connect?: ConnectedAccountWhereUniqueInput
  }

  export type CalendarEventCreateNestedManyWithoutCalendarInput = {
    create?: XOR<CalendarEventCreateWithoutCalendarInput, CalendarEventUncheckedCreateWithoutCalendarInput> | CalendarEventCreateWithoutCalendarInput[] | CalendarEventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutCalendarInput | CalendarEventCreateOrConnectWithoutCalendarInput[]
    createMany?: CalendarEventCreateManyCalendarInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutCalendarInput = {
    create?: XOR<CalendarEventCreateWithoutCalendarInput, CalendarEventUncheckedCreateWithoutCalendarInput> | CalendarEventCreateWithoutCalendarInput[] | CalendarEventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutCalendarInput | CalendarEventCreateOrConnectWithoutCalendarInput[]
    createMany?: CalendarEventCreateManyCalendarInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutConnectedCalendarsNestedInput = {
    create?: XOR<UserCreateWithoutConnectedCalendarsInput, UserUncheckedCreateWithoutConnectedCalendarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConnectedCalendarsInput
    upsert?: UserUpsertWithoutConnectedCalendarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConnectedCalendarsInput, UserUpdateWithoutConnectedCalendarsInput>, UserUncheckedUpdateWithoutConnectedCalendarsInput>
  }

  export type ConnectedAccountUpdateOneRequiredWithoutConnectedCalendarsNestedInput = {
    create?: XOR<ConnectedAccountCreateWithoutConnectedCalendarsInput, ConnectedAccountUncheckedCreateWithoutConnectedCalendarsInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutConnectedCalendarsInput
    upsert?: ConnectedAccountUpsertWithoutConnectedCalendarsInput
    connect?: ConnectedAccountWhereUniqueInput
    update?: XOR<XOR<ConnectedAccountUpdateToOneWithWhereWithoutConnectedCalendarsInput, ConnectedAccountUpdateWithoutConnectedCalendarsInput>, ConnectedAccountUncheckedUpdateWithoutConnectedCalendarsInput>
  }

  export type CalendarEventUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<CalendarEventCreateWithoutCalendarInput, CalendarEventUncheckedCreateWithoutCalendarInput> | CalendarEventCreateWithoutCalendarInput[] | CalendarEventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutCalendarInput | CalendarEventCreateOrConnectWithoutCalendarInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutCalendarInput | CalendarEventUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: CalendarEventCreateManyCalendarInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutCalendarInput | CalendarEventUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutCalendarInput | CalendarEventUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<CalendarEventCreateWithoutCalendarInput, CalendarEventUncheckedCreateWithoutCalendarInput> | CalendarEventCreateWithoutCalendarInput[] | CalendarEventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutCalendarInput | CalendarEventCreateOrConnectWithoutCalendarInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutCalendarInput | CalendarEventUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: CalendarEventCreateManyCalendarInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutCalendarInput | CalendarEventUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutCalendarInput | CalendarEventUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCalendarEventsInput = {
    create?: XOR<UserCreateWithoutCalendarEventsInput, UserUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarEventsInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectedAccountCreateNestedOneWithoutCalendarEventsInput = {
    create?: XOR<ConnectedAccountCreateWithoutCalendarEventsInput, ConnectedAccountUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutCalendarEventsInput
    connect?: ConnectedAccountWhereUniqueInput
  }

  export type ConnectedCalendarCreateNestedOneWithoutCalendarEventsInput = {
    create?: XOR<ConnectedCalendarCreateWithoutCalendarEventsInput, ConnectedCalendarUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutCalendarEventsInput
    connect?: ConnectedCalendarWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCalendarEventsNestedInput = {
    create?: XOR<UserCreateWithoutCalendarEventsInput, UserUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarEventsInput
    upsert?: UserUpsertWithoutCalendarEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCalendarEventsInput, UserUpdateWithoutCalendarEventsInput>, UserUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type ConnectedAccountUpdateOneRequiredWithoutCalendarEventsNestedInput = {
    create?: XOR<ConnectedAccountCreateWithoutCalendarEventsInput, ConnectedAccountUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutCalendarEventsInput
    upsert?: ConnectedAccountUpsertWithoutCalendarEventsInput
    connect?: ConnectedAccountWhereUniqueInput
    update?: XOR<XOR<ConnectedAccountUpdateToOneWithWhereWithoutCalendarEventsInput, ConnectedAccountUpdateWithoutCalendarEventsInput>, ConnectedAccountUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type ConnectedCalendarUpdateOneRequiredWithoutCalendarEventsNestedInput = {
    create?: XOR<ConnectedCalendarCreateWithoutCalendarEventsInput, ConnectedCalendarUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: ConnectedCalendarCreateOrConnectWithoutCalendarEventsInput
    upsert?: ConnectedCalendarUpsertWithoutCalendarEventsInput
    connect?: ConnectedCalendarWhereUniqueInput
    update?: XOR<XOR<ConnectedCalendarUpdateToOneWithWhereWithoutCalendarEventsInput, ConnectedCalendarUpdateWithoutCalendarEventsInput>, ConnectedCalendarUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type ConnectedAccountCreateNestedOneWithoutWhatsappSessionInput = {
    create?: XOR<ConnectedAccountCreateWithoutWhatsappSessionInput, ConnectedAccountUncheckedCreateWithoutWhatsappSessionInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutWhatsappSessionInput
    connect?: ConnectedAccountWhereUniqueInput
  }

  export type ConnectedAccountUpdateOneRequiredWithoutWhatsappSessionNestedInput = {
    create?: XOR<ConnectedAccountCreateWithoutWhatsappSessionInput, ConnectedAccountUncheckedCreateWithoutWhatsappSessionInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutWhatsappSessionInput
    upsert?: ConnectedAccountUpsertWithoutWhatsappSessionInput
    connect?: ConnectedAccountWhereUniqueInput
    update?: XOR<XOR<ConnectedAccountUpdateToOneWithWhereWithoutWhatsappSessionInput, ConnectedAccountUpdateWithoutWhatsappSessionInput>, ConnectedAccountUncheckedUpdateWithoutWhatsappSessionInput>
  }

  export type UserCreateNestedOneWithoutCommunicationConversationsInput = {
    create?: XOR<UserCreateWithoutCommunicationConversationsInput, UserUncheckedCreateWithoutCommunicationConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunicationConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectedAccountCreateNestedOneWithoutCommunicationConversationsInput = {
    create?: XOR<ConnectedAccountCreateWithoutCommunicationConversationsInput, ConnectedAccountUncheckedCreateWithoutCommunicationConversationsInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutCommunicationConversationsInput
    connect?: ConnectedAccountWhereUniqueInput
  }

  export type CommunicationMessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<CommunicationMessageCreateWithoutConversationInput, CommunicationMessageUncheckedCreateWithoutConversationInput> | CommunicationMessageCreateWithoutConversationInput[] | CommunicationMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutConversationInput | CommunicationMessageCreateOrConnectWithoutConversationInput[]
    createMany?: CommunicationMessageCreateManyConversationInputEnvelope
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
  }

  export type CommunicationParticipantCreateNestedManyWithoutConversationInput = {
    create?: XOR<CommunicationParticipantCreateWithoutConversationInput, CommunicationParticipantUncheckedCreateWithoutConversationInput> | CommunicationParticipantCreateWithoutConversationInput[] | CommunicationParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CommunicationParticipantCreateOrConnectWithoutConversationInput | CommunicationParticipantCreateOrConnectWithoutConversationInput[]
    createMany?: CommunicationParticipantCreateManyConversationInputEnvelope
    connect?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
  }

  export type CommunicationMessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<CommunicationMessageCreateWithoutConversationInput, CommunicationMessageUncheckedCreateWithoutConversationInput> | CommunicationMessageCreateWithoutConversationInput[] | CommunicationMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutConversationInput | CommunicationMessageCreateOrConnectWithoutConversationInput[]
    createMany?: CommunicationMessageCreateManyConversationInputEnvelope
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
  }

  export type CommunicationParticipantUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<CommunicationParticipantCreateWithoutConversationInput, CommunicationParticipantUncheckedCreateWithoutConversationInput> | CommunicationParticipantCreateWithoutConversationInput[] | CommunicationParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CommunicationParticipantCreateOrConnectWithoutConversationInput | CommunicationParticipantCreateOrConnectWithoutConversationInput[]
    createMany?: CommunicationParticipantCreateManyConversationInputEnvelope
    connect?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCommunicationConversationsNestedInput = {
    create?: XOR<UserCreateWithoutCommunicationConversationsInput, UserUncheckedCreateWithoutCommunicationConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunicationConversationsInput
    upsert?: UserUpsertWithoutCommunicationConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunicationConversationsInput, UserUpdateWithoutCommunicationConversationsInput>, UserUncheckedUpdateWithoutCommunicationConversationsInput>
  }

  export type ConnectedAccountUpdateOneRequiredWithoutCommunicationConversationsNestedInput = {
    create?: XOR<ConnectedAccountCreateWithoutCommunicationConversationsInput, ConnectedAccountUncheckedCreateWithoutCommunicationConversationsInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutCommunicationConversationsInput
    upsert?: ConnectedAccountUpsertWithoutCommunicationConversationsInput
    connect?: ConnectedAccountWhereUniqueInput
    update?: XOR<XOR<ConnectedAccountUpdateToOneWithWhereWithoutCommunicationConversationsInput, ConnectedAccountUpdateWithoutCommunicationConversationsInput>, ConnectedAccountUncheckedUpdateWithoutCommunicationConversationsInput>
  }

  export type CommunicationMessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<CommunicationMessageCreateWithoutConversationInput, CommunicationMessageUncheckedCreateWithoutConversationInput> | CommunicationMessageCreateWithoutConversationInput[] | CommunicationMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutConversationInput | CommunicationMessageCreateOrConnectWithoutConversationInput[]
    upsert?: CommunicationMessageUpsertWithWhereUniqueWithoutConversationInput | CommunicationMessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: CommunicationMessageCreateManyConversationInputEnvelope
    set?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    disconnect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    delete?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    update?: CommunicationMessageUpdateWithWhereUniqueWithoutConversationInput | CommunicationMessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: CommunicationMessageUpdateManyWithWhereWithoutConversationInput | CommunicationMessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: CommunicationMessageScalarWhereInput | CommunicationMessageScalarWhereInput[]
  }

  export type CommunicationParticipantUpdateManyWithoutConversationNestedInput = {
    create?: XOR<CommunicationParticipantCreateWithoutConversationInput, CommunicationParticipantUncheckedCreateWithoutConversationInput> | CommunicationParticipantCreateWithoutConversationInput[] | CommunicationParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CommunicationParticipantCreateOrConnectWithoutConversationInput | CommunicationParticipantCreateOrConnectWithoutConversationInput[]
    upsert?: CommunicationParticipantUpsertWithWhereUniqueWithoutConversationInput | CommunicationParticipantUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: CommunicationParticipantCreateManyConversationInputEnvelope
    set?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
    disconnect?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
    delete?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
    connect?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
    update?: CommunicationParticipantUpdateWithWhereUniqueWithoutConversationInput | CommunicationParticipantUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: CommunicationParticipantUpdateManyWithWhereWithoutConversationInput | CommunicationParticipantUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: CommunicationParticipantScalarWhereInput | CommunicationParticipantScalarWhereInput[]
  }

  export type CommunicationMessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<CommunicationMessageCreateWithoutConversationInput, CommunicationMessageUncheckedCreateWithoutConversationInput> | CommunicationMessageCreateWithoutConversationInput[] | CommunicationMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CommunicationMessageCreateOrConnectWithoutConversationInput | CommunicationMessageCreateOrConnectWithoutConversationInput[]
    upsert?: CommunicationMessageUpsertWithWhereUniqueWithoutConversationInput | CommunicationMessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: CommunicationMessageCreateManyConversationInputEnvelope
    set?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    disconnect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    delete?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    connect?: CommunicationMessageWhereUniqueInput | CommunicationMessageWhereUniqueInput[]
    update?: CommunicationMessageUpdateWithWhereUniqueWithoutConversationInput | CommunicationMessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: CommunicationMessageUpdateManyWithWhereWithoutConversationInput | CommunicationMessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: CommunicationMessageScalarWhereInput | CommunicationMessageScalarWhereInput[]
  }

  export type CommunicationParticipantUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<CommunicationParticipantCreateWithoutConversationInput, CommunicationParticipantUncheckedCreateWithoutConversationInput> | CommunicationParticipantCreateWithoutConversationInput[] | CommunicationParticipantUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: CommunicationParticipantCreateOrConnectWithoutConversationInput | CommunicationParticipantCreateOrConnectWithoutConversationInput[]
    upsert?: CommunicationParticipantUpsertWithWhereUniqueWithoutConversationInput | CommunicationParticipantUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: CommunicationParticipantCreateManyConversationInputEnvelope
    set?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
    disconnect?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
    delete?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
    connect?: CommunicationParticipantWhereUniqueInput | CommunicationParticipantWhereUniqueInput[]
    update?: CommunicationParticipantUpdateWithWhereUniqueWithoutConversationInput | CommunicationParticipantUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: CommunicationParticipantUpdateManyWithWhereWithoutConversationInput | CommunicationParticipantUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: CommunicationParticipantScalarWhereInput | CommunicationParticipantScalarWhereInput[]
  }

  export type CommunicationConversationCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<CommunicationConversationCreateWithoutParticipantsInput, CommunicationConversationUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutParticipantsInput
    connect?: CommunicationConversationWhereUniqueInput
  }

  export type CommunicationConversationUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<CommunicationConversationCreateWithoutParticipantsInput, CommunicationConversationUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutParticipantsInput
    upsert?: CommunicationConversationUpsertWithoutParticipantsInput
    connect?: CommunicationConversationWhereUniqueInput
    update?: XOR<XOR<CommunicationConversationUpdateToOneWithWhereWithoutParticipantsInput, CommunicationConversationUpdateWithoutParticipantsInput>, CommunicationConversationUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserCreateNestedOneWithoutCommunicationMessagesInput = {
    create?: XOR<UserCreateWithoutCommunicationMessagesInput, UserUncheckedCreateWithoutCommunicationMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunicationMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectedAccountCreateNestedOneWithoutCommunicationMessagesInput = {
    create?: XOR<ConnectedAccountCreateWithoutCommunicationMessagesInput, ConnectedAccountUncheckedCreateWithoutCommunicationMessagesInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutCommunicationMessagesInput
    connect?: ConnectedAccountWhereUniqueInput
  }

  export type CommunicationConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<CommunicationConversationCreateWithoutMessagesInput, CommunicationConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutMessagesInput
    connect?: CommunicationConversationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommunicationMessagesNestedInput = {
    create?: XOR<UserCreateWithoutCommunicationMessagesInput, UserUncheckedCreateWithoutCommunicationMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunicationMessagesInput
    upsert?: UserUpsertWithoutCommunicationMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunicationMessagesInput, UserUpdateWithoutCommunicationMessagesInput>, UserUncheckedUpdateWithoutCommunicationMessagesInput>
  }

  export type ConnectedAccountUpdateOneRequiredWithoutCommunicationMessagesNestedInput = {
    create?: XOR<ConnectedAccountCreateWithoutCommunicationMessagesInput, ConnectedAccountUncheckedCreateWithoutCommunicationMessagesInput>
    connectOrCreate?: ConnectedAccountCreateOrConnectWithoutCommunicationMessagesInput
    upsert?: ConnectedAccountUpsertWithoutCommunicationMessagesInput
    connect?: ConnectedAccountWhereUniqueInput
    update?: XOR<XOR<ConnectedAccountUpdateToOneWithWhereWithoutCommunicationMessagesInput, ConnectedAccountUpdateWithoutCommunicationMessagesInput>, ConnectedAccountUncheckedUpdateWithoutCommunicationMessagesInput>
  }

  export type CommunicationConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<CommunicationConversationCreateWithoutMessagesInput, CommunicationConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: CommunicationConversationCreateOrConnectWithoutMessagesInput
    upsert?: CommunicationConversationUpsertWithoutMessagesInput
    connect?: CommunicationConversationWhereUniqueInput
    update?: XOR<XOR<CommunicationConversationUpdateToOneWithWhereWithoutMessagesInput, CommunicationConversationUpdateWithoutMessagesInput>, CommunicationConversationUncheckedUpdateWithoutMessagesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAICategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AICategory | EnumAICategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.AICategory[] | ListEnumAICategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AICategory[] | ListEnumAICategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAICategoryNullableFilter<$PrismaModel> | $Enums.AICategory | null
  }

  export type NestedEnumAIPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AIPriority | EnumAIPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIPriority[] | ListEnumAIPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIPriority[] | ListEnumAIPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIPriorityNullableFilter<$PrismaModel> | $Enums.AIPriority | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAICategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AICategory | EnumAICategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.AICategory[] | ListEnumAICategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AICategory[] | ListEnumAICategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAICategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.AICategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAICategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumAICategoryNullableFilter<$PrismaModel>
  }

  export type NestedEnumAIPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIPriority | EnumAIPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIPriority[] | ListEnumAIPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AIPriority[] | ListEnumAIPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAIPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.AIPriority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAIPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumAIPriorityNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type ConnectedAccountCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionUncheckedCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountCreateOrConnectWithoutUserInput = {
    where: ConnectedAccountWhereUniqueInput
    create: XOR<ConnectedAccountCreateWithoutUserInput, ConnectedAccountUncheckedCreateWithoutUserInput>
  }

  export type ConnectedAccountCreateManyUserInputEnvelope = {
    data: ConnectedAccountCreateManyUserInput | ConnectedAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailMessageCreateWithoutUserInput = {
    id?: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccount: ConnectedAccountCreateNestedOneWithoutEmailMessagesInput
  }

  export type EmailMessageUncheckedCreateWithoutUserInput = {
    id?: string
    connectedAccountId: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailMessageCreateOrConnectWithoutUserInput = {
    where: EmailMessageWhereUniqueInput
    create: XOR<EmailMessageCreateWithoutUserInput, EmailMessageUncheckedCreateWithoutUserInput>
  }

  export type EmailMessageCreateManyUserInputEnvelope = {
    data: EmailMessageCreateManyUserInput | EmailMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConnectedCalendarCreateWithoutUserInput = {
    id?: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccount: ConnectedAccountCreateNestedOneWithoutConnectedCalendarsInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutCalendarInput
  }

  export type ConnectedCalendarUncheckedCreateWithoutUserInput = {
    id?: string
    connectedAccountId: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type ConnectedCalendarCreateOrConnectWithoutUserInput = {
    where: ConnectedCalendarWhereUniqueInput
    create: XOR<ConnectedCalendarCreateWithoutUserInput, ConnectedCalendarUncheckedCreateWithoutUserInput>
  }

  export type ConnectedCalendarCreateManyUserInputEnvelope = {
    data: ConnectedCalendarCreateManyUserInput | ConnectedCalendarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CalendarEventCreateWithoutUserInput = {
    id?: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCalendarEventsInput
    calendar: ConnectedCalendarCreateNestedOneWithoutCalendarEventsInput
  }

  export type CalendarEventUncheckedCreateWithoutUserInput = {
    id?: string
    connectedAccountId: string
    calendarId: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventCreateOrConnectWithoutUserInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput>
  }

  export type CalendarEventCreateManyUserInputEnvelope = {
    data: CalendarEventCreateManyUserInput | CalendarEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationConversationCreateWithoutUserInput = {
    id?: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCommunicationConversationsInput
    messages?: CommunicationMessageCreateNestedManyWithoutConversationInput
    participants?: CommunicationParticipantCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationUncheckedCreateWithoutUserInput = {
    id?: string
    connectedAccountId: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: CommunicationMessageUncheckedCreateNestedManyWithoutConversationInput
    participants?: CommunicationParticipantUncheckedCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationCreateOrConnectWithoutUserInput = {
    where: CommunicationConversationWhereUniqueInput
    create: XOR<CommunicationConversationCreateWithoutUserInput, CommunicationConversationUncheckedCreateWithoutUserInput>
  }

  export type CommunicationConversationCreateManyUserInputEnvelope = {
    data: CommunicationConversationCreateManyUserInput | CommunicationConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationMessageCreateWithoutUserInput = {
    id?: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCommunicationMessagesInput
    conversation: CommunicationConversationCreateNestedOneWithoutMessagesInput
  }

  export type CommunicationMessageUncheckedCreateWithoutUserInput = {
    id?: string
    conversationId: string
    connectedAccountId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
  }

  export type CommunicationMessageCreateOrConnectWithoutUserInput = {
    where: CommunicationMessageWhereUniqueInput
    create: XOR<CommunicationMessageCreateWithoutUserInput, CommunicationMessageUncheckedCreateWithoutUserInput>
  }

  export type CommunicationMessageCreateManyUserInputEnvelope = {
    data: CommunicationMessageCreateManyUserInput | CommunicationMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConnectedAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: ConnectedAccountWhereUniqueInput
    update: XOR<ConnectedAccountUpdateWithoutUserInput, ConnectedAccountUncheckedUpdateWithoutUserInput>
    create: XOR<ConnectedAccountCreateWithoutUserInput, ConnectedAccountUncheckedCreateWithoutUserInput>
  }

  export type ConnectedAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: ConnectedAccountWhereUniqueInput
    data: XOR<ConnectedAccountUpdateWithoutUserInput, ConnectedAccountUncheckedUpdateWithoutUserInput>
  }

  export type ConnectedAccountUpdateManyWithWhereWithoutUserInput = {
    where: ConnectedAccountScalarWhereInput
    data: XOR<ConnectedAccountUpdateManyMutationInput, ConnectedAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type ConnectedAccountScalarWhereInput = {
    AND?: ConnectedAccountScalarWhereInput | ConnectedAccountScalarWhereInput[]
    OR?: ConnectedAccountScalarWhereInput[]
    NOT?: ConnectedAccountScalarWhereInput | ConnectedAccountScalarWhereInput[]
    id?: StringFilter<"ConnectedAccount"> | string
    userId?: StringFilter<"ConnectedAccount"> | string
    provider?: StringFilter<"ConnectedAccount"> | string
    providerAccountId?: StringFilter<"ConnectedAccount"> | string
    email?: StringNullableFilter<"ConnectedAccount"> | string | null
    accessToken?: StringNullableFilter<"ConnectedAccount"> | string | null
    refreshToken?: StringNullableFilter<"ConnectedAccount"> | string | null
    expiresAt?: DateTimeNullableFilter<"ConnectedAccount"> | Date | string | null
    scope?: StringNullableFilter<"ConnectedAccount"> | string | null
    status?: StringNullableFilter<"ConnectedAccount"> | string | null
    createdAt?: DateTimeFilter<"ConnectedAccount"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectedAccount"> | Date | string
  }

  export type EmailMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailMessageWhereUniqueInput
    update: XOR<EmailMessageUpdateWithoutUserInput, EmailMessageUncheckedUpdateWithoutUserInput>
    create: XOR<EmailMessageCreateWithoutUserInput, EmailMessageUncheckedCreateWithoutUserInput>
  }

  export type EmailMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailMessageWhereUniqueInput
    data: XOR<EmailMessageUpdateWithoutUserInput, EmailMessageUncheckedUpdateWithoutUserInput>
  }

  export type EmailMessageUpdateManyWithWhereWithoutUserInput = {
    where: EmailMessageScalarWhereInput
    data: XOR<EmailMessageUpdateManyMutationInput, EmailMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailMessageScalarWhereInput = {
    AND?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
    OR?: EmailMessageScalarWhereInput[]
    NOT?: EmailMessageScalarWhereInput | EmailMessageScalarWhereInput[]
    id?: StringFilter<"EmailMessage"> | string
    userId?: StringFilter<"EmailMessage"> | string
    connectedAccountId?: StringFilter<"EmailMessage"> | string
    gmailMessageId?: StringFilter<"EmailMessage"> | string
    threadId?: StringNullableFilter<"EmailMessage"> | string | null
    sender?: StringNullableFilter<"EmailMessage"> | string | null
    recipients?: StringNullableFilter<"EmailMessage"> | string | null
    subject?: StringNullableFilter<"EmailMessage"> | string | null
    snippet?: StringNullableFilter<"EmailMessage"> | string | null
    bodyText?: StringNullableFilter<"EmailMessage"> | string | null
    receivedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    isRead?: BoolFilter<"EmailMessage"> | boolean
    labels?: StringNullableFilter<"EmailMessage"> | string | null
    aiCategory?: EnumAICategoryNullableFilter<"EmailMessage"> | $Enums.AICategory | null
    aiPriority?: EnumAIPriorityNullableFilter<"EmailMessage"> | $Enums.AIPriority | null
    aiActionable?: BoolNullableFilter<"EmailMessage"> | boolean | null
    aiSummary?: StringNullableFilter<"EmailMessage"> | string | null
    aiReason?: StringNullableFilter<"EmailMessage"> | string | null
    aiProcessedAt?: DateTimeNullableFilter<"EmailMessage"> | Date | string | null
    createdAt?: DateTimeFilter<"EmailMessage"> | Date | string
    updatedAt?: DateTimeFilter<"EmailMessage"> | Date | string
  }

  export type ConnectedCalendarUpsertWithWhereUniqueWithoutUserInput = {
    where: ConnectedCalendarWhereUniqueInput
    update: XOR<ConnectedCalendarUpdateWithoutUserInput, ConnectedCalendarUncheckedUpdateWithoutUserInput>
    create: XOR<ConnectedCalendarCreateWithoutUserInput, ConnectedCalendarUncheckedCreateWithoutUserInput>
  }

  export type ConnectedCalendarUpdateWithWhereUniqueWithoutUserInput = {
    where: ConnectedCalendarWhereUniqueInput
    data: XOR<ConnectedCalendarUpdateWithoutUserInput, ConnectedCalendarUncheckedUpdateWithoutUserInput>
  }

  export type ConnectedCalendarUpdateManyWithWhereWithoutUserInput = {
    where: ConnectedCalendarScalarWhereInput
    data: XOR<ConnectedCalendarUpdateManyMutationInput, ConnectedCalendarUncheckedUpdateManyWithoutUserInput>
  }

  export type ConnectedCalendarScalarWhereInput = {
    AND?: ConnectedCalendarScalarWhereInput | ConnectedCalendarScalarWhereInput[]
    OR?: ConnectedCalendarScalarWhereInput[]
    NOT?: ConnectedCalendarScalarWhereInput | ConnectedCalendarScalarWhereInput[]
    id?: StringFilter<"ConnectedCalendar"> | string
    userId?: StringFilter<"ConnectedCalendar"> | string
    connectedAccountId?: StringFilter<"ConnectedCalendar"> | string
    googleCalendarId?: StringFilter<"ConnectedCalendar"> | string
    summary?: StringFilter<"ConnectedCalendar"> | string
    description?: StringNullableFilter<"ConnectedCalendar"> | string | null
    timeZone?: StringNullableFilter<"ConnectedCalendar"> | string | null
    isPrimary?: BoolFilter<"ConnectedCalendar"> | boolean
    isSelected?: BoolFilter<"ConnectedCalendar"> | boolean
    accessRole?: StringNullableFilter<"ConnectedCalendar"> | string | null
    syncToken?: StringNullableFilter<"ConnectedCalendar"> | string | null
    createdAt?: DateTimeFilter<"ConnectedCalendar"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectedCalendar"> | Date | string
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutUserInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutUserInput, CalendarEventUncheckedUpdateWithoutUserInput>
    create: XOR<CalendarEventCreateWithoutUserInput, CalendarEventUncheckedCreateWithoutUserInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutUserInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutUserInput, CalendarEventUncheckedUpdateWithoutUserInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutUserInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutUserInput>
  }

  export type CalendarEventScalarWhereInput = {
    AND?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
    OR?: CalendarEventScalarWhereInput[]
    NOT?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
    id?: StringFilter<"CalendarEvent"> | string
    userId?: StringFilter<"CalendarEvent"> | string
    connectedAccountId?: StringFilter<"CalendarEvent"> | string
    calendarId?: StringFilter<"CalendarEvent"> | string
    googleEventId?: StringFilter<"CalendarEvent"> | string
    title?: StringFilter<"CalendarEvent"> | string
    description?: StringNullableFilter<"CalendarEvent"> | string | null
    location?: StringNullableFilter<"CalendarEvent"> | string | null
    startTime?: DateTimeFilter<"CalendarEvent"> | Date | string
    endTime?: DateTimeFilter<"CalendarEvent"> | Date | string
    isAllDay?: BoolFilter<"CalendarEvent"> | boolean
    timeZone?: StringNullableFilter<"CalendarEvent"> | string | null
    status?: StringNullableFilter<"CalendarEvent"> | string | null
    htmlLink?: StringNullableFilter<"CalendarEvent"> | string | null
    organizer?: StringNullableFilter<"CalendarEvent"> | string | null
    attendees?: StringNullableFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeFilter<"CalendarEvent"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarEvent"> | Date | string
  }

  export type CommunicationConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunicationConversationWhereUniqueInput
    update: XOR<CommunicationConversationUpdateWithoutUserInput, CommunicationConversationUncheckedUpdateWithoutUserInput>
    create: XOR<CommunicationConversationCreateWithoutUserInput, CommunicationConversationUncheckedCreateWithoutUserInput>
  }

  export type CommunicationConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunicationConversationWhereUniqueInput
    data: XOR<CommunicationConversationUpdateWithoutUserInput, CommunicationConversationUncheckedUpdateWithoutUserInput>
  }

  export type CommunicationConversationUpdateManyWithWhereWithoutUserInput = {
    where: CommunicationConversationScalarWhereInput
    data: XOR<CommunicationConversationUpdateManyMutationInput, CommunicationConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunicationConversationScalarWhereInput = {
    AND?: CommunicationConversationScalarWhereInput | CommunicationConversationScalarWhereInput[]
    OR?: CommunicationConversationScalarWhereInput[]
    NOT?: CommunicationConversationScalarWhereInput | CommunicationConversationScalarWhereInput[]
    id?: StringFilter<"CommunicationConversation"> | string
    userId?: StringFilter<"CommunicationConversation"> | string
    connectedAccountId?: StringFilter<"CommunicationConversation"> | string
    source?: StringFilter<"CommunicationConversation"> | string
    remoteConversationId?: StringFilter<"CommunicationConversation"> | string
    title?: StringNullableFilter<"CommunicationConversation"> | string | null
    avatar?: StringNullableFilter<"CommunicationConversation"> | string | null
    isGroup?: BoolFilter<"CommunicationConversation"> | boolean
    lastMessageAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
    lastMessagePreview?: StringNullableFilter<"CommunicationConversation"> | string | null
    unreadCount?: IntFilter<"CommunicationConversation"> | number
    createdAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationConversation"> | Date | string
  }

  export type CommunicationMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunicationMessageWhereUniqueInput
    update: XOR<CommunicationMessageUpdateWithoutUserInput, CommunicationMessageUncheckedUpdateWithoutUserInput>
    create: XOR<CommunicationMessageCreateWithoutUserInput, CommunicationMessageUncheckedCreateWithoutUserInput>
  }

  export type CommunicationMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunicationMessageWhereUniqueInput
    data: XOR<CommunicationMessageUpdateWithoutUserInput, CommunicationMessageUncheckedUpdateWithoutUserInput>
  }

  export type CommunicationMessageUpdateManyWithWhereWithoutUserInput = {
    where: CommunicationMessageScalarWhereInput
    data: XOR<CommunicationMessageUpdateManyMutationInput, CommunicationMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunicationMessageScalarWhereInput = {
    AND?: CommunicationMessageScalarWhereInput | CommunicationMessageScalarWhereInput[]
    OR?: CommunicationMessageScalarWhereInput[]
    NOT?: CommunicationMessageScalarWhereInput | CommunicationMessageScalarWhereInput[]
    id?: StringFilter<"CommunicationMessage"> | string
    userId?: StringFilter<"CommunicationMessage"> | string
    conversationId?: StringFilter<"CommunicationMessage"> | string
    connectedAccountId?: StringFilter<"CommunicationMessage"> | string
    source?: StringFilter<"CommunicationMessage"> | string
    remoteMessageId?: StringFilter<"CommunicationMessage"> | string
    senderId?: StringFilter<"CommunicationMessage"> | string
    senderName?: StringNullableFilter<"CommunicationMessage"> | string | null
    text?: StringNullableFilter<"CommunicationMessage"> | string | null
    messageType?: StringFilter<"CommunicationMessage"> | string
    isFromMe?: BoolFilter<"CommunicationMessage"> | boolean
    isRead?: BoolFilter<"CommunicationMessage"> | boolean
    sentAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    createdAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationMessage"> | Date | string
    aiCategory?: EnumAICategoryNullableFilter<"CommunicationMessage"> | $Enums.AICategory | null
    aiPriority?: EnumAIPriorityNullableFilter<"CommunicationMessage"> | $Enums.AIPriority | null
    aiActionable?: BoolNullableFilter<"CommunicationMessage"> | boolean | null
    aiSummary?: StringNullableFilter<"CommunicationMessage"> | string | null
    aiReason?: StringNullableFilter<"CommunicationMessage"> | string | null
    aiProcessedAt?: DateTimeNullableFilter<"CommunicationMessage"> | Date | string | null
  }

  export type UserCreateWithoutConnectedAccountsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConnectedAccountsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConnectedAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConnectedAccountsInput, UserUncheckedCreateWithoutConnectedAccountsInput>
  }

  export type EmailMessageCreateWithoutConnectedAccountInput = {
    id?: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmailMessagesInput
  }

  export type EmailMessageUncheckedCreateWithoutConnectedAccountInput = {
    id?: string
    userId: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailMessageCreateOrConnectWithoutConnectedAccountInput = {
    where: EmailMessageWhereUniqueInput
    create: XOR<EmailMessageCreateWithoutConnectedAccountInput, EmailMessageUncheckedCreateWithoutConnectedAccountInput>
  }

  export type EmailMessageCreateManyConnectedAccountInputEnvelope = {
    data: EmailMessageCreateManyConnectedAccountInput | EmailMessageCreateManyConnectedAccountInput[]
    skipDuplicates?: boolean
  }

  export type ConnectedCalendarCreateWithoutConnectedAccountInput = {
    id?: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedCalendarsInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutCalendarInput
  }

  export type ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput = {
    id?: string
    userId: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type ConnectedCalendarCreateOrConnectWithoutConnectedAccountInput = {
    where: ConnectedCalendarWhereUniqueInput
    create: XOR<ConnectedCalendarCreateWithoutConnectedAccountInput, ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput>
  }

  export type ConnectedCalendarCreateManyConnectedAccountInputEnvelope = {
    data: ConnectedCalendarCreateManyConnectedAccountInput | ConnectedCalendarCreateManyConnectedAccountInput[]
    skipDuplicates?: boolean
  }

  export type CalendarEventCreateWithoutConnectedAccountInput = {
    id?: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCalendarEventsInput
    calendar: ConnectedCalendarCreateNestedOneWithoutCalendarEventsInput
  }

  export type CalendarEventUncheckedCreateWithoutConnectedAccountInput = {
    id?: string
    userId: string
    calendarId: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventCreateOrConnectWithoutConnectedAccountInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutConnectedAccountInput, CalendarEventUncheckedCreateWithoutConnectedAccountInput>
  }

  export type CalendarEventCreateManyConnectedAccountInputEnvelope = {
    data: CalendarEventCreateManyConnectedAccountInput | CalendarEventCreateManyConnectedAccountInput[]
    skipDuplicates?: boolean
  }

  export type WhatsAppSessionCreateWithoutConnectedAccountInput = {
    id?: string
    creds: string
    keys: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionUncheckedCreateWithoutConnectedAccountInput = {
    id?: string
    creds: string
    keys: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhatsAppSessionCreateOrConnectWithoutConnectedAccountInput = {
    where: WhatsAppSessionWhereUniqueInput
    create: XOR<WhatsAppSessionCreateWithoutConnectedAccountInput, WhatsAppSessionUncheckedCreateWithoutConnectedAccountInput>
  }

  export type CommunicationConversationCreateWithoutConnectedAccountInput = {
    id?: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommunicationConversationsInput
    messages?: CommunicationMessageCreateNestedManyWithoutConversationInput
    participants?: CommunicationParticipantCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationUncheckedCreateWithoutConnectedAccountInput = {
    id?: string
    userId: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: CommunicationMessageUncheckedCreateNestedManyWithoutConversationInput
    participants?: CommunicationParticipantUncheckedCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationCreateOrConnectWithoutConnectedAccountInput = {
    where: CommunicationConversationWhereUniqueInput
    create: XOR<CommunicationConversationCreateWithoutConnectedAccountInput, CommunicationConversationUncheckedCreateWithoutConnectedAccountInput>
  }

  export type CommunicationConversationCreateManyConnectedAccountInputEnvelope = {
    data: CommunicationConversationCreateManyConnectedAccountInput | CommunicationConversationCreateManyConnectedAccountInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationMessageCreateWithoutConnectedAccountInput = {
    id?: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommunicationMessagesInput
    conversation: CommunicationConversationCreateNestedOneWithoutMessagesInput
  }

  export type CommunicationMessageUncheckedCreateWithoutConnectedAccountInput = {
    id?: string
    userId: string
    conversationId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
  }

  export type CommunicationMessageCreateOrConnectWithoutConnectedAccountInput = {
    where: CommunicationMessageWhereUniqueInput
    create: XOR<CommunicationMessageCreateWithoutConnectedAccountInput, CommunicationMessageUncheckedCreateWithoutConnectedAccountInput>
  }

  export type CommunicationMessageCreateManyConnectedAccountInputEnvelope = {
    data: CommunicationMessageCreateManyConnectedAccountInput | CommunicationMessageCreateManyConnectedAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConnectedAccountsInput = {
    update: XOR<UserUpdateWithoutConnectedAccountsInput, UserUncheckedUpdateWithoutConnectedAccountsInput>
    create: XOR<UserCreateWithoutConnectedAccountsInput, UserUncheckedCreateWithoutConnectedAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConnectedAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConnectedAccountsInput, UserUncheckedUpdateWithoutConnectedAccountsInput>
  }

  export type UserUpdateWithoutConnectedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConnectedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmailMessageUpsertWithWhereUniqueWithoutConnectedAccountInput = {
    where: EmailMessageWhereUniqueInput
    update: XOR<EmailMessageUpdateWithoutConnectedAccountInput, EmailMessageUncheckedUpdateWithoutConnectedAccountInput>
    create: XOR<EmailMessageCreateWithoutConnectedAccountInput, EmailMessageUncheckedCreateWithoutConnectedAccountInput>
  }

  export type EmailMessageUpdateWithWhereUniqueWithoutConnectedAccountInput = {
    where: EmailMessageWhereUniqueInput
    data: XOR<EmailMessageUpdateWithoutConnectedAccountInput, EmailMessageUncheckedUpdateWithoutConnectedAccountInput>
  }

  export type EmailMessageUpdateManyWithWhereWithoutConnectedAccountInput = {
    where: EmailMessageScalarWhereInput
    data: XOR<EmailMessageUpdateManyMutationInput, EmailMessageUncheckedUpdateManyWithoutConnectedAccountInput>
  }

  export type ConnectedCalendarUpsertWithWhereUniqueWithoutConnectedAccountInput = {
    where: ConnectedCalendarWhereUniqueInput
    update: XOR<ConnectedCalendarUpdateWithoutConnectedAccountInput, ConnectedCalendarUncheckedUpdateWithoutConnectedAccountInput>
    create: XOR<ConnectedCalendarCreateWithoutConnectedAccountInput, ConnectedCalendarUncheckedCreateWithoutConnectedAccountInput>
  }

  export type ConnectedCalendarUpdateWithWhereUniqueWithoutConnectedAccountInput = {
    where: ConnectedCalendarWhereUniqueInput
    data: XOR<ConnectedCalendarUpdateWithoutConnectedAccountInput, ConnectedCalendarUncheckedUpdateWithoutConnectedAccountInput>
  }

  export type ConnectedCalendarUpdateManyWithWhereWithoutConnectedAccountInput = {
    where: ConnectedCalendarScalarWhereInput
    data: XOR<ConnectedCalendarUpdateManyMutationInput, ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountInput>
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutConnectedAccountInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutConnectedAccountInput, CalendarEventUncheckedUpdateWithoutConnectedAccountInput>
    create: XOR<CalendarEventCreateWithoutConnectedAccountInput, CalendarEventUncheckedCreateWithoutConnectedAccountInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutConnectedAccountInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutConnectedAccountInput, CalendarEventUncheckedUpdateWithoutConnectedAccountInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutConnectedAccountInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutConnectedAccountInput>
  }

  export type WhatsAppSessionUpsertWithoutConnectedAccountInput = {
    update: XOR<WhatsAppSessionUpdateWithoutConnectedAccountInput, WhatsAppSessionUncheckedUpdateWithoutConnectedAccountInput>
    create: XOR<WhatsAppSessionCreateWithoutConnectedAccountInput, WhatsAppSessionUncheckedCreateWithoutConnectedAccountInput>
    where?: WhatsAppSessionWhereInput
  }

  export type WhatsAppSessionUpdateToOneWithWhereWithoutConnectedAccountInput = {
    where?: WhatsAppSessionWhereInput
    data: XOR<WhatsAppSessionUpdateWithoutConnectedAccountInput, WhatsAppSessionUncheckedUpdateWithoutConnectedAccountInput>
  }

  export type WhatsAppSessionUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    creds?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhatsAppSessionUncheckedUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    creds?: StringFieldUpdateOperationsInput | string
    keys?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationConversationUpsertWithWhereUniqueWithoutConnectedAccountInput = {
    where: CommunicationConversationWhereUniqueInput
    update: XOR<CommunicationConversationUpdateWithoutConnectedAccountInput, CommunicationConversationUncheckedUpdateWithoutConnectedAccountInput>
    create: XOR<CommunicationConversationCreateWithoutConnectedAccountInput, CommunicationConversationUncheckedCreateWithoutConnectedAccountInput>
  }

  export type CommunicationConversationUpdateWithWhereUniqueWithoutConnectedAccountInput = {
    where: CommunicationConversationWhereUniqueInput
    data: XOR<CommunicationConversationUpdateWithoutConnectedAccountInput, CommunicationConversationUncheckedUpdateWithoutConnectedAccountInput>
  }

  export type CommunicationConversationUpdateManyWithWhereWithoutConnectedAccountInput = {
    where: CommunicationConversationScalarWhereInput
    data: XOR<CommunicationConversationUpdateManyMutationInput, CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountInput>
  }

  export type CommunicationMessageUpsertWithWhereUniqueWithoutConnectedAccountInput = {
    where: CommunicationMessageWhereUniqueInput
    update: XOR<CommunicationMessageUpdateWithoutConnectedAccountInput, CommunicationMessageUncheckedUpdateWithoutConnectedAccountInput>
    create: XOR<CommunicationMessageCreateWithoutConnectedAccountInput, CommunicationMessageUncheckedCreateWithoutConnectedAccountInput>
  }

  export type CommunicationMessageUpdateWithWhereUniqueWithoutConnectedAccountInput = {
    where: CommunicationMessageWhereUniqueInput
    data: XOR<CommunicationMessageUpdateWithoutConnectedAccountInput, CommunicationMessageUncheckedUpdateWithoutConnectedAccountInput>
  }

  export type CommunicationMessageUpdateManyWithWhereWithoutConnectedAccountInput = {
    where: CommunicationMessageScalarWhereInput
    data: XOR<CommunicationMessageUpdateManyMutationInput, CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountInput>
  }

  export type UserCreateWithoutEmailMessagesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailMessagesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountUncheckedCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailMessagesInput, UserUncheckedCreateWithoutEmailMessagesInput>
  }

  export type ConnectedAccountCreateWithoutEmailMessagesInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedAccountsInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUncheckedCreateWithoutEmailMessagesInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionUncheckedCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountCreateOrConnectWithoutEmailMessagesInput = {
    where: ConnectedAccountWhereUniqueInput
    create: XOR<ConnectedAccountCreateWithoutEmailMessagesInput, ConnectedAccountUncheckedCreateWithoutEmailMessagesInput>
  }

  export type UserUpsertWithoutEmailMessagesInput = {
    update: XOR<UserUpdateWithoutEmailMessagesInput, UserUncheckedUpdateWithoutEmailMessagesInput>
    create: XOR<UserCreateWithoutEmailMessagesInput, UserUncheckedCreateWithoutEmailMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailMessagesInput, UserUncheckedUpdateWithoutEmailMessagesInput>
  }

  export type UserUpdateWithoutEmailMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUncheckedUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectedAccountUpsertWithoutEmailMessagesInput = {
    update: XOR<ConnectedAccountUpdateWithoutEmailMessagesInput, ConnectedAccountUncheckedUpdateWithoutEmailMessagesInput>
    create: XOR<ConnectedAccountCreateWithoutEmailMessagesInput, ConnectedAccountUncheckedCreateWithoutEmailMessagesInput>
    where?: ConnectedAccountWhereInput
  }

  export type ConnectedAccountUpdateToOneWithWhereWithoutEmailMessagesInput = {
    where?: ConnectedAccountWhereInput
    data: XOR<ConnectedAccountUpdateWithoutEmailMessagesInput, ConnectedAccountUncheckedUpdateWithoutEmailMessagesInput>
  }

  export type ConnectedAccountUpdateWithoutEmailMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedAccountsNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateWithoutEmailMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUncheckedUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
  }

  export type UserCreateWithoutConnectedCalendarsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConnectedCalendarsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountUncheckedCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConnectedCalendarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConnectedCalendarsInput, UserUncheckedCreateWithoutConnectedCalendarsInput>
  }

  export type ConnectedAccountCreateWithoutConnectedCalendarsInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedAccountsInput
    emailMessages?: EmailMessageCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUncheckedCreateWithoutConnectedCalendarsInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionUncheckedCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountCreateOrConnectWithoutConnectedCalendarsInput = {
    where: ConnectedAccountWhereUniqueInput
    create: XOR<ConnectedAccountCreateWithoutConnectedCalendarsInput, ConnectedAccountUncheckedCreateWithoutConnectedCalendarsInput>
  }

  export type CalendarEventCreateWithoutCalendarInput = {
    id?: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCalendarEventsInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCalendarEventsInput
  }

  export type CalendarEventUncheckedCreateWithoutCalendarInput = {
    id?: string
    userId: string
    connectedAccountId: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventCreateOrConnectWithoutCalendarInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutCalendarInput, CalendarEventUncheckedCreateWithoutCalendarInput>
  }

  export type CalendarEventCreateManyCalendarInputEnvelope = {
    data: CalendarEventCreateManyCalendarInput | CalendarEventCreateManyCalendarInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutConnectedCalendarsInput = {
    update: XOR<UserUpdateWithoutConnectedCalendarsInput, UserUncheckedUpdateWithoutConnectedCalendarsInput>
    create: XOR<UserCreateWithoutConnectedCalendarsInput, UserUncheckedCreateWithoutConnectedCalendarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConnectedCalendarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConnectedCalendarsInput, UserUncheckedUpdateWithoutConnectedCalendarsInput>
  }

  export type UserUpdateWithoutConnectedCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConnectedCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUncheckedUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectedAccountUpsertWithoutConnectedCalendarsInput = {
    update: XOR<ConnectedAccountUpdateWithoutConnectedCalendarsInput, ConnectedAccountUncheckedUpdateWithoutConnectedCalendarsInput>
    create: XOR<ConnectedAccountCreateWithoutConnectedCalendarsInput, ConnectedAccountUncheckedCreateWithoutConnectedCalendarsInput>
    where?: ConnectedAccountWhereInput
  }

  export type ConnectedAccountUpdateToOneWithWhereWithoutConnectedCalendarsInput = {
    where?: ConnectedAccountWhereInput
    data: XOR<ConnectedAccountUpdateWithoutConnectedCalendarsInput, ConnectedAccountUncheckedUpdateWithoutConnectedCalendarsInput>
  }

  export type ConnectedAccountUpdateWithoutConnectedCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedAccountsNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateWithoutConnectedCalendarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUncheckedUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutCalendarInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutCalendarInput, CalendarEventUncheckedUpdateWithoutCalendarInput>
    create: XOR<CalendarEventCreateWithoutCalendarInput, CalendarEventUncheckedCreateWithoutCalendarInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutCalendarInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutCalendarInput, CalendarEventUncheckedUpdateWithoutCalendarInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutCalendarInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutCalendarInput>
  }

  export type UserCreateWithoutCalendarEventsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCalendarEventsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountUncheckedCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCalendarEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarEventsInput, UserUncheckedCreateWithoutCalendarEventsInput>
  }

  export type ConnectedAccountCreateWithoutCalendarEventsInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedAccountsInput
    emailMessages?: EmailMessageCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUncheckedCreateWithoutCalendarEventsInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionUncheckedCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountCreateOrConnectWithoutCalendarEventsInput = {
    where: ConnectedAccountWhereUniqueInput
    create: XOR<ConnectedAccountCreateWithoutCalendarEventsInput, ConnectedAccountUncheckedCreateWithoutCalendarEventsInput>
  }

  export type ConnectedCalendarCreateWithoutCalendarEventsInput = {
    id?: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedCalendarsInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutConnectedCalendarsInput
  }

  export type ConnectedCalendarUncheckedCreateWithoutCalendarEventsInput = {
    id?: string
    userId: string
    connectedAccountId: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectedCalendarCreateOrConnectWithoutCalendarEventsInput = {
    where: ConnectedCalendarWhereUniqueInput
    create: XOR<ConnectedCalendarCreateWithoutCalendarEventsInput, ConnectedCalendarUncheckedCreateWithoutCalendarEventsInput>
  }

  export type UserUpsertWithoutCalendarEventsInput = {
    update: XOR<UserUpdateWithoutCalendarEventsInput, UserUncheckedUpdateWithoutCalendarEventsInput>
    create: XOR<UserCreateWithoutCalendarEventsInput, UserUncheckedCreateWithoutCalendarEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCalendarEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCalendarEventsInput, UserUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type UserUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUncheckedUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectedAccountUpsertWithoutCalendarEventsInput = {
    update: XOR<ConnectedAccountUpdateWithoutCalendarEventsInput, ConnectedAccountUncheckedUpdateWithoutCalendarEventsInput>
    create: XOR<ConnectedAccountCreateWithoutCalendarEventsInput, ConnectedAccountUncheckedCreateWithoutCalendarEventsInput>
    where?: ConnectedAccountWhereInput
  }

  export type ConnectedAccountUpdateToOneWithWhereWithoutCalendarEventsInput = {
    where?: ConnectedAccountWhereInput
    data: XOR<ConnectedAccountUpdateWithoutCalendarEventsInput, ConnectedAccountUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type ConnectedAccountUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedAccountsNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUncheckedUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedCalendarUpsertWithoutCalendarEventsInput = {
    update: XOR<ConnectedCalendarUpdateWithoutCalendarEventsInput, ConnectedCalendarUncheckedUpdateWithoutCalendarEventsInput>
    create: XOR<ConnectedCalendarCreateWithoutCalendarEventsInput, ConnectedCalendarUncheckedCreateWithoutCalendarEventsInput>
    where?: ConnectedCalendarWhereInput
  }

  export type ConnectedCalendarUpdateToOneWithWhereWithoutCalendarEventsInput = {
    where?: ConnectedCalendarWhereInput
    data: XOR<ConnectedCalendarUpdateWithoutCalendarEventsInput, ConnectedCalendarUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type ConnectedCalendarUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedCalendarsNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutConnectedCalendarsNestedInput
  }

  export type ConnectedCalendarUncheckedUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectedAccountCreateWithoutWhatsappSessionInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedAccountsInput
    emailMessages?: EmailMessageCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUncheckedCreateWithoutWhatsappSessionInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountCreateOrConnectWithoutWhatsappSessionInput = {
    where: ConnectedAccountWhereUniqueInput
    create: XOR<ConnectedAccountCreateWithoutWhatsappSessionInput, ConnectedAccountUncheckedCreateWithoutWhatsappSessionInput>
  }

  export type ConnectedAccountUpsertWithoutWhatsappSessionInput = {
    update: XOR<ConnectedAccountUpdateWithoutWhatsappSessionInput, ConnectedAccountUncheckedUpdateWithoutWhatsappSessionInput>
    create: XOR<ConnectedAccountCreateWithoutWhatsappSessionInput, ConnectedAccountUncheckedCreateWithoutWhatsappSessionInput>
    where?: ConnectedAccountWhereInput
  }

  export type ConnectedAccountUpdateToOneWithWhereWithoutWhatsappSessionInput = {
    where?: ConnectedAccountWhereInput
    data: XOR<ConnectedAccountUpdateWithoutWhatsappSessionInput, ConnectedAccountUncheckedUpdateWithoutWhatsappSessionInput>
  }

  export type ConnectedAccountUpdateWithoutWhatsappSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedAccountsNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateWithoutWhatsappSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
  }

  export type UserCreateWithoutCommunicationConversationsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunicationConversationsInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountUncheckedCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunicationConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunicationConversationsInput, UserUncheckedCreateWithoutCommunicationConversationsInput>
  }

  export type ConnectedAccountCreateWithoutCommunicationConversationsInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedAccountsInput
    emailMessages?: EmailMessageCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionCreateNestedOneWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUncheckedCreateWithoutCommunicationConversationsInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionUncheckedCreateNestedOneWithoutConnectedAccountInput
    communicationMessages?: CommunicationMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountCreateOrConnectWithoutCommunicationConversationsInput = {
    where: ConnectedAccountWhereUniqueInput
    create: XOR<ConnectedAccountCreateWithoutCommunicationConversationsInput, ConnectedAccountUncheckedCreateWithoutCommunicationConversationsInput>
  }

  export type CommunicationMessageCreateWithoutConversationInput = {
    id?: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommunicationMessagesInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCommunicationMessagesInput
  }

  export type CommunicationMessageUncheckedCreateWithoutConversationInput = {
    id?: string
    userId: string
    connectedAccountId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
  }

  export type CommunicationMessageCreateOrConnectWithoutConversationInput = {
    where: CommunicationMessageWhereUniqueInput
    create: XOR<CommunicationMessageCreateWithoutConversationInput, CommunicationMessageUncheckedCreateWithoutConversationInput>
  }

  export type CommunicationMessageCreateManyConversationInputEnvelope = {
    data: CommunicationMessageCreateManyConversationInput | CommunicationMessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationParticipantCreateWithoutConversationInput = {
    id?: string
    remoteParticipantId: string
    phone?: string | null
    displayName?: string | null
    avatar?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationParticipantUncheckedCreateWithoutConversationInput = {
    id?: string
    remoteParticipantId: string
    phone?: string | null
    displayName?: string | null
    avatar?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationParticipantCreateOrConnectWithoutConversationInput = {
    where: CommunicationParticipantWhereUniqueInput
    create: XOR<CommunicationParticipantCreateWithoutConversationInput, CommunicationParticipantUncheckedCreateWithoutConversationInput>
  }

  export type CommunicationParticipantCreateManyConversationInputEnvelope = {
    data: CommunicationParticipantCreateManyConversationInput | CommunicationParticipantCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommunicationConversationsInput = {
    update: XOR<UserUpdateWithoutCommunicationConversationsInput, UserUncheckedUpdateWithoutCommunicationConversationsInput>
    create: XOR<UserCreateWithoutCommunicationConversationsInput, UserUncheckedCreateWithoutCommunicationConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunicationConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunicationConversationsInput, UserUncheckedUpdateWithoutCommunicationConversationsInput>
  }

  export type UserUpdateWithoutCommunicationConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunicationConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUncheckedUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectedAccountUpsertWithoutCommunicationConversationsInput = {
    update: XOR<ConnectedAccountUpdateWithoutCommunicationConversationsInput, ConnectedAccountUncheckedUpdateWithoutCommunicationConversationsInput>
    create: XOR<ConnectedAccountCreateWithoutCommunicationConversationsInput, ConnectedAccountUncheckedCreateWithoutCommunicationConversationsInput>
    where?: ConnectedAccountWhereInput
  }

  export type ConnectedAccountUpdateToOneWithWhereWithoutCommunicationConversationsInput = {
    where?: ConnectedAccountWhereInput
    data: XOR<ConnectedAccountUpdateWithoutCommunicationConversationsInput, ConnectedAccountUncheckedUpdateWithoutCommunicationConversationsInput>
  }

  export type ConnectedAccountUpdateWithoutCommunicationConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedAccountsNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUpdateOneWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateWithoutCommunicationConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUncheckedUpdateOneWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
  }

  export type CommunicationMessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: CommunicationMessageWhereUniqueInput
    update: XOR<CommunicationMessageUpdateWithoutConversationInput, CommunicationMessageUncheckedUpdateWithoutConversationInput>
    create: XOR<CommunicationMessageCreateWithoutConversationInput, CommunicationMessageUncheckedCreateWithoutConversationInput>
  }

  export type CommunicationMessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: CommunicationMessageWhereUniqueInput
    data: XOR<CommunicationMessageUpdateWithoutConversationInput, CommunicationMessageUncheckedUpdateWithoutConversationInput>
  }

  export type CommunicationMessageUpdateManyWithWhereWithoutConversationInput = {
    where: CommunicationMessageScalarWhereInput
    data: XOR<CommunicationMessageUpdateManyMutationInput, CommunicationMessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type CommunicationParticipantUpsertWithWhereUniqueWithoutConversationInput = {
    where: CommunicationParticipantWhereUniqueInput
    update: XOR<CommunicationParticipantUpdateWithoutConversationInput, CommunicationParticipantUncheckedUpdateWithoutConversationInput>
    create: XOR<CommunicationParticipantCreateWithoutConversationInput, CommunicationParticipantUncheckedCreateWithoutConversationInput>
  }

  export type CommunicationParticipantUpdateWithWhereUniqueWithoutConversationInput = {
    where: CommunicationParticipantWhereUniqueInput
    data: XOR<CommunicationParticipantUpdateWithoutConversationInput, CommunicationParticipantUncheckedUpdateWithoutConversationInput>
  }

  export type CommunicationParticipantUpdateManyWithWhereWithoutConversationInput = {
    where: CommunicationParticipantScalarWhereInput
    data: XOR<CommunicationParticipantUpdateManyMutationInput, CommunicationParticipantUncheckedUpdateManyWithoutConversationInput>
  }

  export type CommunicationParticipantScalarWhereInput = {
    AND?: CommunicationParticipantScalarWhereInput | CommunicationParticipantScalarWhereInput[]
    OR?: CommunicationParticipantScalarWhereInput[]
    NOT?: CommunicationParticipantScalarWhereInput | CommunicationParticipantScalarWhereInput[]
    id?: StringFilter<"CommunicationParticipant"> | string
    conversationId?: StringFilter<"CommunicationParticipant"> | string
    remoteParticipantId?: StringFilter<"CommunicationParticipant"> | string
    phone?: StringNullableFilter<"CommunicationParticipant"> | string | null
    displayName?: StringNullableFilter<"CommunicationParticipant"> | string | null
    avatar?: StringNullableFilter<"CommunicationParticipant"> | string | null
    role?: StringNullableFilter<"CommunicationParticipant"> | string | null
    createdAt?: DateTimeFilter<"CommunicationParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"CommunicationParticipant"> | Date | string
  }

  export type CommunicationConversationCreateWithoutParticipantsInput = {
    id?: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommunicationConversationsInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCommunicationConversationsInput
    messages?: CommunicationMessageCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationUncheckedCreateWithoutParticipantsInput = {
    id?: string
    userId: string
    connectedAccountId: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: CommunicationMessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationCreateOrConnectWithoutParticipantsInput = {
    where: CommunicationConversationWhereUniqueInput
    create: XOR<CommunicationConversationCreateWithoutParticipantsInput, CommunicationConversationUncheckedCreateWithoutParticipantsInput>
  }

  export type CommunicationConversationUpsertWithoutParticipantsInput = {
    update: XOR<CommunicationConversationUpdateWithoutParticipantsInput, CommunicationConversationUncheckedUpdateWithoutParticipantsInput>
    create: XOR<CommunicationConversationCreateWithoutParticipantsInput, CommunicationConversationUncheckedCreateWithoutParticipantsInput>
    where?: CommunicationConversationWhereInput
  }

  export type CommunicationConversationUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: CommunicationConversationWhereInput
    data: XOR<CommunicationConversationUpdateWithoutParticipantsInput, CommunicationConversationUncheckedUpdateWithoutParticipantsInput>
  }

  export type CommunicationConversationUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommunicationConversationsNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCommunicationConversationsNestedInput
    messages?: CommunicationMessageUpdateManyWithoutConversationNestedInput
  }

  export type CommunicationConversationUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: CommunicationMessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UserCreateWithoutCommunicationMessagesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunicationMessagesInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    connectedAccounts?: ConnectedAccountUncheckedCreateNestedManyWithoutUserInput
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutUserInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutUserInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutUserInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunicationMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunicationMessagesInput, UserUncheckedCreateWithoutCommunicationMessagesInput>
  }

  export type ConnectedAccountCreateWithoutCommunicationMessagesInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConnectedAccountsInput
    emailMessages?: EmailMessageCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountUncheckedCreateWithoutCommunicationMessagesInput = {
    id?: string
    userId: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailMessages?: EmailMessageUncheckedCreateNestedManyWithoutConnectedAccountInput
    connectedCalendars?: ConnectedCalendarUncheckedCreateNestedManyWithoutConnectedAccountInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutConnectedAccountInput
    whatsappSession?: WhatsAppSessionUncheckedCreateNestedOneWithoutConnectedAccountInput
    communicationConversations?: CommunicationConversationUncheckedCreateNestedManyWithoutConnectedAccountInput
  }

  export type ConnectedAccountCreateOrConnectWithoutCommunicationMessagesInput = {
    where: ConnectedAccountWhereUniqueInput
    create: XOR<ConnectedAccountCreateWithoutCommunicationMessagesInput, ConnectedAccountUncheckedCreateWithoutCommunicationMessagesInput>
  }

  export type CommunicationConversationCreateWithoutMessagesInput = {
    id?: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommunicationConversationsInput
    connectedAccount: ConnectedAccountCreateNestedOneWithoutCommunicationConversationsInput
    participants?: CommunicationParticipantCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    connectedAccountId: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: CommunicationParticipantUncheckedCreateNestedManyWithoutConversationInput
  }

  export type CommunicationConversationCreateOrConnectWithoutMessagesInput = {
    where: CommunicationConversationWhereUniqueInput
    create: XOR<CommunicationConversationCreateWithoutMessagesInput, CommunicationConversationUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutCommunicationMessagesInput = {
    update: XOR<UserUpdateWithoutCommunicationMessagesInput, UserUncheckedUpdateWithoutCommunicationMessagesInput>
    create: XOR<UserCreateWithoutCommunicationMessagesInput, UserUncheckedCreateWithoutCommunicationMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunicationMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunicationMessagesInput, UserUncheckedUpdateWithoutCommunicationMessagesInput>
  }

  export type UserUpdateWithoutCommunicationMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunicationMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccounts?: ConnectedAccountUncheckedUpdateManyWithoutUserNestedInput
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutUserNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutUserNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutUserNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectedAccountUpsertWithoutCommunicationMessagesInput = {
    update: XOR<ConnectedAccountUpdateWithoutCommunicationMessagesInput, ConnectedAccountUncheckedUpdateWithoutCommunicationMessagesInput>
    create: XOR<ConnectedAccountCreateWithoutCommunicationMessagesInput, ConnectedAccountUncheckedCreateWithoutCommunicationMessagesInput>
    where?: ConnectedAccountWhereInput
  }

  export type ConnectedAccountUpdateToOneWithWhereWithoutCommunicationMessagesInput = {
    where?: ConnectedAccountWhereInput
    data: XOR<ConnectedAccountUpdateWithoutCommunicationMessagesInput, ConnectedAccountUncheckedUpdateWithoutCommunicationMessagesInput>
  }

  export type ConnectedAccountUpdateWithoutCommunicationMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedAccountsNestedInput
    emailMessages?: EmailMessageUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateWithoutCommunicationMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUncheckedUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountNestedInput
  }

  export type CommunicationConversationUpsertWithoutMessagesInput = {
    update: XOR<CommunicationConversationUpdateWithoutMessagesInput, CommunicationConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<CommunicationConversationCreateWithoutMessagesInput, CommunicationConversationUncheckedCreateWithoutMessagesInput>
    where?: CommunicationConversationWhereInput
  }

  export type CommunicationConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: CommunicationConversationWhereInput
    data: XOR<CommunicationConversationUpdateWithoutMessagesInput, CommunicationConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type CommunicationConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommunicationConversationsNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCommunicationConversationsNestedInput
    participants?: CommunicationParticipantUpdateManyWithoutConversationNestedInput
  }

  export type CommunicationConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: CommunicationParticipantUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConnectedAccountCreateManyUserInput = {
    id?: string
    provider: string
    providerAccountId: string
    email?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    scope?: string | null
    status?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailMessageCreateManyUserInput = {
    id?: string
    connectedAccountId: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectedCalendarCreateManyUserInput = {
    id?: string
    connectedAccountId: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventCreateManyUserInput = {
    id?: string
    connectedAccountId: string
    calendarId: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationConversationCreateManyUserInput = {
    id?: string
    connectedAccountId: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationMessageCreateManyUserInput = {
    id?: string
    conversationId: string
    connectedAccountId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
  }

  export type ConnectedAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailMessages?: EmailMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
    connectedCalendars?: ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutConnectedAccountNestedInput
    whatsappSession?: WhatsAppSessionUncheckedUpdateOneWithoutConnectedAccountNestedInput
    communicationConversations?: CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountNestedInput
    communicationMessages?: CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountNestedInput
  }

  export type ConnectedAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutEmailMessagesNestedInput
  }

  export type EmailMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectedCalendarUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutConnectedCalendarsNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutCalendarNestedInput
  }

  export type ConnectedCalendarUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type ConnectedCalendarUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCalendarEventsNestedInput
    calendar?: ConnectedCalendarUpdateOneRequiredWithoutCalendarEventsNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    calendarId?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    calendarId?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCommunicationConversationsNestedInput
    messages?: CommunicationMessageUpdateManyWithoutConversationNestedInput
    participants?: CommunicationParticipantUpdateManyWithoutConversationNestedInput
  }

  export type CommunicationConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: CommunicationMessageUncheckedUpdateManyWithoutConversationNestedInput
    participants?: CommunicationParticipantUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type CommunicationConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCommunicationMessagesNestedInput
    conversation?: CommunicationConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type CommunicationMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmailMessageCreateManyConnectedAccountInput = {
    id?: string
    userId: string
    gmailMessageId: string
    threadId?: string | null
    sender?: string | null
    recipients?: string | null
    subject?: string | null
    snippet?: string | null
    bodyText?: string | null
    receivedAt?: Date | string | null
    isRead?: boolean
    labels?: string | null
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectedCalendarCreateManyConnectedAccountInput = {
    id?: string
    userId: string
    googleCalendarId: string
    summary: string
    description?: string | null
    timeZone?: string | null
    isPrimary?: boolean
    isSelected?: boolean
    accessRole?: string | null
    syncToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventCreateManyConnectedAccountInput = {
    id?: string
    userId: string
    calendarId: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationConversationCreateManyConnectedAccountInput = {
    id?: string
    userId: string
    source: string
    remoteConversationId: string
    title?: string | null
    avatar?: string | null
    isGroup?: boolean
    lastMessageAt?: Date | string
    lastMessagePreview?: string | null
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationMessageCreateManyConnectedAccountInput = {
    id?: string
    userId: string
    conversationId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
  }

  export type EmailMessageUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailMessagesNestedInput
  }

  export type EmailMessageUncheckedUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailMessageUncheckedUpdateManyWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gmailMessageId?: StringFieldUpdateOperationsInput | string
    threadId?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: NullableStringFieldUpdateOperationsInput | string | null
    recipients?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    snippet?: NullableStringFieldUpdateOperationsInput | string | null
    bodyText?: NullableStringFieldUpdateOperationsInput | string | null
    receivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    labels?: NullableStringFieldUpdateOperationsInput | string | null
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectedCalendarUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConnectedCalendarsNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutCalendarNestedInput
  }

  export type ConnectedCalendarUncheckedUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type ConnectedCalendarUncheckedUpdateManyWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    googleCalendarId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isSelected?: BoolFieldUpdateOperationsInput | boolean
    accessRole?: NullableStringFieldUpdateOperationsInput | string | null
    syncToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCalendarEventsNestedInput
    calendar?: ConnectedCalendarUpdateOneRequiredWithoutCalendarEventsNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    calendarId?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    calendarId?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationConversationUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommunicationConversationsNestedInput
    messages?: CommunicationMessageUpdateManyWithoutConversationNestedInput
    participants?: CommunicationParticipantUpdateManyWithoutConversationNestedInput
  }

  export type CommunicationConversationUncheckedUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: CommunicationMessageUncheckedUpdateManyWithoutConversationNestedInput
    participants?: CommunicationParticipantUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type CommunicationConversationUncheckedUpdateManyWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteConversationId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    lastMessageAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessagePreview?: NullableStringFieldUpdateOperationsInput | string | null
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationMessageUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommunicationMessagesNestedInput
    conversation?: CommunicationConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type CommunicationMessageUncheckedUpdateWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationMessageUncheckedUpdateManyWithoutConnectedAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CalendarEventCreateManyCalendarInput = {
    id?: string
    userId: string
    connectedAccountId: string
    googleEventId: string
    title: string
    description?: string | null
    location?: string | null
    startTime: Date | string
    endTime: Date | string
    isAllDay?: boolean
    timeZone?: string | null
    status?: string | null
    htmlLink?: string | null
    organizer?: string | null
    attendees?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventUpdateWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCalendarEventsNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCalendarEventsNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    googleEventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    isAllDay?: BoolFieldUpdateOperationsInput | boolean
    timeZone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    htmlLink?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    attendees?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationMessageCreateManyConversationInput = {
    id?: string
    userId: string
    connectedAccountId: string
    source: string
    remoteMessageId: string
    senderId: string
    senderName?: string | null
    text?: string | null
    messageType?: string
    isFromMe?: boolean
    isRead?: boolean
    sentAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiCategory?: $Enums.AICategory | null
    aiPriority?: $Enums.AIPriority | null
    aiActionable?: boolean | null
    aiSummary?: string | null
    aiReason?: string | null
    aiProcessedAt?: Date | string | null
  }

  export type CommunicationParticipantCreateManyConversationInput = {
    id?: string
    remoteParticipantId: string
    phone?: string | null
    displayName?: string | null
    avatar?: string | null
    role?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunicationMessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommunicationMessagesNestedInput
    connectedAccount?: ConnectedAccountUpdateOneRequiredWithoutCommunicationMessagesNestedInput
  }

  export type CommunicationMessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationMessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    connectedAccountId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    remoteMessageId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    messageType?: StringFieldUpdateOperationsInput | string
    isFromMe?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiCategory?: NullableEnumAICategoryFieldUpdateOperationsInput | $Enums.AICategory | null
    aiPriority?: NullableEnumAIPriorityFieldUpdateOperationsInput | $Enums.AIPriority | null
    aiActionable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiReason?: NullableStringFieldUpdateOperationsInput | string | null
    aiProcessedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunicationParticipantUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteParticipantId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationParticipantUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteParticipantId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunicationParticipantUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    remoteParticipantId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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