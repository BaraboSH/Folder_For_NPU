using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace II
{
    class Program
    {
        class Boxer {
            public string name, weight;
            public int countOfFight, countOfWins, countOfWinsByKO;
            public float forceOfHit, growth, age;
            public Boxer(string name, string weight, int countOfFight, int countOfWins ,int countOfWinsByKO, float forceOfHit, float growth, float age)
            {
                this.name = name;
                this.weight = weight;
                this.countOfFight = countOfFight;
                this.countOfWins = countOfWins;
                this.countOfWinsByKO = countOfWinsByKO;
                this.forceOfHit = forceOfHit;
                this.growth = growth;
                this.age = age;
            }
        }
        static void getBoxer(Boxer[] arrOfBoxers,int[] arrOfAnswers, string q1, int q2, int q3, int q4, float q5, float q6, float q7)
        {
            for (var i = 0; i < arrOfBoxers.Length; i++)
            {
                arrOfAnswers[i] = 0;
                if (arrOfBoxers[i].weight == q1)
                {
                    arrOfAnswers[i]++;
                }
                if (arrOfBoxers[i].countOfFight == q2)
                {
                    arrOfAnswers[i]++;
                }
                if (arrOfBoxers[i].countOfWins == q3)
                {
                    arrOfAnswers[i]++;
                }
                if (arrOfBoxers[i].countOfWinsByKO == q4)
                {
                    arrOfAnswers[i]++;
                }
                if (arrOfBoxers[i].forceOfHit == q5)
                {
                    arrOfAnswers[i]++;
                }
                if (arrOfBoxers[i].growth == q6)
                {
                    arrOfAnswers[i]++;
                }
                if (arrOfBoxers[i].age == q7)
                {
                    arrOfAnswers[i]++;
                }
            }
            for (var i = 0; i < arrOfAnswers.Length; i++)
            {
                if (arrOfAnswers[i] == arrOfAnswers.Max())
                Console.WriteLine(arrOfBoxers[i].name);
            }
        }
        static void Main(string[] args)
        {
            string weight = "ABC";
            string q1;
            int q2, q3, q4;
            float q5, q6, q7;
            int countOfFight = 40, countOfWins = 20, countOfWinsByKO = 10;
            float forceOfHit = 200, growth = 175, age = 18;
            Boxer[] arrOfBoxers = new Boxer[10];
            int[] arrOfAnswers = new int[arrOfBoxers.Length];
            string[] arrOfNames = { "Усик", "Ломаченко", "Тайсон", "Головкин", "Мучник", "Майвезер", "Пакьяо", "МакГрегор", "Кличко", "Серега Ржавый" };

            for (var i = 0; i < arrOfBoxers.Length; i++)
            {
                if (i >= 5)
                {
                    weight = "WBC";
                }
                arrOfBoxers[i] = new Boxer(arrOfNames[i], weight, countOfFight++, countOfWins++, countOfWinsByKO++, forceOfHit+=5, growth+=5, age++);
            }

            Console.WriteLine("Вес");
            q1 = Console.ReadLine();
            Console.WriteLine("Бои");
            q2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Победы");
            q3 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Победы накаутом");
            q4 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Сила удара");
            q5 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Рост");
            q6 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Возраст");
            q7 = Convert.ToInt32(Console.ReadLine());
            getBoxer(arrOfBoxers, arrOfAnswers, q1, q2, q3, q4, q5, q6, q7);

            Console.ReadKey();
        }
    }
}
