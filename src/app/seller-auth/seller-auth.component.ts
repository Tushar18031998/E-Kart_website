import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService,private router:Router) { }
  showLogin=false

  ngOnInit(): void {
    this.seller.reloadSeller()
  }
signUp(data:Signup):void{
this.seller.userSignup(data)

}
Login(data:Signup):void{
console.warn(data)
  }
openLogin(){
this.showLogin=true
}
openSignUp(){
  this.showLogin=false
}
}
