CREATE DATABASE  IF NOT EXISTS `test_result_medigo_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `test_result_medigo_db`;
-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: test_result_medigo_db
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dokter`
--

DROP TABLE IF EXISTS `dokter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dokter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nama` varchar(200) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `Domisili` varchar(100) NOT NULL,
  `Spesialisasi_id` int NOT NULL,
  PRIMARY KEY (`id`,`Spesialisasi_id`),
  KEY `fk_Dokter_Spesialisasi1_idx` (`Spesialisasi_id`),
  CONSTRAINT `fk_Dokter_Spesialisasi1` FOREIGN KEY (`Spesialisasi_id`) REFERENCES `spesialisasi` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dokter`
--

LOCK TABLES `dokter` WRITE;
/*!40000 ALTER TABLE `dokter` DISABLE KEYS */;
INSERT INTO `dokter` VALUES (1,'dr. Agieta Z, SpTHT-KL','Wanita','Jakarta Pusat',5),(2,'dr. Adisti M R, SpTHT-KL(K)','Wanita','Jakarta Barat',5),(3,'Dr.dr.Mirta H, SpTHT-KL(K)','Pria','Jakarta Selatan',4),(4,'drg.abcde, Sp','Pria','Jakarta Selatan',2),(5,'dr. Boy','Pria','Jakarta Timur',1);
/*!40000 ALTER TABLE `dokter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dokter_has_keahlian`
--

DROP TABLE IF EXISTS `dokter_has_keahlian`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dokter_has_keahlian` (
  `Dokter_id` int NOT NULL,
  `Keahlian_id` int NOT NULL,
  PRIMARY KEY (`Dokter_id`,`Keahlian_id`),
  KEY `fk_Dokter_has_Keahlian_Keahlian1_idx` (`Keahlian_id`),
  KEY `fk_Dokter_has_Keahlian_Dokter1_idx` (`Dokter_id`),
  CONSTRAINT `fk_Dokter_has_Keahlian_Dokter1` FOREIGN KEY (`Dokter_id`) REFERENCES `dokter` (`id`),
  CONSTRAINT `fk_Dokter_has_Keahlian_Keahlian1` FOREIGN KEY (`Keahlian_id`) REFERENCES `keahlian` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dokter_has_keahlian`
--

LOCK TABLES `dokter_has_keahlian` WRITE;
/*!40000 ALTER TABLE `dokter_has_keahlian` DISABLE KEYS */;
INSERT INTO `dokter_has_keahlian` VALUES (1,1),(2,1),(4,1),(1,2),(2,2),(4,2),(1,3),(3,3),(4,4);
/*!40000 ALTER TABLE `dokter_has_keahlian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dokter_has_penyakitterkait`
--

DROP TABLE IF EXISTS `dokter_has_penyakitterkait`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dokter_has_penyakitterkait` (
  `Dokter_id` int NOT NULL,
  `PenyakitTerkait_id` int NOT NULL,
  PRIMARY KEY (`Dokter_id`,`PenyakitTerkait_id`),
  KEY `fk_Dokter_has_PenyakitTerkait_PenyakitTerkait1_idx` (`PenyakitTerkait_id`),
  KEY `fk_Dokter_has_PenyakitTerkait_Dokter1_idx` (`Dokter_id`),
  CONSTRAINT `fk_Dokter_has_PenyakitTerkait_Dokter1` FOREIGN KEY (`Dokter_id`) REFERENCES `dokter` (`id`),
  CONSTRAINT `fk_Dokter_has_PenyakitTerkait_PenyakitTerkait1` FOREIGN KEY (`PenyakitTerkait_id`) REFERENCES `penyakitterkait` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dokter_has_penyakitterkait`
--

LOCK TABLES `dokter_has_penyakitterkait` WRITE;
/*!40000 ALTER TABLE `dokter_has_penyakitterkait` DISABLE KEYS */;
INSERT INTO `dokter_has_penyakitterkait` VALUES (1,1),(2,1),(1,2),(2,2),(4,2),(1,3),(3,3);
/*!40000 ALTER TABLE `dokter_has_penyakitterkait` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jadwalpraktik`
--

DROP TABLE IF EXISTS `jadwalpraktik`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jadwalpraktik` (
  `idDokter` int NOT NULL,
  `idRS` int NOT NULL,
  `BookingOnline` int NOT NULL,
  `Hari` varchar(45) NOT NULL,
  `Jam` varchar(45) NOT NULL,
  PRIMARY KEY (`idDokter`,`idRS`),
  KEY `fk_JadwalPraktik_Dokter1_idx` (`idDokter`),
  KEY `fk_JadwalPraktik_Praktik1_idx` (`idRS`),
  CONSTRAINT `fk_JadwalPraktik_Dokter1` FOREIGN KEY (`idDokter`) REFERENCES `dokter` (`id`),
  CONSTRAINT `fk_JadwalPraktik_Praktik1` FOREIGN KEY (`idRS`) REFERENCES `rumahsakit` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jadwalpraktik`
--

LOCK TABLES `jadwalpraktik` WRITE;
/*!40000 ALTER TABLE `jadwalpraktik` DISABLE KEYS */;
INSERT INTO `jadwalpraktik` VALUES (1,1,1,'Senin','10.00 - 12.00'),(1,2,0,'Rabu','09.00 - 11.00'),(1,3,0,'Kamis','14.00 - 16.00'),(2,2,1,'Selasa','10.00 - 12.00'),(3,1,0,'Senin','14.00 - 16.00'),(3,4,0,'Rabu','10.00 - 12.00');
/*!40000 ALTER TABLE `jadwalpraktik` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keahlian`
--

DROP TABLE IF EXISTS `keahlian`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `keahlian` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Keahlian` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keahlian`
--

LOCK TABLES `keahlian` WRITE;
/*!40000 ALTER TABLE `keahlian` DISABLE KEYS */;
INSERT INTO `keahlian` VALUES (1,'Bedah Sinus Endoskopi dan Nasal'),(2,'Bedah Nasal Endoskopi'),(3,'Timpanoplasti'),(4,'Operasi Lasik'),(5,'Operasi Jantung');
/*!40000 ALTER TABLE `keahlian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penyakitterkait`
--

DROP TABLE IF EXISTS `penyakitterkait`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `penyakitterkait` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Penyakit` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penyakitterkait`
--

LOCK TABLES `penyakitterkait` WRITE;
/*!40000 ALTER TABLE `penyakitterkait` DISABLE KEYS */;
INSERT INTO `penyakitterkait` VALUES (1,'Batuk Kronis'),(2,'Sinusitis Kronis'),(3,'Kesulitan Menelan'),(4,'Katarak'),(5,'Stroke');
/*!40000 ALTER TABLE `penyakitterkait` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rumahsakit`
--

DROP TABLE IF EXISTS `rumahsakit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rumahsakit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `RumahSakit` varchar(300) NOT NULL,
  `AlamatRS` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rumahsakit`
--

LOCK TABLES `rumahsakit` WRITE;
/*!40000 ALTER TABLE `rumahsakit` DISABLE KEYS */;
INSERT INTO `rumahsakit` VALUES (1,'RS Pusat Pertamina','Jl. Kyai Maja No.43, RT 4 RW 8, Gunung, Kebayoran Baru, Jakarta'),(2,'Klinik Pertamedika Sinabung','Jl. Sinabung II, No.32 AF, Kebayoran Baru, RT.6/RW.5, Jakarta'),(3,'RSCM','Jl. Sinabung II, No.32 AF, Kebayoran Baru, RT.6/RW.5, Jakarta'),(4,'Klinik ABC','Jl. Kyai Maja No.43, RT 4 RW 8, Gunung, Kebayoran Baru, Jakarta Utara');
/*!40000 ALTER TABLE `rumahsakit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spesialisasi`
--

DROP TABLE IF EXISTS `spesialisasi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spesialisasi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Spesialisasi` varchar(150) NOT NULL,
  `Deskripsi` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spesialisasi`
--

LOCK TABLES `spesialisasi` WRITE;
/*!40000 ALTER TABLE `spesialisasi` DISABLE KEYS */;
INSERT INTO `spesialisasi` VALUES (1,'Dokter Umum','Praktisi umum'),(2,'Dokter Gigi','Praktisi gigi, rongga mulut dan rahang'),(3,'Dokter Spesialis Jantung','Kardiologi'),(4,'Dokter Spesialis Kulit dan Kelamin','Dermatologi'),(5,'Dokter Spesialis THT','Otolaringologi');
/*!40000 ALTER TABLE `spesialisasi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-06 19:58:18
