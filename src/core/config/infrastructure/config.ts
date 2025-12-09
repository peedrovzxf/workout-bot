import { configDotenv } from "dotenv";
import { ValueNotFound } from "./exception/value-not-found";

export class Config {
    constructor() {
        configDotenv();
    }

    get(key: string): string {
        if (!process.env[key]) {
            throw new ValueNotFound(key);
        }

        return process.env[key];
    }
}