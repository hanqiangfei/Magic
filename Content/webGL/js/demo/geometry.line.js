define(['webGL', 'jquery'], function (webGL,$) {
    function initParent() {
        initPlane();
        initLine(); 
    }

    //grid
    function initPlane() {
        //THREE.PlaneGeometry = function ( width, height, widthSegments, heightSegments ) {}
        var geometry = new THREE.PlaneGeometry(150, 1000, 15, 100);
        var material = new THREE.MeshBasicMaterial({ color: 0x555555, wireframe: true });
        plane = new THREE.Mesh(geometry, material);
        //plane.rotation.x = -0.7;
        //mesh.scale.set(100, 100, 100);
        webGL.add(plane);
    } 

    //Line
    function initLine() {
        $(document).ready(function () {
            var url = "../WebGL/GetLoggingCurveData";
            $.getJSON(url, function (json) {
                var x, y, vertex;
                var verticesGR = [], verticesKTH = [], verticesSP = [], verticesCAL = [], verticesC13 = [], verticesC24 = [];
                for (var i = 0; i < json.root.length; i++) {
                    //verticesGR
                    y = (-json.root[i].DEEP + 6000 + 500) * 15;
                    x = json.root[i].GR - 75;
                    vertex = new THREE.Vector3(x, y, 0);
                    verticesGR.push(vertex);
                    //verticesKTH
                    x = json.root[i].KTH - 75;
                    vertex = new THREE.Vector3(x, y, 0);
                    verticesKTH.push(vertex);
                    //verticesSP
                    //                    x = json.root[i].SP;
                    //                    vertex = new THREE.Vector3(x, y, 0);
                    //                    verticesSP.push(vertex);
                    //verticesCAL
                    x = json.root[i].CAL;
                    vertex = new THREE.Vector3(x, y, 0);
                    verticesCAL.push(vertex);
                    //verticesC13
                    x = json.root[i].C13;
                    vertex = new THREE.Vector3(x, y, 0);
                    verticesC13.push(vertex);
                    //verticesC24
                    x = json.root[i].C24;
                    vertex = new THREE.Vector3(x, y, 0);
                    verticesC24.push(vertex);
                }
                //drawGR
                createLine(verticesGR);
                createLine(verticesKTH);
                //createLine(verticesSP);
                //createLine(verticesCAL);
                //createLine(verticesC13);
                //createLine(verticesC24);
            });
        });
    }
    function createLine(vertices) {
        var geometry = new THREE.Geometry();
        geometry.vertices = vertices;
        var material = createLineMaterial(geometry);
        var line = new THREE.Line(geometry, material);
        webGL.add(line);


        //        var geometry = new THREE.Geometry();
        //        var colors = [];
        //        var pts = [];
        //        pts.push(new THREE.Vector2(0, 0));

        //        for (var i = 0; i < json.root.length; i++) {
        //            var y = -json.root[i].DEEP + 6000 + 500;
        //            var x = json.root[i].VALUE;
        //            var vertex = new THREE.Vector3(x, y, 0);
        //            geometry.vertices.push(vertex);
        //            pts.push(new THREE.Vector2(x, y));

        //            colors[i] = new THREE.Color(0xff5500);
        //            //colors[i].setHSV(0.6, (200 + y) / 400, 1.0);
        //            geometry.colors = colors;
        //        }     
        //shape
        //                var parent = new THREE.Object3D();
        //                var shape = new THREE.Shape(pts);
        //                var geometry = new THREE.ShapeGeometry(shape);
        //                var mesh = THREE.SceneUtils.createMultiMaterialObject(geometry, [new THREE.MeshLambertMaterial({ color: color }), new THREE.MeshBasicMaterial({ color: color, wireframe: true, transparent: true })]);
        //                mesh.position.set(20, 0, 0);
        //                parent.add(mesh);
        //                scene.add(mesh); 
    }
    //material
    function createLineMaterial() {
        var color = Math.random() * 0x808008 + 0x808080;
        material = new THREE.LineBasicMaterial({
            color: color, linewidth: 10, transparent: true
        });
        return material;
    }
    function createLineMaterial2(geometry) {
        var vertexShader = document.getElementById('vertexShader').textContent;
        var fragmentShader = document.getElementById('fragmentShader').textContent;

        var attributesQuads = { center: { type: 'v4', boundTo: 'faceVertices', value: []} };
        var valuesQuads = attributesQuads.center.value;

        setupAttributes(geometry, valuesQuads);

        var materialQuads = new THREE.ShaderMaterial({ uniforms: {}, attributes: attributesQuads, vertexShader: vertexShader, fragmentShader: fragmentShader });
        return materialQuads;
    }
    function setupAttributes(geometry, values) {
        for (var f = 0; f < geometry.faces.length; f++) {
            var face = geometry.faces[f];
            if (face instanceof THREE.Face3) {
                values[f] = [new THREE.Vector4(1, 0, 0, 0), new THREE.Vector4(0, 1, 0, 0), new THREE.Vector4(0, 0, 1, 0)];
            } else {
                values[f] = [new THREE.Vector4(1, 0, 0, 1), new THREE.Vector4(1, 1, 0, 1), new THREE.Vector4(0, 1, 0, 1), new THREE.Vector4(0, 0, 0, 1)];
            }
        }
    } 
    return {
        initParent: initParent
    };
});

