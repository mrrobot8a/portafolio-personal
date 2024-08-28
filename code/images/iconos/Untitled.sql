CREATE TABLE `Clientes` (
  `id_cliente` INT PRIMARY KEY AUTO_INCREMENT,
  `documento` VARCHAR(20) NOT NULL,
  `tipo_documento` VARCHAR(10) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `direccion` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(20),
  `fecha_nacimiento` DATE,
  `url_imagen_perfil` VARCHAR(255),
  `id_usuario` INT
);

CREATE TABLE `Proveedores` (
  `id_proveedor` INT PRIMARY KEY AUTO_INCREMENT,
  `nit` VARCHAR(20) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `ciudad` VARCHAR(50) NOT NULL,
  `correo` VARCHAR(50) NOT NULL,
  `numero_contacto` VARCHAR(20)
);

CREATE TABLE `Productos` (
  `id_producto` INT PRIMARY KEY AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `marca` VARCHAR(50) NOT NULL,
  `valor_unitario` DECIMAL(10,2) NOT NULL,
  `unidades_stock` INT NOT NULL,
  `descripcion` TEXT,
  `id_proveedor` INT
);

CREATE TABLE `Ventas` (
  `id_venta` INT PRIMARY KEY AUTO_INCREMENT,
  `id_cliente` INT,
  `fecha_venta` DATE NOT NULL
);

CREATE TABLE `ProductosVentas` (
  `id_venta` INT,
  `id_producto` INT,
  `cantidad` INT NOT NULL,
  `Primary` Key(id_venta,id_producto)
);

CREATE TABLE `Usuarios` (
  `id_usuario` INT PRIMARY KEY AUTO_INCREMENT,
  `nombre_usuario` VARCHAR(50) NOT NULL,
  `contrasena` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `fecha_creacion` TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE `Roles` (
  `id_rol` INT PRIMARY KEY AUTO_INCREMENT,
  `nombre_rol` VARCHAR(50) NOT NULL,
  `descripcion` TEXT
);

CREATE TABLE `UsuariosRoles` (
  `id_usuario` INT,
  `id_rol` INT,
  `Primary` Key(id_usuario,id_rol)
);

ALTER TABLE `Clientes` ADD FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`);

ALTER TABLE `Productos` ADD FOREIGN KEY (`id_proveedor`) REFERENCES `Proveedores` (`id_proveedor`);

ALTER TABLE `Ventas` ADD FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id_cliente`);

ALTER TABLE `ProductosVentas` ADD FOREIGN KEY (`id_venta`) REFERENCES `Ventas` (`id_venta`);

ALTER TABLE `ProductosVentas` ADD FOREIGN KEY (`id_producto`) REFERENCES `Productos` (`id_producto`);

ALTER TABLE `UsuariosRoles` ADD FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios` (`id_usuario`);

ALTER TABLE `UsuariosRoles` ADD FOREIGN KEY (`id_rol`) REFERENCES `Roles` (`id_rol`);
