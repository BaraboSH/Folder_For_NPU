using System;
using System.Collections.Generic;
using System.Text;

namespace AutoTests
{
    public class Calculator
    {
        public int Add(int a, int b) => a + b;

        public int Subtract(int a, int b) => a - b;

        public int Multiply(int a, int b) => a * b;

        public int Division(int a, int b)
        {
            if (b == 0)
            {
                throw new DivideByZeroException("Division on 0");
            }

            return a / b;
        }

        public int GetSquare(int number)
        {
            if (number < 0)
            {
                throw new InvalidOperationException("Number is negative");
            }
            return (int)Math.Sqrt(number);
        }

        public int GetPower(int number, int power) => (int)Math.Pow(number, power);
    }
}
