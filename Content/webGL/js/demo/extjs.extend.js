define(['extjs'], function (ext) {
    Animal = function (name) {
        this.name = name;
        this.run = function () { alert("Animal run"); }
    };

    Animal.prototype = {
        //        run: function () {
        //            alert("Animal run");
        //        },
        swim: function () {
            alert("Animal swimming");
        },
        shout: function () {
            alert("Animal shout");
        }
    };

    Cat = function (name) {
        Cat.superclass.constructor.call(this, name);
        this.run = function () { alert("Cat run"); }
    };

    //        Cat.prototype = {
    //            run: function () {
    //                alert("Cat run");
    //            }
    //        };


    Ext.extend(Cat, Animal);


    //    Ext.extend(Cat, Animal, {
    //        run: function () {
    //            alert("Cat run");
    //        }
    //    });

    function start() {
        var cat = new Cat();
        cat.run();
        cat.shout();
    }

    return {
        start: start
    }
});

