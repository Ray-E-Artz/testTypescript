/**
 * Created by Ray on 2/14/2017.
 */

import { Tree } from '../utilities/tree-utils'

export namespace Kbo { //TODO embed Tree namespace here?

  export interface CpItem { // Cp = Clinical presentation
    SDC_id: string;
    display_name: string;
    tree: Tree.Branch[];
    modifiers: Tree.Branch[];
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
    readonly tree: Tree.Branch[];
//    readonly [propName: string]: any;
  }

  export function getTreeFromSdco(sdco: Sdco): Tree.Branch[] {
    return sdco.tree;
  }

  export function getTreeFromDdo(ddo: Ddo, sdc_id: string): Tree.Branch[] {
    let cpArray = ddo.clinical_presentation.filter(
      cpItem => cpItem.SDC_id === sdc_id
    );
    if (cpArray.length === 0) {
      return null as Tree.Branch[];
    } else {
      return cpArray[0].tree;
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
