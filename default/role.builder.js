var roleBuilder = {

  /** @param {Creep} creep **/
  run: function(creep) {


    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
      delete creep.memory.path;
      delete creep.memory.target;
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
      delete creep.memory.path;
      delete creep.memory.target;
      console.log("deleting path: " + creep.memory.path);
    }

    if (creep.memory.building) {
      //console.log("Building");
      //console.log(creep.memory.path);
      if (!creep.memory.path || !creep.memory.target) {
        //console.log("Test");
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

        if (targets.length > 0) {
          creep.memory.target = targets[0].id;
          creep.memory.path = creep.pos.findPathTo(targets[0]);
        }
        /*
        else {
          var targets = creep.room.find(FIND_STRUCTURES);
          if (targets.length) {
            var i = 0;
            for (var i = 0; i < targets.length; i++) {
              if (targets[i].hitsMax > targets[i].hits && targets[i].hits <
                3000) {
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
          }
        } */
      }

      var target = Game.getObjectById(creep.memory.target);

      if (target == null || target.energy == 0) {
        delete creep.memory.path;
        delete creep.memory.target;
        return;
      }

      //if (targets.length > 0) {
      console.log(target);
      if (creep.build(target) ==
        ERR_NOT_IN_RANGE) {
        //console.log(targets.length);
        console.log(creep.moveByPath(creep.memory.path));
      }
      //}

    } else {

      //if there is no path or target, lets create one
      if (!creep.memory.path || !creep.memory.target) {
        var targets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION ||
                structure.structureType == STRUCTURE_SPAWN) &&
              structure.energy >= structure.energyCapacity * 0.7;
          }
        });

        if (targets.length > 0) {
          creep.memory.target = targets[0].id;
          creep.memory.path = creep.pos.findPathTo(targets[0]);
        }

      }

      var target = Game.getObjectById(creep.memory.target);

      if (target == null || target.energy == 0) {
        delete creep.memory.path;
        delete creep.memory.target;
        return;
      }

      console.log(target);
      if (creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        console.log(creep.moveByPath(creep.memory.path));
      }

    }
  }
};

module.exports = roleBuilder;
