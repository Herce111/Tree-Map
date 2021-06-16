import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class TreeViewService {

  public breadCrumb=[];
  public itemList = new BehaviorSubject<Item[]>([
    new Item({
      id: 1, nombre: 'Tomo_01_Proyecto de Ley', caratula: false, hijos: [
        new Item({id: 2, nombre: 'Libro_01_Texto Articulado de la Ley', caratula: true, hijos: [], file:'Texto Articulado de la Ley.pdf'}),
        new Item({ id: 3, nombre: 'Libro_02_Anexo I', caratula: true, hijos: [
          new Item({id: 4, nombre: 'Pieza_01_Estado Letra A', caratula: true, hijos: [], file:'Estado Letra A.pdf'}),
          new Item({id: 5, nombre: 'Pieza_02_Cuadros Consolidado', caratula: true, hijos: [], file:'Cuadros Consolidado.pdf'}),
          new Item({id: 6, nombre: 'Pieza_03_Estado Letra B', caratula: true, hijos: [], file:'Estado Letra B.pdf'}),
        ]}),
        new Item({id: 7, nombre: 'Libro_03_Anexo II', caratula: true, hijos: [], file:'Anexo II.pdf'}),
        new Item({id: 8, nombre: 'Libro_04_Anexo III', caratula: false, hijos: [], file:'Anexo III.pdf'}),
        new Item({id: 9, nombre: 'Libro_05_Anexo IV', caratula: false, hijos: [], file:'Anexo IV.pdf'}),
        new Item({id: 10, nombre: 'Libro_06_Anexo V', caratula: false, hijos: [], file:'Anexo V.pdf'}),
        new Item({id: 11, nombre: 'Libro_07_Anexo VI', caratula: true, hijos: [], file:'Anexo VI.pdf'}),
        new Item({id: 12, nombre: 'Libro_08_Anexo VII', caratula: true, hijos: [], file:'Anexo VII.pdf'}),
        new Item({id: 13, nombre: 'Libro_09_Pormenor de los Estados de Gastos e Ingresos', caratula: true, hijos: [], file:'Pormenor de los Estados de Gastos e Ingresos.pdf'}),
        new Item({id: 14, nombre: 'Libro_10_Presupuesto de Gatos Consolidados por Secciones y Articulos', caratula: true, hijos: [], file:'Presupuesto de Gatos Consolidados por Secciones y Articulos.pdf'}),
      ]
    }),
    new Item({id:15, nombre: 'Tomo_02_Cortes de Aragón', caratula:true, hijos: [], file:"Cortes de Aragón.pdf"}),
    new Item({id:16, nombre: 'Tomo_03_Presidencia y Relaciones Institucionales', caratula:true, hijos: [], file:"Presidencia y Relaciones Institucionales.pdf"}),
    new Item({id:17, nombre: 'Tomo_04_Ciudadanía y Derechos Sociales', caratula:true, hijos: [], file:"Ciudadanía y Derechos Sociales.pdf"})
  ]);
constructor() { }

  private deepFind(id: number, item: Item, maxLevel: number = Infinity, level: number = 0) {
    if (item.id === id) {
      return item;
    }

    if (level >= maxLevel) {
      return null;
    }

    for (const hijo of item.hijos) {
      const itemFound = this.deepFind(id, hijo, maxLevel, level + 1);
      if (itemFound) { return itemFound; }
    }

    return null;
  }

  public someChildHasIdOf(id: number, item: Item){
    // return item.hijos.reduce(
    //   (acc: boolean, i: Item) =>
    //     acc ? acc : i.id === id || this.someChildHasIdOf(id, i),
    //   false
    // );
    
    // if (item.id === id) {
    //   return true;
    // }
    //console.log('someChildHasIdOf', id, item.id, item.id === id);
    return item.hijos.some(i => i.id === id || this.someChildHasIdOf(id, i));


    // for (const hijo of item.hijos) {
    //   const itemFound = this.someChildHasIdOf(id, hijo);
    //   if (itemFound) { return true; }
    // }

    // return false;
  }

  private getChildrenCount(item: Item) {
  return item.hijos.reduce((acc, it) => acc + this.getChildrenCount(it), item.hijos.length);
}

addItem(newItem: Item, parentId: number, parentMaxLevelAllowed: number) {
  const itemList = this.itemList.getValue();
  newItem.id = itemList.reduce((acc, it) => acc + this.getChildrenCount(it), itemList.length) + 1;
  if (parentId) {
    const item = itemList.reduce((found, it) => found
      ? found
      : this.deepFind(parentId, it, parentMaxLevelAllowed), null);
    if (!item) { throw new Error('Parent item not allowed'); }
    item.hijos.push(newItem);
  } else {
    itemList.push(newItem);
  }
  this.itemList.next(itemList);
}

findItem(id: number) {
  const itemList = this.itemList.getValue();
  return itemList.reduce((found, it) => found ? found : this.deepFind(id, it), null);
}

editItem(id: number, newItem: Item) {
  const itemList = this.itemList.getValue();
  const item = itemList.reduce((found, it) => found ? found : this.deepFind(id, it), null);
  if (!item) { throw new Error('Item not found'); }
  Object.assign(item, newItem);
  item.id = id;

  this.itemList.next(itemList);
}


private parentFind(id: number, item: Item) {
  if (item.id === id) {
    return item;
  }
  

  for (const hijo of item.hijos) {
    const itemFound = this.parentFind(id, hijo);
    if (itemFound) { return [item, hijo] }
  }

  return null;
}

findParents(id: number) {
  const itemList = this.itemList.getValue();
  return itemList.reduce((found, it) => found ? found : this.parentFind(id, it), null);
}

}
