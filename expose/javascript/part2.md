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
12. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseload[0]

13. Arithmetic 
    A. '3' + 2 = Output: '32' 
    This is because of javascript's automatic type conversion, which in this 
    case would convert 2 to '2', so the summed output is '32'. (adding an int
    to a string)
    B. '3' - 2 = Output: 1
    This is because of javascript's automatic type conversion, which in this
    case would convert 5 to '5', so the subtracted output is 1. (subtracting an
    int from a string)
    C. 3 + null = Output: 3
    This is because of javascript's automatic type conversion, which in this 
    case would convert null to 0, so the summed output is 3. (adding null to an
    int)
    D. '3' + null = Output: '3null'
    This is because of javascript's automatic type conversion, which in this 
    case would convert null to 'null', so the summed output is '3null'. (adding
    null to a string)
    E. true + 3 = Output: 4
    In this case, true is converted to a value of 1, so the summed output is 4.
    (Adding a boolean expression to an integer (true = 1, false = 0))
    F. false + null = Output: 0 
    In this case, we are summing a boolean to a null, therefore, the boolean is
    converted to its integer value, in this case 0, and null is converted to its
    integer value of 0, therefore we get 0 as the result.
    G. '3' + undefined = Output: '3undefined'
    In this case, undefined is converted to a string, therefore the sum is 
    '3undefined'. (undefined is converted to a string when it is added to a
    string)
    H. '3' - undefined = Output: NaN
    In this case, undefined is subtracted from a string, '3' and due to this
    is coverted to NaN. Subtracting from something that isn't a number with 
    something that isn't a number results in NaN (when subtracting undefined 
    from a string it is converted to NaN).

14. Comparison
    A. '2' > 1 = Output: true
    In this case, '2' is converted to 2, and since 2 > 1, the result is true.
    B. '2' < '12' = Output: false
    In this case, we compare '2' to '1' first, and since '2' > '1', this returns
    false.
    C. 2 == '2' = Output: true
    In this case, '2' is coverted to 2 and 2 == 2, therefore the statement 
    returns true.
    D. 2 === '2' = Output: false
    Since we are using the strict equlity operator (equality without type 
    conversion) false is the result since 2 != '2'.
    E. true == 2 = Output: false
    In this case, true is converted to 1, and since 1 != 2, this statement 
    correctly returns false.
    F. true === Boolean(2) = Output: true 
    Since Boolean(2) returns true, these 2 values are equal even without having
    to type convert. We know Boolean(2) returns true since it is not one of the
    few parameters that would return false (i.e. 0, -0, false, NaN, etc.).

15. The '==' we have most commonly seen is used to check for equality that 
allows for type conversion, while '===' checks for equality without type 
conversion. For example, 2 === '2'returns false, since the string '2' does not
equal the integer 2. On the other hand, 2 == '2' returns true since the string
'2' in this case when using the == operator converts '2' to the integer 2 and
then we check the equality of 2 == 2 which of course is true. With ===, both 
types of the values must be of the same type.

16. In separate js file.

17. The result is going to be the array [2,4,6]. The reason being is as follows.
Since we know functions can be passed around as other variable types can be, 
this program starts by sending the functions doSomething (which takes in a num
and returns that number doubled) and the array [1,2,3] to the function 
modifyArray. In here, for each value in the array, we are calling callback, 
which is really just the function doSomething we passed as an argument, on each
number in our array effectively doubling it. This is why we start with the array
[1,2,3] and end with the array [2,4,6].

18. In separate js file.

19. 
1
4
3
2

