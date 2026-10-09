import { z } from 'zod';

/**
 * Validation schema for Day 12 (Part 17/15): Add input validation and constraint rules for Post
 * Project: EcoShift
 */
export const post.validatorSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(2, 'Title must contain at least 2 characters').max(200),
  description: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'PENDING', 'COMPLETED']).default('ACTIVE'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  metadata: z.record(z.any()).optional(),
  createdAt: z.date().optional(),
});

export type post.validatorInput = z.infer<typeof post.validatorSchema>;

export const validatepost.validator = (payload: unknown) => {
  return post.validatorSchema.safeParse(payload);
};
