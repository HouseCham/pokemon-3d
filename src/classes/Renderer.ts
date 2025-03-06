import { WebGLRenderer } from "three";
import Scene from "@/classes/Scene";

export default class Renderer extends WebGLRenderer {
    constructor(canvasId: string) {
        super({
            antialias: true,
            canvas: document.getElementById(canvasId) as HTMLCanvasElement
        });
        this.configureRenderer();
        new Scene(this);
    }
    /**
     * Configures the renderer.
     * @returns {void}
     */
    private configureRenderer(): void {
        this.setSize(window.innerWidth, window.innerHeight);
        window.addEventListener('resize', () => {
            this.setSize(window.innerWidth, window.innerHeight);
        });
    };
}