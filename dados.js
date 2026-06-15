// Malha Rodoviária Completa da Região Metropolitana de Gurupi
const dadosRodoviarios = [
 
  // --- EIXO 1: BR-153 (NORTE E SUL)
  
  { "origem": "Santa Rita do Tocantins, TO", "destino": "Crixás do Tocantins, TO", "distancia": "93.4 km", "tempo": "1 hora 3 minutos", "degradacao": 2 },
  { "origem": "Crixás do Tocantins, TO", "destino": "Aliança do Tocantins, TO", "distancia": "29.2 km", "tempo": "22 minutos", "degradacao": 2 },
  { "origem": "Aliança do Tocantins, TO", "destino": "Dueré, TO", "distancia": "54.0 km", "tempo": "48 minutos", "degradacao": 5 },
  { "origem": "Aliança do Tocantins, TO", "destino": "Gurupi, TO", "distancia": "71.0 km", "tempo": "52 minutos", "degradacao": 2 },
  
  { "origem": "Gurupi, TO", "destino": "Dueré, TO", "distancia": "43.5 km", "tempo": "45 minutos", "degradacao": 5 },
  { "origem": "Gurupi, TO", "destino": "Sucupira, TO", "distancia": "50.1 km", "tempo": "53 minutos", "degradacao": 6 },
  { "origem": "Gurupi, TO", "destino": "Peixe, TO", "distancia": "92.0 km", "tempo": "1 hora 10 minutos", "degradacao": 3 },
  { "origem": "Gurupi, TO", "destino": "Cariri do Tocantins, TO", "distancia": "17.1 km", "tempo": "15 minutos", "degradacao": 2 },

  { "origem": "Cariri do Tocantins, TO", "destino": "Figueirópolis, TO", "distancia": "31.8 km", "tempo": "34 minutos", "degradacao": 3 },
  { "origem": "Cariri do Tocantins, TO", "destino": "Formoso do Araguaia, TO", "distancia": "75.4 km", "tempo": "1 hora 10 minutos", "degradacao": 5 },

  { "origem": "Figueirópolis, TO", "destino": "Sucupira, TO", "distancia": "24.9 km", "tempo": "30 minutos", "degradacao": 6 },
  { "origem": "Figueirópolis, TO", "destino": "Alvorada, TO", "distancia": "44.0 km", "tempo": "39 minutos", "degradacao": 3 },
  { "origem": "Figueirópolis, TO", "destino": "Peixe, TO", "distancia": "120.0 km", "tempo": "1 hora 40 minutos", "degradacao": 5 },

  { "origem": "Alvorada, TO", "destino": "Talismã, TO", "distancia": "31.2 km", "tempo": "25 minutos", "degradacao": 2 },
  { "origem": "Alvorada, TO", "destino": "Araguaçu, TO", "distancia": "135.0 km", "tempo": "2 horas 10 minutos", "degradacao": 6 },
  { "origem": "Alvorada, TO", "destino": "Peixe, TO", "distancia": "139.0 km", "tempo": "1 hora 50 minutos", "degradacao": 4 },
  { "origem": "Alvorada, TO", "destino": "Jaú do Tocantins, TO", "distancia": "101.0 km", "tempo": "1 hora 30 minutos", "degradacao": 5 },
  { "origem": "Alvorada, TO", "destino": "São Valério, TO", "distancia": "148.0 km", "tempo": "2 horas 25 minutos", "degradacao": 7 },

  { "origem": "Talismã, TO", "destino": "Jaú do Tocantins, TO", "distancia": "118.0 km", "tempo": "1 hora 45 minutos", "degradacao": 6 },

 
  // --- EIXO 2: OESTE DA BR-153 (ARAGUAIA)
 
  { "origem": "Dueré, TO", "destino": "Formoso do Araguaia, TO", "distancia": "65.5 km", "tempo": "50 minutos", "degradacao": 5 },
  { "origem": "Formoso do Araguaia, TO", "destino": "Sandolândia, TO", "distancia": "104.0 km", "tempo": "1 hora 40 minutos", "degradacao": 7 },
  { "origem": "Sandolândia, TO", "destino": "Araguaçu, TO", "distancia": "54.2 km", "tempo": "1 hora 5 minutos", "degradacao": 8 },

  
  // --- EIXO 3: LESTE DA BR-153 (SUDESTE/SERRAS)
 
  { "origem": "Jaú do Tocantins, TO", "destino": "Palmeirópolis, TO", "distancia": "52.7 km", "tempo": "45 minutos", "degradacao": 5 },
  { "origem": "Jaú do Tocantins, TO", "destino": "São Salvador do Tocantins, TO", "distancia": "36.2 km", "tempo": "35 minutos", "degradacao": 6 },
  { "origem": "Jaú do Tocantins, TO", "destino": "Peixe, TO", "distancia": "75.1 km", "tempo": "1 hora 2 minutos", "degradacao": 6 },
  { "origem": "Jaú do Tocantins, TO", "destino": "São Valério, TO", "distancia": "135.0 km", "tempo": "2 horas 5 minutos", "degradacao": 7 },

  { "origem": "Palmeirópolis, TO", "destino": "São Salvador do Tocantins, TO", "distancia": "48.3 km", "tempo": "42 minutos", "degradacao": 6 },

  { "origem": "São Salvador do Tocantins, TO", "destino": "Peixe, TO", "distancia": "64.8 km", "tempo": "55 minutos", "degradacao": 5 },
  { "origem": "São Salvador do Tocantins, TO", "destino": "Paranã, TO", "distancia": "81.4 km", "tempo": "1 hora 25 minutos", "degradacao": 7 },

  { "origem": "Paranã, TO", "destino": "Arraias, TO", "distancia": "111.0 km", "tempo": "2 horas", "degradacao": 8 },
  { "origem": "Paranã, TO", "destino": "Conceição do Tocantins, TO", "distancia": "134.0 km", "tempo": "2 horas 15 minutos", "degradacao": 7 },
  { "origem": "Paranã, TO", "destino": "Taguatinga, TO", "distancia": "164.0 km", "tempo": "2 horas 40 minutos", "degradacao": 8 },
  { "origem": "Paranã, TO", "destino": "São Valério, TO", "distancia": "119.0 km", "tempo": "2 horas", "degradacao": 8 },
  { "origem": "Paranã, TO", "destino": "Peixe, TO", "distancia": "110.0 km", "tempo": "1 hora 50 minutos", "degradacao": 7 },

  { "origem": "Arraias, TO", "destino": "Conceição do Tocantins, TO", "distancia": "98.2 km", "tempo": "1 hora 20 minutos", "degradacao": 4 },
  { "origem": "Arraias, TO", "destino": "Combinado, TO", "distancia": "42.5 km", "tempo": "35 minutos", "degradacao": 4 },
  { "origem": "Arraias, TO", "destino": "Taguatinga, TO", "distancia": "95.6 km", "tempo": "1 hora 20 minutos", "degradacao": 4 },

  { "origem": "Combinado, TO", "destino": "Novo Alegre, TO", "distancia": "14.2 km", "tempo": "15 minutos", "degradacao": 5 },
  { "origem": "Combinado, TO", "destino": "Lavandeira, TO", "distancia": "8.5 km", "tempo": "10 minutos", "degradacao": 5 },

  { "origem": "Lavandeira, TO", "destino": "Aurora do Tocantins, TO", "distancia": "16.1 km", "tempo": "18 minutos", "degradacao": 5 },

  { "origem": "Aurora do Tocantins, TO", "destino": "Taguatinga, TO", "distancia": "28.3 km", "tempo": "25 minutos", "degradacao": 4 },

  { "origem": "Taguatinga, TO", "destino": "Taipas do Tocantins, TO", "distancia": "98.0 km", "tempo": "1 hora 35 minutos", "degradacao": 6 },
  { "origem": "Taguatinga, TO", "destino": "Ponte Alta do Bom Jesus, TO", "distancia": "47.2 km", "tempo": "40 minutos", "degradacao": 5 },
  { "origem": "Taguatinga, TO", "destino": "Conceição do Tocantins, TO", "distancia": "63.5 km", "tempo": "52 minutos", "degradacao": 4 },

  { "origem": "Ponte Alta do Bom Jesus, TO", "destino": "Taipas do Tocantins, TO", "distancia": "61.3 km", "tempo": "55 minutos", "degradacao": 6 },
  { "origem": "Ponte Alta do Bom Jesus, TO", "destino": "Novo Jardim, TO", "distancia": "52.4 km", "tempo": "45_minutos", "degradacao": 5 },

  { "origem": "Novo Jardim, TO", "destino": "Dianópolis, TO", "distancia": "31.0 km", "tempo": "28 minutos", "degradacao": 4 },

  { "origem": "Dianópolis, TO", "destino": "Porto Alegre do Tocantins, TO", "distancia": "26.3 km", "tempo": "24 minutos", "degradacao": 4 },
  { "origem": "Dianópolis, TO", "destino": "Rio da Conceição, TO", "distancia": "24.5 km", "tempo": "28 minutos", "degradacao": 5 },
  { "origem": "Dianópolis, TO", "destino": "Taipas do Tocantins, TO", "distancia": "67.8 km", "tempo": "1 hora", "degradacao": 6 },

  { "origem": "Porto Alegre do Tocantins, TO", "destino": "Rio da Conceição, TO", "distancia": "50.8 km", "tempo": "52 minutos", "degradacao": 6 },
  { "origem": "Porto Alegre do Tocantins, TO", "destino": "Almas, TO", "distancia": "41.2 km", "tempo": "35 minutos", "degradacao": 4 },
  { "origem": "Porto Alegre do Tocantins, TO", "destino": "Taipas do Tocantins, TO", "distancia": "55.4 km", "tempo": "50 minutos", "degradacao": 6 },

  { "origem": "Rio da Conceição, TO", "destino": "Almas, TO", "distancia": "49.0 km", "tempo": "55 minutos", "degradacao": 5 },

  { "origem": "Natividade, TO", "destino": "Almas, TO", "distancia": "36.5 km", "tempo": "32 minutos", "degradacao": 4 },
  { "origem": "Natividade, TO", "destino": "São Valério, TO", "distancia": "69.1 km", "tempo": "1 hora 15 minutos", "degradacao": 6 },
  { "origem": "Natividade, TO", "destino": "Paranã, TO", "distancia": "136.0 km", "tempo": "2 horas 10 minutos", "degradacao": 7 },
  { "origem": "Natividade, TO", "destino": "Conceição do Tocantins, TO", "distancia": "83.2 km", "tempo": "1 hora 15 minutos", "degradacao": 5 },
  { "origem": "Natividade, TO", "destino": "Chapada da Natividade, TO", "distancia": "12.4 km", "tempo": "11 minutos", "degradacao": 4 },

  { "origem": "Chapada da Natividade, TO", "destino": "Almas, TO", "distancia": "48.7 km", "tempo": "42 minutos", "degradacao": 5 },
  { "origem": "Chapada da Natividade, TO", "destino": "Santa Rosa do Tocantins, TO", "distancia": "68.2 km", "tempo": "1 hora", "degradacao": 5 },

  { "origem": "Santa Rosa do Tocantins, TO", "destino": "Gurupi, TO", "distancia": "153.0 km", "tempo": "2 horas 15 minutos", "degradacao": 4 },

  { "origem": "Conceição do Tocantins, TO", "destino": "Taipas do Tocantins, TO", "distancia": "50.4 km", "tempo": "45 minutos", "degradacao": 6 },

  { "origem": "São Valério, TO", "destino": "Peixe, TO", "distancia": "56.7 km", "tempo": "58 minutos", "degradacao": 5 },

  { "origem": "Peixe, TO", "destino": "Sucupira, TO", "distancia": "86.3 km", "tempo": "1 hora 15 minutos", "degradacao": 6 }
];