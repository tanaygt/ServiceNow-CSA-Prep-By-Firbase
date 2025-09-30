import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, ClipboardCheck, Zap, MessageSquare, ExternalLink, Linkedin } from "lucide-react"
import { learningResources } from "@/lib/data"

export default function Dashboard() {
  const user = {
    name: "Tanay Shrivastava",
    certification: "CSA Certified Professional",
  }

  const quickActions = [
    { label: "Start Quiz", href: "/dashboard/quizzes", icon: ClipboardCheck },
    { label: "AI Mentor", href: "/dashboard/ai-mentor", icon: MessageSquare },
    { label: "Flashcards", href: "/dashboard/flashcards", icon: Zap },
    { label: "View Resources", href: "/dashboard/learning-resources", icon: BookOpen },
  ]

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-headline">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">{user.certification}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">LinkedIn Profile</CardTitle>
                <Linkedin className="h-5 w-5 text-blue-600" />
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
            <CardTitle className="text-lg font-semibold">Resources</CardTitle>
            <BookOpen className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{learningResources.length}</div>
            <p className="text-sm text-muted-foreground">
              Covering CSA and CAD
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Average Score</CardTitle>
            <ClipboardCheck className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">88%</div>
            <p className="text-sm text-muted-foreground">
              Trending upwards
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle className="text-center">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
            {quickActions.map(action => (
            <Link key={action.href} href={action.href} className="w-full">
                <Button variant="outline" className="w-full justify-start p-6 text-left h-auto">
                    <action.icon className="mr-4 h-6 w-6" />
                    <div>
                        <p className="font-semibold text-base">{action.label}</p>
                    </div>
                </Button>
            </Link>
            ))}
        </CardContent>
      </Card>
      
      <footer className="text-center text-muted-foreground text-sm">
        Application made by Tanay Shrivastava - ServiceNow CSA Certified
      </footer>
    </div>
  )
}
