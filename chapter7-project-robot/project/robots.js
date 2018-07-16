const {mailRoute, roadGraph} = require('./data');
const {randomPick} = require('./utils');

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

function lazyRobot({place, parcels}, route) {
  if (route.length == 0) {
    // Describe a route for every parcel
    let routes = parcels.map(parcel => {
      const pickUp = parcel.place != place
      const to = pickUp ? parcel.place : parcel.address;
      const route = findRoute(roadGraph, place, to);
      return {route, pickUp};
    })
    // Determine the preference for a route
    // Longer routes are worse;
    // Routes that involve a pickup get a bonus
    const bonus = 0.5;
    const score = ({route, pickUp}) => (pickUp ? 0.5 : 0) - route.length;
    route = routes.reduce((a, b) => (score(a) > score(b)) ? a : b).route;
  }
  return {
    direction: route[0],
    memory: route.slice(1)
  };
}

module.exports = {
  randomRobot,
  routeRobot,
  goalOrientedRobot,
  lazyRobot
}
