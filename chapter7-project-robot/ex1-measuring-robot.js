const VillageState = require('./project/Village');
const {roads, mailRoute, roadGraph} = require('./project/data');
const {routeRobot, goalOrientedRobot, randomRobot, lazyRobot} = require('./project/robots');

function countSteps(robot, memory, state) {
  for (let steps = 0;; steps++) {
    if (state.parcels.length == 0) return steps; // Complete!
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(...robots) {
  const modelLength = 100;
  let total1 = 0, total2 = 0;
  totals = new Array(robots.length);
  totals.fill(0);
  for (let run = 0; run < modelLength; run++) {
    let nParcels = Math.floor(Math.random() * 20 + 1);
    let state = VillageState.random(nParcels);
    robots.forEach((robot, i) => {
      totals[i] += countSteps(robot.robot, robot.memory, state);
    })
  }
  robots.forEach((robot, i) => {
    console.log(`${(totals[i] / modelLength).toFixed(2)} steps per task: ${robot.robot.name}`);
  })
}

if (!module.parent) {
  const robotsToTest = [routeRobot, goalOrientedRobot, randomRobot, lazyRobot];
  compareRobots(
    ...robotsToTest.map(robot => {
      return {robot, memory: []}
    })
  );
}
