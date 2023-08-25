import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AsciiRenderer, OrbitControls } from '@react-three/drei'


function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref:any = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <torusGeometry args={[10, 3, 16, 100]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const App = () => {

  const [invert, setInvert] = useState<boolean>(false)
  return (

    <div className="h-screen">
      <div className='bg-black text-white mt-5 absolute top-0 z-10 bg-opacity-50 w-[80%] h-14 flex items-center justify-evenly rounded-md left-0 right-0 mx-auto shadow-xl'>
        <div className='font-bold text-xl'>Mahith Chitrapu</div>
        <div>blog</div>
        <div>resume</div>
        <div>GitHub</div>
        <div>LinkedIn</div>
      </div>
      <Canvas style={{ width: '100%', height: '100%', fontWeight:'bold'}}>
        <AsciiRenderer 
        characters=' .:-+*=%@#'
        fgColor='black'
        invert={invert}
        bgColor='white'

        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>






  )
}

export default App

      