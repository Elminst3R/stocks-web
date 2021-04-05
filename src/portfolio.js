import React, { useState, useEffect } from 'react';

function Portfolio(props) {

  const [currentWallet, setCurrentWallet] = useState();
  const [currentPortfolio, setCurrentPortfolio] = useState();


  const fetchWallet = async () => {
    const res = await fetch(`http://localhost:3000/api/v1/wallet`);
    let json = await res.json();
    console.log(json);
    setCurrentWallet(json)
  }

  const fetchPortfolio = async () => {
    const res = await fetch(`http://localhost:3000/api/v1/portfolio`);
    let json = await res.json();
    console.log('this is the portfolio json', json);
    setCurrentPortfolio(json);
  }

  useEffect(() => {
    console.log('this runs only once on component load')
    fetchWallet()
    fetchPortfolio()
  }, [])

  const sellStock = async (id) => {
    console.log('selling the stock with an id', id)

    fetch(`http://localhost:3000/api/v1/portfolio/${id}`, { method: 'DELETE' })
    alert('Sold!')
    window.location.reload();
  }

  return (
    <div className={'border p-5'}>

      <h1 className={'text-xl font-bold'}>Portfolio</h1>
      {currentPortfolio && <table style={{ width: '100%' }}>
        <thead>
          <th className={'border'}>Stock</th>
          <th className={'border'}>Quantity</th>
          <th className={'border'}>Value</th>
        </thead>
        <tbody>
          {currentPortfolio.map((item, idx) => {
            return <tr key={idx}>
              <td className={'border text-center'}>{item.symbol}</td>
              <td className={'border text-center'}>{item.quantity}</td>
              <td className={'border text-center'}>{item.price}</td>
              <td className={'border text-center p-6'}>
                <span onClick={() => {
                  // this is JS / function within a function 
                  sellStock(item.id)
                }} className={'border bg-red-600 cursor-pointer rounded text-white p-2 pl-4 pr-4'}>Sell</span>
              </td>
            </tr>
          })}

        </tbody>
      </table>}

      {!currentPortfolio && <h1>Loading...</h1>}

      <br />
      <br />
      <br />

      {currentWallet && <h1 className={'text-xl font-bold'}>Current Wallet Value: ${currentWallet.value}</h1>}

    </div >
  );
}

export default Portfolio;