import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productData:undefined|product;
productQuantity:number=1
  constructor(private activateRoute:ActivatedRoute,private product:ProductService) { }

  ngOnInit(): void {
  let productId=this.activateRoute.snapshot.paramMap.get('productId')
  productId&&this.product.getProduct(productId).subscribe((result)=>{
    console.log(result)
    this.productData=result;
  })
  }
handleQuantity(val:string){
  if(this.productQuantity<20 && val==='plus')
  {
    this.productQuantity+=1
  }
  else if (this.productQuantity>1 && val==='min')
  {
    this.productQuantity-=1
  }
}
}
