exports.move = { "title": "A Behavior Tree",
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
    "custom_nodes": [
        {
            "name": "MoveTo",
            "title": "",
            "category": "action"
        },
        {
            "name": "Echo",
            "title": "",
            "category": "action"
        }
    ]
  }

exports.min_move = {
    "title": "A Behavior Tree",
    "description": "",
    "root": "192b708e-980d-48de-952f-11f559c0228f",
    "display": {
        "camera_x": 960,
        "camera_y": 486,
        "camera_z": 1,
        "x": 0,
        "y": 0
    },
    "properties": {},
    "nodes": {
        "192b708e-980d-48de-952f-11f559c0228f": {
            "id": "192b708e-980d-48de-952f-11f559c0228f",
            "name": "Sequence",
            "title": "Sequence",
            "description": "",
            "display": {
                "x": 144,
                "y": 0
            },
            "parameters": {},
            "properties": {},
            "children": [
                "c4c26304-b35a-4e8d-93b3-d6a37f9f9644",
                "b0c9e502-1d5c-424c-a72a-50c3a5bc5809"
            ]
        },
        "c4c26304-b35a-4e8d-93b3-d6a37f9f9644": {
            "id": "c4c26304-b35a-4e8d-93b3-d6a37f9f9644",
            "name": "Priority",
            "title": "Priority",
            "description": "",
            "display": {
                "x": 320,
                "y": -96
            },
            "parameters": {},
            "properties": {},
            "children": [
                "7b9b481e-7bfc-40c5-8f46-f862b1973145",
                "06026a39-3c2a-4425-b3ec-70e83f018131"
            ]
        },
        "7b9b481e-7bfc-40c5-8f46-f862b1973145": {
            "id": "7b9b481e-7bfc-40c5-8f46-f862b1973145",
            "name": "HasPath",
            "title": "HasPath",
            "description": "",
            "display": {
                "x": 528,
                "y": -176
            },
            "parameters": {},
            "properties": {}
        },
        "06026a39-3c2a-4425-b3ec-70e83f018131": {
            "id": "06026a39-3c2a-4425-b3ec-70e83f018131",
            "name": "MakePath",
            "title": "MakePath",
            "description": "",
            "display": {
                "x": 528,
                "y": -32
            },
            "parameters": {},
            "properties": {}
        },
        "b0c9e502-1d5c-424c-a72a-50c3a5bc5809": {
            "id": "b0c9e502-1d5c-424c-a72a-50c3a5bc5809",
            "name": "MoveTo",
            "title": "MoveTo",
            "description": "",
            "display": {
                "x": 528,
                "y": 112
            },
            "parameters": {},
            "properties": {}
        }
    },
    "custom_nodes": [
        {
            "name": "HasPath",
            "title": "",
            "category": "condition"
        },
        {
            "name": "MakePath",
            "title": "",
            "category": "action"
        },
        {
            "name": "MoveTo",
            "title": "",
            "category": "action"
        }
    ]
}
