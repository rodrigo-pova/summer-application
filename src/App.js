import React from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#ffffff',
  },
  dark: {
    foreground: '#dddddd',
    background: '#121212',
  },
};

class App extends React.Component {
  render() {
    return(
      <Content />
    );
  }
}
class Content extends React.Component {
  render() {
    return (
      <Button />
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button
        style={ {
          color: themes.dark.foreground,
          backgroundColor: themes.dark.background,
        } }
      >
        🌞/🌚
      </button>
    );
  }
}

export default App;
