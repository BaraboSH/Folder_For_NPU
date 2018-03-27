using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHI
{
    class Team
    {
        public string Name, Amplua, Goals, Assist, Trauma, NumOFMatches;

        public Team(string name, string amplua, string result, string assist, string trauma,string numOfMatches)
        {
            Name = name;
            Amplua = amplua;
            Goals = result;
            Assist = assist;
            Trauma = trauma;
            NumOFMatches = numOfMatches;
        }
    }
    class SHI_1
    {
        static void Main()
        {
            Console.OutputEncoding = Encoding.UTF8;
            Team[] cm = new Team[9];
            string a1;
            int a2, a3, a4;
            string[,] arrName = { 
                //           Name        Amplua       Goals      Assist   Trauma   Number of matches
                {   "Андрей Пятов",     "Голкипер",     "-10",      "0",    "Нет",     "50" },
                {   "Артем Кравець",    "Нападающий",   "20",       "1",    "Нет",     "22" },
                {   "Денис Бойко",      "Голкипер",     "-15",      "0",   "Нет",     "12" },
                {   "Марлос",           "Нападающий",   "18",       "10",   "Нет",     "10" },
                {   "Ярослав Ракицький","Зашитник",     "5",        "0",    "Нет",     "42" },
                {   "Евгений Хачериди", "Защитник",     "2",        "0",    "Нет",     "30" },
                {   "Артем Беседин",    "Нападающий",   "14",       "1",    "Нет",     "15" },
                {   "Руслан Ротань",    "Полузащитник", "8",        "4",    "Да",      "55" },
                {   "Виктор Цыганков",  "Полузащитник", "21",       "3",    "Нет",     "5" },
                {   "Андрей Ярмоленко", "Полузащитник", "22",       "5",    "Нет",     "32" },
                {   "Тарас Степаненко", "Полузащитник", "10",       "0",    "Нет",     "25" }
            };
            Console.Write("Виберить амплуа -  ");
            a1 = Console.ReadLine();
            Console.Write("Введіть кількість голів -  ");
            a2 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Введіть кількість гольових передачів -  ");
            a3 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Введіть кількість матчів -  ");
            a4 = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < 9; i++)
            {
                cm[i] = new Team(arrName[i, 0], arrName[i, 1], arrName[i, 2], arrName[i, 3], arrName[i, 4], arrName[i, 5]);
            }

            var selectName = from tot in cm
                             where tot.Amplua == a1
                             where Convert.ToInt32(tot.Goals) >= a2
                             where Convert.ToInt32(tot.Assist) >= a3
                             where Convert.ToInt32(tot.NumOFMatches) >= a4
                             where tot.Trauma == "Нет"
                             select tot;
            Console.WriteLine("_________________________");
            if (!selectName.Any())
            {
                Console.WriteLine("Не знайдено відповідників");
            }
            foreach (Team tot in selectName)
            { Console.WriteLine("Имя:: {0}\nКількість голів:: {1}\nКількість гольових передач:: {2}\nКількість матчів:: {3}", tot.Name, tot.Goals, tot.Assist, tot.NumOFMatches); }



        }
    }
}