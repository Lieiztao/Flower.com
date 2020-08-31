<?php
    // header('content-type:text/html;charset=utf-8');

    $mysql_conf = array(
        'host'=>'localhost:3306', // 地址  mysql默认端口3306
        'db_user'=>'root',  // 用户名
        'db_pass'=>'root', // 密码
        'db'=>'h5_2006' // 数据库名
    );

    // 链接数据库 
    // mysqli  登录数据库
    $mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);

    // 判断是否链接成功 
    // 没有链接成功则终止代码执行
    if($mysqli->connect_errno){
        // die() 函数 终止代码执行
        die('链接错误'.$mysqli->connect_errno);
    }

    // 设置查询字符集
    $mysqli->query('set names utf8');

    // 选择数据库
    $select_db = $mysqli->select_db($mysql_conf['db']);

    if(!$select_db){
        die('数据库选择错误'.$mysqli->error);
    }

    // -------------------------------------------------------------

    $sql = "select * from product";// sql语句
    
    // 执行sql语句 使用 $mysqli->query()
    // 执行查询操作时  获得的返回值 叫做结果集
    $result = $mysqli->query($sql);

    // echo$result;
    // var_dump($result);

    // 从结果集中获得一条数据
    // $row = $result->fetch_assoc();
    // $row2 = $result->fetch_assoc();
    // $row3 = $result->fetch_assoc();
    // $row4 = $result->fetch_assoc();

    // var_dump($row);
    // var_dump($row2);
    // var_dump($row3);
    // var_dump($row4);
    $arr = array();

    while($row = $result->fetch_assoc()){
        // $result =htmlspecialchars_decode($result);
        // $result= json_decode($result);
        array_push($arr,$row);
    }

    $json = json_encode($arr,CURLOPT_RETURNTRANSFER==true);

    echo $json;

?>