import { FooterComponent } from './footer-component/footer-component';
import { Routes } from '@angular/router';
import {HeaderComponent} from '../app/header-component/header-component'
import { MainComponent } from './main-component/main-component';
import { CatalogComponent } from './catalog-component/catalog-component';

export const routes: Routes = [

    {
        path: '', title: 'Home Page', component: MainComponent,
      },
      {
        path: 'catalog', title: 'Catalog', component: CatalogComponent,
      },
];

