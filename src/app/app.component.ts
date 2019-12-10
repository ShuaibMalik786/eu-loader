import { Component } from '@angular/core';
import { EuLoaderService } from 'eu-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loader';

  constructor(private euLoaderService: EuLoaderService) {
  }

  ngOnInit() {
    this.open();
  }

  open() {
    this.euLoaderService.open({
      text: 'Please Wait',
      dismissOnClickOutside: false,
      spinnerColor: 'blue',
      textColor: 'black'
    }).afterClosed.subscribe(result => {
      console.log(result);
    });

    setTimeout(() => {
      this.close()
    }, 3000);
  }

  close() {
    this.euLoaderService.close();
  }
}

