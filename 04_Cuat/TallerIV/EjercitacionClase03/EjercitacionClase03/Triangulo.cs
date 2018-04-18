using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercitacionClase03
{
    class Triangulo : FiguraGeometrica
    {

        Double ladoA;
        Double ladoB;
        Double ladoC;


        public Triangulo(int lado1)
        {
            this.ladoA = lado1;
            this.ladoB = lado1;
            this.ladoC = lado1;
        }

        public Triangulo(int lado1, int lado2)
        {
            this.ladoA = lado1;
            this.ladoB = lado1;
            this.ladoC = lado2;
        }

        public Triangulo(int lado1, int lado2, int lado3)
        {
            this.ladoA = lado1;
            this.ladoB = lado2;
            this.ladoC = lado3;
        }

        public override double CalcularArea()
        {
            Double semiperimetro = CalcularPerimetro() * 0.5;
            Double cuenta = semiperimetro*(semiperimetro-this.ladoA)*(semiperimetro-this.ladoB)*(semiperimetro-this.ladoC);
            return  Math.Pow(cuenta, 0.5);
        }

        public override double CalcularPerimetro()
        {
                return this.ladoA + this.ladoB + this.ladoC;
        }
    }
}
