const phraseWithALotOfA = 'La vaca avanza hacia la pradera';
const countAppearances = (str: string , char: string) => {
    
   let count = 0;

   for(let i = 0; i < str.length; i++){
      if(str[i] != char){
         
         continue;
      };
      
      count++;
   };
   return count;
};
console.log(countAppearances(phraseWithALotOfA, 'a'));