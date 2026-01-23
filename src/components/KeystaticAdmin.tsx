// src/components/KeystaticAdmin.tsx
import { makePage } from '@keystatic/astro/ui';
// Importamos tu configuración
import config from '../../keystatic.config';

// makePage crea el componente de React ya configurado con tus colecciones
export const KeystaticAdmin = makePage(config);