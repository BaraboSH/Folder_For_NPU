using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace ConsoleApplicationLab
{
    class Program
    {
        static void funct(string str1)
        {
            string[] strArr = new string[str1.Length];
            for (var i = 0; i < str1.Length; i++)
            {
                strArr[i] = str1[i].ToString();
            }

            for (var i = 0; i < strArr.Length; i++)
            {
                int temp = int.Parse(strArr[i]) + 1071;
                Console.Write((char)temp);
            }

            Console.WriteLine("");
            Console.WriteLine("---");
            int num = 0;
            for (var i = 0; i < strArr.Length; i++)
            {
                if (i == num)
                {
                    int temp = int.Parse(strArr[i]) + 1071;
                    Console.Write((char)temp);
                }
                else if (i == strArr.Length - 1)
                {
                    int temp = int.Parse(strArr[strArr.Length - 1]) + 1071;
                    Console.Write((char)temp);
                }
                else if ((i + 1) == num)
                {
                    int temp = int.Parse(strArr[i]) + 1071;
                    Console.Write((char)temp);
                }
                else if ((i + 2) == num)
                {
                    int temp = int.Parse(strArr[i] + strArr[i + 1]) + 1070;
                    Console.Write((char)temp);
                    i++;
                }
                else
                {
                    int temp = int.Parse(strArr[i] + strArr[i + 1]) + 1070;
                    Console.Write((char)temp);
                    i++;
                }

                if (i == strArr.Length - 1)
                {
                    i = -1;
                    num++;
                    Console.WriteLine("");
                }
                if (num == strArr.Length - 1)
                {
                    break;
                }
            }

            Console.WriteLine("");
            Console.WriteLine("---");
            for (var i = 0; i < strArr.Length; i++)
            {
                if (i == strArr.Length - 1)
                {
                    int temp = int.Parse(strArr[strArr.Length - 1]) + 1071;
                    Console.Write((char)temp);
                } else
                {
                    int temp = int.Parse(strArr[i] + strArr[i + 1]) + 1070;
                    Console.Write((char)temp);
                    i++;
                }
                
            }
            Console.WriteLine("");
            Console.WriteLine("---");
        }

        static void Main()
        {
            string str1 = "211221";
            string str2 = "21221";
            funct(str1);
            funct(str2);
            Console.ReadKey();
        }
    }
}
