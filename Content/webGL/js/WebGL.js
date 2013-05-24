// WebGL.js
define(function () {
    function WebGL() {
        var material, uniforms, attributes;
        var container, stats;
        var parent;
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        this.view_angle = 45;
        this.aspect = this.w / this.h;
        this.near = 0.1;
        this.far = 10000;
        this.color = Math.random() * 0x808008 + 0x808080;


        this.controls = null;
        this.renderer = null;
        this.camera = null;
        this.scene = null;
    }

    WebGL.prototype = {
        init: function () {
            //this.renderer  
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setClearColor(new THREE.Color(0, 1));
            this.renderer.setSize(this.w, this.h);
            //var this.renderer = new THREE.WebGLRenderer();   
            //var externalCanvas = document.getElementById('renderCanvas');
            //this.renderer = new THREE.WebGLRenderer({ 'canvas': container, 'antialias': true });

            //conrainer
            container = document.createElement('div');
            document.body.appendChild(container);
            container.appendChild(this.renderer.domElement);
            //container = document.getElementById('container');
            //container.appendChild(this.renderer.domElement);

            //this.camera
            this.camera = new THREE.PerspectiveCamera(this.view_angle, this.aspect, this.near, this.far);
            this.camera.position.z = 500;
            //this.camera.target = new THREE.Vector3(0, 150, 0); 

            //this.scene
            this.scene = new THREE.Scene();

            //object
            parent = new THREE.Object3D();
            this.initParent();
            this.scene.add(parent);
            this.initAxis();

            //light
            //must set light when use material
            //PointLight
            //var light = new THREE.PointLight(0xFFFFFF);
            //light.position.x = 10;
            //light.position.y = 50;
            //light.position.z = 130;
            //this.scene.add(light);

            //DirectionalLight
            //        var light = new THREE.DirectionalLight(0xff0000, 1.0, 0);  //设置平行光源     
            //        light.position.set(200, 200, 200);      //设置光源向量
            //        this.scene.add(light);  // 追加光源到场景 

            //AmbientLight 环境光
            //        var ambientLight = new THREE.AmbientLight(0x606060);
            //        this.scene.add(ambientLight);

            //light
            //must set light when use material
            //            var light = new THREE.PointLight(0xFFFFFF);
            //            light.position.x = 10;
            //            light.position.y = 50;
            //            light.position.z = 130;
            //            this.scene.add(light);

            var light = new THREE.DirectionalLight(0xefefff, 2);
            light.position.set(1, 1, 1).normalize();
            this.scene.add(light);

            var light = new THREE.DirectionalLight(0xffefef, 2);
            light.position.set(-1, -1, -1).normalize();
            this.scene.add(light);

            //stats
            stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            stats.domElement.style.zIndex = 100;
            container.appendChild(stats.domElement);

            //window resize event   
            //window.addEventListener('resize', this.onWindowResize(this), false);

            //register mouse event
            //document.addEventListener('mousewheel', this.onDocumentMouseScroll(this), false);

            //mouse control event
            this.controls = new THREE.OrbitControls(this.camera);
            //this.controls.addEventListener('change', this.render);
        },

        onDocumentMouseScroll: function (t) {
            //alert(event.wheelDelta); 
            //        this.camera.position.x = event.x;
            //        this.camera.position.y = event.y;
            t.camera.position.z -= event.wheelDelta / 2;
            t.renderer.render(this.scene, this.camera);
        },

        initAxis: function () {
            var axis = new THREE.AxisHelper();
            axis.position.set(this.w / 2 - 400, this.h / 2 - 200, 0);
            axis.scale.x = 100; //red 
            axis.scale.y = 100; //green
            axis.scale.z = 100; //blue
            this.scene.add(axis);
        },
        initParent: function () {
            //alert("webGL.initParent");
        },

        onWindowResize: function (t) {
            t.camera.aspect = window.innerWidth / window.innerHeight;
            t.camera.updateProjectionMatrix();
            t.renderer.setSize(window.innerWidth, window.innerHeight);
            this.render();
        },
        render: function () {
            //stats.update();
            this.controls.update()
            this.renderer.render(this.scene, this.camera);
        }
    };

    return WebGL;
});