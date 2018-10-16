import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';
import { hex } from 'color-convert/route';

@Component({
  selector: 'app-gradient-chart',
  templateUrl: './gradient-chart.component.html',
  styleUrls: ['./gradient-chart.component.css']
})
export class GradientChartComponent implements OnInit {
  private dvsn_to_show = 8;
  private total_division = 10;

  constructor() { }
  ngOnInit() {
  }

  @ViewChild("tref") tref: ElementRef;

  ngAfterViewInit() {
    let lower_radientColors: number[] = [0xeb3723, 0xf1511b, 0xf7740f, 0xf87a0c, 0xec9b0f, 
      0xcca325, 0x94b14a, 0x54c274, 0x28cd92, 0x18d19c];
    let upper_radient_colors: number[] = [0xeb3723, 0xf1511b, 0xf7740f, 0xf87a0c, 0xec9b0f, 
      0xcca325, 0x94b14a, 0x54c274, 0x28cd92, 0x18d19c]; 

    this.customise_arc(lower_radientColors, upper_radient_colors, this.dvsn_to_show, this.total_division)
  }

  customise_arc(lower_radientColors, upper_radient_colors, dvsn_to_show, total_division) {

    let y_pos = this.tref.nativeElement.clientHeight
    let x_pos = this.tref.nativeElement.clientWidth

    let display_number = this.tref.nativeElement.children[2]
    display_number.style.top = `${y_pos/2}px`;
    display_number.style.left = `${x_pos/2}px`;

    this.drawMultiRadiantCircle(x_pos/2, y_pos/2, x_pos/3, "lighten-canvas", lower_radientColors, lower_radientColors.length, lower_radientColors.length, true)
    this.drawMultiRadiantCircle(x_pos/2, y_pos/2, x_pos/3, "darken-canvas", upper_radient_colors, total_division, dvsn_to_show, false)
  }


  drawMultiRadiantCircle(xc, yc, r, element, radientColors, total_division, dvsn_to_show,
    apply_shadow?: boolean) {

    let start_angle = 0.85;
    let total_angle = 1.30;
    var canvas: any = document.getElementById(element);

    var partLength = (total_angle * Math.PI) / (total_division);
    var start = Math.PI*start_angle;
    var gradient = null;
    var startColor = null, endColor = null;

    var ctx = canvas.getContext("2d");
    ctx.rect(100, 100, 5, 5);

    for (var i=0; i < radientColors.length; i++){
      for (var j=0; j < (total_division/radientColors.length); j++)
      {
        if (dvsn_to_show > ((i*total_division/radientColors.length)+ j))
        {
          startColor = radientColors[(i % radientColors.length)];
          if (j+1 == (total_division/radientColors.length))
            endColor = radientColors[(((i + 1) % radientColors.length))];
          else
            endColor = null;
          ctx.beginPath();

          if (start == (Math.PI*start_angle) || ((start+partLength).toFixed(2)) == ((start_angle+total_angle) * Math.PI).toFixed(2))
            ctx.lineCap = "round";
          else
            ctx.lineCap = "butt";

          // x start / end of the next arc to draw
          var xStart = xc + Math.cos(start) * r;
          var xEnd = xc + Math.cos(start + partLength) * r;
          // y start / end of the next arc to draw
          var yStart = yc + Math.sin(start) * r;
          var yEnd = yc + Math.sin(start + partLength) * r;

          gradient = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
          gradient.addColorStop(0, '#'+ startColor.toString(16));
          if (i == (radientColors.length - 1))
            endColor = null;
          if (endColor != null)
            gradient.addColorStop(0.7, '#'+ endColor.toString(16));
          ctx.strokeStyle = gradient;
          ctx.arc(xc, yc, r, start, start + partLength+0.01);
          ctx.lineWidth = 12;

          if (apply_shadow == true) {
            ctx.shadowBlur = 20;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 8;
            ctx.shadowColor = radientColors[(i % radientColors.length)];
          }
          ctx.stroke();
          start += (partLength);
        }
      }

    }

    // for (var i = 0; i < dvsn_to_show; i++) {
    //   startColor = radientColors[(i % radientColors.length)];
    //   endColor = radientColors[(((i + 1) % radientColors.length))];

    //   ctx.beginPath();

    //   gradient = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
    //   gradient.addColorStop(0, '#'+startColor);
    //   if (i != (radientColors.length - 1)) {
    //     gradient.addColorStop(0.7, '#'+endColor);
    //   }

    //   ctx.strokeStyle = gradient;
    //   ctx.arc(xc, yc, r, start, start + partLength);
    //   ctx.lineWidth = 12;
    //   ctx.lineCap = "round";

    //   if (apply_shadow == true) {
    //     ctx.shadowBlur = 20;
    //     ctx.shadowOffsetX = 0;
    //     ctx.shadowOffsetY = 8;
    //     ctx.shadowColor = radientColors[(i % radientColors.length)];
    //   }
    //   ctx.stroke();
    //   ctx.closePath();

    //   start += (partLength);
    // }
  }
}
