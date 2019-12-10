import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef, Type,
} from '@angular/core';
import { EuLoaderComponent } from './eu-loader.component';
import { DialogConfig } from './dialog-config';
import { DialogInjector } from './dialog-injector';
import { DialogRef } from './dialog-ref';
import { LoaderComponent } from './loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class EuLoaderService {

  dialogComponentRef: ComponentRef<EuLoaderComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
  }


  public open(config: DialogConfig) {
    const loaderRef = this.appendDialogComponentToBody(config);
    this.dialogComponentRef.instance.childComponentType = LoaderComponent;
    return loaderRef;
  }


  public close() {
    this.removeLoaderComponentFromBody();
  }

  private appendDialogComponentToBody(config: DialogConfig) {
    const map = new WeakMap();
    map.set(DialogConfig, config);

    // add the DialogRef to dependency injection
    const dialogRef = new DialogRef();
    map.set(DialogRef, dialogRef);

    // we want to know when somebody called the close mehtod
    const sub = dialogRef.afterClosed.subscribe(() => {
      // close the dialog
      this.removeLoaderComponentFromBody();
      sub.unsubscribe();
    });

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EuLoaderComponent);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;

    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeLoaderComponentFromBody();
    });

    // return the dialogRef
    return dialogRef;
  }

  private removeLoaderComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}
