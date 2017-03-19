exports.move = {
  "title": "A Behavior Tree",
  "description": "",
  "root": "2b0a8667-4fb0-4ac8-8f8b-654863c20472",
  "display": {
    "camera_x": 960,
    "camera_y": 450.5,
    "camera_z": 1,
    "x": -384,
    "y": 0
  },
  "properties": {},
  "nodes": {
    "2b0a8667-4fb0-4ac8-8f8b-654863c20472": {
      "id": "2b0a8667-4fb0-4ac8-8f8b-654863c20472",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "display": {
        "x": -208,
        "y": 0
      },
      "parameters": {},
      "properties": {},
      "children": [
        "6565430c-a15b-4676-afda-51470b6798d7",
        "a8675e39-8232-4ab2-88da-68f6acbf58a3"

      ]
    },
    "6565430c-a15b-4676-afda-51470b6798d7": {
      "id": "6565430c-a15b-4676-afda-51470b6798d7",
      "name": "MoveTo",
      "title": "MoveTo",
      "description": "",
      "display": {
        "x": 0,
        "y": -64
      },
      "parameters": {},
      "properties": {}
    },
    "a8675e39-8232-4ab2-88da-68f6acbf58a3": {
      "id": "a8675e39-8232-4ab2-88da-68f6acbf58a3",
      "name": "Echo",
      "title": "Echo",
      "description": "",
      "display": {
        "x": 0,
        "y": 64
      },
      "parameters": {},
      "properties": {}
    }
  },
  "custom_nodes": [{
    "name": "MoveTo",
    "title": "",
    "category": "action"
  }, {
    "name": "Echo",
    "title": "",
    "category": "action"
  }]
}

exports.min_move = {
  "id": "6e5a6ce4-100d-47d1-9339-9f7d5a569e8c",
  "title": "Minimal Move",
  "description": "",
  "root": "192b708e-980d-48de-952f-11f559c0228f",
  "properties": {},
  "nodes": {
    "192b708e-980d-48de-952f-11f559c0228f": {
      "id": "192b708e-980d-48de-952f-11f559c0228f",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": 144,
        "y": 0
      },
      "children": ["c4c26304-b35a-4e8d-93b3-d6a37f9f9644",
        "6293680f-3dae-4076-8514-c3cc305d5aae"
      ]
    },
    "c4c26304-b35a-4e8d-93b3-d6a37f9f9644": {
      "id": "c4c26304-b35a-4e8d-93b3-d6a37f9f9644",
      "name": "Priority",
      "title": "Priority",
      "description": "",
      "properties": {},
      "display": {
        "x": 312,
        "y": -96
      },
      "children": ["7b9b481e-7bfc-40c5-8f46-f862b1973145",
        "06026a39-3c2a-4425-b3ec-70e83f018131"
      ]
    },
    "7b9b481e-7bfc-40c5-8f46-f862b1973145": {
      "id": "7b9b481e-7bfc-40c5-8f46-f862b1973145",
      "name": "HasPath",
      "title": "HasPath",
      "description": "",
      "properties": {},
      "display": {
        "x": 528,
        "y": -204
      }
    },
    "06026a39-3c2a-4425-b3ec-70e83f018131": {
      "id": "06026a39-3c2a-4425-b3ec-70e83f018131",
      "name": "MakePath",
      "title": "MakePath",
      "description": "",
      "properties": {},
      "display": {
        "x": 528,
        "y": 12
      }
    },
    "b0c9e502-1d5c-424c-a72a-50c3a5bc5809": {
      "id": "b0c9e502-1d5c-424c-a72a-50c3a5bc5809",
      "name": "MoveTo",
      "title": "MoveTo",
      "description": "",
      "properties": {},
      "display": {
        "x": 528,
        "y": 240
      }
    },
    "6293680f-3dae-4076-8514-c3cc305d5aae": {
      "id": "6293680f-3dae-4076-8514-c3cc305d5aae",
      "name": "Priority",
      "title": "Priority",
      "description": "",
      "properties": {},
      "display": {
        "x": 312,
        "y": 180
      },
      "children": ["7d201646-0a2b-4c41-8626-7e5f94cfb380",
        "b0c9e502-1d5c-424c-a72a-50c3a5bc5809"
      ]
    },
    "7d201646-0a2b-4c41-8626-7e5f94cfb380": {
      "id": "7d201646-0a2b-4c41-8626-7e5f94cfb380",
      "name": "atTarget",
      "title": "atTarget",
      "description": "",
      "properties": {},
      "display": {
        "x": 528,
        "y": 120
      }
    }
  },
  "display": {
    "camera_x": 960,
    "camera_y": 486,
    "camera_z": 1,
    "x": 0,
    "y": 0
  },
  "custom_nodes": [{
    "name": "MoveTo",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "Echo",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "HasPath",
    "category": "condition",
    "title": "",
    "properties": {}
  }, {
    "name": "MakePath",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "atTarget",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }]
}

