import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-publications',
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent implements OnInit {
  
  private readonly userService: UserService=inject(UserService);

  ngOnInit(): void {
    this.userService.getProductByUserId(1).subscribe((products) => {
      console.log(products);
    });
  }
  
}
