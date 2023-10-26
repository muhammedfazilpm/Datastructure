function binary(target){
    
    const arr=[0,1,3,5,7,9,20]

    let left=0
    let right=arr.length-1
 
    while(left<=right){
     
        let mid=Math.floor((left+right)/2)
        
        if(arr[mid]==target){
            return mid
        }
        else if(target<arr[mid]){
            right= mid-1
        }
        else{
            left =left+1
        }
    }
}

console.log(binary(0))