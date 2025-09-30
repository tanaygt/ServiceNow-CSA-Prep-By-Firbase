import Image from "next/image"
import { csamodules } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen } from "lucide-react"

export default function ModulesPage() {
  const getImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === `module-${id.split('-')[1]}`)
    return img || PlaceHolderImages[0];
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Learning Modules</h1>
        <p className="text-muted-foreground">
          Browse through the modules to prepare for your CSA and CAD certifications.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {csamodules.map((module) => {
          const placeholder = getImage(module.id);
          return (
            <Card key={module.id} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                    <Image
                        src={placeholder.imageUrl}
                        alt={placeholder.description}
                        fill
                        className="object-cover rounded-t-lg"
                        data-ai-hint={placeholder.imageHint}
                    />
                </div>
                <div className="p-6 pb-2">
                    <div className="flex justify-between items-start mb-2">
                        <Badge variant={module.certification === 'CSA' ? 'default' : 'secondary'}>{module.certification}</Badge>
                        <Badge variant="outline" className="capitalize">{module.difficulty}</Badge>
                    </div>
                    <CardTitle className="font-headline">{module.title}</CardTitle>
                    <CardDescription className="mt-1 h-10">{module.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-2">
                <div className="text-sm text-muted-foreground mb-2">{module.duration} min duration</div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-12">{module.progress}%</span>
                    <Progress value={module.progress} className="h-2 flex-1" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    {module.progress > 0 && module.progress < 100 ? 'Continue' : module.progress === 100 ? 'Review' : 'Start'} Module
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}
