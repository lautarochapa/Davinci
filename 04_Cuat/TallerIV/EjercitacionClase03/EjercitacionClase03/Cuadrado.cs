using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EjercitacionClase03
{
    class Cuadrado : FiguraGeometrica
    { 
     Double lado;


    public Cuadrado(int lado)
    {
        this.lado = lado;
    }


    public override double CalcularArea()
    {
       return this.lado*this.lado;
    }

    public override double CalcularPerimetro()
    {
        return this.lado*4;
    }
}
}
