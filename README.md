# Webhook Manager 

Manage your Discord webhooks in a simple and easy way.

## Installation ⬇️

Install [Axios](https://axios-http.com/docs/intro) and move [manager.js](https://github.com/Justice39/Webhook-Manager/blob/main/manager.js) to your project folder.

## Usage 🔁

``````
const { Manager , convertFromToken, convertFromURL } = require("./manager");

const manager = new Manager("SuperSecretDiscordWebhookToken","SuperSecretDiscordWebhookID", {
    avatar_url: "https://cdn.discordapp.com/avatars/956624616183447582/3cdc5937b07f31659a4a11379f71f36f.png",
    username: "WebhookManager",
    tts: true,
    useragent: `WebhookManager`
})
``````



Also take a look at [examples.js](https://github.com/Justice39/Webhook-Manager/blob/main/examples.js).
## Contributing 🔨


###### 1. Fork it!
###### Create your feature branch: `git checkout -b my-new-feature`
###### Commit your changes: `git commit -am 'Add some feature'`
###### Push to the branch: `git push origin my-new-feature`
###### Submit a pull request.


## Credits 🪪

Justice39, vixpr

## License 🗒️

Apache License 2.0
