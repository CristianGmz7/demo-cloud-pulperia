const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para evitar bloqueos entre frontend y backend
app.use(cors());
app.use(express.json());

// 1. DATA QUEMADA (Simulando la Base de Datos de la Pulpería)
const inventarioVentas = [
    { id: 1, producto: "Café de Palo (1 Lb)", cantidad: 2, total: 170.00, hora: "08:15 AM" },
    { id: 2, producto: "Harina Maseca", cantidad: 5, total: 75.00, hora: "09:30 AM" },
    { id: 3, producto: "Frijoles Rojos (1 Lb)", cantidad: 3, total: 60.00, hora: "11:00 AM" },
    { id: 4, producto: "Manteca Clover Brand", cantidad: 1, total: 45.00, hora: "01:20 PM" }
];

// 2. ENDPOINT TRADICIONAL (El contenedor responde)
app.get('/api/ventas', (req, res) => {
    res.json(inventarioVentas);
});

// 3. ENDPOINT SERVERLESS SIMULADO
// Se simula un retraso de 2 segundos para representar el "Cold Start" de una función Serverless
app.post('/api/cierre-serverless', (req, res) => {
    const totalCaja = inventarioVentas.reduce((acc, item) => acc + item.total, 0);
    
    setTimeout(() => {
        res.json({
            mensaje: "Cierre de caja generado vía Función Serverless.",
            totalLempiras: totalCaja,
            costoComputo: "$0.0000012"
        });
    }, 2000); 
});

app.listen(PORT, () => {
    console.log(`Contenedor de la Pulpería corriendo en el puerto ${PORT}`);
});