exports.try_spawn_target = {
  "id": "4ad445c9-2e36-4dad-9235-5b1edf6033b8",
  "title": "TrySpawnTarget",
  "description": "",
  "root": "d191d2d3-d4ad-4f6d-97e9-eed28478ae9b",
  "properties": {},
  "nodes": {
    "d191d2d3-d4ad-4f6d-97e9-eed28478ae9b": {
      "id": "d191d2d3-d4ad-4f6d-97e9-eed28478ae9b",
      "name": "Priority",
      "title": "Priority",
      "description": "",
      "properties": {},
      "display": {
        "x": -240,
        "y": -48
      },
      "children": [
        "1cbb25f7-9abb-48ad-8eb1-98ddb30d54ae",
        "d0441668-44c0-454f-9c2a-e530f4400c81"
      ]
    },
    "1cbb25f7-9abb-48ad-8eb1-98ddb30d54ae": {
      "id": "1cbb25f7-9abb-48ad-8eb1-98ddb30d54ae",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -72,
        "y": -156
      },
      "children": [
        "046520c3-cc0c-4806-ae1e-5bbc97b69a67",
        "68cb2af7-f257-449e-89eb-62c6cebb4995"
      ]
    },
    "f8fd3cfb-6086-4c5f-86a7-9238026651e7": {
      "id": "f8fd3cfb-6086-4c5f-86a7-9238026651e7",
      "name": "spawnTargetRole",
      "title": "spawnTargetRole",
      "description": "",
      "properties": {},
      "display": {
        "x": 72,
        "y": 60
      }
    },
    "d0441668-44c0-454f-9c2a-e530f4400c81": {
      "id": "d0441668-44c0-454f-9c2a-e530f4400c81",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -72,
        "y": 12
      },
      "children": [
        "88b8480d-2316-4a93-ba53-daae820e80dc",
        "f8fd3cfb-6086-4c5f-86a7-9238026651e7"
      ]
    },
    "88b8480d-2316-4a93-ba53-daae820e80dc": {
      "id": "88b8480d-2316-4a93-ba53-daae820e80dc",
      "name": "canBuildTarget",
      "title": "canBuildTarget",
      "description": "",
      "properties": {},
      "display": {
        "x": 72,
        "y": -24
      }
    },
    "68cb2af7-f257-449e-89eb-62c6cebb4995": {
      "id": "68cb2af7-f257-449e-89eb-62c6cebb4995",
      "name": "creepTTLcheck",
      "title": "creepTTLcheck",
      "description": "",
      "properties": {},
      "display": {
        "x": 72,
        "y": -120
      }
    },
    "046520c3-cc0c-4806-ae1e-5bbc97b69a67": {
      "id": "046520c3-cc0c-4806-ae1e-5bbc97b69a67",
      "name": "targetAllSpawned",
      "title": "targetAllSpawned",
      "description": "",
      "properties": {},
      "display": {
        "x": 72,
        "y": -192
      }
    }
  },
  "display": {
    "camera_x": 1280,
    "camera_y": 475,
    "camera_z": 1,
    "x": -420,
    "y": -48
  },
  "custom_nodes": [{
    "name": "MoveTo",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "Echo",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "HasPath",
    "category": "condition",
    "title": "",
    "properties": {}
  }, {
    "name": "MakePath",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "atTarget",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "spawnTargetRole",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "canBuildTarget",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "setTargetMiner",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "setTargetBuilder",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "setTargetUpgrader",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "targetAllSpawned",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "isTargetCreep",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "creepTTLcheck",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "roadToTargetExist",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "setTargetEnergySource",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "pathToMinesExist",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "storePathAsRoad",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "buildDeficitReached",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "buildRoad",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "roadFinished",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }]
}

