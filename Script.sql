-- Receta 1: Empanadas
INSERT INTO `receta-system-db`.receta
(nombre, preparacionDeTiempo, createdAt, updatedAt, userId, descripcion, imagen, ingredientes, preparacion)
VALUES
('Empanadas', 70, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), userId, 'Empanadas rellenas de carne y condimentos al estilo jujeño.', 'empanadas_jujuyanas.jpg', 'Carne molida, cebolla, papa, huevo duro, aceitunas, comino, ají molido, sal, pimienta, masa para empanadas.', '1. Sofreír cebolla, agregar carne y condimentos. 2. Cocinar papa y mezclar con carne. 3. Rellenar las empanadas con la mezcla. 4. Hornear hasta que estén doradas.');

-- Receta 2: Tamal
INSERT INTO `receta-system-db`.receta
(nombre, preparacionDeTiempo, createdAt, updatedAt, userId, descripcion, imagen, ingredientes, preparacion)
VALUES
('Tamal', 60, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), userId, 'Pequeños tamales de quinoa rellenos de vegetales al estilo jujeño.', 'tamalitos_jujenos.jpg', 'Quinoa, zanahoria, espinacas, cebolla, ajo, caldo de verduras, hojas de maíz, sal, pimienta.', '1. Cocinar la quinoa y saltear las verduras. 2. Preparar masa con quinoa y caldo de verduras. 3. Rellenar las hojas de maíz y cocinar al vapor.');

-- Receta 3: Locro
INSERT INTO `receta-system-db`.receta
(nombre, preparacionDeTiempo, createdAt, updatedAt, userId, descripcion, imagen, ingredientes, preparacion)
VALUES
('Sopa de Locro', 45, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), userId, 'Sopa espesa con maíz, zapallo, carne y condimentos.', 'sopa_locro.jpg', 'Maíz, zapallo, carne de cerdo, chorizo, cebolla, papa, pimiento, ajo, comino, laurel, sal, pimienta.', '1. Cocinar maíz y carne. 2. Freír cebolla, ajo, pimiento y chorizo. 3. Agregar zapallo, papa y condimentos. 4. Combinar todo en una olla hasta obtener una sopa espesa.');

-- Receta 4: Humita en Olla
INSERT INTO `receta-system-db`.receta
(nombre, preparacionDeTiempo, createdAt, updatedAt, userId, descripcion, imagen, ingredientes, preparacion)
VALUES
('Humita en Olla', 50, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), userId, 'Humita tierna envuelta en hojas de chala.', 'humita_en_olla.jpg', 'Choclo, cebolla, ají, aceite, sal, pimienta, hojas de chala.', '1. Mezclar choclo con cebolla, ají, aceite, sal y pimienta. 2. Envolver la mezcla en hojas de chala. 3. Cocinar en una olla hasta que las humitas estén listas.');

-- Receta 5: Pastel de Papas
INSERT INTO `receta-system-db`.receta
(nombre, preparacionDeTiempo, createdAt, updatedAt, userId, descripcion, imagen, ingredientes, preparacion)
VALUES
('Pastel de Papas', 55, CURRENT_TIMESTAMP(6), CURRENT_TIMESTAMP(6), userId, 'Capas de papas y carne con sabores auténticos de Jujuy.', 'pastel_papas_jujeno.jpg', 'Papas, carne molida, cebolla, pimiento, tomate, huevo, aceitunas, comino, paprika, sal, pimienta.', '1. Cocinar papas y hacer un puré. 2. Sofreír carne con cebolla, pimiento, tomate y condimentos. 3. Armar capas de puré y carne en una fuente y hornear.');