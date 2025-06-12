const KickManager = require("./kick.js")
const kick = new KickManager()
const { version } = require('./package.json');

const getStreamer = async function(streamerName) {

    if (typeof streamerName !== "string") throw TypeError("Please provide a streamerName as String.")
    await kick.init()
    const streamer = KickManager.getStreamerValue(streamerName)
    const streamerData = await kick.getStreamer(streamer)

    return streamerData

}

const getStream = async function(streamerName) {

    if (typeof streamerName !== "string") throw TypeError("Please provide a streamerName as String.")
    await kick.init()
    const streamer = KickManager.getStreamerValue(streamerName)
    const streamerData = await kick.getStream(streamer)

    return streamerData

}

module.exports = {
    solveURL: KickManager.getStreamerValue,
    getStreamer,
    getStream,
    version: () => {
        return version;
    }
}