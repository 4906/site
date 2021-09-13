import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tiny-text',
  templateUrl: './tiny-text.component.html',
  styleUrls: ['./tiny-text.component.less']
})
export class TinyTextComponent implements OnInit {

  @ViewChild('canvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('argument', { static: false })
  argument!: ElementRef<HTMLInputElement>;
  @ViewChild('area', { static: false })
  area!: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {

  }

  renderTinyText() {
    const s = this.area.nativeElement.value;
    const ctx = this.canvas.nativeElement.getContext('2d');
    if(!ctx) return;
    const img = new Image();
    var xs=0;
    var xsm=0;
    var ys=1;
    for(var i=0;i<s.length;i++) {
        if(s[i] == '\n') {ys++;xs=0;}
        else if(32 <= s.charCodeAt(i) && s.charCodeAt(i) <= 126) {
          xs++;
          if(xsm < xs) xsm = xs;
        }
    }
    this.canvas.nativeElement.width = xsm*4;
    this.canvas.nativeElement.height = ys*6;
    img.onload = () => {
      var x=0;
      var y=0;
      for(i=0;i<s.length;i++) {
        if(s[i] == '\n') {y++; x=0;}
        else if(32 <= s.charCodeAt(i) && s.charCodeAt(i) <= 126) {ctx.drawImage(img, Math.min(s.charCodeAt(i)*4, 127*4), 0, 4, 6, x*4, y*6, 4, 6);
        x++};
        }
    }
    img.onerror = err => { throw err }
    if(this.argument.nativeElement.checked) img.src = 'assets/4x6tw.png'; else img.src = 'assets/4x6.png';
  }
}
