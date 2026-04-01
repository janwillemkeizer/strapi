import type { Core, Modules } from '@strapi/types';

export const createAiNamespace = (strapi: Core.Strapi): Modules.AI.AiNamespace => ({
  get admin(): Modules.AI.AiAdminService | undefined {
    try {
      return strapi.get('ai.admin');
    } catch {
      return undefined;
    }
  },
});
