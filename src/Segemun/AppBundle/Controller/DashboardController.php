<?php

namespace Segemun\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DashboardController extends Controller
{
    public function indexAction()
    {
        return $this->render('SegemunAppBundle:Dashboard:index.html.twig');
    }
}
