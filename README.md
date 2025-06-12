# Kick Stream
- Kick allows broadcasters to share automatic broadcasts on the discord platform

# Getting a streamer on Kick

```js
const kickClient = require("kick-stream");
const streamer = await kickClient.getStreamer("slow3rxq") //Streamer Name

console.log(streamer) //{...} Streamer Data
```

# Getting a stream data on Kick

```js
const kickClient = require("kick-stream");
const stream = await kickClient.getStream("slow3rxq") //Streamer Name

console.log(stream) //{...} Stream Data
```

# Optional

You can use Kick URL Solver! Just use like this:

```js
const kickClient = require("kick-stream")

console.log(kickClient.solveURL("https://kick.com/slow3rxq")) // "slow3rxq"
```
