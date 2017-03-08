var primatives = {
  createMoveTo: function() {
  	var MoveTo = b3.Class(b3.Action);
  	MoveTo.prototype.name = 'MoveTo';

  	MoveTo.prototype.tick = function(tick) {
  		console.log("One");
  		var creep = tick.target;
      if (creep.pos == creep.memory.target.pos) {
        return b3.SUCCESS;
      }
      else if (creep.memory.hasPath) {
        creep.moveByPath(creep.memory.path);
        return b3.RUNNING;
      }
      else {
        console.log("Normal path");
        creep.moveTo(creep.memory.target);
        return b3.RUNNING;
      }
  	}

  	return MoveTo;
  },

  createEcho: function() {
  	var Echo = b3.Class(b3.Action);
  	Echo.prototype.name = 'Echo';

  	Echo.prototype.tick = function(tick) {
  		console.log("Two");
    	tick.target.say("Hi");
      return b3.SUCCESS;
  	}

    return Echo;
  },

  createHasPath: function() {
  	var HasPath = b3.Class(b3.Action);
  	HasPath.prototype.name = 'HasPath';

  	HasPath.prototype.tick = function(tick) {
  		var creep = tick.target;
      if (creep.memory.hasPath) {
        creep.say("Has Path");
        return b3.SUCCESS;
      }
      else {
        creep.say("No Path");
        return b3.FAILURE;
      }

  	}

    return HasPath;
  },

  createMakePath: function() {
    var MakePath = b3.Class(b3.Action);
    MakePath.prototype.name = 'MakePath';

    MakePath.prototype.tick = function(tick) {
      var creep = tick.target;
      var path = creep.pos.findPathTo(creep.memory.target);
      creep.memory.path = path;
      creep.memory.hasPath = true;
      return b3.SUCCESS;

      }
      return MakePath;
    }

}


module.exports = primatives;
