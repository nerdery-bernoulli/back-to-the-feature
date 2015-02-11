System.config({
  "transpiler": "6to5",
  "paths": {
    "*": "*.js",
    "app/*": "assets/*.js",
    "github:*": "assets/vendor/github/*.js",
    "npm:*": "assets/vendor/npm/*.js",
    "test-custom-elements/*": "assets/*.js"
  }
});

System.config({
  "map": {
    "document-register-element": "npm:document-register-element@0.1.6",
    "observed": "npm:observed@1.1.1",
    "rivets": "npm:rivets@0.8.0",
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:debug@2.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "ms": "npm:ms@0.6.2",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:observed@1.1.1": {
      "debug": "npm:debug@2.1.1",
      "events": "github:jspm/nodelibs-events@0.1.0"
    },
    "npm:rivets@0.7.2": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sightglass": "npm:sightglass@0.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:rivets@0.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sightglass": "npm:sightglass@0.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

