import { PerspectiveCamera } from "three";

export default class Camera extends PerspectiveCamera {
    private container: HTMLElement;
    constructor() {
        super(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.container = document.getElementById('container')!;
        this.container.onscroll = this.moveCamera.bind(this);
        this.position.z = 10;
        // this.position.x = 100;
        this.position.y = 0;
    };

    private moveCamera = () => {
        const scrollTop = this.container.scrollTop;
        const scrollHeight = this.container.scrollHeight;
        const offsetHeight = this.container.offsetHeight;

        const scrollPercentage = scrollTop * 100 / (scrollHeight - offsetHeight);
        this.position.z = scrollPercentage * 0.35;
        this.position.x = scrollPercentage * 0.025;
        this.rotation.y = scrollPercentage * 0.025;
        this.position.y = scrollPercentage * 0.025;
    };
}