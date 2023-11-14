import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
  });

  let fixture: ComponentFixture<AppComponent>;

  it("lists categories", () => {
    const listItems = fixture.debugElement.queryAll(By.css("li"));
    expect(listItems.length).toBeGreaterThan(0);
  });

 });
