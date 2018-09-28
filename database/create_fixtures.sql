\set db_user webuser
\set db_password 'deadbeefsnaf0'
\set db mydatabase

CREATE USER :db_user ENCRYPTED PASSWORD ':db_password' SUPERUSER CREATEDB CREATEROLE;
CREATE DATABASE :db WITH ENCODING 'UTF8' OWNER webuser;
GRANT ALL PRIVILEGES ON DATABASE :db TO :db_user;
