
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.0
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.0",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  passwordHash: 'passwordHash',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ConnectedAccountScalarFieldEnum = {
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

exports.Prisma.EmailMessageScalarFieldEnum = {
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

exports.Prisma.ConnectedCalendarScalarFieldEnum = {
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

exports.Prisma.CalendarEventScalarFieldEnum = {
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

exports.Prisma.WhatsAppSessionScalarFieldEnum = {
  id: 'id',
  connectedAccountId: 'connectedAccountId',
  creds: 'creds',
  keys: 'keys',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CommunicationConversationScalarFieldEnum = {
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

exports.Prisma.CommunicationParticipantScalarFieldEnum = {
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

exports.Prisma.CommunicationMessageScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.AICategory = exports.$Enums.AICategory = {
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

exports.AIPriority = exports.$Enums.AIPriority = {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
