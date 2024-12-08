
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
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
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
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
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

exports.Prisma.InitStatusScalarFieldEnum = {
  id: 'id',
  isInit: 'isInit',
  initData: 'initData'
};

exports.Prisma.SuperAdminScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  passwordHash: 'passwordHash',
  salt: 'salt'
};

exports.Prisma.MineScalarFieldEnum = {
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

exports.Prisma.OwnerScalarFieldEnum = {
  ownerId: 'ownerId',
  ownerName: 'ownerName',
  contactName: 'contactName',
  contactEmail: 'contactEmail',
  contactPhone: 'contactPhone'
};

exports.Prisma.PositionScalarFieldEnum = {
  positionId: 'positionId',
  positionName: 'positionName',
  description: 'description',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  responsibilities: 'responsibilities'
};

exports.Prisma.RoleScalarFieldEnum = {
  roleId: 'roleId',
  roleName: 'roleName',
  description: 'description',
  permissions: 'permissions',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PermissionScalarFieldEnum = {
  permissionId: 'permissionId',
  name: 'name',
  category: 'category',
  description: 'description',
  isActive: 'isActive'
};

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.SupervisorScalarFieldEnum = {
  id: 'id',
  sectionId: 'sectionId',
  userId: 'userId'
};

exports.Prisma.SectionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  sectionType: 'sectionType',
  area: 'area'
};

exports.Prisma.ShiftScalarFieldEnum = {
  shiftId: 'shiftId',
  name: 'name',
  startTime: 'startTime',
  endTime: 'endTime',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PlanScalarFieldEnum = {
  planId: 'planId',
  planName: 'planName',
  planDescription: 'planDescription',
  form: 'form',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  notes: 'notes'
};

exports.Prisma.PlanAssetsScalarFieldEnum = {
  id: 'id',
  planId: 'planId',
  assetId: 'assetId',
  assetName: 'assetName'
};

exports.Prisma.PlanfilesScalarFieldEnum = {
  fileId: 'fileId',
  fileName: 'fileName',
  filePath: 'filePath',
  type: 'type',
  planId: 'planId'
};

exports.Prisma.ActivePlansScalarFieldEnum = {
  id: 'id',
  planName: 'planName',
  planId: 'planId',
  sectionId: 'sectionId'
};

exports.Prisma.SectionTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  color: 'color'
};

exports.Prisma.CoordinateScalarFieldEnum = {
  id: 'id',
  latitude: 'latitude',
  longitude: 'longitude',
  sectionId: 'sectionId'
};

exports.Prisma.AssetTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description'
};

exports.Prisma.AssetScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  assetType: 'assetType',
  assetSection: 'assetSection',
  latitude: 'latitude',
  longitude: 'longitude'
};

exports.Prisma.RiskMatrixScalarFieldEnum = {
  id: 'id',
  name: 'name',
  col: 'col',
  row: 'row'
};

exports.Prisma.RiskValuesScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  scale: 'scale',
  matrixId: 'matrixId'
};

exports.Prisma.RiskAssesmentScalarFieldEnum = {
  id: 'id',
  activity: 'activity',
  sectionId: 'sectionId',
  hazard: 'hazard',
  Mechanism: 'Mechanism',
  exposedGroup: 'exposedGroup',
  description: 'description',
  consequence: 'consequence',
  exposure: 'exposure',
  probability: 'probability',
  riskValue: 'riskValue',
  riskContolPlan: 'riskContolPlan'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.PlanStatus = exports.$Enums.PlanStatus = {
  Draft: 'Draft',
  Unpublished: 'Unpublished',
  Published: 'Published'
};

exports.RiskProps = exports.$Enums.RiskProps = {
  Consequence: 'Consequence',
  Probability: 'Probability',
  Exposure: 'Exposure'
};

exports.Prisma.ModelName = {
  InitStatus: 'InitStatus',
  SuperAdmin: 'SuperAdmin',
  Mine: 'Mine',
  Owner: 'Owner',
  Position: 'Position',
  Role: 'Role',
  Permission: 'Permission',
  User: 'User',
  Supervisor: 'Supervisor',
  Section: 'Section',
  Shift: 'Shift',
  Plan: 'Plan',
  PlanAssets: 'PlanAssets',
  Planfiles: 'Planfiles',
  ActivePlans: 'ActivePlans',
  SectionType: 'SectionType',
  Coordinate: 'Coordinate',
  AssetType: 'AssetType',
  Asset: 'Asset',
  RiskMatrix: 'RiskMatrix',
  RiskValues: 'RiskValues',
  RiskAssesment: 'RiskAssesment'
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
