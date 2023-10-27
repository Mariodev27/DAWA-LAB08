import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  codigo!: string;
  descripcion!: string;
  precio!: number;

  constructor(private productoService: ProductoService) { }

  agregarProducto() {
    const nuevoProducto: Producto = new Producto(this.codigo, this.descripcion, this.precio);
    this.productoService.agregarProducto(nuevoProducto);
  }
}
