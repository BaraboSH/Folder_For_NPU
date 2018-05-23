-- MySQL dump 10.13  Distrib 5.6.37, for Win32 (AMD64)
--
-- Host: localhost    Database: MyBase
-- ------------------------------------------------------
-- Server version	5.6.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `MyBase`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `MyBase` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `MyBase`;

--
-- Table structure for table `goods`
--

DROP TABLE IF EXISTS `goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `currency` varchar(15) NOT NULL DEFAULT 'грн',
  `image` varchar(500) NOT NULL DEFAULT 'http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg',
  `storage` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods`
--

LOCK TABLES `goods` WRITE;
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (1,'Asus PCI-Ex GeForce Turbo GTX 1070 8GB GDDR5 (256bit) (1506/8000) (DVI, 2 x HDMI, 2 x DisplayPort) (TURBO-GTX1070-8G)','Super powerfull and cool videocart ever','17887','грн','https://i1.rozetka.ua/goods/1677812/asus_turbo-gtx1070-8g_images_1677812266.jpg',15,'Video card'),(2,'MSI PCI-Ex GeForce GTX 1070 Armor 8GB GDDR5 (256bit) (1556/8008) (DVI, HDMI, 3 x DisplayPort) (GTX 1070 ARMOR 8G OC)','Almost power and cool video cart','20155','грн','https://i2.rozetka.ua/goods/1655594/msi_gtx_1070_armor_8g_oc_images_1655594077.jpg',5,'Video card'),(3,'27\" LG 27MP68VQ-P','Very beautifull monitor for wathcing anime and netflix','6699','грн','https://i2.rozetka.ua/goods/1642867/lg_27mp68vq_p_images_1642867755.jpg',12,'Monitor'),(4,'23.8\" Dell P2417H (210-AJEX)','Just monitor','6299','грн','https://i1.rozetka.ua/goods/1655686/copy_dell_210_ajeg_577a56fbd156f_images_1655686708.jpg',7,'Monitor'),(5,'Intel Core i7-8700K 3.7GHz/8GT/s/12MB','Новый процессор Intel Core i7-8700K 8-го поколения, с кодовым названием микроархитектуры Coffee Lake. Предназначен для настольной платформы Intel LGA 1151. Принадлежит к семейству высокопроизводительных процессоров Core i7.','11150','грн','https://i1.rozetka.ua/goods/2258758/intel_core_i7_8700K_images_2258758551.jpg',21,'Processor'),(6,'Intel Core i5-8400 2.8GHz/8GT/s/9MB','Новый процессор Intel Core i5-8400 8-го поколения, с кодовым названием микроархитектуры Coffee Lake-S. Предназначен для настольной платформы Intel LGA 1151. Принадлежит к семейству высокопроизводительных процессоров Core i5. ','5559','грн','https://i1.rozetka.ua/goods/2238123/intel_core_i5_8400_images_2238123965.jpg',15,'Processor'),(7,'Intel Core i3-8100 3.6GHz/8GT/s/6MB','Новый процессор Intel Core i3-8100 8-го поколения, с кодовым названием микроархитектуры Coffee Lake-S. Предназначен для настольной платформы Intel LGA 1151. Принадлежит к семейству высокопроизводительных процессоров Core i3.','3420','грн','https://i2.rozetka.ua/goods/2238131/intel_core_i3_8100_images_2238131224.jpg',4,'Processor'),(8,'Asus Expedition EX-B250-V7','Материнские платы ASUS Expedition предназначены для действий, спроектированных с непревзойденной долговечностью для предотвращения повреждения от влаги, коррозии и перенапряжений — для долголетия.','2599','грн','https://i2.rozetka.ua/goods/3039233/asus_ex_b250_v7_images_3039233655.jpg',6,'Motherboard'),(9,'Asus H110M-K (s1151, Intel H110, PCI-Ex16)','H110M-K — функциональная материнская плата Asus формата micro-ATX начального уровня, предназначенная для новой платформы Intel и базируется на системной логике H110. Поддерживает 2 слота оперативной памяти DDR4.','1488','грн','https://i1.rozetka.ua/goods/1359597/asus_h110m_k_images_1359597603.jpg',16,'Motherboard'),(10,'Asus Prime B250M-K (s1151, Intel B250, PCI-Ex16)','Полнофункциональная материнская плата Asus Prime B250M-K формата micro-ATX, предназначенная для новой платформы Intel и базируется на системной логике B250.','2094','грн','https://i1.rozetka.ua/goods/1817461/asus_prime_b250m_k_images_1817461415.jpg',10,'Motherboard');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `adress` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `price` varchar(100) NOT NULL,
  `currency` varchar(15) NOT NULL DEFAULT 'грн',
  `type` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'waiting',
  PRIMARY KEY (`id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id`) REFERENCES `ordersBody` (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'Сергей','Мельников','Ул.Есенина,д.Каруселина,кв.№25','0500111926','korg11@mail.ru','74156','грн','Delivery','2018-04-29','waiting'),(2,'Anastasiya','Dydyliuk','Ул.Степана Бандеры,д.№228','0508800555','a.dydyluk@gmail.com','20155','грн','Pickup from our store','2018-04-30','waiting'),(3,'Никитос','Трембицки','Улица Строителей, 4','0500468413','mesya13@gmail.com','18957','грн','Delivery','2018-04-30','waiting');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordersBody`
--

DROP TABLE IF EXISTS `ordersBody`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ordersBody` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(100) NOT NULL,
  `currency` varchar(15) NOT NULL DEFAULT 'грн',
  `amount` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  CONSTRAINT `ordersbody_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `goods` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordersBody`
