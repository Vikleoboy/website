"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FlipWords } from "@/components/ui/flip-words";

export function Hero() {

    const words = ["better", "cute", "beautiful", "modern"];
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-gray-200 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Build lamps <br /> the right way
                <FlipWords words={words} />
            </motion.h1>
        </LampContainer>
    );
}
