import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importa componentes do Ionic

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,         // <-- indica que é standalone
  imports: [IonicModule]    // <-- IMPORTANTE para reconhecer <ion-content>, <ion-button>
})
export class HomePage {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
