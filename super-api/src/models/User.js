"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserInput = exports.User = void 0;
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var Project_1 = require("./Project");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, type_graphql_1.Field)(function () { return type_graphql_1.ID; }),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, type_graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "email");
    __decorate([
        (0, type_graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "password");
    __decorate([
        (0, type_graphql_1.Field)(function () { return [Project_1.Project]; }),
        (0, typeorm_1.OneToMany)(function () { return Project_1.Project; }, function (project) { return project.createBy; })
    ], User.prototype, "projects");
    User = __decorate([
        (0, type_graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
var UserInput = /** @class */ (function () {
    function UserInput() {
    }
    __decorate([
        (0, type_graphql_1.Field)()
    ], UserInput.prototype, "email");
    __decorate([
        (0, type_graphql_1.Field)()
    ], UserInput.prototype, "password");
    UserInput = __decorate([
        (0, type_graphql_1.InputType)()
    ], UserInput);
    return UserInput;
}());
exports.UserInput = UserInput;
