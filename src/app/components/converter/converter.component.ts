import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent {
  monedas: string[] = ['USD', 'EUR', 'ARG oficial', 'ARG blue'];

  cantidad: number = 0;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0;

  convert() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        } else if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.92;
        } else if (this.quiero === 'ARG oficial') {
          this.total = this.cantidad * 211.24;
        } else {
          this.total = this.cantidad * 386;
        }
        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.09;
        } else if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        } else if (this.quiero === 'ARG oficial') {
          this.total = this.cantidad * 230.18;
        } else {
          this.total = this.cantidad * 419;
        }
        break;
      case 'ARG oficial':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.0047;
        } else if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.0043;
        } else if (this.quiero === 'ARG oficial') {
          this.total = this.cantidad;
        } else {
          this.total = this.cantidad;
        }
        break;

      case 'ARG blue':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.0025;
        } else if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.0023;
        } else if (this.quiero === 'ARG oficial') {
          this.total = this.cantidad;
        } else {
          this.total = this.cantidad;
        }
        break;

      default:
        break;
    }
  }
}
