import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaArrowLeft, FaCode } from 'react-icons/fa'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827] px-4">

      <div className="text-center max-w-lg">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="
            w-20 h-20
            flex items-center justify-center
            rounded-full
            bg-gradient-to-r from-orange-500 to-amber-500
            shadow-[0_0_40px_rgba(249,115,22,0.3)]
          ">
            <FaCode className="text-3xl text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Demo Not Available
        </h1>

        {/* Message */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-3">
          This project has not been hosted yet.
        </p>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
          You can visit the GitHub repository to take a glance at
          the source code and explore how the project was built.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/Raje014"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3
              rounded-full
              text-white font-semibold
              bg-gradient-to-r from-orange-500 to-amber-500
              hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]
              hover:scale-105
              transition-all duration-300
            "
          >
            <FaGithub />
            Visit GitHub
          </a>

          {/* Back */}
          <Link
            to="/"
            className="
              inline-flex items-center justify-center gap-2
              px-6 py-3
              rounded-full
              border-2 border-orange-500
              text-white font-semibold
              hover:bg-orange-500
              hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]
              hover:scale-105
              transition-all duration-300
            "
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>

        </div>

      </div>

    </div>
  )
}

export default NotFound