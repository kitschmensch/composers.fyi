<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class Composer extends Database

{
    // Returns all composer. $limit can be used for pagination later.
    public function getcomposers($limit)
    {
        return $this->select('SELECT * from composers ORDER BY birthdate');
    }
}
