import { Routes } from '@angular/router';

import { CollectionsComponent } from './collection-page/collections/collections.component';
import { MenCollectionsComponent } from './collection-page/men-collections/men-collections.component';
import { WomenCollectionsComponent } from './collection-page/women-collections/women-collections.component';
import { AboutNavComponent } from './collection-page/about-nav/about-nav.component';
import { ContactNavComponent } from './collection-page/contact-nav/contact-nav.component';

export const routes: Routes = [
    { path: '', component: CollectionsComponent, title: 'Collection page'}, 

    { path: 'men', component: MenCollectionsComponent, title: 'men page'},
    { path: 'women', component: WomenCollectionsComponent, title: 'women page'},
    { path: 'about', component: AboutNavComponent, title: 'about page'},
    { path: 'contact', component: ContactNavComponent, title: 'contact page'}
];
