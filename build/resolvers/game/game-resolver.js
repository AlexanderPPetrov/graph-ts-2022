"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameResolver = void 0;
const type_graphql_1 = require("type-graphql");
const game_entity_1 = require("../../entities/game-entity");
const game_arguments_1 = require("./game-arguments");
let GameResolver = class GameResolver {
    async games() {
        return await game_entity_1.GameModel.find({});
    }
    async game(_id) {
        return await game_entity_1.GameModel.findById(_id);
    }
    async createGame(data) {
        const newUser = new game_entity_1.GameModel(data);
        await newUser.save();
        return newUser;
    }
    // @Authorized([UserRoles.ADMIN, UserRoles.SUPER_ADMIN])
    async deleteGame(_id) {
        return await game_entity_1.GameModel.findByIdAndRemove(_id);
    }
    async editGame(_id, data) {
        return await game_entity_1.GameModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    type_graphql_1.Query(returns => [game_entity_1.Game]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "games", null);
__decorate([
    type_graphql_1.Query(returns => game_entity_1.Game),
    __param(0, type_graphql_1.Arg("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "game", null);
__decorate([
    type_graphql_1.Mutation(returns => game_entity_1.Game),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [game_arguments_1.BaseGameInput]),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "createGame", null);
__decorate([
    type_graphql_1.Mutation(returns => game_entity_1.Game),
    __param(0, type_graphql_1.Arg("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "deleteGame", null);
__decorate([
    type_graphql_1.Mutation(returns => game_entity_1.Game),
    __param(0, type_graphql_1.Arg("_id")), __param(1, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, game_arguments_1.GameInput]),
    __metadata("design:returntype", Promise)
], GameResolver.prototype, "editGame", null);
GameResolver = __decorate([
    type_graphql_1.Resolver()
], GameResolver);
exports.GameResolver = GameResolver;
