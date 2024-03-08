import { z } from 'zod';

export const groundSchema = z.object({
	city: z.string(),
	commune: z.string(),
	surfaceArea: z.number(),
	minPrice: z.number(),
	maxiPrice: z.number()
});
