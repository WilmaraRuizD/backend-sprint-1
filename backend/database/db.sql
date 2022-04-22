CREATE DATABASE semillero;
---------UTILIZANDO LA BASA DE DATOS
use semillero;

CREATE TABLE marcas(
    id INT(11) NOT NULL,
    descripcion VARCHAR(45) NOT NULL,
    estado VARCHAR(4) NOT NULL
);

ALTER TABLE marcas
ADD PRIMARY KEY (id);

ALTER TABLE marcas
    MODIFY id INT(11)NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

CREATE TABLE lineas (
  id INT(11) NOT NULL,
  descripcion VARCHAR(45) NOT NULL,
  estado VARCHAR(4) NOT NULL,
  marcas_id INT(11),
  CONSTRAINT fk_marcas_id FOREIGN KEY(marcas_id)REFERENCES marcas(id)
  );
 
 ALTER TABLE lineas
  ADD PRIMARY KEY(id);
ALTER TABLE lineas
    MODIFY id INT(11) NOT NULl AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE vehiculos (
    nroplaca VARCHAR(7)NOT NULL,
    modelo VARCHAR(45)NOT NULL,
    fechaVencimientoSeguro DATE NOT NULL,
    vencimiento_tecno DATE NOT NULl,
    lineas_id INT(11),
    CONSTRAINT fx_lineas_id FOREIGN KEY(lineas_id) REFERENCES lineas(id)
);
   ALTER TABLE vehiculos
   ADD PRIMARY KEY(nroplaca);




ALTER TABLE vehiculos
  ADD PRIMARY KEY(nroplaca);



    --mostrar las tablas de la base de datos
    SHOW TABLES ;

    -- describir una tabla 
    describe marcas;
    describe lineas;
    describe vehiculos;


 -------------- Ingreso de registros en la tabla marcas :
 INSERT INTO marcas (descripcion,estado)VALUES
    
    ('Mazda pais Japon rep:Casa Toro', 'Acti' ),
    ('Toyota pais Japon rep:toyota CVI', 'Acti' ),
     ('AUDI País: Alemania Rep Porsche','Acti'),
|   ('BAIC País: China Rep:China Automotriz','Acti')
    ('Chevrolet pais EEUU Rep:Concecion Chevrolet','Acti');

------------Muestra los valores de la tablas :
    SELECT * FROM marcas;
    SELECT * FROM lineas;
    SELECT * FROM vehiculos;

---------ingreso de registro en la tabla lineas:
INSERT INTO lineas (descripcion,estado,marcas_id)VALUES
 ('compacto','acti','2'),
 ('Todoterreno','acti','2'),
 ('Vehicula todoterrno','inac','2'),
 ('cars','acti','3'),
 ('linea hibridos','inac','3'),
 ('Automoviles','act','4'),
 ('camioneta','acti','4'),
 ('pick ups','inac','4');

--------------------para reiniciar las secuencia marcas por id 

ALTER TABLE marcas AUTO_INCREMENT=1;
ALTER TABLE lineas AUTO_INCREMENT=1;
