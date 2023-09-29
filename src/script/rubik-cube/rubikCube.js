import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { RubikPiece } from './rubikPiece';

export class RubikCube {
    constructor() {
        this._cube = new THREE.Group();
        this._pieces = [];
        this._algorithmSecuence = [];
        this._enabledAnimation = true;
        this._speedAnimation = 200; //Velociad de la animación
        this._animationDelay = 50;

        this.createPiece();
        this.addPieces();
        //this.createControlsCube(); //controles con telado

        const animate = () => {
            TWEEN.update();
            requestAnimationFrame(animate);
        }
        animate();
    }

    createPiece() {
        const positions = [1, 0, -1];
        for (let x of positions) {
            for (let y of positions) {
                for (let z of positions) {
                    if (x === 0 && y === 0 && z === 0) continue;
                    this._pieces.push(new RubikPiece(x, y, z));
                }
            }
        }
    }
    addPieces() {
        this._pieces.forEach(element => {
            this._cube.add(element.piece);
        })
    }
    createControlsCube() {
        const onKeyDown = (event) => {
            if (event.code === 'KeyP') {
                this._prima *= -1;
            }
            if (event.code === 'KeyF') {
                this._pieces.forEach((piece) => {
                    if (piece.piece.position.z === 1) {
                        this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 0, -1 * this._prima));
                    }
                })
            }
            if (event.code === 'KeyB') {
                this._pieces.forEach((piece) => {
                    if (piece.piece.position.z === -1) {
                        this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 0, -1 * this._prima));
                    }
                })
            }
            if (event.code === 'KeyR') {
                this._pieces.forEach((piece) => {
                    if (piece.piece.position.x === 1) {
                        this.rotateFace(piece.piece, angle, new THREE.Vector3(-1 * this._prima, 0, 0));
                    }
                })
            }
            if (event.code === 'KeyL') {
                this._pieces.forEach((piece) => {
                    if (piece.piece.position.x === -1) {
                        this.rotateFace(piece.piece, angle, new THREE.Vector3(1 * this._prima, 0, 0));
                    }
                })
            }
            if (event.code === 'KeyU') {
                this._pieces.forEach((piece) => {
                    if (piece.piece.position.y === 1) {
                        this.rotateFace(piece.piece, angle, new THREE.Vector3(0, -1 * this._prima, 0));
                    }
                })
            }
            if (event.code === 'KeyD') {
                this._pieces.forEach((piece) => {
                    if (piece.piece.position.y === -1) {
                        this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 1 * this._prima, 0));
                    }
                })
            }
        }
        document.addEventListener('keydown', onKeyDown, false);
    }
    rotateFace(piece, angle, vector) {
        const start = { rotation: 0 };
        const preview = { rotation: 0 };
        const end = { rotation: Math.PI / (1 * angle) };

        const tween = new TWEEN.Tween(start)
            .to(end, this._speedAnimation * this._enabledAnimation)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(({ rotation }) => {

                piece.position.applyAxisAngle(vector, rotation - preview.rotation);
                piece.rotateOnWorldAxis(vector, rotation - preview.rotation);
                preview.rotation = rotation;
            })
            .onComplete(() => {
                this.adjustXYZPosition(piece);
            })
        tween.start();
    }
    adjustXYZPosition(piece) {
        const x = piece.position.x, y = piece.position.y, z = piece.position.z;
        piece.position.x = parseFloat(x.toFixed(0));
        piece.position.y = parseFloat(y.toFixed(0));
        piece.position.z = parseFloat(z.toFixed(0));
    }
    rotateTarget(character) {
        const firstcharacter = character[0];
        const direction = character[1] === "'" ? 1 : -1;
        const angle = character[1] === "2" ? 1 : 2;
        this._pieces.forEach((piece) => {
            const position = piece.piece.position;

            switch (firstcharacter) {
                case "F":
                    if (position.z === 1) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 0, direction));
                    break;
                case "B":
                    if (position.z === -1) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 0, -direction));
                    break;
                case "R":
                    if (position.x === 1) this.rotateFace(piece.piece, angle, new THREE.Vector3(direction, 0, 0));
                    break;
                case "L":
                    if (position.x === -1) this.rotateFace(piece.piece, angle, new THREE.Vector3(-direction, 0, 0));
                    break;
                case "U":
                    if (position.y === 1) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, direction, 0));
                    break;
                case "D":
                    if (position.y === -1) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, -direction, 0));
                    break;
                case "M":
                    if (position.x === 0) this.rotateFace(piece.piece, angle, new THREE.Vector3(-direction, 0, 0));
                    break;
                case "E":
                    if (position.y === 0) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, -direction, 0));
                    break;
                case "S":
                    if (position.z === 0) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 0, direction));
                    break;
                case "u":
                    if (position.y !== -1) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, direction, 0));
                    break;
                case "d":
                    if (position.y !== 1) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, -direction, 0));
                    break;
                case "r":
                    if (position.x !== -1) this.rotateFace(piece.piece, angle, new THREE.Vector3(direction, 0, 0));
                    break;
                case "l":
                    if (position.x !== 1) this.rotateFace(piece.piece, angle, new THREE.Vector3(-direction, 0, 0));
                    break;
                case "f":
                    if (position.z !== -1) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 0, direction));
                    break;
                case "b":
                    if (position.z !== 1) this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 0, -direction));
                    break;
                case "X": case "x":
                    this.rotateFace(piece.piece, angle, new THREE.Vector3(direction, 0, 0));
                    break;
                case "Y": case "y":
                    this.rotateFace(piece.piece, angle, new THREE.Vector3(0, direction, 0));
                    break;
                case "Z": case "z":
                    this.rotateFace(piece.piece, angle, new THREE.Vector3(0, 0, direction));
                    break;
            }
        });
    }
    recursive() {
        if (this._algorithmSecuence.length >= 1) {
            this.rotateTarget(this._algorithmSecuence[0]);
            setTimeout(() => {
                this._algorithmSecuence.shift();
                this.recursive();
            }, (this._speedAnimation + this._animationDelay) * this._enabledAnimation);
        }
    }
    secuence(character) {
        this._algorithmSecuence.push(character);
        if (this._algorithmSecuence.length === 1) this.recursive();
    }
    configure(string = []) {
        string.forEach(varlue => {
            this.secuence(varlue)
        });
    }

    get cube() {
        return this._cube;
    }
    get pieces() {
        return this._pieces;
    }
}