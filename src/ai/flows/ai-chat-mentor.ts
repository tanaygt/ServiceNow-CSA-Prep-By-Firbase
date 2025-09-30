'use server';

/**
 * @fileOverview Implements the AI Chat Mentor feature for the ServiceNow Certification Hub.
 *
 * - aiMentorChat - An asynchronous function that accepts a message and chat context from the user and returns an AI-generated response.
 * - AiMentorChatInput - The input type for the aiMentorChat function, defining the structure for user messages and chat context.
 * - AiMentorChatOutput - The output type for the aiMentorChat function, defining the structure for the AI's response.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiMentorChatInputSchema = z.object({
  message: z.string().describe('The user message to be sent to the AI mentor.'),
  context: z.string().describe('The context of the conversation, including the current topic or certification path.'),
});
export type AiMentorChatInput = z.infer<typeof AiMentorChatInputSchema>;

const AiMentorChatOutputSchema = z.object({
  response: z.string().describe('The AI mentor response to the user message.'),
});
export type AiMentorChatOutput = z.infer<typeof AiMentorChatOutputSchema>;

export async function aiMentorChat(input: AiMentorChatInput): Promise<AiMentorChatOutput> {
  return aiMentorChatFlow(input);
}

const aiMentorChatPrompt = ai.definePrompt({
  name: 'aiMentorChatPrompt',
  input: {schema: AiMentorChatInputSchema},
  output: {schema: AiMentorChatOutputSchema},
  prompt: `You are a ServiceNow certification expert. A student is asking a question about ServiceNow CSA certification.
Student Question: {{{message}}}
Current Topic: {{{context}}}

IMPORTANT: Your response must be concise and easy to read. Keep each numbered point to a maximum of 3-4 sentences.

Please provide:
1. A clear, concise explanation of the concept. (3-4 sentences max)
2. Real-world examples of how it's used in a ServiceNow environment. (3-4 sentences max)
3. Recommended next steps for study, pointing to official documentation or other reliable resources. (3-4 sentences max)

Keep the response helpful, friendly, and focused on ServiceNow best practices.
`,
});

const aiMentorChatFlow = ai.defineFlow(
  {
    name: 'aiMentorChatFlow',
    inputSchema: AiMentorChatInputSchema,
    outputSchema: AiMentorChatOutputSchema,
  },
  async input => {
    const {output} = await aiMentorChatPrompt(input);
    return output!;
  }
);
