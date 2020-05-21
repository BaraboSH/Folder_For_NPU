using System;
using NUnit.Framework;

namespace AutoTests.Tests
{
    [TestFixture]
    public class CalculatorTests
    {       
            private Calculator _calculator;

            [SetUp]
            public void SetUp()
            {
                _calculator = new Calculator();
            }

            [TearDown]
            public void TearDown()
            {
                _calculator = null;
            }

            [TestCaseSource(typeof(CalculatorTestCaseSource), nameof(CalculatorTestCaseSource.GetCalculatorAddTestData))]
            public void AddTest(CalculatorTestCaseSource.CalculatorTestData testData)
            {
                var result = _calculator.Add(testData.FirstNumber, testData.SecondNumber);

                Assert.AreEqual(testData.ExpectedResult, result);
            }
            
            [TestCaseSource(typeof(CalculatorTestCaseSource), nameof(CalculatorTestCaseSource.GetCalculatorSubtractTestData))]
            public void SubtractTest(CalculatorTestCaseSource.CalculatorTestData testData)
            {
                var result = _calculator.Subtract(testData.FirstNumber, testData.SecondNumber);

                Assert.AreEqual(testData.ExpectedResult, result);
            }
            
            [TestCaseSource(typeof(CalculatorTestCaseSource), nameof(CalculatorTestCaseSource.GetCalculatorMultiplyTestData))]
            public void MultiplyTest(CalculatorTestCaseSource.CalculatorTestData testData)
            {
                var result = _calculator.Multiply(testData.FirstNumber, testData.SecondNumber);

                Assert.AreEqual(testData.ExpectedResult, result);
            }
            
            [TestCaseSource(typeof(CalculatorTestCaseSource), nameof(CalculatorTestCaseSource.GetCalculatorDivisionTestData))]
            public void DivisionTest(CalculatorTestCaseSource.CalculatorTestData testData)
            {
                switch (testData.TestCase)
                {
                    case 1:
                        var exception = Assert.Throws<DivideByZeroException>(
                            () => _calculator.Division(testData.FirstNumber, testData.SecondNumber));

                        Assert.AreEqual("Division on 0", exception.Message);
                        break;
                    default:
                        var result = _calculator.Division(testData.FirstNumber, testData.SecondNumber);
                        Assert.AreEqual(testData.ExpectedResult, result);
                        break;
                }
            }
            
            [TestCaseSource(typeof(CalculatorTestCaseSource), nameof(CalculatorTestCaseSource.GetCalculatorGetSquareTestData))]
            public void GetSquareTest(CalculatorTestCaseSource.CalculatorTestData testData)
            {
                switch (testData.TestCase)
                {
                    case 1:
                        var exception = Assert.Throws<InvalidOperationException>(
                            () => _calculator.GetSquare(testData.FirstNumber));

                        Assert.AreEqual("Number is negative", exception.Message);
                        break;
                    default:
                        var result = _calculator.GetSquare(testData.FirstNumber);
                        Assert.AreEqual(testData.ExpectedResult, result);
                        break;
                }
            }
            
            [TestCaseSource(typeof(CalculatorTestCaseSource), nameof(CalculatorTestCaseSource.GetCalculatorGetPowerTestData))]
            public void GetPowerTest(CalculatorTestCaseSource.CalculatorTestData testData)
            {
                var result = _calculator.GetPower(testData.FirstNumber, testData.SecondNumber);

                Assert.AreEqual(testData.ExpectedResult, result);
            }

            [Test]
            public void TestFail()
            {
                Assert.Fail();
            }
            
            [Test, Ignore("Because"), Timeout(1000)]
            public void TestIgnore()
            {
                
            }
    }
}
