'use client'

import React, { useState, useRef, ChangeEvent } from 'react'
import { SendHorizontal, X, Paperclip, Bot } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LoadingDots } from './LoadingDots'
import { MessageBubble } from './MessageBubble'

interface Message {
  id: number
  content: string
  role: 'user' | 'assistant'
}

interface ChatBotProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (input.trim() === '') return;
  
    const userMessage: Message = {
      id: Date.now(),
      content: input,
      role: 'user',
    };
  
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    scrollToBottom();
  
    try {
      const res = await axios.post('http://192.168.110.223:8000/chatbot-query', {
        query: input,
      });
  
      const assistantReply = res.data.response;
  
      const assistantMessage: Message = {
        id: Date.now() + 1,
        content: assistantReply,
        role: 'assistant',
      };
  
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error communicating with chatbot:', error);
  
      const errorMessage: Message = {
        id: Date.now() + 2,
        content: 'Something went wrong. Please try again.',
        role: 'assistant',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };
  

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const fileNames = Array.from(files).map((file) => file.name).join(', ')
      const fileMessage: Message = {
        id: Date.now(),
        content: `Uploaded files: ${fileNames}`,
        role: 'user',
      }

      setMessages((prevMessages) => [...prevMessages, fileMessage])
      scrollToBottom()

      const formData = new FormData()
      Array.from(files).forEach((file) => {
        formData.append('file', file)
      })

      setIsLoading(true)

      try {
        await axios.post('http://192.168.110.223:8000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

        const successMessage: Message = {
          id: Date.now() + 1,
          content: `Files uploaded successfully.`,
          role: 'assistant',
        }
        setMessages((prevMessages) => [...prevMessages, successMessage])
      } catch (error) {
        const errorMessage: Message = {
          id: Date.now() + 2,
          content: `Failed to upload files. Please try again.`,
          role: 'assistant',
        }
        setMessages((prevMessages) => [...prevMessages, errorMessage])
        console.error('File upload failed:', error)
      } finally {
        setIsLoading(false)
        scrollToBottom()
      }
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="fixed right-4 bottom-20 w-96 h-[600px] flex flex-col shadow-xl bg-background">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/bot-avatar.png" alt="Chat Assistant" />
                  <AvatarFallback>
                    <Bot className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-lg font-semibold">Chat Assistant</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-2 rounded-lg">
                      <LoadingDots />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <form onSubmit={onSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,image/*"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || input.trim() === ''}
                >
                  <SendHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

