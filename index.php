<?php

require __DIR__ . "/inc/bootstrap.php";

// e.g. '/index.php/composer/list'
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// => ['','index.php','composer','list']
$uri = explode('/', $uri);

// requiring "/composer" . "something"
if ((isset($uri[2]) && $uri[2] != 'composer') || !isset($uri[3])) {
    header('Content-Type: application/json');
    echo json_encode("404 Not Found");

    exit();
}

require PROJECT_ROOT_PATH . "/Controller/Api/ComposerController.php";

$objFeedController = new ComposerController();

//e.g. listAction
$strMethodName = $uri[3] . 'Action';

//calls the method on the ComposerController class.
$objFeedController->{$strMethodName}();
