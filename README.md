# 🌠 ARMAGEDDON

**Armageddon** - это  онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA.

### Технологии, используемые при создании проекта:
+ **TypeScript**
+ **React**
+ **Next.js** (App Router)
+ **CSS MODULES + Adaptive**
+ **Mobile First**
+ **ESLint**

### В данном проекте можно найти кастомные реализации:
+ **Functions**
  + **getClassName** - аналог библиотеки classnames, которая позволяет указывать несколько классов JSX элементу так, чтобы это было читаемо.
+ **Components/UI Kit**
  + **Button** - кнопка принимает 3 пропса - variant, size, active
+ **Hooks**
  + **useRequest** - хук, позволяющий отправлять запросы на сервер и вытаскивать из него данные, пришедшие с сервера, состояние загрузки и ошибки
  + **useObserver** - хук, упрощающий работу с IntersectionObserver API
+ **Store**
  + **createStore** - функция, позволяющая создавать своё глобальное мини-хранилище при помощи useSyncExternalStore
  + **useCart** - глобальное хранилище, созданное на основе useSyncExternalStore

### Для запуска проекта необходимо:
+ Склонировать репозиторий
+ Установить зависимости командой `npm install`
+ Зарегистрироваться на сайте [🛰 API NASA](https://api.nasa.gov/) и получить уникальный ключ для доступа к API
+ Создать в корне проекта файл `.env` и создать там две переменные:
  + `NEXT_PUBLIC_NASA_API_KEY`: тут должен быть ключ, который вы получили на сайте [🛰 API NASA](https://api.nasa.gov/)
  + `NEXT_PUBLIC_NASA_API_URL`: тут должна быть ссылка на само api - `https://api.nasa.gov/neo/rest/v1`
+ Запустить проекта командой `npm run dev`
