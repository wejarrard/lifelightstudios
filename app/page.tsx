"use client";
import { Clock, CheckCircle, Star, Calendar, Package, Bell } from 'feather-icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-gray-800" style={{ background: 'linear-gradient(to bottom, #FFFFFF, #F0F0F0)' }}>
      {/* Header */}
      <header className="backdrop-blur-md shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: '#11181C' }}>Lifelight Studios</h1>
          <nav>
            <a href="#features" className="hover:opacity-80 mx-3" style={{ color: '#11181C' }}>Features</a>
            <a href="#download" className="hover:opacity-80 mx-3" style={{ color: '#11181C' }}>Download</a>
            <a href="/privacy" className="hover:opacity-80 mx-3" style={{ color: '#11181C' }}>Privacy</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold leading-tight"
          style={{ color: '#11181C' }}
        >
          We make simple apps for a brighter, healthier you.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-xl"
          style={{ color: '#687076' }}
        >
          Introducing our first app, here to bring calm to your day.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <h3 className="text-4xl font-bold" style={{ color: '#11181C' }}>Dose: Medication, simplified.</h3>
        </motion.div>
      </main>

      {/* App Screenshot Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="container mx-auto px-6 text-center"
      >
        <div className="bg-white rounded-xl p-4 inline-block" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
          <Image
            src="/dose.png"
            alt="Dose app screenshot showing medication tracking for Vitamin D3, Levothyroxine, and Amoxicillin"
            width={320}
            height={693}
            className="rounded-lg"
          />
        </div>
      </motion.div>

      {/* Problem & Solution */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="py-20 mt-20"
        style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold" style={{ color: '#11181C' }}>The Challenge of Medication Adherence</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: '#687076' }}>
              Forgetting to take medication is a common, stressful problem. It can lead to anxiety and negative health outcomes, whether you're managing a chronic condition or a short-term illness.
            </p>
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold" style={{ color: '#11181C' }}>A Simple, Positive Solution</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto" style={{ color: '#687076' }}>
              "Dose" is your personal medication assistant. It transforms the chore of managing meds into a motivating and peaceful experience, giving you back control over your health routine.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl font-bold text-center"
            style={{ color: '#11181C' }}
          >
            Core Features of Dose
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8" style={{ color: '#F8B4B4' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold" style={{ color: '#11181C' }}>Medication & Dose Scheduling</h3>
                <p className="mt-1" style={{ color: '#687076' }}>Easily add your medications, specify quantity, and set up multiple daily dose times.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8" style={{ color: '#F8B4B4' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold" style={{ color: '#11181C' }}>Daily Tracking</h3>
                <p className="mt-1" style={{ color: '#687076' }}>A simple daily view to mark doses as "taken" with a satisfying progress ring.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <Star className="h-8 w-8" style={{ color: '#F8B4B4' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold" style={{ color: '#11181C' }}>Motivation through Gamification</h3>
                <p className="mt-1" style={{ color: '#687076' }}>Build a "streak" of consecutive days to stay motivated and on track.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <Bell className="h-8 w-8" style={{ color: '#F8B4B4' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold" style={{ color: '#11181C' }}>Timely Reminders</h3>
                <p className="mt-1" style={{ color: '#687076' }}>Smart notifications to offload the mental burden and reduce forgotten doses.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <Package className="h-8 w-8" style={{ color: '#F8B4B4' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold" style={{ color: '#11181C' }}>Inventory Management</h3>
                <p className="mt-1" style={{ color: '#687076' }}>Track your "pills left" and get alerts when you're running low.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <Calendar className="h-8 w-8" style={{ color: '#F8B4B4' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold" style={{ color: '#11181C' }}>History & Insight</h3>
                <p className="mt-1" style={{ color: '#687076' }}>A calendar view provides a full history to see your adherence patterns over time.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="text-white" style={{ backgroundColor: '#F8B4B4' }}>
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Get Dose Today</h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>Take the first step towards a simpler and more consistent health routine.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#" className="bg-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition" style={{ color: '#11181C' }}>
              Download on the App Store
            </a>
            <a href="#" className="font-bold py-3 px-6 rounded-lg hover:opacity-90 transition" style={{ backgroundColor: '#11181C', color: '#fff' }}>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-6 py-4 text-center" style={{ color: '#687076' }}>
          <p>&copy; 2025 Lifelight Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
