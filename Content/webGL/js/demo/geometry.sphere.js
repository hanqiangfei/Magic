define(['webGL'], function (webGL) {
    function initParent() {
        initSphere();
        //alert("lighting!");
    }

    //5. 追加球体
    var geometry = new Array([], [], [], []);
    function initSphere() {
        //
        var r = 32;
        var sphere = new THREE.SphereGeometry(r, 32, 32);
        var icosahedron = new THREE.IcosahedronGeometry(r, 3);
        var octahedron = new THREE.OctahedronGeometry(r, 4);
        var tetrahedron = new THREE.TetrahedronGeometry(r, 1);
        var torus = new THREE.TorusGeometry(r, 5, 32, 32, 0);
        //
        geometry[0][0] = new THREE.Mesh(sphere);
        geometry[0][1] = new THREE.Mesh(icosahedron); //十二面体
        geometry[0][2] = new THREE.Mesh(octahedron);  //八面体    
        geometry[0][3] = new THREE.Mesh(tetrahedron); //四面体
        geometry[0][4] = new THREE.Mesh(torus);
        // 
        var color = Math.random() * 0x808008 + 0x808080;
        //material = new THREE.MeshLambertMaterial({ color: color, ambient: 0xFF0000 });
        material = new THREE.MeshPhongMaterial({
            //ambient: 0x030303, color: 0x030303, specular: 0x5500ff, shininess: 1
            //ambient: 0x000000, color: 0x5500ff, specular: 0x555555, shininess: 3 
            ambient: 0x030303, color: 0x030303, specular: 0xff5500, shininess: 1
        });
        //getDynamicMaterial();
        var sphere = new THREE.SphereGeometry(r, 32, 32);
        var icosahedron = new THREE.IcosahedronGeometry(r, 3);
        var octahedron = new THREE.OctahedronGeometry(r, 4);
        var tetrahedron = new THREE.TetrahedronGeometry(r, 1);
        var torus = new THREE.TorusGeometry(r, 5, 32, 32, 0);
        geometry[1][0] = new THREE.Mesh(sphere, material);
        geometry[1][1] = new THREE.Mesh(icosahedron, material);
        geometry[1][2] = new THREE.Mesh(octahedron, material);
        geometry[1][3] = new THREE.Mesh(tetrahedron, material);
        geometry[1][4] = new THREE.Mesh(torus, material);

        //sphere[2] = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, rings));  
        //        var sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xCC0000, ambient: 0xFF0000 });
        //        sphere[1] = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, rings), sphereMaterial);

        //        var texture1 = new THREE.ImageUtils.loadTexture("../Content/WebGl/earth02.jpg");
        //        var sphereMaterial2 = new THREE.MeshLambertMaterial({ map: texture1 });   
        //        sphere[2] = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, rings), sphereMaterial2);

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                webGL.add(geometry[i][j]);
                geometry[i][j].position.set(-200 + 100 * j, 50 - 100 * i, 0);
            }
        }
    }
    return {
        initParent: initParent,
        initSphere: initSphere
    };
});

