import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// CAMBIO: Quitamos el argumento ({ image }) de aquí si lo tienes
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		
		// CAMBIO IMPORTANTE:
		// Antes tenías algo como: heroImage: image().refine(...) u optional()
		// Ahora lo cambiamos a z.string() para que acepte la ruta de Keystatic.
		heroImage: z.string().optional(),
	}),
});

// --- NUEVA COLECCIÓN WRITINGS ---
const writings = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
        // Importante: z.string() para que acepte la ruta de la imagen de Keystatic
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog, writings };