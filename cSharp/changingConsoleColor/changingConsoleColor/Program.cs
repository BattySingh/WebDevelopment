using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace changingConsoleColor
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.Clear();
            Console.BackgroundColor = ConsoleColor.White;
            Console.ForegroundColor = ConsoleColor.DarkGreen;
            Console.Clear();
            Console.WriteLine("Welcome");
            Console.Write("Hello, I like Dragon Ball Anime");
            Console.Read();
        }
    }
}
