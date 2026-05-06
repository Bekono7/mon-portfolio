import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const techs = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Django", icon: "🐍", color: "#092e20" },
  { name: "Flutter", icon: "🦋", color: "#02569B" },
  { name: "TypeScript", icon: "📘", color: "#3178c6" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
];

interface CubeFaceProps {
  position: [number, number, number];
  rotation: [number, number, number];
  tech: { name: string; icon: string; color: string };
  onHover: (tech: { name: string; icon: string; color: string } | null) => void;
  isActive: boolean;
}

function CubeFace({ position, rotation, tech, onHover, isActive }: CubeFaceProps) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox
        args={[3, 3, 0.15]}
        radius={0.15}
        smoothness={4}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(tech);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
        }}
      >
        <meshStandardMaterial
          color={isActive ? tech.color : tech.color}
          metalness={0.6}
          roughness={0.05}
          transparent={false}
          opacity={1}
          emissive={tech.color}
          emissiveIntensity={isActive ? 0.8 : 0.3}
        />
      </RoundedBox>
      <Html
        center
        transform
        distanceFactor={3}
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "white",
          textShadow: "0 0 15px rgba(0,0,0,0.7)",
          pointerEvents: "none",
          transition: "opacity 0.3s",
          opacity: isActive ? 1 : 0.8,
          textAlign: "center",
        }}
      >
        <span style={{ display: "block", textAlign: "center", fontSize: "5rem" }}>{tech.icon}</span>
        <span style={{ display: "block", textAlign: "center", fontSize: "1rem", fontWeight: "bold" }}>{tech.name}</span>
      </Html>
    </group>
  );
}

function TechCube({ onFaceClick }: { onFaceClick?: (tech: string) => void }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeTech, setActiveTech] = useState<{ name: string; icon: string; color: string } | null>(null);

  const handleHover = (tech: { name: string; icon: string; color: string } | null) => {
    if (tech) {
      setActiveTech(tech);
      setAutoRotate(false);
    } else {
      setActiveTech(null);
      if (!hovered) {
        setAutoRotate(true);
      }
    }
  };

  useFrame((state, delta) => {
    if (groupRef.current && autoRotate && !activeTech) {
      groupRef.current.rotation.y += delta * 0.7;
      groupRef.current.rotation.x += delta * 0.3;
    }
  });

  const faces = useMemo(() => {
    const faceConfigs: CubeFaceProps[] = techs.map((tech, i) => {
      const positions: [number, number, number][] = [
        [0, 0, 1.5],
        [1.5, 0, 0],
        [0, 1.5, 0],
        [0, -1.5, 0],
        [-1.5, 0, 0],
        [0, 0, -1.5],
      ];
      const rotations: [number, number, number][] = [
        [0, 0, 0],
        [0, Math.PI / 2, 0],
        [-Math.PI / 2, 0, 0],
        [Math.PI / 2, 0, 0],
        [0, -Math.PI / 2, 0],
        [0, Math.PI, 0],
      ];
      return {
        position: positions[i],
        rotation: rotations[i],
        tech,
        onHover: handleHover,
        isActive: activeTech?.name === tech.name,
      };
    });
    return faceConfigs;
  }, [activeTech]);

  return (
    <group
      ref={groupRef}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
        if (!activeTech) {
          setAutoRotate(true);
        }
      }}
      scale={hovered || activeTech ? 1.05 : 1}
    >
      {faces.map((face, index) => (
        <CubeFace
          key={index}
          position={face.position}
          rotation={face.rotation}
          tech={face.tech}
          onHover={face.onHover}
          isActive={face.isActive}
        />
      ))}
      <RoundedBox args={[3, 3, 3]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.95}
          roughness={0.02}
          transparent={false}
          opacity={1}
        />
      </RoundedBox>
    </group>
  );
}

const TechCube3D = () => {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas
        camera={{ position: [4, 3, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff2d20" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1e3a8a" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#ffffff"
        />
        <TechCube />
      </Canvas>
    </div>
  );
};

export default TechCube3D;