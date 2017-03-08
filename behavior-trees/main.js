/*
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var buildCreep = require('build.creeps');
*/

//var b3 = {};

function getMethods(obj) {
  var result = [];
  for (var id in obj) {
    try {
      if (typeof(obj[id]) == "function") {
        console.log(id + ": " + obj[id].toString());
      }
    } catch (err) {
      console.log(id + ": inaccessible");
    }
  }
}



var b3core = require('b3core');
var behaviors = require('behaviors');
var primatives = require('primatives');

function buildTrees() {
  if (Memory.treesBuilt == true) {
    console.log("Trees already built.");
    return;
  }

  Memory.behaviors = {};

  var move = new b3.BehaviorTree();
	move.load(behaviors.move, {'MoveTo' :primatives.createMoveTo(), 'Echo' :primatives.createEcho()});
  Memory.behaviors.move = move;

  var min_move = new b3.BehaviorTree();
	min_move.load(behaviors.min_move, {'MoveTo' :primatives.createMoveTo(), 'HasPath' :primatives.createHasPath(), 'MakePath' :primatives.createMakePath()});
  Memory.behaviors.min_move = min_move;
}

module.exports.loop = function () {
  //primatives.createMoveTo()

  buildTrees();

	var blackboard = new b3.Blackboard();

  var targets = Game.creeps['Mackenzie'].room.find(FIND_STRUCTURES);
  Game.creeps['Mackenzie'].memory.target = targets[1];
	//console.log(Game.creeps['William']);
	Memory.behaviors.min_move.tick(Game.creeps['Mackenzie'], blackboard);


	console.log("Test");
	console.log(b3.VERSION);

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
