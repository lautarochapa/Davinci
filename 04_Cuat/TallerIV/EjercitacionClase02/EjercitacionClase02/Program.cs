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
            mostarLanding();

            int OperacionesEjecutadas = 0;
            var expresionOriginal = "";
            int respuesta = 0;
            string expresionBackup = "";

            while (expresionOriginal != "0+exit")
            {
                bool expresionConError = false;
                //si aun no se ejecuto ninguna operacion, se pide ingresar una operacion (para la primera ejecucion)
                if (OperacionesEjecutadas == 0)
                {
                    pedirOperacion(expresionConError); 
                }

                //se asigna la cantidad de operaciones que tiene la expresion
                int cantidadOperaciones = ContarOperaciones(expresionOriginal);
                //se crea un array con la misma cantidad de operaciones
                string[] operaciones;
                operaciones = new string[cantidadOperaciones];
                //se crea un array de valores con la cantidad de operaciones +1
                string[] valores;
                valores = new string[cantidadOperaciones + 1];
                int operacionesAsignadas = 0;


                expresionConError = detectarErrores(expresionOriginal, expresionConError);

                
                if (expresionConError == false)
                {
                    foreach (char caracter in expresionOriginal)
                    {

                        if ((caracter == '/') || (caracter == '*') || (caracter == '-') || (caracter == '+'))
                            operacionesAsignadas++;
                        switch (caracter)
                        {
                            case '/':
                                operaciones[operacionesAsignadas - 1] = "/";
                                break;
                            case '*':
                                operaciones[operacionesAsignadas - 1] = "*";
                                break;
                            case '+':
                                operaciones[operacionesAsignadas - 1] = "+";
                                break;
                            case '-':
                                operaciones[operacionesAsignadas - 1] = "-";
                                break;
                            default:
                                if (caracter != ' ')
                                {

                                    if (caracter == 'r' || caracter == 'R')
                                    {
                                        valores[operacionesAsignadas] += respuesta;
                                    }
                                    else
                                    {
                                        valores[operacionesAsignadas] += caracter;
                                    }
                                }

                                break;
                        }

                    }

                    //se resetea el valor de la respuesta y se recorre el array de operaciones

                    bool divisionXcero = false;
                    respuesta = 0;
                    for (int i = 0; i < operaciones.Length; i++)
                    {

                        string operacion = operaciones[i];
                        int valor2 = int.Parse(valores[i + 1]);
                        //se ejecuta cada operacion con el valor inicial de "respuesta" y de "valor2" asginando el resultado nuevamente en respuesta
                        if(valor2 == 0 && operacion == "/")
                        {
                            divisionXcero = true;
                        }
                        else
                        {

                            respuesta = ejecutarOperacion(respuesta, valor2, operacion);
                        }

                    }
                    if(divisionXcero == false)
                    {

                        Console.WriteLine("Resultado: " + respuesta);
                    }
                    else
                    {

                        Console.WriteLine("No se puede dividir por cero");
                    }

                }

                pedirOperacion(expresionConError);
                OperacionesEjecutadas++;
                expresionConError = false;
                expresionBackup = "";
            }





            //funciones:

            int ContarOperaciones(String op)
            {
                int cantOperaciones = 0;
                //se recorre la expresion
                foreach (char caracter in op)
                {
                    //por cada caracter igual a {'/','*','-','+'} se suma una operacion en el contador
                    if ((caracter == '/') || (caracter == '*') || (caracter == '-') || (caracter == '+'))
                        cantOperaciones++;
                }
                //devuelve la cantidad total de operaciones
                return cantOperaciones;
               
            }


            int ejecutarOperacion(int resp, int valor2, string operacion)
            {
                switch (operacion)
                {
                    case "/":
                        resp = resp / valor2;
                        break;
                    case "*":
                        resp = resp * valor2;
                        break;
                    case "+":
                        resp = resp + valor2;
                        break;
                    case "-":
                        resp = resp - valor2;
                        break;
                }
                return resp;
            }


            void pedirOperacion(bool iferror)
            {
                
                if (iferror == true)
                {
                    if(expresionBackup == "")
                    {
                        Console.WriteLine("Repita la operacion: ");
                        expresionOriginal = Console.ReadLine();
                        expresionOriginal = "0+" + expresionOriginal;
                    }
                    else
                    {
                        Console.WriteLine("Usted intento decir: '" + expresionBackup + "'? Y/N");
                        expresionOriginal = Console.ReadLine();
                        if (expresionOriginal == "y" || expresionOriginal == "Y")
                        {
                            expresionOriginal = expresionBackup;
                            expresionOriginal = "0+" + expresionOriginal;
                        }
                        else
                        if (expresionOriginal == "n" || expresionOriginal == "N")
                        {
                            Console.WriteLine("Repita la operacion: ");
                            expresionOriginal = Console.ReadLine();
                            expresionOriginal = "0+" + expresionOriginal;
                        }
                    
                    }
                }   
                else
                {
                    Console.WriteLine("Ingrese la operacion: ");
                    expresionOriginal = Console.ReadLine();
                    expresionOriginal = "0+" + expresionOriginal;
                }
            }


            void mostarLanding()
            {
                Console.WriteLine("Bienvenido");
                /*
                Console.WriteLine("La calculadora se dispone a realizar: ");
                Console.WriteLine("Suma: +");
                Console.WriteLine("Resta: - ");
                Console.WriteLine("Multiplicacion: *");
                Console.WriteLine("Division: /");
                Console.WriteLine("Para realizar una operacion con el resultado de la operacion anterior utilice: 'R' ");
                */
            }


            bool detectarErrores(string exp, bool ifError)
            {
                if(exp != "0+exit")
                {
                    foreach (char caracter in exp)
                    {
                        int resultado;
                        bool isNumeric = int.TryParse(caracter.ToString(), out resultado);
                        if (isNumeric == true || caracter == '+' || caracter == '-' || caracter == '/' || caracter == '*' || caracter == 'r' || caracter == 'R')
                        {
                            expresionBackup += caracter;
                        }
                        else
                        {
                            ifError = true;
                        }
                    }
                    expresionBackup = expresionBackup.Substring(2);
                }
                
                return ifError;
            }




        }
    }
}
