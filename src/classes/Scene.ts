import { 
    Scene as ThreeScene
 } from 'three';
import Renderer from '@/classes/Renderer';
import Camera from '@/classes/Camera';
import Skybox from '@/classes/Skybox';
import Lights from '@/classes/Lights';

export default class Scene extends ThreeScene {
    private camera: Camera;
    
    constructor(renderer: Renderer) {
        super();
        this.camera = new Camera();

        //create skybox
        new Skybox('images/custom-sky.png', this);
        // create light
        new Lights(this);

        this.animate(renderer);
    }

    private animate(renderer: Renderer) {
        renderer.render(this, this.camera);
        requestAnimationFrame(this.animate.bind(this, renderer));
    };
}