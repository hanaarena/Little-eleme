<?php
	if($_SERVER['HTTP_X_REQUESTED_WITH'] != "XMLHttpRequest") {
		header("Location: http://localhost/2014-9-27/");
		die();
	} else {
		function getCity($ip) {
		 	$url="http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;
		 	$ip=json_decode(file_get_contents($url));
		 	if((string)$ip->code=='1'){
		 		return false;
		 	}
		 	$data = (array)$ip->data;
		 	return $data;
		}
		header("Content-Type:text/html;charset=utf-8");
		
		$clientIp = $_SERVER["REMOTE_ADDR"]; 
		//$info = getCity('218.72.163.137'); // For test
		$info = getCity($clientIp);
		//var_dump($info);
		print($info[city]);
	}
?>