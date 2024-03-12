// eslint-disable-next-line import/no-unresolved
import { defineCollection, z } from 'astro:content';

import { formatDate } from '@/utils/date';

const greetingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform(formatDate),
    description: z.string(),
    image: z.string().optional().nullable(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  greetings: greetingsCollection,
};
