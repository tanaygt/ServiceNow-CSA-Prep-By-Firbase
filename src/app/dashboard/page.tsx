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
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight, BookOpen, ClipboardCheck, Zap, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { csamodules } from "@/lib/data"

export default function Dashboard() {
  const user = {
    name: "Learner",
    certification: "CSA",
    progress: 42,
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
          <p className="text-muted-foreground">Here's your progress on the {user.certification} certification path.</p>
        </div>
        <Link href="/dashboard/modules">
            <Button>
                View All Modules
            </Button>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Overall Progress
            </CardTitle>
            <div className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{user.progress}%</div>
            <p className="text-xs text-muted-foreground">
              +15% from last week
            </p>
            <Progress value={user.progress} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Modules Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1<span className="text-sm text-muted-foreground"> / {csamodules.length}</span></div>
            <p className="text-xs text-muted-foreground">
              'Platform Overview' completed
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
              <CardTitle>Certification Roadmap</CardTitle>
              <CardDescription>
                Your learning path for the {user.certification} exam.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/modules">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Module</TableHead>
                  <TableHead className="hidden sm:table-cell">Difficulty</TableHead>
                  <TableHead className="hidden md:table-cell">Duration</TableHead>
                  <TableHead className="text-right">Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {csamodules.slice(0, 5).map(module => (
                  <TableRow key={module.id}>
                    <TableCell>
                      <div className="font-medium">{module.title}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {module.description.substring(0, 40)}...
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                        <Badge variant={module.difficulty === 'beginner' ? 'secondary' : module.difficulty === 'intermediate' ? 'outline' : 'default' } className="capitalize">
                            {module.difficulty}
                        </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{module.duration} min</TableCell>
                    <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                            <span>{module.progress}%</span>
                            <Progress value={module.progress} className="w-20 h-2" />
                        </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
