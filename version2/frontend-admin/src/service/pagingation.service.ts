import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingationService {

  constructor() { }

  public pageingtations(pages: number, pagestotal: number) {
    // console.log('pageingtation', pages);
    let previous_page = pages - 1;
    let pageingtation: any[] = [];
    if (pagestotal > 1) {
      if (pages == 1) {
        previous_page = 1;
      }
      const previous = { page: previous_page, name: 'ກັບຄືນ' }
      pageingtation.push(previous);
      if (pagestotal < 7) {
        for (let index = 1; index < pagestotal + 1; index++) {
          if (index == pages) {
            const page = { page: index, name: index, active: 1 }
            pageingtation.push(page);
          } else {
            const page = { page: index, name: index, active: 0 }
            pageingtation.push(page);
          }
        }
      } else if (pagestotal > 5) {
        if (pages < 4) {
          for (let index = 1; index < 7; index++) {
            if (index == pages) {
              const page = { page: index, name: index, active: 1 }
              pageingtation.push(page);
            } else {
              const page = { page: index, name: index, active: 0 }
              pageingtation.push(page);
            }
          }
        } else if (pagestotal - 3 > pages) {

          for (let index = pages - 3; index < pages + 3; index++) {

            if (index == pages) {
              const page = { page: index, name: index, active: 1 }
              pageingtation.push(page);
            } else {
              const page = { page: index, name: index, active: 0 }
              pageingtation.push(page);
            }
          }
        } else {
          const pages_let = (pagestotal - pages) - 3;

          for (let index = (pages - 3) + pages_let; index < pagestotal + 1; index++) {

            if (index == pages) {
              const page = { page: index, name: index, active: 1 }
              pageingtation.push(page);
            } else {
              const page = { page: index, name: index, active: 0 }
              pageingtation.push(page);
            }
          }
        }
      }
      if (pages < pagestotal) {
        const Next = { page: pages + 1, name: 'ຖັດໄປ' }
        const Last = { page: pagestotal, name: 'ສຸດທ້າຍ' }
        pageingtation.push(Next); 
        pageingtation.push(Last);
      } else {
        // const Next = { page: pages, name: 'ຖັດໄປ' }
        // const Last = { page: pages, name: 'ສຸດທ້າຍ' }
        // pageingtation.push(Next);
        // pageingtation.push(Last);
      }
    }
    return pageingtation;


  }
}
