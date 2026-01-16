import { Component } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { CardComponent } from "../../component/card/card.component";

@Component({
  selector: 'app-products',
  imports: [NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
