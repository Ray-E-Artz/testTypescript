/**
 * Created by Ray on 2/14/2017.
 */


export namespace Tree {

  export interface Branch {
    readonly name: string;
    readonly value: number;
    readonly branches: any[];
//    readonly [propName: string]: any;
  }

  export function parseForValues(tree: Branch[]): number[] {

    let values: number[] = [];
    fillValues(tree, 1, values);
    return values;
  }

  export function parseForNameLists(tree: Branch[]): string[][] {

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
