requirejs.config({ // cau hinh` main cua? require.js
    paths: {
        'requirejs': 'lib/knockout', // thu vien cua? knockout
        'demo' : 'knockout' // hello world
    }
});

requirejs(['demo']);