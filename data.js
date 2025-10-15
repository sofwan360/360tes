var APP_DATA = {
  "scenes": [
    {
      "id": "0-dapur",
      "name": "DAPUR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -0.009132570593800793,
        "pitch": 0.0018408596708727742,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": -2.098369761405836,
          "pitch": 0.16060551826119784,
          "rotation": 4.71238898038469,
          "target": "1-l1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-l1",
      "name": "L1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -1.5537990731115414,
        "pitch": 0.018408596708717084,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": -1.995681159228507,
          "pitch": 0.01864816919215606,
          "rotation": 7.0685834705770345,
          "target": "2-rtm"
        },
        {
          "yaw": 0.2654957327465013,
          "pitch": 0.028284866701204336,
          "rotation": 1.5707963267948966,
          "target": "0-dapur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-rtm",
      "name": "RTM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0.09964291837814798,
        "pitch": -0.010405787366991603,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": -0.024027233709427165,
          "pitch": 0.031517787975349876,
          "rotation": 0,
          "target": "1-l1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "tes360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
