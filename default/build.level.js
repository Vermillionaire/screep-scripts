var buildLevel = {

  roomUpgrade: function(room) {
    if (room.memory.level == undefined)
      room.memory.level = {};

    switch (room.controller.level) {
      case 1:

        break;
      case 2:

        if (room.memory.level[2] == true)
          break;
        this.setExtensions(room, 5, 2)

        //createConstructionSite(x, y, structureType)
        break;
      case 3:
        if (room.memory.level[3] == true)
          break;
        this.setExtensions(room, 10, 3)
        break;
      default:

    }
  },

  setExtensions: function(room, limit, level) {
    var num_containers = room.find(STRUCTURE_EXTENSION).length;
    var offsetX = limit / 5 - 1;
    var offsetY = -1;
    var pos = Game.spawns['Spawn1'].pos;
    while (num_containers < limit) {
      //console.log("X: " + (pos.x + offsetX) + " Y: " + (pos.y + offsetY));
      var items = room.lookAt(pos.x + offsetX, pos.y + offsetY);
      for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'structure')
          continue;
        else if (items[i].type == 'terrain' && items[i].terrain != 'wall') {
          room.createConstructionSite(pos.x + offsetX, pos.y + offsetY,
            STRUCTURE_EXTENSION);
          num_containers++;

          if (num_containers == limit)
            room.memory.level[level] = true;
        }
      }
      offsetY--;

      if (pos.y + offsetY < 0) {
        offsetY = 0;
        offsetX++;
      }
    }
  },

  buildRoad: function(room) {

  }
}

module.exports = buildLevel;
