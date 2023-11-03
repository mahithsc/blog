import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AsciiRenderer, OrbitControls, PerspectiveCamera, Torus } from '@react-three/drei'


function Box(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref: any = useRef()
    // Hold state for hovered and clicked events
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((_state, delta) => (ref.current.rotation.y += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        // <mesh {...props} ref={ref}>
        //     <torusGeometry args={[10, 3, 16, 100]} />
        //     <meshStandardMaterial color='orange' />
        // </mesh>

        <Torus args={[1, 0.4, 16, 100]} ref={ref}>
            <meshStandardMaterial color={'#FF4500'} />
        </Torus>
    )
}

const Index = () => {

    const [invert, _setInvert] = useState<boolean>(false)

    return (

        <div className="h-screen flex">
            <div className='flex-1 px-10'>
                <div className='font-bold text-lg mt-5'>Hi there. Thanks for stopping by. I'm Mahith. </div>

                <div className='mt-5'>Contact:</div>
                <div className='px-5 mt-1'>
                    <div className='text-sm'>My email: <a className='underline text-blue-700'>mahith.chitrapu@gmail.com</a></div>
                    <div className='text-sm'>My Github: <a className='underline text-blue-700' href='https://github.com/mahithsc'>https://github.com/mahithsc</a></div>
                    <div className='text-sm'>My LinkedIn: <a className='underline text-blue-700' href='https://www.linkedin.com/in/mchitrapu'>https://www.linkedin.com/in/mchitrapu</a></div>
                </div>


                <div className='mt-5'>Writings</div>
                <ul className='px-5 mt-1'>
                    <li>{'\u2022'} <a>Training LLM on Custom Data</a></li>
                </ul>
            </div>
            <div className='flex-1'></div>


            <div className='absolute top-0 right-0 w-1/2 h-screen'>
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
                    <PerspectiveCamera position={[0, 0, 0]} />
                    <Box />
                    <OrbitControls />
                </Canvas>
            </div>

        </div>
    )
}

export default Index

