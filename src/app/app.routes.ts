import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Transliterate } from './pages/transliterate/transliterate';
import { PdfImageToText } from './pages/pdf-image-to-text/pdf-image-to-text';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'transliterate',
        component: Transliterate
    },
    {
        path: 'pdf-image-to-text',
        component: PdfImageToText
    }
];
