class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    prepend(value){
        const node=new Node(value)
        if(this.size==0){
            this.head=node
            this.tail=node
        }
        else{
            node.next=this.head
            this.head=node

        }

        this.size++

    }
    append(value){
        let node=new Node(value)
        if(this.size==0){
         this.head=node
         this.tail=node
        }
        else{
          this.tail.next=node
          this.tail=this.tail.next

        }
        this.size++
    }
print(){
    let curr=this.head
    let a=[]
    while(curr){
        a.push(curr.value)
        curr=curr.next
    }
    console.log(a.toString())
}
lastvalue(){
    return this.tail.value
}
sizes(){
    return this.size
}


}

let list=new Linkedlist()


list.append(4)
list.append(5)
console.log(list.sizes())
console.log(list.lastvalue())
list.print()