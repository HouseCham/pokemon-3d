import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {
    constructor() {
        super(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.position.z = 6;
    }
}