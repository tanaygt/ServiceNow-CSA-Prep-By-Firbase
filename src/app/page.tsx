import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, MessageSquare, BookOpen, Award } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'Interactive Learning Modules',
      description: 'Engage with comprehensive modules covering all CSA and CAD exam objectives.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Realistic Quiz System',
      description: 'Test your knowledge with quizzes that mimic the real certification exam.',
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: 'AI-Powered Mentor',
      description: 'Get instant answers to your questions from an AI mentor trained on ServiceNow content.',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Dynamic Flashcards',
      description: 'Memorize key concepts efficiently with our interactive flashcard system.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Logo />
          <span className="sr-only">ServiceNow Prep</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/login" prefetch={false}>
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Master ServiceNow Certifications
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your all-in-one platform for CSA and CAD exam preparation. Interactive modules, AI-powered mentoring, and realistic quizzes to ensure your success.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login" prefetch={false}>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Start Learning Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <div className="bg-primary/10 p-8 rounded-full">
                    <div className="bg-primary/20 p-8 rounded-full">
                        <Logo className="h-48 w-48 text-primary" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Accelerate Your Certification Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide all the tools you need to pass your ServiceNow exams with confidence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="grid gap-1 text-center">
                    <div className="flex justify-center items-center mb-4">
                        {feature.icon}
                    </div>
                  <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Ready to Become ServiceNow Certified?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join now and take the first step towards advancing your career.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Link href="/login" prefetch={false}>
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Sign Up for Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 ServiceNow Prep. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
