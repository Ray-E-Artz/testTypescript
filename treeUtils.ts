/**
 * Created by Ray on 2/11/17.
 */

export interface treeBranch {
  name: string,
  value: number,
  branches: any[]
}

export interface treeNode {
  names: string[];
  value: number
}

export class Tree extends Array<treeBranch> {

  parseTree(): treeNode[]  {
    let nodes = [] as treeNode[];
    let node = { names: [this[0].name],
      value: this[0].value } as treeNode;
    nodes.push(node);
    return nodes;
  }

}

let aTree: Tree =
  [
    {
      'name': 'absent',
      'value': 0.5,
      'branches': []
    },
    { name: 'present',
      value: 0.5,
      branches: [
        {
          name: 'productive',
          value: .75,
          branches: []
        },
        {
          name: 'unproductive',
          value: .25,
          branches: []
        }
      ]
    }
  ] as Tree;
console.log(JSON.stringify(aTree));

let nodes: treeNode[] = aTree.parseTree();

console.log(JSON.stringify(nodes));

