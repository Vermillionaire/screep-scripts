var b3core = require('b3core');
var primatives = require('primatives');
var blackboard = require('blackboard');
var behaviors = require('behaviors');


var buildTrees = function() {
  console.log("Building Trees");

  Memory.behavior_trees = {};
  var move = new b3.BehaviorTree();
  var min_move = new b3.BehaviorTree();
  var try_spawn_target = new b3.BehaviorTree();
  var spawn = new b3.BehaviorTree();

  move.load(behaviors.move, {
    'MoveTo': primatives.createNode('MoveTo', primatives.moveTo),
    'Echo': primatives.createNode('Echo', primatives.echo)
  });
  Memory.behavior_trees.move = move;

  min_move.load(behaviors.min_move, {
    'MoveTo': primatives.createNode('MoveTo', primatives.moveTo),
    'HasPath': primatives.createNode('HasPath', primatives.hasPath),
    'MakePath': primatives.createNode('MakePath', primatives.makePath),
    'atTarget': primatives.createNode('atTarget', primatives.atTarget)
  });
  Memory.behavior_trees.min_move = min_move;

  try_spawn_target.load(behaviors.try_spawn_target, {
    'spawnTargetRole': primatives.createNode('spawnTargetRole',
      primatives.spawnTargetRole),
    'canBuildTarget': primatives.createNode('canBuildTarget', primatives.canBuildTarget),
    'creepTTLcheck': primatives.createNode('creepTTLcheck', primatives.moveTo),
    'targetAllSpawned': primatives.createNode('targetAllSpawned',
      primatives.moveTo),
  });
  //Memory.behavior_trees.blackboard = new b3.Blackboard();
  console.log("Done");

}


module.exports.loop = function() {
  //primatives.createMoveTo()

  //console.log(Memory['creeps']['Hailey'].hasPath);
  for (var i in Memory.creeps) {
    if (!Game.creeps[i]) {
      delete Memory.creeps[i];
    }
  }


  buildTrees();

  Memory.numWorkers = 5;
  Memory.numUpgraders = 6;
  Memory.numBuilders = 4;

  var creep_name = 'Andrew';
  var creep2 = Game.creeps[creep_name];


  console.log("instanciating behaviors");
  var targets = creep2.room.find(FIND_STRUCTURES);
  creep2.memory.behaviorState = {};
  creep2.memory.behaviorState.running = true;
  creep2.memory.target = targets[1];
  creep2.memory.behaviorState.behavior = "min_move";
  creep2.memory.behaviorState.blackboard = new b3.Blackboard();


  for (var name in Game.creeps) {
    var creep = Game.creeps[name];

    console.log("checking if " + name + " running");
    if (creep.memory.behaviorState != undefined && creep.memory.behaviorState
      .running) {
      console.log(Memory.behavior_trees);
      //blackboard.setTarget(creep.memory);
      var ret = Memory.behavior_trees[creep.memory.behaviorState.behavior].tick(
        creep, creep.memory.behaviorState.blackboard);

      console.log("return val " + ret);
      if (ret != 3) {
        console.log("Clearing behavior");

        creep.memory.behaviorState.running = false;
        delete creep.memory.blackboard;
      }
    } else {
      console.log("not running");
    }
  }

  console.log(Game.cpu.getUsed());



  //  console.log("tick output " + Memory.behaviors.min_move.tick(Game.creeps[
  //    blackboard));



  //console.log("Test");
  //console.log(b3.VERSION);

  /*
  buildCreep.run();
  var tower = Game.getObjectById('TOWER_ID');
  if (tower) {
  	var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
  			filter: (structure) => structure.hits < structure.hitsMax
  		});
  	if (closestDamagedStructure) {
  		tower.repair(closestDamagedStructure);
  	}

  	var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  	if (closestHostile) {
  		tower.attack(closestHostile);
  	}
  }

  for (var name in Game.creeps) {
  	var creep = Game.creeps[name];
  	if (creep.memory.role == 'harvester') {
  		roleHarvester.run(creep);
  	}
  	if (creep.memory.role == 'upgrader') {
  		roleUpgrader.run(creep);
  	}
  	if (creep.memory.role == 'builder') {
  		roleBuilder.run(creep);
  	}
  }*/
}
