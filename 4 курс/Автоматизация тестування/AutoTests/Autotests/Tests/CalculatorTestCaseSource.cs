using System.Collections.Generic;

namespace AutoTests.Tests
{
    public static class CalculatorTestCaseSource
    {
        public class CalculatorTestData
        {
            public int TestCase { get; set; }

            public int FirstNumber { get; set; }

            public int SecondNumber { get; set; }

            public int ExpectedResult { get; set; }
        }

        public static List<CalculatorTestData> GetCalculatorAddTestData =>
            new List<CalculatorTestData>
            {
                new CalculatorTestData
                {
                    FirstNumber = 5,
                    SecondNumber = 2,
                    ExpectedResult = 7,
                    TestCase = 1
                },
                new CalculatorTestData
                {
                    FirstNumber = 1,
                    SecondNumber = 0,
                    ExpectedResult = 1,
                    TestCase = 2
                },
                new CalculatorTestData
                {
                    FirstNumber = 3,
                    SecondNumber = 1222,
                    ExpectedResult = 1225,
                    TestCase = 3
                },
            };
         
        public static List<CalculatorTestData> GetCalculatorSubtractTestData =>
            new List<CalculatorTestData>
            {
                new CalculatorTestData
                {
                    FirstNumber = 5,
                    SecondNumber = 2,
                    ExpectedResult = 3,
                    TestCase = 1
                },
                new CalculatorTestData
                {
                    FirstNumber = 1,
                    SecondNumber = 0,
                    ExpectedResult = 1,
                    TestCase = 2
                },
                new CalculatorTestData
                {
                    FirstNumber = 3,
                    SecondNumber = 12,
                    ExpectedResult = -9,
                    TestCase = 3
                },
            };
        
        public static List<CalculatorTestData> GetCalculatorMultiplyTestData =>
            new List<CalculatorTestData>
            {
                new CalculatorTestData
                {
                    FirstNumber = 5,
                    SecondNumber = 2,
                    ExpectedResult = 10,
                    TestCase = 1
                },
                new CalculatorTestData
                {
                    FirstNumber = 1,
                    SecondNumber = 0,
                    ExpectedResult = 0,
                    TestCase = 2
                },
                new CalculatorTestData
                {
                    FirstNumber = 3,
                    SecondNumber = -12,
                    ExpectedResult = -36,
                    TestCase = 3
                },
            };
        
        public static List<CalculatorTestData> GetCalculatorDivisionTestData =>
            new List<CalculatorTestData>
            {
                new CalculatorTestData
                {
                    FirstNumber = 1,
                    SecondNumber = 0,
                    TestCase = 1
                },
                new CalculatorTestData
                {
                    FirstNumber = 5,
                    SecondNumber = 2,
                    ExpectedResult = 2,
                    TestCase = 2
                },
                new CalculatorTestData
                {
                    FirstNumber = -12,
                    SecondNumber = 3,
                    ExpectedResult = -4,
                    TestCase = 3
                },
            };
        
        public static List<CalculatorTestData> GetCalculatorGetSquareTestData =>
            new List<CalculatorTestData>
            {
                new CalculatorTestData
                {
                    FirstNumber = -10,
                    SecondNumber = 0,
                    TestCase = 1
                },
                new CalculatorTestData
                {
                    FirstNumber = 4,
                    SecondNumber = 2,
                    ExpectedResult = 2,
                    TestCase = 2
                },
                new CalculatorTestData
                {
                    FirstNumber = 255,
                    SecondNumber = 3,
                    ExpectedResult = 15,
                    TestCase = 3
                },
            };
        
        public static List<CalculatorTestData> GetCalculatorGetPowerTestData =>
            new List<CalculatorTestData>
            {
                new CalculatorTestData
                {
                    FirstNumber = 5,
                    SecondNumber = 2,
                    ExpectedResult = 25,
                    TestCase = 1
                },
                new CalculatorTestData
                {
                    FirstNumber = 2,
                    SecondNumber = 4,
                    ExpectedResult = 16,
                    TestCase = 2
                },
                new CalculatorTestData
                {
                    FirstNumber = 255,
                    SecondNumber = 0,
                    ExpectedResult = 1,
                    TestCase = 3
                },
            };
    }
}
