import {
    Scene as ThreeScene
} from 'three';
import { Renderer, Camera, Skybox, Lights, Loader } from '@/classes';
import { Logo, Pokeball } from '@/classes/models';

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

        this.animate(renderer);
    }

    private animate(renderer: Renderer) {
        renderer.render(this, this.camera);
        requestAnimationFrame(this.animate.bind(this, renderer));
    };
}