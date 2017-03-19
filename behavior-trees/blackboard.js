var blackboard = {
  target: null,

  setTarget: function(t) {
    blackboard.target = t;
  },

  set: function(key, value, treeScope, nodeScope) {
    if (blackboard.target != null) {
      if (treeScope == undefined)
        treeScope = "_void";
      if (nodeScope == undefined)
        nodeScope = "_void";
      if (blackboard.target[treeScope] == undefined)
        blackboard.target[treeScope] = {};
      if (blackboard.target[treeScope][nodeScope] == undefined)
        blackboard.target[treeScope][nodeScope] = {};

      blackboard.target[treeScope][nodeScope][key] = value;

    } else {
      throw "You must set a target";
    }
  },

  get: function(key, treeScope, nodeScope) {
    if (blackboard.target != null) {
      if (treeScope == undefined)
        treeScope = "_void";
      if (nodeScope == undefined)
        nodeScope = "_void";
      if (blackboard.target[treeScope] == undefined)
        blackboard.target[treeScope] = {};
      if (blackboard.target[treeScope][nodeScope] == undefined)
        blackboard.target[treeScope][nodeScope] = {};

      return blackboard.target[treeScope][nodeScope][key];

    } else {
      throw "You must set a target";
    }
  }

}

module.exports = blackboard;
