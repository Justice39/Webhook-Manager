"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFromToken = exports.convertFromURL = exports.Manager = exports.useragent = exports.webhook_regex = exports.base_url = void 0;
const axios_1 = __importDefault(require("axios"));
exports.base_url = "https://discord.com/api/webhooks/";
exports.webhook_regex = /discord\.com\/api\/webhooks\/([^\/]+)\/([^\/]+)/;
exports.useragent = "WebhookManager";
class Manager {
    constructor(token, ID, settings) {
        this.webhook_token = token;
        this.webhook_ID = ID;
        this.webhook_settings = Object.assign({
            tts: false,
            useragent: exports.useragent,
            avatar_url: null,
            username: null
        }, settings);
    }
    execute(options) {
        if (options.embed) {
            if (!options.embeds)
                options.embeds = [];
            options.embeds.push(options.embed);
        }
        return (0, axios_1.default)({
            url: this.url,
            method: "POST",
            headers: {
                "User-Agent": this.useragent
            },
            data: {
                ...options, ...this.webhook_settings
            }
        });
    }
    delete() {
        return axios_1.default.delete(this.url);
    }
    get useragent() {
        return this.webhook_settings.useragent;
    }
    get url() {
        return exports.base_url + this.webhook_ID + "/" + this.webhook_token;
    }
    get token() {
        return this.webhook_token;
    }
    get ID() {
        return this.webhook_ID;
    }
    get settings() {
        return this.webhook_settings;
    }
}
exports.Manager = Manager;
function convertFromURL(url) {
    if (!exports.webhook_regex.test(url))
        return Error("Invalid webhook url.");
    const arr = url.match(exports.webhook_regex) || [];
    return arr.length < 2 ? Error("Invalid webhook url.") : {
        ID: arr[1],
        token: arr[2]
    };
}
exports.convertFromURL = convertFromURL;
function convertFromToken(token, ID) {
    return token && ID ? exports.base_url + token + "/" + ID : Error("Invalid token or ID");
}
exports.convertFromToken = convertFromToken;
