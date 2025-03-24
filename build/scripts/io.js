"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = exports.DataClass = void 0;
exports.dataClass = dataClass;
var DataClass = /** @class */ (function () {
    function DataClass(data) {
        Object.assign(this, data);
    }
    return DataClass;
}());
exports.DataClass = DataClass;
function dataClass() {
    return DataClass;
}
function checkBounds(type, value, min, max) {
    if (value < min) {
        Log.warn("Integer underflow when serializing ".concat(type, ": value ").concat(value, " was less than ").concat(min));
        return min;
    }
    if (value >= max) {
        Log.warn("Integer overflow when serializing ".concat(type, ": value ").concat(value, " was greater than ").concat(max));
        return max;
    }
    return value;
}
var Serializer = /** @class */ (function () {
    function Serializer(schema) {
        this.schema = schema;
    }
    Serializer.prototype.write = function (object) {
        var output = new ByteArrayOutputStream();
        Serializer.writeNode(this.schema, object, new DataOutputStream(output));
        return output.toByteArray();
    };
    Serializer.prototype.read = function (input) {
        return Serializer.readNode(this.schema, new DataInputStream(new ByteArrayInputStream(input)));
    };
    Serializer.writeNode = function (schema, value, output) {
        var e_1, _a, e_2, _b;
        var checkNumbers = false;
        switch (schema[0]) {
            case 'string':
                output.writeUTF(value);
                break;
            case 'number':
                if (checkNumbers) {
                    switch (schema[1]) {
                        case 'u8':
                            output.writeByte(checkBounds(schema[1], value, 0, Math.pow(2, 8)));
                            break;
                        case 'u16':
                            output.writeShort(checkBounds(schema[1], value, 0, Math.pow(2, 16)));
                            break;
                        case 'u32':
                            output.writeInt(checkBounds(schema[1], value, 0, Math.pow(2, 32)) & 0xFFFFFFFF);
                            break;
                        case 'i8':
                            output.writeByte(checkBounds(schema[1], value, -(Math.pow(2, 7)), (Math.pow(2, 7))));
                            break;
                        case 'i16':
                            output.writeShort(checkBounds(schema[1], value, -(Math.pow(2, 15)), (Math.pow(2, 15))));
                            break;
                        case 'i32':
                            output.writeInt(checkBounds(schema[1], value, -(Math.pow(2, 31)), (Math.pow(2, 31))));
                            break;
                        case 'i64':
                            output.writeLong(checkBounds(schema[1], value, -(Math.pow(2, 63)), (Math.pow(2, 63))));
                            break;
                        case 'f32':
                            output.writeFloat(isNaN(value) || !isFinite(value) ? (Log.warn('Attempted to write a NaN floating-point value, defaulting to 0'), 0) : value);
                            break;
                        case 'f64':
                            output.writeDouble(isNaN(value) || !isFinite(value) ? (Log.warn('Attempted to write a NaN floating-point value, defaulting to 0'), 0) : value);
                            break;
                    }
                }
                else {
                    switch (schema[1]) {
                        case 'u8':
                            output.writeByte(value);
                            break;
                        case 'u16':
                            output.writeShort(value);
                            break;
                        case 'u32':
                            output.writeInt(value & 0xFFFFFFFF);
                            break; //If the value is greater than 0x7FFFFFFF, make it negative so Java writes it correctly
                        case 'i8':
                            output.writeByte(value);
                            break;
                        case 'i16':
                            output.writeShort(value);
                            break;
                        case 'i32':
                            output.writeInt(value);
                            break;
                        case 'i64':
                            output.writeLong(value);
                            break;
                        case 'f32':
                            output.writeFloat(value);
                            break;
                        case 'f64':
                            output.writeDouble(value);
                            break;
                    }
                }
                break;
            case 'boolean':
                output.writeBoolean(value);
                break;
            case 'team':
                output.writeByte(value.id);
                break;
            case 'object':
                try {
                    for (var _c = __values(schema[1]), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var _e = __read(_d.value, 2), key = _e[0], childSchema = _e[1];
                        //correspondence
                        this.writeNode(childSchema, value[key], output);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                break;
            case 'class':
                try {
                    for (var _f = __values(schema[2]), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var _h = __read(_g.value, 2), key = _h[0], childSchema = _h[1];
                        //correspondence
                        this.writeNode(childSchema, value[key], output);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                break;
            case 'array':
                this.writeNode(["number", schema[1]], value.length, output);
                for (var i = 0; i < value.length; i++) {
                    this.writeNode(schema[2], value[i], output);
                }
                break;
        }
    };
    Serializer.readNode = function (schema, input) {
        var e_3, _a, e_4, _b;
        switch (schema[0]) {
            case 'string':
                return input.readUTF();
            case 'number':
                switch (schema[1]) {
                    case 'u8': return input.readUnsignedByte();
                    case 'u16': return input.readUnsignedShort();
                    case 'u32':
                        var value = input.readInt(); //Java does not support unsigned ints
                        return value < 0 ? value + Math.pow(2, 32) : value;
                    case 'i8': return input.readByte();
                    case 'i16': return input.readShort();
                    case 'i32': return input.readInt();
                    case 'i64': return input.readLong();
                    case 'f32': return input.readFloat();
                    case 'f64': return input.readDouble();
                }
            case 'boolean':
                return input.readBoolean();
            case 'team':
                return Team.all[input.readByte()];
            case 'object':
                var output = {};
                try {
                    for (var _c = __values(schema[1]), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var _e = __read(_d.value, 2), key = _e[0], childSchema = _e[1];
                        output[key] = this.readNode(childSchema, input);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return output;
            case 'class':
                var classData = {};
                try {
                    for (var _f = __values(schema[2]), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var _h = __read(_g.value, 2), key = _h[0], childSchema = _h[1];
                        classData[key] = this.readNode(childSchema, input);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return new schema[1](classData);
            case 'array':
                var length = this.readNode(["number", schema[1]], input);
                var array = new Array(length);
                for (var i = 0; i < length; i++) {
                    array[i] = this.readNode(schema[2], input);
                }
                return array;
        }
    };
    return Serializer;
}());
exports.Serializer = Serializer;
