using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercitacionClase02
{
    class Program
    {
        static void Main(string[] args)
        {

            int CantidadOperaciones = 0;
            var OperacionOriginal = "";


            while (OperacionOriginal != "exit")
            {
                if(CantidadOperaciones == 0)
                {
                    Console.WriteLine("Por favor ingrese la operacion que desea realizar: ");
                    OperacionOriginal = Console.ReadLine();
                    OperacionOriginal = "0+" + OperacionOriginal;
                }



                string[] operaciones;
                string[] operadores;
                int cantidadOperaciones = ContarOperaciones(OperacionOriginal);
                ;





                operaciones = new string[cantidadOperaciones];
                operadores = new string[cantidadOperaciones + 1];
                cantidadOperaciones = -1;


                foreach (char caracter in OperacionOriginal)
                {

                    int operacionesAsignadas = -2;
                    if ((caracter == '/') || (caracter == '*') || (caracter == '-') || (caracter == '+'))
                        cantidadOperaciones++;
                    switch (caracter)
                    {
                        case '/':
                            operaciones[cantidadOperaciones] = "/";
                            operacionesAsignadas++;
                            break;
                        case '*':
                            operaciones[cantidadOperaciones] = "*";
                            operacionesAsignadas++;
                            break;
                        case '+':
                            operaciones[cantidadOperaciones] = "+";
                            operacionesAsignadas++;
                            break;
                        case '-':
                            operaciones[cantidadOperaciones] = "-";
                            operacionesAsignadas++;
                            break;
                        default:
                            if (caracter != ' ')
                            {
                                if (operacionesAsignadas < cantidadOperaciones)
                                {
                                    operadores[cantidadOperaciones + 1] += caracter;
                                }
                            }

                            break;
                    }


                }

                int respuesta = 0;

                for (int i = 0; i < operaciones.Length; i++)
                {

                    switch (operaciones[i])
                    {
                        case "/":
                            respuesta = respuesta / int.Parse(operadores[i + 1]);
                            break;
                        case "*":
                            respuesta = respuesta * int.Parse(operadores[i + 1]);
                            break;
                        case "+":
                            respuesta = respuesta + int.Parse(operadores[i + 1]);
                            break;
                        case "-":
                            respuesta = respuesta - int.Parse(operadores[i + 1]);
                            break;

                    }


                }



                Console.WriteLine(respuesta);






                Console.WriteLine("Por favor ingrese la operacion que desea realizar: ");
                OperacionOriginal = Console.ReadLine();
                OperacionOriginal = "0+" + OperacionOriginal;
                CantidadOperaciones++;
            }


            int ContarOperaciones(String op)
            {
                int cantOperaciones = 0;
                foreach (char caracter in op)
                {
                    if ((caracter == '/') || (caracter == '*') || (caracter == '-') || (caracter == '+'))
                        cantOperaciones++;
                }
                return cantOperaciones;
            }


        }
    }
}
