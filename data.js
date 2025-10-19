const appData = {
  semesters: [
    {
      id: 1,
      name: "Семестр 1: Основы математики",
      topics: [
        {
          id: 1,
          name: "Тема 1: Натуральные числа и действия над ними",
          levels: {
            1: [
              {question: "Сложите: 125 + 378", answer: "503", explanation: "125 + 378 = 382"},
              {question: "Вычтите: 500 - 278", answer: "222", explanation: "500 - 278 = 222"},
              {question: "Умножьте: 25 × 4", answer: "100", explanation: "25 × 4 = 100"},
              {question: "Разделите: 144 ÷ 12", answer: "12", explanation: "144 ÷ 12 = 12"},
              {question: "Найдите сумму: 47 + 68", answer: "115", explanation: "47 + 68 = 115"}
            ],
            2: [
              {question: "Вычислите: 123 + 456 - 78", answer: "501", explanation: "123 + 456 = 579, 579 - 78 = 501"},
              {question: "Найдите: 34 × 15 ÷ 5", answer: "102", explanation: "34 × 15 = 510, 510 ÷ 5 = 102"},
              {question: "Решите: (56 + 44) × 2", answer: "200", explanation: "56 + 44 = 100, 100 × 2 = 200"},
              {question: "Вычислите: 72 ÷ 8 × 3", answer: "27", explanation: "72 ÷ 8 = 9, 9 × 3 = 27"}
            ],
            3: [
              {question: "Вычислите: 2³ + 3² × 4", answer: "44", explanation: "2³=8, 3²=9, 9×4=36, 8+36=44"},
              {question: "Найдите: 125 ÷ 5 + 17 × 2", answer: "59", explanation: "125÷5=25, 17×2=34, 25+34=59"},
              {question: "Решите: 100 - (15 × 3 + 20)", answer: "35", explanation: "15×3=45, 45+20=65, 100-65=35"}
            ],
            4: [
              {question: "Решите: 256 ÷ 16 × (12 - 4)", answer: "128", explanation: "256÷16=16, 12-4=8, 16×8=128"},
              {question: "Вычислите: 3⁴ - 2⁵ + 10²", answer: "149", explanation: "3⁴=81, 2⁵=32, 10²=100, 81-32+100=149"},
              {question: "Найдите: (8 × 7 - 12) ÷ (5 + 3)", answer: "5.5", explanation: "8×7=56, 56-12=44, 5+3=8, 44÷8=5.5"}
            ],
            5: [
              {question: "Найдите: (144 ÷ 12)² + (15 × 3) - 28", answer: "161", explanation: "144÷12=12, 12²=144, 15×3=45, 144+45-28=161"},
              {question: "Решите: 2 × (3⁴ - 4²) ÷ 5", answer: "26", explanation: "3⁴=81, 81-16=65, 2×65=130, 130÷5=26"}
            ]
          }
        },
        {
          id: 2,
          name: "Тема 2: Признаки делимости. Простые и составные числа",
          levels: {
            1: [
              {question: "Делится ли 144 на 2?", answer: "да", explanation: "144 - четное число"},
              {question: "Делится ли 135 на 5?", answer: "да", explanation: "135 оканчивается на 5"},
              {question: "Является ли 17 простым числом?", answer: "да", explanation: "17 делится только на 1 и себя"}
            ],
            2: [
              {question: "Делится ли 123 на 3?", answer: "да", explanation: "1+2+3=6, 6 делится на 3"},
              {question: "Является ли 1 простым числом?", answer: "нет", explanation: "1 не является ни простым, ни составным"},
              {question: "Делится ли 248 на 4?", answer: "да", explanation: "48 делится на 4"}
            ],
            3: [
              {question: "Найдите все простые числа между 10 и 20", answer: "11,13,17,19", explanation: "Числа 11,13,17,19 делятся только на 1 и себя"},
              {question: "Делится ли 1001 на 7?", answer: "да", explanation: "1001 ÷ 7 = 143"}
            ],
            4: [
              {question: "Является ли 91 простым числом?", answer: "нет", explanation: "91 = 7 × 13"},
              {question: "Делится ли 1234 на 3?", answer: "нет", explanation: "1+2+3+4=10, 10 не делится на 3"}
            ],
            5: [
              {question: "Докажите, что 2 - единственное четное простое число", answer: "доказано", explanation: "Все другие четные числа делятся на 2"}
            ]
          }
        },
        {
          id: 3,
          name: "Тема 3: Разложение на простые множители. НОД и НОК",
          levels: {
            1: [
              {question: "Разложите на множители: 12", answer: "2×2×3", explanation: "12 = 2² × 3"},
              {question: "Найдите НОД(12,18)", answer: "6", explanation: "Делители 12:1,2,3,4,6,12; 18:1,2,3,6,9,18"}
            ],
            2: [
              {question: "Разложите на множители: 36", answer: "2×2×3×3", explanation: "36 = 2² × 3²"},
              {question: "Найдите НОД(24,36)", answer: "12", explanation: "24=2³×3, 36=2²×3², НОД=2²×3=12"}
            ],
            3: [
              {question: "Найдите НОК(12,18)", answer: "36", explanation: "12=2²×3, 18=2×3², НОК=2²×3²=36"},
              {question: "Разложите на множители: 100", answer: "2×2×5×5", explanation: "100 = 2² × 5²"}
            ],
            4: [
              {question: "Найдите НОД(54,72)", answer: "18", explanation: "54=2×3³, 72=2³×3², НОД=2×3²=18"},
              {question: "Найдите НОК(15,25)", answer: "75", explanation: "15=3×5, 25=5², НОК=3×5²=75"}
            ],
            5: [
              {question: "Найдите НОД и НОК чисел 48 и 64", answer: "НОД=16, НОК=192", explanation: "48=2⁴×3, 64=2⁶, НОД=2⁴=16, НОК=2⁶×3=192"}
            ]
          }
        },
        {
          id: 4,
          name: "Тема 4: Делимость. Количество и сумма натуральных делителей числа",
          levels: {
            1: [
              {question: "Сколько делителей у числа 12?", answer: "6", explanation: "1,2,3,4,6,12"},
              {question: "Найдите сумму делителей числа 10", answer: "18", explanation: "1+2+5+10=18"}
            ],
            2: [
              {question: "Сколько делителей у числа 36?", answer: "9", explanation: "1,2,3,4,6,9,12,18,36"},
              {question: "Найдите сумму делителей числа 28", answer: "56", explanation: "1+2+4+7+14+28=56"}
            ],
            3: [
              {question: "Сколько делителей у простого числа?", answer: "2", explanation: "1 и само число"},
              {question: "Найдите количество делителей 100", answer: "9", explanation: "1,2,4,5,10,20,25,50,100"}
            ],
            4: [
              {question: "Найдите сумму делителей числа 496", answer: "992", explanation: "496 - совершенное число"},
              {question: "Сколько делителей у 2ⁿ?", answer: "n+1", explanation: "2⁰,2¹,...,2ⁿ"}
            ],
            5: [
              {question: "Докажите формулу количества делителей", answer: "доказано", explanation: "Если n=p₁ᵃ¹×p₂ᵃ²×...×pₖᵃᵏ, то d(n)=(a₁+1)(a₂+1)...(aₖ+1)"}
            ]
          }
        },
        {
          id: 5,
          name: "Тема 5: Деление с остатком. Последняя цифра",
          levels: {
            1: [
              {question: "Разделите 17 на 5 с остатком", answer: "3 ост 2", explanation: "17 = 5×3 + 2"},
              {question: "Какая последняя цифра числа 1234?", answer: "4", explanation: "Последняя цифра - 4"}
            ],
            2: [
              {question: "Разделите 47 на 6 с остатком", answer: "7 ост 5", explanation: "47 = 6×7 + 5"},
              {question: "Найдите последнюю цифру 7²", answer: "9", explanation: "7×7=49, последняя цифра 9"}
            ],
            3: [
              {question: "Найдите остаток от деления 100 на 7", answer: "2", explanation: "100 = 7×14 + 2"},
              {question: "Какая последняя цифра 3⁴?", answer: "1", explanation: "3⁴=81, последняя цифра 1"}
            ],
            4: [
              {question: "Найдите остаток от деления 2¹⁰ на 5", answer: "4", explanation: "2¹⁰=1024, 1024÷5=204 ост 4"},
              {question: "Последняя цифра 7²⁰²³", answer: "3", explanation: "Цикл последних цифр 7: 7,9,3,1"}
            ],
            5: [
              {question: "Докажите, что квадрат целого числа не может оканчиваться на 2,3,7,8", answer: "доказано", explanation: "Возможные последние цифры квадратов: 0,1,4,5,6,9"}
            ]
          }
        },
        {
          id: 6,
          name: "Тема 6: Обыкновенные дроби и действия над ними",
          levels: {
            1: [
              {question: "Сократите дробь: 6/8", answer: "3/4", explanation: "6÷2=3, 8÷2=4"},
              {question: "Сложите: 1/2 + 1/4", answer: "3/4", explanation: "2/4 + 1/4 = 3/4"}
            ],
            2: [
              {question: "Умножьте: 2/3 × 3/4", answer: "1/2", explanation: "6/12 = 1/2"},
              {question: "Разделите: 3/4 ÷ 2/5", answer: "15/8", explanation: "3/4 × 5/2 = 15/8"}
            ],
            3: [
              {question: "Сравните: 3/5 и 2/3", answer: "2/3 > 3/5", explanation: "3/5=9/15, 2/3=10/15"},
              {question: "Вычислите: 1/2 + 2/3 - 1/6", answer: "1", explanation: "3/6 + 4/6 - 1/6 = 6/6 = 1"}
            ],
            4: [
              {question: "Найдите: (2/3 + 1/4) ÷ (5/6 - 1/3)", answer: "11/6", explanation: "8/12+3/12=11/12, 5/6-2/6=3/6=1/2, 11/12÷1/2=11/6"},
              {question: "Упростите: (a/b + c/d) × bd", answer: "ad + bc", explanation: "a/b×bd + c/d×bd = ad + bc"}
            ],
            5: [
              {question: "Докажите, что сумма двух дробей равна дроби с общим знаменателем", answer: "доказано", explanation: "a/b + c/d = (ad + bc)/(bd)"}
            ]
          }
        },
        {
          id: 7,
          name: "Тема 7: Десятичные дроби, периодические дроби. Действия над действительными числами",
          levels: {
            1: [
              {question: "Переведите в десятичную: 3/4", answer: "0.75", explanation: "3 ÷ 4 = 0.75"},
              {question: "Сложите: 2.5 + 1.3", answer: "3.8", explanation: "2.5 + 1.3 = 3.8"}
            ],
            2: [
              {question: "Умножьте: 1.2 × 0.5", answer: "0.6", explanation: "1.2 × 0.5 = 0.6"},
              {question: "Переведите 0.6 в обыкновенную дробь", answer: "3/5", explanation: "0.6 = 6/10 = 3/5"}
            ],
            3: [
              {question: "Запишите 0.333... как дробь", answer: "1/3", explanation: "x=0.333..., 10x=3.333..., 9x=3, x=1/3"},
              {question: "Вычислите: 2.5 ÷ 0.5", answer: "5", explanation: "2.5 ÷ 0.5 = 25 ÷ 5 = 5"}
            ],
            4: [
              {question: "Найдите: 0.12 + 0.34 + 0.56", answer: "1.02", explanation: "0.12+0.34=0.46, 0.46+0.56=1.02"},
              {question: "Переведите 0.142857... в дробь", answer: "1/7", explanation: "1 ÷ 7 = 0.142857..."}
            ],
            5: [
              {question: "Докажите, что 0.999... = 1", answer: "доказано", explanation: "x=0.999..., 10x=9.999..., 9x=9, x=1"}
            ]
          }
        },
        {
          id: 8,
          name: "Тема 8: Рациональные числа и операции над ними",
          levels: {
            1: [
              {question: "Является ли -5 рациональным числом?", answer: "да", explanation: "-5 = -5/1"},
              {question: "Сложите: -3 + 7", answer: "4", explanation: "-3 + 7 = 4"}
            ],
            2: [
              {question: "Умножьте: (-4) × 5", answer: "-20", explanation: "Отрицательное × положительное = отрицательное"},
              {question: "Разделите: (-15) ÷ (-3)", answer: "5", explanation: "Отрицательное ÷ отрицательное = положительное"}
            ],
            3: [
              {question: "Вычислите: -2 × (3 - 5)", answer: "4", explanation: "3-5=-2, -2×(-2)=4"},
              {question: "Найдите: (-1)²⁰²³", answer: "-1", explanation: "Нечетная степень отрицательного числа отрицательна"}
            ],
            4: [
              {question: "Решите: |x| = 5", answer: "5,-5", explanation: "Модуль числа - расстояние до нуля"},
              {question: "Сравните: -3/4 и -2/3", answer: "-2/3 > -3/4", explanation: "-0.666 > -0.75"}
            ],
            5: [
              {question: "Докажите, что сумма рациональных чисел рациональна", answer: "доказано", explanation: "a/b + c/d = (ad+bc)/(bd) - рационально"}
            ]
          }
        },
        {
          id: 9,
          name: "Тема 9: Отношение, пропорция, доля и проценты",
          levels: {
            1: [
              {question: "Что больше: 1/2 или 50%?", answer: "равны", explanation: "1/2 = 50%"},
              {question: "Найдите 20% от 100", answer: "20", explanation: "100 × 0.20 = 20"}
            ],
            2: [
              {question: "Увеличьте 80 на 25%", answer: "100", explanation: "80 × 1.25 = 100"},
              {question: "На сколько % 50 больше 40?", answer: "25%", explanation: "(50-40)/40×100%=25%"}
            ],
            3: [
              {question: "Решите пропорцию: 2/3 = x/12", answer: "8", explanation: "2×12=3x, 24=3x, x=8"},
              {question: "Цена снизилась с 200 до 150. На сколько %?", answer: "25%", explanation: "(200-150)/200×100%=25%"}
            ],
            4: [
              {question: "Смешали 30% и 50% растворы в отношении 2:1. Концентрация?", answer: "36.67%", explanation: "(30×2+50×1)/3=110/3≈36.67%"},
              {question: "После снижения на 20% цена стала 80. Была?", answer: "100", explanation: "80 ÷ 0.8 = 100"}
            ],
            5: [
              {question: "Докажите свойство пропорции: a/b=c/d ⇒ ad=bc", answer: "доказано", explanation: "a/b=c/d ⇒ a=b(c/d) ⇒ ad=bc"}
            ]
          }
        },
        {
          id: 10,
          name: "Тема 10: Геометрические фигуры",
          levels: {
            1: [
              {question: "Сколько сторон у квадрата?", answer: "4", explanation: "Квадрат - четырехугольник"},
              {question: "Сколько градусов в прямом угле?", answer: "90", explanation: "Прямой угол = 90°"}
            ],
            2: [
              {question: "Периметр квадрата со стороной 5", answer: "20", explanation: "4 × 5 = 20"},
              {question: "Площадь прямоугольника 3×4", answer: "12", explanation: "3 × 4 = 12"}
            ],
            3: [
              {question: "Площадь круга радиусом 7 (π≈3.14)", answer: "153.86", explanation: "π×7²=3.14×49=153.86"},
              {question: "Объем куба с ребром 3", answer: "27", explanation: "3³ = 27"}
            ],
            4: [
              {question: "Площадь треугольника со сторонами 3,4,5", answer: "6", explanation: "Полупериметр=6, √(6×3×2×1)=√36=6"},
              {question: "Диагональ прямоугольника 3×4", answer: "5", explanation: "√(3²+4²)=√25=5"}
            ],
            5: [
              {question: "Докажите теорему Пифагора", answer: "доказано", explanation: "Квадрат гипотенузы равен сумме квадратов катетов"}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: "Семестр 2: Алгебра и выражения",
      topics: [
        {
          id: 11,
          name: "Тема 11: Степень и её свойства, степенные выражения I",
          levels: {
            1: [
              {question: "2³ = ?", answer: "8", explanation: "2×2×2=8"},
              {question: "5² = ?", answer: "25", explanation: "5×5=25"}
            ],
            2: [
              {question: "2³ × 2² = ?", answer: "32", explanation: "2⁵=32"},
              {question: "10⁴ ÷ 10² = ?", answer: "100", explanation: "10²=100"}
            ],
            3: [
              {question: "(2³)² = ?", answer: "64", explanation: "2⁶=64"},
              {question: "2⁰ = ?", answer: "1", explanation: "Любое число в степени 0 равно 1"}
            ],
            4: [
              {question: "2⁻² = ?", answer: "1/4", explanation: "1/2²=1/4"},
              {question: "8²/³ = ?", answer: "4", explanation: "∛(8²)=∛64=4"}
            ],
            5: [
              {question: "Упростите: (a² × a³) ÷ a⁴", answer: "a", explanation: "a⁵ ÷ a⁴ = a¹ = a"}
            ]
          }
        },
        {
          id: 12,
          name: "Тема 12: Степень и её свойства, степенные выражения II",
          levels: {
            1: [
              {question: "3² × 3³ = ?", answer: "243", explanation: "3⁵=243"},
              {question: "4³ ÷ 4² = ?", answer: "4", explanation: "4¹=4"}
            ],
            2: [
              {question: "(5²)³ = ?", answer: "15625", explanation: "5⁶=15625"},
              {question: "7⁰ = ?", answer: "1", explanation: "Любое число в степени 0 равно 1"}
            ],
            3: [
              {question: "2⁻³ = ?", answer: "1/8", explanation: "1/2³=1/8"},
              {question: "16³/⁴ = ?", answer: "8", explanation: "⁴√(16³)=⁴√4096=8"}
            ],
            4: [
              {question: "Упростите: (x²y³)²", answer: "x⁴y⁶", explanation: "(x²)²×(y³)²=x⁴y⁶"},
              {question: "Вычислите: 8²/³ × 4³/²", answer: "32", explanation: "4×8=32"}
            ],
            5: [
              {question: "Докажите: aⁿ × aᵐ = aⁿ⁺ᵐ", answer: "доказано", explanation: "aⁿ × aᵐ = (a×a×...×a) × (a×a×...×a) = aⁿ⁺ᵐ"}
            ]
          }
        },
        {
          id: 13,
          name: "Тема 13: Единицы измерения. Алгебраические выражения. Одночлены и многочлены",
          levels: {
            1: [
              {question: "1 км = ? м", answer: "1000", explanation: "1 километр = 1000 метров"},
              {question: "Упростите: 2x + 3x", answer: "5x", explanation: "2x + 3x = 5x"}
            ],
            2: [
              {question: "1 час = ? секунд", answer: "3600", explanation: "60×60=3600"},
              {question: "Упростите: 3a - 2a + a", answer: "2a", explanation: "3a-2a+a=2a"}
            ],
            3: [
              {question: "Переведите 2.5 кг в граммы", answer: "2500", explanation: "2.5×1000=2500"},
              {question: "Упростите: 2x² + 3x² - x²", answer: "4x²", explanation: "2+3-1=4"}
            ],
            4: [
              {question: "1 м³ = ? литров", answer: "1000", explanation: "1 кубометр = 1000 литров"},
              {question: "Приведите подобные: 3ab + 2a - ab + 4a", answer: "2ab + 6a", explanation: "3ab-ab=2ab, 2a+4a=6a"}
            ],
            5: [
              {question: "Докажите, что сумма многочленов - многочлен", answer: "доказано", explanation: "Сумма многочленов степени n и m дает многочлен степени max(n,m)"}
            ]
          }
        },
        {
          id: 14,
          name: "Тема 14: Многочлены и действия над ними",
          levels: {
            1: [
              {question: "Сложите: (2x+3) + (x+1)", answer: "3x+4", explanation: "2x+x=3x, 3+1=4"},
              {question: "Умножьте: 3(x+2)", answer: "3x+6", explanation: "3×x + 3×2 = 3x+6"}
            ],
            2: [
              {question: "Вычтите: (5x-2) - (2x+1)", answer: "3x-3", explanation: "5x-2x=3x, -2-1=-3"},
              {question: "Умножьте: 2x(3x+4)", answer: "6x²+8x", explanation: "2x×3x=6x², 2x×4=8x"}
            ],
            3: [
              {question: "Умножьте: (x+2)(x+3)", answer: "x²+5x+6", explanation: "x²+3x+2x+6=x²+5x+6"},
              {question: "Разделите: (6x²+9x) ÷ 3x", answer: "2x+3", explanation: "6x²÷3x=2x, 9x÷3x=3"}
            ],
            4: [
              {question: "Умножьте: (2x-1)(3x+4)", answer: "6x²+5x-4", explanation: "6x²+8x-3x-4=6x²+5x-4"},
              {question: "Разделите: (x³-8) ÷ (x-2)", answer: "x²+2x+4", explanation: "x³-8=(x-2)(x²+2x+4)"}
            ],
            5: [
              {question: "Докажите алгоритм деления многочленов", answer: "доказано", explanation: "Для любых многочленов A(x) и B(x) существуют Q(x) и R(x): A(x)=B(x)Q(x)+R(x)"}
            ]
          }
        },
        {
          id: 15,
          name: "Тема 15: Формулы сокращённого умножения I",
          levels: {
            1: [
              {question: "(a+b)² = ?", answer: "a²+2ab+b²", explanation: "Квадрат суммы"},
              {question: "(a-b)² = ?", answer: "a²-2ab+b²", explanation: "Квадрат разности"}
            ],
            2: [
              {question: "(x+3)² = ?", answer: "x²+6x+9", explanation: "x²+2×x×3+3²=x²+6x+9"},
              {question: "(2x-1)² = ?", answer: "4x²-4x+1", explanation: "(2x)²-2×2x×1+1²=4x²-4x+1"}
            ],
            3: [
              {question: "a²-b² = ?", answer: "(a-b)(a+b)", explanation: "Разность квадратов"},
              {question: "Разложите: x²-9", answer: "(x-3)(x+3)", explanation: "x²-3²=(x-3)(x+3)"}
            ],
            4: [
              {question: "(a+b)³ = ?", answer: "a³+3a²b+3ab²+b³", explanation: "Куб суммы"},
              {question: "Разложите: 8x³-27", answer: "(2x-3)(4x²+6x+9)", explanation: "(2x)³-3³=(2x-3)(4x²+6x+9)"}
            ],
            5: [
              {question: "Докажите формулу (a+b)²", answer: "доказано", explanation: "(a+b)²=(a+b)(a+b)=a²+ab+ab+b²=a²+2ab+b²"}
            ]
          }
        },
        {
          id: 16,
          name: "Тема 16: Формулы сокращённого умножения II",
          levels: {
            1: [
              {question: "(a+b)(a-b) = ?", answer: "a²-b²", explanation: "Разность квадратов"},
              {question: "x²-y² = ?", answer: "(x-y)(x+y)", explanation: "Обратная формула"}
            ],
            2: [
              {question: "Разложите: 4x²-9", answer: "(2x-3)(2x+3)", explanation: "(2x)²-3²=(2x-3)(2x+3)"},
              {question: "Вычислите: 101²-99²", answer: "400", explanation: "(101-99)(101+99)=2×200=400"}
            ],
            3: [
              {question: "(a+b)³ = ?", answer: "a³+3a²b+3ab²+b³", explanation: "Куб суммы"},
              {question: "(a-b)³ = ?", answer: "a³-3a²b+3ab²-b³", explanation: "Куб разности"}
            ],
            4: [
              {question: "Разложите: x³+8", answer: "(x+2)(x²-2x+4)", explanation: "x³+2³=(x+2)(x²-2x+4)"},
              {question: "Разложите: 27a³-64b³", answer: "(3a-4b)(9a²+12ab+16b²)", explanation: "(3a)³-(4b)³=(3a-4b)(9a²+12ab+16b²)"}
            ],
            5: [
              {question: "Докажите формулу суммы кубов", answer: "доказано", explanation: "a³+b³=(a+b)(a²-ab+b²) - проверяется умножением"}
            ]
          }
        },
        {
          id: 17,
          name: "Тема 17: Разложение на множители I",
          levels: {
            1: [
              {question: "Разложите: 2x+4", answer: "2(x+2)", explanation: "Вынесли общий множитель 2"},
              {question: "Разложите: 3a-6b", answer: "3(a-2b)", explanation: "Вынесли общий множитель 3"}
            ],
            2: [
              {question: "Разложите: x²-4", answer: "(x-2)(x+2)", explanation: "Разность квадратов"},
              {question: "Разложите: 9y²-16", answer: "(3y-4)(3y+4)", explanation: "(3y)²-4²=(3y-4)(3y+4)"}
            ],
            3: [
              {question: "Разложите: x²+5x+6", answer: "(x+2)(x+3)", explanation: "x²+(2+3)x+2×3=(x+2)(x+3)"},
              {question: "Разложите: 2x²+7x+3", answer: "(2x+1)(x+3)", explanation: "2×3=6, 1×6=6, 1+6=7"}
            ],
            4: [
              {question: "Разложите: x³-8", answer: "(x-2)(x²+2x+4)", explanation: "Разность кубов"},
              {question: "Разложите: 4x²-12x+9", answer: "(2x-3)²", explanation: "(2x)²-2×2x×3+3²=(2x-3)²"}
            ],
            5: [
              {question: "Разложите: x⁴-16", answer: "(x-2)(x+2)(x²+4)", explanation: "x⁴-16=(x²-4)(x²+4)=(x-2)(x+2)(x²+4)"}
            ]
          }
        },
        {
          id: 18,
          name: "Тема 18: Разложение на множители II",
          levels: {
            1: [
              {question: "Разложите: ab+ac", answer: "a(b+c)", explanation: "Вынесли общий множитель a"},
              {question: "Разложите: 6x-9y", answer: "3(2x-3y)", explanation: "Вынесли общий множитель 3"}
            ],
            2: [
              {question: "Разложите: x²-25", answer: "(x-5)(x+5)", explanation: "Разность квадратов"},
              {question: "Разложите: 4a²-1", answer: "(2a-1)(2a+1)", explanation: "(2a)²-1²=(2a-1)(2a+1)"}
            ],
            3: [
              {question: "Разложите: x²-7x+12", answer: "(x-3)(x-4)", explanation: "3×4=12, 3+4=7"},
              {question: "Разложите: 3x²+10x+8", answer: "(3x+4)(x+2)", explanation: "3×8=24, 4×6=24, 4+6=10"}
            ],
            4: [
              {question: "Разложите: x³+27", answer: "(x+3)(x²-3x+9)", explanation: "Сумма кубов"},
              {question: "Разложите: 16x²-24x+9", answer: "(4x-3)²", explanation: "(4x)²-2×4x×3+3²=(4x-3)²"}
            ],
            5: [
              {question: "Разложите: x⁴+4", answer: "(x²+2x+2)(x²-2x+2)", explanation: "x⁴+4=x⁴+4x²+4-4x²=(x²+2)²-(2x)²"}
            ]
          }
        },
        {
          id: 19,
          name: "Тема 19: Алгебраические дроби I",
          levels: {
            1: [
              {question: "Сократите: 6x/8x", answer: "3/4", explanation: "6x/8x=6/8=3/4"},
              {question: "Сократите: 15a/25", answer: "3a/5", explanation: "15/25=3/5"}
            ],
            2: [
              {question: "Сложите: 1/x + 2/x", answer: "3/x", explanation: "Общий знаменатель x"},
              {question: "Умножьте: (a/b) × (c/d)", answer: "ac/bd", explanation: "Умножение дробей"}
            ],
            3: [
              {question: "Разделите: (a/b) ÷ (c/d)", answer: "ad/bc", explanation: "Деление дробей"},
              {question: "Сократите: (x²-4)/(x-2)", answer: "x+2", explanation: "x²-4=(x-2)(x+2)"}
            ],
            4: [
              {question: "Упростите: (1/x + 1/y) × xy", answer: "y+x", explanation: "1/x×xy + 1/y×xy = y + x"},
              {question: "Сократите: (x³-8)/(x²+2x+4)", answer: "x-2", explanation: "x³-8=(x-2)(x²+2x+4)"}
            ],
            5: [
              {question: "Докажите правило сложения дробей", answer: "доказано", explanation: "a/b + c/d = (ad+bc)/(bd) - общий знаменатель"}
            ]
          }
        },
        {
          id: 20,
          name: "Тема 20:  Алгебраические дроби II",
          levels: {
            1: [
              {question: "Сократите: 12x/18x", answer: "2/3", explanation: "12/18=2/3"},
              {question: "Упростите: 3a/6", answer: "a/2", explanation: "3/6=1/2"}
            ],
            2: [
              {question: "Вычтите: 5/x - 3/x", answer: "2/x", explanation: "5-3=2, знаменатель x"},
              {question: "Умножьте: (2x/y) × (3y/4)", answer: "3x/2", explanation: "2x×3y/y×4=6x/4=3x/2"}
            ],
            3: [
              {question: "Разделите: (a²/b) ÷ (a/b²)", answer: "ab", explanation: "a²/b × b²/a = ab"},
              {question: "Сократите: (x²-9)/(x+3)", answer: "x-3", explanation: "x²-9=(x-3)(x+3)"}
            ],
            4: [
              {question: "Упростите: (1/(x-1) - 1/(x+1)) × (x²-1)", answer: "2", explanation: "1/(x-1)-1/(x+1)=2/(x²-1), умножить на (x²-1)=2"},
              {question: "Сократите: (x³+1)/(x²-x+1)", answer: "x+1", explanation: "x³+1=(x+1)(x²-x+1)"}
            ],
            5: [
              {question: "Докажите правило умножения дробей", answer: "доказано", explanation: "(a/b)×(c/d)=ac/bd - по определению умножения дробей"}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: "Семестр 3: Уравнения и функции",
      topics: [
        {
          id: 21,
          name: "Тема 21: Линейные уравнения",
          levels: {
            1: [
              {question: "Решите: 2x + 5 = 15", answer: "5", explanation: "2x=10, x=5"},
              {question: "Решите: 3x - 7 = 8", answer: "5", explanation: "3x=15, x=5"}
            ],
            2: [
              {question: "Решите: 4(x-2) = 20", answer: "7", explanation: "4x-8=20, 4x=28, x=7"},
              {question: "Решите: 5 - 2x = 11", answer: "-3", explanation: "-2x=6, x=-3"}
            ],
            3: [
              {question: "Решите: 2x + 3 = 3x - 2", answer: "5", explanation: "2x-3x=-2-3, -x=-5, x=5"},
              {question: "Решите: 3(x+1) = 2(x-1)", answer: "-5", explanation: "3x+3=2x-2, x=-5"}
            ],
            4: [
              {question: "Решите: (2x+1)/3 = (x-2)/2", answer: "-8", explanation: "2(2x+1)=3(x-2), 4x+2=3x-6, x=-8"},
              {question: "Решите: 0.5x + 2 = 1.5x - 1", answer: "3", explanation: "2+1=1.5x-0.5x, 3=x"}
            ],
            5: [
              {question: "Докажите, что линейное уравнение имеет 1 корень", answer: "доказано", explanation: "ax+b=0 ⇒ x=-b/a (при a≠0) - единственный корень"}
            ]
          }
        },
        {
          id: 22,
          name: "Тема 22: Система линейных уравнений",
          levels: {
            1: [
              {question: "Решите: {x+y=5, x-y=1}", answer: "x=3,y=2", explanation: "Сложим уравнения: 2x=6, x=3, тогда y=2"},
              {question: "Решите: {2x+y=7, x-y=2}", answer: "x=3,y=1", explanation: "Сложим: 3x=9, x=3, тогда y=1"}
            ],
            2: [
              {question: "Решите: {3x+2y=12, 2x-3y=5}", answer: "x=2,y=3", explanation: "Умножим первое на 3, второе на 2: 9x+6y=36, 4x-6y=10, сложим: 13x=46, x=2, тогда y=3"},
              {question: "Решите: {x/2+y/3=4, x-y=2}", answer: "x=4,y=2", explanation: "Первое ×6: 3x+2y=24, решаем систему"}
            ],
            3: [
              {question: "Решите: {2(x+1)+3(y-2)=8, x+y=5}", answer: "x=3,y=2", explanation: "Упростим: 2x+2+3y-6=8 ⇒ 2x+3y=12, решаем с x+y=5"},
              {question: "Решите: {0.2x+0.3y=1.4, 0.5x-0.1y=2.3}", answer: "x=5,y=4", explanation: "Умножим на 10: 2x+3y=14, 5x-y=23, решаем"}
            ],
            4: [
              {question: "Решите: {(x+y)/2+(x-y)/3=5, (x+y)/3-(x-y)/4=1}", answer: "x=6,y=4", explanation: "Упростим: (5x+y)/6=5, (x+7y)/12=1, решаем"},
              {question: "При каких k система {x+y=3, 2x+ky=6} имеет бесконечно много решений?", answer: "k=2", explanation: "Система имеет бесконечно решений, когда уравнения пропорциональны"}
            ],
            5: [
              {question: "Докажите теорему Кронекера-Капелли", answer: "доказано", explanation: "Система совместна тогда и только тогда, когда ранг матрицы системы равен рангу расширенной матрицы"}
            ]
          }
        },
        {
          id: 23,
          name: "Тема 23: Уравнения и задачи с применением системы уравнений",
          levels: {
            1: [
              {question: "Сумма двух чисел 10, разность 2. Найдите числа.", answer: "6,4", explanation: "x+y=10, x-y=2 ⇒ x=6,y=4"},
              {question: "Два карандаша и три тетради стоят 50 руб. Один карандаш и две тетради стоят 30 руб. Найдите цену каждого.", answer: "карандаш=10,тетрадь=10", explanation: "2x+3y=50, x+2y=30 ⇒ x=10,y=10"}
            ],
            2: [
              {question: "Периметр прямоугольника 28 см, площадь 48 см². Найдите стороны.", answer: "8,6", explanation: "2(a+b)=28, ab=48 ⇒ a+b=14, ab=48 ⇒ a=8,b=6"},
              {question: "Лодка по течению проходит 20 км за 2 часа, против течения 18 км за 3 часа. Найдите скорость лодки и течения.", answer: "8,2", explanation: "v+u=10, v-u=6 ⇒ v=8,u=2"}
            ],
            3: [
              {question: "Два рабочих выполняют работу за 6 дней. Первый один выполняет на 5 дней быстрее второго. За сколько дней каждый?", answer: "10,15", explanation: "1/x+1/y=1/6, y=x+5 ⇒ x=10,y=15"},
              {question: "Смешали 30% и 50% растворы, получили 40% раствор 10 литров. Сколько литров каждого?", answer: "5,5", explanation: "x+y=10, 0.3x+0.5y=4 ⇒ x=5,y=5"}
            ],
            4: [
              {question: "Турист прошел 25 км. Часть пути со скоростью 4 км/ч, часть 5 км/ч. Весь путь занял 6 часов. Сколько км каждой скоростью?", answer: "10,15", explanation: "x+y=25, x/4+y/5=6 ⇒ x=10,y=15"},
              {question: "Цифры двузначного числа в сумме 9. Если поменять цифры местами, число уменьшится на 45. Найдите число.", answer: "72", explanation: "x+y=9, 10x+y=10y+x+45 ⇒ x=7,y=2"}
            ],
            5: [
              {question: "Докажите, что любая задача сводится к системе уравнений", answer: "доказано", explanation: "Любая математическая задача может быть формализована и представлена в виде системы уравнений"}
            ]
          }
        },
        {
          id: 24,
          name: "Тема 24: Линейные неравенства. Системы линейных неравенств",
          levels: {
            1: [
              {question: "Решите: 2x + 3 > 7", answer: "x > 2", explanation: "2x > 4, x > 2"},
              {question: "Решите: 5 - x ≤ 3", answer: "x ≥ 2", explanation: "-x ≤ -2, x ≥ 2"}
            ],
            2: [
              {question: "Решите: 3(x-2) < 2x+1", answer: "x < 7", explanation: "3x-6 < 2x+1, x < 7"},
              {question: "Решите: 4 - 2x ≥ x + 1", answer: "x ≤ 1", explanation: "-2x-x ≥ 1-4, -3x ≥ -3, x ≤ 1"}
            ],
            3: [
              {question: "Решите систему: {2x+1 > 3, x-2 < 1}", answer: "1 < x < 3", explanation: "2x > 2 ⇒ x > 1, x < 3 ⇒ 1 < x < 3"},
              {question: "Решите: |2x-1| < 3", answer: "-1 < x < 2", explanation: "-3 < 2x-1 < 3, -2 < 2x < 4, -1 < x < 2"}
            ],
            4: [
              {question: "Решите: (x-2)/(x+1) > 0", answer: "x < -1 или x > 2", explanation: "Метод интервалов: критические точки -1 и 2"},
              {question: "Решите систему: {3x-2y > 1, x+y < 5}", answer: "бесконечно решений", explanation: "Область на плоскости между двумя прямыми"}
            ],
            5: [
              {question: "Докажите свойства неравенств", answer: "доказано", explanation: "1) a>b ⇒ a+c>b+c; 2) a>b,c>0 ⇒ ac>bc; 3) a>b,c<0 ⇒ ac<bc"}
            ]
          }
        },
        {
          id: 25,
          name: "Тема 25: Линейная функция. Её свойства и график",
          levels: {
            1: [
              {question: "Что такое линейная функция?", answer: "y=kx+b", explanation: "Функция вида y=kx+b, где k,b - константы"},
              {question: "Найдите f(2) для f(x)=3x+1", answer: "7", explanation: "3×2+1=7"}
            ],
            2: [
              {question: "Постройте график y=2x+1", answer: "прямая", explanation: "Прямая линия с угловым коэффициентом 2"},
              {question: "Найдите пересечение y=2x+1 с осью OY", answer: "(0,1)", explanation: "При x=0: y=1"}
            ],
            3: [
              {question: "Найдите пересечение y=2x+1 и y=-x+4", answer: "(1,3)", explanation: "2x+1=-x+4, 3x=3, x=1, y=3"},
              {question: "При каком k график y=kx+3 проходит через (2,7)?", answer: "2", explanation: "7=2k+3, 2k=4, k=2"}
            ],
            4: [
              {question: "Найдите область значений y=3x-2", answer: "R", explanation: "Линейная функция принимает все действительные значения"},
              {question: "Исследуйте монотонность y=-2x+5", answer: "убывает", explanation: "k=-2<0 ⇒ функция убывает"}
            ],
            5: [
              {question: "Докажите, что график линейной функции - прямая", answer: "доказано", explanation: "Уравнение y=kx+b - уравнение прямой в декартовой системе координат"}
            ]
          }
        },
        {
          id: 26,
          name: "Тема 26: Арифметический квадратный корень и его свойства",
          levels: {
            1: [
              {question: "√25 = ?", answer: "5", explanation: "5²=25"},
              {question: "√144 = ?", answer: "12", explanation: "12²=144"}
            ],
            2: [
              {question: "√(a²) = ?", answer: "|a|", explanation: "Корень из квадрата равен модулю числа"},
              {question: "√(9×16) = ?", answer: "12", explanation: "√9×√16=3×4=12"}
            ],
            3: [
              {question: "√(50) = ?", answer: "5√2", explanation: "√(25×2)=5√2"},
              {question: "√(a²b) = ?", answer: "|a|√b", explanation: "√(a²)×√b=|a|√b"}
            ],
            4: [
              {question: "Упростите: √(18)+√(8)", answer: "5√2", explanation: "3√2+2√2=5√2"},
              {question: "Решите: √(x+1)=3", answer: "8", explanation: "x+1=9, x=8"}
            ],
            5: [
              {question: "Докажите свойство: √(ab)=√a×√b", answer: "доказано", explanation: "(√a×√b)²=a×b ⇒ √(ab)=√a×√b"}
            ]
          }
        },
        {
          id: 27,
          name: "Тема 27: Выражения с корнем",
          levels: {
            1: [
              {question: "√4 + √9 = ?", answer: "5", explanation: "2+3=5"},
              {question: "√16 × √25 = ?", answer: "20", explanation: "4×5=20"}
            ],
            2: [
              {question: "√(12) × √(3) = ?", answer: "6", explanation: "√36=6"},
              {question: "√(50) ÷ √(2) = ?", answer: "5", explanation: "√25=5"}
            ],
            3: [
              {question: "Упростите: √(18)+√(32)", answer: "7√2", explanation: "3√2+4√2=7√2"},
              {question: "Упростите: (√5+√3)(√5-√3)", answer: "2", explanation: "5-3=2"}
            ],
            4: [
              {question: "Упростите: √(12)+√(27)-√(48)", answer: "√3", explanation: "2√3+3√3-4√3=√3"},
              {question: "Рационализируйте: 1/(√2+1)", answer: "√2-1", explanation: "Умножить на (√2-1)/(√2-1)"}
            ],
            5: [
              {question: "Докажите иррациональность √2", answer: "доказано", explanation: "Предположим √2=p/q (несократимая дробь), тогда 2q²=p² ⇒ противоречие"}
            ]
          }
        },
        {
          id: 28,
          name: "Тема 28: Текст на повторение по темам 26-27",
          levels: {
            1: [
              {question: "√36 + √64 = ?", answer: "14", explanation: "6+8=14"},
              {question: "√100 - √25 = ?", answer: "5", explanation: "10-5=5"}
            ],
            2: [
              {question: "√(8) × √(2) = ?", answer: "4", explanation: "√16=4"},
              {question: "√(75) ÷ √(3) = ?", answer: "5", explanation: "√25=5"}
            ],
            3: [
              {question: "Упростите: √(20)+√(45)", answer: "5√5", explanation: "2√5+3√5=5√5"},
              {question: "Упростите: (√7-√2)(√7+√2)", answer: "5", explanation: "7-2=5"}
            ],
            4: [
              {question: "Упростите: √(98)-√(50)+√(8)", answer: "6√2", explanation: "7√2-5√2+2√2=4√2"},
              {question: "Рационализируйте: 2/(√3-1)", answer: "√3+1", explanation: "Умножить на (√3+1)/(√3+1)"}
            ],
            5: [
              {question: "Обобщите свойства арифметического корня", answer: "√(ab)=√a√b, √(a/b)=√a/√b, (√a)²=a", explanation: "Основные свойства квадратного корня"}
            ]
          }
        },
        {
          id: 29,
          name: "Тема 29: Квадратное уравнение и его корни. Теорема Виета",
          levels: {
            1: [
              {question: "Решите: x²-9=0", answer: "3,-3", explanation: "x²=9, x=±3"},
              {question: "Решите: x²-5x=0", answer: "0,5", explanation: "x(x-5)=0"}
            ],
            2: [
              {question: "Решите: x²-6x+8=0", answer: "2,4", explanation: "D=36-32=4, x=(6±2)/2"},
              {question: "Найдите дискриминант: x²-4x+1=0", answer: "12", explanation: "D=16-4=12"}
            ],
            3: [
              {question: "Решите: 2x²+7x+3=0", answer: "-3,-0.5", explanation: "D=49-24=25, x=(-7±5)/4"},
              {question: "По теореме Виета для x²-7x+12=0", answer: "x₁+x₂=7, x₁x₂=12", explanation: "Сумма корней=7, произведение=12"}
            ],
            4: [
              {question: "Решите: x²-(√3+1)x+√3=0", answer: "1,√3", explanation: "По теореме Виета или через дискриминант"},
              {question: "При каких p уравнение x²+px+9=0 имеет один корень?", answer: "6,-6", explanation: "D=p²-36=0, p=±6"}
            ],
            5: [
              {question: "Докажите теорему Виета", answer: "доказано", explanation: "Для x²+px+q=0: x₁+x₂=-p, x₁x₂=q - следует из разложения (x-x₁)(x-x₂)=x²-(x₁+x₂)x+x₁x₂"}
            ]
          }
        }
      ]
    }
  ]
};
