import * as fs from 'fs';

function sleep(ms = 1000) {
    return new Promise(r => setTimeout(r, ms))
}

function random(min = 0, max = 100) {
    let rand = Math.random();
    return Math.floor(rand * Number(max) - Number(min)) + Number(min);
};

/**
 * @function readdir Get the all of file names from directory
 * @param dir The path of directory
 */

function readdir(dir:string) {
    return fs.readdirSync(dir)
};

async function read(dir:string) { 
    fs.readFile(dir, (err, data) => {
        if (err) {throw(err)} 
        else {
            if (_isJsonString(data)) {
                return JSON.parse(data.toString());
            } else {
                return data.toString();
            }
        }
    })
}

function write(dir:string, data:any) {
    let writeData: string;
    if (typeof data == "object") {
        writeData = JSON.stringify(data);
    } else {
        writeData = data;
    }
    fs.writeFile(dir, writeData, function (err) {
        if (err) {throw(err)}
        else {
            return('<Write operation complete>')
        }
    })
}

function exist(dir:string){ //官方不推薦使用
    fs.exists(dir, function(isExist) {
        return isExist;
    });
}

function _isJsonString(str:any) {
    try {
        if (typeof JSON.parse(str) == "object") {
            return true;
        }
    } catch(err) {throw err}
    return false;
}

const output = {
    "sleep": sleep,
    "random": random,
    "write": write,
    "read": read,
    "readdir":readdir
}

//module.exports = output;
export default output;

