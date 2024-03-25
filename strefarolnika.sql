-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2024 at 10:00 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `strefarolnika`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wheat`
--

CREATE TABLE `wheat` (
  `id` int(11) NOT NULL,
  `cereal_type` varchar(50) DEFAULT NULL,
  `scientific_name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `utilization` text DEFAULT NULL,
  `production_areas` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE grain_prices (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    zboze VARCHAR(100),
    name varchar(100),
    price FLOAT, 
    yield varchar(100),
    production varchar(100)
);
--
-- Dumping data for table `wheat`
--

INSERT INTO `wheat` (`id`, `cereal_type`, `scientific_name`, `description`, `utilization`, `production_areas`, `price`) VALUES
(1, 'Pszenica zwyczajna', 'Triticum aestivum', 'Pszenica zwyczajna to jedno z najważniejszych zbożowych gatunków uprawianych na świecie. Jest rośliną roczną z rodziny wiechlinowatych. Charakteryzuje się dużymi kłosami i obecną w nich duże ilością ziaren.', 'Pszenica zwyczajna jest używana głównie do produkcji mąki, z której wytwarza się chleb, bułki, ciasta i inne pieczywo. Może być także stosowana do produkcji makaronów oraz jako pasza dla zwierząt.', 'Świat: Największymi producentami pszenicy zwyczajnej są Chiny, Indie, Stany Zjednoczone, Rosja, Francja i Australia. W Polsce główne obszary upraw znajdują się na Nizinie Śląskiej, Wielkopolsce, na Mazowszu i w Kotlinie Kłodzkiej.', 650.00),
(2, 'Pszenica durum', 'Triticum durum', 'Pszenica durum to gatunek pszenicy o twardych ziarnach, zawierający dużo białka i gluten. Jest to gatunek bardziej odporny na warunki niekorzystne niż pszenica zwyczajna.', 'Pszenica durum jest głównie wykorzystywana do produkcji mąki semolinowej, która jest podstawowym składnikiem do wytwarzania makaronów, takich jak spaghetti, makaron penne czy lasagne.', 'Świat: Największymi producentami pszenicy durum są Włochy, Turcja, Algieria, Tunezja i Maroko. W Polsce uprawa pszenicy durum jest ograniczona i występuje głównie na terenach południowych.', NULL),
(3, 'Pszenżyto', 'Secale cereale', 'Pszenżyto to gatunek zboża z rodziny wiechlinowatych. Jest to roślina o niebiesko-zielonym kłosie, charakteryzująca się wysoką odpornością na niskie temperatury.', 'Pszenżyto jest wykorzystywane głównie do produkcji chleba żytniego, bułek, pieczywa, piwa oraz wódki. Może być także stosowane jako pasza dla zwierząt.', 'Świat: Głównymi producentami pszenżyta są Rosja, Polska, Niemcy, Ukraina i Kazachstan. W Polsce główne obszary upraw pszenżyta znajdują się na Pomorzu, w Wielkopolsce, na Mazowszu i na Podlasiu.', 620.00);

INSERT INTO grain_prices (zboze, cena, name, yield, production) VALUES
('pszenica konsumpcyjna', 860.00, 'pszenicy', '5.2 tony', 'Nizinia Śląska i Szczecińska'),
('pszenżyto', 620.00, 'pszenżyta', '4.5 tony', 'Wielkopolska i Kujawy'),
('żyto konsumpcyjne', 560.00, 'żyta', '3.5 tony', 'Polska Środkowa i Wschodnia'),
('kukurydza', 620.00, 'kukurydzy', '11.5 tony', 'Wielkopolska i Kujawsko-Pomorskie'),
('owies', 1000.00, 'owsa', '6.7 tony', 'Pojezierze Pomorskie i Mazurskie'),
('jęczmień konsumpcyjny', 600.00, 'jęczmienia', '6 ton', 'w Polsce zachodniej i na Przedgórzu Sudeckim');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `wheat`
--
ALTER TABLE `wheat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wheat`
--
ALTER TABLE `wheat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
