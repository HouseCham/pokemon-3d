import {
    Mesh,
    SphereGeometry,
    TextureLoader,
    BackSide,
    MeshPhongMaterial,
    Scene,
 } from 'three';

export class Skybox {
    constructor(texturePath: string, scene: Scene) {
        const skyGeometry = new SphereGeometry(360, 25, 25);
        const loader = new TextureLoader();
        const texture = loader.load(texturePath);
        const skyMaterial = new MeshPhongMaterial({ map: texture, side: BackSide });
        const skyBox = new Mesh(skyGeometry, skyMaterial);
        scene.add(skyBox);
    };
}