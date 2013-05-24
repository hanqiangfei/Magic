define(['jquery', 'WebGL'], function ($, WebGL) {
    SubClass = function () { };

    function ClassA() {
        this.ca = "ca";
    }
    ClassA.prototype = {
        pa:"pa"
    }

    SubClass.prototype = new ClassA();
    SubClass.prototype.constructor = SubClass;

    $.extend(SubClass.prototype, ClassA, {
        a: "extend.a",
        aa2: "extend.aa2",
        aaa: function () { return "aaa" },
        fun: function () { return "extend.fun" }
    });

    return SubClass;

    //调用方法
    //SubClass subClass=new SubClass();
    //console.log(subClass.aaa())
});
 
