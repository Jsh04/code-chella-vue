export default interface IIngresso{
    id?: number,
    nome: string,
    email: string,
    tipo_ingresso: string | number,
    dataNascimento: Date
}