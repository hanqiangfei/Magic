define(["WebGL"], function (WebGL) {

    var webgl = new WebGL();

    webgl.initParent = function () {
        var radius = 100;
        var geometry = new THREE.CubeGeometry(0.8 * radius, 0.8 * radius, 0.8 * radius, 10, 10, 10);
        var mesh = new THREE.Mesh(geometry);

        webgl.scene.add(mesh);
    };

    webgl.animate = animate;
    function animate() {
        webgl.renderer.render(webgl.scene, webgl.camera);
        webgl.controls.update();
        requestAnimationFrame(animate);
    }
    webgl.init();
    webgl.animate();

});

