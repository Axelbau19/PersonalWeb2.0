import { useState, useRef, useEffect } from "react"
import {
    motion,
    useInView,
    useScroll,
    useTransform
} from "framer-motion"

import { Info, Send } from "lucide-react"
import { useTheme } from '../../context/ThemeContext'
import { CONTACT_INFO, SOCIAL_LINK } from "../../utils/data"
import { containerV, itemVar } from "../../utils/datastyle"
import TextInput from "../input/TextInput"
import { SuccessModel } from "../SuccessModel"
import emailjs from '@emailjs/browser'
import { WarningSuccesModel } from "../WarningModel"
import { FailModel } from "../FailModel"
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID




function ContactSection() {
    const { isDarkMode } = useTheme()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [showSuccess, setShowSuccess] = useState(false)
    const [showFail,setShowFail]=useState(false)
    const [showWarning, setShowWarning] = useState(false)
    const [isSumitting, setIsSubmitting] = useState(false)
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    useEffect(() => {
        emailjs.init(PUBLIC_KEY)
    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsSubmitting(true)
        if (!formData.name || !formData.email || !formData.message) {
            setShowWarning(true)
            setFormData({ name: "", email: "", message: "" })
            setTimeout(() => setShowWarning(false), 3000)
            setIsSubmitting(false)
            return;

        }
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    message: formData.message
                }
            );
            setShowSuccess(true)
            setFormData({ name: "", email: "", message: "" })
            setTimeout(() => setShowSuccess(false), 3000)
        } catch (error) {
            setShowFail(true)
            setFormData({ name: "", email: "", message: "" })
            setTimeout(() => setShowFail(false), 3000)
            setIsSubmitting(false)
            
        }
        setIsSubmitting(false)
    }

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])
    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,

        })
    }

    return (
        <section
            id="contact"
            ref={sectionRef}
            className={`py-24 px=8 ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"} relative overflow-hidden `}>
            <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
                <div className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
                    }`} />


            </motion.div>
            <div className="max-w-6xl mx-auto relative z-10">

                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerV}
                    className="text-center mb-20">
                    <motion.div
                        variants={itemVar}
                        className={`text-sm uppercase tracking-widest ${isDarkMode ? "text=gray-500" : "text-gray-600"
                            } mb-4`}>

                        Lest´s Connect

                    </motion.div>

                    <motion.h2
                        variants={itemVar}
                        className="text-3xl md:text-5xl font-light mb-6 ">
                        Get In
                        <span className=" text-blue-500 font-medium "> Touch</span>

                    </motion.h2>

                    <motion.p
                        variants={itemVar}
                        className={`text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                        Ready to start your next idea? Let’s talk about how we can turn it into a real product.
                    </motion.p>

                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerV}
                    >
                        <motion.div
                            variants={itemVar}
                            className={`p-8 rounded-2xl border ${isDarkMode
                                ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                                : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                                }`}
                        >
                            <h3 className="text-2xl font-medium mb-8">Send me a direct message</h3>

                            <form method="post">
                                <div className="space-y-6">

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <TextInput
                                            isDarkMode={isDarkMode}
                                            value={formData.name}
                                            handleInputChange={(text) =>
                                                handleInputChange("name", text)
                                            }
                                            label="Your Name"

                                        />

                                        <TextInput
                                            isDarkMode={isDarkMode}
                                            label="Email Address"
                                            value={formData.email}
                                            handleInputChange={(text) =>
                                                handleInputChange("email", text)
                                            }
                                        />
                                    </div>

                                    <TextInput
                                        isDarkMode={isDarkMode}
                                        label="Your Message"
                                        value={formData.message}
                                        textarea
                                        handleInputChange={(text) =>
                                            handleInputChange("message", text)
                                        }
                                    />

                                    <motion.button
                                        disabled={isSumitting}
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                                        onClick={handleSubmit}
                                    >
                                        {isSumitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    }}
                                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerV}
                        className="space-y-8">
                        <motion.div
                            variants={itemVar}>
                            <h3 className="text-xl font-medium mb-6 ">Contact Information</h3>
                            <div className="space-y-4">
                                {CONTACT_INFO.map((info, index) => (

                                    <motion.div
                                        key={info.label}
                                        variants={itemVar}
                                        whileHover={{ x: 4 }}
                                        className={`flex items-center space-x-4 p-4 rounded-xl ${isDarkMode
                                            ? "bg-gray-800/30 hover:bg-gray-800/50"
                                            : "bg-gray-50/50 hover:bg-gray-100/50"
                                            } transition-all duration-300`}
                                    >

                                        <div
                                            className={`p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-white"
                                                }`}>
                                            <info.icon size={20} className="text-blue-500" />

                                        </div>
                                        <div>
                                            <div className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                                                }`}>
                                                {info.label}

                                            </div>
                                            <div className="font-medium">
                                                {info.value}
                                            </div>
                                        </div>

                                    </motion.div>
                                ))}

                            </div>
                        </motion.div>
                        <motion.div variants={itemVar}>
                            <h3 className="text-xl font-medium mb-6">Follow Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {SOCIAL_LINK.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300
                                        ${isDarkMode ?
                                                "bg-gray-800/50 border-gray-700 hover:border-gray-600" :
                                                "bg-white/80 border-gray-200 hover:border-gray-300"
                                            } ${social.bgColor} ${social.color}`}
                                    >
                                        <social.icon size={20} />
                                        <span className="font-medium">{social.name}</span>

                                    </motion.a>
                                ))}

                            </div>

                        </motion.div>
                        <motion.div
                            variants={itemVar}
                            className={`p-6 rounded-xl border ${isDarkMode
                                ? "bg-green-500/10 border-green-500/20" :
                                "bg-green-50 border-green-200"
                                }`}>
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="w-4 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium text-green-500">
                                    Available for Work
                                </span>
                            </div>
                            <p
                                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                    }`}>
                                I'm currently available for full time opportunities

                            </p>

                        </motion.div>


                    </motion.div>

                </div>

            </div>
            <SuccessModel showSuccess={showSuccess} setShowSuccess={setShowSuccess} isDarkMode={isDarkMode} />
            <WarningSuccesModel showWarning={showWarning} setShowWarning={setShowWarning} isDarkMode={isDarkMode}/>
            <FailModel showFail={showFail} setShowFail={setShowFail} isDarkMode={isDarkMode}/>
        </section>
    )
}

export default ContactSection