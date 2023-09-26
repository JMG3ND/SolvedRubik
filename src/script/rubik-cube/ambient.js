import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class Ambient {
    constructor(canvas) {
        this._scene;
        this._camera;
        this._renderer;
        this._controls;

        this.createScene();
        this.createCamera(canvas);
        this.createRenderer(canvas);
        this.createControls();
    }

    createScene() {
        this._scene = new THREE.Scene();
        this._scene.background = new THREE.Color('#444654');
    }
    createCamera(canvas) {
        this._camera = new THREE.PerspectiveCamera(
            75,
            canvas.clientWidth / canvas.clientHeight,
            0.01,
            10
        );
        this._camera.position.z = 4;
        this._camera.position.y = 2.5;
        this._camera.position.x = 2.5;
        this._camera.lookAt(0, 0, 0);
    }
    resizeCamera(canvas) {
        this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this._camera.updateProjectionMatrix();
    }
    createRenderer(canvas) {
        this._renderer = new THREE.WebGLRenderer();
        this._renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        canvas.appendChild(this._renderer.domElement);
    }
    resizeRenderer(canvas) {
        this._renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
    createControls() {
        this._controls = new OrbitControls(this._camera, this._renderer.domElement);
        this._controls.enableZoom = false;
        this._controls.enablePan = false;
        this._controls.minAzimuthAngle = -Math.PI / 5;
        this._controls.maxAzimuthAngle = Math.PI / 5;
        this._controls.minPolarAngle = Math.PI / 3;
        this._controls.maxPolarAngle = Math.PI / 1.5;
        this._controls.update();
    }
    renderer() {
        this._renderer.render(this._scene, this._camera);
    }

    get scene() {
        return this._scene;
    }
}