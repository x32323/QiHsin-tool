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
const fs = require("fs");
function sleep(ms = 1000) {
    return new Promise(r => setTimeout(r, ms));
}
function random(min = 0, max = 100) {
    let rand = Math.random();
    return Math.floor(rand * Number(max) - Number(min)) + Number(min);
}
;
/**
 * @function readdir Get the all of file names from directory
 * @param dir The path of directory
 */
function readdir(dir) {
    return fs.readdirSync(dir);
}
;
function read(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        fs.readFile(dir, (err, data) => {
            if (err) {
                throw (err);
            }
            else {
                if (_isJsonString(data)) {
                    return JSON.parse(data.toString());
                }
                else {
                    return data.toString();
                }
            }
        });
    });
}
function write(dir, data) {
    let writeData;
    if (typeof data == "object") {
        writeData = JSON.stringify(data);
    }
    else {
        writeData = data;
    }
    fs.writeFile(dir, writeData, function (err) {
        if (err) {
            throw (err);
        }
        else {
            return ('<Write operation complete>');
        }
    });
}
function exist(dir) {
    fs.exists(dir, function (isExist) {
        return isExist;
    });
}
function _isJsonString(str) {
    try {
        if (typeof JSON.parse(str) == "object") {
            return true;
        }
    }
    catch (err) {
        throw err;
    }
    return false;
}
const output = {
    "sleep": sleep,
    "random": random,
    "write": write,
    "read": read,
    "readdir": readdir
};
module.exports = output;
exports.default = output;
