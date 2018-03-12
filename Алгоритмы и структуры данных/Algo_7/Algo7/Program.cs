using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo7
{
    class Program
    {
        static int[] slitie(int[] a1,int[] a2)
        {
            int[] a3 = new int[a1.Length + a2.Length];
            int i = 0, j = 0;
            for (int k = 0; k < a3.Length; k++)
            {

                if (i > a1.Length - 1)
                {
                    int a = a2[j];
                    a3[k] = a;
                    j++;
                }
                else if (j > a2.Length - 1)
                {
                    int a = a1[i];
                    a3[k] = a;
                    i++;
                }
                else if (a1[i] < a2[j])
                {
                    int a = a1[i];
                    a3[k] = a;
                    i++;
                }
                else
                {
                    int b = a2[j];
                    a3[k] = b;
                    j++;
                }
            }
            return a3;
        }
        static void SortUnsorted(int[] a, int lo, int hi)
        {
            if (hi <= lo)
                return;
            int mid = lo + (hi - lo) / 2;
            SortUnsorted(a, lo, mid);
            SortUnsorted(a, mid + 1, hi);
            int[] buf = new int[a.Length];
            for (var temp = 0; temp < a.Length; temp++)
            {
                buf[temp] = a[temp];
            }

            for (int k = lo; k <= hi; k++)
                buf[k] = a[k];

            int i = lo, j = mid + 1;
            for (int k = lo; k <= hi; k++)
            {

                if (i > mid)
                {
                    a[k] = buf[j];
                    j++;
                }
                else if (j > hi)
                {
                    a[k] = buf[i];
                    i++;
                }
                else if (buf[j] < buf[i])
                {
                    a[k] = buf[j];
                    j++;
                }
                else
                {
                    a[k] = buf[i];
                    i++;
                }
            }
        }
        static void print(int[] arr)
        {
            for(var i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
        }
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;

            int[] a1 = new int[10];
            int[] a2 = new int[10];
            Random rand = new Random();
            for (int i = 0; i < a1.Length; i++)
            {
                a1[i] = rand.Next(100);
                a2[i] = rand.Next(100);
            }

            int[] a3 = slitie(a1, a2);
            SortUnsorted(a3, 0, a3.Length - 1);
            print(a3);

            Console.ReadKey();
        }
    }
}
