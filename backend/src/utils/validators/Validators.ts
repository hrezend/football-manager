import { AppError } from '../../utils/errors/AppError';
import { cpfFormatter, nameFormatter } from '../formatters/formatters';

function cpfValidator(cpf: string){
    if(cpf == "" || cpf == null){
        throw new AppError('CPF is a required field!', 400);   
    }

    const cpfFormatted = cpfFormatter(cpf);
    return cpfFormatted;
}

function nameValidator(name: string){
    if(name == "" || name == null){
        throw new AppError('Name is a required field!', 400);    
    }
    if(name.match(/([!,@,#,$,%,^,&,*,?,_,~])/) || name.match(/(.*[0-9])/)){
        throw new AppError('Name should not contain numbers or special characters!', 400); 
    }

    const nameFormatted = nameFormatter(name);
    return nameFormatted;
}

function dateValidator(date: string){
    return date;
}

export { cpfValidator, nameValidator, dateValidator }