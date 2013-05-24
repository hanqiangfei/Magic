define(['webGL'], function (webGL) {
    function initParent() {
        var geometry = new THREE.CylinderGeometry(5, 5, 300, 100, 10);
        var mesh = new THREE.Mesh(geometry, material());

        webGL.add(mesh);
        mesh.position.set(0, 0, 0);
    }
    function material() {
        var texture1 = new THREE.ImageUtils.loadTexture("../Content/Images/WebGL/lighting1.jpg");
        var material = new THREE.MeshLambertMaterial({ map: texture1 });
        return material;
    }

    function start() {
        initParent();
    }

    return {
        start: start
    };
});

