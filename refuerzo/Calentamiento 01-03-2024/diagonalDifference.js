function diagonalDifference(arrNum) {
    let sum1 = 0, sum2 = 0, resultFinal;
    const result1 = sumPrimaryDiagonal(arrNum);
    const result2 = sumSecondDiagonal(arrNum);
    
    result1.forEach((num) => {
        sum1 += num;
    });

    result2.forEach((num) => {
        sum2 += num;
    });

    resultFinal = Math.abs(sum1 - sum2);
    
    console.log(`La diferencia absoluta es: ${resultFinal}.`);
}

function sumPrimaryDiagonal(arrNum) {
    let diagonal1 = [];

    for (let i = 1; i <= 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i-1 === j) {
                diagonal1.push(arrNum[i][j]);
            }
        }
    }

    return diagonal1;
}

function sumSecondDiagonal(arrNum) {
    let diagonal2 = [], count = 2;

    for (let i = 1; i <= 3; i++) {
        for (let j = 2; j >= 0; j--) {
            if (count === j) {
                diagonal2.push(arrNum[i][j]);
            }
        }
        count--;
    }

    return diagonal2;
}


function iniciarPrograma() {
    const matrizCuadrada = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];
    diagonalDifference(matrizCuadrada);
}

iniciarPrograma();