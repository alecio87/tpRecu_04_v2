# Pilis-fswd-Recuperatorio-Modulo-4-Ibanes-Emanuel

## DecTech Podcast Web 📢

Este proyecto está implementado utilizando Node.js.

**Trayecto de Formación:** Desarrollador Web FullStack 🚀  
📦 **Módulo 4:** Desarrollo de Aplicación de Recetas - Gastronomía de Jujuy PROYECTO FINAL INDIVIDUAL

### Consigna 📄

El recuperatorio de la práctica final para este módulo consiste en un proyecto desarrollado de forma individual utilizando Node.js y alojando el código fuente en GitHub.

#### Objetivo
Sugerimos encarecidamente que sea ordenado al resolver las consignas y revise que las mismas cumplan con todo lo indicado. En este proyecto, crearás el backend para una aplicación de recetas de comidas regionales de la provincia de Jujuy. Debes incluir la gestión de usuarios y la gestión de recetas, es decir, el ABM para cada uno y exponer estas acciones a través de una API REST.

#### Puntos para desarrollar
1. La API debe permitir el ABM de usuarios, utilizando los verbos HTTP GET, PUT, POST y DELETE.
2. La API debe manejar la autenticación de usuarios.
3. La API debe permitir el ABM de recetas de cocina (utilizando los verbos HTTP GET, PUT, POST y DELETE), donde la entidad debe incluir como mínimo nombre, una breve descripción del plato, imagen del plato (puede ser una URL de internet), lista de ingredientes, explicación de la preparación y tiempo estimado de preparación.
4. Las acciones de crear, modificar y eliminar una receta solo pueden ser realizadas por usuarios previamente autenticados.

#### Requisitos obligatorios
- Incorporar al menos 5 recetas distintas mediante un script (archivo .sql) que permita cargarlos rápidamente.
- Tener todo el código fuente en el repositorio de GitHub creado para este trabajo.
- Exportar desde Postman el archivo JSON con todas las peticiones e incorporarlo en la raíz del repositorio.

## Introducción

¡Hola! 😄 Este proyecto se desarrolló con Visual Studio Code, Git, GitHub, Docker Desktop, Postman y DBeaver. 👏 Es una excelente propuesta para crear un sistema backend.

### Instalación

Para la realización del proyecto, se utilizaron las siguientes herramientas:

- Visual Studio Code (instalado)
- Git (instalado)
- Cuenta de GitHub
- Postman
- Docker Desktop
- DBeaver

#### Instalación con comandos y configuración de archivos

1. Posicionarse en la carpeta `docker-compose\mysql`
   ```bash
   docker-compose up -d
   ```

2. Posicionarse en la raíz del proyecto
   ```bash
   npm init --y
   npm i express --save
   npm i typescript -D
   npx tsc --init
   ```

3. En el archivo `tsconfig.json`, descomentar la entrada `rootDir` para que quede así:
   ```json
   "rootDir": "./src",
   ```

4. En el archivo `tsconfig.json`, descomentar la entrada `outDir` para que quede así:
   ```json
   "outDir": "./dist",
   ```

5. Ejecutar TypeScript para crear la carpeta `dist`
   ```bash
   npx tsc
   ```

6. Iniciar el proyecto
   ```bash
   node dist/index.js
   ```

7. Instalar `ts-node-dev`
   ```bash
   npm i ts-node-dev -D
   ```

8. Modificar la sección `scripts` en `package.json` para incluir:
   ```json
   "dev": "ts-node-dev --respawn src/index.ts"
   ```

9. Ejecutar el proyecto en modo desarrollo
   ```bash
   npm run dev
   ```

10. Instalar las dependencias de middleware
    ```bash
    npm i morgan cors
    npm i @types/express
    npm i @types/morgan @types/cors -D
    npm install typeorm --save
    npm install reflect-metadata --save
    npm install @types/node --save-dev
    npm install mysql --save
    ```

11. En el archivo `tsconfig.json`, descomentar las siguientes entradas:
    ```json
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strictPropertyInitialization": false,
    ```

12. Ejecutar el proyecto
    ```bash
    npm run dev
    ```

13. Instalar las dependencias de Passport y relacionadas
    ```bash
    npm i passport passport-local passport-jwt jsonwebtoken bcrypt
    npm i -D @types/passport @types/passport-local  @types/passport-jwt @types/jsonwebtoken @types/bcrypt
    ```

14. Instalar dotenv
    ```bash
    npm install dotenv
    ```

15. Instalar la extensión Node Snippets para mayor comodidad.

Con estos pasos, las dependencias del proyecto deberían estar instaladas y configuradas.
