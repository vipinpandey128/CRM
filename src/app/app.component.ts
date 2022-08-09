import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Login App';

constructor(private router: Router)
{
    let userData = localStorage.getItem('currentUser');
    if(userData=='' || userData == null)
    {
      this.router.navigate(['/login']);
    }
    else
      this.router.navigate(['/home']);
}

}
