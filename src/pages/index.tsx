import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AsciiRenderer, OrbitControls } from '@react-three/drei'


function Box(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref: any = useRef()
    // Hold state for hovered and clicked events
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((_state, delta) => (ref.current.rotation.y += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh {...props} ref={ref}>
            <torusGeometry args={[10, 3, 16, 100]} />
            <meshStandardMaterial color='orange' />
        </mesh>
    )
}

const Index = () => {

    const [invert, _setInvert] = useState<boolean>(false)
    return (

        <div className="h-screen">
            
            <Canvas style={{ width: '100%', height: '100%', fontWeight: 'bold' }}>
                <AsciiRenderer
                    characters=' .:-+*=%@#'
                    fgColor='black'
                    invert={invert}
                    bgColor='white'
                />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                {/* <Box position={[-1.2, 0, 0]} /> */}
                <Box position={[0, 0, 0]} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Index

