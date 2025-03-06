import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Scene } from "@/classes";
import { BaseObject } from "./BaseObject";
/**
 * Class representing a Logo
 * @extends BaseObject
 * @public
 */
export class Logo extends BaseObject {
    constructor(scene: Scene, loader: GLTFLoader) {
        super("/3d/logo.glb", scene, loader);
    }
    /**
     * Set the position of the Logo object
     */
    protected setPosition() {
        this.object.translateZ(-10);
        if (window.innerWidth > 900) {
            // not a clue how this formula was found, but it works
            const ratio = (window.innerWidth - 900) * 3.2 / 460 + 5.6;
            this.object.translateY(4);
            this.object.translateX(ratio);
        } else {
            this.object.translateY(7);
        }
    };
}