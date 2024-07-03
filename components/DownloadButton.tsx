'use client';

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import {Button} from "@/components/ui/button";

const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/cv.pdf'; // Укажите правильный путь к вашему CV файлу
        link.download = 'cv.pdf'; // Имя файла, которое будет предложено при скачивании
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button onClick={handleDownload} variant="outline" size="lg" className='uppercase flex items-center gap-2'>
            <span>Download CV</span>
            <FiDownload />
        </Button>
    );
};

export default DownloadButton;