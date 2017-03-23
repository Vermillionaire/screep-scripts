var buildCreeps = {

  run: function(room) {

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role ==
      'harvester');

    //console.log(Memory.sources[room.name][0].slots.length);
    if (harvesters.length < (Memory.sources[room.name][1].slots.length)) {
      var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE],
        undefined, {
          role: 'harvester'
        });
    }


    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role ==
      'upgrader');

    if (upgraders.length < 3) {
      var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE],
        undefined, {
          role: 'upgrader'
        });
    }

    var builder = _.filter(Game.creeps, (creep) => creep.memory.role ==
      'builder');

    if (builder.length < 2) {


      var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE,
          WORK, CARRY, MOVE
        ],
        undefined, {
          role: 'builder'
        });
    }




  }

};

module.exports = buildCreeps;
