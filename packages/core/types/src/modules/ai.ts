/**
 * AI service for the admin panel. Only present at runtime when EE + cms-ai feature is active
 */
export type AiAdminService = {
  getAiToken(): Promise<{ token: string; expiresAt?: string }>;
  getAIFeatureConfig(): Promise<{
    isAIi18nConfigured: boolean;
    isAIMediaLibraryConfigured: boolean;
  }>;
};

export type AiNamespace = {
  admin?: AiAdminService;
};
