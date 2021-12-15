import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from '@service/auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AdminDirective implements OnChanges {
  @Input('appAuth') roles: string[] = [];

  hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const {
      roles,
      authService: { userInfo },
    } = this;
    if (!roles.length) return this.createView();
    if (userInfo && roles.includes(userInfo.type)) return this.createView();
    this.viewContainer.clear();
    this.hasView = false;
  }
  
  private createView(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }
}
