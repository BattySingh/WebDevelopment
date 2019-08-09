using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dataTypes
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1 = 13;
            int num2 = 8;
            int sum = num1 + num2;

            Console.WriteLine("Num1: " + num1);
            Console.WriteLine("Num2: " + num2);
            Console.WriteLine("The Sum of the two numbers is: " + sum);

            double d1 = 3.5;
            double d2 = 1.257;
            double dSum = d1 + d2;

            Console.WriteLine("The Sum of " + d1 + " and " + d2 + " = " + dSum);

            Console.WriteLine(num1 + " + " + d2 + " = " + (num1 + d2));
            Console.WriteLine(num1 + " / " + d2 + " = " + (num1 / d2));

            String myName = "Son Goku";
            String message = "My name is ";

            Console.WriteLine("My Name is " + myName);
            Console.WriteLine(message + myName);

            Console.WriteLine("To uppercase: " + message.ToUpper());

            String myMessage = "HELLO, this is I AM HERE!";
            Console.WriteLine("In Lower Case be: " + myMessage.ToLower());

            Console.Read();
        }
    }
}
