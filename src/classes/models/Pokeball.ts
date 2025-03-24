import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Scene } from "@/classes";
import { BaseObject } from "./BaseObject";
/**
 * Class representing a Pokeball
 * @extends BaseObject
 * @public
 */
export class Pokeball extends BaseObject {
    constructor(scene: Scene, loader: GLTFLoader) {
        super("/3d/pokeball.glb", scene, loader, true);
    }
    /**
     * Set the position of the Pokeball object
     */
    protected setPosition() {
        if (window.innerWidth > 900) {
            // not a clue how this formula was found, but it works
            const ratio = (window.innerWidth - 900) * 8 / 460 + 14;
            this.object.translateY(-1);
            this.object.translateX(ratio);
            this.object.translateZ(-23);
            this.object.rotateY(-Math.PI / 1.5);
        } else {
            this.object.translateY(5.8);
            this.object.translateZ(-20);
            this.object.rotateY(-Math.PI / 2);
        }
        this.object.scale.set(2, 2, 2);
        this.object.rotateZ(Math.PI / 20);
    }

    /**
     * Animate the pokemon object
     */
    protected animate() {
        requestAnimationFrame(this.animate.bind(this));

        const delta = this.clock.getDelta();
        if (this.animation) {
            this.animation.update(delta);
        }
    }
}