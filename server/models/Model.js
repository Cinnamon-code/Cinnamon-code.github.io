"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const config_1 = require("../config");
class Model {
    constructor(collectionName) {
        mongodb_1.MongoClient.connect(config_1.DATABASE.url, (err, db) => {
            if (err)
                throw err;
            this.db = db === null || db === void 0 ? void 0 : db.db(config_1.DATABASE.database).collection(collectionName);
        });
    }
    insert(contents) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(contents)
            const count = yield ((_a = this.db) === null || _a === void 0 ? void 0 : _a.insertMany(contents).then(r => r.insertedCount));
            return !!count;
        });
    }
    find(condition = {}, projection = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.db) === null || _a === void 0 ? void 0 : _a.find(condition, { projection }).toArray());
        });
    }
    update(condition = {}, updates = { $set: {} }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const count = yield ((_a = this.db) === null || _a === void 0 ? void 0 : _a.updateMany(condition, updates).then(r => r.modifiedCount));
            return !!count;
        });
    }
}
exports.default = Model;
