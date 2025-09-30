import { ResourceCard } from "@/components/resource-card";
import { learningResources } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function LearningResourcesPage() {

    const resourceTypes = [...new Set(learningResources.map(r => r.type))];

    const getResourcesByType = (type: string) => {
        return learningResources.filter(r => r.type === type);
    }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold font-headline">Learning Resources</h1>
        <p className="text-muted-foreground">
          Direct links to official ServiceNow learning materials.
        </p>
      </div>
      <div className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle>Video Courses</CardTitle>
                <CardDescription>Full video courses for ServiceNow certifications.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {getResourcesByType('youtube').map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Official Training & Documentation</CardTitle>
                <CardDescription>Official learning paths and documentation from ServiceNow.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {getResourcesByType('documentation').map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Practice & Assessment</CardTitle>
                <CardDescription>Practice tests, questions, and flashcards to prepare for the exam.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {getResourcesByType('practice').map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </CardContent>
        </Card>
      </div>
    </>
  );
}
