# Catbot
  One of my prototypes for catbot. As you can see this bot is not made well as (this is a prototype), but anyhow, I put this here since someone was curious how I made this. Why am I not putting my latest version of the bot? This is because the current version of the bot is using outdated dependencies and after I'm done updating the code, then I'll upload it here. I might not be very active since I still am a final year student, so yes it is indeed sad. Depending on how this goes, I might include sharding since people asked me how to work with sharding before (Fun Fact: At some point, if you bot grows big enough, you will have to shard.). But yeah, this is more or less a badly made bot because why not.

# Configuration
  To use this bot, you need a few things. First you need a [tenor API key](https://tenor.com/gifapi/documentation#quickstart-share) and [Discord app/bot token](https://discord.com/developers/docs/intro).   
  `.env` file:
  ```
  token = discord-api-key-here
  tenorkey = tenor-key-here
  ```   
  `config.json` file:
  ```
  {
    "prefix": "cat",
    "ownerID": "",
    "version": "1.0.0"
  }
  ```
  # Commands:
  Not a whole lot, as of now, there are just 2. Mainly `gif`, `cat`, `help`, `ping`, `usage`.
  
  # package config
  The stuff in the `package.json` file is probably outdated.
  # I'm sorry
  Yes I am aware most of you guys use `message` and that I, out of pure retardacy, chose to use `messageCreate`.
