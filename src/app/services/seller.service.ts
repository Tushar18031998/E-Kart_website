import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup, login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) {}
  userSignup(data: Signup) {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        console.warn(result)
        if(result){
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        }
      });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data: login) {
    console.log(data);
    this.http
      .get(
        `http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
        { observe: 'response' }
      )
      .subscribe((result: any) => {
        console.log(result);
        if (result && result.body && result.body.length) {
          console.log('user logged in ');
          localStorage.setItem('seller', JSON.stringify(result.body));
          this.router.navigate(['seller-home']);
        } else {
          console.log('user logged in failed ');
          this.isLoginError.emit(true)
        }
      });
  }
}
