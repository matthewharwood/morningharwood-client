
##How to use:
We have 2 sources for our images:
- [GCP - storage](https://console.cloud.google.com/storage/browser/morningharwood-server.appspot.com/?project=morningharwood-server)
- local development through a static path of 'assets/client'

images should be relative to and in a each of their feature directories.

e.g: 
- feature-component/
- feature-component/assets/images
- feature-component/assets/images/bush-plan.png

Then include env variable:

```
<img src="{{env.imgSrc}}bush-plan.png">
```

`env.imgSrc` is being set from:
- environments/environment.prod.ts
- environments/environment.ts

This variable needs to be explicitly included via

```
import { environment as env } from '../environments/environment';
class SomeClass {
    constructor(private store: Store<AppState>) {
        this.env = env;
    }
}
```

or use the image component:

```$xslt

import { environment as env } from '../environments/environment';
@Component({
    selector: 'pic'
    template: `
    
    
    `
})
class PictureComponent {
    @Input('src'):string
    constructor(private store: Store<AppState>) {
        this.env = env;
    }
    
}
```


