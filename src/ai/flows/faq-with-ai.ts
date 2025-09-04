'use server';

/**
 * @fileOverview A FAQ answering AI agent for Cetox30.
 *
 * - answerQuestion - A function that answers questions about Cetox30.
 * - FAQWithAIInput - The input type for the answerQuestion function.
 * - FAQWithAIOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FAQWithAIInputSchema = z.object({
  question: z.string().describe('The question to answer about Cetox30.'),
});
export type FAQWithAIInput = z.infer<typeof FAQWithAIInputSchema>;

const FAQWithAIOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Cetox30.'),
});
export type FAQWithAIOutput = z.infer<typeof FAQWithAIOutputSchema>;

export async function answerQuestion(input: FAQWithAIInput): Promise<FAQWithAIOutput> {
  return faqWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqWithAIPrompt',
  input: {schema: FAQWithAIInputSchema},
  output: {schema: FAQWithAIOutputSchema},
  prompt: `You are a helpful AI assistant specialized in answering questions about the Cetox30 plan.

  Use the following information to answer the question.

  The Cetox30 Plan is a revolutionary 30-day weight loss system that helps people lose up to 10 kilos in a single month. It's designed for people who have tried everything without success. It's a simple 30-day eating plan that helps you achieve the body you want without going hungry. The plan is scientifically proven and comes with a 100% money-back guarantee.

  Key features:
  - See results in the first 7 days.
  - Step-by-step system, so you know exactly what to do each day.
  - Holistic transformation of your life.
  - Activates automatic fat burning 24 hours a day, while eating what you like, without suffering and without physical exercise.
  - Uncovers the true culprit of excess weight and how high-fat foods can help you lose weight faster.
  - Stimulates ketosis, a natural process of the body, promoting more efficient fat burning.
  - Includes simple and quick recipes that speed up metabolism and enhance ketosis.
  - Comes with two exclusive bonuses: "CETOX30 DESSERTS" and "SECRETS FOR A SUCCESSFUL DIET" ebooks.
  
  The plan has a 15-day unconditional guarantee.

  Question: {{{question}}}
  `,
});

const faqWithAIFlow = ai.defineFlow(
  {
    name: 'faqWithAIFlow',
    inputSchema: FAQWithAIInputSchema,
    outputSchema: FAQWithAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
