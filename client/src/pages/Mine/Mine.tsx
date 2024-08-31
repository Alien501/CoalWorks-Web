import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

import LBar from '@/components/mine/LBar/Lbar';
import threedmodel from '../../assets/mine.glb';

const Mine = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;

    sceneRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.eanbleDamping = true;
    controls.enablePan = false;
    controls.minDistance = -100;
    controls.maxDistance = 100;
    controls.minPolarAngle = -360;
    controls.maxPolarAngle = 360;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 1, 0);
    controls.update();

    const loader = new GLTFLoader();
    loader.load(
      threedmodel,
      (gltf) => {
        scene.add(gltf.scene);

        const dotGeometry = new THREE.SphereGeometry(0.5, 32, 32);
        const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
        const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);

        dotMesh.position.set(10, -1, -5);
        scene.add(dotMesh);
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the model', error);
      }
    );

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.6);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      if (sceneRef.current) {
        sceneRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <LBar />
      <div style={{
        cursor: 'grab'
      }} className="my-11 ml-12 mr-2 bg-black w-full h-full">
        <div ref={sceneRef} id="map-canvas"></div>
      </div>
    </div>
  );
};

export default Mine;
