import { Button } from "@/components/ui/button"
import { Zap, Palette, Package, Wrench, Github, Code } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ⚡️ React Stack Starter
        </h1>
        <p className="text-xl text-gray-600">Vite + React + Tailwind + shadcn/ui</p>

        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
            <Zap className="w-5 h-5 text-yellow-500 mb-2" />
            <h2 className="font-medium">Vite & React</h2>
          </div>
          <div className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
            <Palette className="w-5 h-5 text-blue-500 mb-2" />
            <h2 className="font-medium">Tailwind CSS</h2>
          </div>
          <div className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
            <Package className="w-5 h-5 text-purple-500 mb-2" />
            <h2 className="font-medium">shadcn/ui</h2>
          </div>
          <div className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
            <Wrench className="w-5 h-5 text-green-500 mb-2" />
            <h2 className="font-medium">Zero Config</h2>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Code className="w-4 h-4" />
              Start editing src/App.jsx
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2"
              onClick={() => window.open('https://github.com/Sohaib-2/react-shadcn-starter', '_blank')}
            >
              <Github className="w-4 h-4" />
              ⭐️ Star on GitHub
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">
            Ready to build something amazing? Start editing!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;