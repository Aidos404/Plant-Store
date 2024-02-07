import Data from '../../../db.json'
import Ficon from '../../assets/images/Ficon.png'
import './MainBlock.css'
function Main() {
	return (
		<div>
			<div className='MainFirst'>
				<div className='text-section'>
					<h1>Цветы для вашего дома</h1>
					<p>
						Растения в кашпо станут красивым и <br />
						модным дополнением интерьера <br />
						вашей квартиры или офиса
					</p>

					<button>ПЕРЕЙТИ В КАТАЛОГ</button>
				</div>
			</div>
			<div className='MainSecond'>
				<div className='carts'>
					{Data.Data.map((item) => (
						<div className='cart1'>
							<img src={item.image} alt='' />
							<h1>{item.title}</h1>
							<p>{item.subtitle}</p>
							<button>
								Добавить в корзину <img src={Ficon} alt='' />
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Main
