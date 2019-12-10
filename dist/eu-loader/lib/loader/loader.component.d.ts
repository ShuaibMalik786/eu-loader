import { OnInit } from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { DialogConfig } from '../dialog-config';
export declare class LoaderComponent implements OnInit {
    config: DialogConfig;
    dialog: DialogRef;
    constructor(config: DialogConfig, dialog: DialogRef);
    onCancel(): void;
    onOk(): void;
    ngOnInit(): void;
}