exports.spawn = {
  "id": "0acf2817-780f-4b57-b9df-7334ae4093d5",
  "title": "Spawn",
  "description": "",
  "root": "5047601f-ac33-401a-8acd-0a3f801c8fa0",
  "properties": {},
  "nodes": {
    "5047601f-ac33-401a-8acd-0a3f801c8fa0": {
      "id": "5047601f-ac33-401a-8acd-0a3f801c8fa0",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -708,
        "y": -192
      },
      "children": [
        "1abfaf0a-6ce6-49b7-8aa6-a9e3f49e9a10",
        "a2370c75-bda3-405c-8bd7-eea299d66795"
      ]
    },
    "7e42b775-8a08-4e25-a41d-9079f14545fa": {
      "id": "7e42b775-8a08-4e25-a41d-9079f14545fa",
      "name": "setTargetMiner",
      "title": "setTargetMiner",
      "description": "",
      "properties": {},
      "display": {
        "x": -204,
        "y": -636
      }
    },
    "2a618753-9ea2-403a-9e7b-ca5d40df75e3": {
      "id": "2a618753-9ea2-403a-9e7b-ca5d40df75e3",
      "name": "setTargetUpgrader",
      "title": "setTargetUpgrader",
      "description": "",
      "properties": {},
      "display": {
        "x": -204,
        "y": -492
      }
    },
    "9db7d698-d22f-4995-90cb-34dc05e324f8": {
      "id": "9db7d698-d22f-4995-90cb-34dc05e324f8",
      "name": "setTargetBuilder",
      "title": "setTargetBuilder",
      "description": "",
      "properties": {},
      "display": {
        "x": -204,
        "y": -360
      }
    },
    "a2370c75-bda3-405c-8bd7-eea299d66795": {
      "id": "a2370c75-bda3-405c-8bd7-eea299d66795",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -540,
        "y": -48
      },
      "children": [
        "fe5098a0-fa1f-4f15-9098-8619dc026e78",
        "81af16c8-0214-4390-895c-f1c878a46a48",
        "c38cde8a-77d0-4fc0-8a4c-09b1796cdabf",
        "b5e7f944-b8b4-4ce1-87e1-8b9d7e09213d"
      ]
    },
    "8625d95d-160d-4951-8d31-8caff5735e62": {
      "id": "8625d95d-160d-4951-8d31-8caff5735e62",
      "name": "4ad445c9-2e36-4dad-9235-5b1edf6033b8",
      "title": "TrySpawnTarget",
      "description": "",
      "properties": {},
      "display": {
        "x": -204,
        "y": -564
      }
    },
    "5ca81c27-6fb2-45fb-bc4a-61ac697a11fd": {
      "id": "5ca81c27-6fb2-45fb-bc4a-61ac697a11fd",
      "name": "4ad445c9-2e36-4dad-9235-5b1edf6033b8",
      "title": "TrySpawnTarget",
      "description": "",
      "properties": {},
      "display": {
        "x": -204,
        "y": -432
      }
    },
    "1abfaf0a-6ce6-49b7-8aa6-a9e3f49e9a10": {
      "id": "1abfaf0a-6ce6-49b7-8aa6-a9e3f49e9a10",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -480,
        "y": -480
      },
      "children": [
        "7e42b775-8a08-4e25-a41d-9079f14545fa",
        "8625d95d-160d-4951-8d31-8caff5735e62",
        "2a618753-9ea2-403a-9e7b-ca5d40df75e3",
        "5ca81c27-6fb2-45fb-bc4a-61ac697a11fd",
        "9db7d698-d22f-4995-90cb-34dc05e324f8"
      ]
    },
    "fe5098a0-fa1f-4f15-9098-8619dc026e78": {
      "id": "fe5098a0-fa1f-4f15-9098-8619dc026e78",
      "name": "setTargetEnergySource",
      "title": "setTargetEnergySource",
      "description": "",
      "properties": {},
      "display": {
        "x": -192,
        "y": -204
      }
    },
    "81af16c8-0214-4390-895c-f1c878a46a48": {
      "id": "81af16c8-0214-4390-895c-f1c878a46a48",
      "name": "Priority",
      "title": "Priority",
      "description": "",
      "properties": {},
      "display": {
        "x": -324,
        "y": -36
      },
      "children": [
        "eadb0d34-2f31-4dd7-9090-84ffda802f62",
        "91e3c923-b8d3-45db-8915-177eaf8ea260"
      ]
    },
    "eadb0d34-2f31-4dd7-9090-84ffda802f62": {
      "id": "eadb0d34-2f31-4dd7-9090-84ffda802f62",
      "name": "pathToMinesExist",
      "title": "pathToMinesExist",
      "description": "",
      "properties": {},
      "display": {
        "x": -24,
        "y": -96
      }
    },
    "91e3c923-b8d3-45db-8915-177eaf8ea260": {
      "id": "91e3c923-b8d3-45db-8915-177eaf8ea260",
      "name": "MakePath",
      "title": "MakePath",
      "description": "",
      "properties": {},
      "display": {
        "x": -24,
        "y": 48
      }
    },
    "c38cde8a-77d0-4fc0-8a4c-09b1796cdabf": {
      "id": "c38cde8a-77d0-4fc0-8a4c-09b1796cdabf",
      "name": "storePathAsRoad",
      "title": "storePathAsRoad",
      "description": "",
      "properties": {},
      "display": {
        "x": -192,
        "y": 192
      }
    },
    "b5e7f944-b8b4-4ce1-87e1-8b9d7e09213d": {
      "id": "b5e7f944-b8b4-4ce1-87e1-8b9d7e09213d",
      "name": "RepeatUntilFailure",
      "title": "Repeat Until Failure",
      "description": "",
      "properties": {
        "maxLoop": -1
      },
      "display": {
        "x": -252,
        "y": 324
      },
      "child": "61dc33f3-0b6c-4b20-8559-fd430bfc5137"
    },
    "61dc33f3-0b6c-4b20-8559-fd430bfc5137": {
      "id": "61dc33f3-0b6c-4b20-8559-fd430bfc5137",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -84,
        "y": 324
      },
      "children": [
        "5c8fca16-bd80-48e6-8ca6-e3335b78526d",
        "9998b2d6-c8a2-4f0f-8f35-0839ff61a4ae",
        "4dfc0947-3847-4b47-9e70-7439e95eda23"
      ]
    },
    "5c8fca16-bd80-48e6-8ca6-e3335b78526d": {
      "id": "5c8fca16-bd80-48e6-8ca6-e3335b78526d",
      "name": "Inverter",
      "title": "Inverter",
      "description": "",
      "properties": {},
      "display": {
        "x": 84,
        "y": 228
      },
      "child": "02d8c25f-110d-408a-84bd-a7de5ffc1268"
    },
    "02d8c25f-110d-408a-84bd-a7de5ffc1268": {
      "id": "02d8c25f-110d-408a-84bd-a7de5ffc1268",
      "name": "buildDeficitReached",
      "title": "buildDeficitReached",
      "description": "",
      "properties": {},
      "display": {
        "x": 336,
        "y": 228
      }
    },
    "4dfc0947-3847-4b47-9e70-7439e95eda23": {
      "id": "4dfc0947-3847-4b47-9e70-7439e95eda23",
      "name": "buildRoad",
      "title": "buildRoad",
      "description": "",
      "properties": {},
      "display": {
        "x": 120,
        "y": 432
      }
    },
    "9998b2d6-c8a2-4f0f-8f35-0839ff61a4ae": {
      "id": "9998b2d6-c8a2-4f0f-8f35-0839ff61a4ae",
      "name": "Inverter",
      "title": "Inverter",
      "description": "",
      "properties": {},
      "display": {
        "x": 84,
        "y": 324
      },
      "child": "1287b4d2-ed7d-42a4-81b0-a65ae2fca349"
    },
    "1287b4d2-ed7d-42a4-81b0-a65ae2fca349": {
      "id": "1287b4d2-ed7d-42a4-81b0-a65ae2fca349",
      "name": "roadFinished",
      "title": "roadFinished",
      "description": "",
      "properties": {},
      "display": {
        "x": 336,
        "y": 324
      }
    }
  },
  "display": {
    "camera_x": 1511.1649999916553,
    "camera_y": 684.5,
    "camera_z": 1,
    "x": -912,
    "y": -72
  },
  "custom_nodes": [{
    "name": "MoveTo",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "Echo",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "HasPath",
    "category": "condition",
    "title": "",
    "properties": {}
  }, {
    "name": "MakePath",
    "category": "action",
    "title": "",
    "properties": {}
  }, {
    "name": "atTarget",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "spawnTargetRole",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "canBuildTarget",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "setTargetMiner",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "setTargetBuilder",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "setTargetUpgrader",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "targetAllSpawned",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "isTargetCreep",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "creepTTLcheck",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "roadToTargetExist",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "setTargetEnergySource",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "pathToMinesExist",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "storePathAsRoad",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "buildDeficitReached",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "buildRoad",
    "category": "action",
    "title": null,
    "description": null,
    "properties": {}
  }, {
    "name": "roadFinished",
    "category": "condition",
    "title": null,
    "description": null,
    "properties": {}
  }]
}
