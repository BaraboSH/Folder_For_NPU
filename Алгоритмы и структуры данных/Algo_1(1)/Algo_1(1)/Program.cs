using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo_1_1_
{
    class Program
    {
        static int Gcd (int a,int b)
        {
            while(a!=0&&b!=0)
            {
                if(a>b)
                {
                    a %= b;
                }
                else
                {
                    b %= a;
                }
            }
            return a + b;
        }
        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.Encoding.Default;
            int first_number, second_number;
            Console.Write("Введіть значення першого числа: ");
            first_number = int.Parse(Console.ReadLine());
            Console.Write("Введіть значення другого числа: ");
            second_number = int.Parse(Console.ReadLine());
            Console.WriteLine("НОД цих чисел = {0}", Gcd(first_number, second_number));
        }
    }
}
