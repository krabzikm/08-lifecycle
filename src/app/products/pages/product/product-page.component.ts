import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductComponentPage implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public isProductVisible: boolean = false;
  public currentPrice: number = 100;

  toggleVisibleProduct(): void {
    this.isProductVisible = !this.isProductVisible;
  }
  ngDoCheck(): void {
    console.log(">> ngDoCheck");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(">> ngOnChanges");
  }

  ngOnInit(): void {
    console.log(">> ngOnInit");
  }

  ngAfterContentChecked(): void {
    console.log(">> ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log(">> ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    console.log(">> ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log(">> ngAfterViewInit");
  }

  increasePrice(): void {
    this.currentPrice += 10;
  }
}
