define(['WebGL'], function (WebGL) {

    attributes = { 
        displacement: { type: 'f', value: [] } 
    };

    uniforms = { 
        amplitude: { type: "f", value: 1.0 },
        color: { type: "c", value: new THREE.Color(0xff2200) },
        texture: { type: "t", value: THREE.ImageUtils.loadTexture("textures/water.jpg") }
    };

    uniforms.texture.value.wrapS = uniforms.texture.value.wrapT = THREE.RepeatWrapping;

    var shaderMaterial = new THREE.ShaderMaterial({ 
        uniforms: uniforms,
        attributes: attributes
        //vertexShader: document.getElementById('vertexshader').textContent,
        //fragmentShader: document.getElementById('fragmentshader').textContent

    });


    function Spline() {
        Spline.superclass.constructor.call(this, name);
        this.initAnimate = function () {
            //alert("lighting constructor!");
            var vertices = [];
            for (var i = 0; i < 10; i++) {
                var x = -20 + Math.random() * 20 * 2;
                var y = -100 + 30 * i;
                var vertex = new THREE.Vector3(x, y, 0);
                vertices.push(vertex);
            }
            //var path = new THREE.ClosedSplineCurve3(vertices);  首尾相连
            var path = new THREE.SplineCurve3(vertices);
            var geometry = new THREE.TubeGeometry(path, 10, 10, 10, false, false);
            //var geometry = new THREE.CylinderGeometry(5, 5, 300, 100, 10);
            var material = WebGL.Material.getBaseMaterial();
            var tube = new THREE.Mesh(geometry, material);

            scene.add(tube);
            renderer.render(scene, camera);
            scene.remove(tube);
        };
    }

    //Ext.extend(Spline, WebGL);

//    function start() {
//        var spline = new Spline();
//        spline.init();
//        animate();

//        function animate() {
//            spline.initAnimate();
//            requestAnimationFrame(animate);
//        }
//    }

//    return {
//        start: start
//    };
});

