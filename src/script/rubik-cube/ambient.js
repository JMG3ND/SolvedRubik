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
            5,
            20
        );
        this._camera.position.z = 8;
        const resizeCamera = () => {
            this._camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this._camera.updateProjectionMatrix();
        }
        window.addEventListener('resize', resizeCamera);
    }
    createRenderer(canvas) {
        this._renderer = new THREE.WebGLRenderer();
        this._renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        canvas.appendChild(this._renderer.domElement);
        const resizeRenderer = () => {
            this._renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        }
        window.addEventListener('resize', resizeRenderer);
    }
    createControls() {
        this._controls = new OrbitControls(this._camera, this._renderer.domElement);
        this._controls.enableZoom = false;
        this._controls.enablePan = false;
        this._controls.update();
    }
    renderer() {
        this._renderer.render(this._scene, this._camera);
    }

    get scene() {
        return this._scene;
    }
}