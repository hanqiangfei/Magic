define(['jquery', 'WebGL'], function ($, WebGL) {

    //extend继承
    function extend(childclass, superclass) {
        var func = function () { };
        func.prototype = superclass.prototype;
        childclass.prototype = new func();
        childclass.prototype.constructor = childclass;
    }


    function Shader() { };

    Shader.prototype = new WebGL();

    function start() {
        var shader = new Shader();

        var radius = 100;
        var geometry = new THREE.CubeGeometry(0.8 * radius, 0.8 * radius, 0.8 * radius, 10, 10, 10);
        var mesh = new THREE.Mesh(geometry);

        shader.init();
        shader.scene.add(mesh);



        function animate() {
            shader.renderer.render(shader.scene, shader.camera);
            shader.controls.update();
            requestAnimationFrame(animate);
        }

        shader.animate = animate();
    }

    return {
        start: start
    };
});

