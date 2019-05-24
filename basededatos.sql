











CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `likes` int(5) NOT NULL,
  `hates` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;


INSERT INTO `posts` (`id`, `likes`, `hates`) VALUES
(1, 535, 199),
(2, 617, 309),
(3, 876, 337),
(4, 1168, 566),
(5, 1805, 864),
(6, 2984, 560),
(7, 18, 84),
(8, 24, 60);






