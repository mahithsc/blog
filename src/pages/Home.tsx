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

    const posts = [
        {
            "title": "Training LLM on Custom Data",
            "date": "Nov 2023",
            "link": "/blog/1"
        },
        {
            "title": "DocLLM",
            "date": "Nov Jan 2024",
            "link": "/blog/3"
        },

    ]

    return (
        <div className="h-screen flex">
            {/* when the screen is small */}
            <div className='md:hidden flex-1 px-10 absolute z-10 h-screen w-screen'>
                <div className='font-bold text-lg mt-5'>Hi there. Thanks for stopping by. I'm Mahith. </div>

                <div className='mt-5'>Contact:</div>
                <div className='px-5 mt-1'>
                    <div className='text-sm'>My email: <a >mahith.chitrapu@gmail.com</a></div>
                    <div className='text-sm'>My Github: <a className='underline text-blue-700' href='https://github.com/mahithsc'>https://github.com/mahithsc</a></div>
                    <div className='text-sm'>My LinkedIn: <a className='underline text-blue-700' href='https://www.linkedin.com/in/mchitrapu'>https://www.linkedin.com/in/mchitrapu</a></div>
                </div>


                <div className='mt-5'>Writings:</div>
                <ul className='px-5 mt-1'>
                {posts.map((item, index) => (
                        <li key={index}>{'\u2022'} <a href={item.link} className='text-blue-700 underline'>{item.title}</a> - {item.date}</li>
                    ))}
                </ul>

                <div className='mt-5'>What I'm working on rn:</div>
                <ul className='px-5 mt-1'>
                    <li>{'\u2022'} <a href='https://provant.vercel.app' className='text-blue-700 underline'>provant</a>: Healthcare IT solutions company</li>
                </ul>
            </div>

            <div className='flex-1 px-10 hidden md:block'>
                <div className='font-bold text-lg mt-5'>Hi there. Thanks for stopping by. I'm Mahith. </div>

                <div className='mt-5'>Contact:</div>
                <div className='px-5 mt-1'>
                    <div className='text-sm'>My email: <a >mahith.chitrapu@gmail.com</a></div>
                    <div className='text-sm'>My Github: <a className='underline text-blue-700' href='https://github.com/mahithsc'>https://github.com/mahithsc</a></div>
                    <div className='text-sm'>My LinkedIn: <a className='underline text-blue-700' href='https://www.linkedin.com/in/mchitrapu'>https://www.linkedin.com/in/mchitrapu</a></div>
                </div>


                <div className='mt-5'>Writings:</div>
                <ul className='px-5 mt-1'>
                    {posts.map((item, index) => (
                        <li key={index}>{'\u2022'} <a href={item.link} className='text-blue-700 underline'>{item.title}</a> - {item.date}</li>
                    ))}
                </ul>

                <div className='mt-5'>What I'm working on rn:</div>
                <ul className='px-5 mt-1'>
                    <li>{'\u2022'} <a href='https://provant.vercel.app' className='text-blue-700 underline'>provant</a>: Healthcare IT solutions company</li>
                </ul>
            </div>

            <div className='absolute top-0 right-0 w-screen h-screen z-0 opacity-20 md:opacity-100 md:w-1/2'>
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

