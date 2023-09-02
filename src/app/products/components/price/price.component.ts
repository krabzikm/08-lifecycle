import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  private interval?: Subscription;

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    this.interval?.unsubscribe();
  }

  ngOnInit(): void {
    this.interval = interval(1000).subscribe(value => console.log(`Tick: ${value}`));
  }

}
