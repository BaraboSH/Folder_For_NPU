using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo_2
{
    class Program
    {
        static int sum = 0;
        static void print(List<string> l)
        {
            foreach (string name in l)
            {
                Console.Write(" {0}",name);
            }
            sum++;
            Console.WriteLine();

        }
        static void add(string[] sym, int size, int number, int first, List<string> list)
        {
            if (number == 0)
            {
                print(list);
                return;
            }
            for (int i = first; i < size; i++)
            {
                list.Add(sym[i]);
                add(sym, size, number - 1, i + 1, list);
                list.Remove(list.Last());
            }
        }
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.Unicode;
            int countOfLetter, countOfWordLetter;
            do
            {
                Console.Write("Введіть кількість букв з алфавіту: ");
                countOfLetter = int.Parse(Console.ReadLine());
                Console.Write("Введіть кількість букв в слові: ");
                countOfWordLetter = int.Parse(Console.ReadLine());
            } while (countOfLetter > 32 || countOfWordLetter > countOfLetter);
            string[] symbols = { "а","б","в","г","д","е","ё","ж","з","и"
            ,"й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","ю","я"};
            List<string> list = new List<string>();
            add(symbols, countOfLetter, countOfWordLetter, 0, list);
            Console.WriteLine("Всього слів: {0}", sum);
            Console.ReadKey();
        }
    }
}


