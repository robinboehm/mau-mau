import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HandOfCardsComponent } from './hand-of-cards.component';

describe('Component: HandOfCards', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [HandOfCardsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HandOfCardsComponent],
      (component: HandOfCardsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HandOfCardsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HandOfCardsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-hand-of-cards></app-hand-of-cards>
  `,
  directives: [HandOfCardsComponent]
})
class HandOfCardsComponentTestController {
}

