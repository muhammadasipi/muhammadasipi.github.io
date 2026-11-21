import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleId: z.string().optional(),
    order: z.number(),
    status: z.enum(['completed', 'in-progress']).optional(),
    summary: z.string().optional(),
    problem: z.string().optional(),
    methods: z.string().optional(),
    results: z.string().optional(),
    limitations: z.string().optional(),
    nextSteps: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    fullTitleTodo: z.boolean().default(false),
    journal: z.string().optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    page: z.string().optional(),
    year: z.string().optional(),
    doi: z.string().optional(),
    authors: z.string().optional(),
    url: z.string().url(),
    order: z.number(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleId: z.string().optional(),
    date: z.coerce.date(),
    summary: z.string(),
    summaryId: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, publications, notes };
