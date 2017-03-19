var primatives = {

  createNode: function(name, fun) {
    var node = b3.Class(b3.Action);
    node.prototype.name = name;
    node.prototype.tick = fun;
    return node;
  },

  moveTo: function(tick) {
    console.log("moveTo");
    var creep = tick.target;
    var path = creep.memory.path
      //var final_pos = path[path.length - 2];
      //  console.log("final pos (" + final_pos.x + "," + final_pos.y + ")");

    /*if (creep.pos.x == final_pos.x && creep.pos.y == final_pos.y) {
      creep.memory.hasPath = false;
      creep.say("Finished Move");
      return b3.SUCCESS;
    }*else */
    if (creep.memory.hasPath) {
      creep.moveByPath(path);
      //console.log("Moving " + path.length);
      return b3.RUNNING;
    } else {
      //console.log("Normal path");
      creep.moveTo(creep.memory.target);
      return b3.RUNNING;
    }
  },

  atTarget: function(tick) {


    console.log("atTarget");
    var creep = tick.target;
    var path = creep.memory.path
    var final_pos = path[path.length - 2];



    if (creep.pos.x == final_pos.x && creep.pos.y == final_pos.y) {
      creep.memory.hasPath = false;
      creep.say("Finished Move");
      return b3.SUCCESS;
    } else {
      return b3.FAILURE;
    }

  },

  echo: function(tick) {

    console.log("Two");
    tick.target.say("Hi");
    return b3.SUCCESS;


  },

  hasPath: function(tick) {
    console.log("hasPath");
    var creep = tick.target;
    if (creep.memory.hasPath) {
      //creep.say("Has Path");
      return b3.SUCCESS;
    } else {
      //creep.say("No Path");
      return b3.FAILURE;
    }

  },

  makePath: function(tick) {
    console.log("makePath");
    var creep = tick.target;
    var path = creep.pos.findPathTo(creep.memory.target);
    creep.memory.path = path;
    creep.memory.hasPath = true;
    return b3.SUCCESS;

  }

    spawnTargetRole: function(tick) {
    console.log("spawnTargetRole");
    var target = tick.target;
    if (target.targets == 'worker') {
      var newName = target.createCreep([WORK, CARRY, MOVE], undefined, {
        role: 'worker'
      });
    } else if (target.targets == 'builder') {
      var newName = target.createCreep([WORK, CARRY, MOVE], undefined, {
        role: 'builder'
      });
    } else if (target.targets == 'upgrader') {
      var newName = target.createCreep([WORK, CARRY, MOVE], undefined, {
        role: 'upgrader'
      });
    }

    return b3.SUCCESS;

  }

    canBuildTarget: function(tick) {
    console.log("canBuildTarget");
    var target = tick.target;
    var cost = 200;
    if (target.room.energyAvailable > cost)
      return b3.FAILURE;
    return b3.SUCCESS;

  }
}


module.exports = primatives;
