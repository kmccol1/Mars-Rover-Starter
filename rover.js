class Rover {
// Write code here!
constructor(position)
{
    this.mode = 'NORMAL';
    this.position=position;
    // if (!mode) {
    //   throw Error("Rover mode required.");
    // }
    this.generatorWatts = 110;
}

    receiveMessage(message)
    {
        // return `message: ${message.name} + results: [${message.commands}]`;
        // let results = message.commands;
        // results.push({mode:this.mode, generatorWatts:this.generatorWatts, position:this.position})
        let result = {'message':message.name};
        // if (message.commands.commandType == 'STATUS_CHECK')
        // {
        //     result["results"] = message.commands;
        // }
        // if (message.commands[1].commandType == 'MODE_CHANGE')
        // {
        //     result["results"] = message.commands;
        // }
        if (message.commands != undefined )/*&& message.commands.length > 1)*/
        {
            result["results"] = [];
            // result["results"] = [];
            // result["results"].push({});
            // result["results"].push({});
            for(let i = 0; i < message.commands.length; i ++)
            {
                if((message.commands)[i].commandType == 'MOVE')
                {
                    if(this.mode == 'LOW_POWER')
                    {
                        result["results"].push({"completed":false});
                        //console.log("pushing false...");
                    }
                    else
                    {
                        this.position = (message.commands)[i].value;
                        result["results"].push({"completed":true, "position":this.position});
                        //console.log("pushing true...");
                    }
                }
                else if ((message.commands)[i].commandType == 'STATUS_CHECK')
                {
                    result["results"].push({"completed": true, "roverStatus": {"mode": this.mode, "generatorWatts": this.generatorWatts, "position": this.position}});
                    //result["results"].push({"completed":true});
                }
                else
                {
                    //MODE_CHANGE
                    this.mode = 'LOW_POWER';
                    result["results"].push({"completed":true});
                }
            }
        }

        return result;
    }
}

module.exports = Rover;
