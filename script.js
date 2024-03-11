const element = React.createElement(
  'h1', // type
  {
    className: 'title',
    onClick: () => {console.log('clicked');},
    style: { fontFamily: 'sans-serif', color: 'rgb(255, 100, 100)'}
  }, // props
  'Hello World!' // children
);

document.querySelectorAll('.button')
  .forEach(domContainer => {
    const messageId = parseInt(domContainer.dataset.messageId);

    const root = ReactDOM.createRoot(domContainer);
    
    root.render(
      React.createElement(
        'button',
        {
          onClick: () => { console.log(`liked message: ${messageId}`); }
        },
        'Like'
      )
    )
  });

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);
