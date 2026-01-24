// src/i18n/utils.ts

import { translations } from './translations';

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations['es'];

/**
 * Obtiene el idioma desde la URL
 * @param url - URL actual
 * @returns 'es' o 'en'
 */
export function getLangFromUrl(url: URL): Language {
  const pathname = url.pathname;
  
  // Si la URL empieza con /en, es inglés
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  
  // Por defecto, español
  return 'es';
}

/**
 * Hook de traducción - retorna una función t() que traduce keys
 * @param lang - Idioma actual ('es' o 'en')
 * @returns Función de traducción
 */
export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations['es'][key] || key;
  };
}

/**
 * Obtiene la ruta traducida para una URL
 * @param currentPath - Ruta actual
 * @param targetLang - Idioma objetivo
 * @returns Ruta traducida
 */
export function getLocalizedPath(currentPath: string, targetLang: Language): string {
  // Remover /en si existe
  const pathWithoutLang = currentPath.replace(/^\/en/, '') || '/';
  
  // Si el idioma objetivo es inglés, agregar /en
  if (targetLang === 'en') {
    return `/en${pathWithoutLang}`;
  }
  
  // Si es español, retornar sin prefijo
  return pathWithoutLang;
}

/**
 * Detecta el idioma del navegador
 * @returns 'es' o 'en'
 */
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'en' ? 'en' : 'es';
}

/**
 * Traduce rutas de colecciones (blog, writings) manteniendo el slug
 * @param collection - Nombre de la colección ('blog' o 'writings')
 * @param slug - Slug del artículo
 * @param lang - Idioma objetivo
 * @returns Ruta completa traducida
 */
export function getCollectionPath(
  collection: 'blog' | 'writings',
  slug: string,
  lang: Language
): string {
  const prefix = lang === 'en' ? '/en' : '';
  return `${prefix}/${collection}/${slug}`;
}

/**
 * Obtiene la URL base de una colección
 * @param collection - Nombre de la colección
 * @param lang - Idioma
 * @returns Ruta base de la colección
 */
export function getCollectionIndexPath(
  collection: 'blog' | 'writings',
  lang: Language
): string {
  const prefix = lang === 'en' ? '/en' : '';
  return `${prefix}/${collection}`;
}