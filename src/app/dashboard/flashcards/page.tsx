import { FlashcardComponent } from "@/components/flashcard-component";
import { flashcards } from "@/lib/data";

export default function FlashcardsPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Flashcards</h1>
        <p className="text-muted-foreground">
          Review key concepts and definitions to strengthen your knowledge.
        </p>
      </div>
      <div className="flex items-start justify-center">
        <FlashcardComponent flashcards={flashcards} />
      </div>
    </>
  );
}
