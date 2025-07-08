"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Github, url: "https://github.com/nitdraig" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/avellaneda-agustín-tns/",
    },
    { icon: Mail, url: "me@agustin.top" },
  ];
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 px-4 border-t border-gray-200 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Agustin Avellaneda
            </h3>
            {/* <p className="text-gray-600">{content[language].footer.tagline}</p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {socials.map(({ icon: Icon, url }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(url, "_blank")}
                  className="text-white bg-black hover:border hover:bg-white/10 backdrop-blur-sm"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-200" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500"
        >
          <p>&copy; 2025 Agustin Avellaneda. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
