'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What platforms are supported?',
    answer: 'We only support the Windows 10 and 11 operating systems.',
  },
  {
    question: 'Is Flarial Client a cheat?',
    answer: 'No, Flarial Client is not and never will be a cheating software.',
  },
  {
    question: 'Is Flarial Client free?',
    answer: 'Yes, Flarial Client is both Free and Open-Source (GPL-3), and is powered through the hard work of our community members.'
  },
  {
    question: 'Can you use Flarial Client on servers?',
    answer: 'Yes, you can use it on any server that supports your Minecraft version.',
  },
  {
    question: 'Can you use your own resource packs?',
    answer: 'Yes, you can use your own resource packs.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-0">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="group border-b border-gray-800/50 last:border-b-0"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-start w-full text-left py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
          >
            <span className="text-base md:text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-200 pr-8 leading-relaxed">
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex-shrink-0 mt-1"
            >
              <svg
                className={`w-4 h-4 transition-colors duration-200 ${
                  openIndex === index ? 'text-red-500' : 'text-gray-600 group-hover:text-gray-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-gray-400 leading-relaxed text-base pr-12">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}