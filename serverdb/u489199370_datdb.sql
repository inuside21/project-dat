-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 09, 2023 at 02:57 AM
-- Server version: 10.5.16-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u489199370_datdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `calendar_month_tbl`
--

CREATE TABLE `calendar_month_tbl` (
  `id` int(11) NOT NULL,
  `season_id` int(11) NOT NULL,
  `month_number` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `calendar_month_tbl`
--

INSERT INTO `calendar_month_tbl` (`id`, `season_id`, `month_number`) VALUES
(1, 1, '0'),
(2, 1, '1'),
(3, 1, '2'),
(4, 1, '3'),
(5, 1, '4'),
(6, 2, '5'),
(7, 2, '6'),
(8, 2, '7'),
(9, 2, '8'),
(10, 2, '9'),
(11, 2, '10'),
(12, 1, '11');

-- --------------------------------------------------------

--
-- Table structure for table `calendar_product_tbl`
--

CREATE TABLE `calendar_product_tbl` (
  `id` int(11) NOT NULL,
  `product_season` int(11) NOT NULL,
  `product_month` int(11) NOT NULL,
  `product_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_img` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `calendar_product_tbl`
--

INSERT INTO `calendar_product_tbl` (`id`, `product_season`, `product_month`, `product_name`, `product_img`) VALUES
(2, 2, 10, 'Talong', 'ss1.png'),
(3, 2, 9, 'Talong', 'ss1.png'),
(4, 2, 8, 'Talong', 'ss1.png'),
(5, 2, 7, 'Talong', 'ss1.png'),
(6, 2, 6, 'Talong', 'ss1.png'),
(7, 2, 5, 'Talong', 'ss1.png'),
(8, 1, 0, 'Talong', 'ss1.png'),
(9, 1, 1, 'Talong', 'ss1.png'),
(10, 1, 3, 'Talong', 'ss1.png'),
(11, 1, 2, 'Talong', 'ss1.png'),
(12, 1, 4, 'Talong', 'ss1.png'),
(13, 1, 11, 'Talong', 'ss1.png'),
(14, 2, 10, 'Ampalaya', 'ss2.png'),
(15, 2, 9, 'Ampalaya', 'ss2.png'),
(16, 2, 8, 'Ampalaya', 'ss2.png'),
(17, 2, 7, 'Ampalaya', 'ss2.png'),
(18, 2, 6, 'Ampalaya', 'ss2.png'),
(19, 2, 5, 'Ampalaya', 'ss2.png'),
(20, 1, 0, 'Ampalaya', 'ss2.png'),
(21, 1, 1, 'Ampalaya', 'ss2.png'),
(22, 1, 3, 'Ampalaya', 'ss2.png'),
(23, 1, 2, 'Ampalaya', 'ss2.png'),
(24, 1, 4, 'Ampalaya', 'ss2.png'),
(25, 1, 11, 'Ampalaya', 'ss2.png'),
(26, 2, 10, 'Kamote', 'ss3.png'),
(27, 2, 9, 'Kamote', 'ss3.png'),
(28, 2, 8, 'Kamote', 'ss3.png'),
(29, 2, 7, 'Kamote', 'ss3.png'),
(30, 2, 6, 'Kamote', 'ss3.png'),
(32, 1, 0, 'Kamote', 'ss3.png'),
(33, 1, 1, 'Kamote', 'ss3.png'),
(34, 1, 3, 'Kamote', 'ss3.png'),
(35, 1, 2, 'Kamote', 'ss3.png'),
(36, 1, 4, 'Kamote', 'ss3.png'),
(37, 1, 11, 'Kamote', 'ss3.png'),
(44, 1, 0, 'Okra', 'ss4.png'),
(46, 1, 3, 'Okra', 'ss4.png'),
(48, 1, 4, 'Okra', 'ss4.png'),
(50, 2, 10, 'Patola', 'ss5.png'),
(51, 2, 9, 'Patola', 'ss5.png'),
(52, 2, 8, 'Patola', 'ss5.png'),
(55, 2, 5, 'Patola', 'ss5.png'),
(56, 1, 0, 'Patola', 'ss5.png'),
(60, 1, 4, 'Patola', 'ss5.png'),
(61, 1, 11, 'Patola', 'ss5.png'),
(62, 2, 10, 'Sitaw', 'ss6.png'),
(63, 2, 9, 'Sitaw', 'ss6.png'),
(64, 2, 8, 'Sitaw', 'ss6.png'),
(67, 1, 4, 'Sitaw', 'ss6.png'),
(73, 1, 11, 'Sitaw', 'ss6.png'),
(74, 2, 10, 'Kamatis', 'ss7.png'),
(75, 2, 9, 'Kamatis', 'ss7.png'),
(76, 2, 8, 'Kamatis', 'ss7.png'),
(80, 1, 0, 'Kamatis', 'ss7.png'),
(83, 1, 2, 'Kamatis', 'ss7.png'),
(85, 1, 11, 'Kamatis', 'ss7.png'),
(86, 2, 10, 'Munggo', 'ss8.png'),
(87, 2, 9, 'Munggo', 'ss8.png'),
(88, 2, 8, 'Munggo', 'ss8.png'),
(91, 2, 5, 'Munggo', 'ss8.png'),
(92, 1, 0, 'Munggo', 'ss8.png'),
(93, 1, 1, 'Munggo', 'ss8.png'),
(94, 1, 3, 'Munggo', 'ss8.png'),
(96, 1, 4, 'Munggo', 'ss8.png'),
(97, 1, 11, 'Munggo', 'ss8.png'),
(98, 2, 10, 'Upo', 'ss9.png'),
(99, 2, 9, 'Upo', 'ss9.png'),
(100, 2, 8, 'Upo', 'ss9.png'),
(104, 1, 0, 'Upo', 'ss9.png'),
(109, 1, 11, 'Upo', 'ss9.png'),
(115, 2, 5, 'Patani', 'ss10.png'),
(118, 1, 3, 'Patani', 'ss10.png'),
(120, 1, 4, 'Patani', 'ss10.png'),
(127, 2, 5, 'Kalabasa', 'ss11.png'),
(129, 1, 1, 'Kalabasa', 'ss11.png'),
(130, 1, 3, 'Kalabasa', 'ss11.png'),
(132, 1, 4, 'Kalabasa', 'ss11.png'),
(134, 2, 10, 'Sili', 'ss12.png'),
(135, 2, 9, 'Sili', 'ss12.png'),
(136, 2, 8, 'Sili', 'ss12.png'),
(139, 2, 5, 'Sili', 'ss12.png'),
(140, 1, 0, 'Sili', 'ss12.png'),
(142, 1, 3, 'Sili', 'ss12.png'),
(144, 1, 4, 'Sili', 'ss12.png'),
(145, 1, 11, 'Sili', 'ss12.png'),
(158, 2, 10, 'Lettuce', 'ss14.png'),
(159, 2, 9, 'Lettuce', 'ss14.png'),
(160, 2, 8, 'Lettuce', 'ss14.png'),
(163, 2, 5, 'Lettuce', 'ss14.png'),
(164, 1, 0, 'Lettuce', 'ss14.png'),
(165, 1, 1, 'Lettuce', 'ss14.png'),
(166, 1, 3, 'Lettuce', 'ss14.png'),
(167, 1, 2, 'Lettuce', 'ss14.png'),
(168, 1, 4, 'Lettuce', 'ss14.png'),
(169, 1, 11, 'Lettuce', 'ss14.png'),
(170, 2, 10, 'Petchay', 'ss15.png'),
(171, 2, 9, 'Petchay', 'ss15.png'),
(172, 2, 8, 'Petchay', 'ss15.png'),
(175, 2, 5, 'Petchay', 'ss15.png'),
(176, 1, 0, 'Petchay', 'ss15.png'),
(177, 1, 1, 'Petchay', 'ss15.png'),
(178, 1, 3, 'Petchay', 'ss15.png'),
(179, 1, 2, 'Petchay', 'ss15.png'),
(180, 1, 4, 'Petchay', 'ss15.png'),
(181, 1, 11, 'Petchay', 'ss15.png'),
(182, 2, 10, 'Sigarilyas', 'ss16.png'),
(183, 2, 9, 'Sigarilyas', 'ss16.png'),
(184, 2, 8, 'Sigarilyas', 'ss16.png'),
(187, 2, 5, 'Sigarilyas', 'ss16.png'),
(189, 1, 1, 'Sigarilyas', 'ss16.png'),
(190, 1, 3, 'Sigarilyas', 'ss16.png'),
(192, 1, 4, 'Sigarilyas', 'ss16.png'),
(193, 1, 11, 'Sigarilyas', 'ss16.png'),
(194, 2, 5, 'Bataw', 'ss17.png'),
(195, 1, 4, 'Bataw', 'ss17.png'),
(196, 2, 10, 'Sayote', 'ss13.png'),
(197, 2, 9, 'Sayote', 'ss13.png'),
(198, 2, 8, 'Sayote', 'ss13.png'),
(199, 2, 5, 'Sayote', 'ss13.png'),
(200, 1, 0, 'Sayote', 'ss13.png'),
(201, 1, 1, 'Sayote', 'ss13.png'),
(202, 1, 2, 'Sayote', 'ss13.png'),
(203, 1, 4, 'Sayote', 'ss13.png'),
(204, 1, 11, 'Sayote', 'ss13.png');

-- --------------------------------------------------------

--
-- Table structure for table `calendar_season_tbl`
--

CREATE TABLE `calendar_season_tbl` (
  `id` int(11) NOT NULL,
  `season_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `season_img` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `calendar_season_tbl`
--

INSERT INTO `calendar_season_tbl` (`id`, `season_name`, `season_img`) VALUES
(1, 'Dry Season', 'dry.png'),
(2, 'Rainy Season', 'wet.png');

-- --------------------------------------------------------

--
-- Table structure for table `equipment_cat_tbl`
--

CREATE TABLE `equipment_cat_tbl` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_img_icon` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_img_bg` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `equipment_cat_tbl`
--

INSERT INTO `equipment_cat_tbl` (`id`, `cat_name`, `cat_img_icon`, `cat_img_bg`) VALUES
(1, 'Farm Vehicles and Machinery', '', 'eq1.png'),
(2, 'Farm Tools', '', 'eq2.png');

-- --------------------------------------------------------

--
-- Table structure for table `equipment_img_tbl`
--

CREATE TABLE `equipment_img_tbl` (
  `id` int(11) NOT NULL,
  `equipment_id` int(11) NOT NULL,
  `img_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `equipment_img_tbl`
--

INSERT INTO `equipment_img_tbl` (`id`, `equipment_id`, `img_name`) VALUES
(3, 1, 'A358D414.png'),
(4, 2, '66FD949C.png'),
(5, 2, '39FFFFE6.png'),
(6, 3, '2995250C.png'),
(7, 4, 'AB63692C.png'),
(8, 5, '531FB92B.png'),
(9, 6, 'A418BF42.png'),
(10, 7, '466E145A.png'),
(11, 8, '18EB1848.png'),
(12, 9, '9D00EAC1.png'),
(13, 10, 'CA6DA219.png'),
(14, 11, 'D2D79D51.png'),
(15, 12, '19DC0BE0.png'),
(16, 13, '5A908174.png'),
(17, 14, '9E7C335F.png'),
(18, 15, '70F33F36.png'),
(19, 16, 'A8C9110F.png'),
(20, 17, '77F7FFF5.png'),
(21, 18, '35B3FA3F.png'),
(22, 19, '7F168A44.png'),
(23, 20, 'A80B2785.png'),
(24, 21, 'E5299C85.png'),
(25, 22, '8DB3ABE5.png');

-- --------------------------------------------------------

--
-- Table structure for table `equipment_status_tbl`
--

CREATE TABLE `equipment_status_tbl` (
  `id` int(11) NOT NULL,
  `status_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `equipment_status_tbl`
--

INSERT INTO `equipment_status_tbl` (`id`, `status_name`) VALUES
(1, 'For Trade'),
(2, 'Not Available'),
(3, 'For free/can use free');

-- --------------------------------------------------------

--
-- Table structure for table `equipment_tbl`
--

CREATE TABLE `equipment_tbl` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `trading_cat` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_location` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_desc` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_qty` int(11) NOT NULL DEFAULT 0,
  `trading_uom` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `equipment_tbl`
--

INSERT INTO `equipment_tbl` (`id`, `user_id`, `trading_cat`, `trading_status`, `trading_name`, `trading_location`, `trading_desc`, `trading_qty`, `trading_uom`, `trading_price`) VALUES
(9, 13, 'Farm Tools', 'For free/can use free', 'Pala', 'baldez', 'for free ', 1, '1', 0),
(10, 3, 'Farm Vehicles and Machinery', 'For free/can use free', 'Walking Tractor ', 'Sta Monnica, Floridablanca', '10 HP', 5, 'Available', 0),
(11, 3, 'Farm Tools', 'For free/can use free', 'Araro', 'Sta Monica, Floridablanca', 'Magaan', 5, 'Available', 0),
(12, 25, 'Farm Tools', 'For Trade', 'Piko', 'Pampanga', 'Pangbungkal', 10, 'Pcs', 500),
(13, 25, 'Farm Tools', 'For Trade', 'PIKO', 'Pampanga', 'Pangbungkal', 50, 'Pcs', 300),
(17, 22, 'Farm Vehicles and Machinery', 'For Trade', 'Harvester', 'Apalit', 'Full tank', 0, 'Available', 1000),
(18, 20, 'Farm Tools', 'For Trade', 'Chemical Sprayer', 'Apalit, Floridablanca', 'Good Condition', 5, 'Available', 500),
(19, 21, 'Farm Vehicles and Machinery', 'For Trade', 'TRACTOR', 'SOLIB FLORIDABLANCA ', 'DIESEL, EASY TO USE.', 4, 'Quantity', 2500),
(20, 21, 'Farm Tools', 'For Trade', 'KALAYKAY', 'SOLIB FLORIDABLANCA ', 'HEAVY DUTY', -47, 'PIECE', 50),
(21, 20, 'Farm Tools', 'For Trade', 'PALA', 'Fortuna', 'Good condition', 1, 'pcs', 500),
(22, 21, 'Farm Vehicles and Machinery', 'For Trade', 'Mill tractor', 'Fortuna Floridablanca Pampanga ', 'for heavy load', 1, 'Quantity', 1500);

-- --------------------------------------------------------

--
-- Table structure for table `message_tbl`
--

CREATE TABLE `message_tbl` (
  `id` int(11) NOT NULL,
  `msg_date` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `msg_to` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `msg_from` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `msg_body` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `msg_prod_type` int(11) NOT NULL,
  `msg_prod_id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `message_tbl`
--

INSERT INTO `message_tbl` (`id`, `msg_date`, `msg_to`, `msg_from`, `msg_body`, `msg_prod_type`, `msg_prod_id`, `transaction_id`) VALUES
(30, '2022-12-13 23:08:13', '3', '24', 'hello', 0, 0, 55),
(31, '2022-12-13 23:14:44', '3', '24', 'hoy', 0, 0, 56),
(32, '2022-12-13 23:15:32', '24', '3', 'hey', 0, 0, 55),
(33, '2022-12-13 23:18:33', '24', '3', 'dhhehe', 0, 0, 56),
(34, '2022-12-13 23:21:48', '3', '29', 'ui', 0, 0, 57),
(35, '2022-12-13 23:22:12', '29', '3', 'ano ba yon', 0, 0, 57),
(36, '2022-12-13 23:55:48', '3', '24', 'peram', 0, 0, 58),
(37, '2022-12-14 01:07:58', '25', '26', 'pabili', 0, 0, 63),
(38, '2022-12-14 01:08:26', '26', '25', '20', 0, 0, 63),
(39, '2022-12-14 22:48:46', '21', '27', 'hello', 0, 0, 66),
(40, '2022-12-14 23:02:40', '21', '20', 'pabili', 0, 0, 67),
(41, '2022-12-14 23:03:16', '20', '21', 'ilan ?', 0, 0, 67),
(42, '2022-12-15 12:10:32', '21', '20', 'hi', 0, 0, 67),
(43, '2022-12-15 12:12:36', '21', '20', 'hi po', 0, 0, 69),
(44, '2022-12-16 13:08:48', '21', '20', 'Hi', 0, 0, 71),
(45, '2022-12-16 13:11:12', '20', '21', 'get ako 3kilos', 0, 0, 72),
(46, '2022-12-16 13:16:43', '20', '21', '2 pcs', 0, 0, 74),
(47, '2022-12-16 13:22:20', '21', '20', 'hi', 0, 0, 77),
(48, '2022-12-16 13:28:47', '20', '21', 'hi 5 kilos', 0, 0, 79),
(49, '2022-12-17 10:35:20', '20', '21', 'hi', 0, 0, 80),
(50, '2022-12-17 10:52:43', '20', '21', '2 pcs', 0, 0, 80),
(51, '2022-12-17 10:54:47', '21', '20', 'hi', 0, 0, 82),
(52, '2022-12-17 10:56:24', '21', '20', 'pabili', 0, 0, 71),
(53, '2022-12-19 05:02:09', '20', '21', 'hi', 0, 0, 83),
(54, '2022-12-19 05:04:03', '20', '21', 'hi', 0, 0, 84),
(55, '2022-12-19 10:30:26', '21', '20', 'Hi', 0, 0, 85),
(56, '2022-12-19 10:30:48', '20', '21', 'ilang kilos ,?', 0, 0, 85),
(57, '2022-12-19 10:30:54', '21', '20', 'pwedi ba 5 killos', 0, 0, 85),
(58, '2022-12-19 10:33:37', '21', '20', 'swap sa limang kilo kalabasa', 0, 0, 85),
(59, '2022-12-19 10:36:05', '20', '21', 'Pwede bang i swap ang papaya sa ditaw', 0, 0, 86),
(60, '2022-12-19 10:42:50', '20', '21', 'pweding mag rent ng 2 units', 0, 0, 89),
(61, '2022-12-19 10:44:33', '21', '20', 'okay', 0, 0, 89),
(62, '2022-12-19 10:48:20', '21', '20', 'Pwedi k', 0, 0, 91),
(63, '2022-12-19 10:51:00', '21', '20', 'pwedi mag rent', 0, 0, 92),
(64, '2022-12-19 11:22:29', '20', '21', 'Can i tequest 10 kilos of Jack Fruit', 0, 0, 101),
(65, '2022-12-19 11:25:47', '20', '21', 'Can I swap 5 Kilos of Sitaw', 0, 0, 101),
(66, '2022-12-19 11:25:55', '21', '20', 'sure', 0, 0, 101),
(67, '2022-12-19 11:28:48', '21', '20', 'hi', 0, 0, 102),
(68, '2022-12-31 17:59:51', '24', '29', 'bile', 0, 0, 113),
(69, '2023-01-01 21:12:19', '20', '21', 'Lon', 0, 0, 102),
(70, '2023-01-01 21:12:29', '21', '20', 'hi', 0, 0, 102),
(71, '2023-01-01 21:12:54', '20', '21', 'pare', 0, 0, 102),
(72, '2023-01-01 21:13:05', '21', '20', 'tol', 0, 0, 102),
(73, '2023-01-01 21:29:30', '21', '20', 'hi', 0, 0, 152),
(74, '2023-01-04 22:13:39', '29', '24', 'ei', 0, 0, 113),
(75, '2023-01-06 08:59:40', '24', '29', 'hey', 0, 0, 154),
(76, '2023-01-08 13:18:35', '21', '20', 'hi', 0, 0, 159),
(77, '2023-01-08 13:19:20', '20', '21', 'pre', 0, 0, 159),
(78, '2023-01-08 13:22:01', '21', '20', 'hi', 0, 0, 162),
(79, '2023-01-09 10:43:59', '29', '24', 'ui', 0, 0, 154);

-- --------------------------------------------------------

--
-- Table structure for table `pesticide_tbl`
--

CREATE TABLE `pesticide_tbl` (
  `id` int(11) NOT NULL,
  `pesticide_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pesticide_desc` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pesticide_img` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pesticide_tbl`
--

INSERT INTO `pesticide_tbl` (`id`, `pesticide_name`, `pesticide_desc`, `pesticide_img`) VALUES
(1, 'Molluscicides', 'Ito ay ginagamit para sa pagkontrol ng mga kuhol sa parehong transplanted at direct-seeded rice. Ang pagkamatay ng mga kuhol ay nangyayari dahil sa kawalan ng oxygen sa tubig pagkatapos ng aplikasyon nito.', 'test3.png'),
(2, 'Banguard 80 WG', 'Ito ay isang broad spectrum fungicide na may contact at preventive action. Isang produktong multisite ang pagkilos at tinitiyak na walang resistance ang anumang target na sakit kahit pa sa pangmatagalan paggamit nito.  Ito rin ay ay nagsisilbing repellant laban sa mga mapanirang ibon at rodent na sumasalakay sa palayan sa seedbed at early stage nito.', 'test4.png'),
(3, 'Elicor 5 SC', 'Ang pangunahing aksyon ng Elicor ay ang pagpuksa sa mga chewing pest sa pamamagitan ng ingestion. Ito ay isang pestisidyong angkop sa mga insektong nabibilang sa order na Lepidoptera. Hinihigpitan nito ang normal muscle contraction ng target insect na nagreresulta sa pagkamatay nito.', 'pt1.png'),
(4, 'Resist 325 SC', 'Isang broad spectrum fungicide para sa iba’t-ibang tanim katulad na lang ng mais, mangga, sibuyas, patatas, at palay.  Ito ay nabibilang sa fungicides na may latest formula mixture na may systemic, translaminar, at contact properties. Ang active ingredients nitong difenoconazole at azoxystrobin ay nagba-block ng spore germination sa early stages ng fungal development.', 'pt2.png'),
(5, 'Aliah', 'Isang pestisidyo na may contact at systemic na katangian. Ito ay nakakatulong sa mas mabisang pagpuksa at pagkontrol ng mga hoppers at chewing at sucking pest sa palayan. Ito rin ay isang broad spectrum na insecticide na may low-dose rate at ovi-larvicidal action (hindi na nag mamature ang mga itlog nito na ini sprayhan ng pestisidyo).', 'pt3.png');

-- --------------------------------------------------------

--
-- Table structure for table `pest_pesticide_tbl`
--

CREATE TABLE `pest_pesticide_tbl` (
  `id` int(11) NOT NULL,
  `pest_id` int(11) NOT NULL,
  `pesticide_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pest_pesticide_tbl`
--

INSERT INTO `pest_pesticide_tbl` (`id`, `pest_id`, `pesticide_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 1),
(8, 8, 1),
(9, 9, 1),
(10, 10, 1),
(11, 11, 1),
(12, 12, 1),
(13, 13, 1),
(14, 14, 1),
(15, 15, 1),
(16, 1, 2),
(17, 2, 2),
(18, 3, 2),
(19, 4, 2),
(20, 5, 2),
(21, 6, 2),
(22, 7, 2),
(23, 8, 2),
(24, 9, 2),
(25, 10, 2),
(26, 11, 2),
(27, 12, 2),
(28, 13, 2),
(29, 14, 2),
(30, 15, 2),
(31, 1, 3),
(32, 2, 3),
(33, 3, 3),
(34, 4, 3),
(35, 5, 3),
(36, 6, 3),
(37, 7, 3),
(38, 8, 3),
(39, 9, 3),
(40, 10, 3),
(41, 11, 3),
(42, 12, 3),
(43, 13, 3),
(44, 14, 3),
(45, 15, 3),
(46, 1, 4),
(47, 2, 4),
(48, 3, 4),
(49, 4, 4),
(50, 5, 4),
(51, 6, 4),
(52, 7, 4),
(53, 8, 4),
(54, 9, 4),
(55, 10, 4),
(56, 11, 4),
(57, 12, 4),
(58, 13, 4),
(59, 14, 4),
(60, 15, 4),
(61, 1, 5),
(62, 2, 5),
(63, 3, 5),
(64, 4, 5),
(65, 5, 5),
(66, 6, 5),
(67, 7, 5),
(68, 8, 5),
(69, 9, 5),
(70, 10, 5),
(71, 11, 5),
(72, 12, 5),
(73, 13, 5),
(74, 14, 5),
(75, 15, 5);

-- --------------------------------------------------------

--
-- Table structure for table `pest_tbl`
--

CREATE TABLE `pest_tbl` (
  `id` int(11) NOT NULL,
  `pest_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pest_desc` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pest_img` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pest_ref` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pest_tbl`
--

INSERT INTO `pest_tbl` (`id`, `pest_name`, `pest_desc`, `pest_img`, `pest_ref`) VALUES
(1, 'Whitefly', 'Kahawig ng mga puting langaw na may mga pakpak. Ang mga insekto ay nagpapakain sa katas ng mga panloob na halaman, at kung bigla silang nabalisa, tumataas sila sa hangin na may isang buong ulap. Ang mga Whiteflies ay naglalagay ng maberde na larvae na sumasakop sa underside ng mga dahon.', 'test2.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\n\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\n\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\n\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\n'),
(2, 'Spider Mite', 'Arachnid arthropod peste na kumakain sa cellular sap ng mga panloob na halaman. Kadalasan, ang isang mahina na bulaklak na lumalaki sa tuyong lupa ay apektado. Bilang karagdagan sa web, ang tik ay nag-iiwan ng mga madilaw na spot sa mga lugar ng prokus.  ', 'pp1.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(3, 'Thrips ', 'Maliit na mga insekto na may diameter na hanggang sa 2 mm, ay madalas na matatagpuan sa mga malalaking numero. Ang mga ito ay itim, puti o may guhit na kulay, gayunpaman, dahil sa laki, halos imposible na makita ang fly.Ang mga thrips ay naglalagay ng mga itlog sa tisyu ng dahon, na kung saan pagkatapos ay sakop ng mga stroke - ang mga galaw ng larvae.', 'pp2.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(4, 'Borer worm', 'Karamihan sa mga borers ay ang larvae (immature stages) ng ilang mga moth at beetle. Sila ay tunnel at kumakain sa ilalim ng balat sa buhay na kahoy.', 'pp4.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(5, 'Golden Apple Snail', 'Ito ay naging sanhi ng peste sa palayan. Naobserbahan na ito ay mabilis dumami at kumakalat sa palayan. .Ang isang kuhol ay maaaring kumain ng ng 7 hanggang 24 na mga punla sa isang araw at maaaring ubusin ang isang litsugas sa isang gabi.', 'pp5.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(6, 'Rice Water Weevil', 'Ang mga adult weevil ay kumakain ng mga dahon ng palay, at nangingitlog sa loob ng bigkis ng dahon sa ibaba ng antas ng tubig. Kapag napisa ang larvae, bumababa sila sa mga ugat at sinisipsip ang katas ng ugat. Sa oras na ito nangyayari ang karamihan sa pinsala sa halaman. Ang pinsala sa larval ay binabawasan ang bilang ng mga bagong dahon na ginawa ng halaman.', 'pp6.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(7, 'Rice Neck Blast', 'Ang sakit na ito ay sanhi ng isang fungus na pinangalanang Pyricularia grisea, na nagpapalipas ng taglamig sa mga buto ng palay at nahawaang rice stubble.', 'pp7.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(8, 'Rice False Smut', 'Isang malubhang sakit sa butil sa produksyon ng bigas sa buong mundo. Ang sakit ay nailalarawan sa pamamagitan ng pagbabagong-anyo ng mga indibidwal na rice florets sa false smut balls, na sanhi ng fungal pathogen na Ustilaginoidea virens.', 'pp8.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(9, 'Magnaporthe grisea', 'Maaaring makaimpeksyon at makagawa ng mga sugat sa karamihan ng tubo.', 'pp9.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(10, 'Tungro Disease of Rice', 'Rice tungro sakit ay sanhi ng kumbinasyon ng dalawang virus, na kung saan ay transmitted sa pamamagitan ng dahon. Ito ay nagiging sanhi ng dahon discoloration, stunted paglago, nabawasan ang mga numero ng tiller at sterile o bahagyang napuno ng mga butil. Tungro impeksiyon na nilinang ang bigas, ang ilang mga ligaw na bigas kamag-anak at iba pang mga damo na karaniwang matatagpuan sa bigas paddies.', 'pp10.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(11, 'Cabage Looper', 'Uod na ito ay kumakain ng mga dahon ng repolyo at mgakaugnay na pananim at sa litsugas, spinach, beets, peas, at tomato.', 'pp11.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(12, 'Sowbug', 'Ito ay tinatawag din na pill bugs, na may malambot at mabilog nakatawan at abuhin ang kulay.Pinupuksa nito ang ugat at murang bahagi ng sanga.', 'pp12.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(13, 'Leaf Hoppers', 'Maliliit at mabibilis sumipsip ng katas ng halaman, mabilislumukso at lumipad kapag nabulabog, ang kulay ay mapusyaw na luntian omaitim.!agkakaroon ng mantsa ang dahon hanggang sa manilaw at matuyo.', 'pp13.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(14, 'Catterpillar', 'May iba’t-ibang kulay, laki at hugis.Kinakain ng mga uod angdahon ng halaman.', 'pp14.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n'),
(15, 'Aphids', 'Ito ay maliit ang katawan, hugis bilog at iba’t-iba ang kulay. Sinisipsip nitoang katas ng halaman na nagiging sanhi ng paghina, pangungulot at napipilipit nadahon.', 'pp15.png', 'Information Sheet: Malathion and Mosquito Control (ny.gov)\r\n\r\n5 sa Karaniwang Peste at mga Sakit na Tumatama sa Palayan - Agway Chemicals Corporation\r\n\r\nMga peste ng mga panloob na halaman sa mga dahon at lupa (techexpertolux.com)\r\n\r\nhttps://www.scribd.com/document/318549617/Uri-Ng-Kulisap-at-Peste\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `support_cat_tbl`
--

CREATE TABLE `support_cat_tbl` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_img_icon` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_img_bg` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `support_cat_tbl`
--

INSERT INTO `support_cat_tbl` (`id`, `cat_name`, `cat_img_icon`, `cat_img_bg`) VALUES
(3, 'Farm Driver', '', 'sp1.png'),
(4, 'Harvester', '', 'sp1.png'),
(5, 'Pesticide Sprayer', '', 'sp1.png'),
(6, 'Agricultural Machinery Mechanics', '', 'sp1.png');

-- --------------------------------------------------------

--
-- Table structure for table `support_img_tbl`
--

CREATE TABLE `support_img_tbl` (
  `id` int(11) NOT NULL,
  `support_id` int(11) NOT NULL,
  `img_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `support_img_tbl`
--

INSERT INTO `support_img_tbl` (`id`, `support_id`, `img_name`) VALUES
(6, 8, '9448AA3B.png'),
(7, 9, '3632FAC7.png'),
(8, 10, '0046CC13.png'),
(9, 11, '7A66ED79.png'),
(10, 12, '58757D78.png'),
(11, 13, '52C61402.png'),
(12, 14, '1419B6C2.png'),
(13, 15, 'A935E539.png'),
(14, 16, 'A7376951.png'),
(15, 17, '350EFAEA.png'),
(16, 18, '9EF8A8C4.png'),
(17, 19, 'CF20A879.png'),
(18, 20, 'BD02E0A5.png');

-- --------------------------------------------------------

--
-- Table structure for table `support_status_tbl`
--

CREATE TABLE `support_status_tbl` (
  `id` int(11) NOT NULL,
  `status_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `support_tbl`
--

CREATE TABLE `support_tbl` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `trading_cat` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_location` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_desc` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `support_tbl`
--

INSERT INTO `support_tbl` (`id`, `user_id`, `trading_cat`, `trading_status`, `trading_name`, `trading_location`, `trading_desc`) VALUES
(10, 3, 'Labor Support', '', 'Charlon Dizon', 'Fortuna, Floridablanca', 'DevAg'),
(15, 21, 'Labor Support', '', 'Ferdinand Santos', 'Apalit', 'Need urgent help'),
(16, 21, 'Labor Support', '', 'FERDINAND SANTOS ', 'PUROK 1 FLORIDABLANCA PAMPANGA ', 'urgent need in 15 mins'),
(17, 21, 'Labor Support', '', 'Urgent need of help', 'Purok 1 Fortuna Floridablanca pampanga ', 'I need help in 15 minutes\n'),
(18, 21, 'Labor Support', '', 'IN NEED OF 2 DRIVER', 'PUROK 1 FLORIDABLANCA PAMPANGA ', 'MILL DRIVER\n500 salary for 1 day\ncan work precise'),
(19, 20, 'Farm Driver', '', 'Dizon, Charlon L.', 'Anon, floridablanca', 'pro driver'),
(20, 21, 'Pesticide Sprayer', '', 'FERDY CANLAS', 'PUROK 1 FORTUNA FLORIDABLANCA PAMPANGA', 'Hardworker, Can finish job in a day\n');

-- --------------------------------------------------------

--
-- Table structure for table `top_month_tbl`
--

CREATE TABLE `top_month_tbl` (
  `id` int(11) NOT NULL,
  `season_id` int(11) NOT NULL,
  `month_number` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `top_month_tbl`
--

INSERT INTO `top_month_tbl` (`id`, `season_id`, `month_number`) VALUES
(1, 1, '0'),
(2, 1, '1'),
(3, 1, '2'),
(4, 1, '3'),
(5, 1, '4'),
(6, 2, '5'),
(7, 2, '6'),
(8, 2, '7'),
(9, 2, '8'),
(10, 2, '9'),
(11, 2, '10'),
(12, 1, '11');

-- --------------------------------------------------------

--
-- Table structure for table `trading_cat_tbl`
--

CREATE TABLE `trading_cat_tbl` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_img_icon` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_img_bg` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trading_cat_tbl`
--

INSERT INTO `trading_cat_tbl` (`id`, `cat_name`, `cat_img_icon`, `cat_img_bg`) VALUES
(1, 'Seeds', '', 'pic5.png'),
(2, 'Vegetables', '', 'pic2.png'),
(3, 'Fruits', '', 'pic3.png');

-- --------------------------------------------------------

--
-- Table structure for table `trading_img_tbl`
--

CREATE TABLE `trading_img_tbl` (
  `id` int(11) NOT NULL,
  `trading_id` int(11) NOT NULL,
  `img_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trading_img_tbl`
--

INSERT INTO `trading_img_tbl` (`id`, `trading_id`, `img_name`) VALUES
(1, 2, '9F816617.png'),
(2, 2, '537F336F.png'),
(3, 3, '28116CB2.png'),
(4, 4, '24FCC008.png'),
(5, 5, 'EE40A05C.png'),
(6, 6, '4755A0A0.png'),
(7, 7, '174C9828.png'),
(9, 0, '70E578B2.png'),
(10, 9, 'C6D45B05.png'),
(11, 10, '0B2D1EA3.png'),
(12, 11, 'E769E449.png'),
(13, 12, 'A76AAC1E.png'),
(14, 13, '1D1CB572.png'),
(15, 14, 'F024BE78.png'),
(16, 15, '4C2B74F3.png'),
(17, 16, '356AFAA2.png'),
(18, 17, '5DE1F61B.png'),
(19, 18, 'DECDB95B.png'),
(20, 19, '420F46BD.png'),
(21, 20, '3C4E956A.png'),
(22, 21, '338C1BCE.png'),
(23, 22, 'C885E89F.png'),
(24, 23, 'F7BA4A2E.png'),
(25, 24, '2AA81EC5.png'),
(26, 25, '30AC06CD.png'),
(27, 26, '8C908401.png'),
(28, 27, '76A0AAA2.png'),
(29, 28, '7FFF1B55.png'),
(30, 29, 'A7977B3D.png'),
(31, 30, 'D3CD63CF.png'),
(32, 31, 'D87737D2.png');

-- --------------------------------------------------------

--
-- Table structure for table `trading_status_tbl`
--

CREATE TABLE `trading_status_tbl` (
  `id` int(11) NOT NULL,
  `status_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trading_status_tbl`
--

INSERT INTO `trading_status_tbl` (`id`, `status_name`) VALUES
(1, 'For Trade'),
(2, 'Not Available');

-- --------------------------------------------------------

--
-- Table structure for table `trading_tbl`
--

CREATE TABLE `trading_tbl` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `trading_cat` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_location` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_desc` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trading_qty` int(11) NOT NULL DEFAULT 0,
  `trading_uom` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trading_tbl`
--

INSERT INTO `trading_tbl` (`id`, `user_id`, `trading_cat`, `trading_status`, `trading_name`, `trading_location`, `trading_desc`, `trading_qty`, `trading_uom`) VALUES
(6, 3, 'Vegetables', 'For Trade', 'Ampalaya', 'Fortuna, Floridablanca', 'malaki', 0, ''),
(7, 8, 'Seeds', 'For Trade', 'Kalabasa', 'Purok 1 Centro Fortuna Floridablanca Pampanga', '20 Pcs', 0, ''),
(10, 13, 'Vegetables', 'For Trade', 'Okra', 'Floridablanca, Pampanga', 'Fresh\n', -11, ''),
(13, 12, 'Fruits', 'For Trade', 'Manga', 'Anon, Floridablanca', 'Malaki', 20, 'Kg'),
(14, 3, 'Seeds', 'For Trade', 'Upo Seeds', 'Apalit, Floridablanca', 'Madaling itanim, mabilis tumubo', 155, 'Packs'),
(15, 3, 'Vegetables', 'For Trade', 'Talong', 'Sta Monica, Floridablanca', 'Malalaki at mahahaba', 17, 'Kilo'),
(16, 3, 'Fruits', 'For Trade', 'Saging', 'Sta Monica, Floridablanca', 'Mahahaba, Masarap', 90, 'Kilo'),
(18, 3, 'Seeds', 'For Trade', 'Kamatis', 'Anon, Floridablanca', 'Mabilis tumubo', 70, 'Packs'),
(21, 20, 'Seeds', 'For Trade', 'EGGPLANT', 'POBLACION', 'Madaling itanim', 50, 'Packs'),
(22, 20, 'Fruits', 'For Trade', 'LANGKA', 'POBLACION', 'SWEET', 20, 'KILO'),
(24, 25, 'Fruits', 'For Trade', 'Indian Mango', 'Pampanga', 'Matamis', 80, 'Pack'),
(25, 22, 'Seeds', 'For Trade', 'Mungo', 'Apalit, Floridablanca, Pampanga', 'Malaman', 10, 'Kilos'),
(26, 20, 'Fruits', 'For Trade', 'Papaya', 'Apalit, Floridablanca', 'Fresh', 7, 'Kilo'),
(27, 21, 'Fruits', 'For Trade', 'UBAS', 'FORTUNA FLORIDABLANCA PAMPANGA', 'SWEET', 388, 'KILO'),
(28, 20, 'Vegetables', 'For Trade', 'PAPAYA', 'Anon', 'Super fresh', 17, 'Kilo'),
(29, 21, 'Vegetables', 'For Trade', 'SITAW', 'Fortuna Floridablanca pampanga ', 'Fresh', 40, 'Kilo'),
(30, 24, 'Fruits', 'For Trade', 'heehehe', 'heheehe', 'ebhehe', 5645, 'hr'),
(31, 21, 'Vegetables', 'For Trade', 'Letuce', 'Fortuna Floridablanca pampanga ', 'Good for burgers', 90, 'Kilo');

-- --------------------------------------------------------

--
-- Table structure for table `transactionreportimg_tbl`
--

CREATE TABLE `transactionreportimg_tbl` (
  `id` int(11) NOT NULL,
  `trans_report_id` int(11) NOT NULL,
  `trans_report_img` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactionreportimg_tbl`
--

INSERT INTO `transactionreportimg_tbl` (`id`, `trans_report_id`, `trans_report_img`) VALUES
(3, 113, '174C5656.png'),
(4, 113, 'FB1432EF.png');

-- --------------------------------------------------------

--
-- Table structure for table `transactionreport_tbl`
--

CREATE TABLE `transactionreport_tbl` (
  `id` int(11) NOT NULL,
  `trans_type` int(11) NOT NULL,
  `trans_item` int(11) NOT NULL,
  `trans_seller` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trans_buyer` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trans_status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending' COMMENT 'pending\r\ndeliver (seller confirm)\r\ncomplete (buyer confirm)',
  `trans_return` int(11) NOT NULL DEFAULT 0,
  `trans_date` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trans_amt` float NOT NULL,
  `trans_qty` int(11) NOT NULL,
  `trans_report_msg` varchar(5000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trans_report_status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactionreport_tbl`
--

INSERT INTO `transactionreport_tbl` (`id`, `trans_type`, `trans_item`, `trans_seller`, `trans_buyer`, `trans_status`, `trans_return`, `trans_date`, `trans_amt`, `trans_qty`, `trans_report_msg`, `trans_report_status`) VALUES
(113, 0, 30, '24', '29', 'deliver', 0, '2022-12-31', 0, 50, 'hehehehe', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_tbl`
--

CREATE TABLE `transaction_tbl` (
  `id` int(11) NOT NULL,
  `trans_type` int(11) NOT NULL,
  `trans_item` int(11) NOT NULL,
  `trans_seller` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trans_buyer` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trans_status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending' COMMENT 'pending\r\ndeliver (seller confirm)\r\ncomplete (buyer confirm)',
  `trans_return` int(11) NOT NULL DEFAULT 0,
  `trans_date` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trans_lastupdate` int(11) NOT NULL DEFAULT 0,
  `trans_amt` float NOT NULL,
  `trans_qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transaction_tbl`
--

INSERT INTO `transaction_tbl` (`id`, `trans_type`, `trans_item`, `trans_seller`, `trans_buyer`, `trans_status`, `trans_return`, `trans_date`, `trans_lastupdate`, `trans_amt`, `trans_qty`) VALUES
(51, 0, 15, '3', '24', 'pending', 0, '2022-12-13', 0, 0, 0),
(52, 0, 15, '3', '24', 'pending', 0, '2022-12-13', 0, 0, 0),
(53, 0, 15, '3', '24', 'pending', 0, '2022-12-13', 0, 0, 0),
(54, 0, 15, '3', '24', 'pending', 0, '2022-12-13', 0, 0, 0),
(55, 0, 15, '3', '24', 'complete', 0, '2022-12-13', 0, 0, 3),
(56, 0, 15, '3', '24', 'pending', 0, '2022-12-13', 0, 0, 0),
(57, 0, 15, '3', '29', 'pending', 0, '2022-12-13', 0, 0, 0),
(59, 2, 10, '3', '25', 'pending', 0, '2022-12-14', 0, 0, 0),
(60, 2, 15, '21', '25', 'pending', 0, '2022-12-14', 0, 0, 0),
(62, 0, 25, '22', '25', 'pending', 0, '2022-12-14', 0, 0, 0),
(63, 0, 24, '25', '26', 'complete', 0, '2022-12-14', 0, 0, 20),
(64, 0, 7, '8', '3', 'pending', 0, '2022-12-14', 0, 0, 0),
(65, 1, 19, '21', '22', 'pending', 0, '2022-12-14', 0, 0, 0),
(66, 0, 27, '21', '27', 'deliver', 0, '2022-12-14', 0, 0, 10),
(67, 0, 27, '21', '20', 'complete', 0, '2022-12-14', 0, 0, 10),
(69, 0, 27, '21', '20', 'complete', 0, '2022-12-15', 0, 0, 10),
(70, 1, 20, '21', '20', 'pending', 0, '2022-12-16', 0, 0, 0),
(71, 0, 27, '21', '20', 'deliver', 0, '2022-12-16', 0, 0, 2),
(72, 0, 28, '20', '21', 'complete', 0, '2022-12-16', 0, 0, 3),
(73, 1, 21, '20', '21', 'pending', 0, '2022-12-16', 0, 0, 0),
(74, 1, 21, '20', '21', 'deliver', 0, '2022-12-16', 0, 0, 2),
(75, 2, 16, '21', '20', 'pending', 0, '2022-12-16', 0, 0, 0),
(76, 2, 16, '21', '20', 'pending', 0, '2022-12-16', 0, 0, 0),
(77, 2, 16, '21', '20', 'pending', 0, '2022-12-16', 0, 0, 0),
(78, 2, 16, '21', '20', 'pending', 0, '2022-12-16', 0, 0, 0),
(79, 0, 28, '20', '21', 'deliver', 0, '2022-12-16', 0, 0, 5),
(80, 1, 18, '20', '21', 'pending', 0, '2022-12-17', 0, 0, 0),
(81, 1, 20, '21', '20', 'pending', 0, '2022-12-17', 0, 0, 0),
(82, 1, 20, '21', '20', 'deliver', 0, '2022-12-17', 0, 0, 2),
(83, 0, 26, '20', '21', 'deliver', 0, '2022-12-19', 0, 0, 1),
(84, 1, 21, '20', '21', 'deliver', 0, '2022-12-19', 0, 0, 2),
(85, 0, 29, '21', '20', 'complete', 0, '2022-12-19', 0, 0, 5),
(86, 0, 26, '20', '21', 'deliver', 0, '2022-12-19', 0, 0, 2),
(87, 1, 17, '22', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(88, 1, 17, '22', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(89, 1, 18, '20', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(90, 1, 20, '21', '20', 'pending', 0, '2022-12-19', 0, 0, 0),
(91, 1, 22, '21', '20', 'pending', 0, '2022-12-19', 0, 0, 0),
(92, 1, 22, '21', '20', 'complete', 1, '2022-12-19', 0, 0, 1),
(94, 0, 18, '3', '20', 'pending', 0, '2022-12-19', 0, 0, 0),
(95, 0, 16, '3', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(96, 0, 16, '3', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(97, 0, 16, '3', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(98, 0, 16, '3', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(99, 0, 16, '3', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(100, 0, 22, '20', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(101, 0, 22, '20', '21', 'complete', 0, '2022-12-19', 0, 0, 10),
(102, 0, 29, '21', '20', 'complete', 0, '2022-12-19', 0, 0, 5),
(103, 2, 10, '3', '21', 'pending', 0, '2022-12-19', 0, 0, 0),
(105, 0, 25, '22', '20', 'pending', 0, '2022-12-20', 0, 0, 0),
(106, 0, 18, '3', '20', 'pending', 0, '2022-12-20', 0, 0, 0),
(107, 0, 16, '3', '20', 'pending', 0, '2022-12-20', 0, 0, 0),
(108, 1, 19, '21', '20', 'pending', 0, '2022-12-20', 0, 0, 0),
(109, 0, 7, '8', '3', 'pending', 0, '2022-12-20', 0, 0, 0),
(110, 0, 7, '8', '3', 'pending', 0, '2022-12-20', 0, 0, 0),
(111, 0, 7, '8', '3', 'pending', 0, '2022-12-20', 0, 0, 0),
(112, 0, 7, '8', '21', 'pending', 0, '2022-12-24', 0, 0, 0),
(113, 0, 30, '24', '29', 'deliver', 0, '2022-12-31', 0, 0, 50),
(114, 0, 7, '8', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(115, 0, 14, '3', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(116, 0, 7, '8', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(117, 0, 14, '3', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(118, 0, 7, '8', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(119, 0, 7, '8', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(120, 0, 7, '8', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(121, 0, 7, '8', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(122, 0, 7, '8', '24', 'pending', 0, '2023-01-01', 0, 0, 0),
(123, 0, 6, '3', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(124, 0, 6, '3', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(125, 0, 10, '13', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(126, 0, 10, '13', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(127, 0, 15, '3', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(128, 0, 25, '22', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(129, 1, 19, '21', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(130, 1, 22, '21', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(131, 1, 17, '22', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(132, 1, 22, '21', '25', 'pending', 0, '2023-01-01', 0, 0, 0),
(133, 0, 29, '21', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(134, 0, 29, '21', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(135, 0, 15, '3', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(136, 0, 7, '8', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(137, 0, 14, '3', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(138, 0, 18, '3', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(139, 0, 14, '3', '21', 'pending', 0, '2023-01-01', 0, 0, 0),
(140, 0, 18, '3', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(141, 0, 7, '8', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(142, 0, 25, '22', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(143, 0, 7, '8', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(144, 0, 16, '3', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(145, 0, 16, '3', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(146, 0, 14, '3', '21', 'pending', 0, '2023-01-01', 0, 0, 0),
(147, 0, 24, '25', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(148, 0, 6, '3', '21', 'pending', 0, '2023-01-01', 0, 0, 0),
(149, 1, 11, '3', '21', 'pending', 0, '2023-01-01', 0, 0, 0),
(150, 1, 19, '21', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(151, 1, 22, '21', '20', 'pending', 0, '2023-01-01', 0, 0, 0),
(152, 1, 19, '21', '20', 'complete', 1, '2023-01-01', 0, 0, 1),
(153, 2, 19, '20', '24', 'pending', 0, '2023-01-04', 0, 0, 0),
(154, 0, 30, '24', '29', 'deliver', 0, '2023-01-06', 1673232239, 0, 0),
(155, 2, 20, '21', '20', 'pending', 0, '2023-01-08', 0, 0, 0),
(156, 0, 21, '20', '33', 'pending', 0, '2023-01-08', 0, 0, 0),
(157, 0, 27, '21', '20', 'pending', 0, '2023-01-08', 0, 0, 0),
(158, 0, 30, '24', '20', 'pending', 0, '2023-01-08', 0, 0, 0),
(159, 0, 31, '21', '20', 'pending', 0, '2023-01-08', 0, 0, 0),
(160, 1, 21, '20', '21', 'pending', 0, '2023-01-08', 0, 0, 0),
(161, 1, 22, '21', '20', 'pending', 0, '2023-01-08', 0, 0, 0),
(162, 1, 19, '21', '20', 'pending', 0, '2023-01-08', 0, 0, 0),
(163, 1, 9, '13', '21', 'pending', 0, '2023-01-08', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `id` int(11) NOT NULL,
  `user_date` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_admin` int(11) NOT NULL DEFAULT 0,
  `user_active` int(11) NOT NULL DEFAULT 1,
  `user_uname` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_pword` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_fname` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_cname` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ss',
  `user_gender` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'male',
  `user_contact` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_address` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_pic` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'none.png',
  `user_verified` int(11) NOT NULL DEFAULT 0,
  `user_verifiedcode` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`id`, `user_date`, `user_admin`, `user_active`, `user_uname`, `user_pword`, `user_fname`, `user_cname`, `user_gender`, `user_contact`, `user_address`, `user_pic`, `user_verified`, `user_verifiedcode`) VALUES
(1, '2022-10-14 17:04:56', 0, 1, 'martinmexico4@gmail.com', 'orenzo45', 'Mart Angelo Orenzog', 't', 'male', '09614335484', 'maligaya', '7F3AAA6E.png', 1, ''),
(3, '2022-10-16 15:15:02', 0, 1, 'cs.charlonlopezdizon@gmail.com', 'DAT1', 'Christian Singian', 't', 'male', '09757654321', 'Panipuan, City of San Fernando, Pampanga', 'none.png', 1, ''),
(5, '2022-10-19 17:48:10', 0, 0, 'cs.markdaniel25.lopez@gmail.com', 'progress', 'MAC LOPEZ', 't', 'male', '09052802639', 'MARS ', 'none.png', 1, ''),
(6, '2022-10-19 21:34:08', 0, 1, 'mart.orenzo0912@gmail.com', 'orenzo45', 'xrus', 't', 'male', '99999', 'yyyyy', 'none.png', 0, ''),
(7, '2022-10-20 09:42:37', 0, 1, 'cs.gabrielaquino@gmail.com', 'progress1', 'Gabriel Aquino', 't', 'male', '09052802637', 'purok 2 Fortuna Floridablanca Pampanga', 'none.png', 0, ''),
(8, '2022-10-20 13:05:52', 0, 1, 'markdaniel25_lopez@gmail.com', 'progress1', 'Mark Danie Lopez', 't', 'male', '09052802632', 'Purok 1 Centro Fortuna Floridablanca Pampanga', 'none.png', 1, ''),
(9, '2022-12-01 09:56:45', 0, 1, 'charlondizon01@gmail.com', 'DAT2', 'Juan Dela Cruz', 't', 'male', '09998887777', 'San Ramon, Floridablanca, Pampanga', 'none.png', 0, ''),
(10, '2022-12-01 14:04:08', 0, 1, 'cs.ferdie.2@gmail.com', 'progress1', 'Ferdinand Santos', 't', 'male', '09563215496', 'Sta Ana Pampanga', 'none.png', 0, ''),
(12, '2022-12-01 15:11:56', 0, 0, 'DevAgGab@gmail.com', 'GAB1', 'Gab Aquino', 't', 'male', '09112223333', 'Nabuclod, Floridablanca', 'none.png', 0, ''),
(13, '2022-12-01 15:15:40', 0, 1, 'DevAgAllen@gmail.com', 'ALLEN1', 'Allen Sadie', 't', 'male', '09334445555', 'Anon, Floridablanca', 'none.png', 0, ''),
(14, '2022-12-01 15:43:08', 0, 1, 'sales.iwebsolution@gmail.com', '123456', 'TestBot Buyer', 't', 'male', '09213327165', 'Pampanga', 'none.png', 0, ''),
(15, '2022-12-01 15:46:34', 0, 1, 'markdaniel25_lopez@yahoo.com', 'progress1', 'MARK DANIEL LOPEZ', 't', 'male', '09052802639', 'markdaniel25_lopez@yahoo.com', 'none.png', 0, ''),
(16, '2022-12-07 11:45:07', 0, 1, 'warrrrr56@gmail.com', '11111111', 'Allen ', 't', 'male', '09266666666', 'Valdez', 'none.png', 0, ''),
(17, '2022-12-09 06:30:30', 0, 1, 'martinmexico5@gmail.com', 'orenzo45', 'Mart Angelo Orenzo', 't', 'male', '09614335484', 'maligay', 'none.png', 1, 'F2391707'),
(18, '2022-12-09 06:34:44', 0, 1, 'cs.charlonlopezdizon18@gmail.com', 'DAT1', 'Charlon Dizon', 't', 'male', '09998887777', 'Fortuna, Floridablanca', 'none.png', 0, '186DB460'),
(19, '2022-12-09 06:37:13', 0, 1, 'DevAgCharlon@gmail.com', 'Charlon01', 'Dizon, Charlon, L.', 't', 'male', '09697685241', 'Fortuna, floridablanca', 'none.png', 0, '67CD812A'),
(20, '2022-12-09 06:38:58', 0, 1, 'charlondizon018@gmail.com', 'DAT1', 'Charlon Dizon', 't', 'male', '09052802639', 'Fortuna Floridablanca Pampanga', 'E9828AF4.png', 1, 'A86472BC'),
(21, '2022-12-09 06:52:42', 0, 1, 'sarkiesarangay06@gmail.com', 'DAT1', 'Ferdinand Canlas', 't', 'female', '09052802639', 'Poblacion, Floridablanca Pampanga', '533B5DAE.png', 1, '163FB5AD'),
(22, '2022-12-09 09:30:36', 0, 1, 'canlas.vinz@gmail.com', 'DAT123', 'VINZ BYRON S. Canlas', 't', 'male', '09100351225', 'PALMAYO FLORIDABLANCA', 'none.png', 1, 'EE1E05D0'),
(24, '2022-12-09 14:49:24', 0, 1, 'martinmexico3@gmail.com', 'orenzo45', 'Mart Angelo Orenzo', 't', 'male', '9882828282', 'hdhdhdbdbbd', 'none.png', 1, 'D6C58DE7'),
(25, '2022-12-09 14:57:51', 0, 1, 'raffyllano31dev@gmail.com', '12345678', 'Pedro Berbi', 't', 'male', '09712345678', 'Caloocan', '9551301A.png', 1, '1EF5C682'),
(26, '2022-12-09 15:23:48', 0, 1, 'webcoregaming@gmail.com', '123456', 'Pedro Martinez', 't', 'male', '0921345678', 'Bulacan', 'none.png', 1, '132233AF'),
(27, '2022-12-12 21:35:15', 0, 1, 'webleyneutral@gmail.com', 'DAT1', 'MAC LOPEZ', 'ss', 'male', '09562128372', 'Solib Floridablanca Pampanga', 'EF71D06F.png', 1, '1E9E6C61'),
(28, '2022-12-12 21:59:37', 0, 1, 'kielharvey6@gmail.com', 'Test1', 'John Paul', 'ss', 'male', '09873647236', 'Fortuna, Floridablanca', 'none.png', 1, '4BE5BACD'),
(29, '2022-12-13 23:20:49', 0, 1, 'mart.orenzo0911@gmail.com', 'orenzo45', 'mat', 'ss', 'male', '99999999', 'uuuu', 'none.png', 1, '6D9BDADF'),
(30, '2022-12-19 10:20:43', 0, 1, 'lr.emdshare@gmail.com', 'DAT1', 'Gab Aquino', 'ss', 'male', '09872352131', 'lr.emdshare@gmail.com', 'none.png', 1, '65F3FBEB'),
(31, '', 1, 1, 'DevAgMain@gmail.com', 'DEVadmin1', 'Administrator', 'ss', 'male', '', '', 'none.png', 1, ''),
(32, '2023-01-01 21:54:00', 0, 1, 'danilovlopes44@gmail.com', 'Bigmac6', 'Daryl Simbillo', 'ss', 'male', '09051234579', 'Sta Monica Floridablanca Pampanga', 'none.png', 1, '92AE5C75'),
(33, '2023-01-08 13:09:51', 0, 1, 'ml.created5@gmail.com', 'DAT1', 'Juana Reyes Dela Cruz', 'ss', 'male', '09786352333', 'San Jose Floridablanca Pampanga', 'none.png', 1, 'F8186A97');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calendar_month_tbl`
--
ALTER TABLE `calendar_month_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `calendar_product_tbl`
--
ALTER TABLE `calendar_product_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `calendar_season_tbl`
--
ALTER TABLE `calendar_season_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipment_cat_tbl`
--
ALTER TABLE `equipment_cat_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipment_img_tbl`
--
ALTER TABLE `equipment_img_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipment_status_tbl`
--
ALTER TABLE `equipment_status_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `equipment_tbl`
--
ALTER TABLE `equipment_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message_tbl`
--
ALTER TABLE `message_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pesticide_tbl`
--
ALTER TABLE `pesticide_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pest_pesticide_tbl`
--
ALTER TABLE `pest_pesticide_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pest_tbl`
--
ALTER TABLE `pest_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_cat_tbl`
--
ALTER TABLE `support_cat_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_img_tbl`
--
ALTER TABLE `support_img_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_status_tbl`
--
ALTER TABLE `support_status_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_tbl`
--
ALTER TABLE `support_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `top_month_tbl`
--
ALTER TABLE `top_month_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trading_cat_tbl`
--
ALTER TABLE `trading_cat_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trading_img_tbl`
--
ALTER TABLE `trading_img_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trading_status_tbl`
--
ALTER TABLE `trading_status_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trading_tbl`
--
ALTER TABLE `trading_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactionreportimg_tbl`
--
ALTER TABLE `transactionreportimg_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactionreport_tbl`
--
ALTER TABLE `transactionreport_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction_tbl`
--
ALTER TABLE `transaction_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calendar_month_tbl`
--
ALTER TABLE `calendar_month_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `calendar_product_tbl`
--
ALTER TABLE `calendar_product_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;

--
-- AUTO_INCREMENT for table `calendar_season_tbl`
--
ALTER TABLE `calendar_season_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `equipment_cat_tbl`
--
ALTER TABLE `equipment_cat_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `equipment_img_tbl`
--
ALTER TABLE `equipment_img_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `equipment_status_tbl`
--
ALTER TABLE `equipment_status_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `equipment_tbl`
--
ALTER TABLE `equipment_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `message_tbl`
--
ALTER TABLE `message_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `pesticide_tbl`
--
ALTER TABLE `pesticide_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pest_pesticide_tbl`
--
ALTER TABLE `pest_pesticide_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `pest_tbl`
--
ALTER TABLE `pest_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `support_cat_tbl`
--
ALTER TABLE `support_cat_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `support_img_tbl`
--
ALTER TABLE `support_img_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `support_status_tbl`
--
ALTER TABLE `support_status_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `support_tbl`
--
ALTER TABLE `support_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `top_month_tbl`
--
ALTER TABLE `top_month_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `trading_cat_tbl`
--
ALTER TABLE `trading_cat_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `trading_img_tbl`
--
ALTER TABLE `trading_img_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `trading_status_tbl`
--
ALTER TABLE `trading_status_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trading_tbl`
--
ALTER TABLE `trading_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `transactionreportimg_tbl`
--
ALTER TABLE `transactionreportimg_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transactionreport_tbl`
--
ALTER TABLE `transactionreport_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `transaction_tbl`
--
ALTER TABLE `transaction_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
