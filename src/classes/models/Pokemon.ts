import { Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Scene } from "@/classes";
import { BaseObject } from "./BaseObject";

export type PositionStrategy = (object: Object3D) => void;

/**
 * Class representing a Pokemon
 * @extends BaseObject
 * @public
 */
export class Pokemon extends BaseObject {
    private readonly positionStrategy: PositionStrategy;

    constructor(modelSrc: string, scene: Scene, loader: GLTFLoader, positionStrategy: PositionStrategy) {
        super(modelSrc, scene, loader);
        this.positionStrategy = positionStrategy;
    }
    /**
     * Set the position of the Logo object
     */
    protected setPosition() {
        this.positionStrategy(this.object);
    };
    /**
     * Animate the pokemon object
     */
    protected animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.counter += 0.01;
        if (this.object) {
            this.object.rotation.y = Math.sin(this.counter) / 7 + 1.2
        }
    }
}