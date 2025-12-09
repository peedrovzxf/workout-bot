import { Logger, pino } from "pino";
import { Config } from "./config/infrastructure/config";
import { Bot } from "./discord/presentation/bot";

const config: Config = new Config();
const logger: Logger = pino();
const bot: Bot = new Bot(config, logger);

async function bootstrap() {
    await bot.login();
}

process.on("SIGINT", async () => {
    process.exit(0);
});

bootstrap();