import React from 'react';
import {
  Globe,
  Instagram,
  Github,
  Linkedin,
  GitBranch as BrandTiktok,
  Music,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto space-y-4">
        {/* Profile Section */}
        <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-2xl border-2 border-blue-500 p-1">
                <img
                  src="./images/vitorfotocapa.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Vitor Nery</h1>
                <p className="text-gray-400">Desenvolvedor Freelancer</p>
              </div>
            </div>
            <div className="text-4xl animate-spin">☺</div>
          </div>
        </div>

        {/* Hard Skills */}
        <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm">
          <h2 className="text-blue-400 font-medium mb-4">Hard Skills</h2>
          <div className="flex justify-between items-center">
            <img
              src="https://skillicons.dev/icons?i=html"
              alt="HTML"
              className="w-8 h-8 hover:scale-110 transition"
            />
            <img
              src="https://skillicons.dev/icons?i=css"
              alt="CSS"
              className="w-8 h-8 hover:scale-110 transition"
            />
            <img
              src="https://skillicons.dev/icons?i=js"
              alt="JavaScript"
              className="w-8 h-8 hover:scale-110 transition"
            />
            <img
              src="https://skillicons.dev/icons?i=react"
              alt="React"
              className="w-8 h-8 hover:scale-110 transition"
            />
            <img
              src="https://skillicons.dev/icons?i=nodejs"
              alt="Node.js"
              className="w-8 h-8 hover:scale-110 transition"
            />
            <img
              src="https://skillicons.dev/icons?i=wordpress"
              alt="WordPress"
              className="w-8 h-8 hover:scale-110 transition"
            />
          </div>
        </div>

        {/* Brand Section with Social Links */}
        <div className="grid grid-cols-5 gap-4">
          {/* Brand Card */}
          <div className="col-span-3 bg-black/30 rounded-2xl p-4 backdrop-blur-sm">
            <p className="text-blue-400 text-sm mb-2">@vn.energy</p>
            <img
              src="./images/skate.jpeg"
              alt="Brand"
              className="w-full h-32 object-cover rounded-xl"
            />
          </div>

          {/* Social Links Stack */}
          <div className="col-span-2 grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.tiktok.com/@vtnery"
                target="_blank"
                className="bg-pink-500/10 hover:bg-pink-500/20 rounded-xl flex items-center justify-center p-4 transition group"
              >
                <BrandTiktok className="w-8 h-8 group-hover:scale-110 transition" />
              </a>
              <a
                href="https://www.instagram.com/vtnery/"
                target="_blank"
                className="bg-purple-500/10 hover:bg-purple-500/20 rounded-xl flex items-center justify-center p-4 transition group"
              >
                <Instagram className="w-8 h-8 group-hover:scale-110 transition" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/vtnery11"
                target="_blank"
                className="bg-gray-500/10 hover:bg-gray-500/20 rounded-xl flex items-center justify-center p-4 transition group"
              >
                <Github className="w-8 h-8 group-hover:scale-110 transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/vitor-nery-0aa647350/"
                target="_blank"
                className="bg-blue-500/10 hover:bg-blue-500/20 rounded-xl flex items-center justify-center p-4 transition group"
              >
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio Button */}
        <a
          href="#"
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-center py-4 rounded-xl hover:from-blue-700 hover:to-blue-600 transition flex items-center justify-center space-x-3 shadow-lg shadow-blue-500/20"
        >
          <Globe className="w-6 h-6" />
          <span className="text-lg font-medium">Meu site portfolio</span>
        </a>

        {/* Now Playing Section */}
        <div className="bg-black/30 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="bg-green-500/20 rounded-xl p-3">
              <Music className="w-6 h-6 text-green-400 animate-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-green-400 font-medium">
                Tocando agora no Spotify...
              </h3>
              <p className="text-white font-medium">Animal I have become</p>
              <p className="text-gray-400 text-sm">three days grace</p>
            </div>
            <img
              src="./images/banda.jpg"
              alt="Album cover"
              className="w-16 h-16 rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
