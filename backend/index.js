import express from 'express';
import cors from 'cors';

// 1. Inicializamos la aplicación de Express
const app = express();
const PORT = 3000;

// 2. Middlewares (filtros por donde pasan las peticiones antes de llegar a las rutas)
app.use(cors()); // Permite conexiones desde otros orígenes (como nuestro futuro frontend)
app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

// 3. Nuestra primera ruta de prueba (Endpoint GET)
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API de English Mastery Hub funcionando correctamente'
  });
});

// 4. Encendemos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});