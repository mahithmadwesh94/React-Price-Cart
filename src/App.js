import './App.css';
import PriceCard from './components/price-card/price-card.component';
import price_data from './data';

function App() {
  const collection = price_data
  return (

    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            collection.map(({ title, price, ...OtherProps }) => (
              <PriceCard title={title} price={price} {...OtherProps} />
            ))
          }
        </div>
      </div>
    </section>

  );
}

export default App;
