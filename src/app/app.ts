import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
/*export class App {
  protected readonly title = signal('sistema-pedidos');
}*/

export class App {
  title='SISTEMAS DE PEDIDOS EN UN RESTAURANTE';
  cantidadPlatos: number=1;
  pedidos: {cantidad: number, fecha: Date}[] = [];
  allIngredients: string[]=[
    'Tomate', 'Lemon', 'Potato', 'Rice', 'Ketchup',
    'Lettuce', 'Onion', 'Cheese', 'Meat', 'Chiken']
  platillos = [
    {
      nombre: 'Super Combo Deluxe',
      ingredientes: ['Tomate', 'Lemon', 'Potato', 'Rice', 'Ketchup',
    'Lettuce', 'Onion', 'Cheese', 'Meat', 'Chiken'
      ],
      descripcion:'Nuestra especialidad con todos los ingredientes'
    },
    {
      nombre: 'Ensalada Mixta',
      ingredientes: ['Lettuce', 'Tomate', 'Onion', 'Cheese', 'Lemon'],
      descripcion: 'Ensalada fresca con aderezo de limón'
    },
    {
      nombre: 'Plato de Carnes',
      ingredientes: ['Meat', 'Chiken', 'Potato', 'Onion', 'Ketchup'],
      descripcion: 'Carnes asadas con papas y salsa'
    },
    {
      nombre: 'Arroz con Pollo',
      ingredientes: ['Rice', 'Chiken', 'Onion', 'Tomate', 'Potato'],
      descripcion: 'Arroz amarillo con pollo y vegetales'
    },
    {
      nombre: 'Hamburguesa Clásica',
      ingredientes: ['Meat', 'Cheese', 'Lettuce', 'Tomate', 'Onion', 'Ketchup'],
      descripcion: 'Hamburguesa con todos los complementos'
    },
    {
      nombre: 'Pollo al Limón',
      ingredientes: ['Chiken', 'Lemon', 'Rice', 'Potato', 'Onion'],
      descripcion: 'Pollo marinado en limón con guarnición'
    }
  ];
  platosSolicitados: number = 0;
  platosEntregados: number = 0;
  
  realizarPedido(){
    if(this.cantidadPlatos>0){
      this.pedidos.unshift({
        cantidad:this.cantidadPlatos,
        fecha:new Date()
      });
      this.cantidadPlatos+=this.cantidadPlatos;
      this.cantidadPlatos=1;
    
    }
  }

  entregarPlatos(cantidad:number){
    if(cantidad > 0 && cantidad <= this.platosSolicitados-this.platosEntregados){
      this.platosEntregados+=cantidad;
    }
  }

}