-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2021 at 04:25 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `extincteur`
--

-- --------------------------------------------------------

--
-- Table structure for table `exproduit`
--

CREATE TABLE `exproduit` (
  `id` int(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `prix` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exproduit`
--

INSERT INTO `exproduit` (`id`, `titre`, `type`, `prix`) VALUES
(28, 'Extincteur capacité 9 Kg', 'Gaz', '500 DH'),
(29, 'Extincteur capacité 12 Kg', 'poudre', '600 DH'),
(30, 'Extincteur capacité 15 Kg', 'Eau', '700 DH'),
(31, 'Extincteur capacité 20 Kg', 'Poudre', '1000 DH'),
(32, 'Extincteur capacité 5 Kg', 'poudre', '300 DH'),
(33, 'Extincteur capacité 2 Kg', 'Gaz, poudre', '350 DH');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exproduit`
--
ALTER TABLE `exproduit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exproduit`
--
ALTER TABLE `exproduit`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
