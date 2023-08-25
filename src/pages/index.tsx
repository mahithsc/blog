import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AsciiRenderer, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'


function Box(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref: any = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((_state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(_event) => click(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), hover(true))}
            onPointerOut={(_event) => hover(false)}>
            <torusGeometry args={[10, 3, 16, 100]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const Index = () => {

    const [invert, _setInvert] = useState<boolean>(false)
    return (

        <div className="h-screen">
            <motion.div
                className='bg-black text-white mt-5 absolute top-0 z-10 bg-opacity-50 w-[80%] h-14 flex items-center justify-evenly rounded-md left-0 right-0 mx-auto shadow-xl'
                variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className='font-bold text-xl'
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Mahith Chitrapu
                </motion.div>
                
                <motion.a
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    blog
                </motion.a>
                
                <motion.a
                    href='https://docs.google.com/document/d/1YajIPifoXNTf7gQac1x3pS21Q7--Vta5x_yeAS0tlXo/edit?usp=sharing'
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    resume
                </motion.a>
                
                <motion.a 
                    href='https://github.com/mahithsc'
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 2 }}
                >

                    GitHub
                </motion.a>

                <motion.a 
                    href='https://www.linkedin.com/in/mchitrapu/'
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 2.5 }}
                >
                    LinkedIn
                </motion.a>
            </motion.div>
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
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Index

