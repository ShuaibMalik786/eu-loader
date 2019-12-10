# Eu Loader

Loader service for Angular

## Getting started

Import `EuLoaderModule` in app.module.ts - 
```
import {EuLoaderModule} from 'eu-loader';
```

Add it in 'imports' - 
```
  imports: [
    EuLoaderModule,
    ...
  ],
  ```

Import 'EuLoaderService' in your component - 
```
import {EuLoaderService} from 'eu-loader';
```

Inject service in component
```
  constructor(private euLoaderService: EuLoaderService) {
  }
```

Open loader by calling the service - 
```
    this.euLoaderService.open({
      text: 'Please Wait',
      dismissOnClickOutside: false,
      spinnerColor: 'blue',
      textColor: 'black'
    }).afterClosed.subscribe(result => {
      console.log(result);
    });
      
```

# Options

| Option                | Type          | Default   | Values         |
| --------------------- |:-------------:| :--------:| --------------:|
| text                  | string        | undefined | any string     |
| dismissOnClickOutside |  boolean      | false     | true or false  |
| dismissOnClickOutside |  string       | black     | any color      |
| textColor             |  string       | black     | any color      |


