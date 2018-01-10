 var permuteUnique = function(nums) {
     return permut(nums.sort(), []);
 };

 var permut = function(nums, partial) {
     if(nums.length === 0) {
         return [partial];
     }
     var listSol = [];
     for(var i = 0; i < nums.length; i++) {
         var endRepeated = i;
         while(endRepeated < nums.length && nums[i] === nums[endRepeated]) {
             endRepeated++;
         }

         var arrayWithoutI = nums.slice(0,i).concat(nums.slice(i + 1, nums.length));
         console.log('arrayWithoutI,',arrayWithoutI);
         var partialSol = partial.concat([nums[i]]);
         console.log('partialSol,',partialSol);
         var sol = permut(arrayWithoutI, partialSol);
         if(sol.length > 0){
             listSol = listSol.concat(sol);
             console.log('listSol,',listSol);
         }
         i = endRepeated - 1;
         console.log('endRepeated,',endRepeated);
     }
     return listSol;
 };

permuteUnique([1,1,2,3]);


var minDistance = function(word1, word2) {
    var n=word1.length;
　var m=word2.length;
　var d=[];
　var i;
　var j;
　var word1_i;
　var word2_j;
　var cost;
　if (n == 0) return m;
　if (m == 0) return n;
　for (i = 0; i <= n; i++) {
　　d[i]=[];
　　d[i][0] = i;
　}

　for (j = 0; j <= m; j++) {
　　d[0][j] = j;
　}
　
　for (i = 1; i <= n; i++) {
　　word1_i = word1.charAt(i - 1);
　　
　　for (j = 1; j <= m; j++) {
　　　word2_j = word2.charAt(j - 1);
　　　
　　　if (word1_i == word2_j) {
　　　　cost = 0;
　　　}else{
　　　　cost = 1;
　　　}
　　　d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1] + cost);
　　}
　}

　return d[n][m];
};

console.log(minDistance('sitting', 'smiling'));
