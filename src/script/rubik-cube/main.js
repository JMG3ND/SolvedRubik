import { Ambient } from './ambient.js';
import { RubikCube } from './rubikCube.js';

const ambient = new Ambient();
const rubikcube = new RubikCube();

ambient.scene.add(rubikcube.cube);

function animate() {
    requestAnimationFrame(animate);
    ambient.renderer();
}
animate();