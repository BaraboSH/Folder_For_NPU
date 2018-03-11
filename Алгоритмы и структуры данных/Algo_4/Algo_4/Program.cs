using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Algo_4
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.Unicode;
            Stack<int> stack = new Stack<int>();
            Console.WriteLine("Введіть арифметичний вираз: ");
            string arifExample = Console.ReadLine();
            Console.WriteLine("            Дужки");
            Console.WriteLine("Відкриваюча         Закриваюча");
            int numOfDuzhka = 1;
            for (int i = 0; i < arifExample.Length; i++)
            {
                if (arifExample[i] == '(')
                {
                    stack.Push(numOfDuzhka);
                    numOfDuzhka++;
                }
                else if (arifExample[i] == ')')
                {
                    if (stack.Count() == 0)
                    {
                        Console.WriteLine("    -                    {0}", numOfDuzhka);
                        numOfDuzhka++;
                    }
                    else
                    {
                        Console.WriteLine("    {0}                    {1}", stack.Pop(), numOfDuzhka);
                        numOfDuzhka++;
                    }
                }
            }
            if(stack.Count()>0)
            {
                for(int i = 0;i<stack.Count();i++)
                {
                    Console.WriteLine("    {0}                    -", stack.Pop());
                }
            }
            if(numOfDuzhka==1)
            {
                Console.WriteLine();
                Console.WriteLine();
                Console.WriteLine("У виразі немає дужок");
            }

        }
    }
}
