"use client"

import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RotateCw, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type Flashcard = {
  id: string;
  front: string;
  back: string;
  domain: string;
};

type FlashcardProps = {
  flashcards: Flashcard[];
};

const BATCH_SIZE = 10;

export function FlashcardComponent({ flashcards }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const visibleFlashcards = useMemo(() => flashcards.slice(0, visibleCount), [flashcards, visibleCount]);
  const currentCard = visibleFlashcards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    // Use a short timeout to allow the card to flip back before changing content
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % visibleFlashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    // Use a short timeout to allow the card to flip back before changing content
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + visibleFlashcards.length) % visibleFlashcards.length
      );
    }, 150);
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + BATCH_SIZE, flashcards.length));
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      handleFlip();
    }
  }

  if (!currentCard) {
    return (
        <div className="w-full max-w-2xl flex flex-col items-center gap-6 text-center">
            <p className="text-xl">No flashcards available.</p>
        </div>
    );
  }

  return (
    <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        <div className="w-full h-80 perspective">
            <div
                className={cn(
                'relative w-full h-full transform-style-3d transition-transform duration-700',
                { 'rotate-y-180': isFlipped }
                )}
            >
                {/* Front of the card */}
                <Card
                    className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-6 text-center"
                    onClick={handleFlip}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <CardContent className='flex flex-col items-center justify-center'>
                        <Badge variant="secondary" className='absolute top-4 right-4'>{currentCard.domain}</Badge>
                        <p className="text-2xl font-semibold">{currentCard.front}</p>
                    </CardContent>
                </Card>
                {/* Back of the card */}
                <Card 
                    className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6 text-center bg-secondary"
                    onClick={handleFlip}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    <CardContent className='flex flex-col items-center justify-center'>
                       <Badge variant="default" className='absolute top-4 right-4'>{currentCard.domain}</Badge>
                       <p className="text-lg">{currentCard.back}</p>
                    </CardContent>
                </Card>
            </div>
        </div>

        <p className="text-muted-foreground">
            Card {currentIndex + 1} of {visibleFlashcards.length} (Total: {flashcards.length})
        </p>

        <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePrev} disabled={visibleFlashcards.length <= 1}>
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous Card</span>
            </Button>
            <Button onClick={handleFlip} className='min-w-[120px]'>
                <RotateCw className="mr-2 h-4 w-4" />
                Flip Card
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext} disabled={visibleFlashcards.length <= 1}>
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next Card</span>
            </Button>
      </div>

      {visibleCount < flashcards.length && (
        <div className='mt-4'>
            <Button onClick={handleLoadMore}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Load More Flashcards ({visibleFlashcards.length} loaded)
            </Button>
        </div>
      )}
    </div>
  );
}
