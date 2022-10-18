Part 2
1. The value of 3 is printed since that is the value of i. We get the value of i
since i was declared as a var type, which means it has no block scope and is 
therefore visible through blocks. We get the value of 3 since i gets incremented
the a number of times equal to the length of prices. Since prices is a lenght of
3, i is 3.
2. The value of 150 is printed since that is the value within discountedPrices.
Similar to q1, since discountedPrice was assigned as a var type, meaning it has 
no block scope, and it is not being reassigned to any variables outside of scope
we get this value. Walking through this algorithm, we see we get 150 since 
prices[2] = 300 and we are multiplying it by 0.5, which gets us 150.
3. The value of 150 is printed since that is the value within finalPrice. First,
since finalPrice was declared as a var, we know it has no block scope. We end up
printing it in the same scope it was declared. As far as why the value is 150,
this is because Math.round is simply rounding to the nearest integer the result
of 150*100 and then after doing so we divide by 100, which gets us the final 
result of 150.
4. This function returns an array containing the final prices of each discounted
item. This array takes the form [50, 100, 150]. The reason these are the values
we are getting is because we are pushing each discounted price into the the 
array. Since we are discounting each value in the prices array ([100, 200, 300])
by 50%, we get the array [50, 100, 150] returned. There are not scope issues
as well since we are storing the value in a var type.
5. We get an error. The reason being is because line 12 is trying to access i, 
which is an inline variable that has scope only inside the loop for which it was
created, since it was created as a type let. 
6. We get an error. This is due to the fact that since discountedPrice is of
type let, it only has scope within the block it was declared in. Since we are
trying to access discountedPrice outside of the block it was declared in, we 
get an error.
7. We print the value of 150 since that is the value within finalPrice. The 
reason we do not get an error, as we did on q6 is due to the fact that even 
though we are dealing with a let varibale which has block scope, the scope
finalPrice was declared in is the same scope we logged its value to the console.
finalPrice was modified as well in an area it has scope at. Therefore, since 
finalPrice has scope accessable from every place it was used, we get the correct
value printed and have no scope issues.
8. This function returns an array containing the final prices of each discounted
item. This array takes the form [50, 100, 150]. The reason these are the values
we are getting is because we are pushing each discounted price into the the 
array. Since we are discounting each value in the prices array ([100, 200, 300])
by 50%, we get the array [50, 100, 150] returned. There are not scope issues
as well. Although we are dealing with let variables, these variables were 
declared within the same scope from where its value was returned. Since it had
scope in every place it was used, we have no errors and return the proper value.
9. We get an error. The reason being is because line 12 is trying to access i, 
which is an inline variable that has scope only inside the loop for which it was
created, since it was created as a type const, which has the same scope as type
let.
10. We print the proper value of length, which is 3. The reason we do not get an 
error is although it is a const variable with block scope, the block at which 
we are printing this value is within the same scope in which it was declared. 
11. This function returns an array containing the final prices of each discounted
item. This array takes the form [50, 100, 150]. The reason these are the values
we are getting is because we are pushing each discounted price into the the 
array. Since we are discounting each value in the prices array ([100, 200, 300])
by 50%, we get the array [50, 100, 150] returned. There are not scope issues
as well. Although we are dealing with const variables, these variables were 
declared within the same scope from where its value was returned. Since it had
scope in every place it was used, we have no errors and return the proper value.
Recall const variables have the same scope as let variables of block scope.