"use client";
import { 
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    Mesh,
    MeshBasicMaterial,
    BoxGeometry,
    SphereGeometry,
    TextureLoader,
    BackSide,
    MeshPhongMaterial,
    HemisphereLight,
    AmbientLight
 } from 'three';
import { useEffect } from "react";

const HomeComponent = () => {

    const renderScene = () => {
        const scene = new Scene();
        const renderer = new WebGLRenderer({
            antialias: true,
            canvas: document.getElementById('home-canvas') as HTMLCanvasElement
        });
        const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

        //set camera position
        camera.position.z = 6;

        //create cube
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: 0xffffff });
        const cube = new Mesh(geometry, material);
        scene.add(cube);

        //create sphere
        const skyGeometry = new SphereGeometry(360, 25, 25);
        const loader = new TextureLoader();
        const texture = loader.load('/images/custom-sky.png');
        const skyMaterial = new MeshPhongMaterial({ map: texture, side: BackSide });
        const skyBox = new Mesh(skyGeometry, skyMaterial);
        scene.add(skyBox);

        // create light
        scene.add(new AmbientLight(0xffffff, 0.8));
        scene.add(new HemisphereLight(0xffffbb, 0.8));

        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = 5;

        const animate = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01
            
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    };


    useEffect(() => {
        renderScene();
    }, []);
    return (
        <canvas id="home-canvas"></canvas>
    );
}

export default HomeComponent;