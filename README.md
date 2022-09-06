# WebhookManager

Manage your discord webhooks

## Installation

Just install axios and put manager.js to your project file

## Usage

``````
const { Manager , convertFromToken, convertFromURL } = require("./manager");

const manager = new Manager("SuperSecretDiscordWebhookToken","SuperSecretDiscordWebhookID", {
    avatar_url: "https://cdn.discordapp.com/avatars/956624616183447582/3cdc5937b07f31659a4a11379f71f36f.png",
    username: "WebhookManager",
    tts: true,
    useragent: `WebhookManager`
})
``````



Also look examples.js
## Contributing

``````
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.
``````
## Credits

Justice39

## License

### Apache License 2.0
