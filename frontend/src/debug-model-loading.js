// 🔍 Script de depuración para verificar por qué no cargan los modelos

async function debugModelLoading() {
  console.log('🔍 Iniciando depuración de carga de modelos...\n');

  // 1. Verificar que el backend esté corriendo
  console.log('1️⃣ Verificando conexión con el backend...');
  try {
    const healthResponse = await fetch('http://localhost:3000/api/health');
    if (healthResponse.ok) {
      console.log('✅ Backend está respondiendo');
    } else {
      console.log('❌ Backend responde con error:', healthResponse.status);
    }
  } catch (error) {
    console.log('❌ No se puede conectar al backend:', error.message);
    console.log('   Asegúrate de que el servidor esté corriendo en puerto 3000');
    return;
  }

  // 2. Verificar el endpoint de proveedores
  console.log('\n2️⃣ Verificando endpoint /api/ai/providers...');
  try {
    const response = await fetch('http://localhost:3000/api/ai/providers');
    console.log('   Status:', response.status);
    console.log('   Headers:', Object.fromEntries(response.headers.entries()));
    
    const text = await response.text();
    console.log('   Response length:', text.length);
    
    // Intentar parsear como JSON
    try {
      const data = JSON.parse(text);
      console.log('   Response data:', JSON.stringify(data, null, 2));
      
      if (data.success) {
        console.log('✅ Endpoint funciona correctamente');
        console.log('   Proveedores encontrados:', data.providers?.length || 0);
      } else {
        console.log('⚠️ Respuesta indica error:', data.error);
      }
    } catch (parseError) {
      console.log('❌ La respuesta no es JSON válido:', text.substring(0, 200));
    }
  } catch (error) {
    console.log('❌ Error al llamar al endpoint:', error);
  }

  // 3. Verificar CORS
  console.log('\n3️⃣ Verificando CORS...');
  try {
    const response = await fetch('http://localhost:3000/api/ai/providers', {
      method: 'OPTIONS'
    });
    console.log('   CORS headers:', {
      'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
      'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods')
    });
  } catch (error) {
    console.log('   No se pudo verificar CORS');
  }

  // 4. Sugerencias
  console.log('\n📝 SUGERENCIAS:');
  console.log('1. Verifica que hayas ejecutado: npm run dev en C:\\synapsis\\backend');
  console.log('2. Revisa la consola del backend para ver errores');
  console.log('3. Asegúrate de que MongoDB Atlas esté accesible');
  console.log('4. Verifica que las variables de entorno estén configuradas');
}

// Ejecutar la depuración
debugModelLoading();

// También puedes ejecutar esto en la consola del navegador:
/*
fetch('http://localhost:3000/api/ai/providers')
  .then(r => r.json())
  .then(data => console.log('Respuesta:', data))
  .catch(err => console.error('Error:', err));
*/
