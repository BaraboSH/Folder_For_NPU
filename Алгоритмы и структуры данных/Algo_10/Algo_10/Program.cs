using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo_10
{
    class Program
    {
        public static void BinarySort(int[] list)
        {
            for (int i = 1; i < list.Length; i++)
            {
                int low = 0;
                int high = i - 1;
                int temp = list[i];
                //Find
                while (low <= high)
                {
                    int mid = (low + high) / 2;
                    if (temp < list[mid])
                        high = mid - 1;
                    else
                        low = mid + 1;
                }
                //backward shift
                for (int j = i - 1; j >= low; j--)
                    list[j + 1] = list[j];
                list[low] = temp;
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
            BinarySort(array);
            Console.WriteLine();
            Console.WriteLine("                   Відсортований масив:");
            Print(array);
            Console.WriteLine();

        }
    }
}
