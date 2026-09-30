import { z } from 'zod';

/**
 * Validation schema for Write validation schemas for Channel entity
 * Project: EcoShift
 */
export const channel.validatorSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(2, 'Title must contain at least 2 characters').max(200),
  description: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'PENDING', 'COMPLETED']).default('ACTIVE'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  metadata: z.record(z.any()).optional(),
  createdAt: z.date().optional(),
});

export type channel.validatorInput = z.infer<typeof channel.validatorSchema>;

export const validatechannel.validator = (payload: unknown) => {
  return channel.validatorSchema.safeParse(payload);
};
