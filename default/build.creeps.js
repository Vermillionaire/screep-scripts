
var buildCreeps = {
    
     run: function() {
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            
        if(upgraders.length < 6) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
        }
        
        var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
        if(builder.length < 3) {
            var number = 0 + 1 + 2;
            for (var i=0; i < builder.length; i++) {
                console.log(builder[i].memory.num)
                if (builder[i].memory.num == 1)
                    number -= 1;
                if (builder[i].memory.num == 2)
                    number -= 2;
            }
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder', num: number});
        }
        
        
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    
        if(harvesters.length < 3) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role: 'harvester'});
        }
        
     }

};

module.exports = buildCreeps;