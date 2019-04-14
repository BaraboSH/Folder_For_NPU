using System;
using System.Collections.Generic;
using System.Linq;

namespace Lab1SysAnal
{
    class Program
    {
        static void Main(string[] args)
        {
            List<double> resultsFunc1 = new List<double>();
            List<double> resultsFunc2 = new List<double>();
            Dictionary<double, List<double>> keyValuePairs1 = new Dictionary<double, List<double>>();
            Dictionary<double, List<double>> keyValuePairs2 = new Dictionary<double, List<double>>();
            List<double> resultsWithMinX1 = new List<double>();
            List<double> resultsWithMinX2 = new List<double>();
            (double min, double max) intervalsX1 = (0, 3);
            (double min, double max) intervalsX2 = (-1, 3);

            //Расчеты функций
            for (double i = intervalsX1.min; i < intervalsX1.max; i += 0.01)
            {
                resultsFunc1.Clear();
                resultsFunc2.Clear();
                for (double j = intervalsX2.min; j < intervalsX2.max; j += 0.01)
                {
                    resultsFunc1.Add(-5 * Math.Pow(i, 2) - 6 * i + Math.Pow(j, 2) + 17);
                    resultsFunc2.Add(-Math.Pow(j, 2) + 18 * i * j + 5);
                }

                keyValuePairs1.Add(i, resultsFunc1.Select(x => x).ToList());
                keyValuePairs2.Add(i, resultsFunc2.Select(x => x).ToList());
                resultsWithMinX1.Add(resultsFunc1.Min());
                resultsWithMinX2.Add(resultsFunc2.Min());
            }
            double func2WithStar = resultsWithMinX2.Max();
            double func1WithStar = resultsWithMinX1.Max();
            Console.WriteLine(func1WithStar + " " + func2WithStar);
            resultsWithMinX1.Clear();
            resultsWithMinX2.Clear();
            foreach (var item in keyValuePairs1)
            {
                resultsWithMinX1.AddRange(item.Value.Where(x => x >= func1WithStar).Select(x => x - func1WithStar));
            }
            foreach (var item in keyValuePairs2)
            {
                resultsWithMinX2.AddRange(item.Value.Where(x => x >= func2WithStar).Select(x => x - func2WithStar));
            }
            Console.WriteLine(resultsWithMinX1.Min() + " " + resultsWithMinX2.Min());
            Console.WriteLine(keyValuePairs1.Where(x => x.Value.Contains(resultsWithMinX1.Min() + func1WithStar)).Select(x => x.Key).FirstOrDefault());
            Console.WriteLine(keyValuePairs2.Where(x => x.Value.Contains(resultsWithMinX2.Min() + func2WithStar)).Select(x => x.Key).FirstOrDefault());
            Console.ReadKey();

        }
    }
}
