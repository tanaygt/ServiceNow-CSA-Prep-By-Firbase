"use client"

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
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

export function FlashcardComponent({ flashcards }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  return (
    <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        <div className="w-full h-80 perspective-1000">
            <Card
                className={cn(
                'relative w-full h-full transform-style-preserve-3d transition-transform duration-700 cursor-pointer',
                { 'rotate-y-180': isFlipped }
                )}
                onClick={handleFlip}
            >
                {/* Front of the card */}
                <div className="absolute w-full h-full backface-hidden flex flex-col justify-center items-center p-6 text-center">
                    <CardContent className='flex flex-col items-center justify-center'>
                        <Badge variant="secondary" className='absolute top-4 right-4'>{currentCard.domain}</Badge>
                        <p className="text-2xl font-semibold">{currentCard.front}</p>
                    </CardContent>
                </div>
                {/* Back of the card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6 text-center bg-secondary">
                    <CardContent className='flex flex-col items-center justify-center'>
                       <Badge variant="secondary" className='absolute top-4 right-4'>{currentCard.domain}</Badge>
                       <p className="text-lg">{currentCard.back}</p>
                    </CardContent>
                </div>
            </Card>
        </div>

        <p className="text-muted-foreground">
            Card {currentIndex + 1} of {flashcards.length}
        </p>

        <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePrev}>
            <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button onClick={handleFlip} className='min-w-[120px]'>
                <RotateCw className="mr-2 h-4 w-4" />
                Flip Card
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
            <ArrowRight className="h-4 w-4" />
            </Button>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
