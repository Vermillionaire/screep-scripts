var roleBuilder = {

  /** @param {Creep} creep **/
  run: function(creep) {

    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
    }

    if (creep.memory.building) {
      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      console.log(targets.length);
      if (targets.length >= 3) {
        console.log("test");
        if (creep.build(targets[creep.memory.num]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[creep.memory.num], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else if (targets.length > 0) {


        if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
        var targets = creep.room.find(FIND_STRUCTURES);
        if (targets.length) {
          var i = 0;
          while (targets[i].hitsMax > targets[i].hits && targets[i].hits >
            3000)
            i++;
          console.log(i);
          if (creep.repair(targets[i]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(targets[i], {
              visualizePathStyle: {
                stroke: '#ffffff'
              }
            });
          }
        }
      }
    } else {
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_EXTENSION ||
              structure.structureType == STRUCTURE_SPAWN) &&
            structure.energy >= structure.energyCapacity * 0.8;
        }
      });
      if (targets.length > 0) {
        console.log(targets[0].toString());
        if (creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      }
    }
  }
};

module.exports = roleBuilder;
