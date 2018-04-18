using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercitacionClase03
{
    class Program
    {
        static void Main(string[] args)
        {
            Triangulo triangulo1 = new Triangulo(3);
            Triangulo triangulo2 = new Triangulo(3, 2);
            Triangulo triangulo3 = new Triangulo(3, 2, 1);

            Circulo circulo1 = new Circulo(5);
            Circulo circulo2 = new Circulo(10);

            Cuadrado cuadrado1 = new Cuadrado(4);
            Cuadrado cuadrado2 = new Cuadrado(5);

            Console.WriteLine("Triangulo 1: ");
            triangulo1.ImprimirDatos();
            Console.WriteLine("Triangulo 2: ");
            triangulo2.ImprimirDatos();
            Console.WriteLine("Triangulo 3: ");
            triangulo3.ImprimirDatos();

            Console.WriteLine("Circulo 1: ");
            circulo1.ImprimirDatos();
            Console.WriteLine("Circulo 2: ");
            circulo2.ImprimirDatos();

            Console.WriteLine("Cuadrado 1: ");
            cuadrado1.ImprimirDatos();
            Console.WriteLine("Cuadrado 2: ");
            cuadrado2.ImprimirDatos();

            Console.Read();

        }
    }
}
