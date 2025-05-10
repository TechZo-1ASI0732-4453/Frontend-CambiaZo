import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { Product } from '../../../public/home/models/product.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-publications',
  imports: [AsyncPipe],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

  private readonly userService: UserService=inject(UserService);

  userId: InputSignal<number> = input.required();

  products$: Observable<Product[]>=this.userService.getProductByUserId(this.userId());;

  constructor() {
    console.log(this.userId());
  }

}
