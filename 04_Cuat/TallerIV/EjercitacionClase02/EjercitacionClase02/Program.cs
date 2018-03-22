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

            Console.WriteLine("Por favor ingrese la operacion que desea realizar: ");
            var OperacionOriginal = Console.ReadLine();
            OperacionOriginal = "0+" + OperacionOriginal;
            string[] operaciones;
            string[] operadores;
            int cantidadOperaciones = 0;

            foreach (char caracter in OperacionOriginal)
            {
                if ((caracter == '/') || (caracter == '*') || (caracter == '-') || (caracter == '+'))
                    cantidadOperaciones++;
            }
            operaciones = new string[cantidadOperaciones];
            operadores = new string[cantidadOperaciones+1];
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
                        if(caracter != ' '){
                            if (operacionesAsignadas < cantidadOperaciones)
                            {
                                operadores[cantidadOperaciones + 1] += caracter;
                            }
                        }
                        
                        break;
                }


            }

            int respuesta = 0;

            for(int i = 0; i< operaciones.Length; i++)
            {

                    switch (operaciones[i])
                    {
                        case "/":
                            respuesta = respuesta / int.Parse(operadores[i+1]);
                            break;
                        case "*":
                            respuesta = respuesta * int.Parse(operadores[i+1]);
                            break;
                        case "+":
                            respuesta = respuesta + int.Parse(operadores[i+1]);
                            break;
                        case "-":
                            respuesta = respuesta - int.Parse(operadores[i+1]);
                            break;

                    }
                

            }

            Console.WriteLine(respuesta);
            var input = "";
            while(input != "exit")
            {

                input = Console.ReadLine();
            }
                
         
        }
    }
}
