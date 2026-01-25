import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: import.meta.env.PROD
    ? {
        // CONFIGURACIÓN PARA PRODUCCIÓN (CON SEGURIDAD)
        kind: 'github',
        repo: 'psystingod/mision21-web-private', // EJEMPLO: 'mision21/web-oficial'
      }
      
    : {
        // CONFIGURACIÓN PARA LOCALHOST (SIN LOGIN)
        kind: 'local',
      },
  collections: {
    // === BLOG / NEWS ===
    posts: collection({
      label: 'News About M21',
      slugField: 'title',
      path: 'src/content/blog/*', // Dónde se guardarán los archivos .md
      format: { contentField: 'content' }, // Usamos el cuerpo del markdown para el contenido
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción Corta', multiline: true }),
        pubDate: fields.date({ label: 'Fecha de Publicación' }),
        
        // CAMPO DE IDIOMA - IMPORTANTE PARA FILTRAR
        language: fields.select({
          label: 'Idioma',
          options: [
            { label: 'Español', value: 'es' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'es',
        }),
        
        // Configuración para la imagen destacada
        heroImage: fields.image({
          label: 'Imagen Principal',
          directory: 'public/blog-images', // Dónde se guardan físicamente
          publicPath: '/blog-images/',     // Cómo se accede en la web
        }),

        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/blog-images/content',
            publicPath: '/blog-images/content/',
          },
        }),
      },
    }),
    
    // === WRITINGS ===
    writings: collection({
      label: 'Luis Satoshi Writings', // Nombre que verás en el panel
      slugField: 'title',
      path: 'src/content/writings/*', // Carpeta separada para archivos MD/MDOC
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descripción Corta', multiline: true }),
        pubDate: fields.date({ label: 'Fecha de Publicación' }),
        
        // NUEVO CAMPO: AUTOR
        author: fields.text({
          label: 'Autor',
          defaultValue: 'Luis Satoshi',
        }),
        
        // CAMPO DE IDIOMA - IMPORTANTE PARA FILTRAR
        language: fields.select({
          label: 'Idioma',
          options: [
            { label: 'Español', value: 'es' },
            { label: 'English', value: 'en' },
          ],
          defaultValue: 'es',
        }),
        
        // Imágenes guardadas en su propia carpeta pública
        heroImage: fields.image({
          label: 'Imagen Principal',
          directory: 'public/writings-images', 
          publicPath: '/writings-images/',
        }),

        content: fields.document({
          label: 'Contenido',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/writings-images/content',
            publicPath: '/writings-images/content/',
          },
        }),
      },
    }),
  },
});