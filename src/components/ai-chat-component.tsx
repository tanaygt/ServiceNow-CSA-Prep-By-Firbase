"use client"

import React, { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Loader, Bot, User, ChevronDown, ChevronUp } from "lucide-react"
import { aiMentorChat } from "@/ai/flows/ai-chat-mentor"

interface Message {
  role: "user" | "assistant"
  content: string
}

function AIMessage({ text }: { text: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 200;

    if (text.length <= maxLength || isExpanded) {
        return (
            <div className="whitespace-pre-wrap">
                <p>{text}</p>
                {text.length > maxLength && (
                    <Button
                        variant="link"
                        size="sm"
                        onClick={() => setIsExpanded(false)}
                        className="px-0 h-auto text-primary"
                    >
                        Read less
                        <ChevronUp className="ml-1 h-4 w-4" />
                    </Button>
                )}
            </div>
        );
    }

    const truncatedText = text.substring(0, maxLength) + '...';
    return (
        <div>
            <p className="whitespace-pre-wrap">{truncatedText}</p>
            <Button
                variant="link"
                size="sm"
                onClick={() => setIsExpanded(true)}
                className="px-0 h-auto text-primary"
            >
                Read more
                <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
        </div>
    );
};

export function AiChatComponent() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const suggestedQuestions = [
    "What is an Update Set?",
    "Explain Business Rules.",
    "Difference between UI Policy and Client Script?",
  ]

  const handleSubmit = async (e: React.FormEvent, question?: string) => {
    e.preventDefault()
    const messageContent = question || inputValue
    if (!messageContent) return

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: messageContent },
    ]
    setMessages(newMessages)
    setInputValue("")
    setIsLoading(true)

    try {
      const result = await aiMentorChat({ message: messageContent, context: "User is studying for ServiceNow CSA/CAD certification." });
      setMessages([
        ...newMessages,
        { role: "assistant", content: result.response },
      ])
    } catch (error) {
      console.error("AI Mentor Error:", error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    }
  }, [messages, isLoading])

  return (
    <Card className="flex flex-col h-[calc(100vh-180px)]">
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
          <div className="space-y-6">
            {messages.length === 0 && (
                <div className="text-center text-muted-foreground pt-10">
                    <Bot className="mx-auto h-12 w-12 mb-4" />
                    <p>No messages yet. Start by asking a question.</p>
                </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 ${
                  message.role === "user" ? "justify-end" : ""
                }`}
              >
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[85%] rounded-lg p-4 break-words text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.role === "assistant" ? <AIMessage text={message.content} /> : <p>{message.content}</p> }
                </div>
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback><User /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback><Bot /></AvatarFallback>
                </Avatar>
                <div className="bg-muted p-3 rounded-lg flex items-center">
                  <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t p-4 bg-card">
            {messages.length === 0 && (
                <div className="flex gap-2 mb-2 flex-wrap justify-center">
                    {suggestedQuestions.map(q => (
                        <Button key={q} variant="outline" size="sm" onClick={(e) => handleSubmit(e, q)}>{q}</Button>
                    ))}
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading || !inputValue}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
