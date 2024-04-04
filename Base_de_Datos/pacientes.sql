-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-04-2024 a las 22:14:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pacientes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `numero` int(4) NOT NULL PRIMARY key UNIQUE,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `tipo` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`numero`, `nombre`, `apellido`, `direccion`, `tipo`) VALUES
(1, 'Enrique Tomas', 'Acevedo', 'C.Los zorzales n°2100, B Paraguay', 'B'),
(2, 'Maria Eugenia', 'Rosales', 'Manzana E, 5523, casa 16, B Paraguay', 'C'),
(3, 'Rocio ', 'Alvarado', 'Manzana F Ruiseñor 6333, B Paraguay', 'A'),
(4, 'Rodrigo', 'Molina', 'Tirasso 3647', 'B'),
(5, 'Camila', 'Trentacosta', 'Tirasso 3340, B Paraguay', 'C'),
(6, 'Raul', 'Gonzalez', 'Calle Colibri S/N, B Paraguay', 'A'),
(7, 'Tomas', 'Rodriguez', 'Calle los Halcones N°3773, B Paraguay', 'B'),
(8, 'Carlos', 'Torres', 'Calle Buena Nueva N°6765 , B Paraguay', 'B'),
(9, 'Gimena', 'Villa', 'Calle Aristoteles , B Paraguay', 'B'),
(10, 'Leonel Angel', 'Maradona', 'Calle Lionel messi, B Paraguay', 'A'),
(11, 'Agustin Luciano', 'Castro', 'Calle Pico Nevado, B El Carmen', 'B'),
(12, 'Kevin', 'Castro', 'Calle El Chimborazo, B El Carmen', 'B'),
(13, 'Brayan', 'Castro', 'Calle El Chimborazo, B El Carmen', 'B'),
(14, 'Virginio', 'Taragui', 'Calle Godoy D. , B El Carmen', 'A'),
(15, 'Andrea', 'Ruiz', 'Calle Cerro Marmolejo , B El Carmen', 'C'),
(16, 'Mohamed', 'Perez', 'Calle Casale, B El Carmen', 'B'),
(17, 'Francisco', 'Zocalo', 'Calle Jose Luis Cabezas, B El Carmen', 'C'),
(18, 'Luis', 'Salinas', 'Calle Mathus, B El Carmen', 'A'),
(19, 'Malvinas', 'Salinas', 'Calle Mathus, B El Carmen', 'C'),
(20, 'Jose', 'Gonzalez', 'Cjon. Mathus, B El Carmen', 'B'),
(21, 'Juan', 'Lopez', 'Calle Francisco Miranda, B La Finca', 'A'),
(22, 'Laura', 'Francia', 'Calle Franklin Villanueva N°4202, B La Finca', 'B'),
(23, 'Laura', 'Fernandes', 'Calle jose Maria Gutierrez, B La Finca', 'B'),
(24, 'Juan', 'Lopez', 'Calle Carril Urquiza 1011, B La Finca', 'C'),
(25, 'Eduardo', 'Lucero', 'Calle Carril Urquiza 1472, B La Finca', 'A'),
(26, 'Napoleon', 'Bellea', 'Calle Leonardo Napolitano, B La Finca', 'B'),
(27, 'leon', 'Bella', 'Calle Juan Carlo Lucer, B La Finca', 'B'),
(28, 'Daniela', 'Gomez', 'Calle Perú 2586, B Lihue', 'B'),
(29, 'Sharon', 'Riquelme', 'Calle Brasil 2532, B Lihue', 'C'),
(30, 'Sebastian', 'Abalos', 'Calle Servet 2699, B Lihue', 'C'),
(31, 'Gonzalo', 'Aballay', 'Calle Salta 3067, B Lihue', 'B'),
(32, 'Brian Jose', 'Rodriguez', 'Calle San Ramon 2479, B Lihue', 'A'),
(33, 'Jose', 'Rodriguez', 'Calle San Ramon 2479, B Lihue', 'C'),
(34, 'Ramona', 'Kispe', 'Calle Sarmiento 2563, B Lihue', 'A'),
(35, 'Ramon', 'Valdez', 'Calle Cap Bermudez, B Solares de Urquiza II', 'B'),
(36, 'Brian', 'Godoy', 'Calle San Lorenzo 2316, B Lihue', 'A'),
(37, 'German', 'Alcaino', 'Calle Catamarca 3206, B Lihue', 'B'),
(38, 'Maria', 'Nuñes', 'Calle Terruño calle 1, B La Finca', 'A'),
(39, 'Daniel', 'Perez', 'Calle Terruño calle 3, B La Finca', 'C'),
(40, 'Juan Carlos', 'Perez', 'Calle Terruño calle 2, B La Finca', 'C'),
(41, 'Juan Jose', 'Rosales Pereyra', 'Calle Terruño calle 3, B La Finca', 'A'),
(42, 'Sofia', 'Reyes', 'Calle los Mirlos, B Paraguay', 'A');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
