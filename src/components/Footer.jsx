import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* ICONS */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex justify-center gap-10 mt-4 bg-slate-200 p-3">

        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub className="text-3xl text-gray-blue cursor-pointer" />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-3xl  text-blue-400 cursor-pointer" />
        </a>

        <a href="mailto:example@email.com">
          <FaEnvelope className="text-3xl text-red-400 cursor-pointer" />
        </a>

        <a href="tel:+254700000000">
          <FaPhone className="text-3xl text-green-400 cursor-pointer" />
        </a>

      </div>
    </footer>
  )
}

export default Footer