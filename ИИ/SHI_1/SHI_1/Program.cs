using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SHI
{
    class Team
    {
        public string Name, Amplua, Goals, Assist, Trauma, NumOfMatches,NumOfYellowCards;

        public Team(string name, string amplua, string result, string assist, string trauma,string numOfMatches,string numOfYellow)
        {
            Name = name;
            Amplua = amplua;
            Goals = result;
            Assist = assist;
            Trauma = trauma;
            NumOfMatches = numOfMatches;
            NumOfYellowCards = numOfYellow;
        }
    }
    
    class SHI_1
    {
        static void getFootballer(Team[] ukr, string[] answerArr, int avgAssist, int avgGoals, int avgLostGoals, int avgMatches, int avgYCards)
        {
            Boolean[] boolAnswer = new Boolean[answerArr.Length];
            for (var i = 0; i < boolAnswer.Length; i++) {
                if (answerArr[i] == "+")
                    boolAnswer[i] = true;
                else
                    boolAnswer[i] = false;
            }
            int[] rightAnswer = new int[ukr.Length];
            for (var i = 0; i < ukr.Length; i++)
            {
                rightAnswer[i] = 0;
                if (ukr[i].Amplua == answerArr[0]) rightAnswer[i] += 100;
                if (ukr[i].Amplua == "Голкипер")
                {
                    if ((Convert.ToInt32(ukr[i].Goals) >= avgLostGoals) == boolAnswer[1]) rightAnswer[i]+=2;
                }
                else
                {
                    if ((Convert.ToInt32(ukr[i].Goals) >= avgGoals) == boolAnswer[1]) rightAnswer[i]+=3;
                    if ((Convert.ToInt32(ukr[i].Assist) >= avgAssist) == boolAnswer[2]) rightAnswer[i] += 2;
                }
                if ((Convert.ToInt32(ukr[i].NumOfMatches) >= avgMatches) == boolAnswer[3]) rightAnswer[i]++;
                if ((Convert.ToInt32(ukr[i].NumOfYellowCards) >= avgYCards) == boolAnswer[4]) rightAnswer[i]++;
            }
            for (var i = 0; i < rightAnswer.Length; i++)
            {
                if (rightAnswer[i] == rightAnswer.Max())
                {
                    if(ukr[i].Amplua == "Голкипер") 
                    { 
                        Console.WriteLine("Имя:: {0}\nКількість пропущених голів:: {1}\nКількість матчів:: {2}\nКількість жовтих карток:: {3}", ukr[i].Name, ukr[i].Goals, ukr[i].NumOfMatches, ukr[i].NumOfYellowCards);
                        Console.WriteLine("_________________________");
                    }
                    else  
                    { 
                        Console.WriteLine("Имя:: {0}\nКількість голів:: {1}\nКількість гольових передач:: {2}\nКількість матчів:: {3}\nКількість жовтих карток:: {4}", ukr[i].Name, ukr[i].Goals, ukr[i].Assist, ukr[i].NumOfMatches, ukr[i].NumOfYellowCards);
                        Console.WriteLine("_________________________");
                    }
                }
            }
        }
        static void Main()
        {
            Console.OutputEncoding = Encoding.UTF8;
           
            string answerPosition, answerGoals, answerAssists="", answerMatches, answerYCards;
            string[,] footPlayers = { 
                //           Name        Amplua       Goals      Assist   Trauma   Number of matches     Number of Yellow cards
                {   "Андрей Пятов",     "Голкипер",     "40",       "0",    "Нет",     "50",                    "4" },
                {   "Артем Кравець",    "Нападающий",   "20",       "2",    "Нет",     "22",                    "2" },
                {   "Денис Бойко",      "Голкипер",     "15",       "0",    "Нет",     "12",                    "0" },
                {   "Марлос",           "Нападающий",   "18",       "10",   "Нет",     "10",                    "3" },
                {   "Ярослав Ракицький","Зашитник",     "5",        "1",    "Нет",     "42",                    "6" },
                {   "Евгений Хачериди", "Защитник",     "2",        "0",    "Нет",     "30",                    "8" },
                {   "Артем Беседин",    "Нападающий",   "14",       "1",    "Нет",     "15",                    "2" },
                {   "Руслан Ротань",    "Полузащитник", "8",        "4",    "Да",      "55",                    "6" },
                {   "Виктор Цыганков",  "Полузащитник", "21",       "3",    "Нет",     "5",                     "0" },
                {   "Андрей Ярмоленко", "Полузащитник", "22",       "5",    "Нет",     "32",                    "1" },
                {   "Тарас Степаненко", "Полузащитник", "10",       "2",    "Нет",     "25",                    "9" }
            };
            Team[] ukr = new Team[footPlayers.GetLength(0)];
            int averageGoals = 0, averageAssist = 0, averageMatches = 0, averageYCards = 0,numOfGolkiper = 0,averageLostGoals = 0;
            for (int i = 0; i <ukr.Length; i++)
            {
                ukr[i] = new Team(footPlayers[i, 0], footPlayers[i, 1], footPlayers[i, 2], footPlayers[i, 3], footPlayers[i, 4], footPlayers[i, 5],footPlayers[i,6]);
                if(ukr[i].Amplua == "Голкипер") 
                {
                    numOfGolkiper++;
                    averageLostGoals += int.Parse(ukr[i].Goals);
                }
                else 
                {
                    averageGoals += int.Parse(ukr[i].Goals);
                    averageAssist += int.Parse(ukr[i].Assist);
                }
                averageMatches += int.Parse(ukr[i].NumOfMatches);
          
                averageYCards += int.Parse(ukr[i].NumOfYellowCards);
                int length = ukr.Length;
                if(i == length-1) {
                    averageGoals /= (length - numOfGolkiper);
                    averageAssist /= (length - numOfGolkiper);
                    averageMatches /= length;
                    averageYCards /= length;
                    averageLostGoals /= numOfGolkiper;
                }
            }


            Console.WriteLine("Виберіть амплуа -  ");
            answerPosition = Console.ReadLine();
            if(answerPosition == "Голкипер")  {
                Console.WriteLine("Кількість пропущених голів більше " + averageLostGoals + "?");
                answerGoals = Console.ReadLine();
            }
            else 
            {
                Console.WriteLine("Кількість голів більше " + averageGoals + "?");
                answerGoals = Console.ReadLine();
                Console.WriteLine("Кількість гольових передач більше " + averageAssist + "?");
                answerAssists = Console.ReadLine();
            }
            Console.WriteLine("Кількість матчів більше " + averageMatches + "?");
            answerMatches = Console.ReadLine();
            Console.WriteLine("Кількість жовтих карток більше " + averageYCards + "?");
            answerYCards = Console.ReadLine();
            Console.WriteLine("_________________________");
            getFootballer(ukr, new string[] { answerPosition, answerGoals, answerAssists, answerMatches, answerYCards },
            averageAssist, averageGoals, averageLostGoals, averageMatches, averageYCards);
        }
    }
}