import { motion } from "framer-motion"

const Header = () => {
    return ( 
        <motion.div
                className='bg-black text-white mt-5 absolute top-0 z-10 bg-opacity-50 w-[80%] h-14 flex 
                items-center justify-evenly rounded-md left-0 right-0 mx-auto shadow-md max-w-4xl shadow-black'
                variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <motion.a
                href="/"
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
                </motion.a>
                
                <motion.a

                href="/blog"


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
                    transition={{ duration: 0.5, delay: 1.1 }}
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
                    transition={{ duration: 0.5, delay: 1.2 }}
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
                    transition={{ duration: 0.5, delay: 1.3 }}
                >
                    LinkedIn
                </motion.a>
            </motion.div>
    )
}

export default Header