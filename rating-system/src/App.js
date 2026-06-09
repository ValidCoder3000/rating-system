import Star from './components/Star'
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import {useState} from 'react'

function App() {
  let clicked = true;

  const [isOpen, setIsOpen] = useState(true);

  const starNum = [
    {index: 1, name: 'Star1', heading: 'Thats a start'},
    {index: 2, name: 'Star2', heading: 'We are getting somewhere!'},
    {index: 3, name: 'Star3', heading: 'Comon now, we can do this!!!'},
    {index: 4, name: 'Star4', heading: "Yeeee hawwww, you're making biscuits now!!!"},
    {index: 5, name: 'Star5', heading: "Well bend me over and suck my teeth...YOU DID IT :D "},
  ];

  function handleClose() {
    setIsOpen(false)
  }

  return (
    <div className='container'>
      <Dialog isOpen={isOpen} onClose={handleClose}/>
      <StarRating starNum={starNum} />
    </div>
  );
}

export default App;
