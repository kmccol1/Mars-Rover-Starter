class Rover {
// Write code here!
constructor(mode = 'NORMAL', generatorWatts = 110, position)
{
    this.mode = mode;
    this.position=position;
    // if (!mode) {
    //   throw Error("Rover mode required.");
    // }
    this.generatorWatts = generatorWatts;
}

    receiveMessage(message)
    {
        // return `message: ${message.name} + results: [${message.commands}]`;
        // let results = message.commands;
        // results.push({mode:this.mode, generatorWatts:this.generatorWatts, position:this.position})
        let result;
        if (message.commands[0].commandType == 'STATUS_CHECK')
        {
            result = {message:message.name, results:message.commands};
        }
        else
        {
            result = {message:message.name, results:message.commands};
        }

        return result;
    }
}

module.exports = Rover;
