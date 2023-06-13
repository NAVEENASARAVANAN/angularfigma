-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 24, 2023 at 02:45 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angularSample`
--

-- --------------------------------------------------------

--
-- Table structure for table `membership_automation`
--

CREATE TABLE `membership_automation` (
  `automation_id` int(11) NOT NULL,
  `auto_renew_mem` varchar(32) NOT NULL,
  `automation_timing` varchar(200) NOT NULL,
  `automation_charge_signupfee` varchar(200) NOT NULL,
  `add_automation_input` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `membership_automation`
--

INSERT INTO `membership_automation` (`automation_id`, `auto_renew_mem`, `automation_timing`, `automation_charge_signupfee`, `add_automation_input`, `created_at`, `updated_at`) VALUES
(1, '', '', '', '', '2023-02-24 10:54:32', '2023-02-24 10:54:32'),
(2, '', '', '', '', '2023-02-24 11:05:17', '2023-02-24 11:05:17'),
(3, '', '', '', '', '2023-02-24 11:08:32', '2023-02-24 11:08:32'),
(4, '', '', '', '', '2023-02-24 11:14:06', '2023-02-24 11:14:06'),
(5, '', '', '', '', '2023-02-24 11:16:51', '2023-02-24 11:16:51'),
(6, '', '', '', '', '2023-02-24 11:27:31', '2023-02-24 11:27:31'),
(7, '', 'After School Arts and Crafts Long Option', 'Do Not Charge Sign-up Fee', '', '2023-02-24 12:35:44', '2023-02-24 12:35:44'),
(8, '', 'After School Arts and Crafts Long Option', 'Do Not Charge Sign-up Fee', '', '2023-02-24 12:37:59', '2023-02-24 12:37:59'),
(9, 'YES', 'After School Activities', 'Charge Sign-up Fee', 'iiiii', '2023-02-24 12:50:21', '2023-02-24 12:50:21'),
(10, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:52:20', '2023-02-24 12:52:20'),
(11, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:54:40', '2023-02-24 12:54:40'),
(12, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:54:40', '2023-02-24 12:54:40'),
(13, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:54:40', '2023-02-24 12:54:40'),
(14, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(15, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(16, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(17, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(18, 'NO', 'After School Sports', 'Charge Sign-up Fee', 'dddd', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(19, '', '', '', '', '2023-02-24 12:58:45', '2023-02-24 12:58:45'),
(20, '', '', '', '', '2023-02-24 13:01:59', '2023-02-24 13:01:59'),
(21, '', '', '', '', '2023-02-24 13:05:21', '2023-02-24 13:05:21'),
(22, '', '', '', '', '2023-02-24 13:08:34', '2023-02-24 13:08:34'),
(23, '', '', '', '', '2023-02-24 13:17:49', '2023-02-24 13:17:49'),
(24, '', '', '', '', '2023-02-24 13:19:57', '2023-02-24 13:19:57'),
(25, '', '', '', '', '2023-02-24 13:21:59', '2023-02-24 13:21:59'),
(26, '', '', '', '', '2023-02-24 13:25:47', '2023-02-24 13:25:47'),
(27, '', '', '', '', '2023-02-24 13:44:28', '2023-02-24 13:44:28');

-- --------------------------------------------------------

--
-- Table structure for table `membership_details`
--

CREATE TABLE `membership_details` (
  `details_id` int(11) NOT NULL,
  `details_title` varchar(32) NOT NULL,
  `details_subtitle` varchar(32) NOT NULL,
  `details_description` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `membership_details`
--

INSERT INTO `membership_details` (`details_id`, `details_title`, `details_subtitle`, `details_description`, `created_at`, `updated_at`) VALUES
(1, 'ggg', 'hi', '', '2023-02-24 10:29:47', '2023-02-24 10:29:47'),
(2, 'www', 'qqq', 'fhg', '2023-02-24 10:31:34', '2023-02-24 10:31:34'),
(3, 'hj', 'hj', 'yti', '2023-02-24 10:41:19', '2023-02-24 10:41:19'),
(4, '', '', '', '2023-02-24 10:54:32', '2023-02-24 10:54:32'),
(5, '', '', '', '2023-02-24 11:05:17', '2023-02-24 11:05:17'),
(6, '', '', '', '2023-02-24 11:08:32', '2023-02-24 11:08:32'),
(7, '', '', '', '2023-02-24 11:14:06', '2023-02-24 11:14:06'),
(8, '', '', '', '2023-02-24 11:16:51', '2023-02-24 11:16:51'),
(9, '', '', '', '2023-02-24 11:27:31', '2023-02-24 11:27:31'),
(10, '', '', '', '2023-02-24 12:35:44', '2023-02-24 12:35:44'),
(11, '', '', '', '2023-02-24 12:37:59', '2023-02-24 12:37:59'),
(12, 'uuu', 'iii', 'fsjrg', '2023-02-24 12:50:21', '2023-02-24 12:50:21'),
(13, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:52:20', '2023-02-24 12:52:20'),
(14, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:54:40', '2023-02-24 12:54:40'),
(15, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:54:40', '2023-02-24 12:54:40'),
(16, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:54:40', '2023-02-24 12:54:40'),
(17, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(18, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(19, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(20, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(21, 'tttttt', 'qqqqq', 'dsfkeyudsx', '2023-02-24 12:54:41', '2023-02-24 12:54:41'),
(22, 'hhhhhh', 'qq', 'qqqq', '2023-02-24 12:58:45', '2023-02-24 12:58:45'),
(23, '', '', '', '2023-02-24 13:01:59', '2023-02-24 13:01:59'),
(24, '', '', '', '2023-02-24 13:05:21', '2023-02-24 13:05:21'),
(25, '', '', '', '2023-02-24 13:08:34', '2023-02-24 13:08:34'),
(26, '', '', '', '2023-02-24 13:17:49', '2023-02-24 13:17:49'),
(27, '', '', '', '2023-02-24 13:19:57', '2023-02-24 13:19:57'),
(28, '', '', '', '2023-02-24 13:21:59', '2023-02-24 13:21:59'),
(29, '', '', '', '2023-02-24 13:25:47', '2023-02-24 13:25:47'),
(30, '', '', '', '2023-02-24 13:44:28', '2023-02-24 13:44:28');

-- --------------------------------------------------------

--
-- Table structure for table `membership_discount`
--

CREATE TABLE `membership_discount` (
  `discount_id` int(11) NOT NULL,
  `discount_code_name` varchar(32) NOT NULL,
  `selecting_fee_type` varchar(32) NOT NULL,
  `discount_amount_percent` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `membership_payment`
--

CREATE TABLE `membership_payment` (
  `payment_id` int(11) NOT NULL,
  `pay_structure` varchar(32) NOT NULL,
  `pay_billing_plan` varchar(32) NOT NULL,
  `pay_signup_fee` int(11) NOT NULL,
  `charge_signup_fee` varchar(32) NOT NULL,
  `pay_membership_fee` int(11) NOT NULL,
  `recurring` varchar(32) NOT NULL,
  `recurring_frequency` varchar(32) NOT NULL,
  `charge_first_payment` varchar(32) NOT NULL,
  `delay_pay` varchar(32) NOT NULL,
  `prorate_pay_period` varchar(32) NOT NULL,
  `use_attendance_limit` varchar(32) NOT NULL,
  `expiration_count` varchar(32) NOT NULL,
  `exp_monthy` varchar(32) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `membership_automation`
--
ALTER TABLE `membership_automation`
  ADD PRIMARY KEY (`automation_id`);

--
-- Indexes for table `membership_details`
--
ALTER TABLE `membership_details`
  ADD PRIMARY KEY (`details_id`);

--
-- Indexes for table `membership_discount`
--
ALTER TABLE `membership_discount`
  ADD PRIMARY KEY (`discount_id`);

--
-- Indexes for table `membership_payment`
--
ALTER TABLE `membership_payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `membership_automation`
--
ALTER TABLE `membership_automation`
  MODIFY `automation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `membership_details`
--
ALTER TABLE `membership_details`
  MODIFY `details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `membership_discount`
--
ALTER TABLE `membership_discount`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `membership_payment`
--
ALTER TABLE `membership_payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
