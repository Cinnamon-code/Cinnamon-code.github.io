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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const articleService_1 = __importDefault(require("../services/articleService"));
class ArticleController {
    submit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            // body.tags = JSON.parse(body.tags)
            const result = yield articleService_1.default.submit([body]);
            if (result)
                res.send({
                    code: 200,
                    msg: 'success',
                });
            else
                res.send({
                    code: 500,
                    msg: 'failed',
                });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield articleService_1.default.getAll();
            res.send({
                code: 200,
                articles: results,
            });
        });
    }
}
exports.default = new ArticleController();
