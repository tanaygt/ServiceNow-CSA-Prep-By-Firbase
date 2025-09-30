import { QuizComponent } from "@/components/quiz-component";
import { questions } from "@/lib/data";

export default function QuizzesPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Test Your Knowledge</h1>
        <p className="text-muted-foreground">
          Select a domain and start a quiz to see how prepared you are.
        </p>
      </div>
      <div className="flex items-start justify-center">
        <QuizComponent questions={questions} />
      </div>
    </>
  )
}
