<?php

namespace Segemun\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class SegemunUserBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
