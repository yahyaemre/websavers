import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NumericDuo from '../../templates/NumericDuo';
import RigiBoo from '../../templates/RigiBoo';
import Blockify from '../../templates/Blockify';

const themes = {
    'numericduo': NumericDuo,
    'rigiboo': RigiBoo,
    'blockify': Blockify,
};

export default function Theme() {
    const { theme } = useParams();

    const SelectedTheme = themes[theme];

    return (
        <div>
            <SelectedTheme />
        </div>
    );
}
