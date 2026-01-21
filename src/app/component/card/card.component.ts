import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  allProducts: any[] = [];      
  filteredProducts: any[] = []; 
  visibleProducts: any[] = [];  
  categories: string[] = [];  
  
  itemsToShow: number = 10;
  selectedCategory: string = 'all';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.allProducts = data;
      
      const rawCategories = data.map((p: any) => p.category).filter((c: any) => c !== null && c !== "");
      this.categories = ['all', ...new Set(rawCategories)] as string[];
      
      this.filterByCategory('all'); 
    });
  }

  filterByCategory(cat: string) {
    this.selectedCategory = cat;
    this.itemsToShow = 10; 
    
    if (cat === 'all') {
      this.filteredProducts = this.allProducts;
    } else {
      this.filteredProducts = this.allProducts.filter(p => p.category === cat);
    }
    this.updateVisibleProducts();
  }

  updateVisibleProducts() {
    this.visibleProducts = this.filteredProducts.slice(0, this.itemsToShow);
  }

  loadMore() {
    this.itemsToShow += 10;
    this.updateVisibleProducts();
  }

  updateImage(event: any) {
    event.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
  }
}