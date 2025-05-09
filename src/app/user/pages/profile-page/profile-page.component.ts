import { Component } from '@angular/core';
import { ProfileSidebarComponent } from '../../components/profile-sidebar/profile-sidebar.component';
import { SignInUser } from '../../../auth/models/signInUser.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { UserService } from '../../services/user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileSidebarComponent, AsyncPipe],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  
  user$: Observable<SignInUser>;
  selectedIndex: number = 0;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.user$ = this.route.params.pipe(
      switchMap(params => this.userService.getUserInfoById((params['id'])))
    );
  }

  receiveSelectedIndex(index: number) {
    this.selectedIndex = index;
  }

}
