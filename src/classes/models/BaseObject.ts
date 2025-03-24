import { AnimationMixer, Clock, Group, Scene } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
/**
 * Abstract class representing a base 3D object
 * @abstract
 */
export abstract class BaseObject {
    protected object: Group = new Group();
    protected counter: number = 0;
    protected clock: Clock;
    private useNativeAnimation: boolean = false;
    protected animation: AnimationMixer | undefined;

    constructor(modelSrc: string, scene: Scene, loader: GLTFLoader, useNativeAnimation: boolean = false) {
        this.useNativeAnimation = useNativeAnimation;
        this.clock = new Clock();
        loader.load(
            modelSrc,
            (gltf) => {
                this.object = gltf.scene;
                this.setPosition();
                if (this.useNativeAnimation) {
                    this.animation = new AnimationMixer(this.object);
    
                    // Check if the glTF file contains animations
                    if (gltf.animations && gltf.animations.length > 0) {
                        // Play the first animation found within the glTF file loaded
                        const action = this.animation.clipAction(gltf.animations[0]);
                        if (action) action.play();
                    }
                }
                scene.add(this.object);

                this.animate();
            },
        )
        this.animate();
    };
    /**
     * Set the position of the object
     * @abstract
     * @returns {void}
     * @description This method is called to set the position of the object in the scene.
     */
    protected abstract setPosition(): void;
    /**
     * Animate the object
     * @abstract
     * @returns {void}
     * @description This method is called in a loop to animate the object.
     */
    protected abstract animate(): void;
}