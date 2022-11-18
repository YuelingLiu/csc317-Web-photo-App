-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: photodb
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` mediumtext NOT NULL,
  `fk_postId` int NOT NULL,
  `fk_authorId` int NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `comment_author_idx` (`fk_authorId`),
  KEY `comment_belongsTo_idx` (`fk_postId`),
  CONSTRAINT `comment_author` FOREIGN KEY (`fk_authorId`) REFERENCES `users` (`id`),
  CONSTRAINT `comment_belongsTo` FOREIGN KEY (`fk_postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'This is a test comment from curl again',3,37,'2022-05-12 18:54:19'),(2,'This is a test comment from curl again1',3,37,'2022-05-12 19:12:11'),(3,'This is a test comment from curl again7',3,38,'2022-05-12 20:13:46'),(4,'this is another test comment from curl',2,38,'2022-05-12 22:30:01'),(18,'Hi, I am kris, I like this photo!',74,39,'2022-05-14 23:34:32'),(19,'Nice photo!',74,38,'2022-05-14 23:35:46'),(20,'Looks so yummy, I am hungry now;)',75,38,'2022-05-14 23:47:03'),(21,'I miss my dog!',78,39,'2022-05-15 00:58:16'),(34,'Hi you want a drink?',81,39,'2022-05-15 12:43:41'),(35,'This is a dirnk',81,39,'2022-05-15 12:45:19');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` mediumtext NOT NULL,
  `photopath` varchar(2048) NOT NULL,
  `thumbnail` varchar(2048) NOT NULL,
  `active` int NOT NULL DEFAULT '1',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'flower','flower','public\\images\\uploads\\05a808a02926f908e422b8f06572e3c7de886c13fa60.jpeg','public/images/uploads/thumbnail-05a808a02926f908e422b8f06572e3c7de886c13fa60.jpeg',1,'2022-05-12 12:44:03',37),(3,'hydrangea','hydrangea','public\\images\\uploads\\c8252207f6e9d569883a724e23b6ba0f0466272b1f82.jpeg','public/images/uploads/thumbnail-c8252207f6e9d569883a724e23b6ba0f0466272b1f82.jpeg',1,'2022-05-12 18:34:56',37),(73,'flower','whit flower','public\\images\\uploads\\046530c6d9795cf4db9fb15bc73d6ebba3d0fdc3decb.jpeg','public/images/uploads/thumbnail-046530c6d9795cf4db9fb15bc73d6ebba3d0fdc3decb.jpeg',1,'2022-05-14 23:28:23',39),(74,'building','building','public\\images\\uploads\\a738ecfaecdd1ae59ec5c8fb6f747f95cc9fbe56fad8.jpeg','public/images/uploads/thumbnail-a738ecfaecdd1ae59ec5c8fb6f747f95cc9fbe56fad8.jpeg',1,'2022-05-14 23:30:13',39),(75,'Food','Food','public\\images\\uploads\\a1b8e3e68589c6bdb4fba51ab9512ae329eafabd5a05.jpeg','public/images/uploads/thumbnail-a1b8e3e68589c6bdb4fba51ab9512ae329eafabd5a05.jpeg',1,'2022-05-14 23:46:27',38),(78,'Dogs','Two dogs','public\\images\\uploads\\d89b0136f1abc52e7139662c5093ec0a1be2ddcb2263.jpeg','public/images/uploads/thumbnail-d89b0136f1abc52e7139662c5093ec0a1be2ddcb2263.jpeg',1,'2022-05-15 00:51:04',39),(79,'Flower','Flower','public\\images\\uploads\\9b0fe4203a8459ecfeb4a8a3b522991124365c7af401.jpeg','public/images/uploads/thumbnail-9b0fe4203a8459ecfeb4a8a3b522991124365c7af401.jpeg',1,'2022-05-15 00:57:30',39),(81,'Gin','Gin','public\\images\\uploads\\7c392f5aa90251b8c5925bbaa25a58ad42d35d56a302.jpeg','public/images/uploads/thumbnail-7c392f5aa90251b8c5925bbaa25a58ad42d35d56a302.jpeg',1,'2022-05-15 12:42:53',39),(82,'Food','food','public\\images\\uploads\\3ee519ad4c73259f4099615f7de78601ed55980304a4.jpeg','public/images/uploads/thumbnail-3ee519ad4c73259f4099615f7de78601ed55980304a4.jpeg',1,'2022-05-15 23:07:18',39);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(2048) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `type` int DEFAULT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (37,'RefactorTest01','RefactorTest01@gmail.com',NULL,'2022-05-11 11:44:43',NULL,'$2b$15$zonozef2bk5jrmajgxrSzeTBctKEXQwWh6oc4KKUmy4QCygpYPj/y'),(38,'stella10','stella10@gmail.com',NULL,'2022-05-11 12:12:35',NULL,'$2b$15$j6wpi6jydOT0WkZdXSmYSOSafTmmdzNVAQsqFGme01928.m8bkFmu'),(39,'kris01','kris01@gmail.com',NULL,'2022-05-14 11:15:44',NULL,'$2b$15$DzfeJcHchUEJQ/99atd4Z.An4PGIIbwThgH35NdnBMb1GHvjw99sW');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-16  9:49:53