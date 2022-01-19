"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsersResolver = void 0;
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var User_1 = require("../models/User");
var argon2 = require("argon2");
var jwt = require("jsonwebtoken");
var UsersResolver = /** @class */ (function () {
    function UsersResolver() {
        this.userRepo = (0, typeorm_1.getRepository)(User_1.User);
    }
    UsersResolver.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepo.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersResolver.prototype.getProfile = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = context.user;
                        return [4 /*yield*/, this.userRepo.findOne(user.id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersResolver.prototype.signup = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.userRepo).create;
                        _c = {
                            email: email
                        };
                        return [4 /*yield*/, argon2.hash(password)];
                    case 1:
                        newUser = _b.apply(_a, [(_c.password = _d.sent(),
                                _c)]);
                        return [4 /*yield*/, newUser.save()];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, newUser];
                }
            });
        });
    };
    UsersResolver.prototype.signin = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepo.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 3];
                        return [4 /*yield*/, argon2.verify(user.password, password)];
                    case 2:
                        if (_a.sent()) {
                            token = jwt.sign({ userId: user.id }, 'supersecret');
                            return [2 /*return*/, token];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [3 /*break*/, 4];
                    case 3: return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, type_graphql_1.Query)(function () { return [User_1.User]; })
    ], UsersResolver.prototype, "getUsers");
    __decorate([
        (0, type_graphql_1.Authorized)(),
        (0, type_graphql_1.Query)(function () { return User_1.User; }),
        __param(0, (0, type_graphql_1.Ctx)())
    ], UsersResolver.prototype, "getProfile");
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return User_1.User; }),
        __param(0, (0, type_graphql_1.Arg)('email')),
        __param(1, (0, type_graphql_1.Arg)('password'))
    ], UsersResolver.prototype, "signup");
    __decorate([
        (0, type_graphql_1.Mutation)(function () { return String; }, { nullable: true }),
        __param(0, (0, type_graphql_1.Arg)('email')),
        __param(1, (0, type_graphql_1.Arg)('password'))
    ], UsersResolver.prototype, "signin");
    UsersResolver = __decorate([
        (0, type_graphql_1.Resolver)(User_1.User)
    ], UsersResolver);
    return UsersResolver;
}());
exports.UsersResolver = UsersResolver;