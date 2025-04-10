import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
  return [...new Set(array.map((str) => str.toLowerCase()))];
}

const baseSchema = z.object({
  title: z.string().max(60),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema.extend({
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
  }),
});

const note = defineCollection({
  loader: glob({ base: "./src/content/note", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema.extend({
    description: z.string().optional(),
    publishDate: z
      .string()
      .datetime({ offset: true }) // Ensures ISO 8601 format with offsets allowed (e.g. "2024-01-01T00:00:00Z" and "2024-01-01T00:00:00+02:00")
      .transform((val) => new Date(val)),
  }),
});

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: baseSchema.extend({
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

export const collections = { blog, note, work, projects };
