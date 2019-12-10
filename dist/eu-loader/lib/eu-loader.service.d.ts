import { ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { EuLoaderComponent } from './eu-loader.component';
import { DialogConfig } from './dialog-config';
import { DialogRef } from './dialog-ref';
export declare class EuLoaderService {
    private componentFactoryResolver;
    private appRef;
    private injector;
    dialogComponentRef: ComponentRef<EuLoaderComponent>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    open(config: DialogConfig): DialogRef;
    close(): void;
    private appendDialogComponentToBody;
    private removeLoaderComponentFromBody;
}
