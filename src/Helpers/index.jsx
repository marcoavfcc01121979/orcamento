export const revisarOrcamento = (orcamento, restante) => {
    let classe;

    if((orcamento / 4) > restante) {
        classe = 'alert alert-danger';
    }else if((orcamento / 2) > restante) {
        classe = 'alert alert-warning';
    }else {
        classe = 'alert alert-success';
    }

    return classe;
}