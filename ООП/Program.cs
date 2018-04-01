using System;
//using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace lab3
{

    class MyBitArray
    {
        public UInt64[] resultArr = new UInt64[10];

        public MyBitArray(bool[] arr)
        {
            int n, s;
            for (int i = 0; i < arr.Length; i++)
            {
                n = i / 64;
                s = i % 64;
                if (arr[i]) resultArr[n] |= ((ulong)1 << s);
            }
        }
        public MyBitArray(byte[] arr)
        {
            int n, s;
            for (int i = 0; i < arr.Length; i++)
            {
                n = i / 8;
                s = i % 8;
                resultArr[n] |= ((ulong)arr[i] << s * 8);
            }
        }
        public MyBitArray(int[] arr)
        {
            int n, s;
            for (int i = 0; i < arr.Length; i++)
            {
                n = i / 2;
                s = i % 2;
                resultArr[n] |= ((ulong)arr[i] << s * 32);
            }
        }
        public void PrintValues(int l)
        {
            ulong n;
            for (int i = 0; i <= l / 64; i++)
            {
                for (int j = 0; j < ((i != l / 64) ? 64 : l % 64); j++)
                {
                    n = (resultArr[i] & ((ulong)1 << j));
                    Console.Write(n >> j);
                    if ((j + 1) % 8 == 0)
                    {
                        Console.Write(" ");
                    }
                }

                Console.WriteLine();
            }
            Console.WriteLine();
        }
        public void AND(MyBitArray secArr)
        {
            if (this.resultArr.Length == secArr.resultArr.Length)
            {
                for (var i = 0; i < resultArr.Length; i++)
                {
                    this.resultArr[i] &= secArr.resultArr[i];
                }
            }
        }
        public void OR(MyBitArray secArr)
        {
            if (this.resultArr.Length == secArr.resultArr.Length)
            {
                for (var i = 0; i < resultArr.Length; i++)
                {
                    this.resultArr[i] |= secArr.resultArr[i];
                }
            }
        }
    }
    class Program
    {

        static void Main(string[] args)
        {
            //bool[] arr = { true, false, false, true, true };
            //MyBitArray test = new MyBitArray(arr);
            byte[] arr1 = { 1, 2, 3, 4, 5, 255 };
            MyBitArray testByte = new MyBitArray(arr1);
            int[] arr = { 1, 5, 7, 10, 15, 18 };
            MyBitArray testInt = new MyBitArray(arr);
            testInt.PrintValues(arr.Length * 32);
            Console.WriteLine("------------------------------------------");
            testByte.PrintValues(arr1.Length * 8);
            Console.WriteLine("------------------------------------------");
            testInt.AND(testByte);
            testInt.PrintValues(arr.Length * 32);
            Console.WriteLine("------------------------------------------");
            testInt.OR(testByte);
            testInt.PrintValues(arr.Length * 32);
            //BitArray bit = new BitArray(32, true);
            //byte[] myByte = new byte[4] { 1, 2, 3, 4 };
            //BitArray bit2 = new BitArray(myByte);
            //PrintValues(bit2, 32);
            //PrintValues(bit.And(bit2), 32);
            //PrintValues(bit.Not(), 32);
            //PrintValues(bit.And(bit2.Not()), 32);
        }
        static void PrintValues(IEnumerable myList, int myWidth)
        {
            int i = myWidth;
            foreach (Object obj in myList)
            {
                if (i <= 0)
                {
                    i = myWidth;
                    Console.WriteLine();
                }
                i--;
                Console.Write("{0,8}", obj);
                if (i % 8 == 0)
                {
                    Console.WriteLine();
                }
            }
            Console.WriteLine();
        }


    }

}

