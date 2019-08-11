using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace typeConversion
{
    class Program
    {
        static void Main(string[] args)
        {
            double myDouble = 4.323;
            float myFloat = 1.2f;

            int num1 = (int)myDouble;

            Console.WriteLine("Converted to int: " + num1);

            string myString = myFloat.ToString();

            Console.WriteLine("Float Converted to String: " + myString);

            bool sunShining = true;
            Console.WriteLine("Sun is shining: " + sunShining);

            string text1 = "15";
            string text2 = "13";
            string myResult = text1 + text2;

            Console.WriteLine("The string result: " + myResult);

            int intText1 = Int32.Parse(text1);
            int intText2 = Int32.Parse(text2);

            int intResult = intText1 + intText2;
            Console.WriteLine("Integer Result: " + intResult);

            Console.Read();
        }
    }
}
