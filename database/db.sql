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
    MODIFY nroplaca VARCHAR(11) NOT NULL;

    --mostrar las base de datos
    SHOW TABLES 

    -- describir una tabla 
    describe marcas;
    describe lineas;
    describe vehiculos;