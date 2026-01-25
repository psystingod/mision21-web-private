import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// NUEVO: Campo de idioma (REQUERIDO para i18n)
		language: z.enum(['es', 'en']).default('es'),
	}),
});

const writings = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// NUEVO: Campo de autor
		author: z.string().default('Luis Satoshi'),
		// NUEVO: Campo de idioma (REQUERIDO para i18n)
		language: z.enum(['es', 'en']).default('es'),
	}),
});

export const collections = { blog, writings };