import React from "react";
import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Ghost, Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "../context/ThemeContext";
const NavBar = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    }
    return (
        <motion.nav style={{ opacity: 1 }}
            className={`fixed w-full top-0 left-0 z-50 px-6 py-4
        ${isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"}
        backdrop-blur-md border-b ${isDarkMode ? "boder-gray-800" : "border-gray-200"}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div whileHover={{ scale: 1.05 }} className={`flex items-center space-x-2 ${isDarkMode ? "text-gray-400 hover:text-white" :
                                    "text-gray-600 hover:text-gray-900"}`}>
                    <Ghost size={24} />{""}
                    <span className={`text-lg ml-1 ${isDarkMode ? "text-gray-400 hover:text-white" :
                                    "text-gray-600 hover:text-gray-900"}` }>XW∅LVE</span>
                </motion.div>
                <div className="hidden md:flex items center space-x-8">
                    {/* */}
                    {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
                        <motion.button key={item} whileHover={{ y: -2 }}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className={`text-sm uppercase tracking-wide transition-colors ${isDarkMode ? "text-gray-400 hover:text-white" :
                                    "text-gray-600 hover:text-gray-900"
                                }`}>
                            {item}
                        </motion.button>
                    ))
                    }
                    <motion.button whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")
                        }
                        className={`p-2 rounded-full transition-colors
                    ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"}`}>
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>
                </div>
                {/*Mobile */}
                <div className="md:hidden flex items-center space-x-4">
                    <motion.button whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
                        className={`p-2 rounded-full transition-colors ${isDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-800" :
                                "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                            }`}>
                        {
                            isDarkMode ? <Sun size={18} /> : <Moon size={18}></Moon>
                        }
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={
                            `p-2 rounded-full transition-colors
                    ${isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" :
                                "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                            }`
                        }
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>

                </div>
            </div>


            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: -0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={`md:hidden mt-4 p-4 rounded-lg ${isDarkMode ? "bg-gray-900" : "border-white"
                                } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}
                        `}>
                            {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
                                <motion.button key={item} whileHover={{ x: 5 }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`block w-full text-left py-2 text-sm uppercase
                            tracking-wider transition-colors ${isDarkMode ? "text-gray-400 hover:text-white" :
                                            "text-gray-600 hover:text-gray-900"
                                        }`}>
                                    {item}
                                </motion.button>
                            ))
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </motion.nav>
    )
}

export default NavBar;