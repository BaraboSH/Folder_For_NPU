using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo_9
{
    class Program
    {
       static int Partition(int[] array, int start, int end)
        {
            int marker = start;
            for (int i = start; i <= end; i++)
            {
                if (array[i] <= array[end])
                {
                    int temp = array[marker]; 
                    array[marker] = array[i];
                    array[i] = temp;
                    marker ++;
                }
            }
            return marker - 1;
        }

        static void QuickSort(int[] array, int start, int end)
        {
            if (start >= end)
            {
                return;
            }
            int pivot = Partition(array, start, end);
            QuickSort(array, start, pivot - 1);
            QuickSort(array, pivot + 1, end);
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
            QuickSort(array,0,array.Length-1);
            Console.WriteLine();
            Console.WriteLine("                   Відсортований масив:");
            Print(array);
            Console.WriteLine();

        }
    }
}
