const elvenSignal = prompt(`Digite o código recebido:`);
const packageSize = prompt(`Digite o tamanho da sequência:`);
const packageSize2 = parseInt(packageSize)

const findSequence = (str, i = 0) => {
    const substring = str.slice(i, i + packageSize2);
    const uniqueSignal = new Set(substring).size;
    return uniqueSignal === packageSize2 ? i + packageSize2 : findSequence(str, i + 1);
};

const result = (findSequence(elvenSignal));

alert(`O primeiro marcador aparece após o caractere ${result}`)
