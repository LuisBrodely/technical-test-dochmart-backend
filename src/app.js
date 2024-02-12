const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dayRoutes = require("./routes/dayRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

const Day = require("./models/day");

mongoose
  .connect("mongodb://localhost:27017/backend-v3")
  .then(async () => {
    console.log("Conexión a MongoDB establecida");

    const existingDays = await Day.find();
    if (existingDays.length === 0) {
      const days = [];
      const diasSeptiembre = generarDiasSeptiembre(); 
      for (const date of diasSeptiembre) {
        const availableHours = Array.from({ length: 12 }, (_, i) => ({
          time: i + 7,
          reservations: [], 
        }));
        days.push({ date, availableHours });
      }

      await Day.insertMany(days);
      console.log("Días de septiembre generados con éxito");
    }
  })
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

const app = express();

generarDiasSeptiembre = () => {
  const diasSeptiembre = [];
  const inicioSeptiembre = new Date("2024-09-01");
  const finSeptiembre = new Date("2024-09-30");

  let currentDate = inicioSeptiembre;
  while (currentDate <= finSeptiembre) {
    diasSeptiembre.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return diasSeptiembre;
};

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/days", dayRoutes);
app.use("/api/reservations", reservationRoutes);

// Puerto definido
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
