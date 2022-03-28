# Проект Messenger
  Веб приложение "Чат"

### Обзор
* [Описание](#description)
* [Инструкция](#instructions)
* [Технологии](#technologies)

#### <a name="description">Описание</a>
* [Ссылка на макет в Figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1)
* [Ссылка PR](https://github.com/alexandrprokhorov1988/middle.messenger.praktikum.yandex/pull/4)

#### <a name="instructions">Инструкция</a>
* [Ссылка на проект в Netlify](https://stupefied-leavitt-443f70.netlify.app)

##### Запуск

```
npm install
npm run start / npm run dev
```

##### Запуск тестов

```
npm run test
```

##### Запуск docker контейнера

###### Сборка
```
docker build . -t messenger
```

###### Остановка

```
docker ps
docker stop -t 0 <container id>
```

###### Запуск в фоне

```
docker run -p 3000:3000 -d messenger
```

#### <a name="technologies">Технологии</a>
* Спецификации HTML, CSS.
* Parcel
* Pug
* SCSS
* Express
* NodeJS
* Eslint
* Stylelint
* EventBus
* Proxy
* Компоненты
* HTTPTransport
* Store
* Route
* Router
* Chai
* Mocha
* Sinon
* JSDom
* Docker
* Webpack
