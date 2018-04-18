using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercitacionClase03
{
    class Circulo : FiguraGeometrica
    {
        Double diametro;
        Double radio;


        public Circulo(int diametro)
        {
            this.diametro = diametro;
            this.radio = diametro / 2;
        }


        public override double CalcularArea()
        {
            return Math.PI * Math.Pow(this.radio, 2);
        }

        public override double CalcularPerimetro()
        {
            return 2 * this.radio * Math.PI;
        }
    }
}
