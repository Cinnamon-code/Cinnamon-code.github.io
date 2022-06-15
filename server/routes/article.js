"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articleController_1 = __importDefault(require("../controllers/articleController"));
const router = express_1.default.Router();
router.post('/submit', articleController_1.default.submit);
router.get('/get_all', articleController_1.default.getAll);
exports.default = router;
