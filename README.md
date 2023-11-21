 
comandos
Posicionar en la carpeta docker-compose\mysql 
  ---> docker-compose up -d

Posicionar en la carpeta raiz
  ---> npm init --y
  ---> npm i express --save
  ---> npm i typescript -D
  ---> npx tsc --init

 En el archivo tsconfig.json
 buscar el archivo rootDir descomentarlo y tendria que quedar asi "rootDir": "./src"
 En el archivo tsconfig.json, buscar el archivo outDir descomentarlo y tendria que quedar asi "outDir": "./dist"

---> npx tsc   te crea la carpeta dist
---> node dist/index.js
---> npm i ts-node-dev D

En el archivo package.json modificar el scripts
  "scripts": {
     "dev": "ts-node-dev --respawn src/index.ts"
  },

ejecutar el proyecto 
---> npm run dev

comandos
  ---> npm i morgan cors
  ---> npm i @types/express
  ---> npm i @types/morgan @types/cors -D
  ---> npm install typeorm --save
  ---> npm install reflect-metadata --save
  ---> npm install @types/node --save-dev
  ---> npm install mysql --save

En el archivo tsconfig.json, buscar el archivo 
  experimentalDecorators descomentarlo y tendria que quedar asi "experimentalDecorators": true,
  En el archivo tsconfig.json, buscar el archivo 
  emitDecoratorMetadata descomentarlo y tendria que quedar asi "emitDecoratorMetadata": true,
  En el archivo tsconfig.json, buscar el archivo 
  strictPropertyInitialization descomentarlo y tendria que quedar asi "strictPropertyInitialization": false,

  Middleware sobre el proyecto clase06_middleware
  ---> npm init --y
  ---> npm i express --save
  instalar extension node-snippets

   JWT  sobre el proyecto tp04
  ---> npm i passport passport-local passport-jwt jsonwebtoken bcrypt
  ---> npm i -D @types/passport @types/passport-local  @types/passport-jwt @types/jsonwebtoken @types/bcrypt
  
  instalar dontenv y mover de passport (VARIABLE DE AMBIENTE)
  
  const opts: StrategyOptions = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: 'somesecrettoken'
  };


  alumno: Escalera Walter Samuel