--

LOCK TABLES `ordersBody` WRITE;
/*!40000 ALTER TABLE `ordersBody` DISABLE KEYS */;
INSERT INTO `ordersBody` VALUES (1,1,2,'MSI PCI-Ex GeForce GTX 1070 Armor 8GB GDDR5 (256bit) (1556/8008) (DVI, HDMI, 3 x DisplayPort) (GTX 1070 ARMOR 8G OC)','40310','грн',2,'Video card'),(2,1,3,'27\" LG 27MP68VQ-P','20097','грн',3,'Monitor'),(3,1,5,'Intel Core i7-8700K 3.7GHz/8GT/s/12MB','11150','грн',1,'Processor'),(4,1,8,'Asus Expedition EX-B250-V7','2599','грн',1,'Motherboard'),(5,2,2,'MSI PCI-Ex GeForce GTX 1070 Armor 8GB GDDR5 (256bit) (1556/8008) (DVI, HDMI, 3 x DisplayPort) (GTX 1070 ARMOR 8G OC)','20155','грн',1,'Video card'),(6,3,3,'27\" LG 27MP68VQ-P','13398','грн',2,'Monitor'),(7,3,6,'Intel Core i5-8400 2.8GHz/8GT/s/9MB','5559','грн',1,'Processor');
/*!40000 ALTER TABLE `ordersBody` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(75) NOT NULL,
  `surname` varchar(75) NOT NULL,
  `image` varchar(255) DEFAULT 'https://pp.userapi.com/c845417/v845417186/35ae2/oUfZQqSgsTE.jpg',
  `adress` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Сергей','Мельников','https://pp.userapi.com/c837720/v837720537/5163a/9FHJy2-93Q8.jpg','Ул.Есенина,д.Каруселина,кв.№25','0500111926'),(2,'Валерка','Жмых','https://pp.userapi.com/c639228/v639228537/66f5/TiEdy7Jltf8.jpg','Ул.Каруселина,д.№16,кв.№20','0500888926'),(3,'Василий','Пупкин','https://pp.userapi.com/c636824/v636824537/35c15/4jcsaDTuYz0.jpg','Ул.Победы,д.№12,кв.№1','0500666926'),(4,'Anastasiya','Dydyliuk','https://pp.userapi.com/c846524/v846524101/1b488/Di86eCZ5Hs8.jpg','Ул.Степана Бандеры,д.№228','0508800555'),(5,'Никитос','Трембицки','https://pp.userapi.com/c625719/v625719534/1739f/xTv0rXfi1Ks.jpg','Улица Строителей, 4','0500468413'),(6,'Вася','Ветров','https://pp.userapi.com/c845417/v845417186/35ae2/oUfZQqSgsTE.jpg','',''),(7,'Юрка','Селин','','Ул.Пирогова,д.№15','0500101101');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersData`
--

DROP TABLE IF EXISTS `usersData`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usersData` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `rules` varchar(50) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `usersdata_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersData`
--

LOCK TABLES `usersData` WRITE;
/*!40000 ALTER TABLE `usersData` DISABLE KEYS */;
INSERT INTO `usersData` VALUES (1,'korg11@mail.ru','mesya228','admin'),(2,'valeronZh@mail.ua','yavalerka','operator'),(3,'vasyaPupok@gmail.com','pupok228','user'),(4,'a.dydyluk@gmail.com','201099','moderator'),(5,'mesya13@gmail.com','123123','moderator'),(6,'vasyok@mail.ua','vasya1337','user'),(7,'yurok@gmail.com','yoyourok','user');
/*!40000 ALTER TABLE `usersData` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-16 14:27:40
