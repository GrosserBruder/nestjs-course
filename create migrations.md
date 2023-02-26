В typeorm версии 0.3.12 есть ошибка, связанная с glob. Не ищутся файлы по паттерну.
В версии 0.3.11 с этим проблем нет.

Для создания миграция при помощи typeorm нужно создать файл data-source.ts в котором нужно
создать экземлят DataSource из typeorm. Это ограничение самого typeorm.

Далее нужно запустить команду `npx typeorm -d dist/db/dataSource.js migration:generate db/migrations/new-migration`.

`dist/db/dataSource.js` - это ранее созданный файл с экземпляром DataSource для подключения 
к бд и списком сущностей для создания миграция и расположением ранее созданных миграций;
`db/migrations/new-migration` - это путь до файла, в котором будет сохранена миграция.
`new-migration` будет частью названия файфа после `timestamp`

