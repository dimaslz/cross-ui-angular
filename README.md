# CrossUI Angular
Angular wrapper to easy use for [CrossUI components](https://github.com/dimaslz/cross-ui-core) in your Angular applications.

We are in alpha version. if you would like to use this in one of your projects, let me know to motivating me 👨‍💻.

## Installation
`npm install @cross-ui/angular`

`yarn add @cross-ui/angular`

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
