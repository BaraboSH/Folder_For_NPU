using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo_6
{
    class Program
    {
        static private void ShellSort(int[] array)
        {
            int step = array.Length / 2;
            while (step > 0)
            {
                int i, j;
                for (i = step; i < array.Length; i++)
                {
                    int value = array[i];
                    for (j = i - step; (j >= 0) && (array[j] > value); j -= step)
                        array[j + step] = array[j];
                    array[j + step] = value;
                }
                step /= 2;
            }
        }
        static private void Print(int[] itemArray)
        {
            for (int i = 0; i < itemArray.Length; i++)
            {
                Console.Write("{0} ", itemArray[i]);
                if (i % 20 == 0 && i > 0)
                {
                    Console.WriteLine();
                }
            }
        }
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;
            int[] array = new int[100];
            Random rand = new Random();
            for (int i = 0; i < array.Length; i++)
            {
                array[i] = rand.Next(1000);
            }
            Console.WriteLine("                   Початковий масив:");
            Print(array);
            ShellSort(array);
            Console.WriteLine();
            Console.WriteLine("                   Відсортований масив:");
            Print(array);
            Console.WriteLine();
        }
    }
}
