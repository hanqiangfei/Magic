var Material = {
    get: function () {
        return initMaterial();
    }
}

function initMaterial() {
    var sprite = generateSprite();
    var texture = new THREE.Texture(sprite);
    texture.needsUpdate = true;
    var uniforms = {
        texture: { type: "t", value: 0, texture: texture }
    }
    var attributes = {
        size: { type: "t", value: [] },
        pcolor: { type: "c", value: [] }
    }
    var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        attributes: attributes,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,

        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true
    });

    return material;
}

//sprite
function generateSprite() {
    var canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(64, 64, 60, 0, Math.PI * 2, false);
    context.closePath();

    context.lineWidth = 0.5; //0.05
    context.stroke();
    context.restore();

    var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);

    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(200,200,200,1)');
    gradient.addColorStop(1, 'rgba(0,0,0,1)');

    context.fillStyle = gradient;
    context.fill();

    return canvas;
}