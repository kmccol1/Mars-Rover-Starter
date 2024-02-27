const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let testRover = new Rover();
    expect(testRover.mode).toEqual('NORMAL');
    expect(testRover.generatorWatts).toBe(110);
  });

   it("response returned by receiveMessage contains the name of the message", function() {
     let testRover = new Rover();
     expect(testRover.receiveMessage(new Message('testName', [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]))).toMatchObject({message:'testName',results:[new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')] });
   });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let testRover = new Rover();
    expect(testRover.receiveMessage(new Message('testName', [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]))).toMatchObject({message:'testName',results:[new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')] });
  });

  it("responds correctly to the status check command", function() {
    let testRover = new Rover();
    expect(testRover.receiveMessage(new Message('testName', [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK'), {mode:'LOW_POWER', generatorWatts:110, position: 98382}]))).toMatchObject({message:'testName',results:[new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK'), {mode:'LOW_POWER', generatorWatts:110, position: 98382}] });
  });

  it("responds correctly to the mode change command", function() {
    let testRover = new Rover();
    expect(testRover.receiveMessage(new Message('testName', [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK'), {mode:'LOW_POWER', generatorWatts:110, position: 98382}]))).toMatchObject({message:'testName',results:[new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK'), {mode:'LOW_POWER', generatorWatts:110, position: 98382}] });
  });

});
