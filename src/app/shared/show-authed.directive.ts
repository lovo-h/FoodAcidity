import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from './service/user.service';

@Directive({
  selector: '[faShowAuthed]'
})
export class ShowAuthedDirective implements OnInit {
  condition: boolean;

  @Input() set faShowAuthed(condition: boolean) {
    this.condition = condition;
  }

  constructor(private templateRef: TemplateRef<any>,
              private userService: UserService,
              private viewContainer: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }
}
