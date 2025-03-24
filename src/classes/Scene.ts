import {
    Scene as ThreeScene,
    Object3D
} from 'three';
import { Renderer, Camera, Skybox, Lights, Loader } from '@/classes';
import { Logo, Pokeball } from '@/classes/models';
import { Pokemon, PositionStrategy } from '@/classes/models/Pokemon';

export class Scene extends ThreeScene {
    private camera: Camera;

    constructor(renderer: Renderer) {
        super();

        // create loader
        const loader = new Loader();
        // create camera
        this.camera = new Camera();
        //create skybox
        new Skybox('images/custom-sky.png', this);
        // create light
        new Lights(this);
        // create logo
        new Logo(this, loader);
        new Pokeball(this, loader);

        // Entei pokemon
        const ENTEIPositionStrategy: PositionStrategy = (object: Object3D) => {
            object.translateY(-3);
            object.translateX(-11);
            object.translateZ(14);
            // rotation
            object.rotateY(Math.PI / 2);
            object.scale.set(0.65, 0.65, 0.65);
        };
        new Pokemon('/3d/entei.glb', this, loader, ENTEIPositionStrategy);

        // Groudon pokemon
        const GROUDONPositionStrategy: PositionStrategy = (object: Object3D) => {
            object.translateY(-2);
            object.translateX(-9);
            object.translateZ(11.5);
            // rotation
            object.rotateY(Math.PI / 6);
        };
        new Pokemon('/3d/groudon.glb', this, loader, GROUDONPositionStrategy);

        // Charizard pokemon
        const CHARIZARDPositionStrategy: PositionStrategy = (object: Object3D) => {
            object.translateY(-2);
            object.translateX(-10);
            object.translateZ(16.5);
            // rotation
            object.rotateY(Math.PI / 2);
            object.scale.set(0.8, 0.8, 0.8);
        };
        new Pokemon('/3d/charizard.glb', this, loader, CHARIZARDPositionStrategy);

        // Zekrom pokemon
        const ZEKROMPositionStrategy: PositionStrategy = (object: Object3D) => {
            if (window.innerWidth > 900) {
                const ratio = (window.innerWidth - 900) * -1 / 460 + 0.4;
                object.translateZ(36.6);
                object.translateY(0.5);
                object.translateX(ratio);
            } else {
                object.translateZ(38.5);
                object.translateY(1.8);
                object.translateX(0.4);
            }
        };
        new Pokemon('/3d/zekrom.glb', this, loader, ZEKROMPositionStrategy);

        this.animate(renderer);
    }

    private animate(renderer: Renderer) {
        renderer.render(this, this.camera);
        requestAnimationFrame(this.animate.bind(this, renderer));
    };
}