function StringReverser(strInput){
    let ns="Hello";
    let j=0;
    for(let i=0;i<strInput.length;i++)
    {   
        if(j===ns.length-1)
            {
                return true;
            }
        if(strInput[i]===ns[j])
        {
            j++;
        }
        else
        j=0
        
    }
    return false;

}
console.log(StringReverser("Hellrry"))
