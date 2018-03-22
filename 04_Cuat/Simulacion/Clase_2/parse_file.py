#La tarea consiste en leer el input DATAFILE linea por lina, y (sin incluir el header)
#separar las columnas de las primeras 10 lineas por el caracter ",".
#Crear una lista de diccionarios en donde la clave sea el titulo de la columna y el valor sea el correspondiente
#al valor del campo en esa fila, cada diccionario de la lista representara una fila del CSV (sin header).
#La funcion parse_file debe retornar una lista de diccionarios.
#Las claves o valores no deben contener espacios ni caracteres de nueva linea (\n).
#Podes usar el metodo .strip() de la clase string para remover esos caracteres.
#Como debes parsear solo las primeras 10 lineas, la lista de diccionarios debe terminar con 10 entradas! 


import os
import csv

DATADIR = ""
DATAFILE = "beatles-diskography.csv"


def parse_file(datafile):
    data = []
    return data

def test():
    # a simple test of your implemetation
    datafile = os.path.join(DATADIR, DATAFILE)
    d = parse_file(datafile)
    firstline = {'Title': 'Please Please Me', 'UK Chart Position': '1', 'Label': 'Parlophone(UK)', 'Released': '22 March 1963', 'US Chart Position': '-', 'RIAA Certification': 'Platinum', 'BPI Certification': 'Gold'}
    tenthline = {'Title': '', 'UK Chart Position': '1', 'Label': 'Parlophone(UK)', 'Released': '10 July 1964', 'US Chart Position': '-', 'RIAA Certification': '', 'BPI Certification': 'Gold'}

    assert d[0] == firstline
    assert d[9] == tenthline

    
test()