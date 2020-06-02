import { OnInit, Directive, ElementRef, OnDestroy } from '@angular/core';


@Directive({
  selector: '[vsfSlider]'
})
export class SliderDirective implements OnInit, OnDestroy {
  constructor(private elementRef: ElementRef) {
    console.log('xx')
  }

  ngOnInit() {
    console.log(this.elementRef.nativeElement)
    // $('.slide_active').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: 'linear',
    //   slidesToShow: 1,
    //     slidesToScroll: 1,
    //   });

  }

  ngOnDestroy() {
  }
}
