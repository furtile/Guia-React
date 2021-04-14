function MeuComponente1(props) {
    const meuNome = 'Lucas Furtile 123';
    return (
        <div className="componente-1">
            <MeuComponente2>
                <MeuComponente3 onClickIncrementar={props.onClickIncrementar}/>
            </MeuComponente2>
        </div>
    )
}

function MeuComponente2(props){
    return (
        <div className="componente-2">
            <header></header>
            <footer>{props.children}</footer>
        </div>
    )
}
        
function MeuComponente3(props){
    const [ telefone, setTelefone ] = React.useState('21 3127-3312');

    setTimeout(function() {
        setTelefone('11 3917-3111')
    }, 1500)

    return (
        <div className="componente-3">
            <MeuComponente4 telefone={telefone} onClickIncrementar={props.onClickIncrementar}/>
        </div>
    )
}

function MeuComponente4(props){
    const [ idade, setIdade ] = React.useState(28);

    setTimeout(function() {
        setIdade(29)
    }, 1000)

    return (
        <div className="componente-4">
            <p>Componente 4 {idade} - {props.telefone}</p>
            <button type="button" onClick={props.onClickIncrementar}>Incrementar</button>
        </div>
    )
}

function MeuComponente(props){
    return (
        <div className="componentes">
        <MeuComponente1 onClickIncrementar={props.onClickIncrementar}/>
        </div>
    )
}

function MeuComponenteIrmao(props) {
    return (
        <div>
            <MeuComponenteIrmao2 contador={props.contador}/>
        </div>
    )
}

function MeuComponenteIrmao2(props){

    React.useEffect(function() {
        localStorage.setItem('contador', props.contador)
    });

    return (
        <h2>Contador: { props.contador }</h2>
    )
}

function AppComponente(){
    const [ contador, incrementaContador ] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0);

    const clickIncrementa = function() {
        incrementaContador(contador + 1)
    }
    return (
        <React.Fragment>
            <MeuComponente onClickIncrementar={clickIncrementa}/>
            <MeuComponenteIrmao contador={contador}/>
        </React.Fragment>
    )
}
ReactDOM.render(
    <AppComponente />,
    document.getElementById('app')
)