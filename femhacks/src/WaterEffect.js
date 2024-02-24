import React, { useEffect } from 'react';
import './styles/WaterEffect.css';

const WaterEffect = () => {
    useEffect(() => {
        const $ = window.jQuery;
        $(document).ready(function () {
            $('body').ripples({
                resolution: 512,
                dropRadius: 20,
                perturbance: 0.04,
            });
        });

        return () => {
            $('body').ripples('destroy');
        };
    }, []);

    return null;
};

export default WaterEffect;
