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
  prompt: `You are a helpful AI assistant specialized in answering questions about Cetox30.

  Use the following information to answer the question.

  Cetox30 is a revolutionary weight loss product designed to help you achieve your ideal body quickly and safely. With its unique blend of natural ingredients, Cetox30 boosts your metabolism, reduces appetite, and burns fat effectively. Experience a transformation in just 30 days!

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
