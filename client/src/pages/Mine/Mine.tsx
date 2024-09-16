import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

import LBar from '@/components/mine/LBar/Lbar';
import threedmodel from '../../assets/mine.glb';

// import {  } from "@";

import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import MySelectBox from '@/components/mine/MySelectbox/MySelectbox';
import { Button } from '@/components/ui/button';

// import './bot.css'
// import builderHat from './assets/builder-hat.png'

const { theme, style } = buildTheme({
  themeName: "eggplant",
  themeColor: "#634433",
});

//Add your Client ID here ⬇️
const clientId = "75273c02-6b44-4be7-8126-9cee0d1f2cc6";
const config = {
  composerPlaceholder: "What would you like to know?",
  botName: "MineGuard",
  // botAvatar: builderHat,
  botDescription:
    "MineGuard is an advanced chatbot tailored for coal mine supervisors to streamline operations, monitor safety, and manage alerts efficiently.",
  email: {
    title: "randomEmail@boptress.com",
    link: "mailto:randomEmail@boptress.com",
  },
  phone: {
    title: "555-555-5555",
    link: "tel:555-555-5555",
  },
  website: {
    title: "https://botpress.com",
    link: "https://botpress.com",
  },
  termsOfService: {
    title: "Terms of service",
    link: "https://botpress.com/terms",
  },
  privacyPolicy: {
    title: "Privacy policy",
    link: "https://botpress.com/privacy",
  },
};

const ChatBot = () => {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
      <div className='w-full h-full'>
        <style>{style}</style>
        <WebchatProvider
          key={JSON.stringify(config)}
          theme={theme}
          //Add the configuration to the Webchat Provider ⬇️
          configuration={config}
          client={client}
        >
          <Webchat />
        </WebchatProvider>
      </div>

  );
}


const Mine = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [reaction, setReaction] = useState(null);
  const [power, setPower] = useState(null);

  const reactionList = [
    { text: 'Explosion', 'value': 'Explosion' },
    { text: 'Flood', 'value': 'Flood' },
    { text: 'Powercut', 'value': 'Powercut' },
    { text: 'Sand-slide', 'value': 'Sand-slide' },
    { text: 'Gas Leakage', 'value': 'Gas Leakage' },
  ]

  const powerList = [
    { text: 'High', 'value': 'High' },
    { text: 'Medium', 'value': 'Medium' },
    { text: 'Low', 'value': 'Low' },
  ]

  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      (window.innerWidth/2) / (window.innerHeight - 300),
      0.1,
      1000
    );
    camera.position.set(0, 1, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth/2, window.innerHeight - 300);
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

        const dotGeometry = new THREE.SphereGeometry(15-6, 32, 32);
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

  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div className="w-full h-screen overflow-hidden">
      <LBar />
      <div style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '60% 40%',
        placeItems: 'center'
      }} className="my-14 ml-14 mr-2 w-full h-full">
        <div style={{cursor: 'grab'}} className='w-full'  ref={sceneRef} id="map-canvas"></div>
        <div className='min-w-[50%] h-full p-1'>
          <ChatBot />
        </div>
        <div className='w-full h-full p-1'>
          <Tabs className='min-h-full min-w-full' defaultValue='production'>
            <div className='mx-auto flex justify-center items-center'>
              <TabsList>
                <TabsTrigger value='production'>Production</TabsTrigger>
                <TabsTrigger value='safety'>Safety</TabsTrigger>
              </TabsList>
            </div>
            <div className='flex flex-col items-center justify-center h-[180px]'>
              <TabsContent value='production'>
                <div className='w-[100%] h-[100%]'>
                  <Card>
                    <CardHeader>
                      <h1 className='text-center'>Coal Production Estimate</h1>
                    </CardHeader>
                    <CardContent>
                      <Slider onValueChange={(e) => setSliderValue(e[0])
                      } max={100} step={1} />
                      <p className='text-slate-700 text-sm'>In metric Tonnes</p>
                      <br />
                      <p className='text-sm font-medium'>{sliderValue} TON</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value='safety'>
                <div className='w-[100%] h-[100%]'>
                  <Card className='min-width-[300px]'>
                    <CardHeader>
                      Select hazard type and Level
                    </CardHeader>
                    <CardContent>
                      <div className='flex justify-evenly min-w-[400px]'>
                        <MySelectBox
                          placeholder={'Hazard Type'}
                          content={reactionList}
                          selectedValue={reaction}
                          setSelectValue={setReaction}
                        />
                        <br />
                        <MySelectBox
                          placeholder={'Level'}
                          content={powerList}
                          selectedValue={power}
                          setSelectValue={setPower}
                        />
                      </div>
                      <Button className='block my-1 mx-auto'>Submit</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

            </div>
          </Tabs>
        </div>
        <div>
          Output
        </div>
      </div>
    </div>
  );
};

export default Mine;
