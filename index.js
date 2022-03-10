function handleForm(form) {
    num1 = parseInt(form.num1.value);
    num2 = parseInt(form.num2.value);
    areAmicable = false;
    if (!(isNaN(num1) || isNaN(num2))) {
        areAmicable = amicable(num1, num2);
    }
    notStr = "";
    if (!areAmicable) {
        notStr = "not "
    }
    outputStr = "The numbers: " + num1 + " and " + num2 + " are " + notStr + "amicable";
    document.getElementById("output").innerHTML = outputStr;
}

function amicable(x, y) {
    xfactors = getFactors(x);
    yfactors = getFactors(y);
    if (sumArray(xfactors) == sumArray(yfactors)) {
        return true;
    }
    return false;
}

function getFactors(num) {
    ans = []
    count = 0;
    for (i = 0; i < Math.sqrt(num); i++) {
        if (isFactor(i, num)) {
            ans[count] = i;
            ans[count + 1] = num / i;
            count += 2;
        }
    }
    return ans;
}

function isFactor(f, num) {
    return num % f == 0;
}

function sumArray(numbers) {
    sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}