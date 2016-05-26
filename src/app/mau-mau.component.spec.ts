import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MauMauAppComponent } from '../app/mau-mau.component';

beforeEachProviders(() => [MauMauAppComponent]);

describe('App: MauMau', () => {
  it('should create the app',
      inject([MauMauAppComponent], (app: MauMauAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mau-mau works!\'',
      inject([MauMauAppComponent], (app: MauMauAppComponent) => {
    expect(app.title).toEqual('mau-mau works!');
  }));
});
