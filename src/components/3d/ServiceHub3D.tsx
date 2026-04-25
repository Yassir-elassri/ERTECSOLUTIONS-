import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Html, Stars, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Zap, 
  Cpu, 
  Shield, 
  Tractor, 
  Sun, 
  Wind, 
  Lightbulb, 
  ShoppingBag,
  LucideIcon
} from 'lucide-react';
import * as random from 'maath/random/dist/maath-random.esm';

const serviceItems = [
  { id: 'construction', icon: Building2, color: '#F97316' },
  { id: 'electrical', icon: Zap, color: '#3B82F6' },
  { id: 'automation', icon: Cpu, color: '#10B981' },
  { id: 'security', icon: Shield, color: '#EF4444' },
  { id: 'telecom', icon: Tractor, color: '#8B5CF6' },
  { id: 'energy', icon: Sun, color: '#FBBF24' },
  { id: 'hvac', icon: Wind, color: '#06B6D4' },
  { id: 'lighting', icon: Lightbulb, color: '#EAB308' },
  { id: 'commerce', icon: ShoppingBag, color: '#EC4899' },
];

function ParticleBackground() {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 10 }) as Float32Array);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#F97316"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function ServiceNode({ item, index, total, onHover }: any) {
  const { t, i18n } = useTranslation();
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  
  const angle = (index / total) * Math.PI * 2;
  const radius = 4;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time + index) * 0.2;
    // Slow orbital rotation
    meshRef.current.rotation.y = time * 0.1;
  });

  const title = t(`services.${item.id}.title`);
  const isRTL = i18n.language === 'ar';

  return (
    <group 
      position={[x, 0, z]} 
      ref={meshRef}
      onPointerOver={() => {
        setHovered(true);
        onHover(item.id);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <boxGeometry args={[1, 1, 0.1]} />
          <meshStandardMaterial 
            color={hovered ? item.color : '#1e293b'} 
            metalness={0.8} 
            roughness={0.2}
            transparent
            opacity={0.8}
          />
          {/* Connector to center */}
          <lineBasicMaterial attach="material" color={item.color} transparent opacity={0.2} />
        </mesh>
        
        {/* Glow effect on hover */}
        {hovered && (
          <pointLight color={item.color} intensity={1} distance={3} />
        )}

        <Html 
          distanceFactor={10} 
          position={[0, -0.8, 0]} 
          center 
          className="pointer-events-none"
        >
          <div className={`flex flex-col items-center whitespace-nowrap transition-all duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}>
            <span 
              className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/50 px-2 py-1 rounded border border-white/10"
              style={{ color: hovered ? item.color : 'white' }}
            >
              {title}
            </span>
          </div>
        </Html>
      </Float>
    </group>
  );
}

function CentralHub() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#F97316" 
          wireframe 
          emissive="#F97316" 
          emissiveIntensity={2} 
        />
      </mesh>
      <pointLight color="#F97316" intensity={3} distance={10} />
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#F97316" emissive="#F97316" emissiveIntensity={5} />
      </mesh>
    </group>
  );
}

export default function ServiceHub3D({ onNodeHover }: any) {
  return (
    <>
      <CentralHub />
      <ParticleBackground />
      <group>
        {serviceItems.map((item, index) => (
          <ServiceNode 
            key={item.id} 
            item={item} 
            index={index} 
            total={serviceItems.length}
            onHover={onNodeHover}
          />
        ))}
      </group>
      {/* Orbital Ring UI */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.95, 4.05, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </mesh>
    </>
  );
}
