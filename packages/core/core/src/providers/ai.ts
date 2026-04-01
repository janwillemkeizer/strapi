import { defineProvider } from './provider';
import { createAiNamespace } from '../services/ai';

export default defineProvider({
  init(strapi) {
    strapi.add('ai', () => createAiNamespace(strapi));
  },
});
