﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrabajoPractico1
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Por favor ingrese su nombre");
            var Nombre = Console.ReadLine();

            Console.WriteLine("Por favor ingrese su apellido");
            var Apellido = Console.ReadLine();

            Console.WriteLine("Su nombre es: " + Apellido + ", " + Nombre);
            Console.WriteLine("");

            //Ej 2

            Console.WriteLine("Por favor ingrese su nombre");
            Nombre = Console.ReadLine();

            Console.WriteLine("Por favor ingrese su edad");
            int Edad;
            bool LoHizo = int.TryParse(Console.ReadLine(), out Edad);

            if (Edad > 18)
            {
                Console.WriteLine("Su nombre es: " + Nombre + " y usted es mayor de edad");
                Console.WriteLine("");
            }
            else
            {
                Console.WriteLine("Su nombre es: " + Nombre + " y usted no es mayor de edad ");
                Console.WriteLine("");
            }


            //Ej 3:


            Console.WriteLine("Por favor ingrese un valor");
            int Numero1;
            int.TryParse(Console.ReadLine(), out Numero1);



            //Ej 4:

            Console.WriteLine("Por favor ingrese un valor");
            int Valor1;
            int.TryParse(Console.ReadLine(), out Valor1);

            Console.WriteLine("Por favor ingrese otro valor");
            int Valor2;
            int.TryParse(Console.ReadLine(), out Valor2);


            var ComunDivisor =
                (Valor1 + Valor2) / 2;

            Console.WriteLine("el comun divisor es:" + ComunDivisor);






            Console.Read();



        }
    }
}
