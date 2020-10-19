# CrossUI Angular
**[WIP]** Angular wrapper to easy use for [CrossUI components](https://github.com/dimaslz/cross-ui-core).

## Installation
`npm install https://github.com/dimaslz/cross-ui-core`

`yarn add https://github.com/dimaslz/cross-ui-core`

Now, in your main module, commonly `app.module.ts`:
```typescript
//...
import { NgCrossUIModule } from '@cross-ui/angular';

@NgModule({
  //...
  imports: [
    //...
    NgCrossUIModule,
  ],
  //...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
```

## Author

Dimas López · FullStack Software development

🐦 [https://twitter.com/dimaslz](https://twitter.com/dimaslz)

👨🏻‍💻 [https://dimaslz.dev](https://dimaslz.dev)

📄 [https://www.linkedin.com/in/dimaslopezzurita](https://www.linkedin.com/in/dimaslopezzurita)