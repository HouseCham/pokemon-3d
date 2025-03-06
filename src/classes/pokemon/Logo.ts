import { GLTFLoader } from "three/examples/jsm/Addons.js";
import Scene from "@/classes/Scene";
import { Group } from "three";

export default class Logo {
    private object: Group = new Group();
    constructor(scene: Scene, loader: GLTFLoader) {
        loader.load(
            "/3d/logo.glb",
            (gltf) => {
                this.object = gltf.scene;
                scene.add(this.object);
            },
        )
    }
}