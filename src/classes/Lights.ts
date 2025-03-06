import { AmbientLight, HemisphereLight, Scene } from "three";

export class Lights {
    constructor(scene: Scene) {
        scene.add(new AmbientLight(0xffffff, 0.8));
        scene.add(new HemisphereLight(0xffffbb, 0.8));
    }
};