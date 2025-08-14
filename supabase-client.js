/**
 * ----------------------------------------------------------------
 * Archivo de Configuración de Supabase
 * ----------------------------------------------------------------
 * * INSTRUCCIONES:
 * 1. Ve a tu panel de control de Supabase.
 * 2. En el menú de la izquierda, ve a "Project Settings" (el ícono de engranaje).
 * 3. Haz clic en "API".
 * 4. Busca la sección "Project API keys".
 * 5. Copia el valor de "URL" y pégalo en la variable `supabaseUrl`.
 * 6. Copia el valor de "public" "anon" key y pégalo en la variable `supabaseKey`.
 * * ¡Y listo! Guarda este archivo como 'supabase-client.js' en la misma
 * carpeta que tus archivos HTML.
 */

const supabaseUrl = 'URL_DE_TU_PROYECTO_SUPABASE'; 
const supabaseKey = 'TU_LLAVE_PUBLICA_ANON';     // <-- Llave ANON correcta

// CORRECCIÓN: Usamos 'var' en lugar de 'const' para evitar un error de inicialización.
// Esto crea el cliente de Supabase que usaremos en toda la aplicación.
var supabase = supabase.createClient(supabaseUrl, supabaseKey);
