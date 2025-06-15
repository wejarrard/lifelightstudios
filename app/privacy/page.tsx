"use client";
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="text-gray-800" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #F0F0F0)' }}>
      {/* Header */}
      <header className="backdrop-blur-md shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold hover:opacity-80" style={{ color: '#11181C' }}>Lifelight Studios</a>
          <nav>
            <a href="/#features" className="hover:opacity-80 mx-3" style={{ color: '#11181C' }}>Features</a>
            <a href="/#download" className="hover:opacity-80 mx-3" style={{ color: '#11181C' }}>Download</a>
            <a href="/privacy" className="hover:opacity-80 mx-3" style={{ color: '#11181C' }}>Privacy</a>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
            <h1 className="text-4xl font-bold mb-6" style={{ color: '#11181C' }}>Privacy Policy for Dose</h1>
            <p className="mb-6" style={{ color: '#687076' }}>
              <strong>Last Updated:</strong> January 2025
            </p>
            
            <div className="prose max-w-none">
              <p className="mb-6" style={{ color: '#687076' }}>
                Thank you for using Dose. Your privacy is important to us. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, and delete your information.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#11181C' }}>Information We Collect</h2>
              <p className="mb-6" style={{ color: '#687076' }}>
                We do not collect any personal information, and we do not use any third-party services that collect information. All data you generate within the app remains on your device.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#11181C' }}>Information You Provide to Us</h2>
              <p className="mb-6" style={{ color: '#687076' }}>
                For a personalized experience, the app allows you to set a name. This name is stored only on your local device and is never transmitted to us or any third parties. We do not have access to this information. If you delete the app, this information will be deleted as well.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#11181C' }}>Changes to This Privacy Policy</h2>
              <p className="mb-6" style={{ color: '#687076' }}>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              <p className="mb-6" style={{ color: '#687076' }}>
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-semibold mb-4 mt-8" style={{ color: '#11181C' }}>Contact Us</h2>
              <p className="mb-6" style={{ color: '#687076' }}>
                If you have any questions about this Privacy Policy, you can contact us by email: 
                <a href="mailto:wejarrard@gmail.com" className="ml-1 hover:opacity-80" style={{ color: '#F8B4B4' }}>
                  wejarrard@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-6 py-4 text-center" style={{ color: '#687076' }}>
          <p>&copy; 2025 Lifelight Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 