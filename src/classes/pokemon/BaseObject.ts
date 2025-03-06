import { Group, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
/**
 * Abstract class representing a base 3D object
 * @abstract
 */
export default abstract class BaseObject {
    protected object: Group = new Group();
    constructor(modelSrc: string, scene: Scene, loader: GLTFLoader) {
        loader.load(
            modelSrc,
            (gltf) => {
                this.object = gltf.scene;
                this.setPosition();
                scene.add(this.object);
            },
        )
    };
    /**
     * Set the position of the object
     */
    protected abstract setPosition(): void;
}