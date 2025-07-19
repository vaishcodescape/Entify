"use client";

import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { GlowingEffect } from "@/components/ui/glowing-effect";

import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle
} from "@/components/ui/resizable-navbar";
export default function Entify() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "API", link: "" },
    { name: "Github", link: "https://github.com/vaishcodescape/entify.git" },
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg h-14 md:h-16 flex items-center">
        <Navbar>
          <NavBody className="justify-between px-4 md:px-8 py-1 md:py-2">
            <div className="flex items-center">
              <span className="font-bold text-xl md:text-2xl text-black dark:text-white tracking-tight">Entify</span>
            </div>
            <NavItems items={navItems} className="space-x-4 md:space-x-6" />
          </NavBody>
          
          <MobileNav>
            <MobileNavHeader>
              <div className="flex items-center px-2 py-1">
                <span className="font-bold text-xl text-black dark:text-white">Entify</span>
              </div>
              <MobileNavToggle
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </MobileNavHeader>
            <MobileNavMenu
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-${idx}`}
                  href={item.link}
                  className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 transition-colors py-3 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      <AuroraBackground>
        <main className="flex flex-col items-center min-h-screen px-2 md:px-4 pt-20 md:pt-28 pb-8 md:pb-12 relative z-10 w-full">
          {/* Hero Section */}
          <section className="w-full flex flex-col items-center justify-center text-center mb-10 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 md:mb-4 tracking-tight">PII Masking Made Effortless</h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl md:max-w-2xl mx-auto mb-1 md:mb-2">Protect sensitive information in your text and files with real-time, secure, and customizable masking.</p>
          </section>

          {/* Get Started Section */}
          <section className="w-full max-w-6xl bg-white/70 dark:bg-gray-900/70 rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 mb-10 md:mb-16 border border-white/20">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-left">Get Started</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Text Input Card */}
              <div className="relative flex flex-col justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-white/20 min-h-[260px] md:min-h-[340px] min-w-0">
                <GlowingEffect 
                  disabled={false}
                  glow={true}
                  spread={30}
                  blur={0}
                  proximity={50}
                  variant="default"
                />
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2 text-left">Text Input</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-left text-sm md:text-base">Enter or paste your text to detect and mask PII</p>
                </div>
                <PlaceholdersAndVanishInput
                  placeholders={[
                    "Enter text with PII to mask...",
                    "Paste sensitive data here...",
                    "Type or paste content to anonymize..."
                  ]}
                  onChange={(e) => console.log(e.target.value)}
                  onSubmit={(e) => console.log("Submitted:", e)}
                />
              </div>
              {/* File Upload Card */}
              <div className="relative flex flex-col justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-white/20 min-h-[260px] md:min-h-[340px] min-w-0 mt-6 lg:mt-0">
                <GlowingEffect 
                  disabled={false}
                  glow={true}
                  spread={30}
                  blur={0}
                  proximity={50}
                  variant="default"
                />
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2 text-left">File Upload</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-left text-sm md:text-base">Upload documents, spreadsheets, or any file type</p>
                </div>
                <FileUpload />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full max-w-6xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-left">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Feature Card 1 */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 h-full transition-transform hover:scale-[1.025] hover:shadow-2xl min-w-0">
                <GlowingEffect 
                  disabled={false}
                  glow={true}
                  spread={20}
                  blur={0}
                  proximity={30}
                  variant="default"
                />
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 md:w-7 md:h-7 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Real-time Detection</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Instantly detect and highlight PII in your content</p>
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 h-full transition-transform hover:scale-[1.025] hover:shadow-2xl min-w-0">
                <GlowingEffect 
                  disabled={false}
                  glow={true}
                  spread={20}
                  blur={0}
                  proximity={30}
                  variant="default"
                />
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 md:w-7 md:h-7 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Secure Processing</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Your data is processed securely with end-to-end encryption</p>
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 h-full transition-transform hover:scale-[1.025] hover:shadow-2xl min-w-0">
                <GlowingEffect 
                  disabled={false}
                  glow={true}
                  spread={20}
                  blur={0}
                  proximity={30}
                  variant="default"
                />
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 md:w-7 md:h-7 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Fast Processing</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Process large documents in seconds with optimized algorithms</p>
                </div>
              </div>
              {/* Feature Card 4 */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 h-full transition-transform hover:scale-[1.025] hover:shadow-2xl min-w-0">
                <GlowingEffect 
                  disabled={false}
                  glow={true}
                  spread={20}
                  blur={0}
                  proximity={30}
                  variant="default"
                />
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 md:w-7 md:h-7 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Analytics Dashboard</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Track and analyze PII detection patterns and trends</p>
                </div>
              </div>
              {/* Feature Card 5 */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 h-full transition-transform hover:scale-[1.025] hover:shadow-2xl min-w-0">
                <GlowingEffect 
                  disabled={false}
                  glow={true}
                  spread={20}
                  blur={0}
                  proximity={30}
                  variant="default"
                />
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 md:w-7 md:h-7 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">Custom Rules</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Create custom detection rules for your specific needs</p>
                </div>
              </div>
              {/* Feature Card 6 */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-white/20 h-full transition-transform hover:scale-[1.025] hover:shadow-2xl min-w-0">
                <GlowingEffect 
                  disabled={false}
                  glow={true}
                  spread={20}
                  blur={0}
                  proximity={30}
                  variant="default"
                />
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-8 h-8 md:w-7 md:h-7 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">API Integration</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Integrate PII masking into your existing applications</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </AuroraBackground>
    </div>
  );
}