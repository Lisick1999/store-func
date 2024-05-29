import classes from './shopItemFunc.module.css';

export const ShopItemFunc = () => {
    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£',
    };
  return <div className={classes["main-content"]}>
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className={classes["description"]}>
            {item.descriptionFull}
        </div>
        <div className={classes["highlight-window mobile"]}><div className={classes["highlight-overlay"]}></div></div>
        <div className={classes["divider"]}></div>
        <div className={classes["purchase-info"]}>
            <div className={classes["price"]}>{`${item.currency} ${item.price}`}</div>
            <button>Добавить в корзину</button>
        </div>
    </div>
//   <article>
//     <h2 className={classes["name"]}>{user.name}</h2>
//     <img src={user.avatar} alt={`${user.name} avatar`} />
//     <p>{user.status}</p>
//   </article>;
};