import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planning-poker-angular';
  isLoading: boolean = true;

  constructor(private loadingService: LoadingService) {
    this.loading();
  }

  loading() {
    this.loadingService.simulateLoad().then(() => {
      this.isLoading = false;
    });
  }
}
