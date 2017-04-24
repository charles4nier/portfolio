drop table if exists t_article;

create table t_article (
  art_id integer not null primary key auto_increment,
  art_type varchar(100) not null,
  art_title varchar(100) not null,
  art_paragraphe varchar(1000) not null,
  art_demo varchar(1000) not null
) engine=innodb character set utf8 collate utf8_unicode_ci;
