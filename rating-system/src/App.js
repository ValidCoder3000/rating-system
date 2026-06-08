import Star from './components/Star'
import StarRating from './components/StarRating';

function App() {
  const starNum = [
    {index: 0, name: 'Star0', heading: 'Thats a start'},
    {index: 1, name: 'Star1', heading: 'We are getting somewhere!'},
    {index: 2, name: 'Star2', heading: 'Comon now, we can do this!!!'},
    {index: 3, name: 'Star3', heading: "Yeeee hawwww, you're making biscuits now!!!"},
    {index: 4, name: 'Star4', heading: "Well bend me over and suck my teeth...YOU DID IT :D "},
  ]

  return (
    <div className='container'>
      <Star />
      <StarRating />
    </div>
  );
}

export default App;
