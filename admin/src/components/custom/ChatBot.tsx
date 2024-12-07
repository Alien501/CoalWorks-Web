import React, { useState, useRef, ChangeEvent } from 'react'
import { SendHorizontal, X, Paperclip } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'

interface Message {
    id: number;
    content: string;
    role: 'user' | 'assistant';
}

interface ChatBotProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (input.trim() === '') return;

        const userMessage: Message = {
            id: Date.now(),
            content: input,
            role: 'user'
        }
        setMessages(prevMessages => [...prevMessages, userMessage])

        setInput('')
        setIsLoading(true)

        setTimeout(() => {
            const assistantMessage: Message = {
                id: Date.now() + 1,
                content: `No. of active shifts: 13`,
                role: 'assistant'
            }
            setMessages(prevMessages => [...prevMessages, assistantMessage])
            setIsLoading(false)
        }, 1000)
    }

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const fileNames = Array.from(files).map(file => file.name).join(', ')
            const fileMessage: Message = {
                id: Date.now(),
                content: `Uploaded files: ${fileNames}`,
                role: 'user'
            }
            setMessages(prevMessages => [...prevMessages, fileMessage])
        }
    }

    if (!isOpen) return null

    return (
        <Card className="fixed right-4 bottom-20 w-96 h-[600px] flex flex-col shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Chat Assistant</h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <ScrollArea className="flex-1 p-4 overflow-y-auto">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                    >
                        <span
                            className={`inline-block p-2 rounded-lg max-w-[80%] break-words ${
                                message.role === 'user'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
                            }`}
                        >
                            {message.content}
                        </span>
                    </div>
                ))}
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
    )
}