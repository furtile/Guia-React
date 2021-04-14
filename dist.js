function MeuComponente1(props) {
  const meuNome = 'Lucas Furtile 123';
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, {
    onClickIncrementar: props.onClickIncrementar
  })));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-2"
  }, /*#__PURE__*/React.createElement("header", null), /*#__PURE__*/React.createElement("footer", null, props.children));
}

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState('21 3127-3312');
  setTimeout(function () {
    setTelefone('11 3917-3111');
  }, 1500);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone,
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28);
  setTimeout(function () {
    setIdade(29);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componente-4"
  }, /*#__PURE__*/React.createElement("p", null, "Componente 4 ", idade, " - ", props.telefone), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.onClickIncrementar
  }, "Incrementar"));
}

function MeuComponente(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, {
    onClickIncrementar: props.onClickIncrementar
  }));
}

function MeuComponenteIrmao(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MeuComponenteIrmao2, {
    contador: props.contador
  }));
}

function MeuComponenteIrmao2(props) {
  React.useEffect(function () {
    localStorage.setItem('contador', props.contador);
  });
  return /*#__PURE__*/React.createElement("h2", null, "Contador: ", props.contador);
}

function AppComponente() {
  const [contador, incrementaContador] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0);

  const clickIncrementa = function () {
    incrementaContador(contador + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, {
    onClickIncrementar: clickIncrementa
  }), /*#__PURE__*/React.createElement(MeuComponenteIrmao, {
    contador: contador
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById('app'));
