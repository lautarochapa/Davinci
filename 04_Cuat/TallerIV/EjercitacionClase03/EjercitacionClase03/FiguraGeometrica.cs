using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercitacionClase03
{
    public abstract class FiguraGeometrica
    {

        public abstract Double CalcularArea();

        public abstract Double CalcularPerimetro();

        public void ImprimirDatos()
        {
            Console.WriteLine("El area es: " + this.CalcularArea());
            Console.WriteLine("El perimetro es: " + this.CalcularPerimetro());
            Console.WriteLine("-");
        }

    }
}
