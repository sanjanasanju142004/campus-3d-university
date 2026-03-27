import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import Building from './Building';
import InfoPanel from './InfoPanel';

// Camera & Controls manager for smooth zoom transitions
const ControlsManager = ({ selectedBuilding }) => {
  const controlsRef = useRef();

  useFrame((state) => {
    if (controlsRef.current) {
      if (selectedBuilding) {
        const target = new THREE.Vector3(selectedBuilding.position[0], 0, selectedBuilding.position[2]);
        controlsRef.current.target.lerp(target, 0.05);

        const cameraTarget = new THREE.Vector3(
          selectedBuilding.position[0] + 6,
          selectedBuilding.position[1] + 6,
          selectedBuilding.position[2] + 10
        );
        state.camera.position.lerp(cameraTarget, 0.05);
      } else {
        const defaultTarget = new THREE.Vector3(0, 0, 0);
        controlsRef.current.target.lerp(defaultTarget, 0.05);

        const defaultCameraPos = new THREE.Vector3(0, 15, 25);
        state.camera.position.lerp(defaultCameraPos, 0.05);
      }
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls 
      ref={controlsRef}
      makeDefault 
      minPolarAngle={Math.PI / 6} 
      maxPolarAngle={Math.PI / 2 - 0.1}
      minDistance={5}
      maxDistance={40}
      enablePan={false}
    />
  );
};

const buildingsData = [
  {
    name: "Library",
    description: "A state-of-the-art facility housing over 2 million volumes, quiet study zones, and digital archives.",
    position: [-6, 2, -6],
    size: [4, 4, 4],
    color: "#475569",
    route: "/academics"
  },
  {
    name: "Labs",
    description: "Equipped with robotics, AI supercomputing access, and 3D printing farms for engineering students.",
    position: [6, 3, -6],
    size: [4, 6, 4],
    color: "#334155",
    route: "/departments"
  },
  {
    name: "Auditorium",
    description: "A 2,000-seat multi-purpose hall for guest lectures, cultural fests, and global conferences.",
    position: [-6, 1.5, 6],
    size: [6, 3, 4],
    color: "#1e293b",
    route: "/campus-life"
  },
  {
    name: "Admin Block",
    description: "The administrative heart of the campus. Houses student affairs, admissions, and financial aid.",
    position: [6, 2.5, 6],
    size: [4, 5, 4],
    color: "#0f172a",
    route: "/admissions"
  }
];

const Scene = ({ onNavigate }) => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const glConfig = { antialias: true, toneMapping: THREE.ACESFilmicToneMapping };

  return (
    <div className="w-full h-[700px] relative rounded-3xl overflow-hidden shadow-2xl bg-[#020617] border border-white/5">
      <Canvas shadows camera={{ position: [0, 15, 25], fov: 45 }} gl={glConfig}>
        <color attach="background" args={['#020617']} />
        <fog attach="fog" args={['#020617', 20, 50]} />
        
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 20, 10]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        >
          <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
        </directionalLight>

        {/* Buildings Group */}
        <group>
          {buildingsData.map((bldg, idx) => (
            <Building
              key={idx}
              {...bldg}
              selected={selectedBuilding?.name === bldg.name}
              onClick={(data) => setSelectedBuilding(data)}
            />
          ))}
        </group>

        {/* Ground Plane */}
        <mesh 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, -0.1, 0]} 
          receiveShadow
          onClick={() => setSelectedBuilding(null)}
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#0b1121" roughness={1} metalness={0} />
        </mesh>
        
        {/* Decorative Grid */}
        <gridHelper args={[100, 100, '#1e293b', '#0f172a']} position={[0, -0.05, 0]} />

        {/* Soft Contact Shadows */}
        <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={40} blur={2} far={4} color="#000000" />
        
        <ControlsManager selectedBuilding={selectedBuilding} />
      </Canvas>
      
      {/* UI Panels Overlay */}
      <InfoPanel 
        selectedBuilding={selectedBuilding} 
        onClose={() => setSelectedBuilding(null)}
        onNavigate={onNavigate}
      />
      
      {/* Instructional HUD */}
      {!selectedBuilding && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-gray-300 text-sm font-medium pointer-events-none flex items-center shadow-lg whitespace-nowrap z-10">
          <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          Drag to rotate • Scroll to zoom • Click buildings to navigate
        </div>
      )}
    </div>
  );
};

export default Scene;
