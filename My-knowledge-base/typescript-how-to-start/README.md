03:46:15 DONE

- npm init to build package.json
- ts files to make checks
- how to convert ts to js
- library to have live ts
- tsc --init для создания файла tsconfig.json
- main tsconfig.json options

---

enter inside folder use the command

```bash
npm init
```

enter enter enter enter enter enter enter 

it will create package.json its like project passport file

version is (1.0.0)

1 - Major Updates

0 - Minor Updates

0 - Patch Updates

получиться файл

```json
{
  "name": "test1",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

в scripts можно добавить любые коамнды 

например команду запуска или команду запуска тестирования

```json
"scripts": {
  "start": "node index.js", <========
  "test": "echo \"Error: no test specified\" && exit 1"
```

после чего можно будет запускать с помощью

```bash
npm run start
```

устанавливаем axios

библиотека для REST запросов

```bash
npm install axios
```

при установке она сома добавит все необходимое в package.json

как можно заглянуть в содержимое библиотеку 

```jsx
const axios = require("axios");
console.log(Object.keys("axios"));
```

```bash
npm run start
```

это отоброзит список 

![image.png](attachment:c628300a-f7ca-41c0-913e-afafd34cadb5:image.png)

если папка node_modules отсутствует в проекте 

то папку можно востоновить командой 

```bash
npm i
```

when you use typescript

you need to install it 

```bash
npm install -g typescript
```

how add command build

that command will convert TS to JS with same file name

```json
"scripts": {
  "build": "tsc index.ts", <========
  "start": "node index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
```

```bash
npm run build
```

use command 

nodemon will act as live server

```bash
npm install nodemon —save-dev
```

it will rebuild all project after each change LIVE

заменяем запусйа с node на nodemon 

это позволит отслеживать любые изминения файла в реальном времени

```json
"scripts": {
  "build": "tsc index.ts",
  "start": "nodemon index.js", <========
  "test": "echo \"Error: no test specified\" && exit 1"
```

используй команду 

```bash
tsc --init
```

эта команда создаст файлт tsconfig.json

в котором находятся все настройки TypeScript локального проекта

меняем   "build": "tsc index.ts",
на   "build": "tsc —watch",

```json
"scripts": {
  "build": "tsc —watch", <========
  "start": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
```

можно указать какую папку конретно надо конвертировать из TS в JS

внутри tsconfig.json находится rootDir

его значение можно заменить например на 

```json
“rootDir: “./src” 
```

и тогда только файлы в этой папке будут конвертированы

или указать любой другой root directory

рекомендуется компелировать в отдельную папку

избегай index.ts и index.js в одной папке

внутри tsconfig.json находится outDir

укажи ему папку в значении для out папки

```json
“rootDir: “./dist”
```

можно заменить в какой именно JS копмепилорпвать 

найди target и замени значение на любое другое например 

```json
"target": "ES2024",  
```

отобрози все ошибки пока пишеш код

для этого найди и активируй noEmitOnError

```json
"noEmitOnError": true,
```

меняем   "nodemon index.js",
на   "nodemon ./dist/index.js",

теперь он будет смотреть именно на уже готовую папку в котором JS файлы

```json
"scripts": {
  "build": "tsc —watch",
  "start": "nodemon ./dist/index.js", <========
  "test": "echo \"Error: no test specified\" && exit 1"
```