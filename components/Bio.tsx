'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Bio() {
    return (
        <section id="bio" className="mb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                <h2 className="text-2xl font-bold text-text-primary mb-6">Bio</h2>

                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                    {/* Personal Information - Left Side */}
                    <div className="flex-1 bg-dark-card rounded-lg p-6">
                        <h3 className="text-lg font-bold text-text-primary mb-4">Personal Information</h3>
                        <div className="space-y-2 text-text-secondary text-sm md:text-base">
                            <div className="flex gap-4">
                                <span className="font-semibold text-text-primary min-w-[140px]">Name:</span>
                                <span>JESWIN PJ</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-semibold text-text-primary min-w-[140px]">Age:</span>
                                <span>29</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-semibold text-text-primary min-w-[140px]">Marital Status:</span>
                                <span>Single</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-semibold text-text-primary min-w-[140px]">Nationality:</span>
                                <span>Indian</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-semibold text-text-primary min-w-[140px]">Current Location:</span>
                                <span>Sharjah, UAE</span>
                            </div>
                        </div>
                    </div>

                    {/* Photo with Gold Background - Right Side */}
                    <div className="relative w-full md:w-72 h-80 flex-shrink-0 md:ml-auto">
                        <div className="absolute -bottom-0 -right-0 w-full h-[75%] bg-gold rounded-lg opacity-90"></div>
                        {/* Photo */}
                        <div className="relative w-full h-full rounded-lg overflow-hidden z-10">
                            <Image
                                src="/jeswin-photo-2.png"
                                alt="Jeswin Bio Photo"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 288px"
                            />
                        </div>
                    </div>
                </div>

                {/* Bio Paragraph - Below both sections */}
                <div className="mt-6 text-text-secondary leading-relaxed text-sm md:text-base">
                    <p>
                        My journey into software development began with a fascination for how technology shapes our world.
                        With a solid foundation in Python, React Native, and Django, I've dedicated myself to building
                        impactful applications and solving complex problems. I thrive in environments where I can continuously
                        learn and apply new skills to real-world challenges. Beyond coding, I'm passionate about understanding
                        user needs and crafting intuitive experiences. I believe in the power of collaboration and open
                        communication to deliver exceptional results. My goal is to contribute to innovative projects that
                        push the boundaries of what's possible, while always striving for clean, efficient, and maintainable code.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
