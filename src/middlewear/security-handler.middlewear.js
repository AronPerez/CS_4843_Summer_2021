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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '/./../../.env' });
const HttpException = require('./helpers/HttpException.helpers');
const auth = () => {
    function apiKeyHeader(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.headers['api_key']);
            // Checks if our secret key is used
            if (req.headers['api_key'] === process.env.API_KEY)
                return next();
            // Else we error out with 401
            //res.send.status(401)
            return next(new HttpException(401, "API key is missing or invalid"));
        });
    }
    return apiKeyHeader;
};
module.exports = auth;
