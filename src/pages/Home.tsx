import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AsciiRenderer, OrbitControls, PerspectiveCamera, Torus } from '@react-three/drei'


function Box() {
    const ref: any = useRef()
    useFrame((_state, delta) => (ref.current.rotation.y += delta))
    return (
        <Torus args={[1, 0.4, 16, 100]} ref={ref}>
            <meshStandardMaterial color={'#FF4500'} />
        </Torus>
    )
}

const Home = () => {

    const [invert, _setInvert] = useState<boolean>(false)

    return (
        <div className="h-screen flex">
            <div className='flex-1 px-10'>
                <div className='font-bold text-lg mt-5'>Hi there. Thanks for stopping by. I'm Mahith. </div>

                <div className='mt-5'>Contact:</div>
                <div className='px-5 mt-1'>
                    <div className='text-sm'>My email: <a >mahith.chitrapu@gmail.com</a></div>
                    <div className='text-sm'>My Github: <a className='underline text-blue-700' href='https://github.com/mahithsc'>https://github.com/mahithsc</a></div>
                    <div className='text-sm'>My LinkedIn: <a className='underline text-blue-700' href='https://www.linkedin.com/in/mchitrapu'>https://www.linkedin.com/in/mchitrapu</a></div>
                </div>


                <div className='mt-5'>Writings</div>
                <ul className='px-5 mt-1'>
                    <li>{'\u2022'} <a href='/blog/1' className='text-blue-700 underline'>Training LLM on Custom Data</a> - Nov 2023</li>
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

export default Home
