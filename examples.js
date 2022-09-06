const { Manager , convertFromToken, convertFromURL } = require("./index");

const ID = "SuperSecretDiscordWebhookID"
const token = "SuperSecretDiscordWebhookToken";

const manager = new Manager(token,ID, {
    avatar_url: "https://cdn.discordapp.com/avatars/956624616183447582/3cdc5937b07f31659a4a11379f71f36f.png",
    username: "WebhookManager",
    tts: true,
    useragent: `WebhookManager`
})

const embed = {
    title: "Test embed from WebhookManager!",
    description: "Test **Embed** description",
    color: 13168638,
    fields: [{
            name: "Field 1 Name", value: "Field 1 value", inline: true
    }],
    footer: { text: "Hello world!", icon_url: "https://cdn.discordapp.com/avatars/965249387540414504/a20f41fd781e0d0b43c1ddaecf834a14.webp?size=4096" },
    author: { name: "WebhookManager", icon_url: "https://cdn.discordapp.com/avatars/956624616183447582/3cdc5937b07f31659a4a11379f71f36f.png?size=4096" },
}
//Discord API Docs. for embeds: https://discord.com/developers/docs/resources/channel#embed-object

manager.execute({
    content: "Example content from WebhookManager!",
    embeds: [embed]
    //You can use “embed” instead of “embeds” for one embed.
})

const useragent = manager.useragent;
const webhook_url = manager.url;
const webhook_token = manager.token;
const webhook_ID = manager.ID;
const settings = manager.settings;
const fromToken = convertFromToken("SuperSecretWebhookToken", "1016681506346897488");
const fromURL = convertFromURL("https://discord.com/api/webhooks/1016681506346897488/SuperSecretWebhookToken");

manager.delete();
