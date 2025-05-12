# Величко Дмитро ІПЗ 3.02

# Лабораторна робота №1

## Тема: Ознайомлення з TypeScript
## Мета: Ознайомитися з основами мови TypeScript шляхом виконання практичних завдань, що демонструють базові можливості мови: типізацію, інтерфейси, класи, композитні типи та дженерики.

### Завдання:
# 1. Типізація змінних
### 1.1 Оголосіть змінні наступних типів: `string`, `number`, `boolean`, `array`, `object`
### 1.2 Створіть функцію, яка приймає як аргумент об'єкт із полями `name` (тип `string`) та `age` (тип `number`) і повертає рядок виду: `"Name: John, Age: 30"`
# Рішення
   ![Image](https://github.com/user-attachments/assets/2c9d02b5-9f0d-41da-ac17-90f9ec322086)

# Результат
   ![Image](https://github.com/user-attachments/assets/9cae7f30-cc5e-427b-8cb8-f41e6e55f823)
# Помилки
### Перевіримо, що буде якщо ми замість числа напишемо рядок, і навпаки
   ![Image](https://github.com/user-attachments/assets/27550d54-7a5c-43b8-916c-001e6f9babe7)
   ![Image](https://github.com/user-attachments/assets/d54c7fa9-73cd-4638-a356-3bd94e70e7a6)
### Як бачимо TypeScript видає нам помилку, тому що він типизований і не дає змогу замість числа писати рядок і навпаки, чи замість булевого значення написати число і т.п.

# 2. Інтерфейси
### 2.1 Оголосіть інтерфейс `Person`, який містить поля:
###   `name: string`
###   `age: number`
###   `address?: string (опціональне поле)`
### 2.2 Реалізуйте функцію `printPerson`, яка приймає об'єкт типу `Person` та виводить його дані у консоль.
# Рішення
![Image](https://github.com/user-attachments/assets/7776109c-e4e6-4a45-a348-63f980f5164d)

# Результат
![Image](https://github.com/user-attachments/assets/03230da0-8dac-44d6-a92c-370598c628ad)
# Помилки
### Нехай ми зробимо помилки
![Image](https://github.com/user-attachments/assets/8f706373-5551-4cfd-a05c-57fff381ca8f)
![Image](https://github.com/user-attachments/assets/a1e4bab7-be48-4f27-98c5-36b9e649a13c)
### Як бачимо TypeScript видає нам помилку.

# 3. Композитні типи
### 3.1 Оголосіть об'єднаний тип (union type), наприклад:
###   `type Status = 'success' | 'error' | 'loading';`
### 3.2 Реалізуйте конструкцію (наприклад, функцію або умову), яка виводить повідомлення відповідно до значення Status
# Рішення
![Image](https://github.com/user-attachments/assets/96a17f91-c344-4159-b31c-a0199c19bef0)
# Результат
![Image](https://github.com/user-attachments/assets/88e4ed4a-7285-44dc-817c-e1873dbe5386)
# Помилки
### Нехай ми зробимо помилки
![Image](https://github.com/user-attachments/assets/89ca9b13-7f8b-41ec-9d2e-798b891c66ee)
![Errors_1_Task_3](https://github.com/user-attachments/assets/cb1f8215-f66d-4b94-a6d5-f4f4970c87e6)
![Errors_2_Task_3](https://github.com/user-attachments/assets/27292401-605b-4c97-8278-edecc24e4f8a)

### Ну по-перше спрацювала умова коли некоректне значення ми виводимо.
### А по-друге, TypeScript знову пише, що рядок не може бути числом.

# 4.Дженерики
### 4.1 Реалізуйте функцію `identity<T>(value: T): T`, яка повертає передане їй значення.
### 4.2 Використайте її для типів `number`, `string` та `boolean`.
# Рішення
![Task_4](https://github.com/user-attachments/assets/1294fdd1-0a99-435d-921a-244f70a1917f)
# Результат
![Result_4](https://github.com/user-attachments/assets/e60187d8-b532-4a4c-8548-cd0b225bc3bf)
# Помилки
### Нехай ми зробимо помилки
![Task_4(Errors)](https://github.com/user-attachments/assets/67dcb01a-12ec-4804-bad1-b1175996a1de)
![Errors_Task_4](https://github.com/user-attachments/assets/daf29e51-0892-4ea2-a3e8-9f04db96f294)
### TypeScript знову пише, що рядок не може бути числом, чи булеве значення не може бути строкою


# 5. Класи
### 5.1 Реалізуйте клас Car, який містить поля:
###   `model: string`
###   `year: number`
### 5.2 Додайте метод getCarInfo(), який повертає рядок виду: "Model: Toyota, Year: 2020".
# Рішення
![Task_5](https://github.com/user-attachments/assets/d1d2e254-b1ec-4968-ae7c-44b817f81bae)
# Результат
![Result_5](https://github.com/user-attachments/assets/765ed3e0-8efa-4c1e-a759-8e350a238359)
# Помилки
### Нехай ми зробимо помилки
![Task_5(Errors)](https://github.com/user-attachments/assets/c00c929d-e834-4d59-be11-874b2ed9b426)
![Errors_Task_5](https://github.com/user-attachments/assets/88b55f33-5ea5-472f-bf54-412cd931d998)
### TypeScript знову пише, що булеве значення не може бути строкою.

# .JS i .D.TS
### Тепер розглянемо, як виглядають ці файли у скомпільованому JS-коді.
![Image](https://github.com/user-attachments/assets/fb6c1295-bf9b-47f4-95dd-ac69cfa35896)
![Image](https://github.com/user-attachments/assets/4ae6b849-8a32-4d8b-995c-1d239ec2e97b)

### А також переглянемо створених типів
![Image](https://github.com/user-attachments/assets/0e848aaa-10dc-4c83-9a50-9fd2eafabab8)

# Висновок
### Ознайомлення з TypeScript показало основні можливості мови: строгий контроль типів, використання інтерфейсів для структурування даних, класи для ООП, композитні типи для гнучкості та дженерики для створення універсальних функцій і компонентів. Це дозволяє писати більш надійний і підтримуваний код.
