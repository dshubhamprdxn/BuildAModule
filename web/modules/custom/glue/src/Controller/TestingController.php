<?php

namespace Drupal\glue\Controller;

class TestingController 
{
    public function listing() {
        $element = array(
            "#markup" => "<h3>Hello World</h3>",
        );
        return $element;
    }
}
  