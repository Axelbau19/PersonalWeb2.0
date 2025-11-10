import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Code2, Globe, Zap, User } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import ProjectCard from '../ProjectCard'
import { Projects } from '../../utils/data'
import { containerV, itemVar } from '../../utils/datastyle'


function ProjectsSection() {
    const { isDarkMode } = useTheme()
    const sectionRef = useRef(null)
    const inView = useInView(sectionRef, { once: true, margin: "-100px" })






    return (
        <section
            id="work"
            ref={sectionRef}
            className={`py-24 px-6 ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
                } relative overflow-hidden`}>
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
                    }`}/>

                    <div className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
                        isDarkMode ? "bg-purple-500":"bg-purple-400"
                    }`}/>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                initial="hidden"
                animate={inView ? "visible":"hidden"}
                variants={containerV}
                className="text-center mb-20">

                    <motion.div
                    variants={itemVar}
                    className={`text-s uppercase tracking-widest ${
                        isDarkMode ? "text-gray-500":"text-gray-600"
                    } mb-4`}>
                        Featured Work
                    </motion.div>
                    <motion.h2
                    variants={itemVar}
                    className='text-3xl md:text-5xl font-light mb-6'>
                        Recent
                        <span className="text-blue-500 font-medium">Projects</span>
                    </motion.h2>
                    <motion.p
                    variants={itemVar}
                    className={`text-lg ${
                        isDarkMode ? "text-gray-400":"text-gray-600"
                    } max-w-2xl mx-auto font-light`}>

                        A collection of projects that showcase my expertise in building
                        modern

                    </motion.p>

                </motion.div>
                <motion.div
                initial="hidden"
                animate={inView ? "visible":"hidden"}
                variants={containerV}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project,index) =>(
                        <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        isDarkMode={isDarkMode}/>
                    ))}
                </motion.div>


            </div>

        </section>
    )
}

export default ProjectsSection