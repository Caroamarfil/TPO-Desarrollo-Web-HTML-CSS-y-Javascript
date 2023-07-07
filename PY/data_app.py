import pymysql
from flask import Flask, jsonify, request


#CREACION DE LA BASE DE DATOS. LA GENERO UNA SOLO VEZ.
#TENGO QUE CORRER XAMMP ANTES DE EJECUTAR LA FUNCION
#Conectarse a la base de datos
conexion=pymysql.connect(
    host="localhost",
    user="root",
    password="",
    #port="3306",
    database=""
)

def crear_basededatos():
    try:
        cursor = conexion.cursor()
        cursor.execute("CREATE DATABASE IF NOT EXISTS biblioteca")
        cursor.close()
        print("La base de datos 'biblioteca' ha sido creada, o ya existía.\n")
    except pymysql.Error as e:
        print(f"Error al crear la base de datos: {e}\n")
#DEBO DESCOMENTAR PARA CREAR LA BASE DE DATOS
#crear_basededatos()

#MUESTRA LAS BASES DE DATO QUE TENGO CREADAS.
# ----------------------------- 
#cursor=conexion.cursor()
#cursor.execute("SHOW DATABASES")
#for bd in cursor:

 #print(bd)
#----------------------------

#conexion.close()

# CREO LA CLASE DOCUMENTO

class Documento:
   def __init__(self,codigo,titulo,tematica,tipo,descripcion,descargas):
      self.codigo=codigo
      self.titulo=titulo
      self.tipo=tipo
      self.descripcion=descripcion
      self.descargas=descargas
      self.tematica=tematica
def cuenta_descargas(self):
   self.descargas+=1

# CREO LA CLASE BIBLIOTECA

class Biblioteca:
   def __init__(self):
      self.conexion=pymysql.conect(
         host='localhost',
         port=3306,
         user='root',
         pasword='',
         database='biblioteca'
      )
      self.cursor=self.conexion.cursor()
      self.crear_tabla_documentos()
#PARA CREAR LA TABLA DE LA BASE DE DATOS  
   def crear_tabla_documentos(self):
      self.curor.execute(" CREATE TABLE IF NOT EXIST documentos ( codigo INT PRIMARY KEY,titulo VARCHAR (50),tematica VARCHAR (50),tipo VARCHAR (50),descripcion VARCHAR (250),descargas INT)")
      self.conexion.commit()
      self.conexion.close()
#PARA AGREGAR DOCUMENTOS A LA TABLA DE LA BASE DE DATOS
#!!!!OJO descargas CUANDO SE CREA EL DOCUMENTO TIENE QUE VALER 0 PENSAR SI LO HACEMOS ACA O VIENE EL O DESDE EL FRONT!!!!!!
   def agregar_documento(self, codigo, titulo,tematica, tipo, descripcion,descargas):
       try:
           self.cursor.execute("INSERT documentos (codigo,titulo,tematica,tipo,descripcion,descargas) VALUES (%s,%s,%s,%s,%s,%s,)",(codigo, titulo,tematica, tipo, descripcion,descargas))
           self.conexion.commit()
           self.conexion.close()
           jsonify("El documento se agregó correctamente"), 200
       except pymysql.IntegrityError:
        jsonify("Se generó un error en la carga del documento."), 404

#PARA SELECCIONAR UN DOCUMENTO DE LA BASE DE DATOS.
   
   def consutar_documento(self, codigo):
      self.cursor.execute("SELET * FROM documentos WHERE codigo = %s", (codigo,))
      resultado=self.cursor.fetchone()
      if resultado:
         codigo,titulo,tematica,tipo,descripcion,descargas=resultado
         documento_consultado=Documento(codigo,titulo,tematica,tipo,descripcion,descargas)
         return documento_consultado
      else:
         return False
#PARA SUMAR DESCARGAS.!!!!!!!!!!!!!!1
   def sumar_descargas(self,codigo):
      try:
         self.cursor.execute("SELET * FROM documentos WHERE codigo = %s ORDER BY descargas DESC", (codigo,))
#TENDO QUE SEGUIRCON ESTO

#PARA CONSULTAR DOCUMENTOS DE UNA DETERMINADA TEMATICA

   def listar_documentos(self,tematica):
      try:
         self.cursor.execute("SELECT * FROM documentos WHERE tematica = %s ORDER BY descargas DESC", (tematica,)) #VERIFICAR SI EL ORDER ESTA BIEN UBICADO!!!!!
         filas=self.cursor.fetchall()
         documents=[]
         for fila in filas:
            codigo,titulo,tematica,tipo,descripcion,descargas=fila #DESENPAQUETO LA TUPLA fila
            document={'codigo':codigo,'titulo':titulo,'tematica':tematica,'tipo':tipo,'descripcion':descripcion,'descarga':descarga} # CONTRUYO EL DICCIONARIO DOCUMENT
            documents.append(document) #CONTRUYO LA LISTA documents
         return jsonify(documents), 200
         self.conexion.close()
      except pymysql.IntegrityError:
            jsonify({'message': 'Documentos no encontrados.'}), 404 



      