"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { CheckCircle, XCircle, RotateCw } from "lucide-react"

type Question = {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

type QuizProps = {
  questions: Question[]
}

export function QuizComponent({ questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    setIsAnswered(true)
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    setIsAnswered(false)
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setIsFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setIsFinished(false)
  }

  if (isFinished) {
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Quiz Completed!</CardTitle>
          <CardDescription>Here's how you did:</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-4xl font-bold">
            {score} / {questions.length}
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Your score: {((score / questions.length) * 100).toFixed(0)}%
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRestart} className="w-full">
            <RotateCw className="mr-2 h-4 w-4" />
            Take Again
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="font-headline">Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
        <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="mt-2 h-2" />
        <CardDescription className="pt-4 text-lg text-foreground">{currentQuestion.question}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {currentQuestion.options.map((option, index) => {
          const isCorrect = index === currentQuestion.correctAnswer
          const isSelected = index === selectedAnswer

          return (
            <Button
              key={index}
              variant="outline"
              className={cn(
                "h-auto justify-start text-left whitespace-normal p-4 text-base",
                isAnswered && isCorrect && "bg-green-100 border-green-400 text-green-800 hover:bg-green-200 dark:bg-green-900/50 dark:border-green-700 dark:text-green-300",
                isAnswered && isSelected && !isCorrect && "bg-red-100 border-red-400 text-red-800 hover:bg-red-200 dark:bg-red-900/50 dark:border-red-700 dark:text-red-300",
                !isAnswered && isSelected && "bg-primary/10 border-primary"
              )}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
            >
              <span className="mr-4 font-bold">{String.fromCharCode(65 + index)}</span>
              <span>{option}</span>
              {isAnswered && isCorrect && <CheckCircle className="ml-auto h-5 w-5 text-green-600" />}
              {isAnswered && isSelected && !isCorrect && <XCircle className="ml-auto h-5 w-5 text-red-600" />}
            </Button>
          )
        })}
         {isAnswered && (
          <div className="mt-4 p-4 rounded-lg bg-secondary">
            <h4 className="font-bold">Explanation</h4>
            <p className="text-muted-foreground">{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {isAnswered ? (
          <Button onClick={handleNext} className="w-full">
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        ) : (
          <Button onClick={handleSubmit} className="w-full" disabled={selectedAnswer === null}>
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
