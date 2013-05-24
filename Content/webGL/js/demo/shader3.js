define(['WebGL', 'extjs'], function () {
    function Spline() {
        Spline.superclass.constructor.call(this, name);
        this.initParent = function () {
            var radius = 100;
            var geometry = new THREE.CubeGeometry(0.8 * radius, 0.8 * radius, 0.8 * radius, 10, 10, 10); 
            var mesh = new THREE.Mesh(geometry);

            scene.add(mesh); 
        };
    }

    Ext.extend(Spline, WebGL);

    function start() {
        var spline = new Spline();
        spline.init();
        spline.render();

        function animate() {
            spline.initAnimate();
            requestAnimationFrame(animate);
        }
    }

    return {
        start: start
    };
});

