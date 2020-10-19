import { NgModule } from '@angular/core';
import { ButtonModule } from './components/button/button.module';
import { CrossButton } from '@cross-ui/core';
import { applyPolyfills } from '@cross-ui/core/loader';
applyPolyfills().then(() => {
    customElements.define('cui-button', CrossButton);
});
export class NgCrossUIModule {
}
NgCrossUIModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                // schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ButtonModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY3Jvc3MtdWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kaW1hc2x6L0RldmVsb3BtZW50L0Bjcm9zcy11aS9hbmd1bGFyL3Byb2plY3RzL2FuZ3VsYXIvc3JjLyIsInNvdXJjZXMiOlsibmctY3Jvc3MtdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQTBCLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXZELGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDekIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDLENBQUM7QUFVSCxNQUFNLE9BQU8sZUFBZTs7O1lBUjNCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBRVI7Z0JBQ0QscUNBQXFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IENyb3NzQnV0dG9uIH0gZnJvbSAnQGNyb3NzLXVpL2NvcmUnO1xuaW1wb3J0IHsgYXBwbHlQb2x5ZmlsbHMgfSBmcm9tICdAY3Jvc3MtdWkvY29yZS9sb2FkZXInO1xuXG5hcHBseVBvbHlmaWxscygpLnRoZW4oKCkgPT4ge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2N1aS1idXR0b24nLCBDcm9zc0J1dHRvbik7XG59KTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuXG4gIF0sXG4gIC8vIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbiAgZXhwb3J0czogW0J1dHRvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdDcm9zc1VJTW9kdWxlIHsgfVxuIl19