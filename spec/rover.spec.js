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
     expect(testRover.receiveMessage(new Message('testName'))).toEqual({message:'testName'});/*,results:[{commandType:'MODE_CHANGE', value:'LOW_POWER'}, {commandType:'STATUS_CHECK'}] }*/
   });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let testRover = new Rover();
    expect(testRover.receiveMessage(new Message('testName', [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]))).toMatchObject({message:'testName',results:[{completed: true},{completed: true} ] });
  });

  it("responds correctly to the status check command", function() {
    let testRover = new Rover();
    expect(testRover.receiveMessage(new Message('testName', [new Command('STATUS_CHECK')]))).toMatchObject({message:'testName',results:[{completed: true, roverStatus: {mode: testRover.mode, generatorWatts: testRover.generatorWatts, position: testRover.position}}] });
  });

  it("responds correctly to the mode change command", function() {
    let testRover = new Rover();
    expect(testRover.receiveMessage(new Message('testName', [new Command('MODE_CHANGE', 'LOW_POWER')]))).toMatchObject({message:'testName',results:[{completed: true} ] });
   });

   it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
     let testRover = new Rover();
     expect(testRover.receiveMessage(new Message('testName', [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE',50)]))).toMatchObject({message:'testName',results:[{completed: true},{completed: false}] }); //passes w/ completed set to true, must be false....
   });

   it("responds with the position for the move command", function() {
     let testRover = new Rover();
     expect(testRover.receiveMessage(new Message('testName', [new Command('MOVE',50)]))).toMatchObject({message:'testName',results:[{completed: true, 'position':testRover.position}] });
   });

});

/*
/Mars-Rover-Starter/spec> npm test

> Assignment 3: Mars Rover@2.0.0 test
> jest

 PASS  spec/rover.spec.js
 PASS  spec/command.spec.js
 PASS  spec/message.spec.js

Test Suites: 3 passed, 3 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        0.409 s, estimated 1 s
Ran all test suites.

*/
