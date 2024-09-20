<?php
class Conexion{
    public static function conectar(){
        $cn = pg_connect("host='localhost' port='5432' dbname='pjweb' user='postgres' password='123'");
        return $cn;
    }
}

?>