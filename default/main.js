var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var buildCreep = require('build.creeps');
var buildLevel = require('build.level');

var cleanup = function() {
	for (var i in Memory.creeps) {
		if (!Game.creeps[i]) {
			delete Memory.creeps[i];
		}
	}

	for (var i in Memory.spawns) {
		if (!Game.spawns[i]) {
			delete Memory.spawns[i];
		}
	}

}

//looks at the area around sources to see how many miners it can support
var setSourceSlots = function(room) {
	///console.log("Setting sources");
	var sources = room.find(FIND_SOURCES);

	for (var i = 0; i < sources.length; i++) {
		Memory.sources[room.name][i] = sources[i].pos;
		var source = Memory.sources[room.name][i];

		source.slots = [];
		//steps through all of the positions around the source
		for (var j = sources[i].pos.x - 1; j <= sources[i].pos.x + 1; j++) {
			for (var k = sources[i].pos.y - 1; k <= sources[i].pos.y + 1; k++) {
				var things = room.lookAt(j, k)
				for (var l = 0; l < things.length; l++) {
					if (things[l].type == 'terrain') {
						if (things[l].terrain == "plain") {
							var pos = {
								x: j,
								y: k
							};

							//console.log(source.slots);
							source.slots[source.slots.length] = pos;

						}

					}
				}
			}
		}
		//Stores the open slots
		//Memory.sources[room.name][i].num_slots = counter;
	}
}


console.log("Updateing");

//Setting scheduler variables for tasks
Memory.scheduler = {};
Memory.scheduler.cleanup = {};
Memory.scheduler.cleanup.period = 600; //Every 10 Minutes
Memory.scheduler.cleanup.lastTime = 0;
Memory.scheduler.roomUpgrade = {};
Memory.scheduler.roomUpgrade.period = 600; //Every 10 Minutes
Memory.scheduler.roomUpgrade.lastTime = 0;
Memory.scheduler.buildCreeps = {};
Memory.scheduler.buildCreeps.period = 30; //Every 30 seconds
Memory.scheduler.buildCreeps.lastTime = 0;

module.exports.loop = function() {

	var room = Game.spawns["Spawn1"].room;
	//console.log("Room name = " + Game.spawns["Spawn1"].room.name);

	if (Memory.sources != undefined && Memory.sources[room.name] != undefined) {
		setSourceSlots(room);
	} else {
		Memory.sources = {};
		Memory.sources[room.name] = {};
	}


	for (var item in Memory.scheduler) {
		var task = Memory.scheduler[item];
		if (Game.time - task.lastTime > task.period) {
			task.lastTime = Game.time;
			//console.log("Executing scheduled task");
			switch (item) {
				case "cleanup":
					console.log("Cleaning");
					cleanup();
					break;
				case "roomUpgrade":
					console.log("Upgrading rooom");
					buildLevel.roomUpgrade(room);
					break;
				case "buildCreeps":
					console.log("Building Creeps");
					buildCreep.run(room);
					break;
				default:

			}
		}

	}

	//console.log(Game.room);
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

		//console.log("CPU used: " +
		//Game.cpu.getUsed());
	}
	console.log();
}
