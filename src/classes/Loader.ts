import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";

export default class Loader extends GLTFLoader {
    constructor() {
        super();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        dracoLoader.setDecoderConfig({ type: 'js' });
        this.setDRACOLoader(dracoLoader);
    }
}