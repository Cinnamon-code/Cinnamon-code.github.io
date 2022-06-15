"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, './public')));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api', routes_1.default);
// 若无匹配业务路由，则匹配 404 路由，代表访问路径不存在
app.use(notFound);
/** 若前面的路由抛错，则封装为错误响应返回
 * 错误响应格式为
 * {
 *   error: message
 * }
 */
app.use(errorHandler);
function notFound(req, res) {
    res.status(404);
    res.send({
        error: 'not found',
    });
}
function errorHandler(err, req, res, next) {
    // 抛出的错误可以附带 status 字段，代表 http 状态码
    // 若没有提供，则默认状态码为 500，代表服务器内部错误
    res.status(err.status || 500);
    res.send({ error: err.message });
}
app.listen(8000, () => {
    console.log('started');
});
