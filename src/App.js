import React from 'react';

const LanguageContext = React.createContext({
  language: 'pt-br',
  toggleLanguage: () => {},
});

class App extends React.Component {
  constructor() {
    super();
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.state = {
      language: 'english',
      toggleLanguage: this.toggleLanguage,
    };
  }

  toggleLanguage() {
    this.setState((prevState) => ({
      language:
        prevState.language === 'pt-br'
          ? 'english'
          : 'pt-br',
    }));
  }

  render() {
    return (
      <LanguageContext.Provider value={ this.state } >
          <Parent />
      </LanguageContext.Provider>
    );
  }
}

class Parent extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(context) => (
          <div>
            <Child language={ context.language } />
            <button onClick={ context.toggleLanguage }>
              🇬🇧/🇧🇷
            </button>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

class Child extends React.Component {
  render() {
    const selectedLanguage = this.props.language;
    
    if (selectedLanguage === 'pt-br') {
     return <p>Olá, mundo!</p>;
    } if (selectedLanguage === 'english') {
     return <p>Hello, world!</p>;
    };
  }
}

export default App;
