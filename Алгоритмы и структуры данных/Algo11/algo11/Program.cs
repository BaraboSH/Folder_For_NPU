using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace algo11
{
    class Program
    {
        static void ArrSort(int[] name)
        {
            int b = 0;
            int left = 0;//Левая граница
            int right = name.Length - 1;//Правая граница
            while (left < right)
            {
                for (int i = left; i < right; i++)//Слева направо...
                {
                    if (name[i] > name[i + 1])
                    {
                        b = name[i];
                        name[i] = name[i + 1];
                        name[i + 1] = b;
                        b = i;
                    }
                }
                right = b;//Сохраним последнюю перестановку как границу
                if (left >= right) break;//Если границы сошлись выходим
                for (int i = right; i > left; i--)//Справа налево...
                {
                    if (name[i - 1] > name[i])
                    {
                        b = name[i];
                        name[i] = name[i - 1];
                        name[i - 1] = b;
                        b = i;
                    }
                }
                left = b;//Сохраним последнюю перестановку как границу
            }
        }
        static void Main(string[] args)
        {
            int[] array = new int[100];
            Random rand = new Random();
            for (int i = 0; i < array.Length; i++)
            {
                array[i] = rand.Next(1000);
                Console.Write(array[i] + " ");
            }
            ArrSort(array);
            Console.WriteLine();
            Console.WriteLine("---");
            for (int i = 0; i < array.Length; i++)
            {
                Console.Write(array[i] + " ");
            }
            Console.ReadKey();

        }
    }
}
