using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo_7
{
    class Program
    {
        static public void MergeSort(int[] items)
        {
            // Если массив содержит один элемент - прервать выполнение метода  

            if (items.Length <= 1)
            {
                return;
            }

            // 

            int leftSize = items.Length / 2;
            int rightSize = items.Length - leftSize;
            int[] left = new int[leftSize];
            int[] right = new int[rightSize];
            Array.Copy(items, 0, left, 0, leftSize);
            Array.Copy(items, leftSize, right, 0, rightSize);

            // Рекурсивное деление массива

            MergeSort(left);
            MergeSort(right);

            Merge(items, left, right);

        }

        static private void Merge(int[] items, int[] left, int[] right)
        {
            int leftIndex = 0;
            int rightIndex = 0;
            int targetIndex = 0;
            int remaining = left.Length + right.Length; // общая длинна правой и левой части сортируемого массива

            while (remaining > 0)
            {
                if (leftIndex >= left.Length)
                {
                    items[targetIndex] = right[rightIndex++];
                }

                else if (rightIndex >= right.Length)
                {
                    items[targetIndex] = left[leftIndex++];
                }

                else if (left[leftIndex].CompareTo(right[rightIndex]) < 0)
                {
                    items[targetIndex] = left[leftIndex++];
                }

                else
                {
                    items[targetIndex] = right[rightIndex++];
                }

                targetIndex++;
                remaining--;
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
            MergeSort(array);
            Console.WriteLine();
            Console.WriteLine("                   Відсортований масив:");
            Print(array);
            Console.WriteLine();
        }
    }
}
