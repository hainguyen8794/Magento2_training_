requirejs.config({
    paths: {
      'requirejs': './lib/knockout',
      'demo' : './app',
      'random':'./random'
    }
});

var mods = ['demo','random'];
requirejs(mods);