import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import ServiceTiles3D from './ServiceTiles3D';

export default function HeroCanvas({ onServiceHover }: { onServiceHover: (id: string | null) => void }) {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-50 md:opacity-100 bg-[#020617]">
      <Canvas 
        camera={{ position: [0, 8, 16], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ServiceTiles3D onNodeHover={onServiceHover} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#020617] to-transparent opacity-95" />
    </div>
  );
}
