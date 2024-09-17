import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Globe } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const languages = [
  { code: 'en', name: 'English' },
  { code: 'he', name: 'עברית' }
]

interface dialogProps {
    setLangState: React.Dispatch<React.SetStateAction<string>>
    langState: string
}

export default function LanguageDialog(props : dialogProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={props.langState == '' || open}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2" onClick={() => {setOpen(true)}}>
          <Globe className="w-4 h-4" />
          Select Language בחר שפה
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose your language בחירת שפה</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`flex items-center justify-between px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                selectedLanguage === lang.code
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-900 hover:bg-orange-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang.name}
              {selectedLanguage === lang.code && <Check className="w-4 h-4 ml-2" />}
            </motion.button>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <Button
            onClick={() => {
              // Here you would typically update the app's language
              console.log(`Language set to: ${selectedLanguage}`)
              props.setLangState(selectedLanguage)
              setOpen(false)
            }}
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Confirm Selection
אישור          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}