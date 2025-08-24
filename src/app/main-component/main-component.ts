import { Component } from '@angular/core';
import { HeaderComponent } from '../header-component/header-component';
import { FooterComponent } from '../footer-component/footer-component';

@Component({
  selector: 'app-main-component',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './main-component.html',
  styleUrl: './main-component.scss'
})
export class MainComponent {

}
