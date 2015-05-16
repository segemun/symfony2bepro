<?php
// src/Segemun/AppBundle/Menu/Builder.php

namespace Segemun\AppBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;

class Builder extends ContainerAware
{
    public function mainMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');

        $menu->setChildrenAttributes(array('class' => 'navigation'));
        $menu->addChild('<i class="fa fa-dashboard"></i> Dashboard', array('route' => 'segemun_app_homepage'));
        // create another menu item
        $menu->addChild('About Me', array('route' => 'segemun_app_homepage', 'label' => '<i class="fa fa-cogs"></i> First Point'));
        // you can also add sub level's to your menu's as follows
        $menu['About Me']->addChild('Edit profile', array('route' => 'segemun_app_homepage'));

        // ... add more children

        return $menu;
    }
}