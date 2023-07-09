import pymysql
from flask import Flask, jsonify, request
from flask_cors import CORS


#CREACION DE LA BASE DE DATOS. LA GENERO UNA SOLO VEZ.
#TENGO QUE CORRER XAMMP ANTES DE EJECUTAR LA FUNCION


def crear_basededatos():
    #Conectarse a la base de datos
    conexion=pymysql.connect(
          host="localhost",
          user="root",
          password="",
          port=3306,
          database=""
)
    try:
        cursor = conexion.cursor()
        cursor.execute("CREATE DATABASE IF NOT EXISTS biblioteca")
        cursor.close()
        print("La base de datos 'biblioteca' ha sido creada, o ya existía.\n")
        conexion.close()
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

# CREO LA CLASE DOCUMENTO NO SE SI LO VOY A USAR

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
      self.conexion=pymysql.connect(
         host='localhost',
         port=3306,
         user='root',
         password="",
         database='biblioteca'
      )
      self.cursor=self.conexion.cursor()
      self.crear_tabla_documentos()
#PARA CREAR LA TABLA DE LA BASE DE DATOS  
   def crear_tabla_documentos(self):
      self.cursor.execute(" CREATE TABLE IF NOT EXISTS documentos (codigo INT PRIMARY KEY AUTO_INCREMENT,titulo VARCHAR (50),tematica VARCHAR (50),tipo VARCHAR (50),descripcion VARCHAR (250),descargas INT)")
      self.conexion.commit()
      
#PARA AGREGAR DOCUMENTOS A LA TABLA DE LA BASE DE DATOS
#!!!!OJO, descargas CUANDO SE CREA EL DOCUMENTO TIENE QUE VALER 0 PENSAR SI LO DEFISNIMOS ACA!!!!!!
   def agregar_documento(self, titulo,tematica, tipo, descripcion):
       descargas=0
       try:
           self.cursor.execute("INSERT INTO documentos (titulo,tematica,tipo,descripcion,descargas) VALUES (%s,%s,%s,%s,%s)",(titulo,tematica, tipo, descripcion,descargas))
           self.conexion.commit()
           self.conexion.close()
           print("El documento se agregó correctamente")
           
           #return jsonify({'message':"El documento se agregó correctamente"}), 200 #No lo puedo hacer andar creo que hay que ejecutar flask "contexto de aplicación"
           
       except pymysql.IntegrityError:
        #jsonify({'message':"Se generó un error en la carga del documento."}), 404
        print("Se generó un error en la carga del documento.")
#PARA SELECCIONAR UN DOCUMENTO DE LA BASE DE DATOS.
   
   def consultar_documento(self, codigo):
      self.cursor.execute("SELECT * FROM documentos WHERE codigo = %s", (codigo,))
      resultado=self.cursor.fetchone()
      if resultado:
         codigo,titulo,tematica,tipo,descripcion,descargas=resultado
         documento_consultado=Documento(codigo,titulo,tematica,tipo,descripcion,descargas)
         return documento_consultado,    print(resultado)
      else:
         return False
#PARA SUMAR DESCARGAS.!!!!!!!!!!!!!!1
   def sumar_descargas(self,codigo):
      self.cursor.execute("SELECT * FROM documentos WHERE codigo = %s", (codigo,))#SELECCIONO EL DOCUMENTO QUE FUE DESCARGADO.      
      resultado=self.cursor.fetchone()
      if resultado:
         codigo,titulo,tematica,tipo,descripcion,descargas=resultado
         
         descargas_actualizada=descargas+1

         self.cursor.execute("UPDATE documentos SET descargas = %s  WHERE codigo = %s ", (descargas_actualizada,codigo,))#ACTUALIZO EL NRO DE DESCARGAS EN LA DB.
         self.conexion.commit()
        
         #return jsonify({'message':"El documento se descargó correctamente"}), 200
         print("El documento se descargó correctamente")
      else:
         return False


#PARA CONSULTAR DOCUMENTOS DE UNA DETERMINADA TEMATICA

   def listar_documentos(self,tematica):
      try:
         self.cursor.execute("SELECT * FROM documentos WHERE tematica = %s ORDER BY descargas DESC", (tematica)) #VERIFICAR SI EL ORDER ESTA BIEN UBICADO!!!!!
         filas=self.cursor.fetchall()
         documents=[]
         for fila in filas:
            codigo,titulo,tematica,tipo,descripcion,descargas=fila #DESENPAQUETO LA TUPLA fila
            document={'codigo':codigo,'titulo':titulo,'tematica':tematica,'tipo':tipo,'descripcion':descripcion,'descargas':descargas} # CONSTRUYO EL DICCIONARIO DOCUMENT
            documents.append(document) #CONTRUYO LA LISTA documents
         
         #return jsonify(documents), 200
         print(documents)
         self.conexion.close()
      except pymysql.IntegrityError:
         print('error')
           # jsonify({'message': 'Documentos no encontrados.'}), 404 
x=Biblioteca()

#x.agregar_documento("Electrólis","Química", "Monografía", "Descripción del proceso de electrólisis del agua")

#app = Flask(__name__)
#CORS(app)     
#x.sumar_descargas("2")
#x.listar_documentos('Física')
x.consultar_documento("5")
