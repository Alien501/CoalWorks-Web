import React from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User, Bot } from 'lucide-react'

interface Message {
  id: number
  content: string
  role: 'user' | 'assistant'
}

interface MessageBubbleProps {
  message: Message
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
        <Avatar className={isUser ? 'ml-2' : 'mr-2'}>
          <AvatarImage src={isUser ? '/user-avatar.png' : '/bot-avatar.png'} />
          <AvatarFallback>{isUser ? <User className="h-6 w-6" /> : <Bot className="h-6 w-6" />}</AvatarFallback>
        </Avatar>
        <div
          className={`p-3 rounded-lg max-w-[80%] ${
            isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
          }`}
        >
          {message.content}
        </div>
      </div>
    </motion.div>
  )
}

