# CrossUI Angular
**[WIP]** Angular wrapper to easy use for [CrossUI components](https://github.com/dimaslz/cross-ui-core) in your Angular applications.

### NOTE


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

And in your main css file, for example `styles.scss`
```scss
@import '~@cross-ui/core/dist/cross-ui/cross-ui';
...
```

## Author
```js
{
	name: "Dimas López",
	role: "FullStack Software development",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```
