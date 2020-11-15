import { Component } from "@angular/core";
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router){}

  onSubmitList(){
    this.router.navigate(['/list'], {skipLocationChange: true})
  }

  onSubmitRate(){
    this.router.navigate(['/'], {skipLocationChange: true})
  }

  onSubmitCreate(){
    this.router.navigate(['/create'], {skipLocationChange: true})
  }

}
