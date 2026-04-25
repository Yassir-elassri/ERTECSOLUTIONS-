import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Zap, 
  Cpu, 
  Shield, 
  Network, 
  Sun, 
  Wind, 
  Lightbulb, 
  ShoppingBag
} from 'lucide-react';
import * as random from 'maath/random/dist/maath-random.esm';

const serviceItems = [
  { id: 'construction', icon: Building2, color: '#F97316' },
  { id: 'electrical', icon: Zap, color: '#3B82F6' },
  { id: 'automation', icon: Cpu, color: '#10B981' },
  { id: 'security', icon: Shield, color: '#EF4444' },
  { id: 'telecom', icon: Network, color: '#8B5CF6' },
  { id: 'energy', icon: Sun, color: '#FBBF24' },
  { id: 'hvac', icon: Wind, color: '#06B6D4' },
  { id: 'lighting', icon: Lightbulb, color: '#EAB308' },
  { id: 'commerce', icon: ShoppingBag, color: '#EC4899' },
];

function ConnectionLines({ activeId }: { activeId: string | null }) {
  const lines = useMemo(() => {
    return serviceItems.map((item, i) => {
      const angle = (i / serviceItems.length) * Math.PI * 2;
      const radius = 5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return {
        points: [[0, 0, 0], [x, 0, z]] as [number, number, number][],
        color: item.id === activeId ? '#F97316' : '#1e293b',
        opacity: item.id === activeId ? 0.8 : 0.1
      };
    });
  }, [activeId]);

  return (
    <group>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          color={line.color}
          lineWidth={line.opacity > 0.5 ? 2 : 1}
          transparent
          opacity={line.opacity}
        />
      ))}
    </group>
  );
}

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.5;
    outerRef.current.rotation.y = -t * 0.2;
    outerRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial 
          color="#F97316" 
          emissive="#F97316" 
          emissiveIntensity={2} 
          wireframe 
        />
      </mesh>
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshStandardMaterial 
          color="#F97316" 
          transparent 
          opacity={0.1} 
          wireframe 
        />
      </mesh>
      <pointLight color="#F97316" intensity={5} distance={10} />
      <pointLight color="#3B82F6" intensity={2} position={[2, 2, 2]} />
    </group>
  );
}

function OrbitalTile({ item, index, total, onHover, activeId }: any) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Group>(null!);
  
  const angle = (index / total) * Math.PI * 2;
  const radius = 5;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const targetY = hovered ? 0.5 : Math.sin(time + index) * 0.2;
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);
    
    // Slow orbital rotation of the group
    const orbitalAngle = time * 0.05;
    const currentAngle = angle + orbitalAngle;
    meshRef.current.position.x = Math.cos(currentAngle) * radius;
    meshRef.current.position.z = Math.sin(currentAngle) * radius;
    
    // Make tile always face center
    meshRef.current.lookAt(0, 0, 0);
  });

  return (
    <group 
      ref={meshRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover(item.id);
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Module Base */}
        <mesh>
          <boxGeometry args={[1.5, 2, 0.2]} />
          <meshStandardMaterial 
            color={hovered ? "#1e293b" : "#020617"} 
            metalness={0.9} 
            roughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Outer Glow Border */}
        <mesh position={[0, 0, -0.05]}>
          <boxGeometry args={[1.6, 2.1, 0.1]} />
          <meshStandardMaterial 
            color={hovered ? item.color : "#1e293b"} 
            emissive={hovered ? item.color : "#000"} 
            emissiveIntensity={hovered ? 2 : 0}
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Icon Projection */}
        <Html 
          position={[0, 0.4, 0.2]} 
          center 
          distanceFactor={8}
          className="pointer-events-none"
        >
          <div className={`p-3 rounded-xl transition-all duration-500 ${hovered ? 'bg-brand-orange scale-125 shadow-2xl shadow-brand-orange/50' : 'bg-white/5 border border-white/10'}`}>
            <item.icon className={`w-6 h-6 ${hovered ? 'text-white' : 'text-brand-orange'}`} />
          </div>
        </Html>

        {/* Label Projector */}
        <Html 
          position={[0, -0.8, 0.2]} 
          center 
          distanceFactor={10}
          className="pointer-events-none"
        >
          <div className={`flex flex-col items-center text-center transition-all duration-500 ${hovered ? '-translate-y-2 scale-110' : ''}`}>
             <span className="text-[6px] font-mono text-slate-500 tracking-[0.3em] mb-1">
               MODULE_SYS_0{index + 1}
             </span>
             <span className={`text-[10px] font-black uppercase tracking-tighter whitespace-nowrap ${hovered ? 'text-white' : 'text-slate-400'}`}>
               {t(`services.${item.id}.title`)}
             </span>
          </div>
        </Html>

        {/* Interaction Beam */}
        {hovered && (
          <pointLight color={item.color} intensity={2} distance={4} />
        )}
      </Float>
    </group>
  );
}

export default function ServiceTiles3D({ onNodeHover }: any) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const pointsRef = useRef<any>(null);
  const [particles] = useState(() => random.inSphere(new Float32Array(3000), { radius: 20 }) as Float32Array);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  const handleHover = (id: string | null) => {
    setActiveId(id);
    onNodeHover(id);
  };

  return (
    <group rotation={[0.2, 0, 0]}>
      <CentralCore />
      <ConnectionLines activeId={activeId} />
      
      <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#F97316"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.2}
        />
      </Points>

      <group>
        {serviceItems.map((item, index) => (
          <OrbitalTile 
            key={item.id} 
            item={item} 
            index={index} 
            total={serviceItems.length}
            onHover={handleHover}
            activeId={activeId}
          />
        ))}
      </group>

      {/* Dynamic Grid Floor */}
      <gridHelper 
        args={[100, 50, 0x1e293b, 0x0f172a]} 
        position={[0, -5, 0]} 
      />
    </group>
  );
}
