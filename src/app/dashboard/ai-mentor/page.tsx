import { AiChatComponent } from "@/components/ai-chat-component";

export default function AiMentorPage() {
  return (
    <>
      <div className="mb-4">
        <h1 className="text-3xl font-bold font-headline">AI Mentor</h1>
        <p className="text-muted-foreground">
          Ask any question about ServiceNow certifications. I'm here to help!
        </p>
      </div>
      <AiChatComponent />
    </>
  )
}
