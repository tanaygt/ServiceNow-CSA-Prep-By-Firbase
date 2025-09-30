import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight, BookOpen, ClipboardCheck, Zap, MessageSquare, ExternalLink, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { learningResources } from "@/lib/data"
import { ResourceCard } from "@/components/resource-card"

export default function Dashboard() {
  const user = {
    name: "Tanay Shrivastava",
    certification: "CSA Certified Professional",
  }

  const quickActions = [
    { label: "Start Quiz", href: "/dashboard/quizzes", icon: ClipboardCheck, variant: "default" as const },
    { label: "AI Mentor", href: "/dashboard/ai-mentor", icon: MessageSquare, variant: "secondary" as const},
    { label: "Flashcards", href: "/dashboard/flashcards", icon: Zap, variant: "secondary" as const },
  ]
  
  const recentActivities = [
    { activity: "Completed 'Platform Overview' quiz", time: "2h ago", score: "90%" },
    { activity: "Viewed 'UI & Navigation' flashcards", time: "1d ago", score: null },
    { activity: "Started 'Database Management' module", time: "2d ago", score: null },
  ]

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">{user.certification}</p>
        </div>
        <Link href="/dashboard/learning-resources">
            <Button>
                View All Resources
            </Button>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="border-l-4 border-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">LinkedIn Profile</CardTitle>
                <Linkedin className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Connect for opportunities</p>
                <a 
                    href="https://www.linkedin.com/in/tanayshrivastava-cse/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button variant="outline" size="sm" className="w-full">
                        View Profile
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </a>
            </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resources Available</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{learningResources.length}</div>
            <p className="text-xs text-muted-foreground">
              Covering CSA and CAD certifications
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Quiz Score</CardTitle>
            <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88%</div>
            <p className="text-xs text-muted-foreground">
              Trending upwards
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
             {quickActions.map(action => (
                <Link key={action.href} href={action.href}>
                    <Button variant={action.variant} size="sm">
                        <action.icon className="mr-2 h-4 w-4" />
                        {action.label}
                    </Button>
                </Link>
             ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Top Learning Resources</CardTitle>
              <CardDescription>
                Direct links to kickstart your {user.certification} preparation.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/learning-resources">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {learningResources.slice(0, 4).map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            {recentActivities.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">{item.activity}</p>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                    {item.score && <div className="ml-auto font-medium">{item.score}</div>}
                </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
