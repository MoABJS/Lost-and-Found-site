import { Search, MapPin, Users, CheckCircle, Facebook, Twitter, Instagram, Mail } from "lucide-react"
import {Link} from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <nav className="flex justify-between items-center border-b border-b-gray-500 h-16 sticky top-0 z-50 bg-[#1a2d46] px-5" style={{ backgroundColor: "#2f3c4d" }}>
            <div className="w-1/2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#4299e1] rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <span className="font-sans font-bold text-xl text-white">FindIt</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </a>
                <a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </a>
                
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link className="px-4 py-2 text-white hover:text-gray-300 transition-colors font-serif" to="/sign-in">
                  Log In
              </Link>
              <Link className="px-6 py-2 text-white rounded-md hover:bg-blue-600 transition-colors font-serif" to="/sign-up">
                  Sign Up
              </Link>
            </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="w-full h-screen flex flex-col items-center justify-center text-center py-10 px-4 sm:px-6 lg:px-8">
       
          <h1 className="font-sans font-bold text-3xl md:text-6xl mb-6">
            Lost something? Found something?
          </h1>
          <p className="font-serif text-xl max-w-3xl mx-auto mb-8">
            Join our trusted community platform where lost items find their way home. Report what you've lost, help
            others find their belongings, and experience the joy of reunion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-white rounded-md bg-blue-600 font-serif text-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              Report Lost Item
            </button>
            <button className="px-8 py-3 border rounded-md font-serif text-lg flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Browse Found Items
            </button>
          </div>
      </section>

      <section id="how-it-works" className="py-20 bg-[#2f3c4d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-card-foreground mb-4">How It Works</h2>
            <p className="font-serif text-lg max-w-2xl mx-auto">
              Getting started is simple. Follow these three easy steps to join our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#3d4a5c] rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4299e1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-sans font-bold text-white">1</span>
              </div>
              <h3 className="font-sans font-bold text-xl mb-3 text-white">Create Your Account</h3>
              <p className="font-serif text-gray-300">
                Sign up with your email and create a secure profile to start reporting and finding items.
              </p>
            </div>

            <div className="bg-[#3d4a5c] rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4299e1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-sans font-bold text-white">2</span>
              </div>
              <h3 className="font-sans font-bold text-xl mb-3 text-white">Report or Search</h3>
              <p className="font-serif text-gray-300">
                Post details about your lost item or browse through found items in your area.
              </p>
            </div>

            <div className="bg-[#3d4a5c] rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#4299e1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-sans font-bold text-white">3</span>
              </div>
              <h3 className="font-sans font-bold text-xl mb-3 text-white">Get Reunited</h3>
              <p className="font-serif text-gray-300">
                Connect with finders or owners through our secure messaging system and arrange safe meetups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section id="success-stories" className="py-20 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">Our Success Stories</h2>
            <p className="font-serif text-lg max-w-2xl mx-auto">
              Real results from our growing community of helpful neighbors.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-sans font-bold text-[#4299e1] mb-2">2,847</div>
              <div className="font-serif text-white">Items Reunited</div>
            </div>
            <div>
              <div className="text-4xl font-sans font-bold text-[#4299e1] mb-2">15,000+</div>
              <div className="font-serif text-white">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-sans font-bold text-[#4299e1] mb-2">89%</div>
              <div className="font-serif text-white">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-sans font-bold text-[#4299e1] mb-2">24hrs</div>
              <div className="font-serif text-white">Average Reunion Time</div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-[#4299e1] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#4299e1] mr-2" />
                <span className="font-sans font-bold text-white">Sarah M.</span>
              </div>
              <p className="font-serif text-gray-300">
                "Lost my wedding ring at the park. Within 6 hours, someone had found it and contacted me through FindIt.
                I'm forever grateful!"
              </p>
            </div>

            <div className="bg-[#4299e1] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#4299e1] mr-2" />
                <span className="font-sans font-bold text-white">Mike R.</span>
              </div>
              <p className="font-serif text-gray-300">
                "My daughter's favorite stuffed animal went missing at the mall. The FindIt community helped us get 'Mr.
                Bear' back home safely."
              </p>
            </div>

            <div className="bg-[#4299e1] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#4299e1] mr-2" />
                <span className="font-sans font-bold text-white">Lisa K.</span>
              </div>
              <p className="font-serif text-gray-300">
                "Found a wallet with $200 cash. Posted it on FindIt and returned it to its owner the same day. This
                platform restores faith in humanity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: "#2f3c4d" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-6">Ready to Join Our Community?</h2>
          <p className="font-serif text-xl text-gray-300 mb-8">
            Start your journey today and help make reunions happen.
          </p>
          <Link to="/signup">
            <button className="px-8 py-3 bg-accent text-white rounded-md bg-blue-600 font-serif text-lg flex items-center justify-center mx-auto">
              <Users className="w-5 h-5 mr-2" />
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f3c4d] border-t border-border py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#4299e1] rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <span className="font-sans font-bold text-xl text-white">FindIt</span>
        </div>
<div className="text-center">
            <p className="font-serif text-gray-300">
              © 2024 FindIt. All rights reserved. Made with ❤️ for our community.
            </p>
          </div>
              <div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          
        </div>
      </footer>
    </div>
  )
}
