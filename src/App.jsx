import './App.css';
import { ShopItemFunc, } from './components/ShopItemFunc/ShopItemFunc';
import classes from './components/ShopItemFunc/shopItemFunc.module.css';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
  };
  return (
    <div className={classes["container"]}>
      <div className={classes["background-element"]}></div>
      <div className={classes["highlight-window"]}>
          <div className={classes['highlight-overlay']}></div>
      </div>
      <div className={classes["window"]}>
          <ShopItemFunc item={item} />
      </div>
    </div>
  );
}

export default App
