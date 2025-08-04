import { Component, OnInit } from '@angular/core';
import { SharepointService } from '../services/sharepoint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  items: any[] = [];

  constructor(private spService: SharepointService) {}

  ngOnInit() {
    this.spService.getListItems().subscribe((data) => {
      this.items = data.d.results;
    }, error => {
      console.error('Error al obtener la lista de SharePoint', error);
    });
  }
}
