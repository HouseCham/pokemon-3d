import { AmbientLight, DirectionalLight, HemisphereLight, Scene } from "three";

export class Lights {
    constructor(scene: Scene) {
        scene.add(new AmbientLight(0xffffff, 0.8));
        scene.add(new HemisphereLight(0xffffbb, 0.8));

        const sun = new DirectionalLight(0xffffff, 0.5);
        sun.position.set(20, 20, 5);
        scene.add(sun);
    }
};