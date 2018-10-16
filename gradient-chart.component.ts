import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient-chart',
  templateUrl: './gradient-chart.component.html',
  styleUrls: ['./gradient-chart.component.css']
})
export class GradientChartComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    let lower_radientColors = ['eb3723', 'f1511b', 'f7740f', 'f87a0c', 'ec9b0f', 
    'cca325', '94b14a', '54c274', '28cd92', '18d19c'];
    let upper_radient_colors = ['eb3723', 'f1511b', 'f7740f', 'f87a0c', 'ec9b0f', 
    'cca325', '94b14a', '54c274', '28cd92', '18d19c'];
    let total_division = 10;
    let dvsn_to_show = 3;

    this.customise_arc(lower_radientColors, upper_radient_colors, dvsn_to_show, total_division)
  }
  customise_arc(lower_radientColors, upper_radient_colors, dvsn_to_show, total_division) {
    console.log(document.getElementById('lighten-canvas').style)
    this.drawMultiRadiantCircle(50, 100, 60, "lighten-canvas", lower_radientColors, lower_radientColors.length, lower_radientColors.length, true, false)
    this.drawMultiRadiantCircle(50, 100, 60, "darken-canvas", upper_radient_colors, total_division, dvsn_to_show, false, false)
  }
  drawMultiRadiantCircle(xc, yc, r, element, radientColors, total_division, dvsn_to_show,
    apply_shadow?: boolean, format_color?: boolean) {
    var canvas: any = document.getElementById(element);

    var partLength = (1 * Math.PI) / (total_division);
    var start = Math.PI;
    var gradient = null;
    var startColor = null, endColor = null;
    var previous_gradient_color = radientColors[0];

    var ctx = canvas.getContext("2d");

    let opacity = 0.1;
    // const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    const _opacity = '3'.toString();

    for (var i = 0; i < dvsn_to_show; i++) {
      if (format_color == true) {
        if (((i + 1) / total_division) < 1 / 3) {
          startColor = previous_gradient_color;
          endColor = startColor;
        } else if (((i + 1) / total_division) < 2 / 3) {
          startColor = previous_gradient_color;
          if (i==3)
          endColor = radientColors[1];
          else
          endColor = startColor;
        } else {
          startColor = endColor;
          if (i==7)
          endColor = radientColors[2];
          else
          endColor = startColor;
        }
      }
      else {
        startColor = radientColors[(i % radientColors.length)];
        endColor = radientColors[(((i + 1) % radientColors.length))];
      }

      // x start / end of the next arc to draw
      var xStart = xc + Math.cos(start) * r;
      var xEnd = xc + Math.cos(start + partLength) * r;
      // y start / end of the next arc to draw
      var yStart = yc + Math.sin(start) * r;
      var yEnd = yc + Math.sin(start + partLength) * r;

      ctx.beginPath();

      gradient = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
      gradient.addColorStop(0, '#'+startColor);
      if (i != (radientColors.length - 1)) {
        gradient.addColorStop(1, '#'+endColor);
      }
      previous_gradient_color = endColor

      ctx.strokeStyle = gradient;
      ctx.arc(xc, yc, r, start, start + partLength);
      ctx.lineWidth = 12;
      ctx.lineCap = "round";

      if (apply_shadow == true) {
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 9;
        ctx.shadowColor = radientColors[(i % radientColors.length)];
      }
      ctx.stroke();
      ctx.closePath();

      start += (partLength);
    }
  }

    addAlpha(color: string, opacity: number) {
      // coerce values so ti is between 0 and 1.
      const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
      return color + _opacity.toString(16).toUpperCase();
    }

    addHexColor(c1, c2) {
      var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
      while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
      return hexStr;
    }
  }
