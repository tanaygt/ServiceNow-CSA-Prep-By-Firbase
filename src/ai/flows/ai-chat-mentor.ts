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
  prompt: `CRITICAL: Maximum 2 sentences total. Under 80 words.

A student is asking a question about ServiceNow CSA certification.

Student Question: {{{message}}}
Current Topic: {{{context}}}

Answer format:
- One clear sentence answering directly
- One brief practical example or key point

NO sections. NO bullet points. NO long explanations.
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
