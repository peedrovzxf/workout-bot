import { Client, GatewayIntentBits } from "discord.js";
import { Config } from "../../config/infrastructure/config";
import { ConfigKey } from "../../config/infrastructure/config-key";
import { Logger } from "pino";

export class Bot {
    private readonly client: Client;

    constructor(
        private readonly config: Config,
        private readonly logger: Logger
    ) {
        this.client = new Client({
            intents: [
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent
            ]
        });
    }

    async login() {
        await this.client.login(this.config.get(ConfigKey.TOKEN));
        this.logger.info("Workouts bot enabled.");
    }
}