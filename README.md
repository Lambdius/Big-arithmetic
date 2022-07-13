### Интерпритатор математических выражений

> Изначально для парсинга математических выражений я реализовал алгоритм [сортировочной станции](https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8), в текущей версии парсинг выражений реализован на методе [рекурсивного спуска](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE_%D1%81%D0%BF%D1%83%D1%81%D0%BA%D0%B0). *( старый алгоритм можно посмотреть [тут](https://github.com/Lambdius/Arithmetic-Algorithms/blob/main/src/0_Shunting_yard.ts) )*

> Умножение реализовано наивным методом, интегрировать алгоритм [умножения карацубы](https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9A%D0%B0%D1%80%D0%B0%D1%86%D1%83%D0%B1%D1%8B) я не стал, ибо слишком лень адаптировать его для избавления от экспоненциальной записи. *( простой алгоритм карацубы я написал [тут](https://github.com/Lambdius/Arithmetic-Algorithms/blob/main/src/3_karatsuba_mul.ts) )*



---

#### Идея данного приложения была взята из ряда задач на площадке codewars:

1. [Интерпритатор (2kyu)](https://www.codewars.com/kata/52a78825cdfc2cfc87000005) ✅
2. [Сложение и вычитание (4kyu)](https://www.codewars.com/kata/54d130bb11b05bd224000212) ✅
3. [Сложение #2 (4kyu)](https://www.codewars.com/kata/525f4206b73515bffb000b21) ✅
4. [Сложение #3 (4kyu)](https://www.codewars.com/kata/5324945e2ece5e1f32000370) ✅
5. [Умножение (4kyu)](https://www.codewars.com/kata/55911ef14065454c75000062) ✅
6. [Умножение #2 (3kyu)](https://www.codewars.com/kata/5923fbc72eafa9bcff00011a) ✅
7. [Деление (3kyu)](https://www.codewars.com/kata/58dea43ff98a7e2124000169) ✅
8. [Деление #2 (3kyu)](https://www.codewars.com/kata/598dba93700c2c0f470000dc) ✅

---

#### Команды:
- Загрузка зависимостей - ```npm i```
- Сборка - ```npm run build```
- Запуск - ```npm run start```
- Запуск тестов - ```npm run test``` 

> Тесты временно не работают !
