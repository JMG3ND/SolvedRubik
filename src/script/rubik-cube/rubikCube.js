import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { RubikPiece } from './rubikPiece';

export class RubikCube {
    constructor(oll = false, f2l = false) {
        this._cube = new THREE.Group();
        this._pieces = [];
        this._algorithmSecuence = [];
        this._enabledAnimation = true;
        this._speedAnimation = 200; //Velociad de la animación
        this._resolveFn;
        this._cantPiece = 0;
        this._compareCantPiece = 0;
        this._movements = [
            "F", "F'", "F2", "B", "B'", "B2", "R", "R'", "R2", "L", "L'", "L2",
            "U", "U'", "U2", "D", "D'", "D2", "M", "M'", "M2", "E", "E'", "E2",
            "S", "S'", "S2", "r", "r'", "r2", "l", "l'", "l2", "u", "u'", "u2",
            "d", "d'", "d2", "f", "f'", "f2", "x", "x'", "x2", "X", "X'", "X2",
            "Y", "Y'", "Y2", "y", "y'", "y2", "Z", "Z'", "Z2", "z", "z'", "z2",
        ];
        this._oll = oll;
        this._f2l = f2l;

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
                    this._pieces.push(new RubikPiece(x, y, z, this._oll, this._f2l));
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
            this.secuence(event.key);
        }
        document.addEventListener('keydown', onKeyDown, false);
    }
    rotatePiece(piece, angle, vector) {
        const start = { rotation: 0 };
        const preview = { rotation: 0 };
        const end = { rotation: Math.PI / (1 * angle) };
        this._cantPiece++;

        new TWEEN.Tween(start)
            .to(end, this._speedAnimation * this._enabledAnimation)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(({ rotation }) => {
                piece.position.applyAxisAngle(vector, rotation - preview.rotation);
                piece.rotateOnWorldAxis(vector, rotation - preview.rotation);
                preview.rotation = rotation;
            })
            .onComplete(() => {
                (async () => {
                    await this.adjustXYZPosition(piece);
                    this._compareCantPiece++;
                    if (this._compareCantPiece == this._cantPiece) {
                        this._resolveFn();
                        this._resolveFn = undefined;
                        this._compareCantPiece = 0;
                        this._cantPiece = 0;
                    }
                })();
            })
            .start();
    }
    async adjustXYZPosition(piece) {
        return new Promise(resolve => {
            const x = piece.position.x, y = piece.position.y, z = piece.position.z;
            piece.position.x = parseFloat(x.toFixed(0));
            piece.position.y = parseFloat(y.toFixed(0));
            piece.position.z = parseFloat(z.toFixed(0));
            resolve();
        })
    }
    async rotateFace(character) {
        return new Promise((resolve) => {
            this._resolveFn = resolve;
            const firstcharacter = character[0];
            const direction = character[1] === "'" ? 1 : -1;
            const angle = character[1] === "2" ? 1 : 2;
            this._pieces.forEach(piece => {
                const position = piece.piece.position;
                switch (firstcharacter) {
                    case "F":
                        if (position.z === 1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, 0, direction));
                        break;
                    case "B":
                        if (position.z === -1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, 0, -direction));
                        break;
                    case "R":
                        if (position.x === 1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(direction, 0, 0));
                        break;
                    case "L":
                        if (position.x === -1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(-direction, 0, 0));
                        break;
                    case "U":
                        if (position.y === 1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, direction, 0));
                        break;
                    case "D":
                        if (position.y === -1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, -direction, 0));
                        break;
                    case "M":
                        if (position.x === 0) this.rotatePiece(piece.piece, angle, new THREE.Vector3(-direction, 0, 0));
                        break;
                    case "E":
                        if (position.y === 0) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, -direction, 0));
                        break;
                    case "S":
                        if (position.z === 0) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, 0, direction));
                        break;
                    case "u":
                        if (position.y !== -1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, direction, 0));
                        break;
                    case "d":
                        if (position.y !== 1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, -direction, 0));
                        break;
                    case "r":
                        if (position.x !== -1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(direction, 0, 0));
                        break;
                    case "l":
                        if (position.x !== 1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(-direction, 0, 0));
                        break;
                    case "f":
                        if (position.z !== -1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, 0, direction));
                        break;
                    case "b":
                        if (position.z !== 1) this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, 0, -direction));
                        break;
                    case "X": case "x":
                        this.rotatePiece(piece.piece, angle, new THREE.Vector3(direction, 0, 0));
                        break;
                    case "Y": case "y":
                        this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, direction, 0));
                        break;
                    case "Z": case "z":
                        this.rotatePiece(piece.piece, angle, new THREE.Vector3(0, 0, direction));
                        break;
                }
            });
        })
    }
    async recursive() {
        if (this._algorithmSecuence.length >= 1) {
            await this.rotateFace(this._algorithmSecuence[0]);
            this._algorithmSecuence.shift();
            this.recursive();
        }
    }
    secuence(character) {
        this._enabledAnimation = true;
        try {
            if (this._movements.includes(character) && character) {
                this._algorithmSecuence.push(character);
                if (this._algorithmSecuence.length === 1) this.recursive();
            } else {
                throw new Error((character ? character : '""') + " no es un movimiento válido");
            }
        } catch (e) {
            console.error("Error al insertar secuencia", e);
        }
    }
    configure(array = []) {
        this._enabledAnimation = false;
        this._algorithmSecuence = array;
        this.recursive();
    }

    get cube() {
        return this._cube;
    }
    get pieces() {
        return this._pieces;
    }
}