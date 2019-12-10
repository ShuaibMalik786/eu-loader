import {
  Component,
  OnInit,
} from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { DialogConfig } from '../dialog-config';

@Component({
  selector: 'lib-eu-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  constructor(public config: DialogConfig, public dialog: DialogRef) {
  }

  onCancel() {
    this.dialog.close(false);
  }

  onOk() {
    this.dialog.close(true);
  }

  ngOnInit() {
  }
}
