"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var api_1 = __importDefault(require("./api/api"));
var path_1 = __importDefault(require("path"));
exports.app = api_1.default;
exports.app.use(express_1.default.json({ limit: '500mb' }));
exports.app.use(express_1.default.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }));
exports.app.use(cors_1.default());
exports.app.use(cookie_parser_1.default());
exports.app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'img')));
// <==  my API ==>
// app.use('/api', api)
// app.use((req, res) => {
//     const error = new Error('API not found!');
//     console.log(error.message)
//     res.status(404).json({
//         message: error.message,
//         status: 0
//     });
// });
exports.app.get('/api/v1', function (req, res) {
    //res.send(PrintSucceeded({}, 'api version 1 is working!'));
    var get = exports.app._router.stack.filter(function (r) { return r.route && r.route.methods.get; }).map(function (r) { return r.route.path; });
    var post = exports.app._router.stack.filter(function (r) { return r.route && r.route.methods.post; }).map(function (r) { return r.route.path; });
    res.send({ get: get, post: post });
});
var PORT = 23000;
exports.app.listen(PORT, '0.0.0.0', function () {
    console.log('Server is running on PORT:' + PORT);
});
