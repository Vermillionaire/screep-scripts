var buildCreeps = {

  run: function(room) {

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role ==
      'harvester');

    //console.log(Memory.sources[room.name][0].slots.length);
    if (harvesters.length < (Memory.sources[room.name][0].slots.length + 1)) {
      var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE],
        undefined, {
          role: 'harvester'
        });
    }


    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role ==
      'upgrader');

    if (upgraders.length < 2) {
      var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE],
        undefined, {
          role: 'upgrader'
        });
    }

    var builder = _.filter(Game.creeps, (creep) => creep.memory.role ==
      'builder');

    if (builder.length < 3) {
      var number = 0 + 1 + 2;
      for (var i = 0; i < builder.length; i++) {
        //console.log(builder[i].memory.num)
        if (builder[i].memory.num == 1)
          number -= 1;
        if (builder[i].memory.num == 2)
          number -= 2;

      }

      if (builder.length == 0)
        number = 2;

      var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE],
        undefined, {
          role: 'builder',
          num: number
        });
    }




  }

};

module.exports = buildCreeps;
