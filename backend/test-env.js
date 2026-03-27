import dotenv from 'dotenv';
dotenv.config();

console.log('TMDB_API_KEY:', process.env.TMDB_API_KEY);
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Sí' : 'No');
console.log('Todas las variables:', Object.keys(process.env).filter(key => key.includes('TMDB')));