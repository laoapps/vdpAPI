"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nDate = exports.Service = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var date_and_time_1 = __importDefault(require("date-and-time"));
var uuid = __importStar(require("uuid"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Service = /** @class */ (function () {
    function Service() {
    }
    //===============base64 to img====================
    Service.baseToimg = function (base, id) {
        var imgSur = base.split("/")[1].split(";")[0];
        var base64Data = base.split("base64,")[1];
        var paths = path_1.default.join(__dirname, "../img/");
        // const name =Math.random()+"."+imgSur;
        var name = id + "." + imgSur;
        // fs.writeFile(paths+name,base64Data,'base64',function(err: any){
        //   console.log(err);
        // });
        fs_1.default.writeFile(paths + name, base64Data, 'base64', function (err) {
            console.log(err);
        });
        return name;
    };
    Service.respon = function (data, message, status) {
        return { status: status, message: message, data: data };
    };
    Service.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    Service.copyObject = function (a, b) {
        for (var key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                b[key] = a[key];
            }
        }
    };
    Service.createToken = function (data) {
        try {
            return jwt.sign({
                data: data,
            }, Keys.jwtKey, { expiresIn: '10000000000H' });
        }
        catch (error) {
            console.log(error);
            return '';
        }
    };
    Service.validateToken = function (k) {
        try {
            var data = jwt.verify(k, Keys.jwtKey);
            console.log(data);
            var token = Service.createToken(data);
            if (token)
                return token;
            else
                return '';
        }
        catch (error) {
            console.log(error);
            return '';
        }
    };
    Service.genUUID = function () {
        return uuid.v1();
    };
    Service.nDate = function () {
        var dd = new Date();
        return date_and_time_1.default.format(dd, 'YYYY-MM-DD HH:mm:ss');
    };
    return Service;
}());
exports.Service = Service;
exports.nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Vientiane'
});
var Keys;
(function (Keys) {
    Keys["jwtKey"] = "Dx4YsbptOGuHmL94qdC2YAPqsUFpzJkc";
    Keys["superadminkey"] = "9F58A83B7628211D6E739976A3E3A";
})(Keys || (Keys = {}));
