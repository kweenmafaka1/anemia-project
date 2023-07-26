// server.js

const express = require('express');
const app = express();

// Лимиты параметров (можно получить из базы данных или другого источника)
const parameterLimits = {
  "RBC": {
    upperLimit: 5.2,
    lowerLimit: 4.0,
  },
  "HGB": {
    upperLimit: 170.0,
    lowerLimit: 110.0,
  },
  "HCT": {
    upperLimit: 50.0,
    lowerLimit: 35.0,
  },
  // Добавьте другие параметры и их лимиты здесь
};

// Обработчик GET-запроса для получения лимитов параметров
app.get('/get_parameter_limits', (req, res) => {
  res.json(parameterLimits);
});

// Запускаем сервер на порту 3000
app.listen(3000, () => console.log('Server started on http://localhost:3000'));
