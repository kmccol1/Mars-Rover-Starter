class Rover {
   // Write code here!
   constructor(mode = 'NORMAL', generatorWatts = 110) {
     this.mode = mode;
     // if (!mode) {
     //   throw Error("Rover mode required.");
     // }
     this.generatorWatts = generatorWatts;
   }

   receiveMessage(message)
   {
      // return `message: ${message.name} + results: [${message.commands}]`;

      return {message:message.name, results:message.commands};
   }
}

module.exports = Rover;
