using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exercise1
{
    class Program
    {
        const string myBirthDate = "3-02-1992";

        static void Main(string[] args)
        {
            byte byte1 = 225;
            sbyte byte2 = 125;
            int int1 = 3;
            uint int2 = 3232423423;
            short short1 = 22341;
            ushort short2 = 25423;
            long long1 = 2342342423432;
            ulong long2 = 3432332342332423432;
            float float1 = 23423.324324234234234f;
            double double1 = 324323223.3243243242343343123432432;
            char char1 = 's';
            bool bool1 = true;
            string string1 = "Son Goku";
            decimal decimal1 = 243.3423432423423432432432423432423423M;

            Console.WriteLine("Byte: " + byte1);
            Console.WriteLine("sByte: " + byte2);
            Console.WriteLine("Int: " + int1);
            Console.WriteLine("uInt: " + int2);
            Console.WriteLine("Short: " + short1);
            Console.WriteLine("uShort: " + short2);
            Console.WriteLine("Long: " + long1);
            Console.WriteLine("uLong: " + long2);
            Console.WriteLine("Float: " + float1);
            Console.WriteLine("Double: " + double1);
            Console.WriteLine("Char: " + char1);
            Console.WriteLine("Bool: " + bool1);
            Console.WriteLine("String: " + string1);
            Console.WriteLine("Decimal: " + decimal1);

            string myString1 = "I control text";
            string myString2 = "32";
            int myInt = Int32.Parse(myString2);

            Console.WriteLine("String to Integer: " + myInt);

            Console.WriteLine("My birthdate: {0}", myBirthDate);

            Console.Read();
        }
    }
}
