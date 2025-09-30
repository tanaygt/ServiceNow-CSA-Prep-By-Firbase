import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube, FileText, CheckSquare } from "lucide-react";
import Link from "next/link";
  
type Resource = {
    id: string;
    title: string;
    description: string;
    type: 'youtube' | 'documentation' | 'practice' | 'career';
    url: string;
    category: string;
    duration: string;
}

const typeConfig = {
    youtube: {
        icon: Youtube,
        color: "bg-red-100 text-red-600",
    },
    documentation: {
        icon: FileText,
        color: "bg-blue-100 text-blue-600",
    },
    practice: {
        icon: CheckSquare,
        color: "bg-green-100 text-green-600",
    },
    career: {
        icon: CheckSquare,
        color: "bg-green-100 text-green-600",
    }
}

export function ResourceCard({ resource }: { resource: Resource }) {

    const Icon = typeConfig[resource.type].icon;

    return (
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${typeConfig[resource.type].color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <CardTitle className="font-headline text-xl">{resource.title}</CardTitle>
            </div>
            <CardDescription className="pt-2 !mt-0 h-12">{resource.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-sm text-muted-foreground">{resource.category} - {resource.duration}</div>
          </CardContent>
          <CardFooter>
            <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Resource
              </Button>
            </Link>
          </CardFooter>
        </Card>
      );
}
  
