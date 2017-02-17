/**
 * Created by Ray on 2/14/2017.
 */

//import { Tree } from '../utilities/tree-utils'

export namespace Kbo {

  export interface Branch {
    readonly name: string;
    readonly value: number;
    readonly branches: any[];
//    readonly [propName: string]: any;
  }

  export interface CpItem { // Cp = Clinical presentation
    SDC_id: string;
    display_name: string;
    tree: Kbo.Branch[];
    modifiers: Kbo.Branch[];
//    readonly [propName: string]: any;
  }

  export interface Ddo {
    readonly DDO_id: string;
    readonly display_name: string;
    readonly clinical_presentation: CpItem[];
//    readonly [propName: string]: any;
  }

  export interface Sdco {
    readonly  SDC_id: string;
    readonly display_name: string;
    readonly tree: Kbo.Branch[];
//    readonly [propName: string]: any;
  }

  export function getTreeFromSdco(sdco: Sdco): Kbo.Branch[] {
    return sdco.tree;
  }

  export function getTreeFromDdo(ddo: Ddo, sdc_id: string): Kbo.Branch[] {
    let cpArray = ddo.clinical_presentation.filter(
      cpItem => cpItem.SDC_id === sdc_id
    );
    if (cpArray.length === 0) {
      return null as Kbo.Branch[];
    } else {
      return cpArray[0].tree;
    }
  }

  export function parseTreeForValues(tree: Branch[]): number[] {

    let values: number[] = [];
    fillValues(tree, 1, values);
    return values;
  }

  export function parseTreeForNameLists(tree: Branch[]): string[][] {

    let nameLists: string[][] = [];
    fillNameLists(tree, [], nameLists);
    return nameLists;
  }

  function fillValues(
   tree: Branch[],
   initialValue: number,
   values: number[]): void {

    for (let i = 0; i < tree.length; i++) {
      let value = initialValue * tree[i].value;
      values.push(value);
      //console.log('value: ' + value);
      fillValues(tree[i].branches, value, values );
    }
  }

  function fillNameLists(
   tree: Branch[],
   initialNameList: string[],
   nameLists: string[][]
  ): void {

    for (let i = 0; i < tree.length; i++) {
      let nameList = initialNameList.slice(0); //clone array
      nameList.push(tree[i].name);
      nameLists.push(nameList);
      //console.log('nameList: ' + JSON.stringify(nameList)) ;
      fillNameLists(tree[i].branches, nameList, nameLists );
    }
  }


}

/*
class Sdco implements Kbo.Sdco {
  getTree(): Tree.Branch[] {
    return this.tree;
  }
}
*/
