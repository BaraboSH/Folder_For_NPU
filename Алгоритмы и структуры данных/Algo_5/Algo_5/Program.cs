using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo_5
{
    class Program
    {

        static public void InsertionSort(int[] items)
        {
            int sortedRangeEndIndex = 1;
            while (sortedRangeEndIndex < items.Length)
            {
                if (items[sortedRangeEndIndex] < items[sortedRangeEndIndex - 1])
                {
                    int insertIndex = FindInsertionIndex(items, items[sortedRangeEndIndex]);
                    Insert(items, insertIndex, sortedRangeEndIndex);
                }
                sortedRangeEndIndex++;
            }
        }
        static private int FindInsertionIndex(int[] items, int valueToInsert)
        {
            for (int i = 0; i < items.Length; i++)
            {
                if (items[i] > valueToInsert)
                {
                    return i;
                }
            }
            throw new InvalidOperationException("Индекс не найден");
        }
        static private void Insert(int[] itemArray, int indexInsertingAt, int indexInsertingFrom)
        {
            int temp = itemArray[indexInsertingAt];
            itemArray[indexInsertingAt] = itemArray[indexInsertingFrom];
            for (int current = indexInsertingFrom; current > indexInsertingAt; current--)
            {
                itemArray[current] = itemArray[current - 1];
            }
            itemArray[indexInsertingAt + 1] = temp;
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
            Console.WriteLine();
            InsertionSort(array);
            Console.WriteLine("                   Відсортований масив:");
            Print(array);
            Console.WriteLine();
        }
    }
}

