function cpfFormatter(cpf: string){
    const badChars = /[^\d]/g;
    const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    const cpfFormatted = new String(cpf).replace(badChars, "");

    return cpfFormatted.replace(mask, "$1.$2.$3-$4");
}

function nameFormatter(name: string){
    const nameFormatted = name.split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' ');

    return nameFormatted;
}

export { cpfFormatter, nameFormatter }